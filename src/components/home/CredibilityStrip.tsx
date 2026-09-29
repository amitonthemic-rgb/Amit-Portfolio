import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function CredibilityStrip() {
  const items = [
    site.identity.titles.join(" · "),
    `${site.identity.languages.join(" & ")} hosting`,
    site.identity.location,
  ];

  return (
    <section className="border-b border-line bg-paper-deep" aria-label="Professional identity">
      <Container className="grid gap-6 py-8 md:grid-cols-3 md:gap-8 md:py-10">
        {items.map((item) => (
          <p key={item} className="text-sm font-medium tracking-wide text-ink-soft md:text-center">
            {item}
          </p>
        ))}
      </Container>
    </section>
  );
}
