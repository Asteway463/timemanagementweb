"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type WheelEvent,
} from "react";
import { AppScreen, PhoneFrame } from "@/components/AppScreen";
import { ThemeScreenshot } from "@/components/ThemeScreenshot";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { screenshots, type Screenshot } from "@/config/site";
import { isPlaceholder } from "@/lib/utils";

function ScreenshotView({ shot }: { shot: Screenshot }) {
  if (!isPlaceholder(shot.lightSrc) || !isPlaceholder(shot.darkSrc)) {
    return (
      <PhoneFrame className="screenshot-phone">
        <ThemeScreenshot
          lightSrc={shot.lightSrc}
          darkSrc={shot.darkSrc}
          alt={shot.alt}
          sizes="(max-width: 640px) 70vw, 300px"
          className="object-contain"
        />
      </PhoneFrame>
    );
  }

  return <AppScreen variant={shot.mock} />;
}

export function Screenshots() {
  const railRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const [edges, setEdges] = useState({ start: true, end: false });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setEdges({
      start: rail.scrollLeft < 8,
      end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateEdges();
    rail.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(rail);
    return () => {
      rail.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, [updateEdges]);

  useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setOpenIndex((index) =>
          index === null ? index : (index + 1) % screenshots.length,
        );
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setOpenIndex((index) =>
          index === null
            ? index
            : (index - 1 + screenshots.length) % screenshots.length,
        );
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.offsetParent !== null);

        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen]);

  function scrollRail(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.8, 420);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: amount * direction,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  function handleRailWheel(event: WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail || rail.scrollWidth <= rail.clientWidth) return;

    // Trackpads can scroll horizontally directly; a mouse wheel usually only
    // emits deltaY, so translate that gesture into movement along the rail.
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;
    if (delta === 0) return;

    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const canScroll = delta > 0
      ? rail.scrollLeft < maxScroll - 1
      : rail.scrollLeft > 1;
    if (!canScroll) return;

    event.preventDefault();
    rail.scrollBy({ left: delta, behavior: "auto" });
  }

  const current = openIndex === null ? null : screenshots[openIndex];

  return (
    <section id="screenshots" className="section scroll-mt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[60rem] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Screenshots"
            title="Calm by design."
            description="A clear dashboard, a planner that stays out of the way, and a focus timer that keeps going. Swipe through the app."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-9 flex items-center justify-between gap-4">
            <p className="text-[0.78rem] text-muted">
              Swipe to explore
              <span className="hidden sm:inline"> · tap a screen to enlarge</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="icon-button"
                onClick={() => scrollRail(-1)}
                disabled={edges.start}
                aria-label="Scroll screenshots left"
              >
                <Icon name="chevron-left" size={18} />
              </button>
              <button
                type="button"
                className="icon-button"
                onClick={() => scrollRail(1)}
                disabled={edges.end}
                aria-label="Scroll screenshots right"
              >
                <Icon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-2">
          <div className="rail-fade rail-fade-left" aria-hidden="true" />
          <div className="rail-fade rail-fade-right" aria-hidden="true" />
          <div
            ref={railRef}
            className="screenshot-rail"
            onWheel={handleRailWheel}
            role="group"
            aria-label="Atna's Flow app screenshots"
          >
            {screenshots.map((shot, index) => (
              <Reveal
                key={shot.title}
                className="screenshot-slide relative"
                style={{ "--shot-index": index } as CSSProperties}
              >
                <button
                  type="button"
                  className="screenshot-button absolute inset-0 z-10 h-full w-full cursor-pointer"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Open screenshot ${index + 1}: ${shot.title}`}
                  aria-haspopup="dialog"
                />
                <div aria-hidden="true" className="glass rounded-[2.1rem] p-2.5">
                  <ScreenshotView shot={shot} />
                </div>
                <div className="px-2 pb-1 pt-4 text-left">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[0.98rem] font-semibold tracking-tight text-ink">
                      {shot.title}
                    </h3>
                    <span
                      className="font-display text-[0.6rem] tracking-[0.12em] text-line/35"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                    {shot.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {isOpen && current && openIndex !== null ? (
        <div
          className="lightbox-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpenIndex(null);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="relative flex h-full w-full max-w-4xl flex-col items-center justify-center py-4"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Close screenshot viewer"
            >
              <Icon name="close" size={20} />
            </button>

            <figure className="lightbox-figure m-0 min-h-0">
              <div
                className="mx-auto shrink-0"
                style={{
                  width:
                    "min(76vw, 18rem, calc((100dvh - 13rem) * 9 / 19.4))",
                }}
              >
                <div className="shadow-phone">
                  <ScreenshotView shot={current} />
                </div>
              </div>

              <figcaption className="mx-auto max-w-md px-2 text-center">
                <h2
                  id="lightbox-title"
                  className="font-display text-lg font-semibold tracking-tight text-white"
                >
                  {current.title}
                </h2>
                <p className="mt-1.5 text-[0.84rem] leading-relaxed text-white/60">
                  {current.caption}
                </p>
              </figcaption>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      (openIndex - 1 + screenshots.length) % screenshots.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous screenshot"
                >
                  <Icon name="chevron-left" size={18} />
                </button>
                <span
                  className="min-w-[3.5rem] text-center text-xs tabular-nums text-white/60"
                  aria-live="polite"
                >
                  {openIndex + 1} / {screenshots.length}
                </span>
                <button
                  type="button"
                  onClick={() => setOpenIndex((openIndex + 1) % screenshots.length)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Next screenshot"
                >
                  <Icon name="chevron-right" size={18} />
                </button>
              </div>
            </figure>
          </div>
        </div>
      ) : null}
    </section>
  );
}
