"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const dummyGames = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `Game ${i + 1}`,
  achievements: 10 + i,
  releaseYear: 2000 + i,
  owners: 50 + i,
  cover: "/placeholder.png",
  icon: "/placeholder.png",
}));

export default function ConsoleGameLibraryPage() {
  const { console } = useParams();
  const [view, setView] = useState<"tile" | "list">("tile");
  const [sort, setSort] = useState("alphabetical");
  const isAdmin = false; // replace with session check!!

  return (
    <div className="py-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold capitalize">{console} Game Library</h1>

        <div className="flex items-center gap-4">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-sm"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="achievements">Achievements</option>
            <option value="owned">Most Owned</option>
            <option value="year">Release Year</option>
          </select>

          <button
            onClick={() => setView("tile")}
            className={cn(
              "px-3 py-1 rounded border text-sm",
              view === "tile"
                ? "bg-purple-600 border-purple-700 text-white"
                : "bg-zinc-800 border-zinc-600 text-zinc-300"
            )}
          >
            Tile
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "px-3 py-1 rounded border text-sm",
              view === "list"
                ? "bg-purple-600 border-purple-700 text-white"
                : "bg-zinc-800 border-zinc-600 text-zinc-300"
            )}
          >
            List
          </button>
        </div>
      </div>

      {isAdmin && (
        <div>
          <Link
            href="/games/new"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            + Add New Game
          </Link>
        </div>
      )}

      {/* Game List */}
      <div
        className={cn(
          view === "tile"
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            : "flex flex-col gap-2"
        )}
      >
        {dummyGames.map((game) => (
          <Link
            key={game.id}
            href={`/games/${console}/${game.id}`}
            className={cn(
              view === "tile"
                ? "bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700"
                : "bg-zinc-800 px-4 py-3 rounded-xl hover:bg-zinc-700 flex items-center gap-4"
            )}
          >
            {view === "tile" ? (
              <img
                src={game.cover}
                alt={game.title}
                className="w-full aspect-[3/4] object-cover rounded"
              />
            ) : (
              <>
                <img
                  src={game.icon}
                  alt={game.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <p className="font-semibold">{game.title}</p>
                  <p className="text-sm text-zinc-400">
                    {game.achievements} achievements · {game.releaseYear} · {game.owners} owners
                  </p>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-4">
        <p className="text-sm text-zinc-400">Page 1 of 5</p>
      </div>
    </div>
  );
}
