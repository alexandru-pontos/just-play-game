"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function ThreadAdminActions({
  threadId,
  pinned,
  locked,
  afterDeleteHref, // where to go after deletion (subforum page)
}: {
  threadId: string;
  pinned: boolean;
  locked: boolean;
  afterDeleteHref: string;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();

  const toggle = (key: "pinned" | "locked", value: boolean) => {
    start(async () => {
      const res = await fetch(`/api/forum/threads/${threadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: value }),
      });
      if (res.ok) router.refresh();
      else {
        const j = await res.json().catch(() => ({}));
        alert(j.error || "Failed to update thread");
      }
    });
  };

  const deleteThread = () => {
    const ok = confirm(
      "Are you sure you want to delete this entire thread? This will remove all posts permanently."
    );
    if (!ok) return;

    start(async () => {
      const res = await fetch(`/api/forum/threads/${threadId}`, { method: "DELETE" });
      if (res.ok) {
        router.push(afterDeleteHref);
      } else {
        const j = await res.json().catch(() => ({}));
        alert(j.error || "Failed to delete thread");
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={pending}
        onClick={() => toggle("pinned", !pinned)}
        className="text-xs px-2 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
      >
        {pinned ? "Unpin" : "Pin"}
      </button>
      <button
        disabled={pending}
        onClick={() => toggle("locked", !locked)}
        className="text-xs px-2 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
      >
        {locked ? "Unlock" : "Lock"}
      </button>
      <button
        disabled={pending}
        onClick={deleteThread}
        className="text-xs px-2 py-1 rounded border border-red-700 text-red-300 hover:bg-red-900/30"
        title="Delete thread"
      >
        Delete
      </button>
    </div>
  );
}
