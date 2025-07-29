import { User, DashboardStats, MetricCard } from '@/types';

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
