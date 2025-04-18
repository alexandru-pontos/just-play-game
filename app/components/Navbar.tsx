// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full bg-zinc-800 text-white shadow-md border-b border-zinc-700">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium">
          <li className="relative group">
            <Link href="/games" className="cursor-pointer hover:text-purple-400">Games</Link>
            {/* Optional dropdown (desktop only) */}
            <div className="absolute left-0 mt-2 hidden group-hover:flex bg-zinc-900 text-white rounded shadow-lg border border-zinc-700 min-w-[160px]">
              <ul className="py-2">
                <li>
                  <Link href="/games/ps2" className="flex px-4 py-2 hover:bg-zinc-800">PlayStation 2</Link>
                </li>
                <li>
                  <Link href="/games/gamecube" className="flex px-4 py-2 hover:bg-zinc-800">GameCube</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/forum" className="hover:text-purple-400">Forum</Link>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/games" className="block hover:text-purple-400">Games</Link>
            </li>
            <li className="ml-4">
              <Link href="/games/ps2" className="block hover:text-purple-400">PlayStation 2</Link>
            </li>
            <li className="ml-4">
              <Link href="/games/gamecube" className="block hover:text-purple-400">GameCube</Link>
            </li>
            <li>
              <Link href="/forum" className="block hover:text-purple-400">Forum</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
