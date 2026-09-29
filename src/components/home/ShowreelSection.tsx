import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { site } from "@/content/site";

export function ShowreelSection() {
  return (
    <section className="section-pad bg-cinema text-cinema-ink" id="showreel">
      <Container>
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Showreel"
            title="SHOWREEL"
            description="Selected hosting footage of Amit Yadav on live stages. Playback starts only when you press play — no autoplay audio."
          />
        </Reveal>
        <Reveal className="mt-10" delay={0.06}>
          <VideoPlayer
            playerId={site.showreel.id}
            title={site.showreel.title}
            sourceUrl={site.showreel.sourceUrl}
            posterSrc={site.showreel.posterSrc}
            meta={[site.showreel.city, site.showreel.language]
              .filter(Boolean)
              .join(" · ")}
            tone="dark"
          />
        </Reveal>
        <Reveal className="mt-8" delay={0.1}>
          <Button href="/showreel" variant="cinemaOutline">
            View video gallery
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
