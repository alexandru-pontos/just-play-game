import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ threadId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { threadId } = await context.params;
  await prisma.forumThread.delete({ where: { id: threadId } }); // cascades posts
  return NextResponse.json({ ok: true });
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ threadId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { threadId } = await context.params;
  const body = await req.json().catch(() => ({})) as Partial<{ pinned: boolean; locked: boolean }>;
  const data: Record<string, any> = {};
  if (typeof body.pinned === "boolean") data.pinned = body.pinned;
  if (typeof body.locked === "boolean") data.locked = body.locked;

  if (!Object.keys(data).length) {
    return NextResponse.json({ error: "No changes" }, { status: 400 });
  }

  await prisma.forumThread.update({ where: { id: threadId }, data });
  return NextResponse.json({ ok: true });
}
