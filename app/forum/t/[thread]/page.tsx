import prisma from "@/lib/prisma";
import ThreadClient from "./_ThreadClient";
import ThreadAdminActions from "./_ThreadAdminActions";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const POSTS_PER_PAGE = 25;

export default async function ThreadPage({
  params,
  searchParams,
}: {
  params: { thread: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const session = await getServerSession(authOptions);

  const threadBase = await prisma.forumThread.findUnique({
    where: { id: params.thread },
    select: {
      id: true,
      title: true,
      pinned: true,
      locked: true,
      subforum: {
        select: {
          name: true,
          slug: true,
          category: { select: { name: true, slug: true } },
        },
      },
      _count: { select: { posts: true } },
    },
  });
  if (!threadBase) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Thread</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">Not found.</div>
      </div>
    );
  }

  const totalPosts = threadBase._count.posts;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  // page parsing: support ?page=last
  const pageParam = Array.isArray(searchParams?.page) ? searchParams?.page[0] : searchParams?.page;
  const page =
    pageParam === "last"
      ? totalPages
      : Math.max(1, Number(pageParam ?? 1) || 1);

  const skip = (page - 1) * POSTS_PER_PAGE;

  const posts = await prisma.forumPost.findMany({
    where: { threadId: threadBase.id },
    orderBy: { createdAt: "asc" },
    skip,
    take: POSTS_PER_PAGE,
    select: {
      id: true,
      content: true,
      createdAt: true,
      editedAt: true,
      editCount: true,
      isDeleted: true,
      deletedReason: true,
      authorId: true,
      author: { select: { name: true, avatar: true } },
    },
  });

  const postsForClient = posts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
    editedAt: p.editedAt ? p.editedAt.toISOString() : null,
  }));

  const canReply = !!session?.user && !threadBase.locked;
  const isAdmin = Boolean(session?.user?.isAdmin);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{threadBase.title}</h1>
          <div className="text-sm text-zinc-400">
            <Link
              href={`/forum/s/${threadBase.subforum.category.slug}/${threadBase.subforum.slug}`}
              className="hover:underline"
            >
              {threadBase.subforum.category.name} / {threadBase.subforum.name}
            </Link>
          </div>
        </div>
        {isAdmin && (
          <ThreadAdminActions
            threadId={threadBase.id}
            pinned={threadBase.pinned}
            locked={threadBase.locked}
            afterDeleteHref={`/forum/s/${threadBase.subforum.category.slug}/${threadBase.subforum.slug}`}
          />
        )}
      </div>

      <ThreadClient
        threadId={threadBase.id}
        initialPosts={postsForClient}
        canReply={canReply}
        currentUserName={session?.user?.name ?? null}
        isAdmin={isAdmin}
      />

      <Pager
        baseHref={`/forum/t/${threadBase.id}`}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

function Pager({
  baseHref,
  page,
  totalPages,
}: {
  baseHref: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;
  const prev = page > 1 ? `${baseHref}?page=${page - 1}` : null;
  const next = page < totalPages ? `${baseHref}?page=${page + 1}` : null;
  return (
    <div className="flex items-center justify-between text-sm mt-3">
      <div>{`Page ${page} of ${totalPages}`}</div>
      <div className="flex gap-2">
        {prev && (
          <Link className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800" href={prev}>
            Previous
          </Link>
        )}
        {next && (
          <Link className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800" href={next}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
