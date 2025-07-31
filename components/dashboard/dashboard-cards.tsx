import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardStats } from '@/types';

interface DashboardStatsCardProps {
  stats: DashboardStats;
}

export function DashboardStatsCard({ stats }: DashboardStatsCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${stats.revenue.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{stats.growth}%</div>
        </CardContent>
      </Card>
    </div>
  );
}

export function DashboardHeader() {
  return (
    <div className="space-y-4 animate-in fade-in-0 slide-in-from-top-4 duration-700">
      <div className="flex items-center space-x-2">
        <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Dashboard
        </h1>
      </div>
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
        Welcome to your analytics dashboard. Monitor your campaigns, track performance metrics, and gain insights into your business growth.
      </p>
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Live data • Last updated just now</span>
      </div>
    </div>
  );
}
