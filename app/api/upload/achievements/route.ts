import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import path from "node:path";
import { promises as fs } from "node:fs";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    await requireAdmin();

    const form = await req.formData();
    const file = form.get("file");
    const slug = (form.get("slug") as string) || "";
    const achievementId = (form.get("achievementId") as string) || "";

    if (!(file instanceof File)) return NextResponse.json({ error: "Missing file" }, { status: 400 });
    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
    }
    if (!achievementId) return NextResponse.json({ error: "Missing achievementId" }, { status: 400 });

    const mime = file.type;
    const ext = mime === "image/png" ? "png" : mime === "image/jpeg" ? "jpg" : "";
    if (!ext) return NextResponse.json({ error: "Only PNG/JPEG allowed" }, { status: 415 });

    const baseDir = path.join(process.cwd(), "public", "games", slug, "achievements");
    await fs.mkdir(baseDir, { recursive: true });

    const filename = `${achievementId}.${ext}`;
    const diskPath = path.join(baseDir, filename);

    const buf = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(diskPath, buf);

    const publicPath = `/games/${slug}/achievements/${filename}`;
    return NextResponse.json({ path: publicPath });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json({ error: "Upload failed" }, { status });
  }
}
