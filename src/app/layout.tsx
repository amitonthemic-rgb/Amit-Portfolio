import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.titleDefault,
    template: `%s · ${site.identity.fullName}`,
  },
  description: site.seo.descriptionDefault,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.seo.siteUrl,
    siteName: site.identity.fullName,
    title: site.seo.titleDefault,
    description: site.seo.descriptionDefault,
    images: [
      {
        url: site.identity.logoSrc,
        alt: `${site.identity.fullName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.titleDefault,
    description: site.seo.descriptionDefault,
    images: [site.identity.logoSrc],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
