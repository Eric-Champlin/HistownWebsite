# Image Optimization Guide

## Overview

This guide explains how to use the Cloudinary responsive image utility to optimize images across the HisTown website for mobile, tablet, and desktop viewports.

## Benefits

- **Automatic responsive sizing**: Images are automatically sized for mobile (800px), tablet (1536px), and desktop (2048px)
- **Quality optimization**: Uses Cloudinary's `q_auto` for automatic quality optimization
- **Format optimization**: Uses Cloudinary's `f_auto` to serve WebP/AVIF when supported
- **Lazy loading**: Images below the fold are lazy-loaded for better performance
- **Device pixel ratio support**: Automatically serves 2x images for retina displays
- **Reduced bandwidth**: Mobile users download smaller images

## Components

### 1. ResponsiveImage Component

The easiest way to use optimized images is with the `ResponsiveImage` component:

```tsx
import { ResponsiveImage } from '../components/common/ResponsiveImage';

// Basic usage
<ResponsiveImage
  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg"
  alt="About Us"
  className="w-full h-full object-cover"
/>

// With custom crop and gravity
<ResponsiveImage
  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg"
  alt="About Us"
  className="w-full h-full object-cover"
  crop="fill"
  gravity="center"
/>

// Above-the-fold image (eager loading)
<ResponsiveImage
  src="hero-image.jpg"
  alt="Hero"
  className="w-full h-full object-cover"
  eager={true}
/>

// Custom sizes for specific use case
<ResponsiveImage
  src="thumbnail.jpg"
  alt="Thumbnail"
  className="w-32 h-32 object-cover"
  sizes={{
    mobile: 256,   // 2x for 128px display
    tablet: 512,   // 2x for 256px display
    desktop: 512,  // 2x for 256px display
  }}
/>
```

### 2. Cloudinary Utility Functions

For more control, use the utility functions directly:

```tsx
import { 
  getOptimizedImageProps,
  getResponsiveImageUrls,
  getResponsiveBackgroundImage 
} from '../utils/cloudinaryImage';

// Get optimized props for img tag
const imageProps = getOptimizedImageProps({
  src: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg',
  crop: 'fill',
  gravity: 'center',
});

<img {...imageProps} alt="About Us" className="w-full h-full object-cover" />

// Get URLs for different breakpoints
const urls = getResponsiveImageUrls({
  src: 'image.jpg',
  sizes: {
    mobile: 800,
    tablet: 1536,
    desktop: 2048,
  },
});

// Use in picture element
<picture>
  <source media="(min-width: 1024px)" srcSet={urls.desktop} />
  <source media="(min-width: 768px)" srcSet={urls.tablet} />
  <img src={urls.mobile} alt="Responsive" />
</picture>

// For background images
const bgImages = getResponsiveBackgroundImage({
  src: 'background.jpg',
  sizes: {
    mobile: 800,
    tablet: 1536,
    desktop: 2400,
  },
});

// Use with Tailwind or inline styles
<div 
  className="bg-cover bg-center"
  style={{
    backgroundImage: bgImages.mobile,
    // Use media queries for larger screens
  }}
/>
```

## Migration Guide

### Before (Hardcoded Cloudinary URL)

```tsx
<img 
  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg"
  alt="About Us"
  className="w-full h-full object-cover"
/>
```

### After (Optimized with ResponsiveImage)

```tsx
<ResponsiveImage
  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg"
  alt="About Us"
  className="w-full h-full object-cover"
  crop="fill"
  gravity="center"
/>
```

### Before (Background Image)

```tsx
<div 
  className="bg-cover bg-center"
  style={{
    backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg)',
  }}
/>
```

### After (Optimized Background)

```tsx
import { getResponsiveBackgroundImage } from '../utils/cloudinaryImage';

const bgImages = getResponsiveBackgroundImage({
  src: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910666/About_Us_tgzrww.jpg',
  sizes: {
    mobile: 800,
    tablet: 1536,
    desktop: 2400,
  },
});

// Use with CSS-in-JS or Tailwind
<div 
  className="bg-cover bg-center"
  style={{
    backgroundImage: bgImages.mobile,
  }}
/>

// Or use media queries in CSS
```

## Configuration Options

### CloudinaryImageConfig

```typescript
interface CloudinaryImageConfig {
  src: string;              // Cloudinary URL or public ID
  width?: number;           // Width in pixels
  height?: number;          // Height in pixels
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'pad' | 'limit';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  gravity?: 'auto' | 'center' | 'face' | 'faces' | 'north' | 'south' | 'east' | 'west';
  dpr?: 1 | 2 | 3 | 'auto';
  transformations?: string[]; // Additional Cloudinary transformations
}
```

### ResponsiveImageConfig

```typescript
interface ResponsiveImageConfig {
  src: string;
  sizes?: {
    mobile?: number;   // Default: 800px (2x for 400px viewport)
    tablet?: number;   // Default: 1536px (2x for 768px viewport)
    desktop?: number;  // Default: 2048px (2x for 1024px viewport)
  };
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'pad' | 'limit';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  includeDpr?: boolean; // Default: true
}
```

## Common Use Cases

### Hero Images

```tsx
<ResponsiveImage
  src="hero-image.jpg"
  alt="Hero"
  className="w-full h-full object-cover"
  crop="fill"
  gravity="center"
  eager={true}  // Load immediately (above the fold)
  sizes={{
    mobile: 800,
    tablet: 1536,
    desktop: 2400,  // Larger for hero images
  }}
/>
```

### Thumbnails

```tsx
<ResponsiveImage
  src="thumbnail.jpg"
  alt="Thumbnail"
  className="w-32 h-32 object-cover rounded-lg"
  crop="thumb"
  gravity="face"  // Focus on faces for thumbnails
  sizes={{
    mobile: 256,   // 2x for 128px
    tablet: 256,
    desktop: 256,
  }}
/>
```

### Card Images

```tsx
<ResponsiveImage
  src="card-image.jpg"
  alt="Card"
  className="w-full h-64 object-cover"
  crop="fill"
  gravity="auto"
  sizes={{
    mobile: 800,
    tablet: 1024,
    desktop: 1024,
  }}
/>
```

### Background Images

```tsx
const bgImages = getResponsiveBackgroundImage({
  src: 'background.jpg',
  crop: 'fill',
  gravity: 'center',
  sizes: {
    mobile: 800,
    tablet: 1536,
    desktop: 2400,
  },
});

<div 
  className="min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: bgImages.mobile,
  }}
>
  {/* Content */}
</div>
```

## Performance Tips

1. **Use eager loading sparingly**: Only use `eager={true}` for above-the-fold images
2. **Choose appropriate sizes**: Don't use desktop-sized images for thumbnails
3. **Use appropriate crop modes**: 
   - `fill`: Fills the dimensions, may crop
   - `fit`: Fits within dimensions, no cropping
   - `thumb`: Generates a thumbnail with face detection
4. **Let Cloudinary optimize**: Use `quality="auto"` and `format="auto"` for best results
5. **Use gravity wisely**: 
   - `auto`: Cloudinary's AI determines focus
   - `face`/`faces`: Focus on faces
   - `center`: Center crop

## Testing

Test images at different viewports:
- Mobile: 375px, 390px, 428px
- Tablet: 768px
- Desktop: 1024px, 1280px, 1920px

Check:
- [ ] Images load correctly at all breakpoints
- [ ] Lazy loading works (images below fold don't load immediately)
- [ ] Correct image sizes are served (check Network tab)
- [ ] Images have proper alt text
- [ ] No layout shift during image loading
- [ ] Images look sharp on retina displays

## Accessibility

Always include:
- Descriptive `alt` text for all images
- Empty `alt=""` for decorative images
- Proper ARIA labels when needed

```tsx
// Content image
<ResponsiveImage
  src="team-photo.jpg"
  alt="HisTown Dance Studio team members at annual recital"
  className="w-full h-full object-cover"
/>

// Decorative image
<ResponsiveImage
  src="decorative-pattern.jpg"
  alt=""
  className="w-full h-full object-cover"
  role="presentation"
/>
```

## Troubleshooting

### Images not loading
- Check that the Cloudinary URL is correct
- Verify the public ID is extracted correctly
- Check browser console for errors

### Images too large/small
- Adjust the `sizes` configuration
- Check the viewport width in DevTools
- Verify srcset is being generated correctly

### Images not lazy loading
- Check that the image is below the fold
- Verify IntersectionObserver is supported
- Use `eager={true}` for above-the-fold images

### Poor image quality
- Check the `quality` setting (default is 'auto')
- Verify the source image is high quality
- Check if format optimization is working (WebP/AVIF)

## Resources

- [Cloudinary Transformation Reference](https://cloudinary.com/documentation/image_transformations)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Lazy Loading Images](https://web.dev/lazy-loading-images/)
