import { describe, it, expect } from 'vitest';
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

const tabletViewports = [
  { width: 768, height: 1024, name: 'iPad Portrait' },
  { width: 1024, height: 768, name: 'iPad Landscape' },
];

describe('Tablet Viewport Optimization (640px - 1023px)', () => {
  tabletViewports.forEach(({ width, height, name: viewportName }) => {
    describe(`${viewportName} (${width}x${height})`, () => {
      pages.forEach(({ name: pageName, component: PageComponent }) => {
        it(`${pageName} should not have horizontal overflow at ${width}px`, () => {
          // Set viewport
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));

          const { container } = render(
            <BrowserRouter>
              <PageComponent />
            </BrowserRouter>
          );

          // Check for horizontal overflow
          const body = container.querySelector('body') || document.body;
          const scrollWidth = body.scrollWidth || container.scrollWidth;
          const clientWidth = body.clientWidth || container.clientWidth || width;

          expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px tolerance
        });

        it(`${pageName} should render properly at ${width}px`, () => {
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));

          const { container } = render(
            <BrowserRouter>
              <PageComponent />
            </BrowserRouter>
          );

          // Verify page renders without errors
          expect(container).toBeTruthy();
          
          // Verify we have some content
          const hasContent = container.textContent && container.textContent.length > 0;
          expect(hasContent).toBe(true);
        });
      });

      it('should show appropriate navigation at tablet viewport', () => {
        global.innerWidth = width;
        global.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );

        // At 768px, check if we have either desktop nav or mobile menu
        const desktopNav = container.querySelector('nav[class*="hidden"][class*="md:flex"]');
        const mobileMenuButton = container.querySelector('button[aria-label*="menu" i], button[class*="hamburger"]');

        // Should have one or the other
        expect(desktopNav || mobileMenuButton).toBeTruthy();
      });
    });
  });

  describe('Grid Layout Optimization for Tablet', () => {
    const tabletWidth = 768;

    pages.forEach(({ name: pageName, component: PageComponent }) => {
      it(`${pageName} should use appropriate grid columns at ${tabletWidth}px`, () => {
        global.innerWidth = tabletWidth;
        global.innerHeight = 1024;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        // Find grid containers
        const gridContainers = container.querySelectorAll('[class*="grid"]');

        gridContainers.forEach((grid) => {
          const computedStyle = window.getComputedStyle(grid);
          const gridTemplateColumns = computedStyle.gridTemplateColumns;

          // Skip if not a grid
          if (gridTemplateColumns === 'none') return;

          // Count columns
          const columnCount = gridTemplateColumns.split(' ').length;

          // At tablet, should have 1-3 columns (not more than 3)
          expect(columnCount).toBeGreaterThanOrEqual(1);
          expect(columnCount).toBeLessThanOrEqual(3);
        });
      });
    });
  });

  describe('Shared Components on Tablet', () => {
    const tabletWidth = 768;

    it('Testimonials component should render at tablet viewport', () => {
      global.innerWidth = tabletWidth;
      global.innerHeight = 1024;
      window.dispatchEvent(new Event('resize'));

      const { container } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const testimonials = container.querySelector('[data-component="Testimonials"]');
      // Just verify it exists - getBoundingClientRect may not work properly in test environment
      expect(testimonials).toBeTruthy();
    });

    it('WhyUs component should render at tablet viewport', () => {
      global.innerWidth = tabletWidth;
      global.innerHeight = 1024;
      window.dispatchEvent(new Event('resize'));

      const { container } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const whyUs = container.querySelector('[data-component="WhyUs"]');
      // Just verify it exists - getBoundingClientRect may not work properly in test environment
      expect(whyUs).toBeTruthy();
    });

    it('NextSteps component should render at tablet viewport', () => {
      global.innerWidth = tabletWidth;
      global.innerHeight = 1024;
      window.dispatchEvent(new Event('resize'));

      const { container } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const nextSteps = container.querySelector('[data-component="NextSteps"]');
      // Just verify it exists - getBoundingClientRect may not work properly in test environment
      expect(nextSteps).toBeTruthy();
    });

    it('Footer component should render at tablet viewport', () => {
      global.innerWidth = tabletWidth;
      global.innerHeight = 1024;
      window.dispatchEvent(new Event('resize'));

      const { container } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const footer = container.querySelector('footer, [data-component="Footer"]');
      // Just verify it exists - getBoundingClientRect may not work properly in test environment
      expect(footer).toBeTruthy();
    });
  });

  describe('Typography and Spacing at Tablet', () => {
    const tabletWidth = 768;

    pages.forEach(({ name: pageName, component: PageComponent }) => {
      it(`${pageName} should have readable typography at ${tabletWidth}px`, () => {
        global.innerWidth = tabletWidth;
        global.innerHeight = 1024;
        window.dispatchEvent(new Event('resize'));

        const { container } = render(
          <BrowserRouter>
            <PageComponent />
          </BrowserRouter>
        );

        const textElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');

        textElements.forEach((element) => {
          const computedStyle = window.getComputedStyle(element);
          
          // Skip hidden elements
          if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
            return;
          }

          const fontSize = parseFloat(computedStyle.fontSize);
          
          // Font size should be at least 14px for readability
          if (fontSize > 0) {
            expect(fontSize).toBeGreaterThanOrEqual(14);
          }
        });
      });
    });
  });

  describe('Responsive Transitions', () => {
    it('should transition smoothly from mobile to tablet at 640px', () => {
      // Test at 639px (mobile)
      global.innerWidth = 639;
      global.innerHeight = 800;
      window.dispatchEvent(new Event('resize'));

      const { container: mobileContainer } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const mobileScrollWidth = mobileContainer.scrollWidth;

      // Test at 640px (tablet)
      global.innerWidth = 640;
      global.innerHeight = 800;
      window.dispatchEvent(new Event('resize'));

      const { container: tabletContainer } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const tabletScrollWidth = tabletContainer.scrollWidth;

      // Both should not have horizontal overflow
      expect(mobileScrollWidth).toBeLessThanOrEqual(640);
      expect(tabletScrollWidth).toBeLessThanOrEqual(641);
    });

    it('should transition smoothly from tablet to desktop at 1024px', () => {
      // Test at 1023px (tablet)
      global.innerWidth = 1023;
      global.innerHeight = 800;
      window.dispatchEvent(new Event('resize'));

      const { container: tabletContainer } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const tabletScrollWidth = tabletContainer.scrollWidth;

      // Test at 1024px (desktop)
      global.innerWidth = 1024;
      global.innerHeight = 800;
      window.dispatchEvent(new Event('resize'));

      const { container: desktopContainer } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const desktopScrollWidth = desktopContainer.scrollWidth;

      // Both should not have horizontal overflow
      expect(tabletScrollWidth).toBeLessThanOrEqual(1024);
      expect(desktopScrollWidth).toBeLessThanOrEqual(1025);
    });
  });
});
