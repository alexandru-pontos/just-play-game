"use client";

import Image from "next/image";

const dummyUser = {
  username: "PlayerOne",
  avatar: "/default-avatar.png",
  bio: "Retro gaming enthusiast and completionist.",
  gamesOwned: 42,
  gamesPerfected: 9,
  achievementsUnlocked: 134,
  postsCount: 56,
  ps2Library: ["MGS3", "Jak II", "Sly Cooper"],
  gcLibrary: ["Metroid Prime", "Melee"],
  recentAchievements: [
    { id: 1, title: "No Alerts", game: "MGS3", console: "PS2", date: "2025-04-15" },
    { id: 2, title: "Beat Ganon", game: "Wind Waker", console: "GameCube", date: "2025-04-14" },
  ],
};

export default function UserProfilePage() {
  return (
    <div className="py-10 space-y-8">
      <div className="flex items-center gap-6">
        <Image src={dummyUser.avatar} alt="Avatar" width={80} height={80} className="rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{dummyUser.username}</h1>
          <p className="text-zinc-400">{dummyUser.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="text-lg font-bold text-purple-400">{dummyUser.gamesOwned}</p>
          <p>Games Owned</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="text-lg font-bold text-purple-400">{dummyUser.gamesPerfected}</p>
          <p>Perfected Games</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="text-lg font-bold text-purple-400">{dummyUser.achievementsUnlocked}</p>
          <p>Achievements</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="text-lg font-bold text-purple-400">{dummyUser.postsCount}</p>
          <p>Forum Posts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">PS2 Library</h2>
          <ul className="list-disc list-inside text-sm text-zinc-300">
            {dummyUser.ps2Library.map((title, i) => (
              <li key={i}>{title}</li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">GameCube Library</h2>
          <ul className="list-disc list-inside text-sm text-zinc-300">
            {dummyUser.gcLibrary.map((title, i) => (
              <li key={i}>{title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-zinc-800 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-3">Recent Achievements</h2>
        <ul className="space-y-2 text-sm">
          {dummyUser.recentAchievements.map((a) => (
            <li key={a.id}>
              <strong>{a.title}</strong> – {a.game} ({a.console}) on {a.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}