"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";
import { ImagePlaceholder } from "./ImagePlaceholder";
import type { GalleryImage } from "@/content/types";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const lightboxImages = useMemo(
    () => images.filter((image) => Boolean(image.src)),
    [images],
  );

  function openAt(id: string) {
    const index = lightboxImages.findIndex((image) => image.id === id);
    if (index >= 0) setActive(index);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {images.map((image) => {
          const span =
            image.size === "hero"
              ? "md:col-span-7 md:row-span-2"
              : image.size === "full"
                ? "md:col-span-12"
                : image.size === "medium"
                  ? "md:col-span-5"
                  : "md:col-span-4";

          return (
            <figure key={image.id} className={cn(span)}>
              {image.src ? (
                <button
                  type="button"
                  onClick={() => openAt(image.id)}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-[var(--radius-md)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
                    image.size === "hero"
                      ? "aspect-[3/4] md:h-full md:min-h-[520px] md:aspect-auto"
                      : "",
                    image.size === "full" ? "aspect-[21/9]" : "",
                    image.size === "medium" ? "aspect-[4/3]" : "",
                    image.size === "small" ? "aspect-square" : "",
                  )}
                  aria-label={`View larger: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
              ) : (
                <ImagePlaceholder
                  label={image.alt}
                  aspect={
                    image.size === "full"
                      ? "wide"
                      : image.size === "small"
                        ? "square"
                        : image.size === "medium"
                          ? "landscape"
                          : "portrait"
                  }
                  className={
                    image.size === "hero"
                      ? "md:min-h-[520px] md:aspect-auto md:h-full"
                      : undefined
                  }
                />
              )}
            </figure>
          );
        })}
      </div>

      {active !== null ? (
        <ImageLightbox
          images={lightboxImages}
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      ) : null}
    </>
  );
}
