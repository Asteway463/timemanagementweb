"use client";

import { useState } from "react";
import Image from "next/image";
import { AppScreen } from "@/components/AppScreen";
import { Icon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { isPlaceholder } from "@/lib/utils";
import { resolveVideo } from "@/lib/video";

const video = resolveVideo(siteConfig.videoUrl, siteConfig.videoSource);
const posterIsReal = !isPlaceholder(siteConfig.videoPoster);

function PosterArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal/30 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,33,0.94)_0%,rgba(8,19,33,0.55)_48%,transparent_75%)]" />

      <div className="absolute left-[6%] top-1/2 z-10 hidden max-w-[48%] -translate-y-1/2 sm:block">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-lavender/80">
          Product tour
        </p>
        <p className="display-title mt-2 text-[clamp(1.05rem,2.4vw,1.9rem)] text-white">
          A calmer way to
          <br />
          plan your day.
        </p>
        <p className="mt-2 hidden text-[0.72rem] text-white/55 sm:block">
          Dashboard · Focus · Notebook
        </p>
      </div>

      <p className="absolute left-4 top-4 z-10 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-lavender/70 sm:hidden">
        Product tour
      </p>

      <div
        className="absolute -right-[18%] top-1/2 w-[10.5rem] -translate-y-1/2 rotate-[8deg] opacity-60 sm:right-[-4%] sm:w-[17rem] sm:opacity-90 lg:right-[4%] lg:w-[19rem]"
        aria-hidden="true"
      >
        <AppScreen variant="focus" />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/80 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  function play() {
    if (!video) {
      setUnavailable(true);
      return;
    }
    setPlaying(true);
  }

  return (
    <div className="demo-video-showcase">
      <div
        className={`video-shell ${video?.kind === "mp4" ? "video-phone-shell" : ""}`}
      >
        <div
          className={`video-stage relative w-full ${video?.kind === "mp4" ? "video-stage-phone" : "aspect-video"}`}
        >
          {video?.kind === "mp4" && playing ? (
            <video
              className="demo-video absolute inset-0 h-full w-full bg-black object-cover"
              controls
              autoPlay
              playsInline
              preload="auto"
              poster="/screenshots/homepage.jpg"
              aria-label="Atna's Flow demo video"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          ) : video?.kind === "mp4" ? (
            <>
              <div aria-hidden="true" className="absolute inset-0">
                <Image
                  src="/screenshots/homepage.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-night/15" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="play-button">
                    <Icon name="play" size={30} strokeWidth={1.6} className="ml-1" />
                  </span>
                </span>
              </div>
              <button
                type="button"
                onClick={play}
                className="absolute inset-0 z-20 block h-full w-full cursor-pointer rounded-[inherit] text-left"
                aria-label="Play the Atna's Flow demo video"
              />
            </>
          ) : !playing ? (
            <>
              <div aria-hidden="true" className="absolute inset-0">
                {posterIsReal ? (
                  <Image
                    src={siteConfig.videoPoster}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover"
                  />
                ) : (
                  <PosterArt />
                )}

                <span className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-night/15" />

                <span className="absolute inset-0 grid place-items-center">
                  <span className="play-button">
                    <Icon
                      name="play"
                      size={30}
                      strokeWidth={1.6}
                      className="ml-1"
                    />
                  </span>
                </span>

                <span className="absolute bottom-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-white/15 bg-night/60 px-3 py-1.5 text-[0.68rem] text-white/80 backdrop-blur-sm sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Click to play with sound
                </span>
              </div>
              <button
                type="button"
                onClick={play}
                className="absolute inset-0 z-20 block h-full w-full cursor-pointer rounded-[inherit] text-left"
                aria-label="Play the Atna's Flow demo video with sound"
              />
            </>
          ) : video?.kind === "youtube" || video?.kind === "vimeo" ? (
            <iframe
              src={video.embedUrl}
              title="Atna's Flow demo video"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : null}

          {unavailable ? (
            <div
              className="absolute inset-x-3 bottom-3 z-20 rounded-xl border border-white/15 bg-night/90 px-4 py-3 text-center text-sm text-white backdrop-blur-md sm:inset-x-auto sm:left-1/2 sm:w-auto sm:-translate-x-1/2"
              role="status"
            >
              The demo video is coming soon. Check back shortly.
            </div>
          ) : null}
        </div>
      </div>

      <p className="mt-5 max-w-xs text-center text-sm leading-relaxed text-muted">
        A short look at the dashboard, focus timer, and notebook — no sign-up,
        no cloud.
      </p>
    </div>
  );
}
