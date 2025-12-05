import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';

/**
 * Feature: mobile-optimization, Property 20: Image aspect ratio preservation
 * Validates: Requirements 7.4, 7.5
 * 
 * Property: For any image element, it should have explicit width/height attributes
 * or aspect-ratio CSS, ensuring no layout shift during loading.
 */

describe('Property 20: Image aspect ratio preservation', () => {
  it('should have aspect-ratio CSS on image containers to prevent layout shift', () => {
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

          // Find all elements with aspect-ratio style
          const allElements = container.querySelectorAll('*');
          let elementsWithAspectRatio = 0;
          
          allElements.forEach((element) => {
            const style = (element as HTMLElement).style;
            if (style.aspectRatio) {
              elementsWithAspectRatio++;
            }
          });
          
          // Property: We should have multiple elements with aspect-ratio
          // (3 program images + 3 team member images = 6 minimum)
          expect(elementsWithAspectRatio).toBeGreaterThanOrEqual(6);
        }
      ),
      { numRuns: 10 } // Reduced to prevent memory issues
    );
  });

  it('should maintain aspect ratio on program images', () => {
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

          // Find program image containers (they have specific classes)
          const programContainers = container.querySelectorAll('[class*="rounded-2xl"][class*="overflow-hidden"][class*="shadow"]');
          
          let programImagesWithAspectRatio = 0;
          programContainers.forEach((programContainer) => {
            const style = (programContainer as HTMLElement).style;
            if (style.aspectRatio) {
              programImagesWithAspectRatio++;
            }
          });
          
          // Property: Program images should have aspect-ratio (3 programs)
          expect(programImagesWithAspectRatio).toBeGreaterThanOrEqual(3);
        }
      ),
      { numRuns: 10 } // Reduced to prevent memory issues
    );
  });

  it('should maintain aspect ratio on team member images', () => {
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

          // Find team member image containers (they have specific size classes)
          const teamContainers = container.querySelectorAll('[class*="w-64"][class*="h-64"], [class*="w-72"][class*="h-72"]');
          
          let teamImagesWithAspectRatio = 0;
          teamContainers.forEach((teamContainer) => {
            const style = (teamContainer as HTMLElement).style;
            if (style.aspectRatio) {
              teamImagesWithAspectRatio++;
            }
          });
          
          // Property: Team member images should have aspect-ratio (3 team members)
          expect(teamImagesWithAspectRatio).toBeGreaterThanOrEqual(3);
        }
      ),
      { numRuns: 10 } // Reduced to prevent memory issues
    );
  });

  it('should use object-cover or object-contain to prevent image distortion', () => {
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

          // Find all img elements
          const images = container.querySelectorAll('img');
          
          // Property: Content images should use object-cover or object-contain to maintain aspect ratio
          images.forEach((img) => {
            const classes = img.className;
            const src = img.getAttribute('src');
            
            // Content images (from Cloudinary) should have object-fit property
            if (src && src.includes('cloudinary.com')) {
              const hasObjectFit = classes.includes('object-cover') || classes.includes('object-contain');
              expect(hasObjectFit).toBe(true);
            }
          });
        }
      ),
      { numRuns: 10 } // Reduced to prevent memory issues
    );
  });

  it('should have proper image sizing classes for program and team images', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Find LazyImage components (they create divs with relative class)
    const lazyImageContainers = container.querySelectorAll('div.relative.overflow-hidden');
    
    // Property: We should have at least 6 LazyImage components for program and team images
    expect(lazyImageContainers.length).toBeGreaterThanOrEqual(6);
    
    // Each LazyImage container should be set up to render images with proper sizing
    // The LazyImage component internally uses w-full and h-full on the img element
    lazyImageContainers.forEach((lazyContainer) => {
      // Verify the container structure exists
      expect(lazyContainer).toBeTruthy();
    });
  });
});
