import { PhoneFrame } from "@/components/AppScreen";
import { ThemeScreenshot } from "@/components/ThemeScreenshot";
import { Icon } from "@/components/icons";
import { siteConfig, trustItems } from "@/config/site";
import { hasApkSize } from "@/lib/utils";

function HeroPhone() {
  return (
    <PhoneFrame className="shadow-phone">
      <ThemeScreenshot
        lightSrc="/screenshots/homeLight.jpg"
        darkSrc="/screenshots/homepage.jpg"
        alt="Atna's Flow home screen showing today's focus time, tasks, and progress"
        sizes="(max-width: 640px) 70vw, 300px"
      />
    </PhoneFrame>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div
        className="aurora animate-drift"
        aria-hidden="true"
      />
      <div className="grid-fade" aria-hidden="true" />
      <div
        className="orb animate-float-slow -left-24 top-10 h-64 w-64 opacity-50"
        aria-hidden="true"
      />
      <div
        className="orb orb-teal -right-16 top-1/3 h-52 w-52 opacity-40"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-6">
          <div className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="eyebrow eyebrow-dot justify-center lg:justify-start">
              Private. Offline. Yours.
            </p>

            <h1
              id="hero-heading"
              className="hero-title display-title mt-5 text-ink balance"
            >
              Make time for{" "}
              <span className="text-gradient">what matters.</span>
            </h1>

            <p className="hero-lead mt-6 balance">
              Atna&rsquo;s Flow is a calm, private time manager for Android —
              plan your day, focus deeply, and never miss an alarm. All your data
              stays on your device.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <a
                href={siteConfig.apkUrl}
                download="atnas-flow-2.0.0.apk"
                className="btn btn-primary btn-lg"
              >
                <Icon name="download" size={18} strokeWidth={2} />
                Download for Android
              </a>
              <a href="#demo" className="btn btn-secondary btn-lg">
                <Icon name="play" size={16} strokeWidth={1.9} />
                Watch demo
              </a>
            </div>

            <ul
              className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.8rem] text-muted lg:justify-start"
              aria-label="Atna's Flow highlights"
            >
              {trustItems.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span
                      className="hidden h-1 w-1 rounded-full bg-line/40 sm:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="flex items-center gap-1.5">
                    <Icon
                      name="check"
                      size={13}
                      strokeWidth={2.4}
                      className="text-success"
                    />
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="hero-note mt-5 justify-center lg:justify-start">
              <span aria-hidden="true" />
              Android {siteConfig.minAndroid}+
              {hasApkSize(siteConfig.apkSize) ? (
                <>
                  <span className="text-line/30" aria-hidden="true">
                    ·
                  </span>
                  APK {siteConfig.apkSize}
                </>
              ) : null}
            </p>
          </div>

          <div className="hero-stage">
            <div className="relative z-10 mx-auto w-[clamp(15.5rem,68vw,17.75rem)] lg:w-[clamp(16rem,23vw,17.75rem)]">
              <div className="animate-float-slow">
                <HeroPhone />
              </div>

              <div
                className="float-card animate-float left-[-50%] top-[20%] hidden items-center sm:flex"
                style={{ animationDelay: "-1.8s" }}
                aria-hidden="true"
              >
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-lavender/25 bg-brand/20 text-lavender">
                  <Icon name="timer" size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small>Focus session</small>
                  <strong className="font-display text-[0.95rem] font-semibold tracking-tight">
                    25:00
                  </strong>
                </div>
              </div>

              <div
                className="float-card animate-float right-[-18%] bottom-[16%] hidden items-center sm:flex"
                style={{ animationDelay: "-3.4s" }}
                aria-hidden="true"
              >
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-amber/25 bg-amber/10 text-amber">
                  <Icon name="flame" size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small>Current streak</small>
                  <strong className="font-display text-[0.95rem] font-semibold tracking-tight">
                    12 days
                  </strong>
                </div>
              </div>

              <div
                className="float-card animate-float right-[-4%] top-[8%] hidden items-center gap-2 px-3 py-2 md:flex"
                style={{ animationDelay: "-2.6s" }}
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgb(52_211_153)]" />
                <span className="text-[0.68rem] font-medium">On device</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
