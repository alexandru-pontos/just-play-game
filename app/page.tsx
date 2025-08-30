import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

function isoDate(d?: Date | null) {
  if (!d) return "";
  const x = new Date(d);
  return isNaN(x.getTime()) ? "" : x.toISOString().slice(0, 10);
}

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  // ---------- NEWS (pinned threads from Community / Site Updates) ----------
  const siteUpdatesSub = await prisma.forumSubforum.findFirst({
    where: { slug: "site-updates", category: { slug: "community" } },
    select: { id: true, slug: true, category: { select: { slug: true, name: true } }, name: true },
  });

  const pinnedNews = siteUpdatesSub
    ? await prisma.forumThread.findMany({
        where: { subforumId: siteUpdatesSub.id, pinned: true },
        orderBy: [{ lastPostAt: "desc" }],
        take: 3,
        select: {
          id: true,
          title: true,
          lastPostAt: true,
          lastPostBy: { select: { name: true } },
          _count: { select: { posts: true } },
        },
      })
    : [];

  // Build (View) permalinks for pinned threads (just send to last page + anchor on last post if desired)
  // Since we don’t have last post ID here cheaply, we’ll land on last page.
  const pinnedNewsRows = pinnedNews.map((t) => {
    const lastHref = `/forum/t/${t.id}?page=last`;
    return {
      id: t.id,
      title: t.title,
      lastAt: t.lastPostAt,
      lastBy: t.lastPostBy?.name ?? undefined,
      lastHref,
      postsCount: t._count.posts,
    };
  });

  // ---------- LATEST ACTIVITY: Achievements ----------
  // Recent 6 unlocks
  const recentUnlocks = await prisma.userAchievement.findMany({
    orderBy: { earnedAt: "desc" },
    take: 6,
    select: {
      id: true,
      earnedAt: true,
      achievement: { select: { title: true, image: true, game: { select: { slug: true, title: true, console: { select: { name: true, id: true } }, consoleId: true } } } },
      userGame: {
        select: {
          user: { select: { name: true, avatar: true } },
          game: {
            select: {
              slug: true,
              title: true,
              console: { select: { name: true, id: true } },
            },
          },
        },
      },
    },
  });

  const recentUnlockRows = recentUnlocks.map((ua) => {
    const gameSlug = ua.userGame.game.slug;
    const gameTitle = ua.userGame.game.title;
    const consoleName = ua.userGame.game.console?.name || "";
    // derive console slug from known names
    const consoleSlug = /playstation\s*2/i.test(consoleName) ? "ps2" : /gamecube/i.test(consoleName) ? "gamecube" : "ps2";
    const achImg =
      ua.achievement.image ||
      `/ach_placeholder.png`;
    return {
      id: ua.id,
      earnedAt: ua.earnedAt,
      achTitle: ua.achievement.title,
      userName: ua.userGame.user.name,
      userAvatar: ua.userGame.user.avatar ?? "/avatar_placeholder.png",
      gameTitle,
      gameHref: `/games/${consoleSlug}/${gameSlug}`,
      achImg,
    };
  });

  // ---------- LATEST ACTIVITY: Forum posts ----------
  const latestPosts = await prisma.forumPost.findMany({
    where: { isDeleted: false },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      createdAt: true,
      content: true,
      threadId: true,
      thread: { select: { id: true, title: true } },
    },
  });

  // Compute the page for each post so permalinks land on the exact post (25/page)
  const permalinkEntries = await Promise.all(
    latestPosts.map(async (p) => {
      const upToCount = await prisma.forumPost.count({
        where: { threadId: p.threadId, createdAt: { lte: p.createdAt } },
      });
      const threadPage = Math.max(1, Math.ceil(upToCount / 25));
      return {
        postId: p.id,
        href: `/forum/t/${p.threadId}?page=${threadPage}#post-${p.id}`,
      };
    })
  );
  const linkByPost = new Map(permalinkEntries.map((e) => [e.postId, e.href]));
  const latestPostRows = latestPosts.map((p) => ({
    id: p.id,
    threadId: p.threadId,
    threadTitle: p.thread.title,
    createdAt: p.createdAt,
    excerpt:
      p.content.trim().length > 180
        ? p.content.trim().slice(0, 179) + "…"
        : p.content.trim(),
    href: linkByPost.get(p.id)!,
  }));

  // ---------- HIGHLIGHTS / STATS ----------
  const [usersCount, gamesCount, achievementsCount] = await Promise.all([
    prisma.user.count(),
    prisma.game.count(),
    prisma.achievement.count(),
  ]);

  // "Newest games" — since Game has no createdAt, use latest releaseDate
  const newestGames = await prisma.game.findMany({
    orderBy: [{ createdAt: "desc" }],
    take: 6,
    select: {
      slug: true,
      title: true,
      coverImage: true,
      releaseDate: true,
      createdAt: true, // (optional if you want to display it somewhere)
      console: { select: { name: true } },
    },
  });

  const newestRows = newestGames.map((g) => {
    const consoleName = g.console?.name || "";
    const consoleSlug = /playstation\s*2/i.test(consoleName) ? "ps2" : /gamecube/i.test(consoleName) ? "gamecube" : "ps2";
    return {
      title: g.title,
      slug: g.slug,
      cover: g.coverImage,
      when: g.releaseDate,
      consoleSlug,
      href: `/games/${consoleSlug}/${g.slug}`,
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">

      {/* Welcome / hero */}
      <section className="rounded border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Just Play Game</h1>
            <p className="text-zinc-300">Track your PS2 &amp; GameCube games and achievements.</p>
          </div>
          {!session?.user && (
            <div className="flex gap-2">
              <Link
                href="/api/auth/signin"
                className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Log in
              </Link>
              <Link
                href="/api/auth/signin"
                className="px-4 py-2 rounded border border-zinc-700 hover:bg-zinc-800"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* News (pinned threads) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">News</h2>
          {siteUpdatesSub && (
            <Link
              href={`/forum/s/${siteUpdatesSub.category.slug}/${siteUpdatesSub.slug}`}
              className="text-sm text-indigo-400 hover:underline"
            >
              View all
            </Link>
          )}
        </div>

        {pinnedNewsRows.length === 0 ? (
          <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
            No news yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pinnedNewsRows.map((n) => (
              <div
                key={n.id}
                className="rounded border border-zinc-800 bg-zinc-900/40 p-3 space-y-1"
              >
                <Link href={`/forum/t/${n.id}`} className="font-medium hover:underline">
                  {n.title}
                </Link>
                <div className="text-xs text-zinc-400">
                  {n.lastBy ? (
                    <>
                      Last activity by <span className="font-medium">{n.lastBy}</span> on {isoDate(n.lastAt)}{" "}
                      <Link href={n.lastHref} className="text-indigo-400 hover:underline">(View)</Link>
                    </>
                  ) : (
                    <>No posts yet</>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Latest Activity */}
      <section className="grid lg:grid-cols-2 gap-6">
        {/* Recent unlocks */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Unlocks</h2>
          {recentUnlockRows.length === 0 ? (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">No recent unlocks.</div>
          ) : (
            <ul className="space-y-3">
              {recentUnlockRows.map((r) => (
                <li
                  key={r.id}
                  className="rounded border border-zinc-800 bg-zinc-900/40 p-3 flex items-center gap-3"
                >
                  <Image
                    src={r.achImg || "/ach_placeholder.png"}
                    alt={r.achTitle}
                    width={40}
                    height={40}
                    className="rounded object-cover"
                  />
                  <div className="min-w-0">
                    <div className="text-sm">
                      <span className="font-medium">{r.userName}</span>{" "}
                      unlocked <span className="font-medium">{r.achTitle}</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      in{" "}
                      <Link href={r.gameHref} className="hover:underline">
                        {r.gameTitle}
                      </Link>{" "}
                      • {isoDate(r.earnedAt)}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src={r.userAvatar}
                      alt={r.userName}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent forum posts */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Forum Posts</h2>
          {latestPostRows.length === 0 ? (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">No recent posts.</div>
          ) : (
            <ul className="space-y-3">
              {latestPostRows.map((p) => (
                <li
                  key={p.id}
                  className="rounded border border-zinc-800 bg-zinc-900/40 p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Link href={`/forum/t/${p.threadId}`} className="font-medium hover:underline truncate">
                      {p.threadTitle}
                    </Link>
                    <span className="text-xs text-zinc-400">{isoDate(p.createdAt)}</span>
                  </div>
                  <div className="text-sm text-zinc-300 mt-1">{p.excerpt}</div>
                  <div className="text-xs mt-1">
                    <Link href={p.href} className="text-indigo-400 hover:underline">
                      (View)
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Highlights</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <StatBox label="Users" value={usersCount} />
          <StatBox label="Games" value={gamesCount} />
          <StatBox label="Achievements" value={achievementsCount} />
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Newest Games</h3>
          {newestRows.length === 0 ? (
            <div className="rounded bg-zinc-800/60 p-4 text-sm text-zinc-300">
              No games yet.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {newestRows.map((g) => (
                <Link
                  key={g.slug}
                  href={g.href}
                  className="rounded border border-zinc-800 bg-zinc-900/40 p-3 hover:bg-zinc-900/60 transition-colors"
                >
                  <div className="flex gap-3">
                    <Image
                      src={g.cover}
                      alt={g.title}
                      width={64}
                      height={64}
                      className="rounded object-cover"
                    />
                    <div>
                      <div className="font-medium truncate">{g.title}</div>
                      <div className="text-xs text-zinc-400">Release: {isoDate(g.when)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick links */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Links</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <QuickLink href="/games/ps2" label="Browse PS2 Games" />
          <QuickLink href="/games/gamecube" label="Browse GameCube Games" />
          <QuickLink href="/forum" label="Visit Forum" />
        </div>
      </section>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-zinc-800 bg-zinc-900/40 p-4 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:bg-zinc-900/60 transition-colors"
    >
      {label}
    </Link>
  );
}
