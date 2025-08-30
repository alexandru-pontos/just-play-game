"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import OwnershipButton from "./_OwnershipButton";

type UserGameLite = {
  owned?: boolean;
  achievements?: Array<unknown>;
  achievementsCount?: number;
  _count?: { achievements: number };
};

export default function GamePage() {
  const { slug, console } = useParams() as { slug: string; console: string };
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user?.name;
  const isAdmin = !!session?.user?.isAdmin;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/games/${slug}`, { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) setGame(res.ok ? data : null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Early render branches are OK now because we DON'T call any hooks below this point.
  if (loading) return <p className="p-10 text-center">Loading game...</p>;

  if (!game) {
    return (
      <div className="py-20 text-center text-2xl font-bold text-red-500">
        This game does not exist in the library.
      </div>
    );
  }

  const releaseStr =
    game.releaseDate ? new Date(game.releaseDate).toISOString().slice(0, 10) : "N/A";

  const iconSrc = game.iconImage ?? `/games/${game.slug}/icon.png`;
  const coverSrc = game.coverImage ?? `/games/${game.slug}/cover.png`;

  // Owners (prefer owned===true; tolerate missing flag)
  const owners: UserGameLite[] = Array.isArray(game.users)
    ? (game.users as UserGameLite[]).filter((u) => u.owned !== false)
    : [];

  // Build histogram as a plain value (no hooks)
  let distributionData: Array<{ unlocked: number; users: number }> = [];
    if (owners.length) {
      const map = new Map<number, number>();
      for (const u of owners) {
        const unlocked = u._count?.achievements ?? 0;
        map.set(unlocked, (map.get(unlocked) || 0) + 1);
      }
      distributionData = [...map.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([unlocked, users]) => ({ unlocked, users }));
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-10">
      {/* LEFT */}
      <div className="md:col-span-3 space-y-6">
        <h1 className="text-3xl font-bold">{game.title}</h1>
        <p className="text-sm text-zinc-400">{game.console?.name || "Unknown Console"}</p>

        <div className="flex items-center gap-6">
          <Image src={iconSrc} alt="icon" width={64} height={64} className="rounded" />
          <div className="text-sm space-y-1">
            <p><strong>Developer:</strong> {game.developer || "N/A"}</p>
            <p><strong>Publisher:</strong> {game.publisher || "N/A"}</p>
            <p><strong>Release:</strong> {releaseStr}</p>
          </div>
        </div>

        {/* Game edit button - Admin only */}
        {isAdmin && (
            <div className="mt-2">
              <Link
                href={`/games/${console}/${game.slug}/edit`}
                className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white text-sm"
              >
                Edit game page
              </Link>
            </div>
        )}

        {/* Description box */}
        {game.description && (
          <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-200 leading-relaxed">
            {game.description}
          </div>
        )}

        {/* Screenshots from DB array */}
        {Array.isArray(game.screenshots) && game.screenshots.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {game.screenshots.map((src: string, i: number) => (
              <Image
                key={src + i}
                src={src}
                alt={`screenshot ${i + 1}`}
                width={400}
                height={300}
                className="rounded object-cover w-full"
              />
            ))}
          </div>
        )}

        {/* Achievements */}
        
        <div>
          <h2 className="text-xl font-bold mb-2">Achievements</h2>
          {Array.isArray(game.achievements) && game.achievements.length > 0 ? (
            <ul className="space-y-4">
              {game.achievements.map((ach: any) => {
                const iconSrc = ach.image || "/ach_placeholder.png";
                /* If user doesn't own game, hide button */
                const canToggle = isLoggedIn && game.currentUserOwnsGame;
                /* Ach. unlocked-ness check */
                const isUnlocked = Array.isArray(game.currentUserUnlockedIds)
                  ? game.currentUserUnlockedIds.includes(ach.id)
                  : false;

                /* For unlock counter on each achievement */
                const toggle = async () => {
                  await fetch(`/api/games/${game.slug}/achievements/${ach.id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ unlocked: !isUnlocked }),
                  });
                  // refetch game to update counts + button + grayscale
                  const res = await fetch(`/api/games/${game.slug}`, { cache: "no-store" });
                  const fresh = await res.json();
                  setGame(fresh);
                };

                return (
                <li key={ach.id} className="flex items-center gap-4 bg-zinc-800 rounded p-3">
                  {/* Toggle button (only if logged-in) */}
                  {canToggle && (
                    <button
                      onClick={toggle}
                      className="px-2 py-1 text-xs rounded bg-amber-500 hover:bg-amber-600 text-black shrink-0"
                    >
                      {isUnlocked ? "Set as locked" : "Set as unlocked"}
                    </button>
                  )}
                  {/* Icon w grayscale if locked */}
                  <img
                    src={iconSrc}
                    alt={ach.title}
                    className={`h-12 w-12 rounded object-cover ${isUnlocked ? "" : "grayscale opacity-70"}`}
                  />

                  {/* Ach. details */}
                  <div className="flex-1">
                    <h3 className="font-semibold">{ach.title}</h3>
                    <p className="text-sm text-zinc-400">{ach.description}</p>
                  </div>

                  {/* Unlock counter */}
                  <div className="text-right text-sm text-zinc-300 shrink-0">
                    {ach.unlocks ?? 0} Unlocks
                  </div>
                </li>
                )
              })}
            </ul>
          ) : (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
              This game has no achievements yet.
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        <Image src={coverSrc} alt="cover" width={400} height={600} className="rounded w-full" />

        <div className="space-y-4">
          {isLoggedIn && (
            <div className="mt-2">
              <OwnershipButton slug={game.slug} consoleParam={console} onChanged={() => {
                // refetch game to update to new owner count
                setLoading(true);
                fetch(`/api/games/${game.slug}`, { cache: "no-store" })
                  .then(r => r.json())
                  .then(d => setGame(d))
                  .finally(() => setLoading(false));
              }} />
            </div>
          )}

          <h2 className="text-lg font-bold mb-2">Achievement Distribution</h2>

          {owners.length === 0 ? (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
              No registered users own this game.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={distributionData}>
                <XAxis dataKey="unlocked" />
                <YAxis allowDecimals={false} />
                <Tooltip
                  formatter={(value: any) => [Math.trunc(Number(value) || 0), "Users"]}
                  labelFormatter={(label: any) => `Achievements: ${label}`}
                />
                <Bar dataKey="users" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Latest Masters</h2>

          {(game.achievements?.length ?? 0) === 0 ? (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
              Game has no achievements!
            </div>
          ) : (Array.isArray(game.masters) && game.masters.length > 0) ? (
            <ul className="grid grid-cols-1 gap-3">
              {game.masters.map((m: any) => (
                <li key={m.name}>
                  <a
                    href={`/profile/${encodeURIComponent(m.name)}`}
                    className="flex items-center gap-3 rounded bg-zinc-800 p-3 hover:bg-zinc-700 transition"
                  >
                    <img
                      src={m.avatar || "/avatar_placeholder.png"}
                      alt={m.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div className="text-sm">
                      <div className="font-semibold">{m.name}</div>
                      {/* TODO: show completion date in small text */}
                      {/* <div className="text-zinc-400 text-xs">{new Date(m.completedAt).toISOString().slice(0,10)}</div> */}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
              No masters yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
