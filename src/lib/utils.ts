/** True when a config value is still an unfilled {{PLACEHOLDER}} token. */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  return /^\{\{[A-Z0-9_]+\}\}$/.test(value.trim());
}

/** Tiny class-name joiner. Keeps JSX readable without adding a dependency. */
export function cn(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}

/** A human-readable contact address, or null when it has not been set. */
export function contactHref(email: string): string | null {
  return isPlaceholder(email) ? null : `mailto:${email}`;
}

/** True when a real APK size has been provided. "XX MB" is the shipped default. */
export function hasApkSize(size: string): boolean {
  return !isPlaceholder(size) && !/^xx\s*mb$/i.test(size.trim());
}
