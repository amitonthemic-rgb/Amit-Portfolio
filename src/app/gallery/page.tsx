import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Stage and event photographs of ${site.identity.fullName}.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h1 className="display mt-3 text-5xl md:text-6xl">On stage</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Live hosting moments from Amit Yadav’s stage work. Click any photograph to view it larger.
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.05}>
          <GalleryGrid images={site.gallery} />
        </Reveal>
      </Container>
    </section>
  );
}
