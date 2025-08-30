import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string; aid: string }> }
) {
  const session = await getSession();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug, aid } = await context.params;
  const { unlocked } = await req.json().catch(() => ({ unlocked: false }));

  const [user, game] = await Promise.all([
    prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } }),
    prisma.game.findUnique({ where: { slug }, select: { id: true } }),
  ]);
  if (!user || !game) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // ensure a UserGame row exists
  let ug = await prisma.userGame.findFirst({
    where: { userId: user.id, gameId: game.id },
    select: { id: true },
  });
  if (!ug) {
    ug = await prisma.userGame.create({
      data: { userId: user.id, gameId: game.id, owned: true },
      select: { id: true },
    });
  }

  if (unlocked) {
    // set unlocked (idempotent thanks to unique constraint)
    await prisma.userAchievement.upsert({
      where: { userGameId_achievementId: { userGameId: ug.id, achievementId: aid } },
      create: { userGameId: ug.id, achievementId: aid },
      update: {}, // nothing to change
    });
  } else {
    // set locked (delete if exists)
    await prisma.userAchievement.deleteMany({
      where: { userGameId: ug.id, achievementId: aid },
    });
  }

  return NextResponse.json({ ok: true });
}
