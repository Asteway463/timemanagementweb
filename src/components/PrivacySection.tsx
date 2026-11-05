import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { privacyPoints } from "@/config/site";

const pointIcons: Record<(typeof privacyPoints)[number]["icon"], IconName> = {
  shield: "shield",
  eye: "eye-off",
  wifi: "wifi-off",
};

export function PrivacySection() {
  return (
    <section id="privacy" className="section scroll-mt-24">
      <div
        className="orb orb-teal -left-40 top-1/3 h-72 w-72 opacity-30"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <span className="eyebrow">Privacy, by design</span>
            <h2 className="display-title mt-4 max-w-lg text-[clamp(2rem,4.4vw,3.15rem)] text-ink balance">
              Your data never leaves your phone.
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
              Atna&rsquo;s Flow has no cloud account, no sync service, and no
              reason to call home. Your tasks, notes, alarms, and settings stay
              in the app&rsquo;s private storage on your Android device.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/privacy" className="btn btn-secondary btn-sm">
                Read the privacy policy
                <Icon name="arrow-right" size={15} />
              </Link>
              <span className="chip self-center">
                <Icon name="lock" size={13} className="text-success" />
                Built for offline use
              </span>
            </div>

            <p className="mt-7 flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-muted">
              <Icon
                name="info"
                size={15}
                className="mt-0.5 flex-none text-lavender"
              />
              The app makes no runtime network calls. The only time data moves
              is when you choose to export it.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass relative overflow-hidden rounded-4xl p-5 sm:p-7">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand/25 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <span className="chip border-success/20 bg-success/[0.06] text-success">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgb(52_211_153)]"
                    aria-hidden="true"
                  />
                  100% on-device
                </span>
                <span className="flex items-center gap-1.5 text-[0.72rem] text-muted">
                  <Icon name="wifi-off" size={14} />
                  No network
                </span>
              </div>

              <div className="relative my-8 grid place-items-center">
                <div className="relative grid h-32 w-32 place-items-center rounded-full border border-lavender/15">
                  <div
                    className="absolute inset-4 rounded-full border border-lavender/10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 rounded-full bg-brand/20 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-[1.4rem] border border-white/15 bg-gradient-to-br from-brand-strong/40 to-brand/20 text-lavender shadow-[0_1px_0_rgb(255_255_255/0.15)_inset]">
                    <Icon name="shield" size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <ul className="relative space-y-3">
                {privacyPoints.map((point) => (
                  <li
                    key={point.title}
                    className="flex items-start gap-3.5 rounded-2xl border border-line/10 bg-raised/30 p-4"
                  >
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-lavender/15 bg-brand/10 text-lavender">
                      <Icon
                        name={pointIcons[point.icon]}
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-medium text-ink">
                        {point.title}
                      </p>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative mt-5 flex items-start gap-3.5 rounded-2xl border border-line/12 bg-brand/[0.06] p-4">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-lavender/15 bg-brand/10 text-lavender">
                  <Icon name="file-json" size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[0.88rem] font-medium text-ink">
                    Backups you control
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
                    Export a single JSON file through Android&rsquo;s share
                    sheet and save it wherever you like.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
