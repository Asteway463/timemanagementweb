import QRCode from "qrcode";
import { DemoVideo } from "@/components/DemoVideo";
import { DownloadSection } from "@/components/DownloadSection";
import { FaqSection } from "@/components/FaqSection";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/icons";
import { PrivacySection } from "@/components/PrivacySection";
import { Reveal } from "@/components/Reveal";
import { Screenshots } from "@/components/Screenshots";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, siteConfig } from "@/config/site";
import { isRealUrl } from "@/lib/device";
import { isPlaceholder } from "@/lib/utils";

export default async function HomePage() {
  const qrSvg = isRealUrl(siteConfig.qrTarget)
    ? await QRCode.toString(siteConfig.qrTarget, {
        type: "svg",
        margin: 1,
        width: 256,
        errorCorrectionLevel: "M",
        color: { dark: "#081321", light: "#FFFFFF" },
      })
    : null;

  // Structured data expects an absolute URL, while the button uses a
  // same-origin path so the APK can be downloaded locally.
  const apkDownloadUrl = isPlaceholder(siteConfig.apkUrl)
    ? null
    : siteConfig.apkUrl.startsWith("http")
      ? siteConfig.apkUrl
      : `${siteConfig.siteUrl.replace(/\/$/, "")}${siteConfig.apkUrl}`;

  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.appName,
    operatingSystem: `Android ${siteConfig.minAndroid}+`,
    softwareVersion: siteConfig.version,
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "Time Management",
    description: siteConfig.description,
    inLanguage: "en",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: siteConfig.developer,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(apkDownloadUrl ? { downloadUrl: apkDownloadUrl } : {}),
    ...(isPlaceholder(siteConfig.playStoreUrl)
      ? {}
      : { installUrl: siteConfig.playStoreUrl }),
    ...(isPlaceholder(siteConfig.siteUrl)
      ? {}
      : {
          url: siteConfig.siteUrl,
          sameAs: [siteConfig.siteUrl],
        }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serialize = (value: unknown) =>
    JSON.stringify(value).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(applicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(faqSchema) }}
      />

      <Hero />

      <section id="demo" className="section scroll-mt-24">
        <div className="container-page">
          <div className="demo-feature-layout grid items-center gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
            <div className="demo-feature-copy lg:order-2">
              <Reveal>
                <SectionHeading
                  eyebrow="Inside the app"
                  title="See your day flow."
                  description="A quick look at the real app: plan what matters, focus without noise, and keep your notes close."
                  align="left"
                />
              </Reveal>
              <Reveal delay={70}>
                <div className="demo-highlights mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-1">
                  <article className="demo-highlight flex items-center gap-3 rounded-2xl border border-line/12 bg-surface/35 p-4">
                    <span className="icon-tile h-10 w-10 rounded-xl">
                      <Icon name="dashboard" size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Plan simply</h3>
                      <p className="mt-0.5 text-xs text-muted">Tasks that fit your day</p>
                    </div>
                  </article>
                  <article className="demo-highlight flex items-center gap-3 rounded-2xl border border-line/12 bg-surface/35 p-4">
                    <span className="icon-tile h-10 w-10 rounded-xl">
                      <Icon name="timer" size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Focus deeply</h3>
                      <p className="mt-0.5 text-xs text-muted">Sessions with breaks</p>
                    </div>
                  </article>
                  <article className="demo-highlight flex items-center gap-3 rounded-2xl border border-line/12 bg-surface/35 p-4">
                    <span className="icon-tile h-10 w-10 rounded-xl">
                      <Icon name="notebook" size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Keep your notes</h3>
                      <p className="mt-0.5 text-xs text-muted">Private and on-device</p>
                    </div>
                  </article>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#screenshots" className="btn btn-secondary btn-sm">
                    Explore screenshots
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#download" className="btn btn-primary btn-sm">
                    Get Atna&rsquo;s Flow
                    <Icon name="download" size={15} />
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal
              delay={100}
              className="mx-auto lg:order-1 lg:mx-0 lg:justify-self-center"
            >
              <DemoVideo />
            </Reveal>
          </div>
        </div>
      </section>

      <Features />
      <Screenshots />
      <PrivacySection />
      <DownloadSection qrSvg={qrSvg} />
      <FaqSection />
      <FinalCta />
    </>
  );
}
