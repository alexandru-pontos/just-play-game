import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();
  const { slug } = await context.params;

  const { title, description } = await req.json().catch(() => ({}));
  if (!title || !description) {
    return NextResponse.json({ error: "Title and description required" }, { status: 400 });
  }

  const game = await prisma.game.findUnique({ where: { slug }, select: { id: true } });
  if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });

  const created = await prisma.achievement.create({
    data: { title, description, gameId: game.id },
    select: { id: true },
  });

  return NextResponse.json({ id: created.id }, { status: 201 });
}
