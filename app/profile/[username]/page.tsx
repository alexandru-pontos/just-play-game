// app/profile/[username]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function UserProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const libraryRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();
  const isOwnProfile = session?.user?.name === username;


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/profile/${username}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  const handleStatClick = (type: string) => {
    if (type === "library") {
      libraryRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "perfected") {
      document.getElementById("perfected-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "achievements") {
      window.location.href = `/profile/${username}/achievements`;
    } else if (type === "posts") {
      window.location.href = `/profile/${username}/posts`;
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!user) return <p className="text-center py-10 text-red-500">User not found.</p>;

  return (
    <div className="py-10 space-y-8">
      <div className="flex items-center gap-6">
        <Image src={user.avatar || "/default-avatar.png"} alt="Avatar" width={80} height={80} className="rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-zinc-400">{user.bio || "No bio provided."}</p>
        </div>
      </div>

      {isOwnProfile && (
        <div className="flex gap-4">
          <Link
            href={`/profile/${username}/edit`}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded"
          >
            Log Out
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <button onClick={() => handleStatClick("library")} className="bg-zinc-800 p-4 rounded-xl text-center cursor-pointer hover:bg-zinc-700">
          <p className="text-lg font-bold text-purple-400">{user.games.length}</p>
          <p>Games Owned</p>
        </button>
        <button onClick={() => handleStatClick("perfected")} className="bg-zinc-800 p-4 rounded-xl text-center cursor-pointer hover:bg-zinc-700">
          <p className="text-lg font-bold text-purple-400">0</p>
          <p>Perfected Games</p>
        </button>
        <button onClick={() => handleStatClick("achievements")} className="bg-zinc-800 p-4 rounded-xl text-center cursor-pointer hover:bg-zinc-700">
          <p className="text-lg font-bold text-purple-400">{
            user.games.reduce((acc: number, g: any) => acc + g.achievements.length, 0)
          }</p>
          <p>Achievements</p>
        </button>
        <button onClick={() => handleStatClick("posts")} className="bg-zinc-800 p-4 rounded-xl text-center cursor-pointer hover:bg-zinc-700">
          <p className="text-lg font-bold text-purple-400">{user.posts?.length ?? 0}</p>
          <p>Forum Posts</p>
        </button>
      </div>

      <div id="perfected-section" className="bg-zinc-800 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-3">Perfected Games</h2>
        <p className="text-sm text-zinc-400">Feature coming soon.</p>
      </div>

      <div ref={libraryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">PS2 Library</h2>
          <ul className="text-sm text-zinc-300 space-y-1">
            {user.games
              .filter((g: any) => g.game.consoleId?.toLowerCase().includes("ps2"))
              .slice(0, 10)
              .map((g: any, i: number) => (
                <li key={i}>
                  <Link href={`/games/ps2/${g.game.slug}`} className="text-purple-400 hover:underline">
                    {g.game.title}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="text-right text-xs text-purple-400 mt-2 hover:underline">
            <Link href={`/profile/${user.name}/library/ps2`}>
              View All
            </Link>
          </p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">GameCube Library</h2>
          <ul className="text-sm text-zinc-300 space-y-1">
            {user.games
              .filter((g: any) => g.game.consoleId?.toLowerCase().includes("gamecube"))
              .slice(0, 10)
              .map((g: any, i: number) => (
                <li key={i}>
                  <Link href={`/games/gamecube/${g.game.slug}`} className="text-purple-400 hover:underline">
                    {g.game.title}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="text-right text-xs text-purple-400 mt-2 hover:underline">
            <Link href={`/profile/${user.name}/library/gamecube`}>
              View All
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
