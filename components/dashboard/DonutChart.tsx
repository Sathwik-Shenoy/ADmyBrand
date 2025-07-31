'use client';

import * as React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TrafficSource } from '@/types';

interface CustomDonutTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: TrafficSource;
    value: number;
    name: string;
  }>;
}

function CustomDonutTooltip({ active, payload }: CustomDonutTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <div className="flex items-center gap-2 mb-1">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: data.payload.color }}
          />
          <p className="text-sm font-medium">{data.name}</p>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between items-center gap-4">
            <span className="text-sm text-muted-foreground">Percentage:</span>
            <span className="text-sm font-bold">{data.value}%</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-sm text-muted-foreground">Traffic:</span>
            <span className="text-sm font-medium">
              {(data.value * 100).toLocaleString()} visits
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

const RADIAN = Math.PI / 180;

interface LabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
}

function renderCustomizedLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: LabelProps) {
  if (!cx || !cy || midAngle === undefined || !innerRadius || !outerRadius || !percent) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show label if percentage is > 5%
  if (percent < 0.05) return null;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

interface CustomLegendProps {
  payload?: Array<{
    value: string;
    color: string;
  }>;
}

function CustomLegend({ payload }: CustomLegendProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {payload?.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-muted-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

interface DonutChartProps {
  data: TrafficSource[];
  isLoading?: boolean;
  className?: string;
}

export function DonutChart({ data, isLoading = false, className }: DonutChartProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>(undefined);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-2">
          <Skeleton className="h-5 w-32 sm:h-6 sm:w-36" />
          <Skeleton className="h-3 w-48 sm:h-4 sm:w-56" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full" />
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-3 w-16 sm:h-4 sm:w-20" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2 bg-gradient-to-r from-card to-green-50/30 dark:to-green-950/30 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Traffic Sources</CardTitle>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Website traffic breakdown by source
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Live</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] sm:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={activeIndex === index ? 'hsl(var(--background))' : 'hsl(var(--background))'}
                    strokeWidth={activeIndex === index ? 3 : 1}
                    style={{
                      filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transformOrigin: 'center',
                      transition: 'all 0.2s ease-in-out',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomDonutTooltip />} />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Summary Stats */}
        <div className="mt-3 pt-3 border-t sm:mt-4 sm:pt-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Sessions</p>
              <p className="text-base sm:text-lg font-bold">
                {(data.reduce((sum, item) => sum + (item.value * 100), 0)).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Top Source</p>
              <p className="text-base sm:text-lg font-bold text-primary">
                {data.reduce((prev, current) => (prev.value > current.value) ? prev : current).name}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
