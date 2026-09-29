import { verifiedSocial, whatsappHref } from "@/content/site";
import type { SocialLink } from "@/content/types";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.67c4.52 0 8.24 3.72 8.24 8.24 0 4.52-3.72 8.24-8.24 8.24-1.45 0-2.84-.38-4.07-1.09l-.29-.17-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.45c0-4.52 3.72-8.24 8.11-8.24m4.52 10.52c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
      />
    </svg>
  );
}

function GenericIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M10.59 13.41a1 1 0 0 0 1.41 1.41l4.95-4.95a3.5 3.5 0 0 0-4.95-4.95l-1.5 1.5a1 1 0 1 0 1.41 1.41l1.5-1.5a1.5 1.5 0 1 1 2.12 2.12l-4.95 4.95Zm2.82-2.82a1 1 0 0 0-1.41-1.41L7.05 13.13a3.5 3.5 0 0 0 4.95 4.95l1.5-1.5a1 1 0 0 0-1.41-1.41l-1.5 1.5a1.5 1.5 0 1 1-2.12-2.12l4.94-4.96Z"
      />
    </svg>
  );
}

const icons: Record<
  SocialLink["platform"],
  (props: { className?: string }) => React.ReactNode
> = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  youtube: GenericIcon,
  linkedin: GenericIcon,
  facebook: GenericIcon,
};

function resolveHref(item: SocialLink) {
  if (item.platform === "whatsapp") {
    return whatsappHref() ?? item.href;
  }
  return item.href;
}

export function SocialLinks({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer";
}) {
  if (verifiedSocial.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {verifiedSocial.map((item) => {
        const Icon = icons[item.platform];
        const brandColor =
          item.platform === "instagram"
            ? "hover:border-[#E4405F] hover:text-[#E4405F]"
            : item.platform === "whatsapp"
              ? "hover:border-[#25D366] hover:text-[#25D366]"
              : "hover:border-ink hover:text-ink";

        return (
          <li key={item.platform}>
            <a
              href={resolveHref(item)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-md)] border border-line-strong px-3 text-sm text-ink-soft transition-colors",
                brandColor,
                variant === "footer" && "bg-paper",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
