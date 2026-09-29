import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/social/SocialLinks";
import { mailHref, site, telHref, whatsappHref } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappHref();
  const tel = telHref();

  return (
    <footer className="mt-auto border-t border-line bg-paper-deep">
      <Container className="section-pad grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-cinema sm:h-32 sm:w-32">
              <Image
                src={site.identity.logoSrc}
                alt={`${site.identity.fullName} — Stage Host, Anchor, Presenter logo`}
                fill
                className="object-contain p-1.5"
                sizes="128px"
                quality={95}
              />
            </div>
            <div>
              <p className="display text-3xl md:text-4xl">{site.identity.fullName}</p>
              <p className="mt-2 text-sm text-ink-soft">
                {site.identity.titles.join(" · ")}
              </p>
              <p className="mt-3 text-sm text-muted">
                {site.identity.languages.join(" & ")} · {site.identity.location}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-sm text-ink-soft hover:text-ink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-ink-soft hover:text-ink">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a href={mailHref()} className="hover:text-ink">
                {site.contact.email}
              </a>
            </li>
            {tel ? (
              <li>
                <a href={tel} className="hover:text-ink">
                  {site.contact.phoneDisplay}
                </a>
              </li>
            ) : null}
            {wa ? (
              <li>
                <a href={wa} className="hover:text-ink" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            ) : null}
          </ul>
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Social
            </p>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.identity.fullName}. All rights reserved.
          </p>
          <p>Stage host · Anchor · Presenter</p>
        </Container>
      </div>
    </footer>
  );
}
