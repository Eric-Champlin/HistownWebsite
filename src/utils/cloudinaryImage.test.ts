import { describe, it, expect } from 'vitest';
import {
  getCloudinaryUrl,
  getResponsiveImageUrls,
  generateSrcSet,
  generateSizesAttribute,
  getOptimizedImageProps,
  getResponsiveBackgroundImage,
  BREAKPOINTS,
} from './cloudinaryImage';

describe('cloudinaryImage utility', () => {
  const testUrl = 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg';
  const testPublicId = 'About_Us_tgzrww';

  describe('getCloudinaryUrl', () => {
    it('should generate URL with basic transformations', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        quality: 'auto',
        format: 'auto',
      });

      expect(url).toContain('w_800');
      expect(url).toContain('q_auto');
      expect(url).toContain('f_auto');
      expect(url).toContain('dxqzby6fc');
    });

    it('should handle crop and gravity parameters', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        crop: 'fill',
        gravity: 'center',
      });

      expect(url).toContain('c_fill');
      expect(url).toContain('g_center');
    });

    it('should handle DPR parameter', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        dpr: 2,
      });

      expect(url).toContain('dpr_2');
    });

    it('should handle additional transformations', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        transformations: ['e_sharpen:100', 'e_brightness:10'],
      });

      expect(url).toContain('e_sharpen:100');
      expect(url).toContain('e_brightness:10');
    });

    it('should return non-Cloudinary URLs as-is', () => {
      const externalUrl = 'https://example.com/image.jpg';
      const url = getCloudinaryUrl({
        src: externalUrl,
        width: 800,
      });

      expect(url).toBe(externalUrl);
    });
  });

  describe('getResponsiveImageUrls', () => {
    it('should generate URLs for mobile, tablet, and desktop', () => {
      const urls = getResponsiveImageUrls({
        src: testUrl,
      });

      expect(urls.mobile).toContain('w_800');
      expect(urls.tablet).toContain('w_1536');
      expect(urls.desktop).toContain('w_2048');
      expect(urls.mobile).toContain('dpr_auto');
    });

    it('should use custom sizes when provided', () => {
      const urls = getResponsiveImageUrls({
        src: testUrl,
        sizes: {
          mobile: 400,
          tablet: 1000,
          desktop: 1600,
        },
      });

      expect(urls.mobile).toContain('w_400');
      expect(urls.tablet).toContain('w_1000');
      expect(urls.desktop).toContain('w_1600');
    });
  });

  describe('generateSrcSet', () => {
    it('should generate srcset with multiple sizes', () => {
      const srcset = generateSrcSet({
        src: testUrl,
      });

      expect(srcset).toContain('800w');
      expect(srcset).toContain('1600w'); // 2x mobile
      expect(srcset).toContain('1536w');
      expect(srcset).toContain('3072w'); // 2x tablet
      expect(srcset).toContain('2048w');
      expect(srcset).toContain('4096w'); // 2x desktop
    });

    it('should exclude DPR variants when includeDpr is false', () => {
      const srcset = generateSrcSet({
        src: testUrl,
        includeDpr: false,
      });

      expect(srcset).toContain('800w');
      expect(srcset).not.toContain('1600w');
      expect(srcset).toContain('1536w');
      expect(srcset).not.toContain('3072w');
    });

    it('should use custom sizes', () => {
      const srcset = generateSrcSet({
        src: testUrl,
        sizes: {
          mobile: 400,
          tablet: 800,
          desktop: 1200,
        },
      });

      expect(srcset).toContain('400w');
      expect(srcset).toContain('800w');
      expect(srcset).toContain('1200w');
    });
  });

  describe('generateSizesAttribute', () => {
    it('should generate default sizes attribute', () => {
      const sizes = generateSizesAttribute();

      expect(sizes).toContain(`(max-width: ${BREAKPOINTS.tablet - 1}px) 100vw`);
      expect(sizes).toContain(`(max-width: ${BREAKPOINTS.desktop - 1}px) 100vw`);
      expect(sizes).toContain('100vw');
    });

    it('should use custom sizes when provided', () => {
      const sizes = generateSizesAttribute({
        mobile: '90vw',
        tablet: '80vw',
        desktop: '1200px',
      });

      expect(sizes).toContain('90vw');
      expect(sizes).toContain('80vw');
      expect(sizes).toContain('1200px');
    });
  });

  describe('getOptimizedImageProps', () => {
    it('should return complete image props', () => {
      const props = getOptimizedImageProps({
        src: testUrl,
      });

      expect(props.src).toBeDefined();
      expect(props.srcSet).toBeDefined();
      expect(props.sizes).toBeDefined();
      expect(props.loading).toBe('lazy');
      expect(props.decoding).toBe('async');
    });

    it('should include all required attributes', () => {
      const props = getOptimizedImageProps({
        src: testUrl,
        crop: 'fill',
        gravity: 'center',
      });

      expect(props.src).toContain('c_fill');
      expect(props.src).toContain('g_center');
      expect(props.srcSet).toContain('c_fill');
      expect(props.srcSet).toContain('g_center');
    });
  });

  describe('getResponsiveBackgroundImage', () => {
    it('should generate background image URLs', () => {
      const bgImages = getResponsiveBackgroundImage({
        src: testUrl,
      });

      expect(bgImages.mobile).toContain('url(');
      expect(bgImages.tablet).toContain('url(');
      expect(bgImages.desktop).toContain('url(');
      expect(bgImages.mobile).toContain('w_800');
      expect(bgImages.tablet).toContain('w_1536');
      expect(bgImages.desktop).toContain('w_2048');
    });
  });

  describe('Quality and format optimization', () => {
    it('should default to auto quality and format', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
      });

      expect(url).toContain('q_auto');
      expect(url).toContain('f_auto');
    });

    it('should allow custom quality', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        quality: 80,
      });

      expect(url).toContain('q_80');
    });

    it('should allow custom format', () => {
      const url = getCloudinaryUrl({
        src: testUrl,
        width: 800,
        format: 'webp',
      });

      expect(url).toContain('f_webp');
    });
  });

  describe('Mobile-specific optimizations', () => {
    it('should generate appropriate sizes for mobile viewports', () => {
      const urls = getResponsiveImageUrls({
        src: testUrl,
        sizes: {
          mobile: 800, // 2x for 400px viewport
          tablet: 1536, // 2x for 768px viewport
          desktop: 2048, // 2x for 1024px viewport
        },
      });

      // Mobile should be optimized for small screens
      expect(urls.mobile).toContain('w_800');
      // Should use auto DPR for device optimization
      expect(urls.mobile).toContain('dpr_auto');
    });

    it('should support lazy loading by default', () => {
      const props = getOptimizedImageProps({
        src: testUrl,
      });

      expect(props.loading).toBe('lazy');
      expect(props.decoding).toBe('async');
    });
  });
});
