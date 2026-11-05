"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("atnas-flow-theme", next);
    } catch {
      /* Private mode can block storage; the toggle still works for this visit. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-button"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      aria-pressed={theme === "light"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
    >
      <Icon
        name={theme === "dark" ? "sun" : "moon"}
        size={18}
        strokeWidth={1.7}
        className={mounted ? "" : "opacity-0"}
      />
    </button>
  );
}
