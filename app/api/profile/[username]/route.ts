import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: { username: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { name: params.username },
      include: {
        games: {
          include: {
            game: {
              include: {
                achievements: true,
              },
            },
            achievements: {
              include: {
                achievement: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      games: user.games,
    });
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
