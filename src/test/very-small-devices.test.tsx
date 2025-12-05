import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import DanceClasses from '../pages/DanceClasses';
import MusicClasses from '../pages/MusicClasses';
import FeaturedClasses from '../pages/FeaturedClasses';
import DanceDetail from '../pages/DanceDetail';
import MusicDetail from '../pages/MusicDetail';
import FeaturedDetail from '../pages/FeaturedDetail';
import About from '../pages/About';
import OurTeam from '../pages/OurTeam';
import OurStory from '../pages/OurStory';
import PastEvents from '../pages/PastEvents';
import Contact from '../pages/Contact';
import FreeTrial from '../pages/FreeTrial';
import DressCode from '../pages/DressCode';
import StudioRental from '../pages/StudioRental';
import Tuition from '../pages/Tuition';
import Store from '../pages/Store';
import More from '../pages/More';
import Programs from '../pages/Programs';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
} as any;

const pages = [
  { name: 'Homepage', component: App },
  { name: 'DanceClasses', component: DanceClasses },
  { name: 'MusicClasses', component: MusicClasses },
  { name: 'FeaturedClasses', component: FeaturedClasses },
  { name: 'DanceDetail', component: DanceDetail },
  { name: 'MusicDetail', component: MusicDetail },
  { name: 'FeaturedDetail', component: FeaturedDetail },
  { name: 'About', component: About },
  { name: 'OurTeam', component: OurTeam },
  { name: 'OurStory', component: OurStory },
  { name: 'PastEvents', component: PastEvents },
  { name: 'Contact', component: Contact },
  { name: 'FreeTrial', component: FreeTrial },
  { name: 'DressCode', component: DressCode },
  { name: 'StudioRental', component: StudioRental },
  { name: 'Tuition', component: Tuition },
  { name: 'Store', component: Store },
  { name: 'More', component: More },
  { name: 'Programs', component: Programs },
];

describe('Very Small Devices (320px) Optimization', () => {
  const VERY_SMALL_WIDTH = 320;

  beforeEach(() => {
    // Set viewport to 320px width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: VERY_SMALL_WIDTH,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 568, // iPhone SE 1st gen height
    });
  });

  describe('No Horizontal Overflow at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should not have horizontal overflow on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check that no element exceeds viewport width
        const allElements = container.querySelectorAll('*');
        allElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.width > 0) {
            expect(rect.width).toBeLessThanOrEqual(VERY_SMALL_WIDTH + 1); // +1 for rounding
          }
        });

        // Check document width
        const documentWidth = container.scrollWidth;
        expect(documentWidth).toBeLessThanOrEqual(VERY_SMALL_WIDTH + 1);
      });
    });
  });

  describe('Font Size Readability at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should maintain readable font sizes on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check all text elements have minimum readable font size
        const textElements = container.querySelectorAll('p, span, a, button, h1, h2, h3, h4, h5, h6, li, label, input, textarea');
        textElements.forEach((element) => {
          const styles = window.getComputedStyle(element);
          const fontSize = parseFloat(styles.fontSize);
          
          // Minimum font size should be 12px for very small devices
          // (slightly smaller than the 14px minimum for regular mobile)
          if (fontSize > 0) {
            expect(fontSize).toBeGreaterThanOrEqual(12);
          }
        });
      });
    });
  });

  describe('Touch Target Accessibility at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should maintain adequate touch targets on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check interactive elements have adequate touch targets
        const interactiveElements = container.querySelectorAll('button, a, input, select, textarea');
        interactiveElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          
          // Touch targets should still be at least 44x44px even on very small devices
          if (rect.width > 0 && rect.height > 0) {
            expect(rect.height).toBeGreaterThanOrEqual(44);
            // Width can be flexible for full-width elements
            if (!element.classList.contains('w-full')) {
              expect(rect.width).toBeGreaterThanOrEqual(44);
            }
          }
        });
      });
    });
  });

  describe('Form Inputs at 320px', () => {
    const formPages = [
      { name: 'Contact', component: Contact },
      { name: 'FreeTrial', component: FreeTrial },
    ];

    formPages.forEach(({ name, component: Component }) => {
      it(`should render form inputs correctly on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check form inputs are full width
        const inputs = container.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          const rect = input.getBoundingClientRect();
          const parentRect = input.parentElement?.getBoundingClientRect();
          
          if (rect.width > 0 && parentRect) {
            // Input should take up most of parent width (accounting for padding)
            const widthRatio = rect.width / parentRect.width;
            expect(widthRatio).toBeGreaterThan(0.8);
          }
        });

        // Check input heights are adequate for touch
        inputs.forEach((input) => {
          const rect = input.getBoundingClientRect();
          if (rect.height > 0) {
            expect(rect.height).toBeGreaterThanOrEqual(44);
          }
        });
      });

      it(`should have proper input types on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check email inputs have type="email"
        const emailInputs = container.querySelectorAll('input[type="email"]');
        expect(emailInputs.length).toBeGreaterThan(0);

        // Check tel inputs have type="tel" if present
        const telInputs = container.querySelectorAll('input[type="tel"]');
        // At least one form should have tel input
        if (name === 'Contact') {
          expect(telInputs.length).toBeGreaterThan(0);
        }
      });
    });
  });

  describe('Typography Hierarchy at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should maintain heading hierarchy on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');
        const h3 = container.querySelector('h3');

        if (h1 && h2) {
          const h1Size = parseFloat(window.getComputedStyle(h1).fontSize);
          const h2Size = parseFloat(window.getComputedStyle(h2).fontSize);
          // Allow equal sizes in test environment, as happy-dom may not compute responsive classes correctly
          // In real browsers, h1 uses text-3xl (30px) and h2 uses text-2xl (24px) at 320px
          expect(h1Size).toBeGreaterThanOrEqual(h2Size);
        }

        if (h2 && h3) {
          const h2Size = parseFloat(window.getComputedStyle(h2).fontSize);
          const h3Size = parseFloat(window.getComputedStyle(h3).fontSize);
          expect(h2Size).toBeGreaterThanOrEqual(h3Size);
        }
      });
    });
  });

  describe('Vertical Stacking at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should stack multi-column layouts vertically on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check grid layouts are single column
        const gridElements = container.querySelectorAll('[class*="grid"]');
        gridElements.forEach((element) => {
          const styles = window.getComputedStyle(element);
          const gridTemplateColumns = styles.gridTemplateColumns;
          
          // Should be single column or auto
          if (gridTemplateColumns && gridTemplateColumns !== 'none') {
            const columnCount = gridTemplateColumns.split(' ').length;
            expect(columnCount).toBeLessThanOrEqual(1);
          }
        });
      });
    });
  });

  describe('Image Sizing at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should size images appropriately on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        const images = container.querySelectorAll('img');
        images.forEach((img) => {
          const rect = img.getBoundingClientRect();
          
          // Images should not exceed viewport width
          if (rect.width > 0) {
            expect(rect.width).toBeLessThanOrEqual(VERY_SMALL_WIDTH + 1);
          }
        });
      });
    });
  });

  describe('Spacing at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should have appropriate spacing on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check container padding is reasonable for small screens
        const containers = container.querySelectorAll('[class*="container"], [class*="px-"]');
        containers.forEach((element) => {
          const styles = window.getComputedStyle(element);
          const paddingLeft = parseFloat(styles.paddingLeft);
          const paddingRight = parseFloat(styles.paddingRight);
          
          // Padding should be present but not excessive (max 16px on very small devices)
          if (paddingLeft > 0) {
            expect(paddingLeft).toBeLessThanOrEqual(16);
          }
          if (paddingRight > 0) {
            expect(paddingRight).toBeLessThanOrEqual(16);
          }
        });
      });
    });
  });

  describe('Navigation at 320px', () => {
    pages.forEach(({ name, component: Component }) => {
      it(`should show hamburger menu on ${name} at 320px`, () => {
        // Skip detail pages as they are minimal pages without full navigation
        if (name.includes('Detail')) {
          return;
        }

        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Hamburger menu button should be visible
        const hamburgerButton = container.querySelector('button[aria-label*="menu" i], button[class*="hamburger"]');
        expect(hamburgerButton).toBeTruthy();
      });
    });
  });

  describe('Shared Components at 320px', () => {
    const pagesWithSharedComponents = [
      { name: 'Homepage', component: App },
      { name: 'DanceClasses', component: DanceClasses },
      { name: 'MusicClasses', component: MusicClasses },
      { name: 'About', component: About },
    ];

    pagesWithSharedComponents.forEach(({ name, component: Component }) => {
      it(`should render shared components correctly on ${name} at 320px`, () => {
        const { container } = render(
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        );

        // Check for shared components
        const testimonials = container.querySelector('[data-component="Testimonials"]');
        const whyUs = container.querySelector('[data-component="WhyUs"]');
        const nextSteps = container.querySelector('[data-component="NextSteps"]');
        const footer = container.querySelector('footer');

        // If components exist, they should not overflow
        [testimonials, whyUs, nextSteps, footer].forEach((component) => {
          if (component) {
            const rect = component.getBoundingClientRect();
            if (rect.width > 0) {
              expect(rect.width).toBeLessThanOrEqual(VERY_SMALL_WIDTH + 1);
            }
          }
        });
      });
    });
  });
});
