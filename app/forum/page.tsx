"use client";

import Link from "next/link";

const forumStructure = [
  {
    title: "Community",
    forums: [
      { slug: "chat", name: "Chat", description: "Be social!" },
      { slug: "updates", name: "Latest Updates", description: "Read and discuss news about the retro gaming world." },
      { slug: "collectors", name: "Collector's Corner", description: "Show off your collection!" },
      { slug: "competitions", name: "Competitions", description: "Organize and participate in competitions." },
    ],
  },
  {
    title: "PlayStation 2",
    forums: [
      { slug: "ps2-games", name: "Games", description: "Discuss different games available on the PlayStation 2." },
      { slug: "ps2-requests", name: "Requests/Ideas", description: "Suggest new achievements." },
      { slug: "ps2-troubleshooting", name: "Troubleshooting", description: "Emulator issues? Bugs? Make a post!" },
    ],
  },
  {
    title: "GameCube",
    forums: [
      { slug: "gc-games", name: "Games", description: "Discuss different games available on the GameCube." },
      { slug: "gc-requests", name: "Requests/Ideas", description: "Suggest new achievements." },
      { slug: "gc-troubleshooting", name: "Troubleshooting", description: "Emulator issues? Bugs? Make a post!" },
    ],
  },
];

export default function ForumOverviewPage() {
  return (
    <div className="space-y-10 py-8">
      <h1 className="text-3xl font-bold mb-6">Forum</h1>

      {forumStructure.map((section) => (
        <div key={section.title}>
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="divide-y divide-zinc-700 bg-zinc-800 rounded-xl overflow-hidden">
            {section.forums.map((forum) => (
              <div key={forum.slug} className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-4 hover:bg-zinc-700">
                <div>
                  <Link href={`/forum/${forum.slug}`} className="text-lg font-bold text-purple-400 hover:underline">
                    {forum.name}
                  </Link>
                  <p className="text-sm text-zinc-400">{forum.description}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-sm text-right">
                  <p className="text-zinc-300">Threads: 123</p>
                  <p className="text-zinc-300">Replies: 456</p>
                  <p className="text-zinc-400 text-xs">Last post by <span className="text-white">UserX</span> on 2025-04-17 – <Link href="#" className="underline">View</Link></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
