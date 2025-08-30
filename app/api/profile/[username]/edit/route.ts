import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// If you already hash passwords elsewhere, you can import and use it here.
// For safety, this sample only updates password if you add hashing.

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  const session = await getServerSession(authOptions);
  const { username } = await context.params;

  if (!session?.user?.name) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Hard block: only the owner can access/edit their profile (no admin bypass)
  if (session.user.name !== username) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const user = await prisma.user.findUnique({
    where: { name: username },
    select: {
      email: true,
      bio: true,
      avatar: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  const session = await getServerSession(authOptions);
  const { username } = await context.params;

  if (!session?.user?.name) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Hard block: only the owner can edit
  if (session.user.name !== username) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const { email, bio, password, avatar } = body as {
    email?: string;
    bio?: string;
    password?: string;
    avatar?: string;
  };

  // Build update payload
  const data: Record<string, any> = {};
  if (typeof email === "string") data.email = email;
  if (typeof bio === "string") data.bio = bio;
  if (typeof avatar === "string") data.avatar = avatar;
  if (typeof password === "string" && password) {
    data.password = await bcrypt.hash(password, 10);
  }

  try {
    const updated = await prisma.user.update({
      where: { name: username },
      data,
      select: { email: true, bio: true, avatar: true, password: true },
    });

    return NextResponse.json({ ok: true, user: updated });
  } catch (e) {
    console.error("Profile update failed:", e);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
