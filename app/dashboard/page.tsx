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
            className="w-full sm:w-auto"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isChartRefreshing ? 'animate-spin' : ''}`} />
            Refresh Charts
          </Button>
        </div>
        
        {/* Animated Metric Cards */}
        <MetricCardsGrid 
          metrics={mockMetricCards}
          isLoading={isChartRefreshing}
        />
        
        {/* Analytics Charts - Mobile: Single column, Desktop: Grid */}
        <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          <LineChart 
            data={mockRevenueData} 
            className="w-full lg:col-span-2"
            isLoading={isChartRefreshing}
          />
          <BarChart 
            data={mockCampaignData} 
            className="w-full"
            isLoading={isChartRefreshing}
          />
          <DonutChart 
            data={mockTrafficSources} 
            className="w-full"
            isLoading={isChartRefreshing}
          />
        </div>
        
        <DashboardStatsCard stats={mockDashboardStats} />

        {/* Campaign Data Table */}
        <CampaignDataTable 
          data={mockCampaignTableData}
          isLoading={isChartRefreshing}
        />

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <p className="text-sm text-muted-foreground">
              A list of users who recently joined your application.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between space-x-4 rounded-lg p-4 border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="capitalize">
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
