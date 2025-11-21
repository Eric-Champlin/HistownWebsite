import { useEffect } from 'react';
import { measurePerformance } from '../../utils/performance';

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run performance monitoring in development
    if (import.meta.env.DEV) {
      const monitorPerformance = async () => {
        try {
          const fcp = await measurePerformance.getFCP();
          const lcp = await measurePerformance.getLCP();
          const connectionInfo = measurePerformance.getConnectionInfo();
          
          console.group('🚀 Performance Metrics');
          console.log(`First Contentful Paint: ${fcp.toFixed(2)}ms`);
          console.log(`Largest Contentful Paint: ${lcp.toFixed(2)}ms`);
          
          if (connectionInfo) {
            console.log(`Connection Type: ${connectionInfo.effectiveType}`);
            console.log(`Downlink: ${connectionInfo.downlink}Mbps`);
            console.log(`RTT: ${connectionInfo.rtt}ms`);
            console.log(`Save Data: ${connectionInfo.saveData}`);
          }
          
          console.log(`Prefers Reduced Motion: ${measurePerformance.prefersReducedMotion()}`);
          console.groupEnd();
          
          // Warn about poor performance
          if (fcp > 2500) {
            console.warn('⚠️ First Contentful Paint is slow (>2.5s)');
          }
          
          if (lcp > 4000) {
            console.warn('⚠️ Largest Contentful Paint is slow (>4s)');
          }
          
        } catch (error) {
          console.error('Performance monitoring error:', error);
        }
      };

      // Run after page load
      setTimeout(monitorPerformance, 1000);
    }
  }, []);

  // This component doesn't render anything
  return null;
}