import { resolvePublicSiteUrl } from "@/lib/site-url";
import type { SiteContent } from "./types";

/**
 * Verified client content for Amit Yadav.
 * Do not invent awards, metrics, testimonials or unverified clients.
 */
export const site: SiteContent = {
  identity: {
    fullName: "Amit Yadav",
    fullNameStatus: "real",
    shortName: "Amit",
    titles: ["Stage Host", "Anchor", "Presenter"],
    languages: ["English", "Hindi"],
    location: "Delhi · Available PAN India",
    locationStatus: "real",
    tagline:
      "Delhi-based stage host, anchor and presenter — English and Hindi delivery for live stages across India.",
    taglineStatus: "real",
    biography:
      "Amit Yadav is a Delhi-based stage host, anchor and presenter working in English and Hindi. He brings a clear voice, steady stage control and audience energy to live programmes — from outdoor cultural festivals and campus shows to professional stage formats that need a composed host on the mic. Based in Delhi and available for events across India (PAN India), Amit works closely with organisers so cues, transitions and audience moments stay sharp. Find him on Instagram as @amit.onmic.",
    biographyStatus: "real",
    styleNotes: [
      "English and Hindi hosting on the same brief",
      "Comfortable on outdoor festival stages and campus programmes",
      "Mic-first presence with clear audience interaction",
      "Based in Delhi · travels PAN India for bookings",
    ],
    logoSrc: "/logo/amit-on-mic.png",
    heroImageSrc: "/photos/photo-portrait.jpg",
    aboutImageSrc: "/photos/photo-portrait.jpg",
  },
  contact: {
    email: "amit.onthemic@gmail.com",
    emailStatus: "real",
    phoneDisplay: "+91 82922 36990",
    phoneTel: "+918292236990",
    phoneStatus: "real",
    whatsappE164: "918292236990",
    whatsappStatus: "real",
  },
  social: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/amit.onmic/",
      status: "real",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/918292236990",
      status: "real",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Showreel", href: "/showreel" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  eventCategories: [
    {
      id: "campus",
      title: "College & Cultural Festivals",
      description:
        "Campus and cultural festival stages — high-energy hosting with clear crowd direction.",
      status: "real",
    },
    {
      id: "live",
      title: "Live Shows",
      description:
        "Open outdoor and live-stage formats that need presence, timing and bilingual dialogue.",
      status: "real",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description:
        "Annual days, leadership meets and client programmes that need a composed bilingual host.",
      status: "real",
    },
    {
      id: "awards",
      title: "Award Ceremonies",
      description:
        "Timed cue-to-cue hosting for presentations, citations and stage transitions.",
      status: "real",
    },
    {
      id: "weddings",
      title: "Weddings",
      description:
        "Ceremony and reception hosting that keeps families informed without overpowering the couple.",
      status: "real",
    },
    {
      id: "launches",
      title: "Brand & Product Launches",
      description:
        "Launch narratives, reveal moments and audience interaction in English, Hindi, or both.",
      status: "real",
    },
  ],
  capabilities: [
    {
      id: "presence",
      title: "Stage Presence",
      description:
        "Holds attention without crowding the programme — clear voice, paced delivery, controlled energy.",
    },
    {
      id: "audience",
      title: "Audience Interaction",
      description:
        "Reads the room and invites participation when the format calls for it.",
    },
    {
      id: "bilingual",
      title: "Bilingual Hosting",
      description:
        "Switches between English and Hindi to match the audience and the client brief.",
    },
    {
      id: "flow",
      title: "Event Flow",
      description:
        "Protects the run-of-show: cues, transitions, speaker introductions and timing.",
    },
    {
      id: "coordination",
      title: "Professional Coordination",
      description:
        "Works with organisers, AV and stage managers so the host track stays aligned.",
    },
    {
      id: "adaptability",
      title: "Adaptability",
      description:
        "Adjusts tone from formal programmes to high-energy festival stages without losing clarity.",
    },
  ],
  showreel: {
    id: "primary-showreel",
    title: "Amit Yadav — Showreel",
    category: "Showreel",
    city: "Delhi",
    language: "English & Hindi",
    sourceUrl: "/videos/showreel-05.mp4",
    posterSrc: "/photos/photo-02.jpg",
    status: "real",
  },
  videos: [
    {
      id: "v1",
      title: "Stage hosting reel",
      category: "Live stage",
      city: "Delhi NCR",
      language: "Hindi / English",
      sourceUrl: "/videos/showreel-01.mp4",
      posterSrc: "/photos/photo-01.jpg",
      status: "real",
    },
    {
      id: "v2",
      title: "Audience energy on stage",
      category: "Live stage",
      sourceUrl: "/videos/showreel-02.mp4",
      posterSrc: "/photos/photo-03.jpg",
      status: "real",
    },
    {
      id: "v3",
      title: "Mic moments",
      category: "Hosting",
      sourceUrl: "/videos/showreel-03.mp4",
      posterSrc: "/photos/photo-04.jpg",
      status: "real",
    },
    {
      id: "v4",
      title: "Festival stage cut",
      category: "Cultural festival",
      sourceUrl: "/videos/showreel-04.mp4",
      posterSrc: "/photos/photo-06.jpg",
      status: "real",
    },
    {
      id: "v6",
      title: "Live hosting excerpt",
      category: "Live stage",
      sourceUrl: "/videos/showreel-06.mp4",
      posterSrc: "/photos/photo-05.jpg",
      status: "real",
    },
  ],
  gallery: [
    {
      id: "g1",
      alt: "Amit Yadav hosting on an outdoor stage with microphone",
      src: "/photos/photo-01.jpg",
      size: "hero",
      status: "real",
    },
    {
      id: "g2",
      alt: "Amit Yadav on stage at a large outdoor festival with LED screen",
      src: "/photos/photo-02.jpg",
      size: "medium",
      status: "real",
    },
    {
      id: "g3",
      alt: "Amit Yadav engaging the crowd at maJIS-tic festival stage",
      src: "/photos/photo-03.jpg",
      size: "medium",
      status: "real",
    },
    {
      id: "g4",
      alt: "Amit Yadav presenting on stage with script notes and microphone",
      src: "/photos/photo-04.jpg",
      size: "small",
      status: "real",
    },
    {
      id: "g5",
      alt: "Amit Yadav mid-performance on a red-carpet outdoor stage",
      src: "/photos/photo-06.jpg",
      size: "small",
      status: "real",
    },
    {
      id: "g6",
      alt: "Wide view of Amit Yadav hosting a live outdoor programme",
      src: "/photos/photo-05.jpg",
      size: "full",
      status: "real",
    },
    {
      id: "g7",
      alt: "Amit Yadav with microphone — See the magic with mic",
      src: "/photos/photo-portrait.jpg",
      size: "medium",
      status: "real",
    },
  ],
  testimonials: [],
  milestones: [],
  seo: {
    siteUrl: resolvePublicSiteUrl(),
    titleDefault: "Amit Yadav — Stage Host, Anchor & Presenter | Delhi",
    descriptionDefault:
      "Amit Yadav is a Delhi-based bilingual stage host, anchor and presenter working in English and Hindi. Available for events across India.",
  },
};

export const verifiedSocial = site.social.filter((s) => s.status === "real");
export const hasTestimonials = site.testimonials.some((t) => t.status === "real");
export const hasMilestones = site.milestones.some((m) => m.status === "real");
export const hasVideos = site.videos.some((v) => v.status === "real" && v.sourceUrl);
export const hasShowreel =
  site.showreel.status === "real" && Boolean(site.showreel.sourceUrl);

export function whatsappHref(customMessage?: string): string | null {
  if (site.contact.whatsappStatus !== "real" || !site.contact.whatsappE164) {
    return null;
  }
  const number = site.contact.whatsappE164.replace(/\D/g, "");
  const message =
    customMessage ??
    "Hi Amit, I’d like to enquire about booking you as a stage host for my event. Please share your availability and next steps.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telHref(): string | null {
  if (site.contact.phoneStatus !== "real" || !site.contact.phoneTel) {
    return null;
  }
  return `tel:${site.contact.phoneTel}`;
}

export function mailHref(): string {
  return `mailto:${site.contact.email}`;
}
