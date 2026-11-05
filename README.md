# Atna's Flow — landing page

A static marketing and download site for **Atna's Flow**, a private, offline-first
time manager for Android. Built with Next.js 15 (App Router), TypeScript, and
Tailwind CSS. There is no backend, no CMS, no authentication, and no database.

The site is ready to deploy as-is: every unfinished asset has a designed fallback,
so you can publish now and swap in the real screenshots, video, and links later.

---

## Requirements

- **Node.js 20 or 22 LTS** (recommended). Newer non-LTS releases may work but are
  not tested.
- npm 10+.

No environment variables are required.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build and preview

```bash
npm run build     # writes a fully static site to out/
npm run preview   # serves out/ locally
```

`npm run build` runs a `prebuild` step that deletes `.next` first. This avoids a
Next.js metadata-route cache bug when switching icon files between builds. Use
`npm run build`, not a bare `npx next build`, if you have an old `.next` folder.

`next.config.ts` sets `output: "export"`, `trailingSlash: true`, and
`images.unoptimized: true`. The contents of `out/` can be uploaded to any static
host: Cloudflare Pages, Netlify, Vercel (static), GitHub Pages, S3 + CloudFront,
Nginx, or similar.

If you deploy under a subpath (for example `example.com/atnas-flow/`), add
`basePath` and `assetPrefix` to `next.config.ts` before building.

---

## Where to edit

Everything customer-facing lives in **`src/config/site.ts`**. You should not need
to touch components to change copy, links, screenshots, or FAQs.

| What | Where |
| --- | --- |
| App name, version, package, developer, Android minimum, APK size | `src/config/site.ts` → `siteConfig` |
| Canonical URL and SEO description | `siteConfig.siteUrl`, `siteConfig.description` |
| APK, Play Store, QR destination | `siteConfig.apkUrl`, `playStoreUrl`, `qrTarget` |
| Video and poster | `siteConfig.videoUrl`, `videoPoster`, `videoSource` |
| Hero image and app icon | `siteConfig.heroImage`, `appIcon` |
| Contact email | `siteConfig.contactEmail` |
| Screenshot titles, captions, alt text | `screenshots` array |
| Feature cards | `features` array |
| Privacy highlights | `privacyPoints` array |
| Install steps | `installSteps` array |
| FAQ | `faqs` array |
| Footer links, nav links | `footerLinks`, `navLinks` |
| Privacy policy date | `privacyLastUpdated` |
| Full privacy policy prose | `src/app/privacy/page.tsx` |

### Design tokens

Colors are CSS variables in `src/app/globals.css` (dark under `:root`, light under
`html[data-theme="light"]`) and are exposed to Tailwind as `night`, `surface`,
`ink`, `muted`, `brand`, `lavender`, `teal`, `success`, `amber`, and `line` in
`tailwind.config.ts`. Change the RGB triplets in one place to rebrand the whole
site. Inter and Space Grotesk are self-hosted variable fonts in `src/app/fonts/`
(SIL Open Font License, license files included), so builds and page loads make no
requests to Google Fonts.

---

## Placeholders to replace

All placeholders use the exact form `{{TOKEN}}`. They can appear anywhere in
`src/config/site.ts`; the UI detects them and renders a finished-looking fallback
instead of a broken image or a dead link.

| Placeholder | What to put there | Example |
| --- | --- | --- |
| `{{APK_URL}}` | Direct link to the signed APK | `https://atnasflow.app/download/atnas-flow-2.0.0.apk` |
| `{{PLAY_STORE_URL}}` | Google Play listing URL | `https://play.google.com/store/apps/details?id=com.asteway.chronoflow` |
| `{{VIDEO_URL}}` | MP4 file URL, or a YouTube/Vimeo watch URL | `https://atnasflow.app/media/demo.mp4` |
| `{{VIDEO_POSTER}}` | Poster image shown before playback | `/media/video-poster.jpg` |
| `{{APP_ICON}}` | Square app icon (nav/footer) | `/app-icon.png` |
| `{{HERO_IMAGE}}` | Hero phone screenshot | `/screens/hero.png` |
| `{{SCREENSHOT_1}}` | Gallery screenshot 1 | `/screens/dashboard.png` |
| `{{SCREENSHOT_2}}` | Gallery screenshot 2 | `/screens/planner.png` |
| `{{SCREENSHOT_3}}` | Gallery screenshot 3 | `/screens/focus.png` |
| `{{SCREENSHOT_4}}` | Gallery screenshot 4 | `/screens/alarms.png` |
| `{{SCREENSHOT_5}}` | Gallery screenshot 5 | `/screens/notes.png` |
| `{{SCREENSHOT_6}}` | Gallery screenshot 6 | `/screens/stats.png` |
| `{{CONTACT_EMAIL}}` | Public contact address | `hello@atnasflow.app` |

Also replace these plain config values (they are **not** `{{TOKEN}}` placeholders):

| Value | Default | Why |
| --- | --- | --- |
| `siteConfig.siteUrl` | `https://atnasflow.app` | Canonical URLs, Open Graph, JSON-LD, sitemap, robots |
| `siteConfig.apkSize` | `"XX MB"` | Shown in the hero when set; hidden while unset |
| `siteConfig.version` | `"2.0.0"` | Version chips |
| `siteConfig.minAndroid` | `"8"` | "Android 8+" copy |
| `siteConfig.packageName` | `com.asteway.chronoflow` | Used by SEO and manifest copy |
| `siteConfig.developer` | `Asteway Teshome` | Metadata author |

### Recommended asset workflow

1. Put files under `public/`, for example `public/screens/dashboard.png`.
2. Reference them with root-relative paths: `/screens/dashboard.png`.
3. Replace the placeholder string in `src/config/site.ts`.
4. Run `npm run build` again.

Use **local files in `public/`** rather than remote URLs. Next.js validates remote
image hostnames even with `unoptimized` images; if you must use a remote URL, add
its hostname to `images.remotePatterns` in `next.config.ts`.

### Screenshots

- Six screenshots are shown, each with a title and caption in the `screenshots`
  array. You can add or remove entries; the gallery and lightbox adapt.
- Recommended size: **1080 × 2400** (9:20), PNG or WebP, under ~500 KB each.
- Keep `alt` text accurate; it describes the image for screen readers.
- While a `src` is a placeholder, a hand-built CSS phone mock from
  `src/components/AppScreen.tsx` is shown. The mock matches the real app's style,
  so the gallery looks complete before real screenshots exist.
- The hero image (`{{HERO_IMAGE}}`) is separate from the gallery. If omitted, the
  hero also uses the CSS mock.

### Video

`videoUrl` accepts:

- a direct `.mp4` URL → rendered in a native `<video>` player;
- a YouTube or Vimeo watch URL → converted to an embed automatically.

`videoSource` is `"auto"` by default. Set it to `"mp4"`, `"youtube"`, or `"vimeo"`
to force a provider when detection is ambiguous.

Until `videoUrl` is set, the demo section shows an art-directed poster with a play
button; clicking it politely reports that the video is coming soon. Setting
`videoPoster` replaces the poster art with your image.

### QR code

The QR code is generated at build time with `qrcode` from `siteConfig.qrTarget`,
which defaults to `{{APK_URL}}`. It appears automatically once `qrTarget` is a
real `http(s)` URL; otherwise a clearly labelled, non-scannable placeholder is
shown. Set `qrTarget` separately if you want the QR to point at the Play Store or
a download page instead of the APK. Rebuild after changing it.

### App icon and social image

The shipped brand mark is a designed placeholder. To use your own:

| File | Purpose |
| --- | --- |
| `public/app-icon.svg` | Inline fallback icon in the nav/footer |
| `public/icon-192.png`, `public/icon-512.png` | Web app manifest icons |
| `public/favicon.ico`, `public/favicon-64.png` | Browser favicons |
| `src/app/icon.svg` | Next.js metadata icon |
| `src/app/apple-icon.png` | Apple touch icon |
| `public/og.png` | 1200 × 630 social preview (source: `public/og.svg`) |

Replacing `siteConfig.appIcon` with a real image updates the nav and footer, but
the favicon and manifest icons above are separate files.

---

## Accessibility and performance

The site is built and checked for:

- semantic landmarks, one `h1` per page, ordered headings;
- visible `:focus-visible` styles on every interactive element;
- keyboard support for the mobile menu, theme toggle, screenshot rail, lightbox
  (including `Esc`, arrow keys, and a focus trap), and FAQ accordions;
- alt text for content images and `aria-hidden` on decorative phone mocks;
- AA contrast in both dark and light themes;
- `prefers-reduced-motion` handling for smooth scrolling and animations;
- static HTML with no runtime data fetching and no third-party scripts.

An axe-core audit (WCAG 2.0/2.1 A + AA) reports **zero violations** across the
home page (desktop and mobile, dark and light), the open mobile menu, the open
lightbox, and the privacy page.

To re-check locally:

```bash
npm run typecheck
npm run build
```

The home route ships roughly 126 kB of first-load JavaScript, all of it local.

---

## Project structure

```text
.
├── .gitignore
├── README.md
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── app-icon.svg          # fallback brand mark
│   ├── favicon-64.png
│   ├── favicon.ico
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── og.png                # 1200×630 social card
│   └── og.svg                # editable source for og.png
└── src/
    ├── app/
    │   ├── apple-icon.png
    │   ├── fonts/             # self-hosted Inter + Space Grotesk (OFL)
    │   ├── globals.css       # theme tokens, layout primitives, animation
    │   ├── icon.svg
    │   ├── layout.tsx        # fonts, metadata, theme boot script, chrome
    │   ├── manifest.ts       # web app manifest
    │   ├── page.tsx          # home page composition, QR, JSON-LD
    │   ├── privacy/
    │   │   └── page.tsx      # plain-English privacy policy
    │   ├── robots.ts
    │   └── sitemap.ts
    ├── components/
    │   ├── Accordion.tsx     # accessible disclosure used by FAQ + install steps
    │   ├── AppIcon.tsx
    │   ├── AppScreen.tsx     # CSS phone mocks for hero / gallery / poster
    │   ├── DemoVideo.tsx     # lazy MP4 / YouTube / Vimeo facade
    │   ├── DownloadSection.tsx
    │   ├── FaqSection.tsx
    │   ├── Features.tsx
    │   ├── FinalCta.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── Navbar.tsx        # sticky nav, scrollspy, mobile menu, theme toggle
    │   ├── PrivacySection.tsx
    │   ├── Reveal.tsx        # scroll-reveal with reduced-motion support
    │   ├── Screenshots.tsx   # scroll rail + keyboard-accessible lightbox
    │   ├── SectionHeading.tsx
    │   ├── ThemeToggle.tsx
    │   ├── icons.tsx
    │   └── phone.module.css
    ├── config/
    │   └── site.ts           # ← the only file you normally edit
    └── lib/
        ├── device.ts         # Android UA detection, URL checks
        ├── utils.ts          # placeholder detection, class joiner
        └── video.ts          # provider detection / embed URL builder
```

---

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Clean `.next`, build, and export to `out/` |
| `npm run preview` | Serve the exported `out/` folder |
| `npm run typecheck` | Run TypeScript with no emit |

---

## Pre-launch checklist

- [ ] Replace `{{APK_URL}}` and `{{PLAY_STORE_URL}}` (or remove the Play button
      if there is no listing yet).
- [ ] Set `siteConfig.siteUrl` to the real domain.
- [ ] Add the six screenshots, hero image, icon, poster, and video.
- [ ] Replace `{{CONTACT_EMAIL}}`; until then, contact CTAs are hidden behind
      neutral "coming soon" copy.
- [ ] Set `apkSize`, `version`, and `minAndroid`.
- [ ] Replace `public/og.png` and the favicon/icon files if you have final art.
- [ ] Run `npm run build` and spot-check `out/index.html`, `out/privacy/`,
      `out/robots.txt`, `out/sitemap.xml`, and `out/manifest.webmanifest`.
- [ ] Re-run a Lighthouse mobile pass on the deployed URL.

---

Atna's Flow is free, has no ads, no accounts, and no tracking. The site says the
same thing — and means it.
# timemanagementweb
