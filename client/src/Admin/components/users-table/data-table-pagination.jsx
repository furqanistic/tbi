// File: client/src/Admin/components/users-table/data-table-pagination.jsx
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

export function DataTablePagination({
  pageIndex,
  pageSize,
  pageCount,
  totalCount,
  selectedCount,
  onPageChange,
  onPageSizeChange,
}) {
  const canPreviousPage = pageIndex > 0;
  const canNextPage = pageIndex < pageCount - 1;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(0, pageIndex - Math.floor(maxVisible / 2));
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
      {/* Selection & Total info */}
      <div className="text-xs text-muted-foreground hidden md:flex items-center gap-2">
        <span>
          {selectedCount > 0 && `${selectedCount} selected · `}
          {totalCount.toLocaleString()} total users
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Rows per page */}
        <div className="hidden sm:flex items-center gap-2">
          <p className="text-xs font-medium whitespace-nowrap">Rows</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => onPageSizeChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-17.5 text-sm font-medium text-foreground border-gray-300 dark:border-border/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 50].map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page navigation */}
        <div className="flex items-center gap-1.5">
          {/* First page */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => onPageChange(0)}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          {/* Previous */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Desktop: Page numbers */}
          <div className="hidden sm:flex items-center gap-1">
            {getPageNumbers().map((idx) => (
              <Button
                key={idx}
                variant={pageIndex === idx ? "default" : "outline"}
                className="h-8 w-8 p-0 text-xs border-gray-300 dark:border-border/50"
                onClick={() => onPageChange(idx)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>

          {/* Mobile: Professional page indicator */}
          <span className="sm:hidden text-[11px] font-medium text-muted-foreground px-2 whitespace-nowrap">
            Page {pageIndex + 1} of {pageCount || 1}
          </span>

          {/* Next */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={!canNextPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Last page */}
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => onPageChange(pageCount - 1)}
            disabled={!canNextPage}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
