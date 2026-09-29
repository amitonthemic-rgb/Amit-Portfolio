import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { mailHref, site, telHref, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book ${site.identity.fullName} for your event in Delhi or across India — form, email, WhatsApp and call.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const wa = whatsappHref();
  const tel = telHref();

  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3 text-5xl md:text-6xl">BOOK THE HOST</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Tell Amit about your event type, date, city and preferred hosting language
            (English, Hindi, or both). Based in Delhi and available PAN India.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-ink-soft">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-bronze" aria-hidden />
              <a href={mailHref()}>{site.contact.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-bronze" aria-hidden />
              <a href={tel ?? undefined}>{site.contact.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-bronze" aria-hidden />
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  WhatsApp · {site.contact.phoneDisplay}
                </a>
              ) : null}
            </li>
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.06}>
          <div className="rounded-[var(--radius-lg)] border border-line bg-paper p-5 shadow-[var(--shadow-soft)] md:p-8">
            <BookingForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
