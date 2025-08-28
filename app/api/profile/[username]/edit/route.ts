import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest, { params }: { params: { username: string } }) {
  const session = await auth();

  if (!session || !session.user?.name || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, password, bio, avatar } = await req.json();

  if (params.username !== session.user.name) {
    return NextResponse.json({ error: "You cannot edit another user's profile" }, { status: 403 });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        email,
        bio,
        avatar,
        ...(password ? { password: await bcrypt.hash(password, 10) } : {}),
      },
    });

    return NextResponse.json({ message: "Profile updated" }, { status: 200 });
  } catch (err) {
    console.error("Update failed:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
