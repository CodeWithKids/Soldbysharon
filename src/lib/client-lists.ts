import { useEffect, useState } from "react";

const SAVED_KEY = "soldbysharon-saved";
const COMPARE_KEY = "soldbysharon-compare";
const RECENT_KEY = "soldbysharon-recent";
const CHANGE_EVENT = "soldbysharon-lists";

function readList(key: string) {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeList(key: string, slugs: string[]) {
  window.localStorage.setItem(key, JSON.stringify(slugs));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function toggleSlug(key: string, slug: string, limit?: number) {
  const current = readList(key);
  if (current.includes(slug)) {
    writeList(
      key,
      current.filter((item) => item !== slug),
    );
    return;
  }
  if (limit && current.length >= limit) return;
  writeList(key, [...current, slug]);
}

export function rememberProperty(slug: string) {
  const next = [slug, ...readList(RECENT_KEY).filter((item) => item !== slug)].slice(0, 6);
  writeList(RECENT_KEY, next);
}

export function useClientLists() {
  const [saved, setSaved] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => {
      setSaved(readList(SAVED_KEY));
      setCompare(readList(COMPARE_KEY));
      setRecent(readList(RECENT_KEY));
    };
    sync();
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return {
    saved,
    compare,
    recent,
    toggleSaved: (slug: string) => toggleSlug(SAVED_KEY, slug),
    toggleCompare: (slug: string) => toggleSlug(COMPARE_KEY, slug, 3),
  };
}
