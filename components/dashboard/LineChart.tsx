'use client';

import * as React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { RevenueData } from '@/types';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const currentRevenue = payload[0]?.value;
    const previousRevenue = payload[1]?.value;
    const change = currentRevenue && previousRevenue 
      ? ((currentRevenue - previousRevenue) / previousRevenue * 100).toFixed(1)
      : 0;

    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="text-sm font-medium mb-2">
          {new Date(label || '').toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-muted-foreground">Current:</span>
            <span className="text-sm font-medium">${currentRevenue?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400" />
            <span className="text-sm text-muted-foreground">Previous:</span>
            <span className="text-sm font-medium">${previousRevenue?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t">
            <span className="text-sm text-muted-foreground">Change:</span>
            <span className={cn(
              "text-sm font-medium",
              Number(change) >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            )}>
              {Number(change) >= 0 ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

interface LineChartProps {
  data: RevenueData[];
  isLoading?: boolean;
  className?: string;
}

export function LineChart({ data, isLoading = false, className }: LineChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-2">
          <Skeleton className="h-5 w-32 sm:h-6 sm:w-48" />
          <Skeleton className="h-3 w-48 sm:h-4 sm:w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[250px] sm:h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2 bg-gradient-to-r from-card to-blue-50/30 dark:to-blue-950/30 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Revenue Trend</CardTitle>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Daily revenue comparison for the last 30 days
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Real-time</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mobile: Horizontal scroll container */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[500px] sm:min-w-0 h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => 
                    new Date(value).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })
                  }
                  className="text-xs sm:text-sm text-muted-foreground"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  className="text-xs sm:text-sm text-muted-foreground"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                  name="Current Period"
                />
                <Line
                  type="monotone"
                  dataKey="previousRevenue"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 2, r: 2 }}
                  name="Previous Period"
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
