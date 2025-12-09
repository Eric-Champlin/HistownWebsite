import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyUs } from './WhyUs';
import { whyUsValues } from '../../data/whyUsValues';

describe('WhyUs Component', () => {
  const defaultProps = {
    values: whyUsValues
  };

  describe('Rendering at different breakpoints', () => {
    it('should render at mobile breakpoint (375px)', () => {
      // Set viewport to 375px
      global.innerWidth = 375;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that component renders
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
      
      // Check that all three value cards are rendered
      expect(screen.getByText('HIS HEART')).toBeInTheDocument();
      expect(screen.getByText('HIS GLORY')).toBeInTheDocument();
      expect(screen.getByText('HISTOWN')).toBeInTheDocument();
    });

    it('should render at mobile breakpoint (390px)', () => {
      global.innerWidth = 390;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
      
      // Verify all values are rendered
      whyUsValues.forEach(value => {
        expect(screen.getByText(value.title)).toBeInTheDocument();
        expect(screen.getByText(value.description)).toBeInTheDocument();
      });
    });

    it('should render at mobile breakpoint (428px)', () => {
      global.innerWidth = 428;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
    });

    it('should render at tablet breakpoint (768px)', () => {
      global.innerWidth = 768;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
      
      // Check grid layout exists
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('should render at desktop breakpoint (1024px)', () => {
      global.innerWidth = 1024;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Vertical stacking on mobile', () => {
    it('should use single column grid on mobile', () => {
      global.innerWidth = 390;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that grid has grid-cols-1 class for mobile
      const grid = container.querySelector('.grid-cols-1');
      expect(grid).toBeInTheDocument();
    });

    it('should use three column grid on desktop', () => {
      global.innerWidth = 1024;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that grid has md:grid-cols-3 class for desktop
      const grid = container.querySelector('.md\\:grid-cols-3');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Icon sizing across breakpoints', () => {
    it('should render icons at appropriate size for mobile', () => {
      global.innerWidth = 390;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that icons have mobile sizing classes (w-12 h-12 sm:w-16 sm:h-16)
      const iconContainers = container.querySelectorAll('.w-12');
      expect(iconContainers.length).toBeGreaterThan(0);
    });

    it('should render icons at appropriate size for desktop', () => {
      global.innerWidth = 1024;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Icons should still be present
      const svgs = container.querySelectorAll('svg');
      expect(svgs.length).toBe(whyUsValues.length);
    });
  });

  describe('Background image rendering', () => {
    it('should render with default background image', () => {
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toHaveStyle({
        backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/w_2400,q_100,f_jpg,e_sharpen:100/v1762365784/blue-texture_yyysa2)'
      });
    });

    it('should render with custom background image', () => {
      const customBg = 'https://example.com/custom-bg.jpg';
      const { container } = render(<WhyUs {...defaultProps} backgroundImage={customBg} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toHaveStyle({
        backgroundImage: `url(${customBg})`
      });
    });

    it('should have dark overlay for text contrast', () => {
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const overlay = container.querySelector('.bg-black\\/20');
      expect(overlay).toBeInTheDocument();
    });
  });

  describe('Content rendering', () => {
    it('should render default title', () => {
      render(<WhyUs {...defaultProps} />);
      
      expect(screen.getByText('WHY US?')).toBeInTheDocument();
    });

    it('should render custom title', () => {
      const customTitle = 'OUR VALUES';
      render(<WhyUs {...defaultProps} title={customTitle} />);
      
      expect(screen.getByText(customTitle)).toBeInTheDocument();
    });

    it('should render default description', () => {
      render(<WhyUs {...defaultProps} />);
      
      expect(screen.getByText(/We provide dance instruction in a Christ-centered environment/)).toBeInTheDocument();
    });

    it('should render custom description', () => {
      const customDesc = 'Custom description text';
      render(<WhyUs {...defaultProps} description={customDesc} />);
      
      expect(screen.getByText(customDesc)).toBeInTheDocument();
    });

    it('should render all value cards', () => {
      render(<WhyUs {...defaultProps} />);
      
      whyUsValues.forEach(value => {
        expect(screen.getByText(value.title)).toBeInTheDocument();
        expect(screen.getByText(value.description)).toBeInTheDocument();
      });
    });
  });

  describe('Responsive text sizing', () => {
    it('should have proper mobile text sizing', () => {
      global.innerWidth = 390;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that title has mobile-first responsive classes
      const title = screen.getByText('WHY US?');
      expect(title).toHaveClass('text-4xl');
      expect(title).toHaveClass('sm:text-4xl');
      expect(title).toHaveClass('md:text-5xl');
    });

    it('should have proper spacing on mobile', () => {
      global.innerWidth = 390;
      
      const { container } = render(<WhyUs {...defaultProps} />);
      
      // Check that container has mobile padding
      const innerContainer = container.querySelector('.px-4');
      expect(innerContainer).toBeInTheDocument();
    });
  });

  describe('Data attribute for testing', () => {
    it('should have data-component attribute', () => {
      const { container } = render(<WhyUs {...defaultProps} />);
      
      const section = container.querySelector('[data-component="WhyUs"]');
      expect(section).toBeInTheDocument();
      expect(section?.getAttribute('data-component')).toBe('WhyUs');
    });
  });
});
