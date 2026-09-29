import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms for using ${site.identity.fullName}'s professional website and booking enquiries.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section-pad">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-3 text-5xl">Terms and Conditions</h1>
        <p className="mt-4 text-sm text-muted">
          Last updated: {new Date().toISOString().slice(0, 10)}. These terms are a practical
          baseline for a personal professional-services website. Have them reviewed by the
          client or a legal professional before relying on them.
        </p>

        <div className="mt-10 space-y-8 text-ink-soft">
          <section>
            <h2 className="display text-3xl text-ink">Website use</h2>
            <p className="mt-3">
              This website provides information about the professional hosting services of{" "}
              {site.identity.fullName}. By using the site you agree not to misuse content,
              attempt unauthorized access to systems, or submit harmful or unlawful material
              through forms or contact channels.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Booking enquiries</h2>
            <p className="mt-3">
              Submitting the booking form is an enquiry, not a confirmed booking. Availability,
              fees, travel, rehearsals and event scope are agreed separately in writing between
              the organiser and the host.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Event services</h2>
            <p className="mt-3">
              Any hosting engagement is governed by the specific agreement made for that event.
              Website copy describing event categories describes the type of work offered; it
              does not guarantee past appearances, awards or outcomes unless separately stated
              with verified details.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Content ownership</h2>
            <p className="mt-3">
              Text, photographs, videos and branding on this site remain the property of the
              host or their respective rights holders. You may not copy or reuse media for
              commercial purposes without permission.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Intellectual property</h2>
            <p className="mt-3">
              The site design, layout and original written content are protected by applicable
              intellectual property laws. Client-supplied assets remain subject to the rights
              granted by those clients.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">External links</h2>
            <p className="mt-3">
              Links to YouTube, Vimeo, WhatsApp, social platforms or other third-party services
              are provided for convenience. Those services are governed by their own terms.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Limitation of responsibility</h2>
            <p className="mt-3">
              While care is taken to keep information accurate, the website may contain
              development placeholders until launch. The host is not responsible for decisions
              made solely on incomplete placeholder content, temporary outages, or third-party
              platform failures outside reasonable control.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
