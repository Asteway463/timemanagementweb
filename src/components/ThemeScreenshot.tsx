import Image from "next/image";

export type ThemeScreenshotProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Render both local variants and let the existing document theme select one.
 * CSS selection avoids a client-side theme flash and does not add another
 * source of theme state alongside the site's data-theme attribute.
 */
export function ThemeScreenshot({
  lightSrc,
  darkSrc,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  fill = true,
  width = 1080,
  height = 2276,
}: ThemeScreenshotProps) {
  const imageClass =
    className ?? (fill ? "object-cover" : "h-auto w-full object-contain");

  return (
    <>
      <span className={`theme-screenshot theme-screenshot-light${fill ? "" : " theme-screenshot-flow"}`}>
        <Image
          src={lightSrc}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes}
          priority={priority}
          className={imageClass}
        />
      </span>
      <span className={`theme-screenshot theme-screenshot-dark${fill ? "" : " theme-screenshot-flow"}`}>
        <Image
          src={darkSrc}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes}
          priority={priority}
          className={imageClass}
        />
      </span>
    </>
  );
}
