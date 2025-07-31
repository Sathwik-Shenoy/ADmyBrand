'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Progressive loading skeleton that matches your chart layouts
export function ChartSkeleton({ variant = 'line' }: { variant?: 'line' | 'bar' | 'donut' }) {
  return (
    <Card>
      <CardHeader className="pb-2 bg-gradient-to-r from-card to-blue-50/10 dark:to-blue-950/10 border-b border-border/30">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-5 w-32 sm:h-6 sm:w-48" />
            <Skeleton className="h-3 w-48 sm:h-4 w-64" />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-3 w-16 hidden sm:block" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {variant === 'line' && (
          <div className="space-y-4">
            {/* Simulate line chart */}
            <div className="h-[250px] sm:h-[300px] relative">
              <div className="absolute inset-0 flex items-end justify-between">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-12 w-1" style={{ height: `${20 + Math.random() * 80}%` }} />
                    <Skeleton className="h-3 w-8" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-20" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>
        )}
        
        {variant === 'bar' && (
          <div className="h-[300px] flex items-end justify-between space-x-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 flex-1">
                <Skeleton 
                  className="w-full" 
                  style={{ height: `${30 + Math.random() * 60}%` }}
                />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        )}
        
        {variant === 'donut' && (
          <div className="h-[300px] flex items-center justify-center">
            <div className="relative">
              <Skeleton className="h-48 w-48 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Shimmer effect for better UX
export function ShimmerSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] ${className}`} 
         style={{ 
           animation: 'shimmer 2s infinite linear',
           backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
         }} 
    />
  );
}
