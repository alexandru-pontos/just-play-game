"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Section */}
      <section className="lg:col-span-3 space-y-6">
        {/* News */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">News</h2>
          <ul className="space-y-2">
            {/* These would be dynamically generated */}
            <li><Link href="/forum/news/123" className="text-purple-400 hover:underline">[News] New achievements added for MGS3</Link></li>
            <li><Link href="/forum/news/124" className="text-purple-400 hover:underline">[News] Site maintenance scheduled</Link></li>
            <li><Link href="/forum/news/125" className="text-purple-400 hover:underline">[News] Welcome to Just Play Game!</Link></li>
          </ul>
        </div>

        {/* Trending Games */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Trending Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder cards */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-zinc-700 rounded p-2 text-center">Game {i + 1}</div>
            ))}
          </div>
        </div>

        {/* Online Users Chart */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Currently Online</h2>
          <div className="h-40 bg-zinc-700 rounded flex items-center justify-center">
            [Line Chart Placeholder]
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Recent Forum Posts</h2>
          <ul className="space-y-2">
            <li><Link href="/forum/posts/789" className="text-purple-400 hover:underline">Melee speedrun tips?</Link></li>
            <li><Link href="/forum/posts/790" className="text-purple-400 hover:underline">How do I unlock Snake's outfit?</Link></li>
            <li><Link href="/forum/posts/791" className="text-purple-400 hover:underline">Can we get more collector badges?</Link></li>
          </ul>
        </div>
      </section>

      {/* Right Section */}
      <aside className="space-y-6">
        {/* Statistics Section */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Statistics</h2>
          <ul className="text-sm space-y-1">
            <li>🎮 Games: 128</li>
            <li>🏆 Achievements: 529</li>
            <li>👥 Registered players: 1042</li>
            <li>✅ Achievements unlocked: 9281</li>
          </ul>
        </div>

        {/* Newest Achievements */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Newest Achievements</h2>
          <ul className="text-sm space-y-1">
            <li><Link href="/games/mgs3/achievements/1" className="text-purple-400 hover:underline">No Alerts Run</Link></li>
            <li><Link href="/games/melee/achievements/2" className="text-purple-400 hover:underline">Unlock All Characters</Link></li>
            <li><Link href="/games/sotc/achievements/3" className="text-purple-400 hover:underline">Defeat Colossus #5</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
