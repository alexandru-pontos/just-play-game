import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import EditGameClient from "./_EditGameClient";

export default async function EditGamePage({
  params,
}: { params: { console: string; slug: string } }) {
  const session = await getSession();
  if (!session?.user?.isAdmin) {
    redirect(`/games/${params.console}/${params.slug}`);
  }

  const game = await prisma.game.findUnique({
    where: { slug: params.slug },
    include: {
      console: true,
      achievements: {
        select: { id: true, title: true, description: true, image: true },
      },
      users: false, // not needed here
    },
  });

  if (!game) redirect(`/games/${params.console}`); // or 404

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Game</h1>
      <EditGameClient consoleSlug={params.console} initialGame={game as any} />
    </div>
  );
}
