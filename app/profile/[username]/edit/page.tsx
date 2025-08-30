"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function EditProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  // ---- form state
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/default-avatar.png");
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Normalize username param
  const usernameParamRaw = params?.username as string | string[] | undefined;
  const username =
    Array.isArray(usernameParamRaw) ? usernameParamRaw[0] : (usernameParamRaw || "");

  useEffect(() => {
    // Wait until we know the auth state
    if (status === "loading") return;

    // Hard block: only the owner can access this page (no admin bypass)
    const isOwner = session?.user?.name === username;
    if (status !== "authenticated" || !isOwner) {
      router.replace(`/profile/${encodeURIComponent(username)}`);
      return;
    }

    const load = async () => {
      try {
        // 1) Try a private edit endpoint that returns full fields for prefill
        const resEdit = await fetch(
          `/api/profile/${encodeURIComponent(username)}/edit`,
          { method: "GET", cache: "no-store" }
        );

        if (resEdit.ok) {
          const p = await resEdit.json();
          // Support either flat or { user: {...} } shape
          const u = p?.user ?? p ?? {};
          setEmail(u.email ?? "");
          setBio(u.bio ?? "");
          setAvatarPreview(u.avatar ?? "/default-avatar.png");
          setLoading(false);
          return;
        }

        // 2) Fallback to public profile data if the private route isn't available
        const resPublic = await fetch(
          `/api/profile/${encodeURIComponent(username)}`,
          { cache: "no-store" }
        );

        if (resPublic.ok) {
          const p = await resPublic.json();
          const u = p?.user ?? p ?? {};
          setAvatarPreview(u.avatar ?? "/default-avatar.png");
          // email/bio may not be present on public payload
        }
      } catch (e) {
        console.error("Failed to load profile for edit:", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [status, session, username, router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/profile/${encodeURIComponent(username)}/edit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio, email, password, avatar: avatarPreview }),
    });

    if (res.ok) {
      router.push(`/profile/${encodeURIComponent(username)}`);
    } else {
      const err = await res.json().catch(() => ({}));
      alert(err.error || "Failed to update profile");
    }
  };

  // ✅ preserved avatar upload flow
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload/avatar", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok && data?.path) {
      setAvatarPreview(data.path);
    } else {
      alert(data.error || "Failed to upload avatar");
    }
  };

  if (loading) return <p className="py-10 text-center">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-8">
      <h1 className="text-2xl font-bold">Edit Profile</h1>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="space-y-2">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Change Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Avatar</label>
          <div className="flex items-center gap-4">
            <Image
              src={avatarPreview}
              alt="avatar"
              width={64}
              height={64}
              className="rounded-full"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1 bg-zinc-700 text-sm rounded hover:bg-zinc-600"
            >
              Upload Avatar
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarUpload}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={async () => {
              const confirmed = confirm(
                "Are you sure you want to delete your account? This action is irreversible."
              );
              if (!confirmed) return;

              const res = await fetch(
                `/api/profile/${encodeURIComponent(username)}/delete`,
                { method: "POST", credentials: "include" }
              );

              if (res.ok) {
                await signOut({ callbackUrl: "/" });
              } else {
                alert("Failed to delete account.");
              }
            }}
            className="text-red-500 hover:underline text-sm"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}
