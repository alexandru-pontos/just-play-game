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
    const type = (form.get("type") as string) || ""; // "cover" | "icon" | "screenshot"
    const slug = (form.get("slug") as string) || "";
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }
    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
    }
    if (!["cover", "icon", "screenshot"].includes(type)) {
      return NextResponse.json({ error: "Invalid upload type" }, { status: 400 });
    }

    // Validate MIME
    const mime = file.type;
    const ext = mime === "image/png" ? "png" :
                mime === "image/jpeg" ? "jpg" :
                "";
    if (!ext) {
      return NextResponse.json({ error: "Only PNG/JPEG allowed" }, { status: 415 });
    }

    // Compute paths
    const baseDir = path.join(process.cwd(), "public", "games", slug);
    const screenshotsDir = path.join(baseDir, "screenshots");
    await fs.mkdir(baseDir, { recursive: true });
    await fs.mkdir(screenshotsDir, { recursive: true });

    let filename: string;
    if (type === "cover") filename = `cover.${ext}`;
    else if (type === "icon") filename = `icon.${ext}`;
    else filename = `${crypto.randomUUID()}.${ext}`;

    const diskPath = path.join(type === "screenshot" ? screenshotsDir : baseDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    await fs.writeFile(diskPath, Buffer.from(arrayBuffer));

    // Public URL (use forward slashes)
    const publicPath =
      type === "screenshot"
        ? `/games/${slug}/screenshots/${filename}`
        : `/games/${slug}/${filename}`;

    return NextResponse.json({ path: publicPath });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json({ error: "Upload failed" }, { status });
  }
}
