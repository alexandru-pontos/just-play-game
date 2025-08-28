import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
  try {
    const game = await prisma.game.findUnique({
      where: { slug },
      include: {
        console: true,
        achievements: {
          include: {
            UserAchievement: true,
          },
        },
        users: true,
      },
    });

    if (!game?.console) {
      return NextResponse.json({ error: "Missing console info for this game" }, { status: 500 });
    }


    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    const achievementStats = game.achievements.map((a) => ({
      ...a,
      unlocks: a.UserAchievement.length,
    }));

    const totalOwners = game.users.length;

    return NextResponse.json({
      ...game,
      achievements: achievementStats,
      ownerCount: totalOwners,
    });
  } catch (err) {
    console.error("Failed to fetch game:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
