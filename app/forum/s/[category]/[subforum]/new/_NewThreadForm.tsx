"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewThreadForm({ subforumId }: { subforumId: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErr("");
    try {
      const res = await fetch("/api/forum/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subforumId, title, content }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to create thread");
      }
      const j = await res.json();
      router.push(`/forum/t/${j.threadId}`);
    } catch (e: any) {
      setErr(e.message || "Failed to create thread");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {err && <div className="rounded bg-red-100 text-red-800 p-2 text-sm">{err}</div>}
      <div>
        <label className="block text-sm mb-1">Title</label>
        <input
          className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2"
          value={title} onChange={e=>setTitle(e.target.value)} required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Content</label>
        <textarea
          className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2"
          rows={6} value={content} onChange={e=>setContent(e.target.value)} required
        />
      </div>
      <div className="flex gap-3">
        <button
          disabled={saving}
          className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50"
        >
          {saving ? "Posting..." : "Post Thread"}
        </button>
        <button type="button" onClick={()=>history.back()} className="px-4 py-2 rounded border border-zinc-700">
          Cancel
        </button>
      </div>
    </form>
  );
}
