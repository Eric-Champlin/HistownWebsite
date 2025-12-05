import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getOptimizedImageProps, ResponsiveImageConfig } from '../../utils/cloudinaryImage';

interface ResponsiveImageProps extends Omit<ResponsiveImageConfig, 'src'> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  eager?: boolean; // Override lazy loading for above-the-fold images
}

/**
 * ResponsiveImage component with Cloudinary optimization
 * 
 * Features:
 * - Automatic responsive image generation with srcset
 * - Lazy loading with intersection observer
 * - Cloudinary transformations (quality, format, size optimization)
 * - Loading states and error handling
 * - Optimized for mobile, tablet, and desktop viewports
 * 
 * Usage:
 * <ResponsiveImage
 *   src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg"
 *   alt="About Us"
 *   className="w-full h-full object-cover"
 *   crop="fill"
 *   gravity="center"
 * />
 */
export function ResponsiveImage({
  src,
  alt,
  className = '',
  placeholder,
  eager = false,
  ...cloudinaryConfig
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  const imgRef = useRef<HTMLImageElement>(null);

  // Get optimized image props from Cloudinary utility
  const imageProps = getOptimizedImageProps({
    src,
    ...cloudinaryConfig,
  });

  // Preload image when it comes into view (or immediately if eager)
  useEffect(() => {
    if ((eager || isIntersecting) && !isLoaded && !hasError) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setHasError(true);
      img.src = imageProps.src;
    }
  }, [eager, isIntersecting, imageProps.src, isLoaded, hasError]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder or loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
              aria-hidden="true"
            />
          ) : (
            <div className="w-8 h-8 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="w-8 h-8 mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/>
              </svg>
            </div>
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Actual image with responsive srcset */}
      {((eager || isIntersecting) || isLoaded) && !hasError && (
        <img
          ref={imgRef}
          src={imageProps.src}
          srcSet={imageProps.srcSet}
          sizes={imageProps.sizes}
          alt={alt}
          loading={eager ? 'eager' : imageProps.loading}
          decoding={imageProps.decoding}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
