import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { hasTestimonials, site } from "@/content/site";

export function Testimonials() {
  if (!hasTestimonials) {
    // Hidden from marketing surface when empty — optional DEV note kept for build checklist
    return null;
  }

  return (
    <section className="section-pad border-b border-line bg-paper-deep">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="From organisers"
            description="Quotes supplied or approved by the client only."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {site.testimonials
            .filter((t) => t.status === "real")
            .map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <blockquote className="h-full rounded-[var(--radius-lg)] border border-line bg-paper p-6 md:p-8">
                  <p className="display text-2xl leading-snug md:text-3xl">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6 text-sm text-ink-soft">
                    <cite className="not-italic font-medium text-ink">{item.name}</cite>
                    {item.designation || item.organization ? (
                      <span className="mt-1 block">
                        {[item.designation, item.organization].filter(Boolean).join(" · ")}
                      </span>
                    ) : null}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  );
}
