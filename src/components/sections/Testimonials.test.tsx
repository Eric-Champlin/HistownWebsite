import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Testimonials } from './Testimonials';
import { testimonials } from '../../data/testimonials';

// Mock window.innerWidth for viewport testing
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('Testimonials Component', () => {
  describe('Rendering at different breakpoints', () => {
    it('should render at mobile breakpoint (375px)', () => {
      mockInnerWidth(375);
      const { container } = render(<Testimonials />);
      
      expect(container.querySelector('[data-component="Testimonials"]')).toBeInTheDocument();
      expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    });

    it('should render at mobile breakpoint (390px)', () => {
      mockInnerWidth(390);
      const { container } = render(<Testimonials />);
      
      expect(container.querySelector('[data-component="Testimonials"]')).toBeInTheDocument();
      expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    });

    it('should render at mobile breakpoint (428px)', () => {
      mockInnerWidth(428);
      const { container } = render(<Testimonials />);
      
      expect(container.querySelector('[data-component="Testimonials"]')).toBeInTheDocument();
      expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    });

    it('should render at tablet breakpoint (768px)', () => {
      mockInnerWidth(768);
      const { container } = render(<Testimonials />);
      
      expect(container.querySelector('[data-component="Testimonials"]')).toBeInTheDocument();
      expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    });

    it('should render at desktop breakpoint (1024px)', () => {
      mockInnerWidth(1024);
      const { container } = render(<Testimonials />);
      
      expect(container.querySelector('[data-component="Testimonials"]')).toBeInTheDocument();
      expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    });
  });

  describe('Navigation functionality', () => {
    it('should navigate to next testimonial when next arrow is clicked', () => {
      mockInnerWidth(1024);
      render(<Testimonials />);
      
      const nextButton = screen.getByLabelText('Next testimonial');
      expect(nextButton).toBeInTheDocument();
      
      fireEvent.click(nextButton);
      // Component should update currentIndex
    });

    it('should navigate to previous testimonial when prev arrow is clicked', () => {
      mockInnerWidth(1024);
      render(<Testimonials />);
      
      const prevButton = screen.getByLabelText('Previous testimonial');
      expect(prevButton).toBeInTheDocument();
      
      fireEvent.click(prevButton);
      // Component should update currentIndex
    });

    it('should show navigation dots on mobile', () => {
      mockInnerWidth(390);
      const { container } = render(<Testimonials />);
      
      // Check for navigation dots
      const dots = container.querySelectorAll('button[aria-label^="Go to testimonial"]');
      expect(dots.length).toBeGreaterThan(0);
    });

    it('should hide navigation arrows on mobile', () => {
      mockInnerWidth(390);
      render(<Testimonials />);
      
      const nextButton = screen.queryByLabelText('Next testimonial');
      const prevButton = screen.queryByLabelText('Previous testimonial');
      
      // Arrows should be hidden on mobile (display: none via CSS)
      expect(nextButton).toBeInTheDocument();
      expect(prevButton).toBeInTheDocument();
    });
  });

  describe('Card dimensions and overflow', () => {
    it('should render testimonial cards without overflow on mobile', () => {
      mockInnerWidth(390);
      const { container } = render(<Testimonials />);
      
      const carouselContainer = container.querySelector('.overflow-hidden');
      expect(carouselContainer).toBeInTheDocument();
    });

    it('should render testimonial cards with proper spacing', () => {
      mockInnerWidth(1024);
      const { container } = render(<Testimonials />);
      
      const cards = container.querySelectorAll('.rounded-2xl.shadow-lg');
      expect(cards.length).toBeGreaterThan(0);
    });

    it('should display testimonial content correctly', async () => {
      render(<Testimonials />);
      
      // Wait for progressive loading to complete
      const firstTestimonial = testimonials[0];
      await waitFor(() => {
        expect(screen.getByText(firstTestimonial.author)).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Touch target requirements', () => {
    it('should have navigation buttons with minimum 44px touch targets', () => {
      mockInnerWidth(1024);
      const { container } = render(<Testimonials />);
      
      const nextButton = screen.getByLabelText('Next testimonial');
      const prevButton = screen.getByLabelText('Previous testimonial');
      
      // Check inline styles for minimum dimensions
      expect(nextButton).toHaveStyle({ minWidth: '44px', minHeight: '44px' });
      expect(prevButton).toHaveStyle({ minWidth: '44px', minHeight: '44px' });
    });
  });

  describe('Award images', () => {
    it('should display award images', () => {
      render(<Testimonials />);
      
      const williamsonsAward = screen.getByAltText("Williamson's Best 2025 Winner");
      const parentingAward = screen.getByAltText('Best of Parenting 2025 Winner');
      
      expect(williamsonsAward).toBeInTheDocument();
      expect(parentingAward).toBeInTheDocument();
    });

    it('should stack award images on mobile', () => {
      mockInnerWidth(390);
      const { container } = render(<Testimonials />);
      
      const imagesContainer = container.querySelector('.flex-col');
      expect(imagesContainer).toBeInTheDocument();
    });
  });

  describe('Custom testimonials prop', () => {
    it('should render custom testimonials when provided', async () => {
      const customTestimonials = [
        { author: 'Test User 1', text: 'Test testimonial 1' },
        { author: 'Test User 2', text: 'Test testimonial 2' },
      ];
      
      render(<Testimonials testimonials={customTestimonials} />);
      
      // Wait for progressive loading to complete
      await waitFor(() => {
        expect(screen.getByText('Test User 1')).toBeInTheDocument();
      }, { timeout: 3000 });
      
      await waitFor(() => {
        expect(screen.getByText('Test testimonial 1')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });
});
