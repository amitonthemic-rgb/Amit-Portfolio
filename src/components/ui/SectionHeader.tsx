import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-3", tone === "dark" && "text-bronze")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-4xl md:text-5xl lg:text-[3.5rem]",
          tone === "dark" ? "text-cinema-ink" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            tone === "dark" ? "text-cinema-muted" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
