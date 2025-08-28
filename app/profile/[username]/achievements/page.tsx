"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const dummyUser = {
  username: "PlayerOne",
  avatar: "/default-avatar.png",
  games: [
    {
      title: "MGS3",
      slug: "mgs3",
      console: "PS2",
      achievements: [
        { id: 1, title: "Virtuous Mission" },
        { id: 2, title: "No Alerts" },
      ],
    },
    {
      title: "Wind Waker",
      slug: "wind-waker",
      console: "GameCube",
      achievements: [
        { id: 3, title: "Master Sword" },
      ],
    },
  ],
};

export default function UserAchievementsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="py-10 space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <Image src={dummyUser.avatar} alt="avatar" width={64} height={64} className="rounded-full" />
        <h1 className="text-2xl font-bold">{dummyUser.username}'s Achievements</h1>
      </div>

      <div className="space-y-4">
        {dummyUser.games.map((game, i) => (
          <div key={i} className="bg-zinc-800 rounded-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setExpanded(expanded === game.title ? null : game.title)}
                className="text-left font-semibold hover:underline"
              >
                {game.title} ({game.console})
              </button>
              <Link
                href={`/games/${game.console.toLowerCase()}/${game.slug}`}
                className="text-sm text-purple-400 hover:underline"
              >
                Go to game page
              </Link>
            </div>
            {expanded === game.title && (
              <ul className="px-6 pb-4 space-y-1 text-sm text-zinc-300">
                {game.achievements.map((a) => (
                  <li key={a.id}>✓ {a.title}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
