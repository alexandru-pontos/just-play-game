import Link from "next/link";
import prisma from "@/lib/prisma";

function fmt(d?: Date | null) {
  if (!d) return "";
  const x = new Date(d);
  return isNaN(x.getTime()) ? "" : x.toISOString().slice(0, 10);
}

export default async function ForumHome() {
  // 1) Categories + subforums
  const categories = await prisma.forumCategory.findMany({
    orderBy: { position: "asc" },
    include: {
      subforums: {
        orderBy: { position: "asc" },
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          category: { select: { slug: true } },
        },
      },
    },
  });

  const subforumIds = categories.flatMap((c) => c.subforums.map((s) => s.id));

  // 2) Stats: thread count, participants, last post (thread+post)
  const [threadCounts, participantMap, latestPostsDesc] = await Promise.all([
    prisma.forumThread.groupBy({
      by: ["subforumId"],
      _count: { _all: true },
      where: { subforumId: { in: subforumIds } },
    }),
    (async () => {
      if (!subforumIds.length) return new Map<string, number>();
      const posts = await prisma.forumPost.findMany({
        where: { thread: { subforumId: { in: subforumIds } }, isDeleted: false },
        select: { authorId: true, thread: { select: { subforumId: true } } },
      });
      const m = new Map<string, Set<string>>();
      for (const p of posts) {
        const sid = p.thread.subforumId;
        if (!m.has(sid)) m.set(sid, new Set());
        m.get(sid)!.add(p.authorId);
      }
      const counts = new Map<string, number>();
      for (const [sid, set] of m) counts.set(sid, set.size);
      return counts;
    })(),
    (async () => {
      if (!subforumIds.length) return [] as Array<{
        id: string;
        createdAt: Date;
        threadId: string;
        thread: { subforumId: string };
        author: { name: string } | null;
      }>;
      // Sorted newest to oldest; we'll pick the first per subforum
      return prisma.forumPost.findMany({
        where: { thread: { subforumId: { in: subforumIds } } },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          createdAt: true,
          threadId: true,
          thread: { select: { subforumId: true } },
          author: { select: { name: true } },
        },
      });
    })(),
  ]);

  const threadCountMap = new Map(threadCounts.map((x) => [x.subforumId, x._count._all]));

  // Build last-post map with permalink info (threadId, postId, page=last)
  const lastPostBySub = new Map<
    string,
    { by?: string; at?: Date; href?: string }
  >();
  for (const p of latestPostsDesc) {
    const sId = p.thread.subforumId;
    if (!lastPostBySub.has(sId)) {
      lastPostBySub.set(sId, {
        by: p.author?.name ?? undefined,
        at: p.createdAt,
        href: `/forum/t/${p.threadId}?page=last#post-${p.id}`,
      });
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <h1 className="text-2xl font-semibold">Forum</h1>

      {categories.map((cat) => (
        <section key={cat.id} className="space-y-3">
          <h2 className="text-lg font-semibold">{cat.name}</h2>

          {/* Mobile: cards */}
          <div className="md:hidden space-y-3">
            {cat.subforums.map((sf) => {
              const threads = threadCountMap.get(sf.id) ?? 0;
              const participants = participantMap.get(sf.id) ?? 0;
              const last = lastPostBySub.get(sf.id);

              return (
                <div
                  key={sf.id}
                  className="rounded border border-zinc-800 bg-zinc-900/40 p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href={`/forum/s/${encodeURIComponent(sf.category.slug)}/${encodeURIComponent(sf.slug)}`}
                        className="font-medium hover:underline block truncate"
                        title={sf.name}
                      >
                        {sf.name}
                      </Link>
                      {sf.description && (
                        <div className="text-xs text-zinc-400 mt-0.5 line-clamp-2">
                          {sf.description}
                        </div>
                      )}
                    </div>
                    <div className="text-right shrink-0 text-xs text-zinc-300">
                      <div><span className="text-zinc-400">Threads:</span> {threads}</div>
                      <div><span className="text-zinc-400">Participants:</span> {participants}</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-300">
                    {last?.by ? (
                      <>
                        Last post by <span className="font-medium">{last.by}</span> on {fmt(last.at)}{" "}
                        {last.href && (
                          <Link href={last.href} className="text-indigo-400 hover:underline">
                            (View)
                          </Link>
                        )}
                      </>
                    ) : (
                      <span className="text-zinc-500">No posts yet</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block rounded border border-zinc-800 overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-zinc-900/50 text-zinc-300">
                <tr>
                  <Th>Subforum</Th>
                  <Th className="w-24 text-right">Threads</Th>
                  <Th className="w-32 text-right">Participants</Th>
                  <Th className="w-[40%] text-right pr-4">Last post</Th>
                </tr>
              </thead>
              <tbody>
                {cat.subforums.map((sf) => {
                  const threads = threadCountMap.get(sf.id) ?? 0;
                  const participants = participantMap.get(sf.id) ?? 0;
                  const last = lastPostBySub.get(sf.id);
                  return (
                    <tr key={sf.id} className="border-t border-zinc-800">
                      <Td>
                        <div className="flex flex-col">
                          <Link
                            href={`/forum/s/${encodeURIComponent(sf.category.slug)}/${encodeURIComponent(sf.slug)}`}
                            className="font-medium hover:underline"
                          >
                            {sf.name}
                          </Link>
                          {sf.description && (
                            <span className="text-xs text-zinc-400">{sf.description}</span>
                          )}
                        </div>
                      </Td>
                      <Td className="text-right">{threads}</Td>
                      <Td className="text-right">{participants}</Td>
                      <Td className="text-right pr-4">
                        {last?.by ? (
                          <span className="text-zinc-300">
                            Last post by <span className="font-medium">{last.by}</span> on {fmt(last.at)}{" "}
                            {last.href && (
                              <Link href={last.href} className="text-indigo-400 hover:underline">
                                (View)
                              </Link>
                            )}
                          </span>
                        ) : (
                          <span className="text-zinc-500">No posts yet</span>
                        )}
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

function Th({ children, className = "" }: any) {
  return <th className={`text-left font-medium px-3 py-2 ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: any) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
}
