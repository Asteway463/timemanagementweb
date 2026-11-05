import Image from "next/image";
import { siteConfig } from "@/config/site";
import { isPlaceholder } from "@/lib/utils";

/**
 * Shows the configured app icon, falling back to the shipped ChronoFlow mark.
 */
export function AppIcon({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  if (!isPlaceholder(siteConfig.appIcon)) {
    return (
      <Image
        src={siteConfig.appIcon}
        alt="Atna's Flow app icon"
        width={size}
        height={size}
        className={`rounded-[26%] ${className}`}
      />
    );
  }

  return (
    <span
      className={`relative inline-flex flex-none items-center justify-center overflow-hidden rounded-[26%] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/ast-time-icon.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        priority={size >= 64}
      />
    </span>
  );
}
