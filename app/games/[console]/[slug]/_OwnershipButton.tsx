"use client";
import { useEffect, useState } from "react";

type Props = { slug: string; consoleParam: string; onChanged?: () => void };

export default function OwnershipButton({ slug, consoleParam, onChanged }: Props) {
  const [loading, setLoading] = useState(false);
  const [owned, setOwned] = useState<boolean | null>(null);

  // On mount, ask the server if the current user owns this game
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/games/${slug}/ownership`, { method: "GET" });
      if (!res.ok) return setOwned(false);
      const data = await res.json(); // { owned: boolean }
      if (!cancelled) setOwned(!!data.owned);
    })();
    return () => { cancelled = true; };
  }, [slug]);

  const toggle = async () => {
    if (owned === null) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/games/${slug}/ownership`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owned: !owned }),
      });
      if (res.ok) {
        setOwned(!owned);
        onChanged?.();
      }
    } finally {
      setLoading(false);
    }
  };

  if (owned === null) return null; // don't flash the wrong label

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-600 text-black text-sm"
    >
      {loading ? "Saving..." : owned ? "Remove game from personal library" : "Add game to personal library"}
    </button>
  );
}
