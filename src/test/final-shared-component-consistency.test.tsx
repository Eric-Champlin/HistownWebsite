import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Import all pages that use shared components
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DanceClasses from '../pages/DanceClasses';
import MusicClasses from '../pages/MusicClasses';
import FeaturedClasses from '../pages/FeaturedClasses';
import FreeTrial from '../pages/FreeTrial';
import DressCode from '../pages/DressCode';
import StudioRental from '../pages/StudioRental';
import Tuition from '../pages/Tuition';
import Store from '../pages/Store';
import More from '../pages/More';
import Programs from '../pages/Programs';
import OurStory from '../pages/OurStory';
import OurTeam from '../pages/OurTeam';
import PastEvents from '../pages/PastEvents';

/**
 * Final Shared Component Consistency Verification
 * 
 * This test suite performs a comprehensive verification of shared component consistency
 * across all pages at mobile viewport (390px). It checks:
 * 1. Testimonials component styling consistency
 * 2. WhyUs component styling consistency
 * 3. NextSteps component styling consistency
 * 4. Footer component styling consistency
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.5
 */

// Helper to set viewport width
const setViewportWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

// Helper to extract computed styles for comparison
const getComponentStyles = (element: HTMLElement) => {
  const styles = window.getComputedStyle(element);
  return {
    padding: styles.padding,
    paddingTop: styles.paddingTop,
    paddingBottom: styles.paddingBottom,
    paddingLeft: styles.paddingLeft,
    paddingRight: styles.paddingRight,
    margin: styles.margin,
    marginTop: styles.marginTop,
    marginBottom: styles.marginBottom,
    fontSize: styles.fontSize,
    fontFamily: styles.fontFamily,
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    display: styles.display,
    flexDirection: styles.flexDirection,
    gap: styles.gap,
    width: styles.width,
  };
};

// All pages that use shared components
const pagesWithSharedComponents = [
  { name: 'Homepage', component: App },
  { name: 'About', component: About },
  { name: 'Contact', component: Contact },
  { name: 'DanceClasses', component: DanceClasses },
  { name: 'MusicClasses', component: MusicClasses },
  { name: 'FeaturedClasses', component: FeaturedClasses },
  { name: 'FreeTrial', component: FreeTrial },
  { name: 'DressCode', component: DressCode },
  { name: 'StudioRental', component: StudioRental },
  { name: 'Tuition', component: Tuition },
  { name: 'Store', component: Store },
  { name: 'More', component: More },
  { name: 'Programs', component: Programs },
  { name: 'OurStory', component: OurStory },
  { name: 'OurTeam', component: OurTeam },
  { name: 'PastEvents', component: PastEvents },
];

describe('Final Shared Component Consistency Verification', () => {
  describe('Testimonials Component Consistency', () => {
    it('should render Testimonials with identical styling across all pages at 390px', () => {
      setViewportWidth(390);

      const testimonialsStyles: Array<{ page: string; styles: ReturnType<typeof getComponentStyles> }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const testimonialsSection = container.querySelector('[data-component="Testimonials"]');
        
        if (testimonialsSection) {
          const styles = getComponentStyles(testimonialsSection as HTMLElement);
          testimonialsStyles.push({ page: name, styles });
        }
      });

      // Verify we found Testimonials on multiple pages
      expect(testimonialsStyles.length).toBeGreaterThan(1);

      // Compare all pages against the first page (baseline)
      const baseline = testimonialsStyles[0];
      
      testimonialsStyles.slice(1).forEach(({ page, styles }) => {
        // Compare critical styling properties
        expect(styles.padding, `${page} padding should match ${baseline.page}`).toBe(baseline.styles.padding);
        expect(styles.paddingTop, `${page} paddingTop should match ${baseline.page}`).toBe(baseline.styles.paddingTop);
        expect(styles.paddingBottom, `${page} paddingBottom should match ${baseline.page}`).toBe(baseline.styles.paddingBottom);
        expect(styles.backgroundColor, `${page} backgroundColor should match ${baseline.page}`).toBe(baseline.styles.backgroundColor);
      });
    });

    it('should render Testimonials carousel with identical structure across all pages', () => {
      setViewportWidth(390);

      const carouselStructures: Array<{ page: string; hasNavigation: boolean; hasCards: boolean }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const testimonialsSection = container.querySelector('[data-component="Testimonials"]');
        
        if (testimonialsSection) {
          const prevButton = testimonialsSection.querySelector('button[aria-label*="Previous"]');
          const nextButton = testimonialsSection.querySelector('button[aria-label*="Next"]');
          const cards = testimonialsSection.querySelectorAll('[class*="testimonial"]');
          
          carouselStructures.push({
            page: name,
            hasNavigation: !!(prevButton && nextButton),
            hasCards: cards.length > 0,
          });
        }
      });

      // Verify consistent structure
      const baseline = carouselStructures[0];
      carouselStructures.slice(1).forEach(({ page, hasNavigation, hasCards }) => {
        expect(hasNavigation, `${page} should have navigation buttons like ${baseline.page}`).toBe(baseline.hasNavigation);
        expect(hasCards, `${page} should have testimonial cards like ${baseline.page}`).toBe(baseline.hasCards);
      });
    });
  });

  describe('WhyUs Component Consistency', () => {
    it('should render WhyUs with identical styling across all pages at 390px', () => {
      setViewportWidth(390);

      const whyUsStyles: Array<{ page: string; styles: ReturnType<typeof getComponentStyles> }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const whyUsSection = container.querySelector('[data-component="WhyUs"]');
        
        if (whyUsSection) {
          const styles = getComponentStyles(whyUsSection as HTMLElement);
          whyUsStyles.push({ page: name, styles });
        }
      });

      // Verify we found WhyUs on multiple pages
      expect(whyUsStyles.length).toBeGreaterThan(1);

      // Compare all pages against the first page (baseline)
      const baseline = whyUsStyles[0];
      
      whyUsStyles.slice(1).forEach(({ page, styles }) => {
        expect(styles.padding, `${page} padding should match ${baseline.page}`).toBe(baseline.styles.padding);
        expect(styles.paddingTop, `${page} paddingTop should match ${baseline.page}`).toBe(baseline.styles.paddingTop);
        expect(styles.paddingBottom, `${page} paddingBottom should match ${baseline.page}`).toBe(baseline.styles.paddingBottom);
        expect(styles.backgroundColor, `${page} backgroundColor should match ${baseline.page}`).toBe(baseline.styles.backgroundColor);
      });
    });

    it('should render WhyUs value cards with identical structure across all pages', () => {
      setViewportWidth(390);

      const valueCardStructures: Array<{ page: string; cardCount: number; hasIcons: boolean }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const whyUsSection = container.querySelector('[data-component="WhyUs"]');
        
        if (whyUsSection) {
          const cards = whyUsSection.querySelectorAll('[class*="value-card"], .space-y-6 > div, .space-y-8 > div');
          const icons = whyUsSection.querySelectorAll('svg, [class*="icon"]');
          
          valueCardStructures.push({
            page: name,
            cardCount: cards.length,
            hasIcons: icons.length > 0,
          });
        }
      });

      // Verify consistent structure
      const baseline = valueCardStructures[0];
      valueCardStructures.slice(1).forEach(({ page, cardCount, hasIcons }) => {
        expect(cardCount, `${page} should have same number of value cards as ${baseline.page}`).toBe(baseline.cardCount);
        expect(hasIcons, `${page} should have icons like ${baseline.page}`).toBe(baseline.hasIcons);
      });
    });
  });

  describe('NextSteps Component Consistency', () => {
    it('should render NextSteps with identical styling across all pages at 390px', () => {
      setViewportWidth(390);

      const nextStepsStyles: Array<{ page: string; styles: ReturnType<typeof getComponentStyles> }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const nextStepsSection = container.querySelector('[data-component="NextSteps"]');
        
        if (nextStepsSection) {
          const styles = getComponentStyles(nextStepsSection as HTMLElement);
          nextStepsStyles.push({ page: name, styles });
        }
      });

      // Verify we found NextSteps on multiple pages
      expect(nextStepsStyles.length).toBeGreaterThan(1);

      // Compare all pages against the first page (baseline)
      const baseline = nextStepsStyles[0];
      
      nextStepsStyles.slice(1).forEach(({ page, styles }) => {
        expect(styles.padding, `${page} padding should match ${baseline.page}`).toBe(baseline.styles.padding);
        expect(styles.paddingTop, `${page} paddingTop should match ${baseline.page}`).toBe(baseline.styles.paddingTop);
        expect(styles.paddingBottom, `${page} paddingBottom should match ${baseline.page}`).toBe(baseline.styles.paddingBottom);
        expect(styles.backgroundColor, `${page} backgroundColor should match ${baseline.page}`).toBe(baseline.styles.backgroundColor);
      });
    });

    it('should render NextSteps CTA buttons with identical structure across all pages', () => {
      setViewportWidth(390);

      const ctaStructures: Array<{ page: string; hasButtons: boolean; hasForm: boolean }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const nextStepsSection = container.querySelector('[data-component="NextSteps"]');
        
        if (nextStepsSection) {
          const buttons = nextStepsSection.querySelectorAll('a[href], button');
          const form = nextStepsSection.querySelector('form, input[type="email"]');
          
          ctaStructures.push({
            page: name,
            hasButtons: buttons.length > 0,
            hasForm: !!form,
          });
        }
      });

      // Verify consistent structure
      const baseline = ctaStructures[0];
      ctaStructures.slice(1).forEach(({ page, hasButtons, hasForm }) => {
        expect(hasButtons, `${page} should have CTA buttons like ${baseline.page}`).toBe(baseline.hasButtons);
        expect(hasForm, `${page} should have email form like ${baseline.page}`).toBe(baseline.hasForm);
      });
    });
  });

  describe('Footer Component Consistency', () => {
    it('should render Footer with identical styling across all pages at 390px', () => {
      setViewportWidth(390);

      const footerStyles: Array<{ page: string; styles: ReturnType<typeof getComponentStyles> }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const footer = container.querySelector('footer');
        
        if (footer) {
          const styles = getComponentStyles(footer);
          footerStyles.push({ page: name, styles });
        }
      });

      // Verify we found Footer on all pages
      expect(footerStyles.length).toBe(pagesWithSharedComponents.length);

      // Compare all pages against the first page (baseline)
      const baseline = footerStyles[0];
      
      footerStyles.slice(1).forEach(({ page, styles }) => {
        expect(styles.padding, `${page} footer padding should match ${baseline.page}`).toBe(baseline.styles.padding);
        expect(styles.paddingTop, `${page} footer paddingTop should match ${baseline.page}`).toBe(baseline.styles.paddingTop);
        expect(styles.paddingBottom, `${page} footer paddingBottom should match ${baseline.page}`).toBe(baseline.styles.paddingBottom);
        expect(styles.backgroundColor, `${page} footer backgroundColor should match ${baseline.page}`).toBe(baseline.styles.backgroundColor);
      });
    });

    it('should render Footer with identical structure across all pages', () => {
      setViewportWidth(390);

      const footerStructures: Array<{ page: string; hasLogo: boolean; hasLinks: boolean; hasSocial: boolean }> = [];

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const footer = container.querySelector('footer');
        
        if (footer) {
          const logo = footer.querySelector('img[alt*="HisTown"], [class*="logo"]');
          const links = footer.querySelectorAll('a');
          const socialIcons = footer.querySelectorAll('svg, [class*="social"]');
          
          footerStructures.push({
            page: name,
            hasLogo: !!logo,
            hasLinks: links.length > 0,
            hasSocial: socialIcons.length > 0,
          });
        }
      });

      // Verify consistent structure
      const baseline = footerStructures[0];
      footerStructures.slice(1).forEach(({ page, hasLogo, hasLinks, hasSocial }) => {
        expect(hasLogo, `${page} footer should have logo like ${baseline.page}`).toBe(baseline.hasLogo);
        expect(hasLinks, `${page} footer should have links like ${baseline.page}`).toBe(baseline.hasLinks);
        expect(hasSocial, `${page} footer should have social icons like ${baseline.page}`).toBe(baseline.hasSocial);
      });
    });
  });

  describe('Cross-Page Visual Consistency Summary', () => {
    it('should have all shared components present on all appropriate pages', () => {
      setViewportWidth(390);

      const componentPresence: Record<string, { testimonials: boolean; whyUs: boolean; nextSteps: boolean; footer: boolean }> = {};

      pagesWithSharedComponents.forEach(({ name, component: PageComponent }) => {
        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        componentPresence[name] = {
          testimonials: !!container.querySelector('[data-component="Testimonials"]'),
          whyUs: !!container.querySelector('[data-component="WhyUs"]'),
          nextSteps: !!container.querySelector('[data-component="NextSteps"]'),
          footer: !!container.querySelector('footer'),
        };
      });

      // All pages should have Footer
      Object.entries(componentPresence).forEach(([page, components]) => {
        expect(components.footer, `${page} should have Footer component`).toBe(true);
      });

      // Most pages should have the three main shared components
      const pagesWithAllThree = Object.entries(componentPresence).filter(
        ([_, components]) => components.testimonials && components.whyUs && components.nextSteps
      );

      expect(pagesWithAllThree.length, 'Most pages should have Testimonials, WhyUs, and NextSteps').toBeGreaterThan(10);
    });
  });
});
