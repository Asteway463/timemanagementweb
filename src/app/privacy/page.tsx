import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import {
  siteConfig,
  privacyLastUpdated,
  privacyPoints,
  faqs,
} from "@/config/site";
import { contactHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Atna's Flow handles your data: no account, no analytics, no tracking, and no runtime network calls. Everything stays on your Android device.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Atna's Flow",
    description:
      "No account, no tracking, no runtime network calls. Your data stays on your phone.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  const contact = contactHref(siteConfig.contactEmail);

  return (
    <div className="relative overflow-clip">
      <div
        className="orb -right-28 top-10 h-72 w-72 opacity-30"
        aria-hidden="true"
      />
      <div className="container-page max-w-5xl pb-20 pt-12 sm:pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg text-[0.82rem] text-muted transition-colors hover:text-ink"
        >
          <Icon name="chevron-left" size={15} />
          Back to Atna&rsquo;s Flow
        </Link>

        <header className="mt-10 max-w-3xl">
          <span className="eyebrow">Privacy policy</span>
          <h1 className="display-title mt-4 text-[clamp(2.35rem,6vw,4rem)] text-ink balance">
            Your data stays on your device.
          </h1>
          <p className="mt-5 text-[1rem] leading-relaxed text-muted">
            Atna&rsquo;s Flow is built so that using a time manager does not
            mean handing over your day. This page explains what the app stores,
            what it never collects, and the choices you have.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="chip">Last updated {privacyLastUpdated}</span>
            <span className="chip">Version {siteConfig.version}</span>
            <span className="chip">
              <Icon name="lock" size={12} className="text-success" />
              Applies to the Android app
            </span>
          </div>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
          <aside className="self-start lg:sticky lg:top-28">
            <div className="glass rounded-3xl p-5">
              <p className="font-display text-[0.95rem] font-semibold text-ink">
                The short version
              </p>
              <ul className="mt-4 space-y-3">
                {privacyPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-2.5">
                    <Icon
                      name="check"
                      size={14}
                      strokeWidth={2.4}
                      className="mt-0.5 flex-none text-success"
                    />
                    <span className="text-[0.78rem] leading-relaxed text-muted">
                      {point.title}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5">
                  <Icon
                    name="check"
                    size={14}
                    strokeWidth={2.4}
                    className="mt-0.5 flex-none text-success"
                  />
                  <span className="text-[0.78rem] leading-relaxed text-muted">
                    Data export is a file you control
                  </span>
                </li>
              </ul>

              <Link
                href="/#privacy"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] text-lavender underline-offset-4 hover:underline"
              >
                See the privacy features
                <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </aside>

          <article className="prose-flow max-w-none">
            <h2>Overview</h2>
            <p>
              Atna&rsquo;s Flow is a private, offline-first time manager for
              Android, built by {siteConfig.developer}. The app is designed to
              work without an account, without a server, and without a network
              connection. This policy describes the Android app and this
              website.
            </p>

            <h2>What Atna&rsquo;s Flow stores</h2>
            <p>
              The app stores the information you create so it can show it back
              to you. That includes your tasks, categories, focus sessions,
              alarms, notes (including notes in the trash), display preferences
              such as theme and 12/24-hour time, and any background image you
              choose.
            </p>
            <p>
              This information is kept in the app&rsquo;s private storage on
              your device. Other apps do not have access to it. There is no
              cloud copy and no account to sync.
            </p>

            <h2>What we collect</h2>
            <p>
              <strong>Nothing.</strong> Atna&rsquo;s Flow has no account system,
              no analytics, no advertising SDKs, no crash-reporting service, and
              no tracking of how you use the app. We do not collect your name,
              email address, location, contacts, or usage history.
            </p>
            <p>
              This website is a static site. It does not include analytics or
              tracking scripts.
            </p>

            <h2>Network access</h2>
            <p>
              The app makes no runtime network calls. It does not check in with
              a server, download content, or send your data anywhere. Every
              feature works with the network turned off.
            </p>

            <h2>Permissions the app may ask for</h2>
            <ul>
              <li>
                <strong>Notifications</strong> — to show focus sessions and
                alarms when they finish.
              </li>
              <li>
                <strong>Alarms &amp; reminders</strong> — on Android 12 and
                later, this helps scheduled alarms fire at the right time, even
                when the phone is idle.
              </li>
              <li>
                <strong>Photo selection</strong> — when you choose a background
                image, Android&rsquo;s picker gives the app access only to the
                image you select. The image is used locally as your background.
              </li>
            </ul>
            <p>
              These permissions support features you use. They are not used for
              advertising, analytics, or tracking. You can decline them, though
              alarms and notifications may be less reliable.
            </p>

            <h2>Exports and backups</h2>
            <p>
              Atna&rsquo;s Flow can create a JSON export of your data locally.
              The app then opens Android&rsquo;s share sheet so you can choose
              where the file goes. Once you share it with another app or
              service, that destination&rsquo;s privacy practices apply. Choose
              a destination you trust.
            </p>

            <h2>Deleting your data</h2>
            <p>
              You can remove individual items in the app, empty the notebook
              trash, or clear the app&rsquo;s storage in Android settings.
              Uninstalling Atna&rsquo;s Flow deletes its local data from your
              device. If you want a copy first, export your data before
              uninstalling.
            </p>

            <h2>Children</h2>
            <p>
              Atna&rsquo;s Flow does not collect personal information from
              anyone, including children. There are no accounts, ads, or
              tracking features.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If the app&rsquo;s privacy practices change, this page will be
              updated and the date at the top will change. The current version
              of the app does not send data off your device.
            </p>

            <h2>Contact</h2>
            {contact ? (
              <p>
                Questions about privacy? Email{" "}
                <a href={contact}>{siteConfig.contactEmail}</a>.
              </p>
            ) : (
              <p>
                A contact address will be published before launch. Until then,
                the site&rsquo;s FAQ covers the most common data questions.
              </p>
            )}
            <p className="text-[0.82rem] text-muted/70">
              Atna&rsquo;s Flow version {siteConfig.version} ·{" "}
              {siteConfig.packageName} · Built by {siteConfig.developer}
            </p>
          </article>
        </div>

        <section className="mt-16 border-t border-line/10 pt-8">
          <h2 className="font-display text-lg font-semibold text-ink">
            A few quick answers
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {faqs.slice(0, 2).map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-line/12 bg-surface/40 p-4"
              >
                <p className="text-[0.88rem] font-medium text-ink">
                  {faq.question}
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/#faq"
            className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] text-lavender underline-offset-4 hover:underline"
          >
            Read the rest of the FAQ
            <Icon name="arrow-right" size={13} />
          </Link>
        </section>
      </div>
    </div>
  );
}
