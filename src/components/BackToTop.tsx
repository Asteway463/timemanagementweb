"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let previous = false;
    const update = () => {
      const next = window.scrollY > 720;
      if (next !== previous) {
        previous = next;
        setVisible(next);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }}
    >
      <Icon name="arrow-up" size={18} strokeWidth={2} />
    </button>
  );
}
