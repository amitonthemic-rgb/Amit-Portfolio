"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-paper/95 backdrop-blur-sm"
          : "border-transparent bg-paper",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
          aria-label={`${site.identity.fullName} home`}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-[var(--radius-md)] bg-cinema md:h-12 md:w-12">
            <Image
              src={site.identity.logoSrc}
              alt=""
              fill
              className="object-contain p-0.5"
              sizes="48px"
              priority
              quality={95}
            />
          </span>
          <span className="leading-none">
            <span className="display block text-xl tracking-tight md:text-2xl">
              {site.identity.shortName} Yadav
            </span>
            <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Stage Host
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide no-underline transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex" size="md">
            Book Me
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-line-strong lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-paper lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-md)] px-3 py-3 text-base no-underline hover:bg-paper-deep"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 sm:hidden" onClick={() => setOpen(false)}>
            <Button href="/contact" className="w-full">
              Book Me
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
