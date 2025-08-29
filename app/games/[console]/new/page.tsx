// app/games/[console]/new/page.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import NewGameForm from "./_NewGameForm";
import { resolveConsoleName } from "@/lib/consoleMap";

export default async function NewGamePage({
  params,
}: {
  params: { console: string };
}) {
  const session = await getSession();
  if (!session?.user?.isAdmin) {
    // You can redirect to a 403 page if you have one
    redirect(`/games/${params.console}`); 
  }

  const consoleName = resolveConsoleName(params.console);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Add New Game – {consoleName}
      </h1>
      <NewGameForm consoleSlug={params.console} />
    </div>
  );
}
