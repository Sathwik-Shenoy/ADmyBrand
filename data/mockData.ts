import { User, DashboardStats, MetricCard, RevenueData, CampaignData, TrafficSource } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: '/avatars/john.jpg',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    avatar: '/avatars/jane.jpg',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'manager',
    avatar: '/avatars/mike.jpg',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1234,
  activeUsers: 987,
  revenue: 52000,
  growth: 12.5,
};

export const mockMetricCards: MetricCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$54,239',
    delta: 12.5,
    progress: 75,
  },
  {
    id: '2',
    title: 'Active Users',
    value: '2,834',
    delta: -2.3,
    progress: 60,
  },
  {
    id: '3',
    title: 'Conversion Rate',
    value: '3.42%',
    delta: 8.7,
    progress: 82,
  },
  {
    id: '4',
    title: 'Avg. Order Value',
    value: '$89.32',
    delta: -5.1,
    progress: 45,
  },
];

// Mock Chart Data
export const mockRevenueData: RevenueData[] = [
  { date: '2024-01-01', revenue: 4200, previousRevenue: 3800 },
  { date: '2024-01-02', revenue: 4350, previousRevenue: 3950 },
  { date: '2024-01-03', revenue: 4100, previousRevenue: 3750 },
  { date: '2024-01-04', revenue: 4800, previousRevenue: 4200 },
  { date: '2024-01-05', revenue: 5200, previousRevenue: 4600 },
  { date: '2024-01-06', revenue: 4900, previousRevenue: 4300 },
  { date: '2024-01-07', revenue: 5100, previousRevenue: 4500 },
  { date: '2024-01-08', revenue: 5400, previousRevenue: 4800 },
  { date: '2024-01-09', revenue: 5600, previousRevenue: 5000 },
  { date: '2024-01-10', revenue: 5300, previousRevenue: 4700 },
  { date: '2024-01-11', revenue: 5800, previousRevenue: 5200 },
  { date: '2024-01-12', revenue: 6100, previousRevenue: 5500 },
  { date: '2024-01-13', revenue: 5900, previousRevenue: 5300 },
  { date: '2024-01-14', revenue: 6200, previousRevenue: 5600 },
  { date: '2024-01-15', revenue: 6500, previousRevenue: 5900 },
  { date: '2024-01-16', revenue: 6300, previousRevenue: 5700 },
  { date: '2024-01-17', revenue: 6800, previousRevenue: 6200 },
  { date: '2024-01-18', revenue: 7100, previousRevenue: 6500 },
  { date: '2024-01-19', revenue: 6900, previousRevenue: 6300 },
  { date: '2024-01-20', revenue: 7300, previousRevenue: 6700 },
  { date: '2024-01-21', revenue: 7600, previousRevenue: 7000 },
  { date: '2024-01-22', revenue: 7400, previousRevenue: 6800 },
  { date: '2024-01-23', revenue: 7800, previousRevenue: 7200 },
  { date: '2024-01-24', revenue: 8100, previousRevenue: 7500 },
  { date: '2024-01-25', revenue: 7900, previousRevenue: 7300 },
  { date: '2024-01-26', revenue: 8200, previousRevenue: 7600 },
  { date: '2024-01-27', revenue: 8500, previousRevenue: 7900 },
  { date: '2024-01-28', revenue: 8300, previousRevenue: 7700 },
  { date: '2024-01-29', revenue: 8700, previousRevenue: 8100 },
  { date: '2024-01-30', revenue: 9000, previousRevenue: 8400 },
];

export const mockCampaignData: CampaignData[] = [
  {
    name: 'Social Media',
    impressions: 45000,
    clicks: 2250,
    conversions: 180,
    cost: 1200,
  },
  {
    name: 'Google Ads',
    impressions: 38000,
    clicks: 1900,
    conversions: 152,
    cost: 1800,
  },
  {
    name: 'Email Campaign',
    impressions: 25000,
    clicks: 1750,
    conversions: 210,
    cost: 600,
  },
  {
    name: 'Display Ads',
    impressions: 32000,
    clicks: 1280,
    conversions: 96,
    cost: 950,
  },
  {
    name: 'Influencer',
    impressions: 18000,
    clicks: 900,
    conversions: 72,
    cost: 2200,
  },
];

export const mockTrafficSources: TrafficSource[] = [
  { name: 'Organic Search', value: 42, color: '#3b82f6' },
  { name: 'Direct Traffic', value: 28, color: '#10b981' },
  { name: 'Social Media', value: 18, color: '#f59e0b' },
  { name: 'Email Marketing', value: 8, color: '#ef4444' },
  { name: 'Paid Ads', value: 4, color: '#8b5cf6' },
];
