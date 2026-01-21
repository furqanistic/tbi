// File: client/src/Admin/components/users-table/data-table-toolbar.jsx
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
import { Search, X, UserCheck, Ban, Trash2 } from "lucide-react";
import { roleOptions, statusOptions } from "../../data/usersData";

export function DataTableToolbar({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
  isMobile,
  dynamicColumn,
  setDynamicColumn,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-border/50 bg-slate-50/50 dark:bg-card/20">
      {/* Search Input */}
      <div className="relative flex-1 min-w-30 max-w-xs">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 pl-8 text-xs bg-background"
        />
      </div>

      {/* Role Filter */}
      <Select value={roleFilter} onValueChange={setRoleFilter}>
        <SelectTrigger className="h-8 w-25 sm:w-27.5 text-xs">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          {roleOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Status Filter - hidden on very small screens */}
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="hidden xs:flex h-8 w-25 sm:w-27.5 text-xs">
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
          <SelectTrigger className="h-8 w-21.25 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="role">Role</SelectItem>
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="joinDate">Date</SelectItem>
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
  onVerifySelected,
  onSuspendSelected,
  onDeleteSelected,
}) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-gray-200 dark:border-border/50 bg-primary/5">
      {/* Left: Selection count */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">
          {selectedCount} User{selectedCount !== 1 ? "s" : ""} Selected
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

      {/* Right: Bulk action buttons */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onVerifySelected}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <UserCheck className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Verify</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onSuspendSelected}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
        >
          <Ban className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Suspend</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDeleteSelected}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Delete</span>
        </Button>
      </div>
    </div>
  );
}
