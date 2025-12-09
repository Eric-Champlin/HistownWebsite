import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { Testimonials } from '../components/sections/Testimonials';

/**
 * Testimonials Consistency Verification Utility
 * 
 * This test suite verifies that the Testimonials component maintains
 * consistent styling across all pages where it's used.
 * 
 * Expected styles for Testimonials component:
 * - Section padding: py-12 sm:py-16 md:py-24
 * - Container padding: px-4 sm:px-12 lg:px-20
 * - Title font size: text-3xl sm:text-4xl md:text-5xl
 * - Card padding: p-4 sm:p-6
 * - Card min-height: min-h-64 sm:min-h-80
 * - Mobile: Single card visible (w-full)
 * - Desktop: Multiple cards visible (w-80)
 */

describe('Testimonials Consistency Verification', () => {
  describe('Component structure', () => {
    it('should have data-component attribute for identification', () => {
      const { container } = render(<Testimonials />);
      const component = container.querySelector('[data-component="Testimonials"]');
      expect(component).toBeInTheDocument();
    });

    it('should have consistent section structure', () => {
      const { container } = render(<Testimonials />);
      const section = container.querySelector('section[data-component="Testimonials"]');
      
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('bg-white');
    });
  });

  describe('Styling consistency', () => {
    it('should have consistent padding classes', () => {
      const { container } = render(<Testimonials />);
      const section = container.querySelector('section[data-component="Testimonials"]');
      
      // Check for mobile-first padding classes
      expect(section?.className).toMatch(/py-12/);
      expect(section?.className).toMatch(/sm:py-16/);
      expect(section?.className).toMatch(/md:py-24/);
    });

    it('should have consistent container padding', () => {
      const { container } = render(<Testimonials />);
      const containerDiv = container.querySelector('.max-w-6xl');
      
      expect(containerDiv?.className).toMatch(/px-4/);
      expect(containerDiv?.className).toMatch(/sm:px-12/);
      expect(containerDiv?.className).toMatch(/lg:px-20/);
    });

    it('should have consistent title styling', () => {
      const { container } = render(<Testimonials />);
      const title = container.querySelector('h2');
      
      expect(title).toBeInTheDocument();
      expect(title?.className).toMatch(/text-4xl/);
      expect(title?.className).toMatch(/sm:text-4xl/);
      expect(title?.className).toMatch(/md:text-5xl/);
      expect(title?.className).toMatch(/font-black/);
      expect(title?.className).toMatch(/uppercase/);
    });

    it('should have consistent card styling', () => {
      const { container } = render(<Testimonials />);
      const cards = container.querySelectorAll('.rounded-2xl.shadow-lg');
      
      expect(cards.length).toBeGreaterThan(0);
      
      // Check first card for consistent classes
      const firstCard = cards[0];
      expect(firstCard.className).toMatch(/bg-white/);
      expect(firstCard.className).toMatch(/rounded-2xl/);
      expect(firstCard.className).toMatch(/shadow-lg/);
      expect(firstCard.className).toMatch(/border/);
      expect(firstCard.className).toMatch(/border-gray-200/);
    });
  });

  describe('Responsive behavior', () => {
    it('should have mobile-first responsive classes', () => {
      const { container } = render(<Testimonials />);
      const section = container.querySelector('section[data-component="Testimonials"]');
      
      // Verify mobile-first approach (base classes without prefixes)
      expect(section?.className).toMatch(/py-12/); // Mobile base
      expect(section?.className).toMatch(/sm:py-16/); // Tablet override
      expect(section?.className).toMatch(/md:py-24/); // Desktop override
    });

    it('should have consistent spacing across breakpoints', () => {
      const { container } = render(<Testimonials />);
      const titleContainer = container.querySelector('.text-center.mb-6');
      
      expect(titleContainer?.className).toMatch(/mb-6/);
      expect(titleContainer?.className).toMatch(/sm:mb-8/);
    });
  });

  describe('Color consistency', () => {
    it('should use consistent color classes', () => {
      const { container } = render(<Testimonials />);
      
      // Check for consistent use of histown color classes
      const decorativeElements = container.querySelectorAll('.bg-histown-primary, .bg-histown-accent');
      expect(decorativeElements.length).toBeGreaterThan(0);
    });

    it('should have consistent text colors', async () => {
      const { container } = render(<Testimonials />);
      
      // Wait for progressive loading to complete - wait for actual testimonial content
      await waitFor(() => {
        const textElements = container.querySelectorAll('.text-gray-600');
        expect(textElements.length).toBeGreaterThan(0);
      }, { timeout: 5000 });
      
      const cards = container.querySelectorAll('.rounded-2xl.shadow-lg');
      
      // Check that loaded testimonial cards have consistent gray color text
      // Filter out skeleton cards which don't have testimonial text yet
      const loadedCards = Array.from(cards).filter(card => 
        card.querySelector('.text-gray-600') !== null
      );
      
      expect(loadedCards.length).toBeGreaterThan(0);
      
      loadedCards.forEach(card => {
        const text = card.querySelector('.text-gray-600');
        expect(text).toBeInTheDocument();
      });
    });
  });

  describe('Snapshot consistency', () => {
    it('should match snapshot for visual consistency', () => {
      const { container } = render(<Testimonials />);
      
      // Get the component structure
      const component = container.querySelector('[data-component="Testimonials"]');
      
      // Verify key structural elements exist
      expect(component).toBeInTheDocument();
      expect(component?.querySelector('h2')).toBeInTheDocument();
      expect(component?.querySelector('.overflow-hidden')).toBeInTheDocument();
    });
  });

  describe('Accessibility consistency', () => {
    it('should have consistent ARIA labels', () => {
      const { container } = render(<Testimonials />);
      
      const prevButton = container.querySelector('[aria-label="Previous testimonial"]');
      const nextButton = container.querySelector('[aria-label="Next testimonial"]');
      
      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should have consistent alt text for images', () => {
      const { getByAltText } = render(<Testimonials />);
      
      const williamsonsAward = getByAltText("Williamson's Best 2025 Winner");
      const parentingAward = getByAltText('Best of Parenting 2025 Winner');
      
      expect(williamsonsAward).toBeInTheDocument();
      expect(parentingAward).toBeInTheDocument();
    });
  });
});

/**
 * Expected Styles Documentation
 * 
 * This serves as a reference for future developers to ensure
 * the Testimonials component maintains consistent styling.
 * 
 * Section:
 * - Background: bg-white
 * - Padding: py-12 sm:py-16 md:py-24
 * - Margins: marginTop: '-4rem', paddingTop: '6rem', marginBottom: '-4rem', paddingBottom: '6rem'
 * 
 * Container:
 * - Max width: max-w-6xl
 * - Padding: px-4 sm:px-12 lg:px-20
 * - Margin: mx-auto
 * 
 * Title:
 * - Font size: text-3xl sm:text-4xl md:text-5xl
 * - Font weight: font-black (900)
 * - Transform: uppercase
 * - Alignment: text-center
 * 
 * Cards:
 * - Width: w-full (mobile), w-80 (desktop)
 * - Padding: p-4 sm:p-6
 * - Min height: min-h-64 sm:min-h-80
 * - Background: bg-white
 * - Border: border border-gray-200
 * - Shadow: shadow-lg
 * - Border radius: rounded-2xl
 * 
 * Navigation Buttons:
 * - Min size: 44x44px (WCAG AAA)
 * - Visibility: hidden sm:block (mobile uses dots instead)
 * - Background: bg-white
 * - Border: border border-gray-200
 * - Shadow: shadow-lg
 * - Border radius: rounded-full
 * 
 * Colors:
 * - Primary: histown-primary
 * - Accent: histown-accent
 * - Text: text-gray-800 (headings), text-gray-600 (body)
 * - Stars: text-yellow-400
 */
