import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import LibraryRow, { type UnlockedAch } from "./_LibraryRow";

function consoleNameFromParam(param: string): string | null {
  const p = param.toLowerCase();
  if (p === "ps2") return "PlayStation 2";
  if (p === "gamecube") return "GameCube";
  return null;
}

function toISODate(d: Date | string | null | undefined) {
  if (!d) return "";
  const date = d instanceof Date ? d : new Date(d);
  return isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
}

export default async function UserConsoleLibraryPage({
  params,
}: {
  params: { username: string; console: string };
}) {
  const consoleName = consoleNameFromParam(params.console);
  if (!consoleName) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Library</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">
          Unknown console: {params.console}
        </div>
      </div>
    );
  }

  // Ensure user exists
  const user = await prisma.user.findUnique({
    where: { name: params.username },
    select: { id: true, name: true },
  });
  if (!user) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Library</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">
          User not found.
        </div>
      </div>
    );
  }

  // Owned games for this console, include user's unlocked achievements (title, description, image)
  const rows = await prisma.userGame.findMany({
    where: {
      userId: user.id,
      owned: true,
      game: { console: { name: consoleName } },
    },
    select: {
      _count: { select: { achievements: true } }, // user's unlocked count
      achievements: {
        select: {
          achievement: {
            select: { title: true, description: true, image: true },
          },
          earnedAt: true,
        },
        orderBy: { earnedAt: "desc" },
      },
      game: {
        select: {
          slug: true,
          title: true,
          releaseDate: true,
          achievements: { select: { id: true } }, // total
        },
      },
    },
    orderBy: { game: { title: "asc" } },
  });

  const list = rows.map((r) => {
    const total = r.game.achievements.length;
    const unlocked = r._count.achievements;
    const unlockedAchievements: UnlockedAch[] = r.achievements.map((ua) => ({
      title: ua.achievement.title,
      description: ua.achievement.description,
      image: ua.achievement.image ?? null,
    }));

    return {
      slug: r.game.slug,
      title: r.game.title,
      releaseDate: toISODate(r.game.releaseDate),
      icon: `/games/${r.game.slug}/icon.png`,
      consoleSlug: params.console,
      unlocked,
      total,
      unlockedAchievements,
    };
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          {user.name}&apos;s {consoleName} Library
        </h1>
        <Link
          href={`/profile/${encodeURIComponent(user.name)}/library`}
          className="text-sm text-indigo-400 hover:underline"
        >
          Back to library selector
        </Link>
      </div>

      {list.length === 0 ? (
        <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
          No games yet.
        </div>
      ) : (
        <div className="overflow-x-auto rounded border border-zinc-800">
          <table className="min-w-full text-sm">
            <thead className="bg-zinc-900/50 text-zinc-300">
              <tr>
                <Th className="w-14">Icon</Th>
                <Th>Title</Th>
                <Th>Release Date</Th>
                <Th className="text-right pr-4">Achievements unlocked</Th>
              </tr>
            </thead>
            <tbody>
              {list.map((g) => (
                <LibraryRow
                  key={g.slug}
                  game={g}
                  colSpan={4} // matches number of columns in thead
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th className={`text-left font-medium px-3 py-2 ${className}`}>{children}</th>
  );
}
