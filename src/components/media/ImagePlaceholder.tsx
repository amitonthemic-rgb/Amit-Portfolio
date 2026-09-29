import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
  aspect = "portrait",
}: {
  label: string;
  className?: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "landscape"
        ? "aspect-[4/3]"
        : aspect === "wide"
          ? "aspect-[16/9]"
          : "aspect-square";

  return (
    <div
      className={cn(
        "placeholder-frame relative overflow-hidden rounded-[var(--radius-md)]",
        aspectClass,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-6">
        <p className="eyebrow text-[0.65rem]">Client photograph required</p>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">{label}</p>
      </div>
    </div>
  );
}
