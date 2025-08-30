"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface GameSummary {
  slug: string;
  title: string;
  achievements: number;
  releaseYear: string | number;
  owners: number;
  cover: string;
  icon: string;
}

export default function GameLibrary() {
  const { console } = useParams();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [games, setGames] = useState<GameSummary[]>([]);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [view, setView] = useState<"tile" | "list">("tile");
  const [sort, setSort] = useState(searchParams.get("sort") || "alphabetical");

  const handleSortChange = (newSort: string) => {
  setSort(newSort);
  setPage(1);
  router.push(`/games/${console}?page=1&sort=${newSort}`);
  };

  useEffect(() => {
  const fetchGames = async () => {
    const res = await fetch(`/api/games/console/${console}?page=${page}&sort=${sort}`);
    const data = await res.json();
    setGames(data.games);
    setTotalPages(data.totalPages);
  };
  fetchGames();
}, [console, page, sort]);


  const handleToggleView = () => {
    setView((prev) => (prev === "tile" ? "list" : "tile"));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`/games/${console}?page=${newPage}&sort=${sort}`);
  };

  return (
    <div className="px-6 py-10 space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl font-bold capitalize">{console} Library</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          {session?.user?.isAdmin && (
            <Link
              href={`/games/${console}/new`}
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded"
            >
              + Add New Game
            </Link>
          )}

          <select
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="text-sm px-3 py-2 bg-zinc-800 rounded border border-zinc-600 text-white"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="achievements">Most Achievements</option>
            <option value="owned">Most Owned</option>
            <option value="year">Newest Releases</option>
          </select>

          <button
            onClick={handleToggleView}
            className="text-sm px-3 py-2 bg-zinc-800 rounded border border-zinc-600"
          >
            Switch to {view === "tile" ? "List" : "Tile"} View
          </button>
        </div>
      </div>


      {view === "tile" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {games.map((game) => (
            <Link key={game.slug} href={`/games/${console}/${game.slug}`}>
              <Image
                src={game.cover}
                alt={game.title}
                width={200}
                height={300}
                className="rounded w-full object-cover hover:opacity-80 transition"
              />
            </Link>
          ))}
        </div>
      ) : (
        <table className="w-full text-left text-sm">
          <thead className="text-zinc-400 border-b border-zinc-600">
            <tr>
              <th className="py-2">Icon</th>
              <th>Title</th>
              <th>Achievements</th>
              <th>Release</th>
              <th>Owners</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.slug} className="border-b border-zinc-800 hover:bg-zinc-800">
                <td className="py-2">
                  <Image src={game.icon} alt={game.title} width={32} height={32} />
                </td>
                <td>
                  <Link href={`/games/${console}/${game.slug}`} className="text-purple-400 hover:underline">
                    {game.title}
                  </Link>
                </td>
                <td>{game.achievements}</td>
                <td>{game.releaseYear}</td>
                <td>{game.owners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 pt-6">
        <button
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
          className="text-sm px-3 py-1 bg-zinc-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm pt-1">Page {page} of {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
          className="text-sm px-3 py-1 bg-zinc-800 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
