import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoCard } from "@/components/media/VideoCard";
import { site } from "@/content/site";

export function FeaturedVideos() {
  const featured = site.videos.slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="section-pad border-b border-line">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Featured videos"
            title="Selected stage cuts"
            description="Hosting footage from live programmes. Open any card to play."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featured.map((video, index) => (
            <Reveal key={video.id} delay={index * 0.05}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
