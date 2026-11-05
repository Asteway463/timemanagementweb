import Link from "next/link";
import { AndroidIcon, Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { isPlaceholder } from "@/lib/utils";

export function FinalCta() {
  const playReady = !isPlaceholder(siteConfig.playStoreUrl);

  return (
    <section className="section-tight pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="cta-band px-6 py-12 text-center sm:px-10 sm:py-16">
            <div
              className="orb -left-24 top-0 h-64 w-64 opacity-40"
              aria-hidden="true"
            />
            <div
              className="orb orb-teal -right-20 bottom-0 h-56 w-56 opacity-30"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center">Your time, your data</span>
              <h2 className="display-title mt-4 text-[clamp(2.1rem,5vw,3.4rem)] text-ink balance">
                Make time for{" "}
                <span className="text-gradient">what matters.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted">
                A calmer day starts with one download. Free, private, and ready
                to work offline.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={siteConfig.apkUrl}
                  download="atnas-flow-2.0.0.apk"
                  className="btn btn-primary btn-lg"
                >
                  <Icon name="download" size={18} strokeWidth={2} />
                  Download for Android
                </a>
                {playReady ? (
                  <a
                    href={siteConfig.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    <Icon name="play" size={16} strokeWidth={2} />
                    Google Play
                  </a>
                ) : (
                  <Link href="/#download" className="btn btn-secondary btn-lg">
                    <AndroidIcon size={18} />
                    Android {siteConfig.minAndroid}+
                  </Link>
                )}
              </div>

              <p className="mt-5 text-[0.75rem] text-muted">
                No account · No ads · Works offline · Version {siteConfig.version}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
