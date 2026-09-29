function normalizeSiteUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

/** Canonical public origin for metadata, sitemap, and OG. */
export function resolvePublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
    ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
    : null;

  if (fromEnv) return fromEnv;

  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) {
    const fromVercel = normalizeSiteUrl(vercelHost);
    if (fromVercel) return fromVercel;
  }

  return "http://localhost:3000";
}
