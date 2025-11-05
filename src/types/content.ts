// TypeScript interfaces for all content types used in the HisTown homepage

export interface NavigationContent {
  logo: { src: string; alt: string };
  menuItems: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { label: string; href: string }[];
    megaMenu?: {
      columns: {
        title: string;
        items?: { label: string; href: string }[];
        sections?: {
          subtitle: string;
          items: { label: string; href: string }[];
        }[];
      }[];
    };
  }[];
  externalLogin: { label: string; url: string };
  freeTrialHref: string;
  socialLinks: { platform: string; url: string }[];
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  backgroundImage: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface ProgramQuickLink {
  id: string;
  title: string;
  href: string;
  icon?: string;
}

export interface ReviewContent {
  quote: string;
  author: string;
  role?: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

export interface FreeTrialContent {
  heading: string;
  subheading?: string;
  cta: { label: string; href: string };
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactContent {
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
}

export interface FooterContent {
  copyright: string;
  links: { label: string; href: string }[];
}

// Main content structure interface
export interface HomeContent {
  navigation: NavigationContent;
  hero: HeroContent;
  programQuickLinks: ProgramQuickLink[];
  reviews: ReviewContent[];
  whyUs: WhyUsPoint[];
  team: TeamMember[];
  freeTrial: FreeTrialContent;
  social: SocialLink[];
  contact: ContactContent;
  footer: FooterContent;
}