"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slug";

type Props = { consoleSlug: string };

export default function NewGameForm({ consoleSlug }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const slug = useMemo(() => slugify(title), [title]);

  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");

  const [coverPath, setCoverPath] = useState<string>("");
  const [iconPath, setIconPath] = useState<string>("");
  const [screenshots, setScreenshots] = useState<string[]>([]);

  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  // Upload helper
  const uploadFile = async (file: File, type: "cover" | "icon" | "screenshot") => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("type", type);
    fd.append("slug", slug);

    const res = await fetch("/api/upload/games", {
      method: "POST",
      body: fd,
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body?.error || "Upload failed");
    }
    const body = (await res.json()) as { path: string };
    return body.path;
  };

  const onUploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const path = await uploadFile(file, "cover");
      setCoverPath(path);
    } catch (err: any) {
      setError(err.message || "Cover upload failed");
    }
  };

  const onUploadIcon = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const path = await uploadFile(file, "icon");
      setIconPath(path);
    } catch (err: any) {
      setError(err.message || "Icon upload failed");
    }
  };

  const onUploadScreenshots = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    try {
      const uploaded: string[] = [];
      for (const f of files) {
        const p = await uploadFile(f, "screenshot");
        uploaded.push(p);
      }
      setScreenshots((prev) => [...prev, ...uploaded]);
    } catch (err: any) {
      setError(err.message || "Screenshot upload failed");
    }
  };

  const canSubmit =
    title.trim().length > 0 &&
    slug.length > 0 &&
    developer.trim().length > 0 &&
    publisher.trim().length > 0 &&
    coverPath &&
    iconPath &&
    description.trim().length > 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!canSubmit) {
      setError("Please fill all required fields and upload cover + icon.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/games/console/${consoleSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          description,
          releaseDate: releaseDate || undefined,
          developer,
          publisher,
          coverImage: coverPath,
          iconImage: iconPath,     // validated but not stored unless you add a DB field
          screenshots,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error || "Create failed");

      router.replace(`/games/${consoleSlug}/${body.slug}`);
    } catch (err: any) {
      setError(err.message || "Create failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && (
        <div className="rounded-md bg-red-100 text-red-800 p-2 text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Title *</label>
        <input
          className="border rounded p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Game title"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Slug: <code>{slug || "(auto)"}</code></p>
      </div>

      <div>
        <label className="block text-sm font-medium">Developer *</label>
        <input
          className="border rounded p-2 w-full"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="Developer name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Publisher *</label>
        <input
        className="border rounded p-2 w-full"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        placeholder="e.g., Sony"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description *</label>
        <textarea
          className="border rounded p-2 w-full"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Release Date</label>
        <input
          type="date"
          className="border rounded p-2"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Cover Image (PNG/JPG) *</label>
          <input type="file" accept="image/png,image/jpeg" onChange={onUploadCover} />
          {coverPath && (
            <div className="mt-2">
              <img src={coverPath} alt="cover preview" className="max-h-40 rounded" />
              <p className="text-xs text-gray-500">{coverPath}</p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Icon (PNG/JPG) *</label>
          <input type="file" accept="image/png,image/jpeg" onChange={onUploadIcon} />
          {iconPath && (
            <div className="mt-2">
              <img src={iconPath} alt="icon preview" className="h-20 w-20 object-cover rounded" />
              <p className="text-xs text-gray-500">{iconPath}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Screenshots (PNG/JPG, multiple)</label>
        <input type="file" accept="image/png,image/jpeg" multiple onChange={onUploadScreenshots} />
        {screenshots.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {screenshots.map((s, i) => (
              <img key={i} src={s} alt={`s${i}`} className="h-24 w-full object-cover rounded" />
            ))}
          </div>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Game"}
        </button>
      </div>

      <p className="text-xs text-gray-500">
        * Required. Creation will fail if cover art, icon, title, developer, or publisher are missing.
      </p>
    </form>
  );
}
