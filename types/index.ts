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

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
}
