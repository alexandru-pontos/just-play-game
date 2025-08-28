"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const dummyUser = {
  username: "PlayerOne",
  ps2Library: Array.from({ length: 57 }, (_, i) => ({
    title: `PS2 Game ${i + 1}`,
    slug: `ps2-game-${i + 1}`,
  })),
  gcLibrary: Array.from({ length: 42 }, (_, i) => ({
    title: `GC Game ${i + 1}`,
    slug: `gc-game-${i + 1}`,
  })),
};

export default function UserLibraryPage({ params }: { params: { console: string } }) {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = 20;
  const library = params.console === "ps2" ? dummyUser.ps2Library : dummyUser.gcLibrary;
  const totalPages = Math.ceil(library.length / perPage);
  const games = library.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-bold">
        {dummyUser.username}'s {params.console.toUpperCase()} Library
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, i) => (
          <li key={i} className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700">
            <Link href={`/games/${params.console}/${game.slug}`} className="text-purple-400 hover:underline">
              {game.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between pt-6 text-sm">
        <Link
          href={`?page=${Math.max(1, page - 1)}`}
          className={`px-4 py-2 rounded ${page > 1 ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-zinc-700 text-zinc-500 cursor-not-allowed"}`}
        >
          Previous
        </Link>

        <span className="text-zinc-300">
          Page {page} of {totalPages}
        </span>

        <Link
          href={`?page=${Math.min(totalPages, page + 1)}`}
          className={`px-4 py-2 rounded ${page < totalPages ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-zinc-700 text-zinc-500 cursor-not-allowed"}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}