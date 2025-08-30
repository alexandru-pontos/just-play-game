import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await requireAdmin();
  const { id } = await context.params;
  const { title, description, image } = await req.json().catch(() => ({}));

  const updated = await prisma.achievement.update({
    where: { id },
    data: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(typeof image === "string" ? { image } : {}),
    },
    select: { id: true },
  });

  return NextResponse.json({ ok: true, id: updated.id });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await requireAdmin();
  const { id } = await context.params;

  await prisma.achievement.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
