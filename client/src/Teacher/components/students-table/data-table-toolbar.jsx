// File: client/src/Teacher/components/students-table/data-table-toolbar.jsx
"use client";

import { X, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const globalFilter = table.getState().globalFilter;

  // Columns that can swap with Status on small screens
  const swappableColumns = ["course", "progress", "quizAvg"];

  // Find currently visible swappable column (means Status is hidden)
  const currentVisibleColumn = swappableColumns.find((col) =>
    table.getColumn(col)?.getIsVisible(),
  );
  // If a swappable column is visible, that's the current value; otherwise show "status"
  const currentValue = currentVisibleColumn || "status";

  // Handler to swap columns - replaces Status with selected column
  const handleColumnSwap = (newColumn) => {
    // Hide all swappable columns first
    swappableColumns.forEach((col) => {
      table.getColumn(col)?.toggleVisibility(false);
    });

    if (newColumn === "status") {
      // Show Status, hide swappable columns (already hidden above)
      table.getColumn("status")?.toggleVisibility(true);
    } else {
      // Hide Status, show selected column
      table.getColumn("status")?.toggleVisibility(false);
      table.getColumn(newColumn)?.toggleVisibility(true);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-1">
      <div className="flex flex-1 items-center space-x-2 w-full">
        <Input
          placeholder="Search students..."
          value={globalFilter ?? ""}
          onChange={(event) =>
            table.setGlobalFilter(String(event.target.value))
          }
          className="h-8 w-full sm:w-62.5 lg:w-87.5"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        {/* Column Swap Dropdown - Only visible on small screens */}
        <Select value={currentValue} onValueChange={handleColumnSwap}>
          <SelectTrigger className="w-32 h-8 bg-background border-border/50 sm:hidden">
            <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />
            <SelectValue placeholder="Column" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="course">Course</SelectItem>
            <SelectItem value="progress">Progress</SelectItem>
            <SelectItem value="quizAvg">Quiz Avg</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={table.getColumn("course")?.getFilterValue() ?? "all"}
          onValueChange={(value) => {
            if (value === "all") {
              table.getColumn("course")?.setFilterValue(undefined);
            } else {
              table.getColumn("course")?.setFilterValue(value);
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-45 h-8 bg-background border-border/50">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="CSS Compulsory">CSS Compulsory</SelectItem>
            <SelectItem value="English Essay">English Essay</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
