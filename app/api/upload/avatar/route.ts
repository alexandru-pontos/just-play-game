import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const userId = formData.get("userId") as string;

  if (!file || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
  }

  // Allow either logged-in user or explicit userId (for registration flow)
  let targetId = userId;

  if (!targetId) {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    targetId = session.user.id;
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const filePath = path.join(process.cwd(), "public", "avatars", `${targetId}.png`);

  try {
    await writeFile(filePath, buffer);
    return NextResponse.json({ path: `/avatars/${targetId}.png` }, { status: 200 });
  } catch (err) {
    console.error("Failed to save avatar:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
