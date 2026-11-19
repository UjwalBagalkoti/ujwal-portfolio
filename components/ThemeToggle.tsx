"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTheme, toggleTheme } from "@/lib/features/uiSlice";

export default function ThemeToggle() {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  const [ready, setReady] = useState(false);

  // Adopt whatever the inline script in layout.tsx already applied
  // (saved choice, else system preference) so there's no flash.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    dispatch(setTheme(isDark ? "dark" : "light"));
    setReady(true);
  }, [dispatch]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme, ready]);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-pressed={theme === "dark"}
      className="font-mono text-xs tracking-tight border border-line dark:border-night-line px-3 py-1.5 rounded-sm text-ink-soft dark:text-cream/70 hover:text-accent dark:hover:text-accent-bright hover:border-accent dark:hover:border-accent-bright transition-colors"
    >
      {theme === "light" ? "dark mode" : "light mode"}
    </button>
  );
}
