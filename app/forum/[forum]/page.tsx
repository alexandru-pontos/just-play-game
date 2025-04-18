"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const dummyThreads = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Thread Title ${i + 1}`,
  author: `User${i + 1}`,
  date: `2025-04-${10 + i}`,
  replies: Math.floor(Math.random() * 100),
  lastPostUser: `User${i + 3}`,
  lastPostDate: `2025-04-${15 + i}`,
}));

export default function ForumThreadListPage() {
  const { forum } = useParams();

  return (
    <div className="py-8 space-y-6">
      <h1 className="text-2xl font-bold capitalize">{forum} Forum</h1>

      <div className="bg-zinc-800 divide-y divide-zinc-700 rounded-xl overflow-hidden">
        {dummyThreads.map((thread) => (
          <div key={thread.id} className="flex flex-col sm:flex-row sm:justify-between px-4 py-3 hover:bg-zinc-700">
            <div>
              <Link href={`/forum/${forum}/${thread.id}`} className="text-lg font-semibold text-purple-400 hover:underline">
                {thread.title}
              </Link>
              <p className="text-sm text-zinc-400">
                Started by <span className="text-white">{thread.author}</span> on {thread.date}
              </p>
            </div>
            <div className="text-sm text-right pt-2 sm:pt-0">
              <p className="text-zinc-300">Replies: {thread.replies}</p>
              <p className="text-zinc-400 text-xs">
                Last post by <span className="text-white">{thread.lastPostUser}</span> on {thread.lastPostDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">New Thread</button>
        <div className="text-sm text-zinc-400">Page 1 of 5</div>
      </div>
    </div>
  );
}
