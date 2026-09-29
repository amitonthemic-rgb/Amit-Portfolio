import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.identity.fullName}'s professional website and booking enquiries.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-3 text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">
          Last updated: {new Date().toISOString().slice(0, 10)}. This page describes the
          data practices of this website as implemented. Have it reviewed before relying on
          it for legal compliance.
        </p>

        <div className="mt-10 space-y-8 text-ink-soft">
          <section>
            <h2 className="display text-3xl text-ink">Who this site is for</h2>
            <p className="mt-3">
              This website presents the professional services of {site.identity.fullName}, a
              stage host, anchor and presenter. It is intended for event organisers and
              related professional contacts.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Information collected via the booking form</h2>
            <p className="mt-3">
              When you submit a booking enquiry, the form collects only the fields you enter:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Company / organisation (optional)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Event type</li>
              <li>Event date (optional)</li>
              <li>Event location (optional)</li>
              <li>Expected audience (optional)</li>
              <li>Hosting language preference</li>
              <li>Message</li>
            </ul>
            <p className="mt-3">
              This information is used solely to respond to your enquiry and discuss potential
              hosting services. It is not sold.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">How enquiries are delivered</h2>
            <p className="mt-3">
              If transactional email is configured (Resend or an equivalent provider), your
              enquiry is emailed to the host’s booking inbox. If email is not configured, the
              submission may be logged server-side for development only and will not be treated
              as delivered correspondence.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Direct contact channels</h2>
            <p className="mt-3">
              If you contact the host by email, phone or WhatsApp using links on this site,
              that communication is handled by those respective providers under their own
              terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Cookies and analytics</h2>
            <p className="mt-3">
              This site does not currently set marketing cookies or third-party analytics
              pixels. If analytics are added later, this policy will be updated to describe
              them accurately.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Hosting</h2>
            <p className="mt-3">
              The website may be hosted on Vercel or a comparable hosting provider. Technical
              logs (such as IP addresses and request metadata) may be processed by the host
              according to their infrastructure practices.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Retention</h2>
            <p className="mt-3">
              Booking enquiries are retained only as long as needed to respond and manage the
              related professional conversation, unless a longer period is required for legal
              or accounting reasons.
            </p>
          </section>

          <section>
            <h2 className="display text-3xl text-ink">Your requests</h2>
            <p className="mt-3">
              To ask about the personal data you submitted through this site, email{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Replace this
              address with a verified inbox before launch.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
