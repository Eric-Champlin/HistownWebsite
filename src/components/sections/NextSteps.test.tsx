import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NextSteps } from './NextSteps';
import { BREAKPOINTS, TABLET_BREAKPOINTS } from '../../constants/responsive';

// Helper to render component with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

// Helper to set viewport width
const setViewportWidth = (width: number) => {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
};

describe('NextSteps Component', () => {
  describe('Rendering at different breakpoints', () => {
    it('should render at mobile breakpoint (375px)', () => {
      setViewportWidth(375);
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('NEXT STEPS')).toBeInTheDocument();
      expect(screen.getByText(/Take your first step/i)).toBeInTheDocument();
    });

    it('should render at mobile breakpoint (390px)', () => {
      setViewportWidth(390);
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('NEXT STEPS')).toBeInTheDocument();
      expect(screen.getByText(/Take your first step/i)).toBeInTheDocument();
    });

    it('should render at mobile breakpoint (428px)', () => {
      setViewportWidth(428);
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('NEXT STEPS')).toBeInTheDocument();
      expect(screen.getByText(/Take your first step/i)).toBeInTheDocument();
    });

    it('should render at tablet breakpoint (768px)', () => {
      setViewportWidth(768);
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('NEXT STEPS')).toBeInTheDocument();
      expect(screen.getByText(/Take your first step/i)).toBeInTheDocument();
    });

    it('should render at desktop breakpoint (1024px)', () => {
      setViewportWidth(1024);
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('NEXT STEPS')).toBeInTheDocument();
      expect(screen.getByText(/Take your first step/i)).toBeInTheDocument();
    });
  });

  describe('Vertical stacking on mobile', () => {
    it('should have grid layout that stacks on mobile', () => {
      setViewportWidth(390);
      const { container } = renderWithRouter(<NextSteps />);
      
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toHaveClass('grid-cols-1');
      expect(gridContainer).toHaveClass('lg:grid-cols-2');
    });
  });

  describe('Button and input full-width on mobile', () => {
    it('should render CTA buttons with full width on mobile', () => {
      setViewportWidth(390);
      renderWithRouter(<NextSteps />);
      
      const buttons = screen.getAllByRole('button');
      // Check that buttons have w-full class for mobile
      buttons.forEach(button => {
        expect(button).toHaveClass('w-full');
      });
    });

    it('should render form inputs with full width', () => {
      setViewportWidth(390);
      const { container } = renderWithRouter(<NextSteps />);
      
      const inputs = container.querySelectorAll('input');
      inputs.forEach(input => {
        expect(input).toHaveClass('w-full');
      });
    });
  });

  describe('Input types trigger correct keyboards', () => {
    it('should have email input type for email field', () => {
      renderWithRouter(<NextSteps />);
      
      const emailInput = screen.getByPlaceholderText('your@email.com');
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have text input type for name field', () => {
      renderWithRouter(<NextSteps />);
      
      const nameInput = screen.getByPlaceholderText('Your first name');
      expect(nameInput).toHaveAttribute('type', 'text');
    });
  });

  describe('Background image rendering', () => {
    it('should render with background image', () => {
      const { container } = renderWithRouter(<NextSteps />);
      
      const section = container.querySelector('[data-component="NextSteps"]');
      expect(section).toBeInTheDocument();
      
      // Check that section has background image style
      const style = section?.getAttribute('style');
      expect(style).toContain('background-image');
      expect(style).toContain('blue-texture');
    });

    it('should accept custom background image', () => {
      const customBg = 'https://example.com/custom-bg.jpg';
      const { container } = renderWithRouter(<NextSteps backgroundImage={customBg} />);
      
      const section = container.querySelector('[data-component="NextSteps"]');
      const style = section?.getAttribute('style');
      expect(style).toContain(customBg);
    });
  });

  describe('Component structure', () => {
    it('should have data-component attribute for testing', () => {
      const { container } = renderWithRouter(<NextSteps />);
      
      const section = container.querySelector('[data-component="NextSteps"]');
      expect(section).toBeInTheDocument();
    });

    it('should render default CTA buttons', () => {
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('REQUEST A TRIAL CLASS')).toBeInTheDocument();
      expect(screen.getByText('CONTACT US')).toBeInTheDocument();
    });

    it('should render email signup form by default', () => {
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('SIGN UP FOR EMAIL UPDATES')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Your first name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    });

    it('should not render email form when emailSignupForm is false', () => {
      renderWithRouter(<NextSteps emailSignupForm={false} />);
      
      expect(screen.queryByText('SIGN UP FOR EMAIL UPDATES')).not.toBeInTheDocument();
    });

    it('should render custom CTA buttons', () => {
      const customButtons = [
        { label: 'Custom Button 1', href: '/custom1', variant: 'primary' as const },
        { label: 'Custom Button 2', href: '/custom2', variant: 'secondary' as const }
      ];
      
      renderWithRouter(<NextSteps ctaButtons={customButtons} />);
      
      expect(screen.getByText('Custom Button 1')).toBeInTheDocument();
      expect(screen.getByText('Custom Button 2')).toBeInTheDocument();
    });

    it('should render custom title and description', () => {
      renderWithRouter(
        <NextSteps 
          title="CUSTOM TITLE" 
          description="Custom description text"
        />
      );
      
      expect(screen.getByText('CUSTOM TITLE')).toBeInTheDocument();
      expect(screen.getByText('Custom description text')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper form labels', () => {
      renderWithRouter(<NextSteps />);
      
      expect(screen.getByText('First name*')).toBeInTheDocument();
      expect(screen.getByText('Email*')).toBeInTheDocument();
    });

    it('should have submit button', () => {
      renderWithRouter(<NextSteps />);
      
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Mobile-first responsive classes', () => {
    it('should use mobile-first padding classes', () => {
      const { container } = renderWithRouter(<NextSteps />);
      
      const section = container.querySelector('[data-component="NextSteps"]');
      expect(section).toHaveClass('py-12');
      expect(section).toHaveClass('sm:py-20');
      expect(section).toHaveClass('md:py-32');
    });

    it('should use mobile-first text sizing', () => {
      const { container } = renderWithRouter(<NextSteps />);
      
      const heading = screen.getByText('NEXT STEPS');
      expect(heading).toHaveClass('text-4xl');
      expect(heading).toHaveClass('sm:text-4xl');
      expect(heading).toHaveClass('md:text-5xl');
    });
  });
});
