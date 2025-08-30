import Link from "next/link";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const THREADS_PER_PAGE = 10;

function fmt(d?: Date | null) {
  if (!d) return "";
  const x = new Date(d);
  return isNaN(x.getTime()) ? "" : x.toISOString().slice(0, 10);
}

export default async function SubforumPage({
  params,
  searchParams,
}: {
  params: { category: string; subforum: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const session = await getServerSession(authOptions);
  const pageParam = Array.isArray(searchParams?.page) ? searchParams?.page[0] : searchParams?.page;
  const page = Math.max(1, Number(pageParam ?? 1) || 1);

  // Resolve subforum
  const sub = await prisma.forumSubforum.findFirst({
    where: { slug: params.subforum, category: { slug: params.category } },
    select: { id: true, name: true, category: { select: { name: true, slug: true } } },
  });
  if (!sub) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Subforum</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">Not found.</div>
      </div>
    );
  }

  // Pagination
  const totalThreads = await prisma.forumThread.count({ where: { subforumId: sub.id } });
  const totalPages = Math.max(1, Math.ceil(totalThreads / THREADS_PER_PAGE));
  const skip = (page - 1) * THREADS_PER_PAGE;

  // Threads (pinned first, latest activity next)
  const threads = await prisma.forumThread.findMany({
    where: { subforumId: sub.id },
    orderBy: [{ pinned: "desc" }, { lastPostAt: "desc" }],
    skip,
    take: THREADS_PER_PAGE,
    select: {
      id: true,
      title: true,
      pinned: true,
      locked: true,
      lastPostAt: true,
      lastPostBy: { select: { name: true } },
      author: { select: { name: true } },
      _count: { select: { posts: true } },
    },
  });

  const threadIds = threads.map((t) => t.id);

  // Participants per thread (distinct authors, excluding deleted posts)
  const distinctAuthors = threadIds.length
    ? await prisma.forumPost.findMany({
        where: { threadId: { in: threadIds }, isDeleted: false },
        select: { authorId: true, threadId: true },
        distinct: ["authorId", "threadId"],
      })
    : [];
  const participantsByThread = new Map<string, number>();
  for (const a of distinctAuthors) {
    participantsByThread.set(a.threadId, (participantsByThread.get(a.threadId) ?? 0) + 1);
  }

  // Last post IDs for permalinks (grab newest post for each thread)
  const latestPosts = threadIds.length
    ? await prisma.forumPost.findMany({
        where: { threadId: { in: threadIds } },
        orderBy: { createdAt: "desc" },
        select: { id: true, threadId: true },
      })
    : [];
  const lastPostIdByThread = new Map<string, string>();
  for (const p of latestPosts) {
    if (!lastPostIdByThread.has(p.threadId)) {
      lastPostIdByThread.set(p.threadId, p.id);
    }
  }

  // Prepare rows
  const rows = threads.map((t) => {
    const replies = Math.max(0, t._count.posts - 1);
    const participants = participantsByThread.get(t.id) ?? (t._count.posts ? 1 : 0);
    const lastPostId = lastPostIdByThread.get(t.id);
    const lastHref = lastPostId ? `/forum/t/${t.id}?page=last#post-${lastPostId}` : undefined;

    return {
      id: t.id,
      title: t.title,
      authorName: t.author.name,
      pinned: t.pinned,
      locked: t.locked,
      replies,
      participants,
      lastAt: t.lastPostAt,
      lastBy: t.lastPostBy?.name ?? undefined,
      lastHref,
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          {sub.category.name} / {sub.name}
        </h1>
        {session?.user && (
          <Link
            href={`/forum/s/${encodeURIComponent(params.category)}/${encodeURIComponent(params.subforum)}/new`}
            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded"
          >
            Start new thread
          </Link>
        )}
      </div>

      {/* Mobile: cards */}
      <div className="md:hidden space-y-3">
        {rows.length === 0 ? (
          <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">No threads yet.</div>
        ) : (
          rows.map((t) => (
            <div key={t.id} className="rounded border border-zinc-800 bg-zinc-900/40 p-3 space-y-2">
              <div className="flex items-center gap-2">
                {t.pinned && <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-700">Pinned</span>}
                {t.locked && <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-700">Locked</span>}
                <Link href={`/forum/t/${t.id}`} className="font-medium hover:underline truncate">
                  {t.title}
                </Link>
              </div>
              <div className="text-xs text-zinc-400">by {t.authorName}</div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <div className="flex gap-3">
                  <span><span className="text-zinc-400">Replies:</span> {t.replies}</span>
                  <span><span className="text-zinc-400">Participants:</span> {t.participants}</span>
                </div>
                <div className="text-right">
                  {t.lastBy ? (
                    <>
                      {fmt(t.lastAt)} — by <span className="font-medium">{t.lastBy}</span>{" "}
                      {t.lastHref && (
                        <Link href={t.lastHref} className="text-indigo-400 hover:underline">
                          (View)
                        </Link>
                      )}
                    </>
                  ) : (
                    <span className="text-zinc-500">—</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block">
        {rows.length === 0 ? (
          <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">No threads yet.</div>
        ) : (
          <div className="overflow-x-auto rounded border border-zinc-800">
            <table className="min-w-full text-sm">
              <thead className="bg-zinc-900/50 text-zinc-300">
                <tr>
                  <Th>Thread</Th>
                  <Th className="w-20 text-right">Replies</Th>
                  <Th className="w-32 text-right">Participants</Th>
                  <Th className="w-[32%] text-right pr-4">Last post</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((t) => (
                  <tr key={t.id} className="border-t border-zinc-800">
                    <Td>
                      <div className="flex items-center gap-2">
                        {t.pinned && <span className="text-xs px-2 py-0.5 rounded bg-zinc-700">Pinned</span>}
                        {t.locked && <span className="text-xs px-2 py-0.5 rounded bg-zinc-700">Locked</span>}
                        <Link href={`/forum/t/${t.id}`} className="font-medium hover:underline">
                          {t.title}
                        </Link>
                        <span className="text-xs text-zinc-400">by {t.authorName}</span>
                      </div>
                    </Td>
                    <Td className="text-right">{t.replies}</Td>
                    <Td className="text-right">{t.participants}</Td>
                    <Td className="text-right pr-4">
                      {t.lastBy ? (
                        <span className="text-zinc-300">
                          {fmt(t.lastAt)} — by <span className="font-medium">{t.lastBy}</span>{" "}
                          {t.lastHref && (
                            <Link href={t.lastHref} className="text-indigo-400 hover:underline">
                              (View)
                            </Link>
                          )}
                        </span>
                      ) : (
                        <span className="text-zinc-500">—</span>
                      )}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Pager
        baseHref={`/forum/s/${encodeURIComponent(params.category)}/${encodeURIComponent(params.subforum)}`}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

function Th({ children, className = "" }: any) {
  return <th className={`text-left font-medium px-3 py-2 ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: any) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
}

function Pager({ baseHref, page, totalPages }: { baseHref: string; page: number; totalPages: number }) {
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
