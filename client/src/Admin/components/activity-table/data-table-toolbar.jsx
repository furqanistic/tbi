// File: client/src/Admin/components/activity-table/data-table-toolbar.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, Check, Download } from "lucide-react";
import { statusOptions } from "../../data/dashboardData";

export function DataTableToolbar({
  table,
  globalFilter,
  setGlobalFilter,
  statusFilter,
  setStatusFilter,
  isMobile,
  dynamicColumn,
  setDynamicColumn,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-border/50 bg-slate-50/50 dark:bg-card/20">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[140px] max-w-xs">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          placeholder="Search user or event..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="h-8 pl-8 text-xs bg-background"
        />
      </div>

      {/* Status Filter */}
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="h-8 w-[120px] sm:w-[140px] text-xs">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Mobile Column Toggle */}
      {isMobile && (
        <Select value={dynamicColumn} onValueChange={setDynamicColumn}>
          <SelectTrigger className="h-8 w-[90px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="status">Status</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}

// Selection Toolbar - replaces the search toolbar when items are selected
export function SelectionToolbar({
  selectedCount,
  onClearSelection,
  onApproveSelected,
  onRejectSelected,
  onExportData,
}) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-gray-200 dark:border-border/50 bg-primary/5">
      {/* Left: Selection count */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">
          {selectedCount} Item{selectedCount !== 1 ? "s" : ""} Selected
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClearSelection}
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Right: Action buttons */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onApproveSelected}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <Check className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Approve</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRejectSelected}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <X className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Reject</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onExportData}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          <Download className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </div>
    </div>
  );
}
