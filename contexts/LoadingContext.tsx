'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

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
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const refreshCharts = async () => {
    setIsChartRefreshing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsChartRefreshing(false);
  };

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
