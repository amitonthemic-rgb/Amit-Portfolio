import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";

export function EventTypes() {
  return (
    <section className="section-pad border-b border-line" id="events">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Events"
            title="Where the stage work happens"
            description="Event categories the host is positioned to take on. Descriptions stay factual — no fabricated past-event counts."
          />
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {site.eventCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 0.04}
              className="bg-paper p-6 md:p-8"
            >
              <h3 className="display text-2xl md:text-3xl">{category.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {category.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
