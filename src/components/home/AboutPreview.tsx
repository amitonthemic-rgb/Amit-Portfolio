import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="section-pad border-b border-line" id="about">
      <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)] border border-line">
            <Image
              src={site.identity.aboutImageSrc}
              alt={`${site.identity.fullName} — stage host with microphone`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <SectionHeader
            eyebrow="About"
            title={`Meet ${site.identity.fullName}`}
            description={site.identity.biography}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.identity.styleNotes.map((note) => (
              <li
                key={note}
                className="border-l-2 border-bronze pl-4 text-sm text-ink-soft"
              >
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Full biography
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
