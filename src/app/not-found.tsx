import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section-pad">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-3 text-5xl md:text-6xl">Page not found</h1>
        <p className="mt-4 text-ink-soft">
          That address is not part of this site. Return home or open the booking page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Home</Button>
          <Button href="/contact" variant="secondary">
            Book Me
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted">
          Or browse{" "}
          <Link href="/showreel" className="text-ink underline">
            Showreel
          </Link>{" "}
          and{" "}
          <Link href="/gallery" className="text-ink underline">
            Gallery
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
