import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  // Not logged in -> treat as not owned (and don't error)
  if (!session?.user?.email) {
    return NextResponse.json({ owned: false }, { status: 200 });
  }

  const { slug } = await context.params;

  // Find game id by slug
  const game = await prisma.game.findUnique({
    where: { slug },
    select: { id: true },
  });
  if (!game) return NextResponse.json({ owned: false }, { status: 200 });

  // Find user by email (unique)
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  });
  if (!user) return NextResponse.json({ owned: false }, { status: 200 });

  const ug = await prisma.userGame.findUnique({
    where: { userId_gameId: { userId: user.id, gameId: game.id } },
    select: { owned: true },
  });

  return NextResponse.json({ owned: !!ug?.owned });
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;
  const body = await req.json().catch(() => ({}));
  const owned = !!body?.owned;

  const [game, user] = await Promise.all([
    prisma.game.findUnique({ where: { slug }, select: { id: true } }),
    prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } }),
  ]);
  if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.userGame.upsert({
    where: { userId_gameId: { userId: user.id, gameId: game.id } }, // requires @@unique([userId, gameId])
    create: { userId: user.id, gameId: game.id, owned },
    update: { owned },
  });

  return NextResponse.json({ ok: true });
}
