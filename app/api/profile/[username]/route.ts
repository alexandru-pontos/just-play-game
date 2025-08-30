import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function toConsoleSlug(name?: string | null) {
  const n = (name || "").toLowerCase();
  if (n.includes("cube")) return "gamecube";
  if (n.includes("ps2") || n.includes("playstation 2")) return "ps2";
  return n.replace(/\s+/g, "-") || "unknown";
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ username: string }> } // <-- read "username"
) {
  const { username } = await context.params;        // <-- await & use "username"

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  // 1) Find the user by their profile name
  const user = await prisma.user.findUnique({
    where: { name: username },                      // <-- use username here
    select: {
      id: true,
      name: true,
      avatar: true,
      isAdmin: true,
      _count: { select: { posts: true } },
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // 2) Owned games with per-game unlocked counts + timestamps
  const ownedUG = await prisma.userGame.findMany({
    where: { userId: user.id, owned: true },
    select: {
      _count: { select: { achievements: true } },   // user's unlocked for that game
      achievements: { select: { earnedAt: true } }, // timestamps for masteredAt
      game: {
        select: {
          id: true,
          slug: true,
          title: true,
          coverImage: true,
          console: { select: { name: true } },
          achievements: { select: { id: true } },   // total achievements for the game
        },
      },
    },
  });

  const owned = ownedUG.map((ug) => {
    const total = ug.game.achievements.length;
    const unlocked = ug._count.achievements;
    const masteredAt =
      total > 0 && unlocked === total
        ? ug.achievements.reduce<Date | null>((acc, r) => (!acc || r.earnedAt > acc ? r.earnedAt : acc), null)
        : null;

    const consoleName = ug.game.console?.name ?? "Unknown";
    const consoleSlug = toConsoleSlug(consoleName);
    const icon = `/games/${ug.game.slug}/icon.png`;

    return {
      title: ug.game.title,
      slug: ug.game.slug,
      icon,
      consoleName,
      consoleSlug,
      unlocked,
      total,
      masteredAt,
    };
  });

  const masters = owned
    .filter((g) => g.masteredAt)
    .sort((a, b) => b.masteredAt!.getTime() - a.masteredAt!.getTime())
    .slice(0, 5)
    .map((g) => ({
      title: g.title,
      slug: g.slug,
      icon: g.icon,
      consoleSlug: g.consoleSlug,
      masteredAt: g.masteredAt!, // non-null
    }));

  const gamesOwned = owned.length;
  const perfectedGames = owned.filter((g) => g.total > 0 && g.unlocked === g.total).length;
  const achievementsTotal = owned.reduce((sum, g) => sum + g.unlocked, 0);
  const posts = user._count.posts;

  return NextResponse.json({
    user: { name: user.name, avatar: user.avatar, isAdmin: user.isAdmin, posts },
    stats: { gamesOwned, perfectedGames, achievementsTotal },
    owned,
    masters,
  });
}
