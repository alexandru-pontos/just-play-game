"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const dummyThread = {
  title: "Thread Title Example",
  posts: Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    author: `User${i + 1}`,
    avatar: "/default-avatar.png",
    content: `This is a reply from User${i + 1}. Lorem ipsum dolor sit amet.`,
    date: `2025-04-${10 + i}`,
    deleted: false,
    deletedReason: "",
  })),
};

export default function ForumThreadViewPage() {
  const { forum, threadId } = useParams();
  const isAdmin = false;
  const isLoggedIn = true;

  return (
    <div className="py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">{dummyThread.title}</h1>

      <div className="space-y-6">
        {dummyThread.posts.map((post) => (
          <div key={post.id} className="bg-zinc-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src={post.avatar}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-sm">
                <Link href={`/profile/${post.author}`} className="font-semibold hover:underline">
                  {post.author}
                </Link>
                <p className="text-xs text-zinc-400">Posted on {post.date}</p>
              </div>
              {isAdmin && (
                <div className="ml-auto flex gap-2">
                  <button className="text-sm text-red-500 hover:underline">🗑 Delete</button>
                  <button className="text-sm text-yellow-400 hover:underline">Ban</button>
                </div>
              )}
            </div>

            {post.deleted ? (
              <p className="text-sm italic text-red-400">
                Post was deleted for: {post.deletedReason}
              </p>
            ) : (
              <p className="text-sm text-zinc-300">{post.content}</p>
            )}
          </div>
        ))}
      </div>

      {isLoggedIn && (
        <div className="mt-6 space-y-2">
          <h2 className="text-lg font-semibold">Post a Reply</h2>
          <textarea
            className="w-full bg-zinc-800 border border-zinc-600 rounded p-2 text-sm text-white"
            rows={5}
            placeholder="Type your reply here..."
          />
          <div className="flex justify-end">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
              Submit Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
