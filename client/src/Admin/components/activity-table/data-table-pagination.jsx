// File: client/src/Admin/components/activity-table/data-table-pagination.jsx
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DataTablePagination({ table }) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(pageCount, start + maxVisible);

    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }

    for (let i = start; i < end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 px-3 py-2.5 border-t border-gray-300 dark:border-border/50">
      {/* Selection info - hidden on mobile */}
      <div className="text-xs text-muted-foreground hidden md:block">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Rows per page - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          <p className="text-xs font-medium whitespace-nowrap">Rows</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-17.5 text-sm font-medium text-foreground border-gray-300 dark:border-border/50">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page navigation */}
        <div className="flex items-center gap-1.5">
          {/* First page - desktop only */}
          <Button
            variant="outline"
            className="hidden lg:flex h-8 w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          {/* Previous - larger on mobile */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Desktop: Page numbers */}
          <div className="hidden sm:flex items-center gap-1">
            {getPageNumbers().map((pageIndex) => (
              <Button
                key={pageIndex}
                variant={currentPage === pageIndex ? "default" : "outline"}
                className="h-8 w-8 p-0 text-xs border-gray-300 dark:border-border/50"
                onClick={() => table.setPageIndex(pageIndex)}
              >
                {pageIndex + 1}
              </Button>
            ))}
          </div>

          {/* Mobile: Professional page indicator */}
          <span className="sm:hidden text-[11px] font-medium text-muted-foreground px-2 whitespace-nowrap">
            Page {currentPage + 1} of {pageCount || 1}
          </span>

          {/* Next - larger on mobile */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Last page - desktop only */}
          <Button
            variant="outline"
            className="hidden lg:flex h-8 w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
