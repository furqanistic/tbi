// File: client/src/Admin/components/activity-table/columns.jsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Check, X, Edit, MoreVertical, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Status badge color mapping
export const getStatusStyles = (status) => {
  switch (status) {
    case "Pending":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "Review":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
    case "Unverified":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30";
    case "Processing":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
    case "Published":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Approved":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const columns = [
  // Checkbox Column
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // Event Column (always visible) - sortable
  {
    accessorKey: "event",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Event
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-xs sm:text-sm text-foreground truncate max-w-25 sm:max-w-none block">
        {row.getValue("event")}
      </span>
    ),
  },
  // User Column
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <span className="text-xs sm:text-sm text-foreground truncate max-w-20 sm:max-w-none block">
        {row.getValue("user")}
      </span>
    ),
    filterFn: "includesString",
  },
  // Date Column - sortable
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Date
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
        {row.getValue("date")}
      </span>
    ),
  },
  // Status Column - sortable
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Status
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap",
            getStatusStyles(status),
          )}
        >
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value === "all" || row.getValue(id) === value;
    },
  },
  // Actions Column
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      return (
        <>
          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center justify-end gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              <Check className="h-3.5 w-3.5" />
              <span className="sr-only">Approve</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <X className="h-3.5 w-3.5" />
              <span className="sr-only">Reject</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 hover:bg-muted"
            >
              <Edit className="h-3.5 w-3.5" />
              <span className="sr-only">Edit</span>
            </Button>
          </div>
          {/* Mobile Actions - 3 dots menu */}
          <div className="sm:hidden flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                  <Check className="mr-2 h-4 w-4" />
                  Approve
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      );
    },
  },
];

// Dynamic column for mobile view - returns cell content based on selected column
export const getDynamicColumnCell = (row, columnKey) => {
  switch (columnKey) {
    case "user":
      return (
        <span className="text-xs text-foreground truncate max-w-20 block">
          {row.original.user}
        </span>
      );
    case "date":
      return (
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {row.original.date}
        </span>
      );
    case "status":
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[9px] font-semibold px-1.5 py-0.5",
            getStatusStyles(row.original.status),
          )}
        >
          {row.original.status}
        </Badge>
      );
    default:
      return null;
  }
};
