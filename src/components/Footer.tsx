import Link from "next/link";
import { AppIcon } from "@/components/AppIcon";
import { siteConfig, footerLinks } from "@/config/site";
import { contactHref } from "@/lib/utils";

export function Footer() {
  const contact = contactHref(siteConfig.contactEmail);

  return (
    <footer className="border-t border-line/10 bg-surface/20">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg"
              aria-label="Atna's Flow — home"
            >
              <AppIcon size={38} />
              <span className="font-display text-[1.08rem] font-semibold tracking-[-0.02em] text-ink">
                Atna&rsquo;s Flow
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[0.86rem] leading-relaxed text-muted">
              {siteConfig.tagline} A calm, private time manager for Android that
              works entirely on your device.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Android {siteConfig.minAndroid}+</span>
              <span className="chip">v{siteConfig.version}</span>
            </div>
          </div>

          <nav aria-label="Footer product links">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Product
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.86rem]">
              <li>
                <Link href="/#features" className="text-muted transition-colors hover:text-ink">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="text-muted transition-colors hover:text-ink">
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/#screenshots"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Screenshots
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Download
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer information links">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
              More
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.86rem]">
              {footerLinks
                .filter((link) => link.label === "Privacy" || link.label === "FAQ")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              <li>
                {contact ? (
                  <a
                    href={contact}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    Contact
                  </a>
                ) : (
                  <span
                    className="cursor-default text-muted/60"
                    title="Add CONTACT_EMAIL in src/config/site.ts"
                  >
                    Contact
                  </span>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line/10 pt-6 text-[0.75rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Built by {siteConfig.developer} · © 2026</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Version {siteConfig.version}</span>
            <span className="text-line/30" aria-hidden="true">
              ·
            </span>
            <span>{siteConfig.packageName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
