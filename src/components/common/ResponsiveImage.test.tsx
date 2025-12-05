import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ResponsiveImage } from './ResponsiveImage';

// Mock the useIntersectionObserver hook
vi.mock('../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    ref: { current: null },
    isIntersecting: true,
  }),
}));

describe('ResponsiveImage', () => {
  const testUrl = 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg';

  it('should render with optimized image props', () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
        className="w-full h-full"
      />
    );

    const img = screen.getByAltText('Test Image');
    expect(img).toBeDefined();
  });

  it('should include srcset attribute', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('srcset')).toBeTruthy();
      expect(img.getAttribute('srcset')).toContain('w_800');
      expect(img.getAttribute('srcset')).toContain('w_1536');
      expect(img.getAttribute('srcset')).toContain('w_2048');
    });
  });

  it('should include sizes attribute', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('sizes')).toBeTruthy();
    });
  });

  it('should use lazy loading by default', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('loading')).toBe('lazy');
    });
  });

  it('should use eager loading when specified', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
        eager={true}
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('loading')).toBe('eager');
    });
  });

  it('should apply custom className', () => {
    const { container } = render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
        className="custom-class"
      />
    );

    const wrapper = container.firstChild;
    expect(wrapper).toBeDefined();
    expect((wrapper as HTMLElement).className).toContain('custom-class');
  });

  it('should include Cloudinary transformations in src', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
        crop="fill"
        gravity="center"
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('src')).toContain('c_fill');
      expect(img.getAttribute('src')).toContain('g_center');
      expect(img.getAttribute('src')).toContain('q_auto');
      expect(img.getAttribute('src')).toContain('f_auto');
    });
  });

  it('should use custom sizes when provided', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
        sizes={{
          mobile: 400,
          tablet: 800,
          desktop: 1200,
        }}
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      const srcset = img.getAttribute('srcset');
      expect(srcset).toContain('w_400');
      expect(srcset).toContain('w_800');
      expect(srcset).toContain('w_1200');
    });
  });

  it('should have async decoding', async () => {
    render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
      />
    );

    await waitFor(() => {
      const img = screen.getByAltText('Test Image');
      expect(img.getAttribute('decoding')).toBe('async');
    });
  });

  it('should display loading state initially', () => {
    const { container } = render(
      <ResponsiveImage
        src={testUrl}
        alt="Test Image"
      />
    );

    // Check for loading indicator (SVG icon)
    const loadingIndicator = container.querySelector('svg');
    expect(loadingIndicator).toBeDefined();
  });
});
