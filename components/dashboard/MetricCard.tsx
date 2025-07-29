'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  delta: number;
  progress: number; // 0-100
  className?: string;
  style?: React.CSSProperties;
}

export function MetricCard({ title, value, delta, progress, className, style }: MetricCardProps) {
  const [animatedProgress, setAnimatedProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const isPositive = delta >= 0;
  
  // Animate progress on mount with intersection observer
  React.useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200);
    return () => clearTimeout(timer);
  }, [progress]);

  // Calculate stroke properties for circular progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group cursor-pointer border-border/50 backdrop-blur-sm",
        "hover:border-primary/30 hover:bg-card/90",
        className
      )}
      style={style}
    >
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between h-full">
          <div className="space-y-3 flex-1">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              {title}
            </p>
            <div className="space-y-2">
              <p className="text-3xl font-bold tracking-tight text-foreground">
                {value}
              </p>
              <div className="flex items-center space-x-2">
                <div 
                  className={cn(
                    "flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200",
                    isPositive 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  )}
                >
                  <span className={cn(
                    "text-sm transition-transform duration-200 group-hover:scale-125",
                    isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  )}>
                    {isPositive ? "▲" : "▼"}
                  </span>
                  <span>{Math.abs(delta)}%</span>
                </div>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </div>
          </div>
          
          {/* Circular Progress */}
          <div className="relative ml-4">
            <div className="relative">
              <svg
                className="transform -rotate-90 w-16 h-16 drop-shadow-sm"
                viewBox="0 0 100 100"
              >
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-muted/10"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                  strokeLinecap="round"
                  className={cn(
                    "transition-all duration-2000 ease-out",
                    isPositive 
                      ? "text-green-500 dark:text-green-400" 
                      : "text-blue-500 dark:text-blue-400"
                  )}
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))'
                  }}
                />
              </svg>
              {/* Progress text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={cn(
                  "text-xs font-bold transition-all duration-500",
                  isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0",
                  isPositive 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-blue-600 dark:text-blue-400"
                )}>
                  {animatedProgress}%
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
          "bg-gradient-to-br from-primary/8 via-transparent to-primary/12"
        )} />
        
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-primary to-transparent rounded-full blur-2xl" />
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricCardsGridProps {
  metrics: Array<{
    id: string;
    title: string;
    value: string;
    delta: number;
    progress: number;
  }>;
  className?: string;
}

export function MetricCardsGrid({ metrics, className }: MetricCardsGridProps) {
  return (
    <div 
      className={cn(
        "grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.id}
          title={metric.title}
          value={metric.value}
          delta={metric.delta}
          progress={metric.progress}
          className="animate-in fade-in-0 slide-in-from-bottom-8"
          style={{
            animationDelay: `${index * 150}ms`,
            animationDuration: '600ms',
            animationFillMode: 'both'
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
