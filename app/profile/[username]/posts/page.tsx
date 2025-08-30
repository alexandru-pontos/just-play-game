import Link from "next/link";
import prisma from "@/lib/prisma";

const POSTS_PER_PAGE = 25;

function isoDT(d: Date) {
  return d.toISOString().slice(0, 16).replace("T", " ");
}

function excerpt(s: string, n = 220) {
  const t = s.trim().replace(/\s+/g, " ");
  return t.length > n ? t.slice(0, n - 1) + "…" : t;
}

export default async function UserPostsPage({
  params,
  searchParams,
}: {
  params: { username: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const username = params.username;

  // Resolve the user
  const user = await prisma.user.findUnique({
    where: { name: username },
    select: { id: true, name: true, avatar: true },
  });
  if (!user) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Posts</h1>
        <div className="rounded bg-red-100 text-red-800 p-3">User not found.</div>
      </div>
    );
  }

  // Pagination
  const pageParam = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
  const page = Math.max(1, Number(pageParam ?? 1) || 1);
  const totalPosts = await prisma.forumPost.count({
    where: { authorId: user.id },
  });
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const skip = (page - 1) * POSTS_PER_PAGE;

  // Fetch this page of posts (newest first)
  const posts = await prisma.forumPost.findMany({
    where: { authorId: user.id },
    orderBy: { createdAt: "desc" },
    skip,
    take: POSTS_PER_PAGE,
    select: {
      id: true,
      content: true,
      isDeleted: true,
      deletedReason: true,
      createdAt: true,
      threadId: true,
      thread: {
        select: {
          id: true,
          title: true,
          subforum: {
            select: {
              slug: true,
              name: true,
              category: { select: { slug: true, name: true } },
            },
          },
        },
      },
    },
  });

  // For accurate permalinks, compute the page number of each post within its thread.
  // (Count how many posts were created up to & including this post)
  const permalinkEntries = await Promise.all(
    posts.map(async (p) => {
      // If you prefer to exclude soft-deleted posts from pagination positions,
      // add { isDeleted: false } to the where clause below.
      const upToCount = await prisma.forumPost.count({
        where: {
          threadId: p.threadId,
          createdAt: { lte: p.createdAt },
        },
      });
      const threadPage = Math.max(1, Math.ceil(upToCount / 25)); // 25 posts/page in thread
      return {
        postId: p.id,
        href: `/forum/t/${p.threadId}?page=${threadPage}#post-${p.id}`,
      };
    })
  );
  const permalinkByPost = new Map(permalinkEntries.map((e) => [e.postId, e.href]));

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{user.name}&apos;s Posts</h1>
        <Link
          href={`/profile/${encodeURIComponent(user.name)}`}
          className="text-sm text-indigo-400 hover:underline"
        >
          Back to profile
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
          No posts yet.
        </div>
      ) : (
        <>
          {/* Mobile: cards */}
          <div className="md:hidden space-y-3">
            {posts.map((p) => (
              <div
                key={p.id}
                className="rounded border border-zinc-800 bg-zinc-900/40 p-3 space-y-2"
              >
                <div className="text-xs text-zinc-400">
                  In{" "}
                  <Link
                    href={`/forum/s/${p.thread.subforum.category.slug}/${p.thread.subforum.slug}`}
                    className="hover:underline"
                  >
                    {p.thread.subforum.category.name} / {p.thread.subforum.name}
                  </Link>
                </div>
                <div className="font-medium">
                  <Link
                    href={`/forum/t/${p.thread.id}`}
                    className="hover:underline"
                  >
                    {p.thread.title}
                  </Link>
                </div>
                {p.isDeleted ? (
                  <div className="rounded bg-zinc-900/70 border border-zinc-800 p-2 text-sm text-zinc-300">
                    <span className="font-medium">Post deleted by admin.</span>{" "}
                    {p.deletedReason ? `Reason: ${p.deletedReason}` : ""}
                  </div>
                ) : (
                  <div className="text-sm text-zinc-200 whitespace-pre-wrap">
                    {excerpt(p.content)}
                  </div>
                )}
                <div className="text-xs text-zinc-400 flex items-center gap-2">
                  {isoDT(p.createdAt)}
                  <Link
                    href={permalinkByPost.get(p.id)!}
                    className="text-indigo-400 hover:underline"
                  >
                    (View)
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto rounded border border-zinc-800">
            <table className="min-w-full text-sm">
              <thead className="bg-zinc-900/50 text-zinc-300">
                <tr>
                  <Th>Thread</Th>
                  <Th className="w-[50%]">Excerpt</Th>
                  <Th className="w-40">Date</Th>
                  <Th className="w-20 text-right pr-4">Link</Th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.id} className="border-t border-zinc-800 align-top">
                    <Td>
                      <div className="flex flex-col">
                        <Link
                          href={`/forum/t/${p.thread.id}`}
                          className="font-medium hover:underline"
                        >
                          {p.thread.title}
                        </Link>
                        <span className="text-xs text-zinc-400">
                          <Link
                            href={`/forum/s/${p.thread.subforum.category.slug}/${p.thread.subforum.slug}`}
                            className="hover:underline"
                          >
                            {p.thread.subforum.category.name} / {p.thread.subforum.name}
                          </Link>
                        </span>
                      </div>
                    </Td>
                    <Td>
                      {p.isDeleted ? (
                        <div className="rounded bg-zinc-900/70 border border-zinc-800 p-2 text-zinc-300">
                          <span className="font-medium">Post deleted by admin.</span>{" "}
                          {p.deletedReason ? `Reason: ${p.deletedReason}` : ""}
                        </div>
                      ) : (
                        <div className="text-zinc-200">{excerpt(p.content)}</div>
                      )}
                    </Td>
                    <Td>{isoDT(p.createdAt)}</Td>
                    <Td className="text-right pr-4">
                      <Link
                        href={permalinkByPost.get(p.id)!}
                        className="text-indigo-400 hover:underline"
                      >
                        (View)
                      </Link>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pager
            baseHref={`/profile/${encodeURIComponent(user.name)}/posts`}
            page={page}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}

function Th({ children, className = "" }: any) {
  return <th className={`text-left font-medium px-3 py-2 ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: any) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
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
          <Link
            className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
            href={prev}
          >
            Previous
          </Link>
        )}
        {next && (
          <Link
            className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
            href={next}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
