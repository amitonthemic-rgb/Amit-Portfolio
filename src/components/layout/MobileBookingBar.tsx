import { MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/content/site";

export function MobileBookingBar() {
  const wa = whatsappHref();
  const tel = telHref();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-2">
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-bronze px-3 text-sm font-medium text-paper"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
        ) : (
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-bronze px-3 text-sm font-medium text-paper"
          >
            Book Me
          </a>
        )}
        {tel ? (
          <a
            href={tel}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-line-strong px-3 text-sm font-medium text-ink"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
        ) : (
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-line-strong px-3 text-sm font-medium text-ink"
          >
            Enquire
          </a>
        )}
      </div>
    </div>
  );
}
