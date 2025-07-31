'use client';

import React, { useState, useMemo, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, Search } from 'lucide-react';
import { CampaignTableRow } from '@/types';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface CampaignDataTableProps {
  data: CampaignTableRow[];
  isLoading?: boolean;
  className?: string;
}

const StatusBadge = ({ status }: { status: CampaignTableRow['status'] }) => {
  const variants = {
    Active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    Paused: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    Draft: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  };

  return (
    <Badge className={`${variants[status]} border-0 text-xs`}>
      {status}
    </Badge>
  );
};

export function CampaignDataTable({ data, isLoading = false, className }: CampaignDataTableProps) {
  const [filterText, setFilterText] = useState('');
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter data based on search text
  const filteredItems = useMemo(() => {
    return data.filter(
      item =>
        item.campaign.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [data, filterText]);

  // Mobile columns (compact view for small screens)
  const mobileColumns = [
    {
      name: 'Campaign Details',
      selector: (row: CampaignTableRow) => row.campaign,
      sortable: true,
      cell: (row: CampaignTableRow) => (
        <div className="py-3 px-2">
          <div className="font-medium text-foreground text-sm mb-2">{row.campaign}</div>
          <div className="flex items-center justify-between mb-2">
            <StatusBadge status={row.status} />
            <span className={`text-xs font-bold ${
              row.roi > 200 
                ? 'text-green-600 dark:text-green-400' 
                : row.roi > 100 
                ? 'text-yellow-600 dark:text-yellow-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {row.roi.toFixed(1)}% ROI
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">{row.clicks.toLocaleString()} clicks</span>
            <span className="font-mono">${row.cost.toLocaleString()}</span>
          </div>
        </div>
      ),
    },
  ];

  // Desktop columns (full columns for larger screens)
  const desktopColumns = [
    {
      name: 'Campaign',
      selector: (row: CampaignTableRow) => row.campaign,
      sortable: true,
      cell: (row: CampaignTableRow) => (
        <div className="py-2">
          <div className="font-medium text-foreground">{row.campaign}</div>
        </div>
      ),
    },
    {
      name: 'Status',
      selector: (row: CampaignTableRow) => row.status,
      sortable: true,
      cell: (row: CampaignTableRow) => <StatusBadge status={row.status} />,
    },
    {
      name: 'Clicks',
      selector: (row: CampaignTableRow) => row.clicks,
      sortable: true,
      cell: (row: CampaignTableRow) => (
        <span className="font-mono text-foreground">
          {row.clicks.toLocaleString()}
        </span>
      ),
    },
    {
      name: 'Cost',
      selector: (row: CampaignTableRow) => row.cost,
      sortable: true,
      cell: (row: CampaignTableRow) => (
        <span className="font-mono text-foreground">
          ${row.cost.toLocaleString()}
        </span>
      ),
    },
    {
      name: 'ROI (%)',
      selector: (row: CampaignTableRow) => row.roi,
      sortable: true,
      cell: (row: CampaignTableRow) => (
        <span className={`font-mono font-medium ${
          row.roi > 200 
            ? 'text-green-600 dark:text-green-400' 
            : row.roi > 100 
            ? 'text-yellow-600 dark:text-yellow-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {row.roi.toFixed(1)}%
        </span>
      ),
    },
  ];

  const columns = isMobile ? mobileColumns : desktopColumns;

  // CSV export data
  const csvData = filteredItems.map(item => ({
    Campaign: item.campaign,
    Status: item.status,
    Clicks: item.clicks,
    Cost: item.cost,
    ROI: item.roi,
  }));

  // Custom styles for dark/light mode
  const customStyles = {
    table: {
      style: {
        backgroundColor: 'transparent',
      },
    },
    header: {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid hsl(var(--border))',
        minHeight: '56px',
        paddingLeft: '0px',
        paddingRight: '0px',
      },
    },
    headRow: {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid hsl(var(--border))',
        minHeight: isMobile ? '40px' : '48px',
      },
    },
    headCells: {
      style: {
        color: 'hsl(var(--foreground))',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '600',
        paddingLeft: isMobile ? '8px' : '16px',
        paddingRight: isMobile ? '8px' : '16px',
      },
    },
    rows: {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid hsl(var(--border))',
        minHeight: isMobile ? '80px' : '64px',
        '&:hover': {
          backgroundColor: 'hsl(var(--muted))',
          cursor: 'pointer',
        },
      },
      highlightOnHoverStyle: {
        backgroundColor: 'hsl(var(--muted))',
        borderBottomColor: 'hsl(var(--border))',
        outline: '1px solid hsl(var(--ring))',
      },
    },
    cells: {
      style: {
        color: 'hsl(var(--foreground))',
        fontSize: isMobile ? '12px' : '14px',
        paddingLeft: isMobile ? '8px' : '16px',
        paddingRight: isMobile ? '8px' : '16px',
      },
    },
    pagination: {
      style: {
        backgroundColor: 'transparent',
        borderTop: '1px solid hsl(var(--border))',
        color: 'hsl(var(--foreground))',
        fontSize: isMobile ? '12px' : '14px',
      },
      pageButtonsStyle: {
        backgroundColor: 'transparent',
        color: 'hsl(var(--foreground))',
        fontSize: isMobile ? '12px' : '14px',
        '&:hover': {
          backgroundColor: 'hsl(var(--muted))',
        },
      },
    },
  };

  const FilterComponent = () => (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
      <div className="relative flex-1 max-w-full sm:max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search campaigns..."
          value={filterText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
          className="pl-9 text-sm"
        />
      </div>
      <CSVLink
        data={csvData}
        filename={`campaigns-${new Date().toISOString().split('T')[0]}.csv`}
        className="inline-flex w-full sm:w-auto"
      >
        <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </CSVLink>
    </div>
  );

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="text-base sm:text-lg">Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="h-10 w-full sm:w-80 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full sm:w-32 bg-muted animate-pulse rounded" />
            </div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3 bg-gradient-to-r from-card to-muted/20 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Campaign Performance</CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Track and analyze your campaign metrics with sorting and filtering capabilities.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground hidden sm:inline">Live Data</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <FilterComponent />
        <div className="rounded-lg border overflow-hidden">
          {!mounted ? (
            // Show loading skeleton until mounted to prevent hydration mismatch
            <div className="space-y-4 p-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-muted animate-pulse rounded" />
              ))}
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationPerPage={isMobile ? 5 : 10}
              paginationRowsPerPageOptions={isMobile ? [5, 10, 15] : [10, 20, 30, 50]}
              highlightOnHover
              responsive
              customStyles={customStyles}
              noDataComponent={
                <div className="py-12 text-center">
                  <p className="text-muted-foreground text-sm">No campaigns found</p>
                </div>
              }
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
