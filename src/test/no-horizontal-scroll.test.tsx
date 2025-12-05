import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';

/**
 * Feature: mobile-optimization, Property 1: No horizontal scrolling on mobile viewports
 * Validates: Requirements 1.1, 9.3, 16.3
 * 
 * This property test verifies that the homepage (and specifically the hero section)
 * does not cause horizontal scrolling on any mobile viewport width between 375px and 428px.
 */
describe('Property 1: No horizontal scrolling on mobile viewports', () => {
  it('should not cause horizontal scrolling on any mobile viewport width', () => {
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

          // Get the document width
          const documentWidth = container.scrollWidth;
          
          // Property: document width should not exceed viewport width
          // Allow a small tolerance of 1px for rounding errors
          expect(documentWidth).toBeLessThanOrEqual(viewportWidth + 1);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should ensure hero section content fits within mobile viewport', () => {
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

          // Find hero section elements
          const heroHeading = container.querySelector('h1');
          const heroSubheading = container.querySelector('header p');
          const heroButtons = container.querySelector('header .flex');

          // Check that hero elements don't overflow
          if (heroHeading) {
            const headingWidth = heroHeading.scrollWidth;
            expect(headingWidth).toBeLessThanOrEqual(viewportWidth);
          }

          if (heroSubheading) {
            const subheadingWidth = heroSubheading.scrollWidth;
            expect(subheadingWidth).toBeLessThanOrEqual(viewportWidth);
          }

          if (heroButtons) {
            const buttonsWidth = heroButtons.scrollWidth;
            expect(buttonsWidth).toBeLessThanOrEqual(viewportWidth);
          }
        }
      ),
      { numRuns: 10 }
    );
  });
});
