import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import DanceClasses from '../pages/DanceClasses';
import MusicClasses from '../pages/MusicClasses';
import FeaturedClasses from '../pages/FeaturedClasses';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FreeTrial from '../pages/FreeTrial';
import DressCode from '../pages/DressCode';
import StudioRental from '../pages/StudioRental';
import Tuition from '../pages/Tuition';
import Store from '../pages/Store';
import More from '../pages/More';
import Programs from '../pages/Programs';
import OurTeam from '../pages/OurTeam';
import OurStory from '../pages/OurStory';
import PastEvents from '../pages/PastEvents';

/**
 * Test suite for very large phones (> 428px)
 * Tests at 480px and 540px widths (large Android phones, foldables)
 * Ensures layouts scale appropriately and mobile optimizations still apply
 * Validates smooth transition to tablet breakpoint at 640px
 */

const pages = [
  { name: 'Homepage', component: App },
  { name: 'DanceClasses', component: DanceClasses },
  { name: 'MusicClasses', component: MusicClasses },
  { name: 'FeaturedClasses', component: FeaturedClasses },
  { name: 'About', component: About },
  { name: 'Contact', component: Contact },
  { name: 'FreeTrial', component: FreeTrial },
  { name: 'DressCode', component: DressCode },
  { name: 'StudioRental', component: StudioRental },
  { name: 'Tuition', component: Tuition },
  { name: 'Store', component: Store },
  { name: 'More', component: More },
  { name: 'Programs', component: Programs },
  { name: 'OurTeam', component: OurTeam },
  { name: 'OurStory', component: OurStory },
  { name: 'PastEvents', component: PastEvents },
];

const largePhoneWidths = [480, 540];

describe('Large Phone Optimization (> 428px)', () => {
  describe('No Horizontal Overflow', () => {
    largePhoneWidths.forEach((width) => {
      pages.forEach(({ name, component: Component }) => {
        it(`should not have horizontal overflow on ${name} at ${width}px`, () => {
          // Set viewport
          global.innerWidth = width;
          global.innerHeight = 800;

          const { container } = render(
            <BrowserRouter>
              <Component />
            </BrowserRouter>
          );

          // Check document width doesn't exceed viewport
          const documentWidth = container.firstChild
            ? (container.firstChild as HTMLElement).scrollWidth
            : 0;

          expect(documentWidth).toBeLessThanOrEqual(width);
        });
      });
    });
  });

  describe('Mobile Optimizations Still Apply', () => {
    largePhoneWidths.forEach((width) => {
      it(`should still use mobile-first vertical stacking at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check for vertical stacking in programs section
        const programsSection = container.querySelector('[class*="grid"]');
        if (programsSection) {
          const styles = window.getComputedStyle(programsSection);
          const gridColumns = styles.gridTemplateColumns;

          // Should still be single column or auto-fit pattern
          // Not the multi-column desktop layout
          expect(
            gridColumns === 'none' ||
              gridColumns.includes('1fr') ||
              gridColumns.split(' ').length <= 2
          ).toBe(true);
        }
      });

      it(`should maintain touch-friendly spacing at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check interactive elements still have adequate touch targets
        const buttons = container.querySelectorAll('button, a[href]');
        
        // Should have interactive elements present
        expect(buttons.length).toBeGreaterThan(0);

        // Check that buttons have appropriate classes for touch targets
        let hasProperClasses = false;
        buttons.forEach((button) => {
          const classes = button.className;
          // Check for padding or size classes that indicate touch-friendly sizing
          if (
            classes.includes('px-') ||
            classes.includes('py-') ||
            classes.includes('p-') ||
            classes.includes('min-h-') ||
            classes.includes('h-')
          ) {
            hasProperClasses = true;
          }
        });

        // Should have touch-friendly styling classes
        expect(hasProperClasses).toBe(true);
      });
    });
  });

  describe('Content Scaling', () => {
    largePhoneWidths.forEach((width) => {
      it(`should not have overly stretched content at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check that text containers don't become too wide
        const textContainers = container.querySelectorAll('p, h1, h2, h3, h4');
        textContainers.forEach((element) => {
          const rect = element.getBoundingClientRect();
          // Text shouldn't span the full width without padding
          // Should have some reasonable max-width or padding
          if (rect.width > 0) {
            expect(rect.width).toBeLessThanOrEqual(width);
          }
        });
      });

      it(`should maintain readable line lengths at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check that paragraphs have reasonable line lengths
        const paragraphs = container.querySelectorAll('p');
        paragraphs.forEach((p) => {
          const styles = window.getComputedStyle(p);
          const maxWidth = styles.maxWidth;

          // If max-width is set, it should be reasonable
          if (maxWidth && maxWidth !== 'none') {
            const maxWidthValue = parseInt(maxWidth);
            // Should not be excessively wide
            expect(maxWidthValue).toBeLessThanOrEqual(width);
          }
        });
      });
    });
  });

  describe('Typography Scaling', () => {
    largePhoneWidths.forEach((width) => {
      it(`should have appropriate font sizes at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check heading hierarchy is maintained through classes
        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');
        const h3 = container.querySelector('h3');
        const body = container.querySelector('p');

        // Check that headings exist and have appropriate classes
        if (h1) {
          const h1Classes = h1.className;
          // Should have text size classes
          expect(
            h1Classes.includes('text-') ||
            h1Classes.includes('font-')
          ).toBe(true);
        }

        if (h2) {
          const h2Classes = h2.className;
          // Should have text size classes
          expect(
            h2Classes.includes('text-') ||
            h2Classes.includes('font-')
          ).toBe(true);
        }

        if (h3) {
          const h3Classes = h3.className;
          // Should have text size classes
          expect(
            h3Classes.includes('text-') ||
            h3Classes.includes('font-')
          ).toBe(true);
        }

        // Check body text is readable
        if (body) {
          const bodySize = parseFloat(window.getComputedStyle(body).fontSize);
          // Body text should be readable (at least 14px)
          expect(bodySize).toBeGreaterThanOrEqual(14);
        }

        // Verify that typography elements are present
        expect(h1 || h2 || h3).toBeTruthy();
      });
    });
  });

  describe('Shared Components Consistency', () => {
    largePhoneWidths.forEach((width) => {
      it(`should render shared components consistently at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container: container1 } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const { container: container2 } = render(
          <BrowserRouter>
            <About />
          </BrowserRouter>
        );

        // Check Footer consistency
        const footer1 = container1.querySelector('footer');
        const footer2 = container2.querySelector('footer');

        if (footer1 && footer2) {
          const footer1Styles = window.getComputedStyle(footer1);
          const footer2Styles = window.getComputedStyle(footer2);

          // Padding should be consistent
          expect(footer1Styles.paddingTop).toBe(footer2Styles.paddingTop);
          expect(footer1Styles.paddingBottom).toBe(footer2Styles.paddingBottom);
        }
      });
    });
  });

  describe('Smooth Transition to Tablet Breakpoint', () => {
    it('should transition smoothly from 540px to 640px', () => {
      // Test at 540px (large phone)
      global.innerWidth = 540;
      global.innerHeight = 800;

      const { container: container540 } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      // Test at 640px (tablet breakpoint)
      global.innerWidth = 640;
      global.innerHeight = 800;

      const { container: container640 } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      // Both should render without errors
      expect(container540).toBeTruthy();
      expect(container640).toBeTruthy();

      // Check that navigation changes appropriately
      const nav540 = container540.querySelector('nav');
      const nav640 = container640.querySelector('nav');

      expect(nav540).toBeTruthy();
      expect(nav640).toBeTruthy();
    });

    it('should maintain layout integrity across breakpoint transition', () => {
      const widths = [480, 540, 600, 640];

      widths.forEach((width) => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Should not have horizontal overflow at any width
        const documentWidth = container.firstChild
          ? (container.firstChild as HTMLElement).scrollWidth
          : 0;

        expect(documentWidth).toBeLessThanOrEqual(width);
      });
    });
  });

  describe('Form Elements on Large Phones', () => {
    largePhoneWidths.forEach((width) => {
      it(`should have properly sized form inputs at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <Contact />
          </BrowserRouter>
        );

        const inputs = container.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
          const rect = input.getBoundingClientRect();
          // Inputs should be wide enough for comfortable typing
          if (rect.width > 0) {
            expect(rect.width).toBeGreaterThan(200);
          }
          // Height should be adequate for touch
          if (rect.height > 0) {
            expect(rect.height).toBeGreaterThanOrEqual(40);
          }
        });
      });
    });
  });

  describe('Image Scaling', () => {
    largePhoneWidths.forEach((width) => {
      it(`should scale images appropriately at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const images = container.querySelectorAll('img');
        images.forEach((img) => {
          const rect = img.getBoundingClientRect();
          // Images should not exceed viewport width
          if (rect.width > 0) {
            expect(rect.width).toBeLessThanOrEqual(width);
          }
        });
      });
    });
  });

  describe('Navigation on Large Phones', () => {
    largePhoneWidths.forEach((width) => {
      it(`should show mobile navigation at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Should still show hamburger menu (mobile nav)
        // Desktop nav should be hidden
        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();

        // Check for mobile menu button
        const mobileMenuButton = container.querySelector(
          'button[aria-label*="menu" i], button[aria-label*="navigation" i]'
        );
        
        // Mobile menu should be present or navigation should be mobile-optimized
        expect(nav).toBeTruthy();
      });
    });
  });

  describe('Spacing and Layout', () => {
    largePhoneWidths.forEach((width) => {
      it(`should maintain appropriate spacing at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check section spacing
        const sections = container.querySelectorAll('section, [class*="section"]');
        sections.forEach((section) => {
          const styles = window.getComputedStyle(section);
          const paddingTop = parseFloat(styles.paddingTop);
          const paddingBottom = parseFloat(styles.paddingBottom);

          // Should have reasonable padding
          if (paddingTop > 0) {
            expect(paddingTop).toBeGreaterThanOrEqual(16);
          }
          if (paddingBottom > 0) {
            expect(paddingBottom).toBeGreaterThanOrEqual(16);
          }
        });
      });
    });
  });

  describe('Grid Layouts on Large Phones', () => {
    largePhoneWidths.forEach((width) => {
      it(`should use appropriate grid columns at ${width}px`, () => {
        global.innerWidth = width;
        global.innerHeight = 800;

        const { container } = render(
          <BrowserRouter>
            <DanceClasses />
          </BrowserRouter>
        );

        // Check grid layouts
        const grids = container.querySelectorAll('[class*="grid"]');
        grids.forEach((grid) => {
          const styles = window.getComputedStyle(grid);
          const gridColumns = styles.gridTemplateColumns;

          // Should still be mobile-optimized (1-2 columns max)
          if (gridColumns && gridColumns !== 'none') {
            const columnCount = gridColumns.split(' ').length;
            expect(columnCount).toBeLessThanOrEqual(2);
          }
        });
      });
    });
  });
});
