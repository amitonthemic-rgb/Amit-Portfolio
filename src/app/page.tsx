import { AboutPreview } from "@/components/home/AboutPreview";
import { BookingCta } from "@/components/home/BookingCta";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { EventTypes } from "@/components/home/EventTypes";
import { Experience } from "@/components/home/Experience";
import { FeaturedVideos } from "@/components/home/FeaturedVideos";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { ShowreelSection } from "@/components/home/ShowreelSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyBook } from "@/components/home/WhyBook";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <CredibilityStrip />
      <AboutPreview />
      <ShowreelSection />
      <FeaturedVideos />
      <EventTypes />
      <WhyBook />
      <Experience />
      <Testimonials />
      <GalleryPreview />
      <BookingCta />
    </>
  );
}
