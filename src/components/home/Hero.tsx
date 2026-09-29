"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();
  const titles = site.identity.titles.join(" · ");

  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="grid items-center gap-10 py-12 md:grid-cols-12 md:gap-10 md:py-16 lg:gap-14 lg:py-20">
        <motion.div
          className="md:col-span-6 lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">English & Hindi · {site.identity.location}</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]">
            {site.identity.fullName}
          </h1>
          <p className="mt-4 text-lg text-ink-soft md:text-xl">{titles}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {site.identity.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/showreel" size="lg">
              Watch Showreel
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-6 lg:col-span-7"
          initial={reduce ? false : { opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[var(--radius-md)] border border-line shadow-[var(--shadow-soft)] md:ml-auto md:mr-0 md:max-w-[520px] lg:max-w-[560px]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={site.identity.heroImageSrc}
                alt={`${site.identity.fullName} on the mic — stage host and presenter`}
                fill
                priority
                quality={92}
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
