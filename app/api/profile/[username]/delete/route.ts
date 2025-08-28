import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/app/auth";
import { cookies } from "next/headers";

export async function POST(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const session = await auth();

  if (!session || !session.user?.name || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (params.username !== session.user.name) {
    return NextResponse.json({ error: "Cannot delete another user" }, { status: 403 });
  }

  try {
    await prisma.userAchievement.deleteMany({
      where: { userGame: { userId: session.user.id } },
    });

    await prisma.userGame.deleteMany({
      where: { userId: session.user.id },
    });

    await prisma.forumPost.deleteMany({
      where: { authorId: session.user.id },
    });

    // Finally delete the user
    await prisma.user.delete({
      where: { id: session.user.id },
    });

    return NextResponse.json({ message: "Account deleted" }, { status: 200 });
  } catch (err) {
    console.error("Failed to delete user:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
