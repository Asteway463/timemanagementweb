import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up"
  | "arrow-up-right"
  | "chevron-left"
  | "chevron-right"
  | "download"
  | "play"
  | "check"
  | "check-circle"
  | "menu"
  | "close"
  | "sun"
  | "moon"
  | "qr"
  | "plus"
  | "shield"
  | "eye-off"
  | "wifi-off"
  | "file-json"
  | "bell"
  | "timer"
  | "dashboard"
  | "planner"
  | "notebook"
  | "stats"
  | "theme"
  | "image"
  | "sparkle"
  | "lock"
  | "search"
  | "flame"
  | "clock"
  | "mail"
  | "heart"
  | "smartphone"
  | "info";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  "arrow-up": (
    <>
      <path d="M12 20V4" />
      <path d="m5 11 7-7 7 7" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  "chevron-left": <path d="m14.5 5-7 7 7 7" />,
  "chevron-right": <path d="m9.5 5 7 7-7 7" />,
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  play: <path d="M8 5.5v13l10-6.5-10-6.5Z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.6 2.6L16 9" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h11" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20.2 14.4A8.5 8.5 0 0 1 9.6 3.8 8.5 8.5 0 1 0 20.2 14.4Z" />,
  qr: (
    <>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1" />
      <path d="M14.5 14.5h2.8v2.8h-2.8zM20.5 14.5v2.8M14.5 20.5h2.8M20.5 20.5h-1.2" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.4c0 4.4-2.8 7.5-7 9.4-4.2-1.9-7-5-7-9.4V6l7-2.8Z" />
      <path d="m8.8 12 2.2 2.2 4.4-4.6" />
    </>
  ),
  "eye-off": (
    <>
      <path d="M3 3l18 18" />
      <path d="M10.6 10.7a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 5.2A9.8 9.8 0 0 1 12 5c5 0 8.5 4 9.7 7a12.3 12.3 0 0 1-2.1 3.2" />
      <path d="M6.5 6.5A12.5 12.5 0 0 0 2.3 12c1.2 3 4.7 7 9.7 7 1.5 0 2.8-.3 4-.9" />
    </>
  ),
  "wifi-off": (
    <>
      <path d="M3 3l18 18" />
      <path d="M8.5 15.5a5 5 0 0 1 6 0" />
      <path d="M5 12a10 10 0 0 1 3-2" />
      <path d="M2 8.8A15 15 0 0 1 7 6" />
      <path d="M16.5 11.2A9 9 0 0 1 19 12.5" />
      <path d="M19 6.5a15 15 0 0 0-5.4-1.4" />
      <circle cx="12" cy="19" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  "file-json": (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 13.5c-.8 0-.8 1.2 0 1.2s.8 1.3 0 1.3M14.5 13.5c.8 0 .8 1.2 0 1.2s-.8 1.3 0 1.3" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
      <path d="M10.3 20a2 2 0 0 0 3.4 0" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 9.5v4.2l2.6 1.8" />
      <path d="M9 2.5h6" />
      <path d="M12 2.5v3" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="4.5" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="10.5" width="7" height="10" rx="2" />
    </>
  ),
  planner: (
    <>
      <path d="M9 6h11M9 12h11M9 18h7" />
      <path d="m3.5 5.8 1.2 1.2 2-2.2M3.5 11.8l1.2 1.2 2-2.2M3.5 17.8l1.2 1.2 2-2.2" />
    </>
  ),
  notebook: (
    <>
      <path d="M6 3.5h12a1.5 1.5 0 0 1 1.5 1.5v14A1.5 1.5 0 0 1 18 20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
      <path d="M8 3.5v17" />
      <path d="M11 8h5M11 12h5" />
    </>
  ),
  stats: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      <path d="M20 4v16" opacity=".35" />
    </>
  ),
  theme: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="3" />
      <circle cx="8.5" cy="9" r="1.6" />
      <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3c0 4.5 2.5 7 7 7-4.5 0-7 2.5-7 7 0-4.5-2.5-7-7-7 4.5 0 7-2.5 7-7Z" />
      <path d="M19 16.5c0 2.2 1.3 3.5 3.5 3.5-2.2 0-3.5 1.3-3.5 3.5 0-2.2-1.3-3.5-3.5-3.5 2.2 0 3.5-1.3 3.5-3.5Z" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="11" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </>
  ),
  flame: (
    <path d="M12 21c3.9 0 6.5-2.5 6.5-6.2 0-3-1.7-4.9-3.2-6.3-.6 1.9-1.7 2.8-3 3.6.2-3.3-1.2-6-4-8.1.1 3.4-2.8 5.2-2.8 9.4C5.5 18.2 8.2 21 12 21Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 7.5 3.2C19.5 15.4 12 20 12 20Z" />
  ),
  smartphone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.7,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/** Google's Android robot mark, filled so it stays legible at small sizes. */
export function AndroidIcon({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M6.6 9.2h10.8c.5 0 .9.4.9.9v7.1c0 .5-.4.9-.9.9h-.9v2.4a1.35 1.35 0 0 1-2.7 0v-2.4h-3.6v2.4a1.35 1.35 0 0 1-2.7 0v-2.4h-.9a.9.9 0 0 1-.9-.9v-7.1c0-.5.4-.9.9-.9Zm-2.7 0c.75 0 1.35.6 1.35 1.35v5.4a1.35 1.35 0 0 1-2.7 0v-5.4C2.55 9.8 3.15 9.2 3.9 9.2Zm16.2 0c.75 0 1.35.6 1.35 1.35v5.4a1.35 1.35 0 0 1-2.7 0v-5.4c0-.75.6-1.35 1.35-1.35ZM8.1 3.55l-.9-1.6a.35.35 0 0 1 .6-.35l.93 1.64A6.9 6.9 0 0 1 12 2.8c1.2 0 2.33.28 3.27.79l.93-1.64a.35.35 0 0 1 .6.35l-.9 1.6A6.52 6.52 0 0 1 19.2 8H4.8a6.52 6.52 0 0 1 3.3-4.45ZM8.8 6.1a.65.65 0 1 0 0-1.3.65.65 0 0 0 0 1.3Zm6.4 0a.65.65 0 1 0 0-1.3.65.65 0 0 0 0 1.3Z" />
    </svg>
  );
}
