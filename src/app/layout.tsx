import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Self-hosted variable fonts: no network request at build or runtime.
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Atna's Flow — Private, offline time management for Android",
    template: "%s — Atna's Flow",
  },
  description: siteConfig.description,
  applicationName: siteConfig.appName,
  authors: [{ name: siteConfig.developer, url: siteConfig.siteUrl }],
  creator: siteConfig.developer,
  publisher: siteConfig.appName,
  category: "productivity",
  keywords: [
    "Atna's Flow",
    "time management app",
    "offline productivity app",
    "Android focus timer",
    "private task planner",
    "offline notes app",
    "alarm app Android",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.appName,
    title: "Atna's Flow — Make time for what matters.",
    description: siteConfig.description,
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Atna's Flow — a calm, private time manager for Android.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atna's Flow — Make time for what matters.",
    description:
      "A calm, private time manager for Android. No account, no tracking, and all data stays on your device.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/ast-time-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Atna's Flow",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A101C" },
    { media: "(prefers-color-scheme: light)", color: "#F6F7FA" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("atnas-flow-theme");if(t==="light"){document.documentElement.dataset.theme="light"}}catch(e){}document.documentElement.classList.add("js");})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
