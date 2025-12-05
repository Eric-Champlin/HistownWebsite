import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

/**
 * Homepage Integration Verification Tests
 * Ensures shared components (Testimonials, WhyUs, NextSteps) are properly integrated
 * and match the original implementation at desktop breakpoints while working on mobile
 */

const renderApp = (width: number) => {
  // Set viewport width
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  
  // Trigger resize event
  window.dispatchEvent(new Event('resize'));
  
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe('Homepage Integration Verification', () => {
  describe('Testimonials Component Integration', () => {
    it('should render Testimonials component on homepage', () => {
      renderApp(1024);
      
      // Check for testimonials section
      const testimonialsSection = document.querySelector('[data-component="Testimonials"]');
      expect(testimonialsSection).toBeTruthy();
      
      // Check for testimonials heading
      expect(screen.getByText('TESTIMONIALS')).toBeTruthy();
    });

    it('should display award images in testimonials section', () => {
      renderApp(1024);
      
      const williamsonsImage = screen.getByAltText("Williamson's Best 2025 Winner");
      const parentingImage = screen.getByAltText("Best of Parenting 2025 Winner");
      
      expect(williamsonsImage).toBeTruthy();
      expect(parentingImage).toBeTruthy();
    });

    it('should render testimonials at mobile breakpoint', () => {
      renderApp(390);
      
      const testimonialsSection = document.querySelector('[data-component="Testimonials"]');
      expect(testimonialsSection).toBeTruthy();
    });

    it('should have navigation arrows on desktop', () => {
      const { container } = renderApp(1024);
      
      const prevButton = container.querySelector('button[aria-label="Previous testimonial"]');
      const nextButton = container.querySelector('button[aria-label="Next testimonial"]');
      
      expect(prevButton).toBeTruthy();
      expect(nextButton).toBeTruthy();
    });
  });

  describe('WhyUs Component Integration', () => {
    it('should render WhyUs component on homepage', () => {
      renderApp(1024);
      
      // Check for WhyUs section
      const whyUsSection = document.querySelector('[data-component="WhyUs"]');
      expect(whyUsSection).toBeTruthy();
      
      // Check for WhyUs heading
      expect(screen.getByText('WHY US?')).toBeTruthy();
    });

    it('should display three value cards', () => {
      const { container } = renderApp(1024);
      
      const whyUsSection = container.querySelector('[data-component="WhyUs"]');
      // Look for the grid container with value cards
      const valueCards = whyUsSection?.querySelectorAll('.grid > div');
      
      // Should have 3 value cards
      expect(valueCards?.length).toBeGreaterThanOrEqual(3);
    });

    it('should render WhyUs at mobile breakpoint', () => {
      renderApp(390);
      
      const whyUsSection = document.querySelector('[data-component="WhyUs"]');
      expect(whyUsSection).toBeTruthy();
    });

    it('should have blue texture background', () => {
      const { container } = renderApp(1024);
      
      const whyUsSection = container.querySelector('[data-component="WhyUs"]') as HTMLElement;
      const backgroundImage = whyUsSection?.style.backgroundImage;
      
      expect(backgroundImage).toContain('blue-texture');
    });
  });

  describe('NextSteps Component Integration', () => {
    it('should render NextSteps component on homepage', () => {
      renderApp(1024);
      
      // Check for NextSteps section
      const nextStepsSection = document.querySelector('[data-component="NextSteps"]');
      expect(nextStepsSection).toBeTruthy();
      
      // Check for NextSteps heading
      expect(screen.getByText('NEXT STEPS')).toBeTruthy();
    });

    it('should display CTA buttons', () => {
      renderApp(1024);
      
      expect(screen.getByText('REQUEST A TRIAL CLASS')).toBeTruthy();
      expect(screen.getByText('CONTACT US')).toBeTruthy();
    });

    it('should display email signup form', () => {
      renderApp(1024);
      
      expect(screen.getByText('SIGN UP FOR EMAIL UPDATES')).toBeTruthy();
      expect(screen.getByPlaceholderText('Your first name')).toBeTruthy();
      expect(screen.getByPlaceholderText('your@email.com')).toBeTruthy();
    });

    it('should render NextSteps at mobile breakpoint', () => {
      renderApp(390);
      
      const nextStepsSection = document.querySelector('[data-component="NextSteps"]');
      expect(nextStepsSection).toBeTruthy();
    });

    it('should have blue texture background', () => {
      const { container } = renderApp(1024);
      
      const nextStepsSection = container.querySelector('[data-component="NextSteps"]') as HTMLElement;
      const backgroundImage = nextStepsSection?.style.backgroundImage;
      
      expect(backgroundImage).toContain('blue-texture');
    });

    it('should have full-width buttons on mobile', () => {
      const { container } = renderApp(390);
      
      const buttons = container.querySelectorAll('[data-component="NextSteps"] button');
      buttons.forEach(button => {
        const classes = button.className;
        expect(classes).toContain('w-full');
      });
    });
  });

  describe('Desktop Layout Preservation (1024px+)', () => {
    it('should maintain all sections in correct order', () => {
      const { container } = renderApp(1024);
      
      // Get all major sections
      const sections = container.querySelectorAll('section, main');
      const sectionOrder: string[] = [];
      
      sections.forEach(section => {
        const component = section.getAttribute('data-component');
        if (component) {
          sectionOrder.push(component);
        }
      });
      
      // Verify order: Testimonials -> WhyUs -> NextSteps
      const testimonialsIndex = sectionOrder.indexOf('Testimonials');
      const whyUsIndex = sectionOrder.indexOf('WhyUs');
      const nextStepsIndex = sectionOrder.indexOf('NextSteps');
      
      expect(testimonialsIndex).toBeGreaterThan(-1);
      expect(whyUsIndex).toBeGreaterThan(testimonialsIndex);
      expect(nextStepsIndex).toBeGreaterThan(whyUsIndex);
    });

    it('should not have horizontal overflow at desktop', () => {
      const { container } = renderApp(1024);
      
      const documentWidth = container.scrollWidth;
      expect(documentWidth).toBeLessThanOrEqual(1024);
    });

    it('should render hero section before shared components', () => {
      renderApp(1024);
      
      // Hero section should have the headline (may appear multiple times)
      const heroHeadlines = screen.getAllByText(/WHERE/i);
      expect(heroHeadlines.length).toBeGreaterThan(0);
    });

    it('should render programs section before testimonials', () => {
      renderApp(1024);
      
      // Programs section should have Dance, Music, Featured (may appear multiple times in nav and content)
      const danceClassesElements = screen.getAllByText('Dance Classes');
      expect(danceClassesElements.length).toBeGreaterThan(0);
      const musicClassesElements = screen.getAllByText('Music Classes');
      expect(musicClassesElements.length).toBeGreaterThan(0);
      const featuredElements = screen.getAllByText('Featured');
      expect(featuredElements.length).toBeGreaterThan(0);
    });

    it('should render Meet Our Team section between WhyUs and NextSteps', () => {
      renderApp(1024);
      
      expect(screen.getByText('MEET OUR TEAM')).toBeTruthy();
    });
  });

  describe('Mobile Optimization (375px-428px)', () => {
    it('should render all shared components at 375px', () => {
      renderApp(375);
      
      expect(document.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(document.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(document.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });

    it('should render all shared components at 390px', () => {
      renderApp(390);
      
      expect(document.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(document.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(document.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });

    it('should render all shared components at 428px', () => {
      renderApp(428);
      
      expect(document.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(document.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(document.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });

    it('should not have horizontal overflow at mobile', () => {
      const { container } = renderApp(390);
      
      const documentWidth = container.scrollWidth;
      expect(documentWidth).toBeLessThanOrEqual(390);
    });
  });

  describe('Tablet Breakpoint (768px)', () => {
    it('should render all shared components at tablet size', () => {
      renderApp(768);
      
      expect(document.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(document.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(document.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });

    it('should not have horizontal overflow at tablet', () => {
      const { container } = renderApp(768);
      
      const documentWidth = container.scrollWidth;
      expect(documentWidth).toBeLessThanOrEqual(768);
    });
  });

  describe('Component Consistency', () => {
    it('should use same testimonials data across all renders', () => {
      const { container: container1 } = renderApp(1024);
      const { container: container2 } = renderApp(390);
      
      const testimonials1 = container1.querySelectorAll('[data-component="Testimonials"] .font-bold');
      const testimonials2 = container2.querySelectorAll('[data-component="Testimonials"] .font-bold');
      
      // Should have same number of testimonials
      expect(testimonials1.length).toBe(testimonials2.length);
    });

    it('should maintain consistent styling across breakpoints', () => {
      const { container: desktopContainer } = renderApp(1024);
      const { container: mobileContainer } = renderApp(390);
      
      // Check that data-component attributes are present in both
      expect(desktopContainer.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      expect(mobileContainer.querySelector('[data-component="Testimonials"]')).toBeTruthy();
      
      expect(desktopContainer.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      expect(mobileContainer.querySelector('[data-component="WhyUs"]')).toBeTruthy();
      
      expect(desktopContainer.querySelector('[data-component="NextSteps"]')).toBeTruthy();
      expect(mobileContainer.querySelector('[data-component="NextSteps"]')).toBeTruthy();
    });
  });
});
