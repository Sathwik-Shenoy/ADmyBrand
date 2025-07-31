import React from 'react';

/**
 * Performance utilities for monitoring and optimizing component renders
 */

// Development-only performance monitoring
export const performanceLogger = {
  logSlowRender: (componentName: string, renderTime: number) => {
    if (process.env.NODE_ENV === 'development' && renderTime > 16) {
      console.warn(`🐌 Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
  },

  measureRender: <T extends any[]>(
    componentName: string,
    fn: (...args: T) => any
  ) => {
    return (...args: T) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      performanceLogger.logSlowRender(componentName, end - start);
      return result;
    };
  },
};

// Hook for measuring component render time
export function useRenderTime(componentName: string) {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    
    React.useEffect(() => {
      const end = performance.now();
      performanceLogger.logSlowRender(componentName, end - start);
    });
  }
}

// Constants for performance optimization
export const PERFORMANCE_CONSTANTS = {
  // Debounce delays
  SEARCH_DEBOUNCE: 300,
  RESIZE_DEBOUNCE: 100,
  
  // Animation durations
  FAST_ANIMATION: 150,
  NORMAL_ANIMATION: 300,
  SLOW_ANIMATION: 500,
  
  // Chart refresh intervals
  CHART_REFRESH_INTERVAL: 30000, // 30 seconds
  
  // Pagination defaults
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

// Type for animation durations
export type AnimationDuration = keyof typeof PERFORMANCE_CONSTANTS;
