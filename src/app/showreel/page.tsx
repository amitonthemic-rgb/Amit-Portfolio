import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoCard } from "@/components/media/VideoCard";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Showreel",
  description: `Watch ${site.identity.fullName}'s stage hosting showreel and live event footage.`,
  alternates: { canonical: "/showreel" },
};

export default function ShowreelPage() {
  return (
    <>
      <section className="section-pad bg-cinema text-cinema-ink">
        <Container>
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="Showreel"
              title="SHOWREEL"
              description="Primary hosting reel. Playback starts only after you press play."
            />
          </Reveal>
          <Reveal className="mt-10" delay={0.05}>
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
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="More footage"
              title="On stage cuts"
              description="Additional hosting clips from Amit Yadav’s live stage work."
            />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {site.videos.map((video, index) => (
              <Reveal key={video.id} delay={index * 0.04}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
