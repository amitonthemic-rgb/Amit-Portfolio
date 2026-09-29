import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { mailHref, telHref, whatsappHref } from "@/content/site";

export function BookingCta() {
  const wa = whatsappHref();
  const tel = telHref();

  return (
    <section className="section-pad bg-cinema text-cinema-ink" id="book">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">Bookings</p>
          <h2 className="display mt-3 text-4xl md:text-5xl lg:text-6xl">
            BOOK THE HOST
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cinema-muted md:text-lg">
            Share your event type, date, city and preferred language (English, Hindi, or both).
            Based in Delhi and available PAN India.
          </p>
        </Reveal>
        <Reveal
          className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end"
          delay={0.06}
        >
          <Button href="/contact" variant="cinema" size="lg" className="font-semibold">
            Send Booking Enquiry
          </Button>
          {wa ? (
            <Button href={wa} variant="cinemaOutline" size="lg" external>
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </Button>
          ) : null}
          {tel ? (
            <Button href={tel} variant="cinemaOutline" size="lg">
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </Button>
          ) : null}
          <Button href={mailHref()} variant="cinemaOutline" size="lg">
            <Mail className="h-4 w-4" aria-hidden />
            Email
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
