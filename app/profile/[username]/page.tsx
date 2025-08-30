import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import OwnProfileActions from "./_OwnProfileActions";

type ProfileResponse = {
  user: { name: string; avatar: string | null; isAdmin: boolean; posts: number };
  stats: { gamesOwned: number; perfectedGames: number; achievementsTotal: number };
  owned: Array<{
    title: string;
    slug: string;
    icon: string;
    consoleName: string;
    consoleSlug: "ps2" | "gamecube" | string;
    unlocked: number;
    total: number;
    masteredAt: string | null;
  }>;
  masters: Array<{
    title: string;
    slug: string;
    icon: string;
    consoleSlug: "ps2" | "gamecube" | string;
    masteredAt: string;
  }>;
};

function fmtDateISO(dateLike: string | null) {
  if (!dateLike) return "";
  const d = new Date(dateLike);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const h = await headers();
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host");
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(
    `${baseUrl}/api/profile/${encodeURIComponent(params.username)}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Profile</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">User not found.</div>
      </div>
    );
  }
  const data = (await res.json()) as ProfileResponse;

  const { user, stats, owned, masters } = data;

  const ps2 = owned.filter((g) => g.consoleSlug === "ps2").slice(0, 10);
  const gc = owned.filter((g) => g.consoleSlug === "gamecube").slice(0, 10);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: avatar + name + badge */}
        <div className="flex items-center gap-4 min-w-0">
          <Image
            src={user.avatar || "/avatar_placeholder.png"}
            alt={user.name}
            width={64}
            height={64}
            className="rounded-full object-cover shrink-0"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold truncate">{user.name}</h1>
              {user.isAdmin && (
                <span className="text-xs px-2 py-1 rounded bg-indigo-600 text-white shrink-0">
                  Admin
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: actions — full width on mobile, right-aligned on md+ */}
        <div className="w-full md:w-auto md:self-auto">
          <div className="flex justify-end">
            <OwnProfileActions name={params.username} />
          </div>
        </div>
      </section>

      {/* Stats (clickable) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Games Owned" value={stats.gamesOwned} href="#library" />
        <StatCard label="Perfected Games" value={stats.perfectedGames} href="#perfected" />
        <StatCard
          label="Achievements"
          value={stats.achievementsTotal}
          href={`/profile/${encodeURIComponent(user.name)}/library`} // was /achievements
        />
        <StatCard
          label="Posts"
          value={user.posts}
          href={`/profile/${encodeURIComponent(user.name)}/posts`}
        />
      </section>

      {/* Latest Masters (list) */}
      <section id="perfected" className="space-y-3">
        <h2 className="text-lg font-semibold">Latest Games Mastered</h2>
        {masters.length === 0 ? (
          <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
            No perfected games yet.
          </div>
        ) : (
          <div className="overflow-x-auto rounded border border-zinc-800">
            <table className="min-w-full text-sm">
              <thead className="bg-zinc-900/50 text-zinc-300">
                <tr>
                  <Th className="w-14">Icon</Th>
                  <Th>Title</Th>
                  <Th>Console</Th>
                  <Th className="text-right pr-4">Mastery Date</Th>
                </tr>
              </thead>
              <tbody>
                {masters.map((m) => (
                  <tr
                    key={`${m.slug}-${m.masteredAt}`}
                    className="border-t border-zinc-800"
                  >
                    <Td>
                      <Image
                        src={m.icon}
                        alt={m.title}
                        width={32}
                        height={32}
                        className="rounded object-cover"
                      />
                    </Td>
                    <Td>
                      <Link
                        href={`/games/${m.consoleSlug}/${m.slug}`}
                        className="hover:underline"
                      >
                        {m.title}
                      </Link>
                    </Td>
                    <Td className="capitalize">{m.consoleSlug}</Td>
                    <Td className="text-right pr-4">
                      {fmtDateISO(m.masteredAt)}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Libraries side-by-side */}
      <section id="library" className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PS2 column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">PlayStation 2</h2>
              <Link
                href={`/profile/${encodeURIComponent(user.name)}/library/ps2`}
                className="text-sm text-indigo-400 hover:underline"
              >
                View all
              </Link>
            </div>
            {ps2.length === 0 ? (
              <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
                No PS2 games yet.
              </div>
            ) : (
              <GameListCompact rows={ps2} />
            )}
          </div>

          {/* GameCube column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">GameCube</h2>
              <Link
                href={`/profile/${encodeURIComponent(user.name)}/library/gamecube`}
                className="text-sm text-indigo-400 hover:underline"
              >
                View all
              </Link>
            </div>
            {gc.length === 0 ? (
              <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
                No GameCube games yet.
              </div>
            ) : (
              <GameListCompact rows={gc} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- small presentational helpers ---------- */

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href?: string;
}) {
  const inner = (
    <div className="rounded border border-zinc-800 p-4 bg-zinc-900/40 hover:bg-zinc-900 transition">
      <div className="text-xs uppercase tracking-wide text-zinc-400">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
  return href ? <Link href={href} className="block">{inner}</Link> : inner;
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <th className={`text-left font-medium px-3 py-2 ${className}`}>{children}</th>;
}
function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
}

function GameListCompact({
  rows,
}: {
  rows: Array<{
    title: string;
    slug: string;
    icon: string;
    consoleSlug: string;
    unlocked: number;
    total: number;
  }>;
}) {
  return (
    <div className="overflow-x-auto rounded border border-zinc-800">
      <table className="min-w-full text-sm">
        <thead className="bg-zinc-900/50 text-zinc-300">
          <tr>
            <Th className="w-14">Icon</Th>
            <Th>Title</Th>
            <Th className="text-right pr-4">Unlocked</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((g) => (
            <tr key={g.slug} className="border-t border-zinc-800">
              <Td>
                <Image
                  src={g.icon}
                  alt={g.title}
                  width={32}
                  height={32}
                  className="rounded object-cover"
                />
              </Td>
              <Td>
                <Link
                  href={`/games/${g.consoleSlug}/${g.slug}`}
                  className="hover:underline"
                >
                  {g.title}
                </Link>
              </Td>
              <Td className="text-right pr-4">
                {g.unlocked}
                {g.total > 0 ? ` / ${g.total}` : ""}
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
