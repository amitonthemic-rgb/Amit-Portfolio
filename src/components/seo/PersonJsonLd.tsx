import { site } from "@/content/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.identity.fullName,
    jobTitle: site.identity.titles.join(", "),
    description: site.seo.descriptionDefault,
    url: site.seo.siteUrl,
    knowsLanguage: site.identity.languages,
    ...(site.contact.emailStatus === "real"
      ? { email: site.contact.email }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
