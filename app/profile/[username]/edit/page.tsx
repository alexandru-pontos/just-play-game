"use client";

import { useState } from "react";
import Image from "next/image";

const dummyUser = {
  avatar: "/default-avatar.png",
  bio: "Retro gaming enthusiast.",
  email: "user@example.com",
};

export default function EditProfilePage() {
  const [bio, setBio] = useState(dummyUser.bio);
  const [email, setEmail] = useState(dummyUser.email);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(dummyUser.avatar);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ bio, email, password, avatar });
  };

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
            <Image src={avatar} alt="avatar" width={64} height={64} className="rounded-full" />
            <button
              type="button"
              onClick={() => alert("Upload flow TBD")}
              className="px-3 py-1 bg-zinc-700 text-sm rounded hover:bg-zinc-600"
            >
              Change Avatar
            </button>
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
            onClick={() => confirm("Are you sure you want to delete your account?") && alert("Delete flow TBD")}
            className="text-red-500 hover:underline text-sm"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}