export type ContentStatus = "real" | "inferred" | "missing" | "placeholder";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "instagram" | "youtube" | "linkedin" | "facebook" | "whatsapp";
  label: string;
  href: string;
  status: ContentStatus;
};

export type EventCategory = {
  id: string;
  title: string;
  description: string;
  status: ContentStatus;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
};

export type VideoItem = {
  id: string;
  title: string;
  category?: string;
  city?: string;
  year?: string;
  language?: string;
  /** Local path (/videos/...) or YouTube / Vimeo URL */
  sourceUrl?: string;
  posterSrc?: string;
  status: ContentStatus;
};

export type GalleryImage = {
  id: string;
  alt: string;
  src?: string;
  size: "hero" | "medium" | "small" | "full";
  status: ContentStatus;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  designation?: string;
  organization?: string;
  photoSrc?: string;
  status: ContentStatus;
};

export type Milestone = {
  id: string;
  year?: string;
  title: string;
  detail: string;
  status: ContentStatus;
};

export type SiteContent = {
  identity: {
    fullName: string;
    fullNameStatus: ContentStatus;
    shortName: string;
    titles: string[];
    languages: string[];
    location: string;
    locationStatus: ContentStatus;
    tagline: string;
    taglineStatus: ContentStatus;
    biography: string;
    biographyStatus: ContentStatus;
    styleNotes: string[];
    logoSrc: string;
    heroImageSrc: string;
    aboutImageSrc: string;
  };
  contact: {
    email: string;
    emailStatus: ContentStatus;
    phoneDisplay: string;
    phoneTel: string;
    phoneStatus: ContentStatus;
    whatsappE164: string;
    whatsappStatus: ContentStatus;
  };
  social: SocialLink[];
  navigation: NavItem[];
  eventCategories: EventCategory[];
  capabilities: Capability[];
  showreel: VideoItem;
  videos: VideoItem[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  milestones: Milestone[];
  seo: {
    siteUrl: string;
    titleDefault: string;
    descriptionDefault: string;
  };
};
