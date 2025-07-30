export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  avatar?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  delta: number;
  progress: number; // 0-100 for circular progress
}

export interface RevenueData {
  date: string;
  revenue: number;
  previousRevenue: number;
}

export interface CampaignData {
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface CampaignTableRow {
  id: string;
  campaign: string;
  status: 'Active' | 'Paused' | 'Draft';
  clicks: number;
  cost: number;
  roi: number;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
}
