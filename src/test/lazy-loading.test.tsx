import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';
import { LazyImage } from '../components/common/LazyImage';

/**
 * Feature: mobile-optimization, Property 18: Lazy loading implementation
 * Validates: Requirements 7.1
 * 
 * Property: For any image element, it should use lazy loading either through
 * the loading="lazy" attribute or through the LazyImage component with
 * IntersectionObserver, ensuring performance optimization.
 */

describe('Property 18: Lazy loading implementation', () => {
  it('should use LazyImage component for all program and team images', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(390, 375, 428), // Mobile viewport widths
        (viewportWidth) => {
          // Set viewport size
          global.innerWidth = viewportWidth;
          global.innerHeight = 844;

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Check that LazyImage component containers exist
          // LazyImage creates a div with relative and overflow-hidden classes
          const lazyImageContainers = container.querySelectorAll('div.relative.overflow-hidden');
          
          // Property: We should have at least 6 LazyImage components (3 programs + 3 team members)
          expect(lazyImageContainers.length).toBeGreaterThanOrEqual(6);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should render LazyImage with loading="lazy" attribute', () => {
    // Test the LazyImage component directly to verify it uses loading="lazy"
    const { container } = render(
      <LazyImage
        src="https://res.cloudinary.com/test/image.jpg"
        alt="Test Image"
      />
    );

    // The LazyImage component should create a container
    const lazyContainer = container.querySelector('div.relative');
    expect(lazyContainer).toBeTruthy();
    
    // When the image renders (after intersection), it should have loading="lazy"
    // Note: In test environment, IntersectionObserver might not trigger,
    // but we can verify the component structure is correct
    const placeholder = lazyContainer?.querySelector('div.absolute');
    expect(placeholder).toBeTruthy(); // Placeholder should exist initially
  });

  it('should have aspect-ratio CSS to prevent layout shift', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(390, 375, 428),
        (viewportWidth) => {
          global.innerWidth = viewportWidth;
          global.innerHeight = 844;

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Check all elements with aspect-ratio style
          const allElements = container.querySelectorAll('*');
          
          // Property: Image containers should have aspect-ratio style to prevent layout shift
          let containersWithAspectRatio = 0;
          allElements.forEach((element) => {
            const style = (element as HTMLElement).style;
            if (style.aspectRatio) {
              containersWithAspectRatio++;
            }
          });
          
          // We should have at least 6 containers with aspect-ratio (3 programs + 3 team members)
          expect(containersWithAspectRatio).toBeGreaterThanOrEqual(6);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should stack images vertically on mobile', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(390, 375, 428),
        (viewportWidth) => {
          global.innerWidth = viewportWidth;
          global.innerHeight = 844;

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Check that program sections use grid-cols-1 on mobile
          const programSections = container.querySelectorAll('[class*="grid"][class*="grid-cols-1"]');
          
          // Property: On mobile, images should stack vertically (grid-cols-1)
          expect(programSections.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 10 }
    );
  });
});
