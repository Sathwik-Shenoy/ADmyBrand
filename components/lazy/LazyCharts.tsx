'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Lazy load chart components for better performance
export const LazyLineChart = dynamic(
  () => import('@/components/dashboard/LineChart').then(mod => ({ default: mod.LineChart })),
  {
    loading: () => (
      <Card>
        <CardHeader className="pb-2">
          <Skeleton className="h-5 w-32 sm:h-6 sm:w-48" />
          <Skeleton className="h-3 w-48 sm:h-4 sm:w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[250px] sm:h-[300px] w-full" />
        </CardContent>
      </Card>
    ),
    ssr: false
  }
);

export const LazyBarChart = dynamic(
  () => import('@/components/dashboard/BarChart').then(mod => ({ default: mod.BarChart })),
  {
    loading: () => (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    ),
    ssr: false
  }
);

export const LazyDonutChart = dynamic(
  () => import('@/components/dashboard/DonutChart').then(mod => ({ default: mod.DonutChart })),
  {
    loading: () => (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    ),
    ssr: false
  }
);
