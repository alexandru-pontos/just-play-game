"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type UnlockedAch = {
  title: string;
  description: string;
  image: string | null;
};

export default function LibraryRow({
  game,
  colSpan = 4,
}: {
  game: {
    slug: string;
    title: string;
    releaseDate: string; // already ISO-YYYY-MM-DD from server
    icon: string;
    consoleSlug: string;
    unlocked: number;
    total: number;
    unlockedAchievements: UnlockedAch[];
  };
  colSpan?: number;
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <>
      <tr className="border-t border-zinc-800 align-top">
        <td className="px-3 py-2">
          <Image
            src={game.icon}
            alt={game.title}
            width={32}
            height={32}
            className="rounded object-cover"
          />
        </td>

        {/* Title cell: prevent multi-line overflow on mobile */}
        <td className="px-3 py-2 min-w-0">
          <div
            className="
              max-w-[170px] sm:max-w-[260px] md:max-w-none
              overflow-hidden text-ellipsis whitespace-nowrap
            "
            title={game.title}
          >
            <Link
              href={`/games/${game.consoleSlug}/${game.slug}`}
              className="hover:underline"
            >
              {game.title}
            </Link>
          </div>
        </td>

        <td className="px-3 py-2 whitespace-nowrap">{game.releaseDate}</td>

        <td className="px-3 py-2 text-right pr-4">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className="inline-flex items-center gap-1 underline decoration-dotted hover:no-underline"
            title={open ? "Hide unlocked achievements" : "Show unlocked achievements"}
          >
            {game.unlocked}
            {game.total > 0 ? (
              <>
                /<span>{game.total}</span>
              </>
            ) : null}
          </button>
        </td>
      </tr>

      {open && (
        <tr className="border-t border-zinc-800">
          <td className="px-3 py-2" colSpan={colSpan}>
            {game.unlockedAchievements.length === 0 ? (
              <div className="text-sm text-zinc-400">No achievements unlocked.</div>
            ) : (
              <ul className="space-y-3">
                {game.unlockedAchievements.map((a, i) => (
                  <li
                    key={`${game.slug}-ach-${i}`}
                    className="flex items-start gap-3 rounded border border-zinc-800 bg-zinc-900/40 p-3"
                  >
                    <Image
                      src={a.image || `/ach_placeholder.png`}
                      alt={a.title}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{a.title}</div>
                      <div className="text-sm text-zinc-300 whitespace-pre-wrap">
                        {a.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
