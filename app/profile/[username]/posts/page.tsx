"use client";

import Image from "next/image";
import Link from "next/link";

const dummyUser = {
  username: "PlayerOne",
  avatar: "/default-avatar.png",
  posts: [
    {
      id: 1,
      title: "Favorite PS2 RPGs",
      threadTitle: "Top PS2 RPGs of All Time",
      forumSlug: "ps2-games",
      threadId: 101,
      date: "2025-04-05",
    },
    {
      id: 2,
      title: "GC Controller Mods",
      threadTitle: "Controller Customization Tips",
      forumSlug: "gc-games",
      threadId: 202,
      date: "2025-04-02",
    },
  ],
};

export default function UserPostsPage() {
  return (
    <div className="py-10 space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <Image src={dummyUser.avatar} alt="avatar" width={64} height={64} className="rounded-full" />
        <h1 className="text-2xl font-bold">{dummyUser.username}'s Forum Posts</h1>
      </div>

      <ul className="space-y-4">
        {dummyUser.posts.map((post) => (
          <li key={post.id} className="bg-zinc-800 rounded-xl px-4 py-3">
            <p className="text-purple-400 font-semibold">{post.title}</p>
            <p className="text-sm text-zinc-400">
              In thread: <Link
                href={`/forum/${post.forumSlug}/${post.threadId}`}
                className="text-purple-400 hover:underline"
              >
                {post.threadTitle}
              </Link>{" "}
              on {post.date}
            </p>
            <p className="text-sm text-right">
              <Link
                href={`/forum/${post.forumSlug}/${post.threadId}#post-${post.id}`}
                className="text-xs text-purple-400 hover:underline"
              >
                Jump to post
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
