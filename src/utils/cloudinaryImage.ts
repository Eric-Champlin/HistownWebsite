/**
 * Cloudinary Responsive Image Utility
 * 
 * This utility generates responsive Cloudinary URLs with optimized transformations
 * for different viewport sizes and device pixel ratios.
 * 
 * Features:
 * - Automatic quality optimization (q_auto)
 * - Automatic format selection (f_auto)
 * - Responsive sizing for mobile, tablet, and desktop
 * - Support for srcset generation
 * - Lazy loading support
 * - DPR (Device Pixel Ratio) support
 */

/**
 * Breakpoint definitions matching Tailwind CSS breakpoints
 */
export const BREAKPOINTS = {
  mobile: {
    xs: 375,   // iPhone SE
    sm: 390,   // iPhone 12/13/14
    md: 428,   // iPhone 14 Pro Max
  },
  tablet: 768,
  desktop: 1024,
  xl: 1280,
  xxl: 1920,
} as const;

/**
 * Configuration for image transformations
 */
export interface CloudinaryImageConfig {
  /** The Cloudinary public ID or full URL */
  src: string;
  /** Width in pixels (optional, will use responsive defaults if not provided) */
  width?: number;
  /** Height in pixels (optional) */
  height?: number;
  /** Crop mode (default: 'fill') */
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'pad' | 'limit';
  /** Quality (default: 'auto') */
  quality?: 'auto' | number;
  /** Format (default: 'auto') */
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  /** Gravity for cropping (default: 'auto') */
  gravity?: 'auto' | 'center' | 'face' | 'faces' | 'north' | 'south' | 'east' | 'west';
  /** Device pixel ratio (default: 1) */
  dpr?: 1 | 2 | 3 | 'auto';
  /** Additional transformations */
  transformations?: string[];
}

/**
 * Responsive image configuration for srcset generation
 */
export interface ResponsiveImageConfig extends Omit<CloudinaryImageConfig, 'width' | 'dpr'> {
  /** Sizes for different breakpoints */
  sizes?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /** Generate srcset for different DPRs */
  includeDpr?: boolean;
}

/**
 * Extract Cloudinary public ID from a full URL
 */
function extractPublicId(url: string): string {
  // If it's already a public ID, return it
  if (!url.includes('cloudinary.com')) {
    return url;
  }

  // Extract public ID from Cloudinary URL
  // Format: https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{public_id}
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
  if (match && match[1]) {
    return match[1];
  }

  // If we can't extract it, return the original URL
  return url;
}

/**
 * Build Cloudinary transformation string
 */
function buildTransformations(config: CloudinaryImageConfig): string {
  const transformations: string[] = [];

  // Width
  if (config.width) {
    transformations.push(`w_${config.width}`);
  }

  // Height
  if (config.height) {
    transformations.push(`h_${config.height}`);
  }

  // Crop mode
  if (config.crop) {
    transformations.push(`c_${config.crop}`);
  }

  // Quality
  const quality = config.quality ?? 'auto';
  transformations.push(`q_${quality}`);

  // Format
  const format = config.format ?? 'auto';
  transformations.push(`f_${format}`);

  // Gravity
  if (config.gravity) {
    transformations.push(`g_${config.gravity}`);
  }

  // DPR
  if (config.dpr) {
    transformations.push(`dpr_${config.dpr}`);
  }

  // Additional transformations
  if (config.transformations && config.transformations.length > 0) {
    transformations.push(...config.transformations);
  }

  return transformations.join(',');
}

/**
 * Generate a Cloudinary URL with transformations
 */
export function getCloudinaryUrl(config: CloudinaryImageConfig): string {
  const { src } = config;

  // If it's not a Cloudinary URL, return as-is
  if (!src.includes('cloudinary.com') && !src.startsWith('v')) {
    return src;
  }

  const publicId = extractPublicId(src);
  const transformations = buildTransformations(config);

  // Cloudinary base URL (using the cloud name from existing URLs)
  const cloudName = 'dxqzby6fc';
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

  return `${baseUrl}/${transformations}/${publicId}`;
}

/**
 * Generate responsive image URLs for different viewport sizes
 */
export function getResponsiveImageUrls(config: ResponsiveImageConfig): {
  mobile: string;
  tablet: string;
  desktop: string;
} {
  const sizes = config.sizes || {
    mobile: 800,   // 2x for 400px viewport
    tablet: 1536,  // 2x for 768px viewport
    desktop: 2048, // 2x for 1024px viewport
  };

  return {
    mobile: getCloudinaryUrl({
      ...config,
      width: sizes.mobile,
      dpr: 'auto',
    }),
    tablet: getCloudinaryUrl({
      ...config,
      width: sizes.tablet,
      dpr: 'auto',
    }),
    desktop: getCloudinaryUrl({
      ...config,
      width: sizes.desktop,
      dpr: 'auto',
    }),
  };
}

/**
 * Generate srcset string for responsive images
 */
export function generateSrcSet(config: ResponsiveImageConfig): string {
  const sizes = config.sizes || {
    mobile: 800,
    tablet: 1536,
    desktop: 2048,
  };

  const srcsetEntries: string[] = [];

  // Mobile sizes
  if (sizes.mobile) {
    srcsetEntries.push(
      `${getCloudinaryUrl({ ...config, width: sizes.mobile, dpr: 1 })} ${sizes.mobile}w`
    );
    if (config.includeDpr !== false) {
      srcsetEntries.push(
        `${getCloudinaryUrl({ ...config, width: sizes.mobile, dpr: 2 })} ${sizes.mobile * 2}w`
      );
    }
  }

  // Tablet sizes
  if (sizes.tablet) {
    srcsetEntries.push(
      `${getCloudinaryUrl({ ...config, width: sizes.tablet, dpr: 1 })} ${sizes.tablet}w`
    );
    if (config.includeDpr !== false) {
      srcsetEntries.push(
        `${getCloudinaryUrl({ ...config, width: sizes.tablet, dpr: 2 })} ${sizes.tablet * 2}w`
      );
    }
  }

  // Desktop sizes
  if (sizes.desktop) {
    srcsetEntries.push(
      `${getCloudinaryUrl({ ...config, width: sizes.desktop, dpr: 1 })} ${sizes.desktop}w`
    );
    if (config.includeDpr !== false) {
      srcsetEntries.push(
        `${getCloudinaryUrl({ ...config, width: sizes.desktop, dpr: 2 })} ${sizes.desktop * 2}w`
      );
    }
  }

  return srcsetEntries.join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(config?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const defaultSizes = {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw',
  };

  const sizes = { ...defaultSizes, ...config };

  return [
    `(max-width: ${BREAKPOINTS.tablet - 1}px) ${sizes.mobile}`,
    `(max-width: ${BREAKPOINTS.desktop - 1}px) ${sizes.tablet}`,
    sizes.desktop,
  ].join(', ');
}

/**
 * Get optimized image props for use in img or LazyImage components
 */
export function getOptimizedImageProps(config: ResponsiveImageConfig): {
  src: string;
  srcSet?: string;
  sizes?: string;
  loading: 'lazy' | 'eager';
  decoding: 'async';
} {
  const urls = getResponsiveImageUrls(config);

  return {
    src: urls.mobile, // Fallback for browsers that don't support srcset
    srcSet: generateSrcSet(config),
    sizes: generateSizesAttribute(),
    loading: 'lazy',
    decoding: 'async',
  };
}

/**
 * Helper function to create a responsive background image style
 */
export function getResponsiveBackgroundImage(config: ResponsiveImageConfig): {
  mobile: string;
  tablet: string;
  desktop: string;
} {
  const urls = getResponsiveImageUrls(config);

  return {
    mobile: `url(${urls.mobile})`,
    tablet: `url(${urls.tablet})`,
    desktop: `url(${urls.desktop})`,
  };
}

/**
 * Example usage:
 * 
 * // Basic usage with default responsive sizes
 * const imageProps = getOptimizedImageProps({
 *   src: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg',
 *   crop: 'fill',
 *   gravity: 'auto',
 * });
 * 
 * <img {...imageProps} alt="About Us" />
 * 
 * // Custom sizes for specific use case
 * const heroImageProps = getOptimizedImageProps({
 *   src: 'hero-image.jpg',
 *   sizes: {
 *     mobile: 800,
 *     tablet: 1200,
 *     desktop: 1920,
 *   },
 *   crop: 'fill',
 *   gravity: 'center',
 * });
 * 
 * // For background images
 * const bgImages = getResponsiveBackgroundImage({
 *   src: 'background.jpg',
 *   sizes: {
 *     mobile: 800,
 *     tablet: 1536,
 *     desktop: 2400,
 *   },
 * });
 * 
 * // Use in CSS or inline styles with media queries
 */
