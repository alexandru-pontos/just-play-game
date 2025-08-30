import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { recalcThreadLastPost } from "@/lib/forum";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { subforumId, title, content } = await req.json().catch(() => ({}));
  if (!subforumId || !title?.trim() || !content?.trim())
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { name: session.user.name }, select: { id: true } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const thread = await prisma.forumThread.create({
    data: {
      subforumId,
      authorId: user.id,
      title: title.trim(),
      // create first post
      posts: {
        create: { authorId: user.id, content: content.trim() },
      },
    },
    select: { id: true },
  });

  // Set last post pointers
  await recalcThreadLastPost(thread.id);

  return NextResponse.json({ ok: true, threadId: thread.id });
}
