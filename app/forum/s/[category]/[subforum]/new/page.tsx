import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import NewThreadForm from "./_NewThreadForm";

export default async function NewThreadPage({
  params,
}: { params: { category: string; subforum: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return <div className="max-w-3xl mx-auto p-6">Please sign in to start a new thread.</div>;
  }

  const sub = await prisma.forumSubforum.findFirst({
    where: { slug: params.subforum, category: { slug: params.category } },
    select: { id: true, name: true, category: { select: { name: true, slug: true } } },
  });
  if (!sub) return <div className="max-w-3xl mx-auto p-6">Subforum not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">New Thread in {sub.category.name} / {sub.name}</h1>
      <NewThreadForm subforumId={sub.id} />
    </div>
  );
}
