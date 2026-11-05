import type { VideoSource } from "@/config/site";
import { isPlaceholder } from "@/lib/utils";

export type ResolvedVideo =
  | { kind: "mp4"; src: string }
  | { kind: "youtube" | "vimeo"; embedUrl: string; watchUrl: string }
  | null;

function youtubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([\w-]{6,})/i,
    /youtube(?:-nocookie)?\.com\/watch\?(?:.*&)?v=([\w-]{6,})/i,
    /youtube(?:-nocookie)?\.com\/(?:embed|shorts|live)\/([\w-]{6,})/i,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

function vimeoId(url: string): string | null {
  return url.match(/vimeo\.com\/(?:video\/)?(\d+)/i)?.[1] ?? null;
}

/**
 * Turns the single VIDEO_URL config value into either an MP4 source or a
 * privacy-friendly embed URL. Returns null while the URL is a placeholder.
 */
export function resolveVideo(
  url: string,
  source: VideoSource = "auto",
): ResolvedVideo {
  if (isPlaceholder(url)) return null;

  const looksLikeYoutube = /youtu\.?be|youtube\.com/i.test(url);
  const looksLikeVimeo = /vimeo\.com/i.test(url);

  if (source === "youtube" || (source === "auto" && looksLikeYoutube)) {
    const id = youtubeId(url);
    return id
      ? {
          kind: "youtube",
          embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`,
          watchUrl: url,
        }
      : null;
  }

  if (source === "vimeo" || (source === "auto" && looksLikeVimeo)) {
    const id = vimeoId(url);
    return id
      ? {
          kind: "vimeo",
          embedUrl: `https://player.vimeo.com/video/${id}?autoplay=1`,
          watchUrl: url,
        }
      : null;
  }

  return { kind: "mp4", src: url };
}
