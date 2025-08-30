"use client";

import Image from "next/image";
import { useState } from "react";

type Post = {
  id: string;
  content: string;
  createdAt: string;
  editedAt: string | null;
  editCount: number;
  isDeleted: boolean;
  deletedReason: string | null;
  author: { name: string; avatar: string | null };
  authorId: string;
};

export default function ThreadClient({
  threadId,
  initialPosts,
  canReply,
  currentUserName,
  isAdmin,
}: {
  threadId: string;
  initialPosts: Post[];
  canReply: boolean;
  currentUserName: string | null;
  isAdmin: boolean;
}) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [reply, setReply] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/forum/threads/${threadId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: reply }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to reply");
      }
      const j = await res.json();
      window.location.href = `/forum/t/${threadId}?page=last#post-${j.post.id}`;
    } catch (e) {
      alert((e as any).message || "Failed to reply");
    } finally {
      setSaving(false);
    }
  }

  async function saveEdit(id: string, content: string) {
    const res = await fetch(`/api/forum/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error(j.error || "Failed to edit");
    }
    const j = await res.json();
    setPosts(ps => ps.map(p => (p.id === id ? { ...p, ...j.post } : p)));
  }

  async function adminDelete(id: string) {
    const reason = prompt("Enter a reason for deletion (required):")?.trim();
    if (!reason) return;
    const res = await fetch(`/api/forum/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Failed to delete");
      return;
    }
    const j = await res.json();
    setPosts(ps => ps.map(p => (p.id === id ? { ...p, ...j.post } : p)));
  }

  return (
    <div className="space-y-4">
      {posts.map(p => (
        <PostItem
          key={p.id}
          post={p}
          canEdit={currentUserName === p.author?.name}
          canAdminDelete={isAdmin}
          onSaveEdit={saveEdit}
          onAdminDelete={adminDelete}
        />
      ))}

      {canReply && (
        <form onSubmit={submitReply} className="space-y-2">
          <textarea
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2"
            rows={5}
            value={reply}
            onChange={e=>setReply(e.target.value)}
            placeholder="Write your reply…"
          />
          <button
            disabled={saving}
            className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50"
          >
            {saving ? "Posting…" : "Post Reply"}
          </button>
        </form>
      )}
    </div>
  );
}

function PostItem({
  post,
  canEdit,
  canAdminDelete,
  onSaveEdit,
  onAdminDelete,
}: {
  post: Post;
  canEdit: boolean;
  canAdminDelete: boolean;
  onSaveEdit: (id: string, content: string) => Promise<void>;
  onAdminDelete: (id: string) => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(post.content);

  if (post.isDeleted) {
    return (
      <div id={`post-${post.id}`} className="rounded border border-zinc-800 bg-zinc-900/50 p-3 text-sm text-zinc-300">
        <span className="font-medium">Post deleted by admin.</span>{" "}
        {post.deletedReason ? `Reason: ${post.deletedReason}` : ""}
      </div>
    );
  }

  return (
    <div id={`post-${post.id}`} className="rounded border border-zinc-800 bg-zinc-900/50 p-3 space-y-2">
      <div className="flex items-center gap-3">
        {/* avatar + author */}
        <div className="text-sm">
          <div className="font-medium">{post.author?.name}</div>
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            {new Date(post.createdAt).toISOString().slice(0, 16).replace("T", " ")}
            {post.editCount > 0 && " • edited"}
            {/* permalink */}
            <a href={`#post-${post.id}`} className="text-indigo-400 hover:underline">#</a>
          </div>
        </div>
      </div>

      {editing ? (
        <div className="space-y-2">
          <textarea
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2"
            rows={5}
            value={content}
            onChange={e=>setContent(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded bg-green-600 text-white"
              onClick={async ()=>{ await onSaveEdit(post.id, content); setEditing(false); }}
            >
              Save
            </button>
            <button className="px-3 py-1 rounded border border-zinc-700" onClick={()=>setEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="whitespace-pre-wrap">{post.content}</div>
      )}

      <div className="flex items-center gap-3 text-xs">
        {canEdit && !editing && (
          <button className="underline hover:no-underline" onClick={()=>setEditing(true)}>Edit</button>
        )}
        {canAdminDelete && (
          <button className="text-red-400 underline hover:no-underline" onClick={()=>onAdminDelete(post.id)}>
            Delete (admin)
          </button>
        )}
      </div>
    </div>
  );
}
