import type { Metadata } from "next";
import { EventTypes } from "@/components/home/EventTypes";
import { WhyBook } from "@/components/home/WhyBook";
import { BookingCta } from "@/components/home/BookingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Event types hosted by ${site.identity.fullName} — corporate, weddings, awards, launches and live shows.`,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-line section-pad">
        <Container>
          <Reveal>
            <p className="eyebrow">Events</p>
            <h1 className="display mt-3 max-w-3xl text-5xl md:text-6xl">
              Hosting for programmes that need clarity on stage
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Categories below describe the kinds of briefs the host is positioned for.
              Specific past-event lists appear only when the client provides verified details.
            </p>
          </Reveal>
        </Container>
      </section>
      <EventTypes />
      <WhyBook />
      <BookingCta />
    </>
  );
}
