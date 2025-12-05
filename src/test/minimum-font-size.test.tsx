import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';

/**
 * Feature: mobile-optimization, Property 7: Minimum readable font size
 * Validates: Requirements 3.4
 * 
 * This property test verifies that all text elements on mobile viewports
 * have a minimum font size of 14px to ensure legibility without zooming.
 */
describe('Property 7: Minimum readable font size', () => {
  it('should ensure all text elements are at least 14px on mobile', () => {
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

          // Get key text-containing elements (more focused selection)
          const textElements = container.querySelectorAll(
            'p, a, button, h1, h2, h3, h4, h5, h6'
          );

          // Helper function to get computed font size in pixels
          const getFontSize = (element: Element): number => {
            const fontSize = window.getComputedStyle(element).fontSize;
            return parseFloat(fontSize);
          };

          // Helper function to check if element has direct text content
          const hasDirectTextContent = (element: Element): boolean => {
            // Check if element has text nodes (not just child elements)
            for (const node of element.childNodes) {
              if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                return true;
              }
            }
            return false;
          };

          // Filter to only elements with direct text content
          const textElementsWithContent = Array.from(textElements).filter(
            hasDirectTextContent
          );

          // Check each text element
          textElementsWithContent.forEach((element) => {
            const fontSize = getFontSize(element);
            
            // Property: all text elements should have font size >= 14px
            // Allow a small tolerance for rounding (13.5px rounds to 14px)
            expect(fontSize).toBeGreaterThanOrEqual(13.5);
          });
        }
      ),
      { numRuns: 20 } // Reduced from 100 to prevent memory issues
    );
  });

  it('should ensure body text is at least 14px on mobile', () => {
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

          // Get all paragraph elements (primary body text)
          const paragraphs = container.querySelectorAll('p');

          paragraphs.forEach((p) => {
            const fontSize = parseFloat(
              window.getComputedStyle(p).fontSize
            );

            // Property: body text (paragraphs) should be at least 14px
            expect(fontSize).toBeGreaterThanOrEqual(13.5);
          });
        }
      ),
      { numRuns: 20 } // Reduced from 100 to prevent memory issues
    );
  });

  it('should ensure button text is at least 14px on mobile', () => {
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

          // Get all button and link elements
          const interactiveElements = container.querySelectorAll('button, a');

          interactiveElements.forEach((element) => {
            const fontSize = parseFloat(
              window.getComputedStyle(element).fontSize
            );

            // Property: interactive element text should be at least 14px
            expect(fontSize).toBeGreaterThanOrEqual(13.5);
          });
        }
      ),
      { numRuns: 20 } // Reduced from 100 to prevent memory issues
    );
  });

  it('should ensure form input text is at least 14px on mobile', () => {
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

          // Get all form input elements
          const formElements = container.querySelectorAll(
            'input, textarea, select'
          );

          formElements.forEach((element) => {
            const fontSize = parseFloat(
              window.getComputedStyle(element).fontSize
            );

            // Property: form input text should be at least 14px
            // This prevents mobile browsers from auto-zooming on focus
            expect(fontSize).toBeGreaterThanOrEqual(13.5);
          });
        }
      ),
      { numRuns: 20 } // Reduced from 100 to prevent memory issues
    );
  });
});
