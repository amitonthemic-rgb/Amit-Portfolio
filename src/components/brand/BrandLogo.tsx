import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority = false,
  href = "/",
}: {
  className?: string;
  priority?: boolean;
  href?: string | null;
}) {
  const image = (
    <Image
      src={site.identity.logoSrc}
      alt={`${site.identity.fullName} — Stage Host, Anchor, Presenter`}
      width={480}
      height={480}
      priority={priority}
      className={cn("h-auto w-full object-contain", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex no-underline" aria-label={`${site.identity.fullName} home`}>
      {image}
    </Link>
  );
}
