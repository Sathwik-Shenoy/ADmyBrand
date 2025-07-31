'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card className="w-full" role="status" aria-label="Loading content">
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-32" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Skeleton className="h-8 w-24" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardContent>
      <span className="sr-only">Loading...</span>
    </Card>
  );
}

export function SkeletonChart() {
  return (
    <Card className="w-full" role="status" aria-label="Loading chart">
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-56" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart area */}
          <div className="h-64 sm:h-80 relative overflow-hidden rounded-lg bg-muted">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Mock chart elements */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-muted-foreground/20 rounded-t"
                  style={{
                    height: `${Math.random() * 120 + 40}px`,
                    width: '40px'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </CardContent>
      <span className="sr-only">Loading chart...</span>
    </Card>
  );
}

export function SkeletonTable() {
  return (
    <Card className="w-full" role="status" aria-label="Loading table">
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search and filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Skeleton className="h-10 w-full sm:w-80" />
            <Skeleton className="h-10 w-full sm:w-32" />
          </div>
          
          {/* Table header */}
          <div className="rounded-lg border overflow-hidden">
            <div className="border-b bg-muted/50 p-4">
              <div className="hidden sm:grid sm:grid-cols-5 gap-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="sm:hidden">
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            
            {/* Table rows */}
            <div className="relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-b p-4">
                  <div className="hidden sm:grid sm:grid-cols-5 gap-4 items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-14" />
                  </div>
                  <div className="sm:hidden space-y-3">
                    <Skeleton className="h-4 w-40" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <span className="sr-only">Loading table...</span>
    </Card>
  );
}
