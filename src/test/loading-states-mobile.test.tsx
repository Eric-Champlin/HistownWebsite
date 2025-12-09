/**
 * Loading States Mobile Tests
 * 
 * Tests loading states for mobile optimization:
 * - Skeleton screens for slow-loading sections
 * - Loading indicators for images
 * - Progressive loading for testimonials carousel
 * - Loading states for form submissions
 * - Accessibility of loading states
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {
  Spinner,
  SkeletonBox,
  SkeletonText,
  SkeletonCard,
  TestimonialSkeleton,
  SectionSkeleton,
  FormLoadingOverlay,
  ImageLoadingPlaceholder,
  ProgressBar,
  PulsingDots,
  LoadingButton,
} from '../components/common/LoadingStates';
import { Testimonials } from '../components/sections/Testimonials';
import { NextSteps } from '../components/sections/NextSteps';

describe('Loading States - Mobile Optimization', () => {
  describe('Spinner Component', () => {
    it('should render spinner with accessibility label', () => {
      render(<Spinner label="Loading content" />);
      
      const status = screen.getByRole('status');
      expect(status).toBeInTheDocument();
      expect(status).toHaveAttribute('aria-label', 'Loading content');
      
      // Screen reader text
      expect(screen.getByText('Loading content')).toHaveClass('sr-only');
    });

    it('should render different sizes', () => {
      const { rerender } = render(<Spinner size="sm" />);
      let spinner = screen.getByRole('status').firstChild as HTMLElement;
      expect(spinner).toHaveClass('w-4', 'h-4');

      rerender(<Spinner size="md" />);
      spinner = screen.getByRole('status').firstChild as HTMLElement;
      expect(spinner).toHaveClass('w-8', 'h-8');

      rerender(<Spinner size="lg" />);
      spinner = screen.getByRole('status').firstChild as HTMLElement;
      expect(spinner).toHaveClass('w-12', 'h-12');
    });

    it('should have spinning animation', () => {
      render(<Spinner />);
      const spinner = screen.getByRole('status').firstChild as HTMLElement;
      expect(spinner).toHaveClass('animate-spin');
    });
  });

  describe('Skeleton Components', () => {
    it('should render skeleton box with pulse animation', () => {
      const { container } = render(<SkeletonBox />);
      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveClass('animate-pulse', 'bg-gray-200');
    });

    it('should render skeleton text with multiple lines', () => {
      const { container } = render(<SkeletonText lines={3} />);
      const skeletons = container.querySelectorAll('.animate-pulse');
      expect(skeletons).toHaveLength(3);
    });

    it('should render skeleton card with image and text', () => {
      const { container } = render(<SkeletonCard showImage={true} />);
      const skeletons = container.querySelectorAll('.animate-pulse');
      // Should have image skeleton + title skeleton + 3 text lines
      expect(skeletons.length).toBeGreaterThan(3);
    });

    it('should render testimonial skeleton with proper structure', () => {
      render(<TestimonialSkeleton />);
      
      const skeleton = screen.getByRole('status');
      expect(skeleton).toHaveAttribute('aria-label', 'Loading testimonial');
      
      // Should have proper styling
      expect(skeleton).toHaveClass('bg-white', 'rounded-2xl', 'shadow-lg');
    });

    it('should render section skeleton with title and cards', () => {
      const { container } = render(<SectionSkeleton showTitle={true} />);
      
      // Should have multiple skeleton elements
      const skeletons = container.querySelectorAll('.animate-pulse');
      expect(skeletons.length).toBeGreaterThan(5);
    });
  });

  describe('Form Loading Overlay', () => {
    it('should not render when not loading', () => {
      const { container } = render(<FormLoadingOverlay isLoading={false} />);
      expect(container.firstChild).toBeNull();
    });

    it('should render overlay when loading', () => {
      render(<FormLoadingOverlay isLoading={true} message="Submitting form..." />);
      
      const overlays = screen.getAllByRole('status');
      expect(overlays[0]).toBeInTheDocument();
      expect(overlays[0]).toHaveAttribute('aria-label', 'Submitting form...');
      expect(screen.getAllByText('Submitting form...').length).toBeGreaterThan(0);
    });

    it('should have proper overlay styling', () => {
      render(<FormLoadingOverlay isLoading={true} />);
      
      const overlays = screen.getAllByRole('status');
      expect(overlays[0]).toHaveClass('absolute', 'inset-0', 'bg-white/90', 'backdrop-blur-sm');
    });

    it('should be accessible with aria-live', () => {
      render(<FormLoadingOverlay isLoading={true} message="Processing..." />);
      
      const overlays = screen.getAllByRole('status');
      expect(overlays[0]).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Image Loading Placeholder', () => {
    it('should render with accessibility label', () => {
      render(<ImageLoadingPlaceholder />);
      
      const placeholder = screen.getByRole('status');
      expect(placeholder).toHaveAttribute('aria-label', 'Loading image');
      expect(screen.getByText('Loading image')).toHaveClass('sr-only');
    });

    it('should have pulse animation', () => {
      render(<ImageLoadingPlaceholder />);
      const placeholder = screen.getByRole('status');
      expect(placeholder).toHaveClass('animate-pulse', 'bg-gray-200');
    });

    it('should support different aspect ratios', () => {
      const { rerender } = render(<ImageLoadingPlaceholder aspectRatio="aspect-square" />);
      let placeholder = screen.getByRole('status');
      expect(placeholder).toHaveClass('aspect-square');

      rerender(<ImageLoadingPlaceholder aspectRatio="aspect-video" />);
      placeholder = screen.getByRole('status');
      expect(placeholder).toHaveClass('aspect-video');
    });
  });

  describe('Progress Bar', () => {
    it('should render with proper ARIA attributes', () => {
      render(<ProgressBar progress={50} label="Uploading..." />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
      expect(progressBar).toHaveAttribute('aria-label', 'Uploading...');
    });

    it('should clamp progress values', () => {
      const { rerender } = render(<ProgressBar progress={150} />);
      let progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '100');

      rerender(<ProgressBar progress={-50} />);
      progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    });

    it('should display label text', () => {
      render(<ProgressBar progress={75} label="75% complete" />);
      expect(screen.getByText('75% complete')).toBeInTheDocument();
    });
  });

  describe('Pulsing Dots', () => {
    it('should render with accessibility label', () => {
      render(<PulsingDots label="Processing" />);
      
      const dots = screen.getByRole('status');
      expect(dots).toHaveAttribute('aria-label', 'Processing');
      expect(screen.getByText('Processing')).toHaveClass('sr-only');
    });

    it('should render three animated dots', () => {
      const { container } = render(<PulsingDots />);
      const dots = container.querySelectorAll('.animate-bounce');
      expect(dots).toHaveLength(3);
    });
  });

  describe('Loading Button', () => {
    it('should show loading state when isLoading is true', () => {
      render(
        <LoadingButton isLoading={true} loadingText="Saving...">
          Save
        </LoadingButton>
      );
      
      expect(screen.getAllByText('Saving...').length).toBeGreaterThan(0);
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('should show normal state when not loading', () => {
      render(
        <LoadingButton isLoading={false}>
          Save
        </LoadingButton>
      );
      
      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByRole('button')).not.toBeDisabled();
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'false');
    });

    it('should be disabled when loading', () => {
      render(
        <LoadingButton isLoading={true}>
          Submit
        </LoadingButton>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-wait');
    });
  });

  describe('Testimonials Progressive Loading', () => {
    it('should show skeleton screens initially', async () => {
      render(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      );
      
      // Should show loading skeletons initially
      const skeletons = screen.getAllByRole('status', { name: /loading testimonial/i });
      expect(skeletons.length).toBeGreaterThan(0);
    });

    it('should progressively load testimonials', async () => {
      render(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      );
      
      // Wait for testimonials to load - check for actual testimonial content
      await waitFor(() => {
        // Look for testimonial cards with actual content
        const testimonialCards = screen.queryAllByText(/HisTown/i);
        expect(testimonialCards.length).toBeGreaterThan(0);
      }, { timeout: 3000 });
    });

    it('should maintain accessibility during loading', async () => {
      render(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      );
      
      // Check for accessible loading states
      const loadingElements = screen.getAllByRole('status');
      loadingElements.forEach(element => {
        expect(element).toHaveAttribute('aria-label');
      });
    });
  });

  describe('Form Submission Loading States', () => {
    it('should show loading overlay during form submission', async () => {
      const user = userEvent.setup();
      
      render(
        <BrowserRouter>
          <NextSteps emailSignupForm={true} />
        </BrowserRouter>
      );
      
      // Fill out form
      const firstNameInput = screen.getByLabelText(/first name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });
      
      await user.type(firstNameInput, 'John');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      // Should show loading state
      expect(screen.getAllByText(/signing you up/i).length).toBeGreaterThan(0);
      expect(submitButton).toBeDisabled();
    });

    it('should show success message after submission', async () => {
      const user = userEvent.setup();
      
      render(
        <BrowserRouter>
          <NextSteps emailSignupForm={true} />
        </BrowserRouter>
      );
      
      const firstNameInput = screen.getByLabelText(/first name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });
      
      await user.type(firstNameInput, 'John');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      // Wait for success message
      await waitFor(() => {
        expect(screen.getByText(/successfully subscribed/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should have accessible loading states', async () => {
      const user = userEvent.setup();
      
      render(
        <BrowserRouter>
          <NextSteps emailSignupForm={true} />
        </BrowserRouter>
      );
      
      const firstNameInput = screen.getByLabelText(/first name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });
      
      await user.type(firstNameInput, 'John');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      // Check for accessible loading overlay
      const loadingOverlays = screen.getAllByRole('status', { name: /signing you up/i });
      expect(loadingOverlays[0]).toHaveAttribute('aria-live', 'polite');
      expect(submitButton).toHaveAttribute('aria-busy', 'true');
    });
  });

  describe('Mobile-Specific Loading States', () => {
    it('should render loading states at mobile viewport (390px)', () => {
      // Set mobile viewport
      global.innerWidth = 390;
      global.dispatchEvent(new Event('resize'));
      
      render(<TestimonialSkeleton />);
      
      const skeleton = screen.getByRole('status', { name: /loading testimonial/i });
      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveClass('rounded-2xl', 'shadow-lg');
    });

    it('should have adequate touch targets for loading buttons', () => {
      render(
        <LoadingButton isLoading={false} className="min-h-[48px]">
          Submit
        </LoadingButton>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('min-h-[48px]');
    });

    it('should maintain readability of loading text on mobile', () => {
      render(<FormLoadingOverlay isLoading={true} message="Processing your request..." />);
      
      const messages = screen.getAllByText('Processing your request...');
      expect(messages.length).toBeGreaterThan(0);
      
      // Check that message is visible and has proper styling classes
      const visibleMessage = messages.find(msg => !msg.classList.contains('sr-only'));
      expect(visibleMessage).toBeInTheDocument();
      expect(visibleMessage).toHaveClass('text-gray-700', 'font-medium');
    });
  });

  describe('Slow 3G Connection Simulation', () => {
    it('should show loading states for extended periods', async () => {
      // Simulate slow connection with longer timeout
      render(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      );
      
      // Wait a bit for initial render
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Should eventually load testimonials - check for actual content
      await waitFor(() => {
        const testimonials = screen.queryAllByText(/HisTown/i);
        expect(testimonials.length).toBeGreaterThan(0);
      }, { timeout: 5000 });
    });

    it('should provide feedback during long loading times', () => {
      render(<ProgressBar progress={30} label="Loading content... 30%" />);
      
      expect(screen.getByText('Loading content... 30%')).toBeInTheDocument();
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '30');
    });
  });

  describe('Accessibility Compliance', () => {
    it('should have proper ARIA roles for all loading states', () => {
      const { container } = render(
        <div>
          <Spinner label="Loading" />
          <FormLoadingOverlay isLoading={true} message="Submitting" />
          <ImageLoadingPlaceholder />
          <ProgressBar progress={50} label="Progress" />
        </div>
      );
      
      const statusElements = container.querySelectorAll('[role="status"]');
      expect(statusElements.length).toBeGreaterThan(0);
      
      const progressElements = container.querySelectorAll('[role="progressbar"]');
      expect(progressElements.length).toBeGreaterThan(0);
    });

    it('should have screen reader text for visual loading indicators', () => {
      render(
        <div>
          <Spinner label="Loading content" />
          <PulsingDots label="Processing" />
          <ImageLoadingPlaceholder />
        </div>
      );
      
      expect(screen.getByText('Loading content')).toHaveClass('sr-only');
      expect(screen.getByText('Processing')).toHaveClass('sr-only');
      expect(screen.getByText('Loading image')).toHaveClass('sr-only');
    });

    it('should use aria-live for dynamic loading updates', () => {
      render(<FormLoadingOverlay isLoading={true} message="Updating..." />);
      
      const overlays = screen.getAllByRole('status');
      expect(overlays[0]).toHaveAttribute('aria-live', 'polite');
    });

    it('should use aria-busy for loading buttons', () => {
      render(
        <LoadingButton isLoading={true}>
          Submit
        </LoadingButton>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });
  });
});
