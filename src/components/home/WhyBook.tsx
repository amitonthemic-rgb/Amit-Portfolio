import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";

export function WhyBook() {
  return (
    <section className="section-pad border-b border-line bg-paper-deep">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why book"
            title="What organisers can expect on the day"
            description="Capabilities — not ratings, not invented scores."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {site.capabilities.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <article className="h-full border-t border-bronze/40 pt-5">
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
