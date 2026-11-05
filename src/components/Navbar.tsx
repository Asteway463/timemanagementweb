"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppIcon } from "@/components/AppIcon";
import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["features", "demo", "screenshots", "privacy", "faq"];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(visible[0]?.target.id ?? null);
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header ref={headerRef} className="site-header" data-scrolled={scrolled}>
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label="Atna's Flow — home"
          onClick={() => setOpen(false)}
        >
          <AppIcon size={36} />
          <span className="font-display text-[1.06rem] font-semibold tracking-[-0.02em] text-ink">
            Atna&rsquo;s Flow
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.split("#")[1];
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                data-active={isHome && activeId === sectionId}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <ThemeToggle />
          <Link href="/#download" className="btn btn-primary btn-sm">
            Download
            <Icon name="download" size={15} strokeWidth={2} />
          </Link>
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon
              name={open ? "close" : "menu"}
              size={20}
              strokeWidth={1.9}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className="mobile-menu border-t border-line/10 bg-night/95 backdrop-blur-xl lg:hidden"
        data-open={open}
        inert={!open ? true : undefined}
      >
        <div className="container-page pb-5 pt-2">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/10 py-3.5 text-[0.98rem] text-ink"
              >
                {link.label}
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="text-muted"
                />
              </Link>
            ))}
          </nav>
          <Link
            href="/#download"
            onClick={() => setOpen(false)}
            className={cn("btn btn-primary mt-5 w-full", open ? "" : "invisible")}
          >
            Download for Android
            <Icon name="download" size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
      </header>

      {open ? (
        <div
          className="animate-fade-in fixed inset-0 top-[4.5rem] z-50 bg-night/70 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
