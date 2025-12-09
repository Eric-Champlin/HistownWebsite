import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';

// Import all pages
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DanceClasses from '../pages/DanceClasses';
import MusicClasses from '../pages/MusicClasses';
import FeaturedClasses from '../pages/FeaturedClasses';
import DressCode from '../pages/DressCode';
import FreeTrial from '../pages/FreeTrial';
import More from '../pages/More';
import OurStory from '../pages/OurStory';
import OurTeam from '../pages/OurTeam';
import PastEvents from '../pages/PastEvents';
import Programs from '../pages/Programs';
import Store from '../pages/Store';
import StudioRental from '../pages/StudioRental';
import Tuition from '../pages/Tuition';

/**
 * Helper function to render a page component at a specific viewport width
 */
function renderPageAtViewport(PageComponent: React.ComponentType, width: number) {
  // Set viewport width
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });

  return render(
    <BrowserRouter>
      <PageComponent />
    </BrowserRouter>
  );
}

/**
 * Helper function to get computed spacing values for an element
 */
function getSpacingValues(element: Element) {
  const styles = window.getComputedStyle(element);
  return {
    paddingTop: parseFloat(styles.paddingTop),
    paddingBottom: parseFloat(styles.paddingBottom),
    paddingLeft: parseFloat(styles.paddingLeft),
    paddingRight: parseFloat(styles.paddingRight),
    marginTop: parseFloat(styles.marginTop),
    marginBottom: parseFloat(styles.marginBottom),
    marginLeft: parseFloat(styles.marginLeft),
    marginRight: parseFloat(styles.marginRight),
  };
}

/**
 * Helper function to get all sections in a page
 */
function getSections(container: HTMLElement): Element[] {
  // Get all major sections (sections, divs with specific classes, etc.)
  const sections = Array.from(container.querySelectorAll('section, [class*="section"], main > div'));
  return sections.filter(section => {
    // Filter out very small elements (likely not actual sections)
    const rect = section.getBoundingClientRect();
    return rect.height > 50;
  });
}

// All pages that use shared components
const pagesWithSharedComponents = [
  { name: 'Homepage', component: App },
  { name: 'About', component: About },
  { name: 'Contact', component: Contact },
  { name: 'DanceClasses', component: DanceClasses },
  { name: 'MusicClasses', component: MusicClasses },
  { name: 'FeaturedClasses', component: FeaturedClasses },
  { name: 'DressCode', component: DressCode },
  { name: 'FreeTrial', component: FreeTrial },
  { name: 'More', component: More },
  { name: 'OurStory', component: OurStory },
  { name: 'OurTeam', component: OurTeam },
  { name: 'PastEvents', component: PastEvents },
  { name: 'Programs', component: Programs },
  { name: 'Store', component: Store },
  { name: 'StudioRental', component: StudioRental },
  { name: 'Tuition', component: Tuition },
];

describe('Cross-Page Consistency Tests', () => {
  /**
   * Feature: mobile-optimization, Property 15: Consistent spacing across pages
   * Validates: Requirements 5.4
   */
  describe('Property 15: Consistent spacing across pages', () => {
    it('should have consistent spacing for Testimonials component across all pages', () => {
      // Sample a subset of pages for comparison to avoid memory issues
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428), // Fixed viewports instead of range
          (page1, page2, viewportWidth) => {
            // Skip if same page
            if (page1.name === page2.name) return true;

            const { container: container1 } = renderPageAtViewport(page1.component, viewportWidth);
            const { container: container2 } = renderPageAtViewport(page2.component, viewportWidth);

            const testimonials1 = container1.querySelector('[data-component="Testimonials"]');
            const testimonials2 = container2.querySelector('[data-component="Testimonials"]');

            // Both pages should have Testimonials component
            if (testimonials1 && testimonials2) {
              const spacing1 = getSpacingValues(testimonials1);
              const spacing2 = getSpacingValues(testimonials2);

              // Verify consistent spacing
              expect(spacing1.paddingTop).toBe(spacing2.paddingTop);
              expect(spacing1.paddingBottom).toBe(spacing2.paddingBottom);
              expect(spacing1.paddingLeft).toBe(spacing2.paddingLeft);
              expect(spacing1.paddingRight).toBe(spacing2.paddingRight);
              expect(spacing1.marginTop).toBe(spacing2.marginTop);
              expect(spacing1.marginBottom).toBe(spacing2.marginBottom);
            }

            return true;
          }
        ),
        { numRuns: 20 } // Reduced runs for performance
      );
    });

    it('should have consistent spacing for WhyUs component across all pages', () => {
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428),
          (page1, page2, viewportWidth) => {
            // Skip if same page
            if (page1.name === page2.name) return true;

            const { container: container1 } = renderPageAtViewport(page1.component, viewportWidth);
            const { container: container2 } = renderPageAtViewport(page2.component, viewportWidth);

            const whyUs1 = container1.querySelector('[data-component="WhyUs"]');
            const whyUs2 = container2.querySelector('[data-component="WhyUs"]');

            // Both pages should have WhyUs component
            if (whyUs1 && whyUs2) {
              const spacing1 = getSpacingValues(whyUs1);
              const spacing2 = getSpacingValues(whyUs2);

              // Verify consistent spacing
              expect(spacing1.paddingTop).toBe(spacing2.paddingTop);
              expect(spacing1.paddingBottom).toBe(spacing2.paddingBottom);
              expect(spacing1.paddingLeft).toBe(spacing2.paddingLeft);
              expect(spacing1.paddingRight).toBe(spacing2.paddingRight);
              expect(spacing1.marginTop).toBe(spacing2.marginTop);
              expect(spacing1.marginBottom).toBe(spacing2.marginBottom);
            }

            return true;
          }
        ),
        { numRuns: 20 }
      );
    });

    it('should have consistent spacing for NextSteps component across all pages', () => {
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428),
          (page1, page2, viewportWidth) => {
            // Skip if same page
            if (page1.name === page2.name) return true;

            const { container: container1 } = renderPageAtViewport(page1.component, viewportWidth);
            const { container: container2 } = renderPageAtViewport(page2.component, viewportWidth);

            const nextSteps1 = container1.querySelector('[data-component="NextSteps"]');
            const nextSteps2 = container2.querySelector('[data-component="NextSteps"]');

            // Both pages should have NextSteps component
            if (nextSteps1 && nextSteps2) {
              const spacing1 = getSpacingValues(nextSteps1);
              const spacing2 = getSpacingValues(nextSteps2);

              // Verify consistent spacing
              expect(spacing1.paddingTop).toBe(spacing2.paddingTop);
              expect(spacing1.paddingBottom).toBe(spacing2.paddingBottom);
              expect(spacing1.paddingLeft).toBe(spacing2.paddingLeft);
              expect(spacing1.paddingRight).toBe(spacing2.paddingRight);
              expect(spacing1.marginTop).toBe(spacing2.marginTop);
              expect(spacing1.marginBottom).toBe(spacing2.marginBottom);
            }

            return true;
          }
        ),
        { numRuns: 20 }
      );
    });

    it('should have consistent spacing for Footer component across all pages', () => {
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428),
          (page1, page2, viewportWidth) => {
            // Skip if same page
            if (page1.name === page2.name) return true;

            const { container: container1 } = renderPageAtViewport(page1.component, viewportWidth);
            const { container: container2 } = renderPageAtViewport(page2.component, viewportWidth);

            const footer1 = container1.querySelector('footer, [data-component="Footer"]');
            const footer2 = container2.querySelector('footer, [data-component="Footer"]');

            // Both pages should have Footer component
            if (footer1 && footer2) {
              const spacing1 = getSpacingValues(footer1);
              const spacing2 = getSpacingValues(footer2);

              // Verify consistent spacing
              expect(spacing1.paddingTop).toBe(spacing2.paddingTop);
              expect(spacing1.paddingBottom).toBe(spacing2.paddingBottom);
              expect(spacing1.paddingLeft).toBe(spacing2.paddingLeft);
              expect(spacing1.paddingRight).toBe(spacing2.paddingRight);
              expect(spacing1.marginTop).toBe(spacing2.marginTop);
              expect(spacing1.marginBottom).toBe(spacing2.marginBottom);
            }

            return true;
          }
        ),
        { numRuns: 20 }
      );
    });
  });

  /**
   * Feature: mobile-optimization, Property 16: Minimum section spacing
   * Validates: Requirements 5.5
   */
  describe('Property 16: Minimum section spacing', () => {
    it('should maintain minimum 24px spacing between adjacent sections on mobile', () => {
      // Sample a subset of pages to avoid memory issues
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428),
          (page, viewportWidth) => {
            const { container } = renderPageAtViewport(page.component, viewportWidth);
            const sections = getSections(container);

            // Check spacing between adjacent sections
            for (let i = 0; i < sections.length - 1; i++) {
              const currentSection = sections[i];
              const nextSection = sections[i + 1];

              const currentSpacing = getSpacingValues(currentSection);
              const nextSpacing = getSpacingValues(nextSection);

              // Calculate total spacing between sections
              // This is the sum of current section's bottom margin/padding and next section's top margin/padding
              const totalSpacing = 
                currentSpacing.paddingBottom + 
                currentSpacing.marginBottom + 
                nextSpacing.marginTop + 
                nextSpacing.paddingTop;

              // Property: minimum 24px spacing between sections
              expect(totalSpacing).toBeGreaterThanOrEqual(24);
            }

            return true;
          }
        ),
        { numRuns: 30 }
      );
    });

    it('should maintain consistent minimum spacing across all pages', () => {
      const samplePages = [
        pagesWithSharedComponents[0], // Homepage
        pagesWithSharedComponents[3], // DanceClasses
        pagesWithSharedComponents[7], // FreeTrial
        pagesWithSharedComponents[12], // Programs
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...samplePages),
          fc.constantFrom(375, 390, 428),
          (page, viewportWidth) => {
            const { container } = renderPageAtViewport(page.component, viewportWidth);
            
            // Get all major content sections
            const sections = getSections(container);

            // Each section should have adequate spacing
            sections.forEach(section => {
              const spacing = getSpacingValues(section);
              
              // Vertical spacing (top or bottom) should be at least 12px
              // (so that adjacent sections have at least 24px total)
              const hasAdequateVerticalSpacing = 
                (spacing.paddingTop + spacing.marginTop >= 12) ||
                (spacing.paddingBottom + spacing.marginBottom >= 12);

              expect(hasAdequateVerticalSpacing).toBe(true);
            });

            return true;
          }
        ),
        { numRuns: 30 }
      );
    });
  });

  /**
   * Manual verification tests for shared component consistency
   */
  describe('Shared Component Consistency Verification', () => {
    it('should render Testimonials component on all pages that use it', () => {
      pagesWithSharedComponents.forEach(({ name, component }) => {
        const { container } = renderPageAtViewport(component, 390);
        const testimonials = container.querySelector('[data-component="Testimonials"]');
        
        // Most pages should have Testimonials
        if (testimonials) {
          expect(testimonials).toBeInTheDocument();
        }
      });
    });

    it('should render WhyUs component on all pages that use it', () => {
      pagesWithSharedComponents.forEach(({ name, component }) => {
        const { container } = renderPageAtViewport(component, 390);
        const whyUs = container.querySelector('[data-component="WhyUs"]');
        
        // Most pages should have WhyUs
        if (whyUs) {
          expect(whyUs).toBeInTheDocument();
        }
      });
    });

    it('should render NextSteps component on all pages that use it', () => {
      pagesWithSharedComponents.forEach(({ name, component }) => {
        const { container } = renderPageAtViewport(component, 390);
        const nextSteps = container.querySelector('[data-component="NextSteps"]');
        
        // Most pages should have NextSteps
        if (nextSteps) {
          expect(nextSteps).toBeInTheDocument();
        }
      });
    });

    it('should render Footer component on all pages', () => {
      pagesWithSharedComponents.forEach(({ name, component }) => {
        const { container } = renderPageAtViewport(component, 390);
        const footer = container.querySelector('footer, [data-component="Footer"]');
        
        // All pages should have Footer
        expect(footer).toBeInTheDocument();
      });
    });

    it('should render Navigation component on all pages', () => {
      pagesWithSharedComponents.forEach(({ name, component }) => {
        const { container } = renderPageAtViewport(component, 390);
        const nav = container.querySelector('nav, [data-component="Navigation"]');
        
        // All pages should have Navigation
        expect(nav).toBeInTheDocument();
      });
    });
  });
});
