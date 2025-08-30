"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ========= Helpers ========= */

function toDateInput(value: unknown): string {
  if (!value) return "";
  const d =
    value instanceof Date ? value :
    typeof value === "string" ? new Date(value) :
    new Date(String(value));
  return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function uuid() {
  // good enough for temp client ids
  return (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);
}

/* ========= Types ========= */

type AchServer = { id: string; title: string; description: string; image?: string | null };
type GameServer = {
  slug: string;
  title: string;
  developer: string;
  publisher: string;
  description: string;
  releaseDate: string | Date | null;
  coverImage?: string | null;
  screenshots: string[];
  achievements: AchServer[];
};

type AchDraft = {
  id?: string;                       // present if existing
  title: string;
  description: string;
  image?: string | null;             // current image path if existing
  imageFile?: File | null;           // staged new image
  _status?: "new" | "updated" | "deleted";
  _tempId?: string;                  // for new ones before server id
};

type ShotDraft = string | { file: File; tempId: string };

type DraftGame = {
  slug: string;
  title: string;
  developer: string;
  publisher: string;
  description: string;
  releaseDate: string | Date | null;
  coverImage?: string | null;        // current cover path (if you store it)
  coverFile?: File | null;           // staged new cover
  iconFile?: File | null;            // staged new icon
  screenshots: ShotDraft[];          // mix of existing paths + staged files
  achievements: AchDraft[];
};

/* ========= Component ========= */

export default function EditGameClient({
  consoleSlug,
  initialGame,
}: {
  consoleSlug: string;
  initialGame: GameServer;
}) {
  // keep an immutable copy for Cancel
  const [original, setOriginal] = useState<Readonly<DraftGame>>({
    ...initialGame,
    achievements: initialGame.achievements.map(a => ({ ...a, imageFile: null })),
    screenshots: initialGame.screenshots.slice(),
    coverFile: null,
    iconFile: null,
  });
  const [draft, setDraft] = useState<DraftGame>({ ...original });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  // Deletion stuff
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteErr, setDeleteErr] = useState("");

  const confirmDelete = async () => {
    setDeleting(true);
    setDeleteErr("");
    try {
      const res = await fetch(`/api/games/${draft.slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Delete failed");
      // Go back to the console's library page
      router.push(`/games/${consoleSlug}`);
    } catch (e: any) {
      setDeleteErr(e.message || "Delete failed");
      setDeleting(false);
    }
  };



  /* ======= Local mutations (no network) ======= */

  // Cover + Icon staging
  const stageCover = (file: File | null) => setDraft(d => ({ ...d, coverFile: file || null }));
  const stageIcon  = (file: File | null) => setDraft(d => ({ ...d, iconFile: file || null }));

  // Screenshots staging
  const addScreenshots = (files: FileList | null) => {
    if (!files || !files.length) return;
    const staged: ShotDraft[] = Array.from(files).map((f) => ({ file: f, tempId: uuid() }));
    setDraft(d => ({ ...d, screenshots: [...d.screenshots, ...staged] }));
  };

  const removeScreenshot = (entry: ShotDraft) => {
    setDraft(d => ({ ...d, screenshots: d.screenshots.filter(x => x !== entry) }));
  };

  const keyOfShot = (s: ShotDraft) => (typeof s === "string" ? s : `temp:${s.tempId}`);

  const [dragKey, setDragKey] = useState<string | null>(null);
  const onDragStart = (s: ShotDraft) => setDragKey(keyOfShot(s));
  const onDropOn = (target: ShotDraft) => {
    setDraft(d => {
      const arr = d.screenshots.slice();
      const from = arr.findIndex(x => keyOfShot(x) === dragKey);
      const to   = arr.findIndex(x => keyOfShot(x) === keyOfShot(target));
      if (from >= 0 && to >= 0 && from !== to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
      }
      return { ...d, screenshots: arr };
    });
    setDragKey(null);
  };

  // Achievements staging
  const addAchievementLocal = (title: string, description: string) => {
    setDraft(d => ({
      ...d,
      achievements: [
        ...d.achievements,
        { _status: "new", _tempId: uuid(), title, description, imageFile: null, image: null }
      ]
    }));
  };

  const markAchievementUpdated = (idOrTemp: string, patch: Partial<AchDraft>) => {
    setDraft(d => ({
      ...d,
      achievements: d.achievements.map(a => {
        const key = a.id ?? a._tempId;
        if (key !== idOrTemp) return a;
        const updated: AchDraft = { ...a, ...patch };
        if (a.id && a._status !== "new" && a._status !== "deleted") updated._status = "updated";
        return updated;
      })
    }));
  };

  const deleteAchievementLocal = (idOrTemp: string) => {
    setDraft(d => ({
      ...d,
      achievements: d.achievements.map(a => {
        const key = a.id ?? a._tempId;
        return key === idOrTemp ? { ...a, _status: "deleted" } : a;
      })
    }));
  };

  /* ======= Save sequence (commit all changes) ======= */

  const saveAll = async () => {
    setSaving(true); setErr("");
    try {
      // 1) Create new achievements (title+description) → get real ids
      const tempToReal = new Map<string, string>();
      for (const a of draft.achievements) {
        if (a._status === "new") {
          const res = await fetch(`/api/games/${draft.slug}/achievements`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: a.title, description: a.description }),
          });
          if (!res.ok) throw new Error((await res.json().catch(()=>({}))).error || "Create achievement failed");
          const { id } = await res.json();
          if (a._tempId) tempToReal.set(a._tempId, id);
        }
      }

      // 2) Upload achievement images (new + updated with imageFile) & patch image path
      for (const a of draft.achievements) {
        const realId = a.id ?? (a._tempId ? tempToReal.get(a._tempId) : undefined);
        if (!realId) continue;
        if (a.imageFile) {
          const fd = new FormData();
          fd.append("file", a.imageFile);
          fd.append("slug", draft.slug);
          fd.append("achievementId", realId);
          const up = await fetch(`/api/upload/achievements`, { method: "POST", body: fd });
          if (!up.ok) throw new Error((await up.json().catch(()=>({}))).error || "Upload achievement image failed");
          const { path } = await up.json();
          const patch = await fetch(`/api/achievements/${realId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: path }),
          });
          if (!patch.ok) throw new Error((await patch.json().catch(()=>({}))).error || "Update achievement image failed");
        }
      }

      // 3) Update title/description for existing marked updated
      for (const a of draft.achievements) {
        if (a._status === "updated" && a.id) {
          const res = await fetch(`/api/achievements/${a.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: a.title, description: a.description }),
          });
          if (!res.ok) throw new Error((await res.json().catch(()=>({}))).error || "Update achievement failed");
        }
      }

      // 4) Delete achievements (cascade will remove user-earned rows)
      for (const a of draft.achievements) {
        const realId = a.id ?? (a._tempId ? tempToReal.get(a._tempId) : undefined);
        if (a._status === "deleted" && realId) {
          const del = await fetch(`/api/achievements/${realId}`, { method: "DELETE" });
          if (!del.ok) throw new Error((await del.json().catch(()=>({}))).error || "Delete achievement failed");
        }
      }

      // 5) Upload cover/icon if staged
      if (draft.coverFile) {
        const fd = new FormData();
        fd.append("file", draft.coverFile);
        fd.append("type", "cover");
        fd.append("slug", draft.slug);
        const up = await fetch(`/api/upload/games`, { method: "POST", body: fd });
        if (!up.ok) throw new Error((await up.json().catch(()=>({}))).error || "Upload cover failed");
        const { path } = await up.json();
        // Keep latest cover path locally if you persist it in DB
        setDraft(d => ({ ...d, coverImage: path }));
      }
      if (draft.iconFile) {
        const fd = new FormData();
        fd.append("file", draft.iconFile);
        fd.append("type", "icon");
        fd.append("slug", draft.slug);
        const up = await fetch(`/api/upload/games`, { method: "POST", body: fd });
        if (!up.ok) throw new Error((await up.json().catch(()=>({}))).error || "Upload icon failed");
      }

      // 6) Upload staged screenshots & build final ordered paths
      const finalShots: string[] = [];
      for (const entry of draft.screenshots) {
        if (typeof entry === "string") {
          finalShots.push(entry);
        } else {
          const fd = new FormData();
          fd.append("file", entry.file);
          fd.append("type", "screenshot");
          fd.append("slug", draft.slug);
          const up = await fetch(`/api/upload/games`, { method: "POST", body: fd });
          if (!up.ok) throw new Error((await up.json().catch(()=>({}))).error || "Upload screenshot failed");
          const { path } = await up.json();
          finalShots.push(path);
        }
      }

      // 7) Patch game metadata & screenshots
      const patch = await fetch(`/api/games/${draft.slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: draft.title,
          developer: draft.developer,
          publisher: draft.publisher,
          description: draft.description,
          releaseDate: toDateInput(draft.releaseDate) || undefined,
          screenshots: finalShots,
          coverImagePath: draft.coverImage, // only if your API persists cover path
        }),
      });
      if (!patch.ok) throw new Error((await patch.json().catch(()=>({}))).error || "Save metadata failed");

      // 8) Refetch fresh game to reset originals/draft
      const fresh = await fetch(`/api/games/${draft.slug}`, { cache: "no-store" }).then(r => r.json());
      setOriginal({
        ...fresh,
        achievements: fresh.achievements.map((a: AchServer) => ({ ...a, imageFile: null })),
        screenshots: fresh.screenshots.slice(),
        coverFile: null,
        iconFile: null,
      });
      setDraft({
        ...fresh,
        achievements: fresh.achievements.map((a: AchServer) => ({ ...a, imageFile: null })),
        screenshots: fresh.screenshots.slice(),
        coverFile: null,
        iconFile: null,
      });
    } catch (e: any) {
      setErr(e.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const cancelAll = () => {
    setDraft({ ...original, coverFile: null, iconFile: null });
    setErr("");
  };

  /* ======= Render ======= */

  return (
    <div className="space-y-8">
      {err && <div className="bg-red-100 text-red-800 rounded p-2 text-sm">{err}</div>}

      {/* Top action bar */}
      <div className="flex gap-3">
        <button
          onClick={saveAll}
          disabled={saving}
          className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={cancelAll}
          className="px-4 py-2 rounded bg-zinc-700 text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="ml-auto px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
        >
          Delete game
        </button>
      </div>

      {/* Metadata */}
      <section className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Title *</label>
            <input
              className="border rounded p-2 w-full"
              value={draft.title}
              onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Slug (readonly)</label>
            <input className="border rounded p-2 w-full bg-zinc-900/40" value={draft.slug} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium">Developer *</label>
            <input
              className="border rounded p-2 w-full"
              value={draft.developer}
              onChange={e => setDraft(d => ({ ...d, developer: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Publisher *</label>
            <input
              className="border rounded p-2 w-full"
              value={draft.publisher}
              onChange={e => setDraft(d => ({ ...d, publisher: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Release Date</label>
            <input
              type="date"
              className="border rounded p-2"
              value={toDateInput(draft.releaseDate)}
              onChange={(e) => setDraft(d => ({ ...d, releaseDate: e.target.value || null }))}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description *</label>
          <textarea
            className="border rounded p-2 w-full"
            rows={4}
            value={draft.description}
            onChange={e => setDraft(d => ({ ...d, description: e.target.value }))}
          />
        </div>

        {/* Cover & Icon (staged previews) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium mb-1">Cover *</div>
            <img
              src={draft.coverFile ? URL.createObjectURL(draft.coverFile) : (draft.coverImage ?? `/games/${draft.slug}/cover.png`)}
              className="rounded w-48 mb-2"
            />
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => stageCover(e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Icon *</div>
            <img
              src={draft.iconFile ? URL.createObjectURL(draft.iconFile) : `/games/${draft.slug}/icon.png`}
              className="rounded w-20 h-20 object-cover mb-2"
            />
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => stageIcon(e.target.files?.[0] || null)}
            />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Screenshots</h2>
          <input type="file" accept="image/png,image/jpeg" multiple onChange={e => addScreenshots(e.target.files)} />
        </div>

        {draft.screenshots.length === 0 ? (
          <div className="text-sm text-zinc-400">No screenshots yet.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {draft.screenshots.map((s) => {
              const src = typeof s === "string" ? s : URL.createObjectURL(s.file);
              const key = keyOfShot(s);
              return (
                <div
                  key={key}
                  draggable
                  onDragStart={() => onDragStart(s)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDropOn(s)}
                  className="relative group"
                >
                  <img src={src} className="rounded w-full h-32 object-cover" />
                  <button
                    onClick={() => removeScreenshot(s)}
                    className="absolute top-2 right-2 text-xs rounded bg-red-600 hover:bg-red-700 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <p className="text-xs text-zinc-400">
          Drag screenshots to reorder. Click “Save” above to persist order.
        </p>
      </section>

      {/* Achievements */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Achievements</h2>

        {/* Add new (staged) */}
        <AddAchievement onCreate={(title, desc) => addAchievementLocal(title, desc)} />

        {/* List (hide deleted) */}
        <ul className="space-y-3">
          {draft.achievements.filter(a => a._status !== "deleted").map((a) => (
            <AchievementRow
              key={a.id ?? a._tempId}
              a={a}
              slug={draft.slug}
              onChangeTitle={(v) => markAchievementUpdated(a.id ?? a._tempId!, { title: v })}
              onChangeDesc={(v)  => markAchievementUpdated(a.id ?? a._tempId!, { description: v })}
              onReplaceImage={(file) => markAchievementUpdated(a.id ?? a._tempId!, { imageFile: file })}
              onDelete={() => deleteAchievementLocal(a.id ?? a._tempId!)}
            />
          ))}
        </ul>
      </section>

      {/* Bottom action bar (duplicate for convenience) */}
      <div className="flex gap-3">
        <button
          onClick={saveAll}
          disabled={saving}
          className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={cancelAll}
          className="px-4 py-2 rounded bg-zinc-700 text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="ml-auto px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
        >
          Delete game
        </button>
      </div>
      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="del-title"
        >
          <div className="w-full max-w-md rounded-lg bg-zinc-900 border border-zinc-800 p-5 shadow-xl">
            <h2 id="del-title" className="text-lg font-semibold mb-2 text-red-400">Delete Game</h2>
            <p className="text-sm text-zinc-300 mb-4">
              This will permanently remove the game, all of its achievements, and all references
              in users’ libraries. This action cannot be undone.
            </p>

            {deleteErr && (
              <div className="mb-3 rounded bg-red-100 text-red-800 text-sm p-2">
                {deleteErr}
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmOpen(false)}
                disabled={deleting}
                className="px-3 py-2 rounded bg-zinc-700 text-white disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Confirm Deletion"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========= Small subcomponents (purely local state) ========= */

function AddAchievement({ onCreate }: { onCreate: (title: string, description: string) => void }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <div className="bg-zinc-800/60 rounded p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
      <input className="border rounded p-2" placeholder="Title"
        value={title} onChange={e=>setTitle(e.target.value)} />
      <input className="border rounded p-2" placeholder="Description"
        value={desc} onChange={e=>setDesc(e.target.value)} />
      <button
        disabled={busy || !title || !desc}
        onClick={() => { setBusy(true); onCreate(title, desc); setTitle(""); setDesc(""); setBusy(false); }}
        className="px-3 py-2 rounded bg-amber-500 hover:bg-amber-600 text-black disabled:opacity-50"
      >
        {busy ? "Adding..." : "Add Achievement"}
      </button>
    </div>
  );
}

function AchievementRow({
  a, slug, onChangeTitle, onChangeDesc, onReplaceImage, onDelete,
}: {
  a: AchDraft;
  slug: string;
  onChangeTitle: (v: string) => void;
  onChangeDesc: (v: string) => void;
  onReplaceImage: (f: File) => void;
  onDelete: () => void;
}) {
  const [t, setT] = useState(a.title);
  const [d, setD] = useState(a.description);

  return (
    <li className="bg-zinc-800 rounded p-3 flex items-center gap-3">
      <img
        src={a.imageFile ? URL.createObjectURL(a.imageFile) : (a.image || "/ach_placeholder.png")}
        className="h-12 w-12 rounded object-cover"
      />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className="border rounded p-2"
          value={t}
          onChange={e => { setT(e.target.value); onChangeTitle(e.target.value); }}
        />
        <input
          className="border rounded p-2"
          value={d}
          onChange={e => { setD(e.target.value); onChangeDesc(e.target.value); }}
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-xs px-2 py-1 rounded bg-zinc-700 cursor-pointer">
          Replace Image
          <input
            type="file"
            accept="image/png,image/jpeg"
            className="hidden"
            onChange={(e)=>{ const f=e.target.files?.[0]; if(!f) return; onReplaceImage(f); }}
          />
        </label>
        <button
          onClick={onDelete}
          className="text-xs px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
