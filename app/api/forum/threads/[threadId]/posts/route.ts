import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { recalcThreadLastPost } from "@/lib/forum";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ threadId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { threadId } = await context.params;
  const { content } = await req.json().catch(() => ({}));
  if (!content?.trim()) return NextResponse.json({ error: "Empty content" }, { status: 400 });

  const [user, thread] = await Promise.all([
    prisma.user.findUnique({ where: { name: session.user.name }, select: { id: true } }),
    prisma.forumThread.findUnique({ where: { id: threadId }, select: { id: true, locked: true } }),
  ]);
  if (!user || !thread) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (thread.locked) return NextResponse.json({ error: "Thread locked" }, { status: 403 });

  const post = await prisma.forumPost.create({
    data: { threadId, authorId: user.id, content: content.trim() },
    select: {
      id: true, content: true, createdAt: true, editedAt: true, editCount: true,
      isDeleted: true, deletedReason: true, authorId: true,
      author: { select: { name: true, avatar: true } },
    },
  });

  await recalcThreadLastPost(threadId);

  return NextResponse.json({ ok: true, post });
}
