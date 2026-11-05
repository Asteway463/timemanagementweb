/** A QR target is only generated when it is a real URL (not a placeholder). */
export function isRealUrl(value: string): boolean {
  if (!value || /\{\{[A-Z0-9_]+\}\}/.test(value)) return false;
  return /^https?:\/\//i.test(value);
}

export type DevicePlatform = "android" | "ios" | "desktop";

export function getDevicePlatform(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0,
): DevicePlatform {
  if (/android/i.test(userAgent)) return "android";
  if (
    /iphone|ipad|ipod/i.test(userAgent) ||
    (platform === "MacIntel" && maxTouchPoints > 1)
  ) {
    return "ios";
  }
  return "desktop";
}
