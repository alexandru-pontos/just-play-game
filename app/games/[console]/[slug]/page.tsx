"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const gameDirectory = "mgs3"; // This would typically come from slug or DB

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
    { id: 1, title: "Virtuous Mission", description: "Complete the prologue.", unlockRate: 82 },
    { id: 2, title: "No Alerts", description: "Finish without alerts.", unlockRate: 28 },
  ],
  stats: [
    { count: 10, users: 3 },
    { count: 20, users: 12 },
    { count: 30, users: 5 },
  ],
  masters: [
    { username: "StealthFox", date: "2024-03-10" },
    { username: "ZeroAlerts", date: "2024-04-02" },
  ],
};

export default function GameDetailPage() {
  const { slug, console } = useParams();
  const isAdmin = false;
  const isOwned = true;
  const achieved = [1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-8">
      {/* Left Side (Main Content) */}
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{dummyGame.title}</h1>
          <p className="text-zinc-400">{dummyGame.console}</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src={dummyGame.icon} alt="icon" width={64} height={64} />
          <div className="text-sm">
            <p><strong>Developer:</strong> {dummyGame.developer}</p>
            <p><strong>Publisher:</strong> {dummyGame.publisher}</p>
            <p><strong>Release Date:</strong> {dummyGame.releaseDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {dummyGame.screenshots.map((src, i) => (
            <Image key={i} src={src} alt={`Screenshot ${i + 1}`} width={320} height={180} className="rounded" />
          ))}
        </div>

        {isOwned && (
          <div className="text-sm">
            <p className="mt-2">
              <strong>Completion:</strong> {achieved.length}/{dummyGame.achievements.length} achievements
            </p>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <div className="space-y-4">
            {dummyGame.achievements.map((a) => {
              const isUnlocked = achieved.includes(a.id);
              const iconPath = `/achievements/${gameDirectory}/${a.id}_${isUnlocked ? "unlocked" : "locked"}.png`;
              return (
                <div
                  key={a.id}
                  className="bg-zinc-800 p-3 rounded flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <Image src={iconPath} alt={a.title} width={48} height={48} />
                    <div>
                      <p className="font-semibold">{a.title}</p>
                      <p className="text-sm text-zinc-400">{a.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-400">{a.unlockRate}% unlocked</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <aside className="space-y-6">
        <div>
          <Image
            src={dummyGame.coverArt}
            alt="cover"
            width={300}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Achievements Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyGame.stats}>
                <XAxis dataKey="count" label={{ value: "Achievements", position: "insideBottom", offset: -5 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="users" fill="#A855F7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Latest Masters</h3>
          <ul className="text-sm space-y-1">
            {dummyGame.masters.map((m, i) => (
              <li key={i}>{m.username} – {m.date}</li>
            ))}
          </ul>
        </div>

        {isAdmin && (
          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Edit Game Page
          </button>
        )}
      </aside>
    </div>
  );
}
