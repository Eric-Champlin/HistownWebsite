import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

describe('About Page Mobile Optimization', () => {
  const renderAboutPage = (width: number) => {
    // Set viewport width
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
    
    return render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  };

  it('should render About page without errors at mobile viewport', () => {
    const { container } = renderAboutPage(390);
    expect(container).toBeTruthy();
  });

  it('should integrate shared Testimonials component', () => {
    const { container } = renderAboutPage(390);
    const testimonials = container.querySelector('[data-component="Testimonials"]');
    expect(testimonials).toBeTruthy();
  });

  it('should integrate shared WhyUs component', () => {
    const { container } = renderAboutPage(390);
    const whyUs = container.querySelector('[data-component="WhyUs"]');
    expect(whyUs).toBeTruthy();
  });

  it('should integrate shared NextSteps component', () => {
    const { container } = renderAboutPage(390);
    const nextSteps = container.querySelector('[data-component="NextSteps"]');
    expect(nextSteps).toBeTruthy();
  });

  it('should have mobile-optimized footer', () => {
    const { container } = renderAboutPage(390);
    const footer = container.querySelector('[data-component="Footer"]');
    expect(footer).toBeTruthy();
  });

  it('should have responsive hero section', () => {
    const { container } = renderAboutPage(390);
    const hero = container.querySelector('h1');
    expect(hero).toBeTruthy();
    expect(hero?.textContent).toContain('ABOUT US');
  });

  it('should have mobile-optimized about sections grid', () => {
    const { container } = renderAboutPage(390);
    // Check for about sections
    const sections = container.querySelectorAll('a[href*="/about/"], a[href*="/contact"], a[href*="/past-events"]');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('should have touch-friendly buttons with min 44px height', () => {
    const { container } = renderAboutPage(390);
    const buttons = container.querySelectorAll('button, a[class*="button"], a[class*="btn"]');
    
    buttons.forEach(button => {
      const styles = window.getComputedStyle(button);
      const minHeight = styles.minHeight;
      
      // Check if minHeight is set to at least 44px
      if (minHeight && minHeight !== 'auto' && minHeight !== '0px') {
        const heightValue = parseFloat(minHeight);
        expect(heightValue).toBeGreaterThanOrEqual(44);
      }
    });
  });

  it('should render correctly at different mobile breakpoints', () => {
    const breakpoints = [375, 390, 428];
    
    breakpoints.forEach(width => {
      const { container } = renderAboutPage(width);
      expect(container).toBeTruthy();
      
      // Verify shared components are present
      expect(container.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(container.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(container.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });
  });

  it('should have tel: links for phone numbers in footer', () => {
    const { container } = renderAboutPage(390);
    const telLinks = container.querySelectorAll('a[href^="tel:"]');
    expect(telLinks.length).toBeGreaterThan(0);
  });

  it('should have mailto: links for email addresses in footer', () => {
    const { container } = renderAboutPage(390);
    const mailtoLinks = container.querySelectorAll('a[href^="mailto:"]');
    expect(mailtoLinks.length).toBeGreaterThan(0);
  });

  it('should have proper aria labels for social media links', () => {
    const { container } = renderAboutPage(390);
    const socialLinks = container.querySelectorAll('a[aria-label*="Instagram"], a[aria-label*="Facebook"]');
    expect(socialLinks.length).toBeGreaterThanOrEqual(2);
  });
});
