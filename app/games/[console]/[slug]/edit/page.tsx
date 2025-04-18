"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const gameDirectory = "mgs3";

const dummyGame = {
  title: "Metal Gear Solid 3: Snake Eater",
  console: "PlayStation 2",
  icon: `/games/${gameDirectory}/icon.png`,
  developer: "Konami",
  publisher: "Konami",
  releaseDate: "2004-11-17",
  screenshots: [
    `/games/${gameDirectory}/screenshot1.png`,
    `/games/${gameDirectory}/screenshot2.png`
  ],
  coverArt: `/games/${gameDirectory}/cover.png`,
  achievements: [
    { id: 1, title: "Virtuous Mission", description: "Complete the prologue." },
    { id: 2, title: "No Alerts", description: "Finish without alerts." },
  ],
};

export default function GameEditorPage() {
  const { slug, console } = useParams();
  const [game, setGame] = useState(dummyGame);
  const [editing, setEditing] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <input
            type="text"
            defaultValue={game.title}
            className="text-3xl font-bold bg-transparent border-b border-zinc-700 w-full"
          />
          <p className="text-zinc-400 mt-1">{game.console}</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src={game.icon} alt="icon" width={64} height={64} />
          <div className="space-y-1 text-sm">
            <input
              type="text"
              defaultValue={game.developer}
              className="bg-zinc-800 px-2 py-1 rounded w-full"
              placeholder="Developer"
            />
            <input
              type="text"
              defaultValue={game.publisher}
              className="bg-zinc-800 px-2 py-1 rounded w-full"
              placeholder="Publisher"
            />
            <input
              type="date"
              defaultValue={game.releaseDate}
              className="bg-zinc-800 px-2 py-1 rounded w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {game.screenshots.map((src, i) => (
              <div key={i} className="relative">
                <Image src={src} alt={`Screenshot ${i}`} width={320} height={180} className="rounded" />
                <button className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded">Remove</button>
              </div>
            ))}
            <button className="bg-zinc-700 rounded p-4 text-sm">+ Add Screenshot</button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <div className="space-y-4">
            {game.achievements.map((a) => (
              <div
                key={a.id}
                className="bg-zinc-800 p-3 rounded flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={`/achievements/${gameDirectory}/${a.id}_locked.png`}
                    alt={a.title}
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-semibold">{a.title}</p>
                    <p className="text-sm text-zinc-400">{a.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-sm text-yellow-400">📝</button>
                  <button className="text-sm text-red-500">🗑️</button>
                </div>
              </div>
            ))}
            <button className="bg-zinc-700 hover:bg-zinc-600 rounded px-4 py-2 text-sm">+ Add New Achievement</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Save Changes</button>
          <button className="bg-zinc-600 text-white px-6 py-2 rounded hover:bg-zinc-500">Cancel</button>
          <button className="ml-auto bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Delete Game</button>
        </div>
      </div>

      <aside>
        <Image
          src={game.coverArt}
          alt="cover"
          width={300}
          height={400}
          className="rounded-xl"
        />
        <div className="mt-2">
          <button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2 rounded text-sm">
            Change Cover Art
          </button>
        </div>
      </aside>
    </div>
  );
}
