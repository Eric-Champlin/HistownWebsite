/**
 * Responsive Design Tokens and Constants
 * 
 * This file contains all responsive design constants used throughout the application.
 * These values align with Tailwind breakpoints and mobile-first design principles.
 */

// ============================================================================
// BREAKPOINTS
// ============================================================================

/**
 * Viewport breakpoints in pixels
 * These match the Tailwind configuration in tailwind.config.js
 */
export const BREAKPOINTS = {
  /** Extra small devices (< 475px) */
  XS: 475,
  /** Small devices / Large phones (640px+) */
  SM: 640,
  /** Medium devices / Tablets (768px+) */
  MD: 768,
  /** Large devices / Desktop (1024px+) */
  LG: 1024,
  /** Extra large devices / Large desktop (1280px+) */
  XL: 1280,
  /** 2X large devices / Extra large desktop (1536px+) */
  XXL: 1536,
} as const;

/**
 * Mobile-specific breakpoints for fine-grained control
 */
export const MOBILE_BREAKPOINTS = {
  /** iPhone SE (minimum target) */
  SMALL: 375,
  /** iPhone 12/13/14 (primary target) */
  MEDIUM: 390,
  /** iPhone 14 Pro Max (maximum mobile) */
  LARGE: 428,
} as const;

/**
 * Tablet-specific breakpoints
 */
export const TABLET_BREAKPOINTS = {
  /** Small tablet / Large phone landscape */
  SMALL: 640,
  /** iPad Mini / Standard tablet */
  MEDIUM: 768,
  /** iPad Pro / Large tablet */
  LARGE: 1024,
} as const;

/**
 * Desktop-specific breakpoints
 */
export const DESKTOP_BREAKPOINTS = {
  /** Minimum desktop size */
  SMALL: 1024,
  /** Standard desktop */
  MEDIUM: 1280,
  /** Large desktop / Monitor */
  LARGE: 1920,
} as const;

// ============================================================================
// TOUCH TARGETS
// ============================================================================

/**
 * Touch target sizes for mobile devices
 * Based on WCAG 2.1 Level AAA and platform guidelines
 */
export const TOUCH_TARGETS = {
  /** WCAG 2.1 Level AAA minimum (44x44px) */
  MINIMUM: 44,
  /** Apple/Material Design recommendation (48x48px) */
  RECOMMENDED: 48,
  /** Extra comfortable touch target (56x56px) */
  COMFORTABLE: 56,
  /** Large touch target for primary actions (64x64px) */
  LARGE: 64,
} as const;

/**
 * Touch target spacing (minimum space between interactive elements)
 */
export const TOUCH_SPACING = {
  /** Minimum spacing between touch targets */
  MINIMUM: 8,
  /** Recommended spacing between touch targets */
  RECOMMENDED: 12,
  /** Comfortable spacing between touch targets */
  COMFORTABLE: 16,
} as const;

// ============================================================================
// SPACING SCALE
// ============================================================================

/**
 * Mobile-first spacing scale (in pixels)
 * Use these for consistent spacing across mobile layouts
 */
export const MOBILE_SPACING = {
  /** Extra small spacing (4px) */
  XS: 4,
  /** Small spacing (8px) */
  SM: 8,
  /** Medium spacing (12px) */
  MD: 12,
  /** Large spacing (16px) */
  LG: 16,
  /** Extra large spacing (24px) */
  XL: 24,
  /** 2X large spacing (32px) */
  XXL: 32,
  /** 3X large spacing (48px) */
  XXXL: 48,
} as const;

/**
 * Tablet spacing scale (in pixels)
 * Slightly larger than mobile for more breathing room
 */
export const TABLET_SPACING = {
  /** Extra small spacing (8px) */
  XS: 8,
  /** Small spacing (12px) */
  SM: 12,
  /** Medium spacing (16px) */
  MD: 16,
  /** Large spacing (24px) */
  LG: 24,
  /** Extra large spacing (32px) */
  XL: 32,
  /** 2X large spacing (48px) */
  XXL: 48,
  /** 3X large spacing (64px) */
  XXXL: 64,
} as const;

/**
 * Desktop spacing scale (in pixels)
 * Larger spacing for desktop layouts
 */
export const DESKTOP_SPACING = {
  /** Extra small spacing (12px) */
  XS: 12,
  /** Small spacing (16px) */
  SM: 16,
  /** Medium spacing (24px) */
  MD: 24,
  /** Large spacing (32px) */
  LG: 32,
  /** Extra large spacing (48px) */
  XL: 48,
  /** 2X large spacing (64px) */
  XXL: 64,
  /** 3X large spacing (96px) */
  XXXL: 96,
} as const;

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

/**
 * Mobile typography scale (in pixels)
 * Optimized for readability on small screens
 */
export const MOBILE_TYPOGRAPHY = {
  /** Extra small text (12px) */
  XS: 12,
  /** Small text (14px) */
  SM: 14,
  /** Base text (16px) - Default body text */
  BASE: 16,
  /** Large text (18px) */
  LG: 18,
  /** Extra large text (20px) */
  XL: 20,
  /** H3 heading (24px) */
  H3: 24,
  /** H2 heading (28px) */
  H2: 28,
  /** H1 heading (32px) */
  H1: 32,
  /** Display heading (40px) */
  DISPLAY: 40,
} as const;

/**
 * Tablet typography scale (in pixels)
 * Slightly larger than mobile
 */
export const TABLET_TYPOGRAPHY = {
  /** Extra small text (12px) */
  XS: 12,
  /** Small text (14px) */
  SM: 14,
  /** Base text (16px) */
  BASE: 16,
  /** Large text (18px) */
  LG: 18,
  /** Extra large text (22px) */
  XL: 22,
  /** H3 heading (28px) */
  H3: 28,
  /** H2 heading (36px) */
  H2: 36,
  /** H1 heading (48px) */
  H1: 48,
  /** Display heading (56px) */
  DISPLAY: 56,
} as const;

/**
 * Desktop typography scale (in pixels)
 * Full-size typography for desktop
 */
export const DESKTOP_TYPOGRAPHY = {
  /** Extra small text (12px) */
  XS: 12,
  /** Small text (14px) */
  SM: 14,
  /** Base text (18px) - Larger for desktop readability */
  BASE: 18,
  /** Large text (20px) */
  LG: 20,
  /** Extra large text (24px) */
  XL: 24,
  /** H3 heading (30px) */
  H3: 30,
  /** H2 heading (48px) */
  H2: 48,
  /** H1 heading (72px) */
  H1: 72,
  /** Display heading (96px) */
  DISPLAY: 96,
} as const;

/**
 * Line height multipliers for different text sizes
 */
export const LINE_HEIGHTS = {
  /** Tight line height (1.25) - For headings */
  TIGHT: 1.25,
  /** Normal line height (1.5) - For body text */
  NORMAL: 1.5,
  /** Relaxed line height (1.75) - For large text */
  RELAXED: 1.75,
  /** Loose line height (2) - For extra spacing */
  LOOSE: 2,
} as const;

// ============================================================================
// CONTAINER WIDTHS
// ============================================================================

/**
 * Maximum container widths for different breakpoints
 */
export const CONTAINER_WIDTHS = {
  /** Mobile container (100% - padding) */
  MOBILE: '100%',
  /** Tablet container (720px) */
  TABLET: 720,
  /** Desktop container (1024px) */
  DESKTOP: 1024,
  /** Large desktop container (1280px) */
  LARGE: 1280,
  /** Extra large desktop container (1536px) */
  XLARGE: 1536,
} as const;

/**
 * Container padding for different breakpoints
 */
export const CONTAINER_PADDING = {
  /** Mobile padding (16px) */
  MOBILE: 16,
  /** Tablet padding (24px) */
  TABLET: 24,
  /** Desktop padding (32px) */
  DESKTOP: 32,
} as const;

// ============================================================================
// GRID COLUMNS
// ============================================================================

/**
 * Grid column counts for different breakpoints
 */
export const GRID_COLUMNS = {
  /** Mobile grid (1 column) */
  MOBILE: 1,
  /** Tablet grid (2 columns) */
  TABLET: 2,
  /** Desktop grid (3 columns) */
  DESKTOP: 3,
  /** Large desktop grid (4 columns) */
  LARGE: 4,
} as const;

/**
 * Grid gap sizes for different breakpoints
 */
export const GRID_GAPS = {
  /** Mobile gap (16px) */
  MOBILE: 16,
  /** Tablet gap (24px) */
  TABLET: 24,
  /** Desktop gap (32px) */
  DESKTOP: 32,
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

/**
 * Z-index scale for consistent layering
 * Use these instead of arbitrary z-index values
 */
export const Z_INDEX = {
  /** Base layer (0) */
  BASE: 0,
  /** Dropdown layer (10) */
  DROPDOWN: 10,
  /** Sticky elements (20) */
  STICKY: 20,
  /** Fixed elements (30) */
  FIXED: 30,
  /** Chat button (40) */
  CHAT_BUTTON: 40,
  /** Chat popup (45) */
  CHAT_POPUP: 45,
  /** Mobile menu (50) */
  MOBILE_MENU: 50,
  /** Modal backdrop (60) */
  MODAL_BACKDROP: 60,
  /** Modal content (70) */
  MODAL: 70,
  /** Tooltip (80) */
  TOOLTIP: 80,
  /** Toast notifications (90) */
  TOAST: 90,
  /** Maximum z-index (100) */
  MAX: 100,
} as const;

// ============================================================================
// ANIMATION DURATIONS
// ============================================================================

/**
 * Animation duration constants (in milliseconds)
 */
export const ANIMATION_DURATION = {
  /** Instant (0ms) - No animation */
  INSTANT: 0,
  /** Fast (150ms) - Quick transitions */
  FAST: 150,
  /** Normal (300ms) - Standard transitions */
  NORMAL: 300,
  /** Slow (500ms) - Deliberate animations */
  SLOW: 500,
  /** Very slow (1000ms) - Emphasis animations */
  VERY_SLOW: 1000,
} as const;

/**
 * Animation easing functions
 */
export const ANIMATION_EASING = {
  /** Linear easing */
  LINEAR: 'linear',
  /** Ease in */
  EASE_IN: 'ease-in',
  /** Ease out */
  EASE_OUT: 'ease-out',
  /** Ease in-out */
  EASE_IN_OUT: 'ease-in-out',
  /** Custom ease out */
  EASE_OUT_CUSTOM: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
} as const;

// ============================================================================
// VIEWPORT DETECTION UTILITIES
// ============================================================================

/**
 * Check if current viewport is mobile
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.MD;
};

/**
 * Check if current viewport is tablet
 */
export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.MD && window.innerWidth < BREAKPOINTS.LG;
};

/**
 * Check if current viewport is desktop
 */
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.LG;
};

/**
 * Get current breakpoint name
 */
export const getCurrentBreakpoint = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';
  
  if (window.innerWidth < BREAKPOINTS.MD) return 'mobile';
  if (window.innerWidth < BREAKPOINTS.LG) return 'tablet';
  return 'desktop';
};

// ============================================================================
// MEDIA QUERY STRINGS
// ============================================================================

/**
 * Media query strings for use in CSS-in-JS or matchMedia
 */
export const MEDIA_QUERIES = {
  /** Mobile only (max-width: 767px) */
  MOBILE_ONLY: `(max-width: ${BREAKPOINTS.MD - 1}px)`,
  /** Tablet only (min-width: 768px and max-width: 1023px) */
  TABLET_ONLY: `(min-width: ${BREAKPOINTS.MD}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`,
  /** Desktop only (min-width: 1024px) */
  DESKTOP_ONLY: `(min-width: ${BREAKPOINTS.LG}px)`,
  /** Tablet and above (min-width: 768px) */
  TABLET_UP: `(min-width: ${BREAKPOINTS.MD}px)`,
  /** Desktop and above (min-width: 1024px) */
  DESKTOP_UP: `(min-width: ${BREAKPOINTS.LG}px)`,
  /** Prefers reduced motion */
  REDUCED_MOTION: '(prefers-reduced-motion: reduce)',
  /** Prefers dark mode */
  DARK_MODE: '(prefers-color-scheme: dark)',
  /** High resolution displays */
  RETINA: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
} as const;

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Export all constants as a single object for convenience
 */
export const RESPONSIVE = {
  BREAKPOINTS,
  MOBILE_BREAKPOINTS,
  TABLET_BREAKPOINTS,
  DESKTOP_BREAKPOINTS,
  TOUCH_TARGETS,
  TOUCH_SPACING,
  MOBILE_SPACING,
  TABLET_SPACING,
  DESKTOP_SPACING,
  MOBILE_TYPOGRAPHY,
  TABLET_TYPOGRAPHY,
  DESKTOP_TYPOGRAPHY,
  LINE_HEIGHTS,
  CONTAINER_WIDTHS,
  CONTAINER_PADDING,
  GRID_COLUMNS,
  GRID_GAPS,
  Z_INDEX,
  ANIMATION_DURATION,
  ANIMATION_EASING,
  MEDIA_QUERIES,
} as const;

export default RESPONSIVE;
