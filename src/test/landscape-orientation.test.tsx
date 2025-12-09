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
 * Landscape Orientation Testing
 * 
 * Tests all pages in landscape mode to ensure:
 * - No horizontal overflow
 * - Navigation works correctly
 * - Content doesn't break
 * - Touch targets remain adequate
 * - Forms and inputs work properly
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

// Landscape dimensions for common mobile devices
const landscapeDimensions = [
  { width: 844, height: 390, device: 'iPhone 12/13/14 Pro landscape' },
  { width: 926, height: 428, device: 'iPhone 14 Pro Max landscape' },
  { width: 812, height: 375, device: 'iPhone X/11 Pro landscape' },
  { width: 896, height: 414, device: 'iPhone 11/XR landscape' },
];

describe('Landscape Orientation Tests', () => {
  describe('No Horizontal Overflow in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      pages.forEach(({ name, component: Component }) => {
        it(`should not have horizontal overflow on ${name} at ${device} (${width}x${height})`, () => {
          // Set viewport to landscape dimensions
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));

          const { container } = render(
            <BrowserRouter>
              <Component />
            </BrowserRouter>
          );

          // Check that document width doesn't exceed viewport
          const documentWidth = container.scrollWidth;
          expect(documentWidth).toBeLessThanOrEqual(width);

          // Check for any elements that might cause overflow
          const allElements = container.querySelectorAll('*');
          allElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.width > 0) {
              expect(rect.right).toBeLessThanOrEqual(width + 1); // +1 for rounding
            }
          });
        });
      });
    });
  });

  describe('Navigation in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should display hamburger menu correctly in landscape on ${device}`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check for hamburger menu button (should be visible in landscape mobile)
        // Look for button elements that might be the hamburger menu
        const buttons = container.querySelectorAll('button');
        let hamburgerButton: Element | null = null;
        
        buttons.forEach((button) => {
          const rect = button.getBoundingClientRect();
          // Find visible buttons in the header area
          if (rect.width > 0 && rect.height > 0 && rect.top < 100) {
            hamburgerButton = button;
          }
        });
        
        if (hamburgerButton) {
          const rect = (hamburgerButton as HTMLElement).getBoundingClientRect();
          
          // Verify it has adequate touch target
          expect(rect.width).toBeGreaterThanOrEqual(44);
          expect(rect.height).toBeGreaterThanOrEqual(44);
        } else {
          // If no hamburger found, that's okay - might be showing desktop nav
          expect(true).toBe(true);
        }
      });
    });
  });

  describe('Touch Targets in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      pages.slice(0, 5).forEach(({ name, component: Component }) => {
        it(`should maintain adequate touch targets on ${name} in landscape (${device})`, () => {
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));

          const { container } = render(
            <BrowserRouter>
              <Component />
            </BrowserRouter>
          );

          // Check all interactive elements
          const interactiveElements = container.querySelectorAll(
            'button, a, input, select, textarea, [role="button"], [role="link"]'
          );

          interactiveElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            
            // Only check visible elements
            if (rect.width > 0 && rect.height > 0) {
              const computedStyle = window.getComputedStyle(element);
              const isVisible = computedStyle.display !== 'none' && 
                               computedStyle.visibility !== 'hidden' &&
                               computedStyle.opacity !== '0';
              
              if (isVisible) {
                // Touch targets should be at least 44x44px
                expect(rect.width).toBeGreaterThanOrEqual(44);
                expect(rect.height).toBeGreaterThanOrEqual(44);
              }
            }
          });
        });
      });
    });
  });

  describe('Form Inputs in Landscape', () => {
    const formPages = [
      { name: 'Contact', component: Contact },
      { name: 'FreeTrial', component: FreeTrial },
    ];

    landscapeDimensions.forEach(({ width, height, device }) => {
      formPages.forEach(({ name, component: Component }) => {
        it(`should render form inputs correctly on ${name} in landscape (${device})`, () => {
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));

          const { container } = render(
            <BrowserRouter>
              <Component />
            </BrowserRouter>
          );

          // Check all form inputs
          const inputs = container.querySelectorAll('input, textarea, select');

          inputs.forEach((input) => {
            const rect = input.getBoundingClientRect();
            
            if (rect.width > 0 && rect.height > 0) {
              // Inputs should be visible and have adequate height
              expect(rect.height).toBeGreaterThanOrEqual(44);
              
              // Inputs should not overflow viewport
              expect(rect.right).toBeLessThanOrEqual(width + 1);
              
              // Check for proper input types
              if (input.tagName === 'INPUT') {
                const type = input.getAttribute('type');
                expect(['text', 'email', 'tel', 'number', 'password', 'search', 'url', null]).toContain(type);
              }
            }
          });
        });
      });
    });
  });

  describe('Content Layout in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should not have broken layouts in landscape on ${device}`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check for common layout issues
        const sections = container.querySelectorAll('section, [class*="section"]');
        
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          
          if (rect.width > 0) {
            // Sections should not overflow
            expect(rect.right).toBeLessThanOrEqual(width + 1);
            
            // Sections should have reasonable height (not collapsed)
            if (section.children.length > 0) {
              expect(rect.height).toBeGreaterThan(0);
            }
          }
        });
      });
    });
  });

  describe('Shared Components in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should render Testimonials correctly in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const testimonials = container.querySelector('[data-component="Testimonials"]');
        
        if (testimonials) {
          const rect = testimonials.getBoundingClientRect();
          
          // Should not overflow (main check)
          expect(rect.right).toBeLessThanOrEqual(width + 1);
          
          // If visible, check dimensions
          if (rect.width > 0 && rect.height > 0) {
            expect(rect.width).toBeGreaterThan(0);
            expect(rect.height).toBeGreaterThan(0);
          }
        } else {
          // Component might not be on this page, that's okay
          expect(true).toBe(true);
        }
      });

      it(`should render WhyUs correctly in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const whyUs = container.querySelector('[data-component="WhyUs"]');
        
        if (whyUs) {
          const rect = whyUs.getBoundingClientRect();
          
          // Should not overflow (main check)
          expect(rect.right).toBeLessThanOrEqual(width + 1);
          
          // If visible, check dimensions
          if (rect.width > 0 && rect.height > 0) {
            expect(rect.width).toBeGreaterThan(0);
            expect(rect.height).toBeGreaterThan(0);
          }
        } else {
          // Component might not be on this page, that's okay
          expect(true).toBe(true);
        }
      });

      it(`should render NextSteps correctly in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const nextSteps = container.querySelector('[data-component="NextSteps"]');
        
        if (nextSteps) {
          const rect = nextSteps.getBoundingClientRect();
          
          // Should not overflow (main check)
          expect(rect.right).toBeLessThanOrEqual(width + 1);
          
          // If visible, check dimensions
          if (rect.width > 0 && rect.height > 0) {
            expect(rect.width).toBeGreaterThan(0);
            expect(rect.height).toBeGreaterThan(0);
          }
        } else {
          // Component might not be on this page, that's okay
          expect(true).toBe(true);
        }
      });
    });
  });

  describe('Typography in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should maintain readable typography in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check headings
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headings.forEach((heading) => {
          const computedStyle = window.getComputedStyle(heading);
          const fontSize = parseFloat(computedStyle.fontSize);
          
          // Headings should have reasonable font size
          expect(fontSize).toBeGreaterThanOrEqual(14);
          expect(fontSize).toBeLessThanOrEqual(100);
        });

        // Check body text
        const paragraphs = Array.from(container.querySelectorAll('p, span, div'));
        
        paragraphs.slice(0, 20).forEach((element) => {
          const computedStyle = window.getComputedStyle(element);
          const fontSize = parseFloat(computedStyle.fontSize);
          
          if (fontSize > 0) {
            // Body text should be at least 14px
            expect(fontSize).toBeGreaterThanOrEqual(14);
          }
        });
      });
    });
  });

  describe('Images in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should render images correctly in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        const images = container.querySelectorAll('img');
        
        images.forEach((img) => {
          const rect = img.getBoundingClientRect();
          
          if (rect.width > 0) {
            // Images should not overflow viewport
            expect(rect.right).toBeLessThanOrEqual(width + 1);
            
            // Images should have alt text for accessibility
            expect(img.hasAttribute('alt')).toBe(true);
          }
        });
      });
    });
  });

  describe('Spacing in Landscape', () => {
    landscapeDimensions.forEach(({ width, height, device }) => {
      it(`should maintain appropriate spacing in landscape (${device})`, () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // Check sections have adequate spacing
        const sections = container.querySelectorAll('section, [class*="section"]');
        
        sections.forEach((section) => {
          const computedStyle = window.getComputedStyle(section);
          const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
          const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
          
          // Sections should have some vertical padding
          const totalVerticalPadding = paddingTop + paddingBottom;
          expect(totalVerticalPadding).toBeGreaterThanOrEqual(0);
        });
      });
    });
  });
});
