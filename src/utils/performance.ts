// Performance monitoring utilities

export const measurePerformance = {
  // Measure First Contentful Paint
  getFCP: (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } else {
        resolve(0);
      }
    });
  },

  // Measure Largest Contentful Paint
  getLCP: (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(0);
        }, 10000);
      } else {
        resolve(0);
      }
    });
  },

  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check connection quality
  getConnectionInfo: () => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    
    return null;
  },

  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Resource hints for better performance
export const addResourceHints = () => {
  const head = document.head;

  // Preconnect to external domains
  const preconnectDomains = [
    'https://res.cloudinary.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
  });

  // DNS prefetch for other domains
  const dnsPrefetchDomains = [
    'https://www.google-analytics.com'
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    head.appendChild(link);
  });
};

// Critical resource preloading
export const preloadCriticalResources = () => {
  const criticalImages = [
    'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222737/4L3t1SQ_gqvwxi.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};