"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/avatars/default.png");
  const avatarFileRef = useRef<HTMLInputElement>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: create user (without avatar)
    const registerRes = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, bio }),
    });

    const registerData = await registerRes.json();
    if (!registerRes.ok) {
      alert(registerData.error || "Registration failed.");
      return;
    }

    const userId = registerData.id;
    let avatarPath = "";

    // Step 2: upload avatar if file selected
    if (avatarFile) {
      const formData = new FormData();
      formData.append("file", avatarFile);
      formData.append("userId", userId);

      const avatarRes = await fetch("/api/upload/avatar", {
        method: "POST",
        body: formData,
      });

      const avatarData = await avatarRes.json();
      if (avatarRes.ok) {
        avatarPath = avatarData.path;
      } else {
        alert(avatarData.error || "Avatar upload failed.");
        return;
      }

      // Step 3: update user avatar path
      await fetch(`/api/profile/${name}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatar: avatarPath }),
      });
    }

    // Step 4: done
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto py-10 px-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Create an Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
        />
        <textarea
          placeholder="Short bio (optional)"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
        />
        <div className="space-y-2">
          <p className="text-sm font-medium">Avatar</p>
          <img
            src={avatarPreview}
            alt="Preview"
            className="w-16 h-16 rounded-full object-cover"
          />
          <button
            type="button"
            onClick={() => avatarFileRef.current?.click()}
            className="text-sm text-purple-400 hover:underline"
          >
            Upload avatar
          </button>
          <input
            ref={avatarFileRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
