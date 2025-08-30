import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { recalcThreadLastPost } from "@/lib/forum";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ postId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { postId } = await context.params;
  const { content } = await req.json().catch(() => ({}));
  if (!content?.trim()) return NextResponse.json({ error: "Empty content" }, { status: 400 });

  const post = await prisma.forumPost.findUnique({
    where: { id: postId },
    select: { id: true, author: { select: { name: true } } },
  });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (post.author?.name !== session.user.name)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const updated = await prisma.forumPost.update({
    where: { id: postId },
    data: { content: content.trim(), editCount: { increment: 1 }, editedAt: new Date() },
    select: {
      id: true, content: true, createdAt: true, editedAt: true, editCount: true,
      isDeleted: true, deletedReason: true, authorId: true,
      author: { select: { name: true, avatar: true } },
    },
  });

  return NextResponse.json({ ok: true, post: updated });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ postId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { postId } = await context.params;
  const { reason } = await req.json().catch(() => ({}));
  if (!reason?.trim()) return NextResponse.json({ error: "Reason required" }, { status: 400 });

  const post = await prisma.forumPost.findUnique({
    where: { id: postId },
    select: { id: true, threadId: true },
  });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const deleted = await prisma.forumPost.update({
    where: { id: postId },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
      deletedReason: reason.trim(),
      deletedBy: { connect: { name: session.user.name as string } },
      content: "", // optionally clear stored content
    },
    select: {
      id: true, content: true, createdAt: true, editedAt: true, editCount: true,
      isDeleted: true, deletedReason: true, authorId: true,
      author: { select: { name: true, avatar: true } },
    },
  });

  await recalcThreadLastPost(post.threadId);

  return NextResponse.json({ ok: true, post: deleted });
}
