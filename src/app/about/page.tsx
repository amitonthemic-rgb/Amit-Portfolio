import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.identity.fullName} — Delhi-based stage host, anchor and presenter working in English and Hindi.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="border-b border-line section-pad">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)] border border-line">
            <Image
              src={site.identity.aboutImageSrc}
              alt={`${site.identity.fullName} — professional stage host portrait`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.06}>
          <p className="eyebrow">About</p>
          <h1 className="display mt-3 text-5xl md:text-6xl lg:text-7xl">
            {site.identity.fullName}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            {site.identity.titles.join(" · ")}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-bronze">
            {site.identity.languages.join(" & ")} · {site.identity.location}
          </p>
          <div className="prose-bio mt-8 space-y-4 text-ink-soft">
            <p>{site.identity.biography}</p>
          </div>
          <ul className="mt-8 space-y-3">
            {site.identity.styleNotes.map((note) => (
              <li key={note} className="border-l-2 border-bronze pl-4 text-ink-soft">
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/showreel">Watch Showreel</Button>
            <Button href="/contact" variant="secondary">
              Book Me
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
