// app/games/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function GameLibrarySelector() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      <h1 className="text-3xl font-bold">Select a Console</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          href="/games/ps2"
          className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white w-64 h-40 flex flex-col items-center justify-center rounded-2xl text-xl shadow-md text-center transition"
        >
          <Image
            src="/icons/ps2.png"
            alt="PS2 Icon"
            width={78}
            height={78}
            className="mb-2"
          />
          <span className="text-sm mt-1">Access PlayStation 2 Library</span>
        </Link>

        <Link
          href="/games/gamecube"
          className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white w-64 h-40 flex flex-col items-center justify-center rounded-2xl text-xl shadow-md text-center transition"
        >
          <Image
            src="/icons/gamecube.png"
            alt="GameCube Icon"
            width={78}
            height={78}
            className="mb-2"
          />
          <span className="text-sm mt-1">Access GameCube Library</span>
        </Link>
      </div>
    </div>
  );
}
