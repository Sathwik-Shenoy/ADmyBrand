// Performance monitoring utilities for your dashboard
import React from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters?: Record<string, any>) => void;
  }
}

export function measureChartRenderTime(chartName: string) {
  const startTime = performance.now();
  
  return {
    end: () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Log performance metrics
      console.log(`${chartName} render time: ${renderTime.toFixed(2)}ms`);
      
      // Send to analytics (if implemented)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chart_render', {
          chart_name: chartName,
          render_time: Math.round(renderTime),
        });
      }
      
      return renderTime;
    }
  };
}

export function useChartPerformance(chartName: string) {
  const [renderTime, setRenderTime] = React.useState<number | null>(null);
  
  React.useEffect(() => {
    const measurement = measureChartRenderTime(chartName);
    
    return () => {
      const time = measurement.end();
      setRenderTime(time);
    };
  }, [chartName]);
  
  return renderTime;
}

// Cross-browser compatibility checks
export function getBrowserCompatibility() {
  const features = {
    flexbox: CSS.supports('display', 'flex'),
    grid: CSS.supports('display', 'grid'),
    customProperties: CSS.supports('--custom', 'property'),
    intersectionObserver: 'IntersectionObserver' in window,
    resizeObserver: 'ResizeObserver' in window,
  };
  
  return features;
}

// Performance budget checker
export function checkPerformanceBudget() {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      timeToFirstByte: navigation.responseStart - navigation.requestStart,
    };
    
    // Performance budgets (in milliseconds)
    const budgets = {
      loadTime: 3000, // 3 seconds
      domContentLoaded: 1500, // 1.5 seconds
      timeToFirstByte: 800, // 800ms
    };
    
    const results = Object.entries(metrics).map(([key, value]) => ({
      metric: key,
      value,
      budget: budgets[key as keyof typeof budgets],
      passed: value <= budgets[key as keyof typeof budgets],
    }));
    
    return results;
  }
  
  return [];
}
