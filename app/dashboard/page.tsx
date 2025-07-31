'use client';

import { 
  mockDashboardStats, 
  mockUsers, 
  mockMetricCards,
  mockRevenueData,
  mockCampaignData,
  mockTrafficSources,
  mockCampaignTableData
} from '@/data/mockData';
import { DashboardHeader, DashboardStatsCard } from '@/components/dashboard/dashboard-cards';
import { MetricCardsGrid } from '@/components/dashboard/MetricCard';
import { LineChart } from '@/components/dashboard/LineChart';
import { BarChart } from '@/components/dashboard/BarChart';
import { DonutChart } from '@/components/dashboard/DonutChart';
import { CampaignDataTable } from '@/components/dashboard/DataTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { SkeletonCard, SkeletonChart, SkeletonTable } from '@/components/ui/skeleton-components';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { useLoading } from '@/contexts/LoadingContext';

export default function DashboardPage() {
  const { isInitialLoading, isChartRefreshing, refreshCharts } = useLoading();

  if (isInitialLoading) {
    return (
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="space-y-4 sm:space-y-8">
          {/* Header skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-48 bg-muted animate-pulse rounded" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded" />
          </div>
          
          {/* Metric cards skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
          
          {/* Charts skeleton */}
          <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            <div className="lg:col-span-2">
              <SkeletonChart />
            </div>
            <SkeletonChart />
            <SkeletonChart />
          </div>
          
          {/* Stats card skeleton */}
          <SkeletonCard />
          
          {/* Table skeleton */}
          <SkeletonTable />
          
          {/* Users card skeleton */}
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
      <div className="space-y-4 sm:space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <DashboardHeader />
          <Button 
            onClick={refreshCharts}
            disabled={isChartRefreshing}
            variant="outline"
            size="sm"
            className="w-full sm:w-auto group border-2 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className={`h-4 w-4 mr-2 transition-transform duration-500 ${isChartRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} />
            <span className="font-medium">
              {isChartRefreshing ? 'Refreshing...' : 'Refresh Charts'}
            </span>
          </Button>
        </div>
        
        {/* Animated Metric Cards */}
        <MetricCardsGrid 
          metrics={mockMetricCards}
          isLoading={isChartRefreshing}
        />
        
        {/* Analytics Charts - Mobile: Single column, Desktop: Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Analytics Overview</h2>
              <p className="text-muted-foreground">Visual insights into your business performance</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            <ErrorBoundary>
              <LineChart 
                data={mockRevenueData} 
                className="w-full lg:col-span-2"
                isLoading={isChartRefreshing}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <BarChart 
                data={mockCampaignData} 
                className="w-full"
                isLoading={isChartRefreshing}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <DonutChart 
                data={mockTrafficSources} 
                className="w-full"
                isLoading={isChartRefreshing}
              />
            </ErrorBoundary>
          </div>
        </div>
        
        <DashboardStatsCard stats={mockDashboardStats} />

        {/* Campaign Data Table */}
        <ErrorBoundary>
          <CampaignDataTable 
            data={mockCampaignTableData}
            isLoading={isChartRefreshing}
          />
        </ErrorBoundary>

        {/* Users Table */}
        <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span>Recent Users</span>
                  <Badge variant="secondary" className="text-xs">
                    {mockUsers.length} total
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  A list of users who recently joined your application.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="group flex items-center justify-between space-x-4 rounded-xl p-4 border border-border/50 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-300 hover:shadow-md"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '500ms'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold text-white">
                        {user.name.charAt(0)}
                      </span>
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={user.role === 'admin' ? 'default' : 'outline'} 
                      className={`capitalize font-medium ${
                        user.role === 'admin' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300' :
                        user.role === 'manager' ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300' :
                        'bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300'
                      }`}
                    >
                      {user.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
