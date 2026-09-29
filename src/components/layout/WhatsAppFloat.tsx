"use client";

import { whatsappHref } from "@/content/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16.02 3.2c-7.05 0-12.78 5.68-12.78 12.68 0 2.24.6 4.42 1.73 6.34L3.2 28.8l6.8-1.77a12.8 12.8 0 0 0 6.02 1.53h.01c7.05 0 12.78-5.68 12.78-12.68S23.07 3.2 16.02 3.2zm0 23.2c-1.9 0-3.76-.5-5.39-1.45l-.39-.23-4.04 1.05 1.08-3.92-.25-.4a10.4 10.4 0 0 1-1.6-5.57c0-5.75 4.72-10.43 10.53-10.43s10.53 4.68 10.53 10.43-4.72 10.43-10.47 10.43zm5.77-7.82c-.32-.16-1.87-.91-2.16-1.02-.29-.1-.5-.16-.71.16-.21.32-.82 1.01-1 1.22-.18.21-.37.23-.68.08-.32-.16-1.33-.48-2.54-1.54-.94-.82-1.57-1.84-1.76-2.15-.18-.32-.02-.49.14-.64.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.69-.97-2.31-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.4-.29.32-1.1 1.06-1.1 2.59s1.13 3.01 1.29 3.22c.16.21 2.22 3.35 5.38 4.7.75.32 1.34.51 1.8.65.75.24 1.44.2 1.98.12.6-.09 1.87-.75 2.13-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z"
      />
    </svg>
  );
}

export function WhatsAppFloat() {
  const href = whatsappHref();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] bottom-24 right-4 md:bottom-8 md:right-6"
    >
      <span className="whatsapp-glow" aria-hidden />
      <WhatsAppGlyph className="relative z-10 h-7 w-7" />
    </a>
  );
}
