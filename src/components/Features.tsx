import Image from "next/image";
import { Icon } from "@/components/icons";
import { ThemeScreenshot } from "@/components/ThemeScreenshot";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { features } from "@/config/site";

type FeaturePreview = {
  alt: string;
  src?: string;
  lightSrc?: string;
  darkSrc?: string;
};

const featureScreenshots: Record<string, FeaturePreview> = {
  "Daily dashboard": {
    lightSrc: "/screenshots/homeLight.jpg",
    darkSrc: "/screenshots/homepage.jpg",
    alt: "Atna's Flow home screen preview",
  },
  "Smart planner": {
    lightSrc: "/screenshots/plannerdark.jpg",
    darkSrc: "/screenshots/plannerdark.jpg",
    alt: "Atna's Flow planner screen preview",
  },
  "Focus timer": {
    lightSrc: "/screenshots/focusdark.jpg",
    darkSrc: "/screenshots/focusdark.jpg",
    alt: "Atna's Flow focus timer screen preview",
  },
  Notebook: {
    lightSrc: "/screenshots/notebooklight.jpg",
    darkSrc: "/screenshots/notebooklight.jpg",
    alt: "Atna's Flow notebook screen preview",
  },
  "Your theme": {
    lightSrc: "/screenshots/setting.jpg",
    darkSrc: "/screenshots/settingdark.jpg",
    alt: "Atna's Flow appearance settings preview",
  },
  "Make it yours": {
    src: "/background.jpg",
    alt: "Dandelion silhouette at sunset, an example app background",
  },
};

export function Features() {
  return (
    <section id="features" className="section scroll-mt-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Everything you need"
            title={
              <>
                A quieter way to
                <br className="hidden sm:block" /> plan your day.
              </>
            }
            description="Eight focused tools, one calm app. No feeds, no noise, and nothing you did not ask for."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const preview = featureScreenshots[feature.title];

            return (
              <Reveal key={feature.title} delay={(index % 4) * 60}>
                <article className="group glass card-lift relative h-full overflow-hidden rounded-3xl p-6">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-lavender/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span className="icon-tile">
                      <Icon name={feature.icon} size={21} strokeWidth={1.7} />
                    </span>
                    <div className="flex items-start gap-3">
                      {preview ? (
                        <div className="feature-shot" aria-hidden="true">
                        {preview.src ? (
                            <Image
                              src={preview.src}
                              alt=""
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                        ) : preview.lightSrc && preview.darkSrc ? (
                            <ThemeScreenshot
                            lightSrc={preview.lightSrc}
                            darkSrc={preview.darkSrc}
                            alt={preview.alt}
                              fill={false}
                              sizes="80px"
                              className="h-full w-full object-cover"
                            />
                        ) : null}
                        </div>
                      ) : null}
                      <span
                        className="pt-1 font-display text-[0.65rem] font-medium tracking-[0.14em] text-line/30"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-[1.06rem] font-semibold tracking-[-0.015em] text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-[0.8rem] text-muted">
            <Icon name="sparkle" size={14} className="text-lavender" />
            Built to be used, not to keep you scrolling.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
