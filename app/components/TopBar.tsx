// components/TopBar.tsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function TopBar() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full bg-zinc-900 text-white px-4 py-3 flex justify-between items-center border-b border-zinc-700">
      <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition">
        Just Play Game
      </Link>

      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-zinc-700 transition"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Auth controls */}
        {!session ? (
          <>
            <button
              onClick={() => signIn()}
              className="px-4 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white"
            >
              Log In
            </button>
            <button
              onClick={() => signIn()}
              className="px-4 py-1 rounded border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
            >
              Sign Up
            </button>
          </>
        ) : (
          <Link href={`/profile`}>
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-purple-400 hover:opacity-80 cursor-pointer"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
