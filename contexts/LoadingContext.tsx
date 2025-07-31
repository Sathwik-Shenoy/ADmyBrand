'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Loading time constants
const INITIAL_LOADING_DELAY = 1500; // 1.5 seconds
const CHART_REFRESH_DELAY = 1000; // 1 second

interface LoadingContextType {
  isInitialLoading: boolean;
  isChartRefreshing: boolean;
  setChartRefreshing: (loading: boolean) => void;
  refreshCharts: () => Promise<void>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isChartRefreshing, setIsChartRefreshing] = useState(false);

  // Simulate initial loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, INITIAL_LOADING_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const refreshCharts = useCallback(async () => {
    setIsChartRefreshing(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, CHART_REFRESH_DELAY));
    } catch (error) {
      console.error('Error refreshing charts:', error);
    } finally {
      setIsChartRefreshing(false);
    }
  }, []);

  return (
    <LoadingContext.Provider 
      value={{ 
        isInitialLoading, 
        isChartRefreshing, 
        setChartRefreshing: setIsChartRefreshing,
        refreshCharts 
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
