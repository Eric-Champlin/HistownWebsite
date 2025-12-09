import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';

// Import all pages
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DanceClasses from '../pages/DanceClasses';
import DanceDetail from '../pages/DanceDetail';
import DressCode from '../pages/DressCode';
import FeaturedClasses from '../pages/FeaturedClasses';
import FeaturedDetail from '../pages/FeaturedDetail';
import FreeTrial from '../pages/FreeTrial';
import More from '../pages/More';
import MusicClasses from '../pages/MusicClasses';
import MusicDetail from '../pages/MusicDetail';
import OurStory from '../pages/OurStory';
import OurTeam from '../pages/OurTeam';
import PastEvents from '../pages/PastEvents';
import Programs from '../pages/Programs';
import Store from '../pages/Store';
import StudioRental from '../pages/StudioRental';
import Tuition from '../pages/Tuition';

/**
 * Property-Based Tests for Reduced Spacing on Mobile
 * 
 * Feature: mobile-optimization, Property 12: Reduced spacing on mobile
 * Validates: Requirements 5.1
 */

describe('Property 12: Reduced spacing on mobile', () => {
  const mobileWidth = 390;
  const desktopWidth = 1024;

  const pages = [
    { name: 'Homepage', component: App },
    { name: 'About', component: About },
    { name: 'Contact', component: Contact },
    { name: 'DanceClasses', component: DanceClasses },
    { name: 'DanceDetail', component: DanceDetail },
    { name: 'DressCode', component: DressCode },
    { name: 'FeaturedClasses', component: FeaturedClasses },
    { name: 'FeaturedDetail', component: FeaturedDetail },
    { name: 'FreeTrial', component: FreeTrial },
    { name: 'More', component: More },
    { name: 'MusicClasses', component: MusicClasses },
    { name: 'MusicDetail', component: MusicDetail },
    { name: 'OurStory', component: OurStory },
    { name: 'OurTeam', component: OurTeam },
    { name: 'PastEvents', component: PastEvents },
    { name: 'Programs', component: Programs },
    { name: 'Store', component: Store },
    { name: 'StudioRental', component: StudioRental },
    { name: 'Tuition', component: Tuition },
  ];

  /**
   * Helper function to parse CSS spacing values (padding, margin)
   * Converts values like "16px", "1rem", "0" to numeric pixels
   */
  function parseSpacingValue(value: string): number {
    if (!value || value === 'auto' || value === 'none') return 0;
    
    // Handle multiple values (e.g., "16px 24px")
    const values = value.split(' ').filter(v => v);
    const firstValue = values[0];
    
    if (firstValue.endsWith('px')) {
      return parseFloat(firstValue);
    } else if (firstValue.endsWith('rem')) {
      // Assume 1rem = 16px
      return parseFloat(firstValue) * 16;
    } else if (firstValue.endsWith('em')) {
      // Assume 1em = 16px (base font size)
      return parseFloat(firstValue) * 16;
    }
    
    return parseFloat(firstValue) || 0;
  }

  /**
   * Helper function to get total spacing (sum of all sides)
   */
  function getTotalSpacing(element: Element, property: 'padding' | 'margin'): number {
    const style = window.getComputedStyle(element);
    const top = parseSpacingValue(style.getPropertyValue(`${property}-top`));
    const right = parseSpacingValue(style.getPropertyValue(`${property}-right`));
    const bottom = parseSpacingValue(style.getPropertyValue(`${property}-bottom`));
    const left = parseSpacingValue(style.getPropertyValue(`${property}-left`));
    
    return top + right + bottom + left;
  }

  /**
   * Test that sections and containers have reduced spacing on mobile
   * For any page, the padding and margin values on mobile should be
   * less than or equal to desktop values
   */
  it('should have reduced or equal spacing on mobile compared to desktop', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (page) => {
          // Render at mobile width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: mobileWidth,
          });

          const { container: mobileContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          // Render at desktop width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: desktopWidth,
          });

          const { container: desktopContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          // Find all sections and containers
          const mobileMain = mobileContainer.querySelector('main');
          const desktopMain = desktopContainer.querySelector('main');

          if (mobileMain && desktopMain) {
            // Get all direct children (sections)
            const mobileSections = Array.from(mobileMain.children);
            const desktopSections = Array.from(desktopMain.children);

            // Compare spacing for each section
            mobileSections.forEach((mobileSection, index) => {
              if (index < desktopSections.length) {
                const desktopSection = desktopSections[index];

                // Get total padding
                const mobilePadding = getTotalSpacing(mobileSection, 'padding');
                const desktopPadding = getTotalSpacing(desktopSection, 'padding');

                // Get total margin
                const mobileMargin = getTotalSpacing(mobileSection, 'margin');
                const desktopMargin = getTotalSpacing(desktopSection, 'margin');

                // Property: Mobile spacing should be less than or equal to desktop
                // Allow for some tolerance due to responsive design
                expect(mobilePadding).toBeLessThanOrEqual(desktopPadding + 10);
                expect(mobileMargin).toBeLessThanOrEqual(desktopMargin + 10);
              }
            });
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Test that container padding is reduced on mobile
   * Specifically tests that containers use less horizontal padding on mobile
   */
  it('should use reduced horizontal padding in containers on mobile', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (page) => {
          // Render at mobile width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: mobileWidth,
          });

          const { container: mobileContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          // Render at desktop width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: desktopWidth,
          });

          const { container: desktopContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          // Find containers (elements with container class or similar)
          const mobileContainers = mobileContainer.querySelectorAll('[class*="container"], [class*="px-"]');
          const desktopContainers = desktopContainer.querySelectorAll('[class*="container"], [class*="px-"]');

          // Compare first few containers
          const compareCount = Math.min(5, mobileContainers.length, desktopContainers.length);
          
          for (let i = 0; i < compareCount; i++) {
            const mobileEl = mobileContainers[i];
            const desktopEl = desktopContainers[i];

            const mobileStyle = window.getComputedStyle(mobileEl);
            const desktopStyle = window.getComputedStyle(desktopEl);

            const mobilePaddingLeft = parseSpacingValue(mobileStyle.paddingLeft);
            const mobilePaddingRight = parseSpacingValue(mobileStyle.paddingRight);
            const desktopPaddingLeft = parseSpacingValue(desktopStyle.paddingLeft);
            const desktopPaddingRight = parseSpacingValue(desktopStyle.paddingRight);

            const mobileHorizontalPadding = mobilePaddingLeft + mobilePaddingRight;
            const desktopHorizontalPadding = desktopPaddingLeft + desktopPaddingRight;

            // Property: Mobile horizontal padding should be less than or equal to desktop
            // Allow small tolerance for rounding
            expect(mobileHorizontalPadding).toBeLessThanOrEqual(desktopHorizontalPadding + 5);
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Test that section spacing (vertical margins) is reduced on mobile
   * Validates that space between sections is optimized for mobile
   */
  it('should use reduced vertical spacing between sections on mobile', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (page) => {
          // Render at mobile width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: mobileWidth,
          });

          const { container: mobileContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          // Render at desktop width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: desktopWidth,
          });

          const { container: desktopContainer } = render(
            <BrowserRouter>
              <page.component />
            </BrowserRouter>
          );

          const mobileMain = mobileContainer.querySelector('main');
          const desktopMain = desktopContainer.querySelector('main');

          if (mobileMain && desktopMain) {
            const mobileSections = Array.from(mobileMain.children);
            const desktopSections = Array.from(desktopMain.children);

            // Compare vertical spacing for sections
            mobileSections.forEach((mobileSection, index) => {
              if (index < desktopSections.length) {
                const desktopSection = desktopSections[index];

                const mobileStyle = window.getComputedStyle(mobileSection);
                const desktopStyle = window.getComputedStyle(desktopSection);

                const mobilePaddingTop = parseSpacingValue(mobileStyle.paddingTop);
                const mobilePaddingBottom = parseSpacingValue(mobileStyle.paddingBottom);
                const desktopPaddingTop = parseSpacingValue(desktopStyle.paddingTop);
                const desktopPaddingBottom = parseSpacingValue(desktopStyle.paddingBottom);

                const mobileVerticalPadding = mobilePaddingTop + mobilePaddingBottom;
                const desktopVerticalPadding = desktopPaddingTop + desktopPaddingBottom;

                // Property: Mobile vertical padding should be less than or equal to desktop
                expect(mobileVerticalPadding).toBeLessThanOrEqual(desktopVerticalPadding + 10);
              }
            });
          }
        }
      ),
      { numRuns: 10 }
    );
  });
});
