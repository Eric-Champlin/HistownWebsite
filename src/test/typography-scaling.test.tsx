/**
 * Property-Based Test for Typography Scaling Across Mobile Range
 * Feature: mobile-optimization, Property 8: Typography scaling across mobile range
 * Validates: Requirements 3.5
 */

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

const allPages = [
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
 * Helper function to render a page at a specific viewport width
 */
function renderPageAtViewport(PageComponent: React.ComponentType, viewportWidth: number) {
  // Set viewport width
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: viewportWidth,
  });

  // Trigger resize event
  window.dispatchEvent(new Event('resize'));

  return render(
    <BrowserRouter>
      <PageComponent />
    </BrowserRouter>
  );
}

/**
 * Check if an element has text overflow
 */
function hasTextOverflow(element: Element): boolean {
  const styles = window.getComputedStyle(element);
  
  // Skip elements that are intentionally hidden
  if (styles.display === 'none' || styles.visibility === 'hidden') {
    return false;
  }

  // Skip elements with overflow-x: hidden (intentional clipping)
  if (styles.overflowX === 'hidden') {
    return false;
  }

  // Check if scrollWidth exceeds clientWidth (indicates overflow)
  const hasOverflow = element.scrollWidth > element.clientWidth;
  
  return hasOverflow;
}

/**
 * Get all text elements from a container
 */
function getAllTextElements(container: HTMLElement): Element[] {
  const textElements: Element[] = [];
  const textTags = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'label', 'li', 'td', 'th', 'div'];
  
  textTags.forEach(tag => {
    const elements = container.querySelectorAll(tag);
    elements.forEach(el => {
      // Only include elements that have text content
      if (el.textContent && el.textContent.trim().length > 0) {
        textElements.push(el);
      }
    });
  });
  
  return textElements;
}

describe('Property 8: Typography Scaling Across Mobile Range', () => {
  /**
   * Property: For any page rendered at 375px, 390px, and 428px widths,
   * all text should remain fully visible without overflow
   */
  it('should ensure all text remains visible without overflow across mobile breakpoints', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        fc.constantFrom(375, 390, 428), // Mobile viewport widths
        (page, viewportWidth) => {
          const { container } = renderPageAtViewport(page.component, viewportWidth);
          
          // Get all text elements
          const textElements = getAllTextElements(container);
          
          // Property: No text element should have horizontal overflow
          const elementsWithOverflow = textElements.filter(el => hasTextOverflow(el));
          
          if (elementsWithOverflow.length > 0) {
            console.error(`Page: ${page.name}, Viewport: ${viewportWidth}px`);
            console.error('Elements with overflow:', elementsWithOverflow.map(el => ({
              tag: el.tagName,
              text: el.textContent?.substring(0, 50),
              scrollWidth: el.scrollWidth,
              clientWidth: el.clientWidth,
            })));
          }
          
          expect(elementsWithOverflow.length).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Typography should scale smoothly between mobile breakpoints
   * (font sizes should not jump dramatically)
   */
  it('should scale typography smoothly between mobile breakpoints', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        (page) => {
          // Render at different mobile widths
          const { container: container375 } = renderPageAtViewport(page.component, 375);
          const { container: container390 } = renderPageAtViewport(page.component, 390);
          const { container: container428 } = renderPageAtViewport(page.component, 428);
          
          // Get heading elements from each render
          const headings375 = container375.querySelectorAll('h1, h2, h3, h4, h5, h6');
          const headings390 = container390.querySelectorAll('h1, h2, h3, h4, h5, h6');
          const headings428 = container428.querySelectorAll('h1, h2, h3, h4, h5, h6');
          
          // Property: Font sizes should not vary dramatically between breakpoints
          // (allowing for some variation due to responsive design)
          if (headings375.length > 0 && headings390.length > 0 && headings428.length > 0) {
            const fontSize375 = parseFloat(window.getComputedStyle(headings375[0]).fontSize);
            const fontSize390 = parseFloat(window.getComputedStyle(headings390[0]).fontSize);
            const fontSize428 = parseFloat(window.getComputedStyle(headings428[0]).fontSize);
            
            // Font sizes should be within reasonable range (not more than 50% difference)
            const maxSize = Math.max(fontSize375, fontSize390, fontSize428);
            const minSize = Math.min(fontSize375, fontSize390, fontSize428);
            const variation = (maxSize - minSize) / minSize;
            
            expect(variation).toBeLessThanOrEqual(0.5); // Max 50% variation
          }
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property: All text should be readable (minimum font size)
   */
  it('should maintain minimum readable font size across mobile range', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        fc.constantFrom(375, 390, 428),
        (page, viewportWidth) => {
          const { container } = renderPageAtViewport(page.component, viewportWidth);
          
          // Get all text elements
          const textElements = getAllTextElements(container);
          
          // Property: All visible text should have minimum 14px font size
          const tooSmallElements = textElements.filter(el => {
            const styles = window.getComputedStyle(el);
            
            // Skip hidden elements
            if (styles.display === 'none' || styles.visibility === 'hidden') {
              return false;
            }
            
            const fontSize = parseFloat(styles.fontSize);
            return fontSize < 14;
          });
          
          if (tooSmallElements.length > 0) {
            console.error(`Page: ${page.name}, Viewport: ${viewportWidth}px`);
            console.error('Elements with font size < 14px:', tooSmallElements.map(el => ({
              tag: el.tagName,
              text: el.textContent?.substring(0, 30),
              fontSize: parseFloat(window.getComputedStyle(el).fontSize),
            })));
          }
          
          expect(tooSmallElements.length).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Line height should be appropriate for readability
   */
  it('should maintain appropriate line height for readability', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        fc.constantFrom(375, 390, 428),
        (page, viewportWidth) => {
          const { container } = renderPageAtViewport(page.component, viewportWidth);
          
          // Get paragraph elements (body text)
          const paragraphs = container.querySelectorAll('p');
          
          // Property: Line height should be at least 1.2 for readability
          const poorLineHeight = Array.from(paragraphs).filter(p => {
            const styles = window.getComputedStyle(p);
            
            // Skip hidden elements
            if (styles.display === 'none' || styles.visibility === 'hidden') {
              return false;
            }
            
            const lineHeight = styles.lineHeight;
            const fontSize = parseFloat(styles.fontSize);
            
            // Calculate line height ratio
            let lineHeightRatio = 1.2;
            if (lineHeight !== 'normal') {
              const lineHeightPx = parseFloat(lineHeight);
              lineHeightRatio = lineHeightPx / fontSize;
            }
            
            return lineHeightRatio < 1.2;
          });
          
          expect(poorLineHeight.length).toBe(0);
        }
      ),
      { numRuns: 50 }
    );
  });
});
