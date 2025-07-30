'use client';

import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, Search } from 'lucide-react';
import { CampaignTableRow } from '@/types';

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
    <Badge className={`${variants[status]} border-0`}>
      {status}
    </Badge>
  );
};

export function CampaignDataTable({ data, isLoading = false, className }: CampaignDataTableProps) {
  const [filterText, setFilterText] = useState('');

  // Filter data based on search text
  const filteredItems = useMemo(() => {
    return data.filter(
      item =>
        item.campaign.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [data, filterText]);

  // Define table columns
  const columns = [
    {
      name: 'Campaign',
      selector: (row: CampaignTableRow) => row.campaign,
      sortable: true,
      minWidth: '200px',
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
      width: '120px',
      cell: (row: CampaignTableRow) => <StatusBadge status={row.status} />,
    },
    {
      name: 'Clicks',
      selector: (row: CampaignTableRow) => row.clicks,
      sortable: true,
      width: '100px',
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
      width: '100px',
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
      width: '100px',
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
        minHeight: '48px',
      },
    },
    headCells: {
      style: {
        color: 'hsl(var(--foreground))',
        fontSize: '14px',
        fontWeight: '600',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    rows: {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid hsl(var(--border))',
        minHeight: '64px',
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
        fontSize: '14px',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    pagination: {
      style: {
        backgroundColor: 'transparent',
        borderTop: '1px solid hsl(var(--border))',
        color: 'hsl(var(--foreground))',
      },
      pageButtonsStyle: {
        backgroundColor: 'transparent',
        color: 'hsl(var(--foreground))',
        '&:hover': {
          backgroundColor: 'hsl(var(--muted))',
        },
      },
    },
  };

  const FilterComponent = () => (
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search campaigns..."
          value={filterText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
          className="pl-9"
        />
      </div>
      <CSVLink
        data={csvData}
        filename={`campaigns-${new Date().toISOString().split('T')[0]}.csv`}
        className="inline-flex"
      >
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </CSVLink>
    </div>
  );

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-80 bg-muted animate-pulse rounded" />
              <div className="h-10 w-32 bg-muted animate-pulse rounded" />
            </div>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Track and analyze your campaign metrics with sorting and filtering capabilities.
        </p>
      </CardHeader>
      <CardContent>
        <FilterComponent />
        <div className="rounded-lg border overflow-hidden">
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30, 50]}
            highlightOnHover
            responsive
            customStyles={customStyles}
            noDataComponent={
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No campaigns found</p>
              </div>
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
