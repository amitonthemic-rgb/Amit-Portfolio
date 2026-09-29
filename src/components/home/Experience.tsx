import { hasMilestones, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  if (!hasMilestones) {
    return null;
  }

  return (
    <section className="section-pad border-b border-line">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="Selected appearances"
            description="Verified milestones from Amit Yadav’s professional record."
          />
        </Reveal>
        <ol className="mt-10 space-y-0 border-l border-line">
          {site.milestones
            .filter((m) => m.status === "real")
            .map((milestone, index) => (
              <Reveal key={milestone.id} delay={index * 0.04}>
                <li className="relative ml-6 border-b border-line py-6 pl-2">
                  <span className="absolute -left-[1.9rem] top-8 h-2.5 w-2.5 rounded-full bg-bronze" />
                  {milestone.year ? (
                    <p className="eyebrow">{milestone.year}</p>
                  ) : null}
                  <h3 className="display mt-2 text-2xl">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{milestone.detail}</p>
                </li>
              </Reveal>
            ))}
        </ol>
      </Container>
    </section>
  );
}
