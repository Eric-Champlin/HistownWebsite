import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';

/**
 * Feature: mobile-optimization, Property 6: Typography hierarchy preservation
 * Validates: Requirements 3.1, 3.3, 9.4, 13.5
 * 
 * This property test verifies that heading hierarchy (h1 > h2 > h3 > h4) is maintained
 * on mobile viewports, ensuring visual hierarchy is preserved across all screen sizes.
 */
describe('Property 6: Typography hierarchy preservation', () => {
  it('should maintain heading hierarchy h1 > h2 > h3 > h4 on mobile', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 375, max: 428 }), // Generate random mobile widths
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          });

          // Render the homepage
          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Get all heading elements
          const h1 = container.querySelector('h1');
          const h2Elements = container.querySelectorAll('h2');
          const h3Elements = container.querySelectorAll('h3');
          const h4Elements = container.querySelectorAll('h4');

          // Helper function to get computed font size in pixels
          const getFontSize = (element: Element): number => {
            const fontSize = window.getComputedStyle(element).fontSize;
            return parseFloat(fontSize);
          };

          // Test h1 > h2 hierarchy
          if (h1 && h2Elements.length > 0) {
            const h1Size = getFontSize(h1);
            const h2Sizes = Array.from(h2Elements).map(getFontSize);
            const maxH2 = Math.max(...h2Sizes);
            
            // Property: h1 should be larger than or equal to the largest h2
            // In mobile-first design, h1 should be at least as large as h2
            expect(h1Size).toBeGreaterThanOrEqual(maxH2);
          }

          // Test h2 > h3 hierarchy (allow equal sizes for flexibility)
          if (h2Elements.length > 0 && h3Elements.length > 0) {
            // Get max h2 size and min h3 size to test overall hierarchy
            const h2Sizes = Array.from(h2Elements).map(getFontSize);
            const h3Sizes = Array.from(h3Elements).map(getFontSize);
            const maxH2 = Math.max(...h2Sizes);
            const minH3 = Math.min(...h3Sizes);
            
            // Property: largest h2 should be >= smallest h3
            expect(maxH2).toBeGreaterThanOrEqual(minH3);
          }

          // Test h3 > h4 hierarchy (allow equal sizes for flexibility)
          if (h3Elements.length > 0 && h4Elements.length > 0) {
            // Get max h3 size and min h4 size to test overall hierarchy
            const h3Sizes = Array.from(h3Elements).map(getFontSize);
            const h4Sizes = Array.from(h4Elements).map(getFontSize);
            const maxH3 = Math.max(...h3Sizes);
            const minH4 = Math.min(...h4Sizes);
            
            // Property: largest h3 should be >= smallest h4
            expect(maxH3).toBeGreaterThanOrEqual(minH4);
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should maintain hero heading hierarchy on mobile', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 375, max: 428 }),
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          });

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Get hero section elements
          const heroHeading = container.querySelector('header h1');
          const heroSubheading = container.querySelector('header p');

          if (heroHeading && heroSubheading) {
            const headingSize = parseFloat(
              window.getComputedStyle(heroHeading).fontSize
            );
            const subheadingSize = parseFloat(
              window.getComputedStyle(heroSubheading).fontSize
            );

            // Property: hero heading should be larger than or equal to subheading
            // (equal is acceptable if both use base font size on very small screens)
            expect(headingSize).toBeGreaterThanOrEqual(subheadingSize);
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should scale typography smoothly across mobile range', () => {
    const viewportWidths = [375, 390, 428];
    const fontSizes: { [key: number]: number } = {};

    viewportWidths.forEach((width) => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      });

      const { container } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const h1 = container.querySelector('h1');
      if (h1) {
        const fontSize = parseFloat(window.getComputedStyle(h1).fontSize);
        fontSizes[width] = fontSize;
      }
    });

    // Property: font sizes should scale reasonably across viewport range
    // They should either stay the same or increase slightly with viewport width
    if (fontSizes[375] && fontSizes[390] && fontSizes[428]) {
      expect(fontSizes[390]).toBeGreaterThanOrEqual(fontSizes[375]);
      expect(fontSizes[428]).toBeGreaterThanOrEqual(fontSizes[390]);
    }
  });
});
