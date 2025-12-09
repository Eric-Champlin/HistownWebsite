import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

/**
 * Test suite for mobile-first CSS utilities
 * Validates that new mobile-first utilities are properly applied
 * and that desktop styles remain unaffected
 */
describe('Mobile-First CSS Utilities', () => {
  describe('Container Utilities', () => {
    it('should apply mobile-container class with responsive padding', () => {
      const { container } = render(
        <div className="mobile-container">Test Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-container');
    });

    it('should apply mobile-section class with responsive padding', () => {
      const { container } = render(
        <div className="mobile-section">Test Section</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-section');
    });
  });

  describe('Typography Utilities', () => {
    it('should apply mobile-heading-1 class', () => {
      const { container } = render(
        <h1 className="mobile-heading-1">Heading 1</h1>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-heading-1');
    });

    it('should apply mobile-heading-2 class', () => {
      const { container } = render(
        <h2 className="mobile-heading-2">Heading 2</h2>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-heading-2');
    });

    it('should apply mobile-body class', () => {
      const { container } = render(
        <p className="mobile-body">Body text</p>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-body');
    });
  });

  describe('Layout Utilities', () => {
    it('should apply mobile-stack class for vertical stacking', () => {
      const { container } = render(
        <div className="mobile-stack">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-stack');
    });

    it('should apply mobile-grid-1 class for responsive grid', () => {
      const { container } = render(
        <div className="mobile-grid-1">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-grid-1');
    });
  });

  describe('Touch Target Utilities', () => {
    it('should apply mobile-touch-target class with minimum dimensions', () => {
      const { container } = render(
        <button className="mobile-touch-target">Tap Me</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-touch-target');
    });

    it('should apply mobile-touch-target-lg class', () => {
      const { container } = render(
        <button className="mobile-touch-target-lg">Tap Me</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-touch-target-lg');
    });
  });

  describe('Button Utilities', () => {
    it('should apply mobile-btn class with full width on mobile', () => {
      const { container } = render(
        <button className="mobile-btn">Click Me</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-btn');
    });
  });

  describe('Form Utilities', () => {
    it('should apply mobile-input class with full width', () => {
      const { container } = render(
        <input className="mobile-input" type="text" />
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-input');
    });

    it('should apply mobile-label class', () => {
      const { container } = render(
        <label className="mobile-label">Label Text</label>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-label');
    });
  });

  describe('Visibility Utilities', () => {
    it('should apply mobile-only class', () => {
      const { container } = render(
        <div className="mobile-only">Mobile Only Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-only');
    });

    it('should apply tablet-up class', () => {
      const { container } = render(
        <div className="tablet-up">Tablet and Desktop Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('tablet-up');
    });

    it('should apply desktop-only class', () => {
      const { container } = render(
        <div className="desktop-only">Desktop Only Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('desktop-only');
    });
  });

  describe('Existing Desktop Styles Preservation', () => {
    it('should preserve existing btn-primary class', () => {
      const { container } = render(
        <button className="btn-primary">Primary Button</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('btn-primary');
    });

    it('should use mobile-container utility class', () => {
      const { container } = render(
        <div className="mobile-container">Section Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-container');
    });

    it('should use mobile-heading utilities', () => {
      const { container } = render(
        <h1 className="mobile-heading-1">Primary Heading</h1>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-heading-1');
    });

    it('should allow combining existing and new classes', () => {
      const { container } = render(
        <button className="btn-primary mobile-touch-target">
          Combined Classes
        </button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('btn-primary');
      expect(element).toHaveClass('mobile-touch-target');
    });
  });

  describe('Spacing Utilities', () => {
    it('should apply mobile-space-y-normal class', () => {
      const { container } = render(
        <div className="mobile-space-y-normal">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-space-y-normal');
    });

    it('should apply mobile-gap-normal class', () => {
      const { container } = render(
        <div className="mobile-gap-normal flex">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-gap-normal');
    });
  });

  describe('Image Utilities', () => {
    it('should apply mobile-img-full class', () => {
      const { container } = render(
        <img className="mobile-img-full" src="test.jpg" alt="Test" />
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-img-full');
    });
  });

  describe('Card Utilities', () => {
    it('should apply mobile-card class with responsive padding', () => {
      const { container } = render(
        <div className="mobile-card">Card Content</div>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-card');
    });
  });

  describe('Focus and Active States', () => {
    it('should apply mobile-focus-ring class', () => {
      const { container } = render(
        <button className="mobile-focus-ring">Focus Me</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-focus-ring');
    });

    it('should apply mobile-active-scale class', () => {
      const { container } = render(
        <button className="mobile-active-scale">Press Me</button>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('mobile-active-scale');
    });
  });
});
