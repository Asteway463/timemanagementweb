import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-title mt-4 text-[clamp(2rem,4.4vw,3.15rem)] text-ink balance">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-[0.98rem] leading-relaxed text-muted sm:text-[1.03rem]",
            centered && "mx-auto max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
