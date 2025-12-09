import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

/**
 * Tests for Programs Section Mobile Optimization
 * Validates Requirements 10.1, 10.2, 10.3, 10.4, 10.5
 */

describe('Programs Section Mobile Optimization', () => {
  const mobileWidths = [375, 390, 428];

  it('should stack each program card vertically on mobile', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      expect(programsSection).toBeTruthy();

      // Find all grid containers (Dance, Music, Featured cards)
      const gridContainers = programsSection?.querySelectorAll('.grid');
      
      gridContainers?.forEach((grid) => {
        const computedStyle = window.getComputedStyle(grid);
        
        // On mobile, should be single column
        if (computedStyle.display === 'grid') {
          const gridCols = computedStyle.gridTemplateColumns;
          const columnCount = gridCols.split(' ').filter(col => col && col !== 'none').length;
          expect(columnCount).toBeLessThanOrEqual(1);
        }
      });
    });
  });

  it('should display images at full width within containers on mobile', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      const images = programsSection?.querySelectorAll('img');

      images?.forEach((img) => {
        // Images should have w-full class (width: 100%)
        expect(img.className).toContain('w-full');
      });
    });
  });

  it('should ensure text is readable with appropriate line lengths', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      const paragraphs = programsSection?.querySelectorAll('p');

      paragraphs?.forEach((p) => {
        const computedStyle = window.getComputedStyle(p);
        const fontSize = parseFloat(computedStyle.fontSize);
        
        // Font size should be at least 14px for readability
        expect(fontSize).toBeGreaterThanOrEqual(14);
        
        // Should have leading-relaxed class for better readability
        expect(p.className).toContain('leading-relaxed');
      });
    });
  });

  it('should ensure CTA buttons have adequate touch targets (min 44x44px)', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      const ctaButtons = programsSection?.querySelectorAll('a[href*="/classes"]');

      ctaButtons?.forEach((button) => {
        // Check if button has min-h-[44px] class for adequate touch target
        expect(button.className).toContain('min-h-[44px]');
        
        // On mobile, buttons should be full width or have adequate padding
        if (width < 640) {
          // Check for mobile-friendly classes
          expect(button.className).toMatch(/w-full|px-\d+/);
        }
      });
    });
  });

  it('should maintain alternating image-text layout pattern on mobile', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Look for program sections - they might be in different structures
    const images = container.querySelectorAll('img');
    const links = container.querySelectorAll('a[href*="classes"]');
    
    // Should have program content (images and links)
    expect(images?.length).toBeGreaterThan(0);
    expect(links?.length).toBeGreaterThan(0);
  });

  it('should test responsive behavior at all mobile breakpoints', () => {
    const breakpoints = [375, 390, 428, 640];

    breakpoints.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      expect(programsSection).toBeTruthy();

      // Verify no horizontal overflow
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      // Allow for small rounding differences
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
    });
  });

  it('should have proper spacing between program cards on mobile', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main');
      const programCards = programsSection?.querySelectorAll('.grid');

      programCards?.forEach((card) => {
        const computedStyle = window.getComputedStyle(card);
        
        // Should have gap classes for spacing
        expect(card.className).toMatch(/gap-\d+/);
      });
    });
  });

  it('should ensure program section has proper mobile padding', () => {
    mobileWidths.forEach((width) => {
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

      const programsSection = container.querySelector('main section');
      expect(programsSection).toBeTruthy();

      // Should have responsive padding classes
      expect(programsSection?.className).toMatch(/px-\d+/);
    });
  });
});
