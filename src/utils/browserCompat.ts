/**
 * Browser Compatibility Utilities
 * 
 * Provides fallbacks and polyfills for browser-specific features
 * Target browsers: iOS Safari 14+, Chrome Mobile 90+, Samsung Internet 14+, Firefox Mobile 90+
 */

/**
 * Set CSS custom property for actual viewport height
 * Handles iOS Safari address bar issue where 100vh includes the address bar
 */
export const setViewportHeight = (): void => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

/**
 * Initialize viewport height and listen for changes
 */
export const initViewportHeight = (): (() => void) => {
  setViewportHeight();
  
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', setViewportHeight);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', setViewportHeight);
    window.removeEventListener('orientationchange', setViewportHeight);
  };
};

/**
 * Smooth scroll to element with fallback for browsers that don't support scroll-behavior
 */
export const smoothScrollTo = (element: HTMLElement, options?: ScrollIntoViewOptions): void => {
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollIntoView({ behavior: 'smooth', ...options });
  } else {
    // Fallback: instant scroll
    element.scrollIntoView(options);
  }
};

/**
 * Check if backdrop-filter is supported
 */
export const supportsBackdropFilter = (): boolean => {
  return CSS.supports('backdrop-filter', 'blur(10px)') || 
         CSS.supports('-webkit-backdrop-filter', 'blur(10px)');
};

/**
 * Check if IntersectionObserver is supported
 */
export const supportsIntersectionObserver = (): boolean => {
  return 'IntersectionObserver' in window;
};

/**
 * Check if touch events are supported
 */
export const supportsTouchEvents = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Check if pointer events are supported (unified touch/mouse)
 */
export const supportsPointerEvents = (): boolean => {
  return 'onpointerdown' in window;
};

/**
 * Get the appropriate event type for the current browser
 */
export const getEventType = (type: 'start' | 'move' | 'end'): string => {
  if (supportsPointerEvents()) {
    const pointerEvents = {
      start: 'pointerdown',
      move: 'pointermove',
      end: 'pointerup',
    };
    return pointerEvents[type];
  } else if (supportsTouchEvents()) {
    const touchEvents = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
    };
    return touchEvents[type];
  } else {
    const mouseEvents = {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup',
    };
    return mouseEvents[type];
  }
};

/**
 * Detect iOS Safari
 */
export const isIOSSafari = (): boolean => {
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const webkit = /WebKit/.test(ua);
  const notChrome = !/CriOS/.test(ua);
  const notFirefox = !/FxiOS/.test(ua);
  
  return iOS && webkit && notChrome && notFirefox;
};

/**
 * Detect Chrome Mobile
 */
export const isChromeMobile = (): boolean => {
  const ua = navigator.userAgent;
  return /Chrome/.test(ua) && /Mobile/.test(ua) && !/Edge/.test(ua);
};

/**
 * Detect Samsung Internet
 */
export const isSamsungInternet = (): boolean => {
  return /SamsungBrowser/.test(navigator.userAgent);
};

/**
 * Detect Firefox Mobile
 */
export const isFirefoxMobile = (): boolean => {
  const ua = navigator.userAgent;
  return /Firefox/.test(ua) && /Mobile/.test(ua);
};

/**
 * Get browser name
 */
export const getBrowserName = (): string => {
  if (isIOSSafari()) return 'iOS Safari';
  if (isChromeMobile()) return 'Chrome Mobile';
  if (isSamsungInternet()) return 'Samsung Internet';
  if (isFirefoxMobile()) return 'Firefox Mobile';
  return 'Unknown';
};

/**
 * Prevent iOS zoom on input focus
 * Ensures all inputs have minimum 16px font size
 */
export const preventIOSZoom = (): void => {
  if (isIOSSafari()) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      const styles = window.getComputedStyle(element);
      const fontSize = parseFloat(styles.fontSize);
      
      if (fontSize < 16) {
        element.style.fontSize = '16px';
      }
    });
  }
};

/**
 * Enable smooth scrolling on iOS
 */
export const enableIOSSmoothScrolling = (): void => {
  if (isIOSSafari()) {
    const scrollableElements = document.querySelectorAll('[style*="overflow"]');
    scrollableElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      (htmlElement.style as any).webkitOverflowScrolling = 'touch';
    });
  }
};

/**
 * Disable pull-to-refresh on mobile browsers
 */
export const disablePullToRefresh = (): void => {
  let lastTouchY = 0;
  let preventPullToRefresh = false;

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    lastTouchY = e.touches[0].clientY;
    preventPullToRefresh = window.pageYOffset === 0;
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (preventPullToRefresh && touchYDelta > 0) {
      e.preventDefault();
    }
  }, { passive: false });
};

/**
 * Initialize all browser compatibility features
 */
export const initBrowserCompat = (): (() => void) => {
  const cleanupVH = initViewportHeight();
  preventIOSZoom();
  enableIOSSmoothScrolling();
  
  // Log browser info for debugging
  console.log(`Browser: ${getBrowserName()}`);
  console.log(`Backdrop Filter: ${supportsBackdropFilter() ? 'Supported' : 'Not Supported'}`);
  console.log(`IntersectionObserver: ${supportsIntersectionObserver() ? 'Supported' : 'Not Supported'}`);
  console.log(`Touch Events: ${supportsTouchEvents() ? 'Supported' : 'Not Supported'}`);
  console.log(`Pointer Events: ${supportsPointerEvents() ? 'Supported' : 'Not Supported'}`);
  
  // Return cleanup function
  return cleanupVH;
};

/**
 * Feature detection object
 */
export const features = {
  backdropFilter: supportsBackdropFilter(),
  intersectionObserver: supportsIntersectionObserver(),
  touchEvents: supportsTouchEvents(),
  pointerEvents: supportsPointerEvents(),
  isIOSSafari: isIOSSafari(),
  isChromeMobile: isChromeMobile(),
  isSamsungInternet: isSamsungInternet(),
  isFirefoxMobile: isFirefoxMobile(),
};
