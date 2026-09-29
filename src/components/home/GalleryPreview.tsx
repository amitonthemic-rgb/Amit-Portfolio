import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { site } from "@/content/site";

export function GalleryPreview() {
  return (
    <section className="section-pad border-b border-line" id="gallery">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Gallery"
            title="On stage and in the moment"
            description="Photographs from live hosting. Click any image to open the full view."
          />
        </Reveal>
        <Reveal className="mt-10" delay={0.05}>
          <GalleryGrid images={site.gallery} />
        </Reveal>
        <Reveal className="mt-8">
          <Button href="/gallery" variant="secondary">
            Open gallery
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
