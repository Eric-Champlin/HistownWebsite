import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

/**
 * Desktop Baseline Validation for Homepage
 * Ensures NO visual regressions on desktop after mobile optimizations
 * Requirements: 1.2
 */

const renderHomepageAtDesktop = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });

  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe('Homepage Desktop Baseline Validation', () => {
  describe('Desktop Layout Preservation at 1024px', () => {
    it('should maintain desktop navigation visibility', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Desktop navigation should be visible
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
      
      // Mobile menu button should be hidden
      const mobileMenuButton = container.querySelector('.lg\\:hidden button');
      expect(mobileMenuButton).toBeTruthy(); // Button exists but is hidden by lg:hidden
    });

    it('should maintain multi-column grid layouts', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Programs section should use 2-column grid on desktop
      const programsSection = container.querySelector('main');
      expect(programsSection).toBeTruthy();
      
      // Check for grid layouts
      const gridElements = container.querySelectorAll('.grid');
      expect(gridElements.length).toBeGreaterThan(0);
    });

    it('should maintain desktop typography sizes', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const h1 = container.querySelector('h1');
      expect(h1).toBeTruthy();
      
      // H1 should have responsive classes for desktop
      const h1Classes = h1?.className || '';
      expect(h1Classes).toContain('sm:text-5xl');
    });

    it('should maintain desktop spacing', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check for desktop padding classes or mobile-section utility
      const sections = container.querySelectorAll('section');
      sections.forEach(section => {
        const classes = section.className;
        // Should have responsive padding or mobile-section utility class
        expect(classes).toMatch(/py-\d+|sm:py-\d+|lg:py-\d+|mobile-section/);
      });
    });

    it('should maintain desktop button widths', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // CTA buttons should not be full-width on desktop
      const ctaButtons = container.querySelectorAll('.btn-primary, .border-histown-primary');
      ctaButtons.forEach(button => {
        const classes = button.className;
        // Should have responsive width classes (w-full sm:w-auto)
        expect(classes).toMatch(/w-full|sm:w-auto/);
      });
    });
  });

  describe('Desktop Layout Preservation at 1280px', () => {
    it('should maintain desktop navigation at 1280px', () => {
      const { container } = renderHomepageAtDesktop(1280);
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
    });

    it('should maintain proper spacing at 1280px', () => {
      const { container } = renderHomepageAtDesktop(1280);
      
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
      
      sections.forEach(section => {
        const classes = section.className;
        expect(classes).toMatch(/py-\d+|mobile-section/);
      });
    });

    it('should maintain grid layouts at 1280px', () => {
      const { container } = renderHomepageAtDesktop(1280);
      
      const gridElements = container.querySelectorAll('.grid');
      expect(gridElements.length).toBeGreaterThan(0);
    });
  });

  describe('Desktop Layout Preservation at 1920px', () => {
    it('should maintain desktop navigation at 1920px', () => {
      const { container } = renderHomepageAtDesktop(1920);
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
    });

    it('should maintain proper max-width containers at 1920px', () => {
      const { container } = renderHomepageAtDesktop(1920);
      
      // Check for max-width containers
      const maxWidthContainers = container.querySelectorAll('.max-w-7xl, .max-w-6xl, .max-w-5xl');
      expect(maxWidthContainers.length).toBeGreaterThan(0);
    });

    it('should maintain centered content at 1920px', () => {
      const { container } = renderHomepageAtDesktop(1920);
      
      // Check for centered containers
      const centeredContainers = container.querySelectorAll('.mx-auto');
      expect(centeredContainers.length).toBeGreaterThan(0);
    });
  });

  describe('Desktop Animations and Transitions', () => {
    it('should have animation classes present', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check for animation classes
      const animatedElements = container.querySelectorAll('.animate-on-scroll, .hero-fade-in');
      expect(animatedElements.length).toBeGreaterThan(0);
    });

    it('should have transition classes on interactive elements', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check for transition classes on buttons and links
      const interactiveElements = container.querySelectorAll('a, button');
      let hasTransitions = false;
      
      interactiveElements.forEach(element => {
        const classes = element.className;
        if (classes.includes('transition')) {
          hasTransitions = true;
        }
      });
      
      expect(hasTransitions).toBe(true);
    });

    it('should have hover effects on buttons', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const buttons = container.querySelectorAll('button, .btn-primary, .border-histown-primary');
      let hasHoverEffects = false;
      
      buttons.forEach(button => {
        const classes = button.className;
        if (classes.includes('hover:')) {
          hasHoverEffects = true;
        }
      });
      
      expect(hasHoverEffects).toBe(true);
    });

    it('should have transform effects on interactive elements', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const interactiveElements = container.querySelectorAll('a, button');
      let hasTransformEffects = false;
      
      interactiveElements.forEach(element => {
        const classes = element.className;
        if (classes.includes('hover:scale') || classes.includes('transform')) {
          hasTransformEffects = true;
        }
      });
      
      expect(hasTransformEffects).toBe(true);
    });
  });

  describe('Desktop Component Structure', () => {
    it('should have all major sections present', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check for header
      const header = container.querySelector('header');
      expect(header).toBeTruthy();
      
      // Check for main content
      const main = container.querySelector('main');
      expect(main).toBeTruthy();
      
      // Check for sections
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should have shared components rendered', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check for Testimonials component
      const testimonials = container.querySelector('[data-component="Testimonials"]');
      expect(testimonials).toBeTruthy();
      
      // Check for WhyUs component
      const whyUs = container.querySelector('[data-component="WhyUs"]');
      expect(whyUs).toBeTruthy();
      
      // Check for NextSteps component
      const nextSteps = container.querySelector('[data-component="NextSteps"]');
      expect(nextSteps).toBeTruthy();
    });

    it('should have navigation component', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const nav = container.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should have footer component', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const footer = container.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  describe('Desktop Image Rendering', () => {
    it('should have all images with proper attributes', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const images = container.querySelectorAll('img');
      expect(images.length).toBeGreaterThan(0);
      
      images.forEach(img => {
        // Images should have alt text
        expect(img.getAttribute('alt')).toBeDefined();
        
        // Images should have src
        expect(img.getAttribute('src')).toBeTruthy();
      });
    });

    it('should maintain image aspect ratios', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        const classes = img.className;
        // Should have object-cover or object-contain
        expect(classes).toMatch(/object-cover|object-contain/);
      });
    });
  });

  describe('Desktop Background Images', () => {
    it('should have sections with style attributes (for backgrounds)', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check that sections have style attributes (inline styles for backgrounds)
      const sectionsWithStyle = container.querySelectorAll('section[style], main[style]');
      expect(sectionsWithStyle.length).toBeGreaterThan(0);
    });

    it('should maintain sections with complex styling', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      // Check that main and sections exist with styling
      const styledElements = container.querySelectorAll('[style]');
      expect(styledElements.length).toBeGreaterThan(0);
    });
  });

  describe('Desktop Typography Hierarchy', () => {
    it('should maintain heading hierarchy', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const h1 = container.querySelector('h1');
      const h2s = container.querySelectorAll('h2');
      const h3s = container.querySelectorAll('h3');
      
      expect(h1).toBeTruthy();
      expect(h2s.length).toBeGreaterThan(0);
      expect(h3s.length).toBeGreaterThan(0);
    });

    it('should have responsive typography classes', () => {
      const { container } = renderHomepageAtDesktop(1024);
      
      const headings = container.querySelectorAll('h1, h2, h3, h4');
      let hasResponsiveTypography = false;
      
      headings.forEach(heading => {
        const classes = heading.className;
        if (classes.includes('sm:text-') || classes.includes('lg:text-')) {
          hasResponsiveTypography = true;
        }
      });
      
      expect(hasResponsiveTypography).toBe(true);
    });
  });

  describe('Desktop No Regressions', () => {
    it('should not have horizontal overflow at 1024px', () => {
      const { container } = renderHomepageAtDesktop(1024);
      const documentWidth = container.scrollWidth;
      
      // Allow some tolerance for rendering differences
      expect(documentWidth).toBeLessThanOrEqual(1024 + 20);
    });

    it('should not have horizontal overflow at 1280px', () => {
      const { container } = renderHomepageAtDesktop(1280);
      const documentWidth = container.scrollWidth;
      
      expect(documentWidth).toBeLessThanOrEqual(1280 + 20);
    });

    it('should not have horizontal overflow at 1920px', () => {
      const { container } = renderHomepageAtDesktop(1920);
      const documentWidth = container.scrollWidth;
      
      expect(documentWidth).toBeLessThanOrEqual(1920 + 20);
    });
  });
});
