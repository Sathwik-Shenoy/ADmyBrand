'use client';

import * as React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CampaignData } from '@/types';

interface CustomBarTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: CampaignData;
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

function CustomBarTooltip({ active, payload, label }: CustomBarTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload;
    const ctr = data ? ((data.clicks / data.impressions) * 100).toFixed(2) : 0;
    const conversionRate = data ? ((data.conversions / data.clicks) * 100).toFixed(2) : 0;
    const cpc = data ? (data.cost / data.clicks).toFixed(2) : 0;

    return (
      <div className="rounded-lg border bg-background p-4 shadow-md min-w-[200px]">
        <p className="text-sm font-medium mb-3 border-b pb-2">
          {label}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Impressions:</span>
            <span className="text-sm font-medium">{data?.impressions?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Clicks:</span>
            <span className="text-sm font-medium">{data?.clicks?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Conversions:</span>
            <span className="text-sm font-medium">{data?.conversions?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Cost:</span>
            <span className="text-sm font-medium">${data?.cost?.toLocaleString()}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">CTR:</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{ctr}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Conv. Rate:</span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">{conversionRate}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">CPC:</span>
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">${cpc}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

interface BarChartProps {
  data: CampaignData[];
  isLoading?: boolean;
  className?: string;
}

export function BarChart({ data, isLoading = false, className }: BarChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-2">
          <Skeleton className="h-5 w-36 sm:h-6 sm:w-48" />
          <Skeleton className="h-3 w-48 sm:h-4 sm:w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[250px] sm:h-[350px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2 bg-gradient-to-r from-card to-purple-50/30 dark:to-purple-950/30 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Campaign Performance</CardTitle>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Marketing campaign metrics and conversion data
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Updated</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[500px] sm:min-w-0 h-[250px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={data}
                margin={{
                  top: 20,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  className="text-xs sm:text-sm text-muted-foreground"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  className="text-xs sm:text-sm text-muted-foreground"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 9 }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tickFormatter={(value) => `$${value}`}
                  className="text-xs sm:text-sm text-muted-foreground"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 9 }}
                />
                <Tooltip content={<CustomBarTooltip />} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Bar
                  yAxisId="left"
                  dataKey="impressions"
                  fill="hsl(var(--chart-1))"
                  name="Impressions"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  yAxisId="left"
                  dataKey="clicks"
                  fill="hsl(var(--chart-2))"
                  name="Clicks"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  yAxisId="left"
                  dataKey="conversions"
                  fill="hsl(var(--chart-3))"
                  name="Conversions"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="cost"
                  fill="hsl(var(--chart-4))"
                  name="Cost ($)"
                  radius={[2, 2, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
