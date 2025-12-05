import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Programs from '../pages/Programs';

describe('Programs Page Mobile Optimization', () => {
  it('should render Programs page without errors', () => {
    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );
    
    expect(container).toBeTruthy();
  });

  it('should have mobile-optimized hero section', () => {
    // Set mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 390,
    });

    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );

    // Check that hero section exists
    const heroSection = container.querySelector('section');
    expect(heroSection).toBeTruthy();
  });

  it('should integrate shared components', () => {
    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );

    // Check for shared components
    const testimonials = container.querySelector('[data-component="Testimonials"]');
    const whyUs = container.querySelector('[data-component="WhyUs"]');
    const nextSteps = container.querySelector('[data-component="NextSteps"]');
    const footer = container.querySelector('[data-component="Footer"]');

    expect(testimonials).toBeTruthy();
    expect(whyUs).toBeTruthy();
    expect(nextSteps).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should have mobile-first responsive classes on program cards', () => {
    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );

    // Find program cards grid
    const programsGrid = container.querySelector('.grid');
    expect(programsGrid).toBeTruthy();
    
    // Check for mobile-first grid classes
    const hasGridCols1 = programsGrid?.className.includes('grid-cols-1');
    const hasMdGridCols2 = programsGrid?.className.includes('md:grid-cols-2');
    
    expect(hasGridCols1).toBe(true);
    expect(hasMdGridCols2).toBe(true);
  });

  it('should have mobile-optimized program card buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );

    // Find program card buttons
    const buttons = container.querySelectorAll('a[href^="/classes"], a[href="/tuition-fees"]');
    
    // Should have at least 4 program cards (Dance, Music, Featured, Tuition)
    expect(buttons.length).toBeGreaterThanOrEqual(4);
  });

  it('should have mobile-optimized footer with touch targets', () => {
    const { container } = render(
      <BrowserRouter>
        <Programs />
      </BrowserRouter>
    );

    const footer = container.querySelector('[data-component="Footer"]');
    expect(footer).toBeTruthy();

    // Check for social media icons with adequate touch targets
    const socialIcons = footer?.querySelectorAll('a[href*="instagram"], a[href*="facebook"]');
    expect(socialIcons).toBeTruthy();
    expect(socialIcons!.length).toBeGreaterThan(0);

    // Social icons should have w-12 h-12 on mobile (48px touch target)
    socialIcons?.forEach(icon => {
      const hasLargeTouchTarget = icon.className.includes('w-12') && icon.className.includes('h-12');
      expect(hasLargeTouchTarget).toBe(true);
    });
  });
});
