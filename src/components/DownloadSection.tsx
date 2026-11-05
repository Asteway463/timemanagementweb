"use client";

import { useEffect, useState } from "react";
import { Accordion } from "@/components/Accordion";
import { Icon, AndroidIcon } from "@/components/icons";
import { siteConfig, installSteps } from "@/config/site";
import { hasApkSize, isPlaceholder } from "@/lib/utils";
import { getDevicePlatform, type DevicePlatform } from "@/lib/device";

function QrPlaceholder() {
  const size = 25;
  const finders = [
    [0, 0],
    [size - 7, 0],
    [0, size - 7],
  ];

  function inFinder(x: number, y: number) {
    return finders.some(
      ([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7,
    );
  }

  const modules: Array<[number, number]> = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (inFinder(x, y)) continue;
      if ((x * 7 + y * 13 + x * y * 3) % 11 < 4) modules.push([x, y]);
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="QR code placeholder. The QR code appears when a download link is added."
      shapeRendering="crispEdges"
    >
      <rect width={size} height={size} fill="#ffffff" />
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#081321" />
      ))}
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#081321" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="#ffffff" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#081321" />
        </g>
      ))}
    </svg>
  );
}

export function DownloadSection({ qrSvg }: { qrSvg: string | null }) {
  const [device, setDevice] = useState<DevicePlatform | "unknown">("unknown");
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setDevice(
      getDevicePlatform(
        navigator.userAgent,
        navigator.platform,
        navigator.maxTouchPoints,
      ),
    );
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 7000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const apkReady = !isPlaceholder(siteConfig.apkUrl);
  const playReady = !isPlaceholder(siteConfig.playStoreUrl);

  function guard(event: React.MouseEvent<HTMLAnchorElement>, ready: boolean, label: string) {
    if (ready) return;
    event.preventDefault();
    setNotice(`${label} link is coming soon. Check back shortly.`);
  }

  return (
    <section id="download" className="section scroll-mt-24">
      <div className="container-page">
        <div className="download-card p-6 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">Download</span>
              <h2 className="display-title mt-4 text-[clamp(2rem,4.4vw,3.15rem)] text-ink">
                Get Atna&rsquo;s Flow
              </h2>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-muted">
                {device === "ios"
                  ? "Atna's Flow is currently available for Android. You can preview the app here, then open this page on an Android device to install it."
                  : "Free for Android. Download the APK and install it directly. No account, no sign-up, and no data leaves your phone."}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {device === "ios" ? (
                  <>
                    <a href="#demo" className="btn btn-primary btn-lg w-full sm:w-auto">
                      <Icon name="play" size={17} strokeWidth={1.9} />
                      Watch the app demo
                    </a>
                    <a href="#screenshots" className="btn btn-secondary btn-lg w-full sm:w-auto">
                      Browse screenshots
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={apkReady ? siteConfig.apkUrl : "#download"}
                      onClick={(event) =>
                        guard(event, apkReady, "The APK download")
                      }
                      download={
                        apkReady ? "atnas-flow-2.0.0.apk" : undefined
                      }
                      className="btn btn-primary btn-lg w-full sm:w-auto"
                      aria-disabled={!apkReady}
                    >
                      <AndroidIcon size={19} />
                      Install for Android
                    </a>
                    <a
                      href={playReady ? siteConfig.playStoreUrl : "#download"}
                      onClick={(event) =>
                        guard(event, playReady, "Google Play")
                      }
                      target={playReady ? "_blank" : undefined}
                      rel={playReady ? "noopener noreferrer" : undefined}
                      className="btn btn-secondary btn-lg w-full sm:w-auto"
                      aria-disabled={!playReady}
                    >
                      <Icon name="play" size={17} strokeWidth={1.9} />
                      Get it on Google Play
                    </a>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="chip">
                  <AndroidIcon size={14} className="text-success" />
                  Android {siteConfig.minAndroid}+
                </span>
                <span className="chip">Version {siteConfig.version}</span>
                {hasApkSize(siteConfig.apkSize) ? (
                  <span className="chip">APK · {siteConfig.apkSize}</span>
                ) : null}
                <span className="chip">
                  <Icon name="lock" size={12} className="text-success" />
                  Private
                </span>
              </div>

              <p className="mt-5 flex items-start gap-2 text-[0.82rem] leading-relaxed text-muted">
                <Icon
                  name="smartphone"
                  size={15}
                  className="mt-0.5 flex-none text-lavender"
                />
                <span>
                  {device === "android"
                    ? "Android detected. Tap Install for Android to download the APK."
                    : device === "ios"
                      ? "iPhone and iPad aren't supported yet. Watch the demo or browse the screenshots above."
                      : device === "desktop"
                        ? "On a computer? Scan the QR code with your Android phone to continue there."
                        : "For Android phones. On a computer, use the QR code to continue on your phone."}
                </span>
              </p>

              <p
                className="mt-3 min-h-[1.25rem] text-[0.82rem] text-lavender"
                role="status"
                aria-live="polite"
              >
                {notice}
              </p>
            </div>

            <aside className="mx-auto w-full max-w-[19rem] lg:mx-0 lg:ml-auto">
              <div className="qr-card">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-[0.82rem] font-semibold text-ink">
                    Scan to download
                  </p>
                  <Icon name="qr" size={18} className="text-lavender" />
                </div>

                <div className="mt-4">
                  <div className="qr-code">
                    {qrSvg ? (
                      <div
                        className="h-full w-full"
                        role="img"
                        aria-label="QR code linking to the Atna's Flow APK download"
                        // QR markup is generated at build time from siteConfig.qrTarget.
                        dangerouslySetInnerHTML={{ __html: qrSvg }}
                      />
                    ) : (
                      <QrPlaceholder />
                    )}
                  </div>
                </div>

                <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-muted">
                  {qrSvg
                    ? "Point your camera at the code to open the Expo install page."
                    : "The QR code appears as soon as the download link is live."}
                </p>

                <div className="mt-4 border-t border-line/10 pt-3 text-center text-[0.66rem] text-muted/80">
                  com.asteway.chronoflow · v{siteConfig.version}
                </div>
              </div>
            </aside>
          </div>

          <div className="relative mt-10 grid gap-6 border-t border-line/10 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <Accordion
              items={[
                {
                  id: "install-apk",
                  title: "How to install an APK",
                  content: (
                    <div className="space-y-4">
                      <p>
                        Android may ask for permission before installing an app
                        from your browser or file manager. It only takes a
                        moment.
                      </p>
                      <ol className="space-y-3">
                        {installSteps.map((step, index) => (
                          <li key={step} className="flex gap-3">
                            <span className="grid h-6 w-6 flex-none place-items-center rounded-full border border-lavender/20 bg-brand/15 font-display text-[0.7rem] font-semibold text-lavender">
                              {index + 1}
                            </span>
                            <span className="pt-0.5 text-[0.86rem] leading-relaxed text-muted">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ),
                },
              ]}
            />

            <div className="flex items-start gap-3 rounded-2xl border border-amber/20 bg-amber/[0.06] p-4">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-amber/20 bg-amber/10 text-amber">
                <Icon name="bell" size={16} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[0.86rem] font-medium text-ink">
                  For alarms that always arrive
                </p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
                  Allow notifications and Android&rsquo;s{" "}
                  <strong className="font-medium text-ink">
                    Alarms &amp; reminders
                  </strong>{" "}
                  permission. Atna&rsquo;s Flow asks only when it needs them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
