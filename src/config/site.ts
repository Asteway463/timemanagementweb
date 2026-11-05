/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Atna's Flow — site configuration
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is the only file you need to edit to swap links, images, and video.
 *  Values wrapped in {{CURLY_BRACES}} are placeholders. The UI detects them and
 *  shows a designed fallback instead of a broken image or dead link.
 */

export type VideoSource = "auto" | "mp4" | "youtube" | "vimeo";

export type ScreenVariant =
  | "dashboard"
  | "planner"
  | "focus"
  | "alarms"
  | "notebook"
  | "stats";

export type Screenshot = {
  /** Light-mode public path, or a placeholder token. */
  lightSrc: string;
  /** Dark-mode public path, or a placeholder token. */
  darkSrc: string;
  title: string;
  caption: string;
  /** Which built-in mock to show while images are placeholders. */
  mock: ScreenVariant;
  alt: string;
};

export const siteConfig = {
  // ── App facts ────────────────────────────────────────────────────────────
  appName: "Atna's Flow",
  shortName: "Flow",
  tagline: "Make time for what matters.",
  version: "2.0.0",
  packageName: "com.asteway.chronoflow",
  developer: "Asteway Teshome",
  minAndroid: "8",
  /** Replace with the real APK size, e.g. "24 MB". */
  apkSize: "35 MB",

  // ── Site metadata ────────────────────────────────────────────────────────
  // Used for canonical URLs, Open Graph, sitemap, and JSON-LD.
  siteUrl: "https://atnasflow.app",
  description:
    "Atna's Flow is a calm, private time manager for Android. Plan your day, focus deeply, and never miss an alarm. No accounts, no tracking, and all data stays on your device.",

  // ── Download links ───────────────────────────────────────────────────────
  /** The APK is served from /public/download, so the button downloads the file directly. */
  apkUrl: "/download/atnas-flow-2.0.0.apk",
  playStoreUrl: "{{PLAY_STORE_URL}}",
  /** The URL encoded in the QR code. Point this at the APK or your download page. */
  qrTarget:
    "https://expo.dev/accounts/astewaytts-team/projects/atnasflow-5ctetpm455qwlqpiih06/builds/6aeb9c53-a5cf-48a7-b653-62f35e44943f",

  // ── Media ────────────────────────────────────────────────────────────────
  /** MP4 URL, or a YouTube / Vimeo watch URL. Placeholder shows a designed poster. */
  videoUrl: "/screenshots/video.mp4",
  /** Poster image shown before the video loads. */
  videoPoster: "{{VIDEO_POSTER}}",
  /** "auto" detects the provider from the URL. Override with mp4 | youtube | vimeo. */
  videoSource: "mp4" as VideoSource,

  // ── Images ───────────────────────────────────────────────────────────────
  appIcon: "{{APP_ICON}}",

  // ── Contact ──────────────────────────────────────────────────────────────
  contactEmail: "{{CONTACT_EMAIL}}",
} as const;

export const screenshots: Screenshot[] = [
  {
    lightSrc: "/screenshots/homeLight.jpg",
    darkSrc: "/screenshots/homepage.jpg",
    mock: "dashboard",
    title: "Your day at a glance",
    caption: "Focus time, tasks, streak, and progress in one calm overview.",
    alt: "Atna's Flow dashboard showing today's focus time, task progress, and streak.",
  },
  {
    lightSrc: "/screenshots/plannerdark.jpg",
    darkSrc: "/screenshots/plannerdark.jpg",
    mock: "planner",
    title: "Planner & tasks",
    caption: "Categories, priorities, and durations keep your tasks realistic.",
    alt: "Atna's Flow task planner with categorized tasks, priorities, and durations.",
  },
  {
    lightSrc: "/screenshots/focusdark.jpg",
    darkSrc: "/screenshots/focusdark.jpg",
    mock: "focus",
    title: "Focus timer",
    caption: "Choose a focus session and keep your attention on the task at hand.",
    alt: "Atna's Flow focus screen with focus, short break, and long break session options.",
  },
  {
    lightSrc: "/screenshots/setting.jpg",
    darkSrc: "/screenshots/settingdark.jpg",
    mock: "alarms",
    title: "Settings",
    caption: "Choose your time format, appearance, and reminder preferences.",
    alt: "Atna's Flow settings screen with notification, time format, and appearance options.",
  },
  {
    lightSrc: "/screenshots/notebooklight.jpg",
    darkSrc: "/screenshots/notebooklight.jpg",
    mock: "notebook",
    title: "Notebook",
    caption: "Write and manage notes that stay stored on your device.",
    alt: "Atna's Flow notebook screen with a note editor, search, and trash controls.",
  },
];

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Demo", href: "/#demo" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "Privacy", href: "/#privacy" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const trustItems = [
  "No account",
  "No ads",
  "Works offline",
  "Free",
] as const;

export type FeatureIcon =
  | "dashboard"
  | "planner"
  | "timer"
  | "bell"
  | "notebook"
  | "stats"
  | "theme"
  | "image";

export const features: {
  icon: FeatureIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "dashboard",
    title: "Daily dashboard",
    description:
      "See today's focus time, tasks, and streak in one calm overview.",
  },
  {
    icon: "planner",
    title: "Smart planner",
    description:
      "Organize tasks by category, priority, and how long they will take.",
  },
  {
    icon: "timer",
    title: "Focus timer",
    description:
      "Work, short-break, and long-break sessions that keep running if the app restarts.",
  },
  {
    icon: "bell",
    title: "Alarms that work",
    description:
      "One-time and weekly alarms with snooze, plus an optional math challenge to dismiss.",
  },
  {
    icon: "notebook",
    title: "Notebook",
    description:
      "Pin and search notes, edit them, and restore anything from the trash.",
  },
  {
    icon: "stats",
    title: "Statistics",
    description:
      "Track focus sessions and watch your daily streak grow over time.",
  },
  {
    icon: "theme",
    title: "Your theme",
    description:
      "Choose light, dark, or automatic, and switch between 12- and 24-hour time.",
  },
  {
    icon: "image",
    title: "Make it yours",
    description:
      "Pick a background image from your gallery to make the app feel personal.",
  },
];

export const privacyPoints = [
  {
    icon: "shield" as const,
    title: "No account required",
    description:
      "Open the app and start planning. There is no sign-up, no email, and no profile.",
  },
  {
    icon: "eye" as const,
    title: "No analytics or tracking",
    description:
      "No usage dashboards, advertising IDs, or third-party trackers. Nothing is watching.",
  },
  {
    icon: "wifi" as const,
    title: "No runtime network calls",
    description:
      "The app works fully offline. Your tasks, notes, alarms, and settings never leave the device.",
  },
];

export const installSteps = [
  "Tap Install for Android to download the APK file.",
  "Open the downloaded file. If Android asks for permission to install from your browser or file manager, allow it, then confirm the install.",
  "Open Atna's Flow once the install finishes.",
  "Allow notifications and “Alarms & reminders” so timers and alarms can reach you reliably.",
] as const;

export const faqs = [
  {
    question: "Is Atna's Flow free?",
    answer:
      "Yes. Atna's Flow is free to use, with no ads and no account to create. Just download it and start planning.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. There is no sign-up, login, or cloud profile. Everything happens locally on your Android device.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. Atna's Flow is offline-first and makes no runtime network calls. You can use every feature without a connection.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your tasks, notes, alarms, and settings live in the app's private storage on your phone. Other apps cannot read them. Uninstalling the app removes this data, so export a backup first if you need one.",
  },
  {
    question:
      "Why does Android ask for notification or alarm permission?",
    answer:
      "Notifications let timers and alarms show up when they finish. On Android 12 and later, the “Alarms & reminders” permission helps alarms fire at the right time, even when your phone is idle. They are used only for these features. You can decline, but alarms may be less reliable.",
  },
  {
    question: "How do I install the APK?",
    answer:
      "Download the APK, open it, and allow installs from your browser or file manager when Android asks. Confirm the install, then open the app. The download section has step-by-step instructions.",
  },
  {
    question: "Is there an iOS version?",
    answer:
      "Not right now. Atna's Flow is Android first. Any future platform news will be shared on this page.",
  },
  {
    question: "How do I back up my data?",
    answer:
      "Use the app's JSON export. It creates a single file locally and opens Android's share sheet so you can save it to a folder, Drive, or wherever you keep backups. You stay in control of where it goes.",
  },
] as const;

export const footerLinks = [
  { label: "Features", href: "/#features" },
  { label: "Demo", href: "/#demo" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** Kept in one place so the privacy page and footer never drift apart. */
export const privacyLastUpdated = "November 4, 2026";
