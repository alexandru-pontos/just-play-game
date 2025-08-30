import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { requireAdmin } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  try {
    const session = await getSession();
    const userEmail = session?.user?.email ?? null;
    const game = await prisma.game.findUnique({
      where: { slug },
      include: {
        console: true,
        achievements: {
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
          UserAchievement: true,
          },
        },
        users: {
          where: { owned: true },
          select: {
            owned: true,
            _count: {select: {achievements: true} },
          },
        },
      },
    });

    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }
    if (!game?.console) {
      return NextResponse.json({ error: "Missing console info for this game" }, { status: 500 });
    }

    let currentUserUnlockedIds: string[] = [];
    let currentUserOwnsGame = false;
    
    if (userEmail) {
      const user = await prisma.user.findUnique({ where: { email: userEmail }, select: { id: true } });
      if (user) {
        const ug = await prisma.userGame.findFirst({
          where: { userId: user.id, gameId: game.id },
          select: { id: true, owned: true },
        });
        if (ug?.owned) {
          currentUserOwnsGame = true;
          const rows = await prisma.userAchievement.findMany({
            where: { userGameId: ug.id },
            select: { achievementId: true },
          });
          currentUserUnlockedIds = rows.map(r => r.achievementId);
        }
      }
    }

    const achievementStats = game.achievements.map((a) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      image: a.image,
      unlocks: a.UserAchievement.length,
    }));

    const totalOwners = game.users.length;

    /* Mastery stuff below this line */
    const totalAch = game.achievements.length;

    let masters: Array<{ name: string; avatar: string | null; completedAt: Date }> = [];

    if (totalAch > 0) {
      // Pull all user-achievement rows for THIS game (owners only helps avoid noise)
      const rows = await prisma.userAchievement.findMany({
        where: {
          achievement: { gameId: game.id },
          userGame: { gameId: game.id, owned: true },
        },
        select: {
          earnedAt: true,
          userGameId: true,
          userGame: { select: { user: { select: { name: true, avatar: true } } } },
        },
      });

      // Reduce per userGameId: count unlocked + latest earnedAt
      const agg = new Map<string, { count: number; latest: Date; name: string; avatar: string | null }>();
      for (const r of rows) {
        const k = r.userGameId;
        const prev = agg.get(k);
        const latest = prev ? (r.earnedAt > prev.latest ? r.earnedAt : prev.latest) : r.earnedAt;
        const name = r.userGame.user.name;
        const avatar = r.userGame.user.avatar ?? null;
        agg.set(k, { count: (prev?.count ?? 0) + 1, latest, name, avatar });
      }
      
      masters = [...agg.values()]
        .filter(x => x.count === totalAch)
        .sort((a, b) => b.latest.getTime() - a.latest.getTime())
        .slice(0, 5)
        .map(x => ({ name: x.name, avatar: x.avatar, completedAt: x.latest }));
    }


    return NextResponse.json({
      ...game,
      achievements: achievementStats,
      ownerCount: totalOwners,
      currentUserUnlockedIds,
      currentUserOwnsGame,
      masters,
    });
  } catch (err) {
    console.error("Failed to fetch game:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();
  const { slug } = await context.params;

  const body = await req.json().catch(() => ({}));
  const {
    title,
    developer,
    publisher,
    description,
    releaseDate,     // ISO string or undefined
    screenshots,     // string[] (new order / deletions applied client-side)
    coverImagePath,  // optional string (if you want to update DB cover path)
    // NOTE: icon is by convention; no DB field unless you added one
  } = body;

  // Basic server-side guard (you can add zod here if you want)
  if (!title || !developer || !publisher || !description) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const updated = await prisma.game.update({
    where: { slug },
    data: {
      title,
      developer,
      publisher,
      description,
      releaseDate: releaseDate ? new Date(releaseDate) : null,
      ...(Array.isArray(screenshots) ? { screenshots } : {}),
      ...(coverImagePath ? { coverImage: coverImagePath } : {}), // optional
    },
    select: { slug: true },
  });

  return NextResponse.json({ ok: true, slug: updated.slug });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();
  const { slug } = await context.params;

  // Look up the game id
  const game = await prisma.game.findUnique({
    where: { slug },
    select: { id: true },
  });
  if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });

  const gameId = game.id;

  // Hard-delete everything related to this game in a single transaction:
  // 1) userAchievement (via userGame)  2) achievements  3) userGame rows  4) the game
  await prisma.$transaction([
    prisma.userAchievement.deleteMany({ where: { userGame: { gameId } } }),
    prisma.achievement.deleteMany({ where: { gameId } }),
    prisma.userGame.deleteMany({ where: { gameId } }),
    prisma.game.delete({ where: { id: gameId } }),
  ]);

  return NextResponse.json({ ok: true });
}