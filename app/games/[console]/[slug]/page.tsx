"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function GamePage() {
  const { slug, console } = useParams();
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(`/api/games/${slug}`);
      const data = await res.json();
      setGame(data);
      setLoading(false);
    };
    fetchGame();
  }, [slug]);

  if (loading) return <p className="p-10 text-center">Loading game...</p>;

  if (!game) {
    return (
      <div className="py-20 text-center text-2xl font-bold text-red-500">
        This game does not exist in the library.
      </div>
    );
  }

  // Game directory used for image paths
  const gameDir = game.slug;

  // Build chart data
  const distributionData = (game.achievements || []).reduce(
    (acc: { unlocked: number; users: number }[], ach: any) => {
      const index = ach.unlocks || 0;
      acc[index] = acc[index] || { unlocked: index, users: 0 };
      acc[index].users += 1;
      return acc;
    },
    []
  );


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-10">
      {/* LEFT SIDE */}
      <div className="md:col-span-3 space-y-6">
        <h1 className="text-3xl font-bold">{game.title}</h1>
        <p className="text-sm text-zinc-400">{game.console?.name || "Unknown Console"}</p>

        <div className="flex items-center gap-6">
          <Image
            src={`/games/${gameDir}/icon.png`}
            alt="icon"
            width={64}
            height={64}
            className="rounded"
          />
          <div className="text-sm space-y-1">
            <p><strong>Developer:</strong> {game.developer || "N/A"}</p>
            <p><strong>Publisher:</strong> {game.publisher || "N/A"}</p>
            <p><strong>Release:</strong> {game.releaseDate || "N/A"}</p>
          </div>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/games/${gameDir}/screenshot${n}.png`}
              alt={`screenshot ${n}`}
              width={400}
              height={300}
              className="rounded object-cover w-full"
            />
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-bold mb-2">Achievements</h2>
          <ul className="space-y-4">
            {game.achievements?.map((ach: any) => (
              <li
                key={ach.id}
                className="flex items-center gap-4 bg-zinc-800 rounded p-3"
              >
                <Image
                  src={`/achievements/${gameDir}/${ach.id}_locked.png`}
                  alt={ach.title}
                  width={48}
                  height={48}
                  className="rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{ach.title}</h3>
                  <p className="text-sm text-zinc-400">{ach.description}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-zinc-300">{ach.unlocks} unlocks</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        <Image
          src={`/games/${gameDir}/cover.png`}
          alt="cover"
          width={400}
          height={600}
          className="rounded w-full"
        />

        <div>
          <h2 className="text-lg font-bold mb-2">Achievement Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={distributionData}>
              <XAxis dataKey="unlocked" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#a855f7" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Latest Masters</h2>
          <ul className="text-sm text-zinc-300">
            <li>Coming soon...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
