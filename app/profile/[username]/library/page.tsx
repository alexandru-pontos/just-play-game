import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

type ProfileHeader = {
  user: { name: string; avatar: string | null };
};

async function getUser(username: string) {
  return prisma.user.findUnique({
    where: { name: username },
    select: { name: true, avatar: true },
  });
}

export default async function UserLibrarySelector({
  params,
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 py-16">
        <h1 className="text-2xl font-semibold">User not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      {/* Header with avatar + name */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={user.avatar || "/avatar_placeholder.png"}
          alt={user.name}
          width={72}
          height={72}
          className="rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">{user.name}&apos;s Library</h1>
      </div>

      <h2 className="text-3xl font-bold">Select a Console</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <Link
          href={`/profile/${encodeURIComponent(user.name)}/library/ps2`}
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
          href={`/profile/${encodeURIComponent(user.name)}/library/gamecube`}
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
