# Design Document — HisTown 3.0 Homepage

## Overview

The HisTown 3.0 homepage creates a warm, faith-centered experience that guides visitors through the studio's mission, programs, and community. Drawing structural inspiration from Roots Academy (https://www.rootsacademy.com) for layout flow only —not for styling or content—it emphasizes clarity, accessibility, and subtle motion that reflects the creative nature of dance and music.

## Architecture

### Component Hierarchy
```
Home.tsx
├── Navigation/
│   ├── NavBar.tsx
│   └── MobileMenu.tsx
├── HeroBanner.tsx
├── ProgramQuickLinks.tsx
├── ReviewsSection.tsx
├── WhyUsSection.tsx
├── MeetOurTeamSection.tsx
├── FreeTrialCTA.tsx
├── SocialFollowStrip.tsx
├── ContactInfoSection.tsx
└── Footer.tsx
```

### Content Management Architecture
```
src/content/
└── home.ts
    ├── navigation: NavigationContent
    ├── hero: HeroContent
    ├── programQuickLinks: ProgramQuickLink[]
    ├── reviews: ReviewContent[]
    ├── whyUs: WhyUsPoint[]
    ├── team: TeamMember[]
    ├── freeTrial: FreeTrialContent
    ├── social: SocialLink[]
    ├── contact: ContactContent
    └── footer: FooterContent
```

## Components and Interfaces

```typescript
// src/types/content.ts
export interface NavigationContent {
  logo: { src: string; alt: string };
  menuItems: { label: string; href: string }[];
  externalLogin: { label: string; url: string };
  freeTrialHref: string;
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
```

## Navigation Component Design (V1)

**Desktop**
- Solid background (no transparency V1)
- Logo left · menu center · "Free Trial" and "Student Portal" right
- Hover/focus states + visible focus rings

**Mobile**
- Hamburger drawer with large touch targets
- Includes all links + Free Trial + Student Portal
- Focus trap · ESC to close · closes on navigation

## Layout Pattern

Each section:
1. Container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
2. Header (title + subtitle)
3. Responsive grid (1→2→3 cols)
4. CTA where relevant

## Example Content Structure

```typescript
// src/content/home.ts
export const homeContent = {
  navigation: {
    logo: { src: '/assets/histown-logo.svg', alt: 'HisTown Dance Studio' },
    menuItems: [
      { label: 'Programs', href: '#programs' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' }
    ],
    externalLogin: { label: 'Student Portal', url: 'https://portal.histown.com' },
    freeTrialHref: '/free-trial'
  },
  
  hero: {
    headline: 'Where Faith Meets Movement',
    subheadline: 'Inspiring creativity and building community through Christian-centered dance and music programs for all ages.',
    backgroundImage: '/assets/hero-dance-class.jpg',
    primaryCta: { label: 'Free Trial', href: '/free-trial' },
    secondaryCta: { label: 'View Programs', href: '#programs' }
  },
  
  programQuickLinks: [
    { id: 'dance', title: 'Dance Lessons', href: '/programs/dance' },
    { id: 'music', title: 'Music Lessons', href: '/programs/music' },
    { id: 'adult', title: 'Adult Dance Classes', href: '/programs/adult' },
    { id: 'acting', title: 'Acting Classes', href: '/programs/acting' },
    { id: 'competition', title: 'Competition Program', href: '/programs/competition' }
  ],
  
  reviews: [
    { quote: 'Our kids love it here!', author: 'Parent, Brentwood' },
    { quote: 'Faith & excellence in every class.', author: 'Student, Age 14' }
  ],
  
  whyUs: [
    { title: 'Faith-Centered', description: 'Christ-honoring environment in every class.' },
    { title: 'Community', description: 'Families grow together through the arts.' },
    { title: 'Instructors', description: 'Experienced, caring teachers and mentors.' },
    { title: 'Excellence', description: 'Technique, creativity, and character.' },
    { title: 'Safety', description: 'Age-appropriate music, choreography, and attire.' }
  ],
  
  team: [{ name: 'Jane Doe', role: 'Artistic Director', photo: '/assets/team/jane.jpg' }],
  
  freeTrial: { 
    heading: 'Try a Class Free', 
    subheading: 'Come experience HisTown in person.', 
    cta: { label: 'Start Free Trial', href: '/free-trial' } 
  },
  
  social: [
    { platform: 'instagram', url: 'https://instagram.com/histown' },
    { platform: 'facebook', url: 'https://facebook.com/histown' }
  ],
  
  contact: { 
    address: '123 Studio Way, Your City, ST', 
    phone: '(615) 555-0123', 
    email: 'hello@histown.com' 
  },
  
  footer: { 
    copyright: `© ${new Date().getFullYear()} HisTown. All rights reserved.`, 
    links: [{ label: 'Privacy Policy', href: '/privacy' }] 
  }
} as const;

// TODO: Future CMS Integration
// This content structure is designed to be easily migrated to a headless CMS
// Consider Strapi, Contentful, or Sanity for dynamic content management
```

## Animation Config

```typescript
// src/utils/animations.ts
export const animationConfig = {
  viewport: { threshold: 0.1, rootMargin: '-50px 0px' },
  transitions: {
    fadeIn: 'transition-opacity duration-500 ease-out',
    slideUp: 'transition-transform duration-500 ease-out',
    slideInLeft: 'transition-transform duration-500 ease-out'
  },
  respectsReducedMotion: true
};
```

## Error Handling

### Content Loading
- Graceful fallbacks for missing images (placeholder with HisTown branding)
- Default text content if external content fails to load
- Error boundaries around each major section to prevent full page crashes

### Navigation Errors
- Broken internal links default to smooth scroll to top
- External login link includes error handling for unavailable service
- Mobile menu closes automatically on navigation errors

### Performance Errors
- Image lazy loading with intersection observer fallback
- Progressive enhancement for JavaScript-dependent features
- Accessible alternatives for all interactive elements

## Testing Strategy

### Component Testing
```typescript
// Example test structure
describe('Navigation Component', () => {
  it('renders all menu items from content', () => {});
  it('handles mobile menu toggle', () => {});
  it('supports keyboard navigation', () => {});
  it('displays external login link', () => {});
});

describe('Hero Section', () => {
  it('renders content from home.ts', () => {});
  it('handles missing background image gracefully', () => {});
  it('provides accessible CTA buttons', () => {});
});
```

### Accessibility Testing
- Automated tests for ARIA labels and roles
- Keyboard navigation flow verification
- Color contrast validation
- Screen reader announcement testing

### Performance Testing
- Lighthouse CI integration for performance monitoring
- Image optimization verification
- Bundle size monitoring
- Core Web Vitals tracking

## Visual System

**Colors (Tailwind extend)**
```javascript
colors: { histown: {
  primary: '#8B5A3C', secondary: '#F4E4BC', accent: '#6B8E23',
  neutral: '#F8F6F0', text: '#2D2D2D'
}}
```

**Typography & Spacing** – 8px grid, `py-16 md:py-24`, consistent scale.
**Animations** – fade/slide 300–500ms ease-out, respect reduced motion.

## Responsive Breakpoints

Base → sm 640 → md 768 → lg 1024 → xl 1280
Nav becomes horizontal at md; program cards adapt to grids.

## Implementation Order (V1)

1. Navigation (NavBar + MobileMenu)
2. HeroBanner
3. ProgramQuickLinks
4. ReviewsSection
5. WhyUsSection
6. MeetOurTeamSection
7. FreeTrialCTA
8. SocialFollowStrip
9. ContactInfoSection
10. Footer

**Process Guardrails:** show plan → wait; show git-style diff before applying; ≤150 changed lines per batch; ask before adding dependencies.