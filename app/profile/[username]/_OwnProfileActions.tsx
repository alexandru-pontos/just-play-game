"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function OwnProfileActions({ name }: { name: string }) {
  const { data: session } = useSession();
  const isOwnProfile = session?.user?.name === name;

  if (!isOwnProfile) return null;

  return (
    <div className="flex gap-4">
      <Link
        href={`/profile/${encodeURIComponent(name)}/edit`}
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
  );
}
