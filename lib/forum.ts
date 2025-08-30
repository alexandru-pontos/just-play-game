import prisma from "@/lib/prisma";

export async function recalcThreadLastPost(threadId: string) {
  const latest = await prisma.forumPost.findFirst({
    where: { threadId, isDeleted: false },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true, authorId: true },
  });

  await prisma.forumThread.update({
    where: { id: threadId },
    data: {
      lastPostAt: latest?.createdAt ?? new Date(0),
      lastPostById: latest?.authorId ?? null,
    },
  });
}
