// File: client/src/Admin/components/resources-table/data-table.jsx
"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X,
  Trash2,
  Download,
} from "lucide-react";

import { createColumns } from "./columns";
import {
  resources as initialResources,
  categories,
  accessLevels,
} from "../../data/resourcesData";

// Selection Toolbar Component
function SelectionToolbar({
  selectedCount,
  onClearSelection,
  onBulkDelete,
  onExport,
}) {
  return (
    <div className="flex items-center justify-between gap-2 p-3 border-b border-gray-300 dark:border-border/50 bg-primary/10">
      {/* Left: Selection count */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">
          {selectedCount} item{selectedCount !== 1 ? "s" : ""} selected
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
          onClick={onExport}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-primary hover:bg-primary/10"
        >
          <Download className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Export</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onBulkDelete}
          className="h-7 px-2 sm:px-3 text-xs font-medium text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-3.5 h-3.5 sm:mr-1" />
          <span className="hidden sm:inline">Delete</span>
        </Button>
      </div>
    </div>
  );
}

// Regular Toolbar Component
function DataTableToolbar({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  accessFilter,
  setAccessFilter,
  hasFilters,
  clearFilters,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 p-3 border-b border-gray-300 dark:border-border/50">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-9 text-sm border-gray-300 dark:border-border/50 bg-transparent"
        />
      </div>
      {/* Filters */}
      <div className="flex gap-2">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="h-9 w-30 text-xs border-gray-300 dark:border-border/50 bg-transparent">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={accessFilter} onValueChange={setAccessFilter}>
          <SelectTrigger className="h-9 w-25 text-xs border-gray-300 dark:border-border/50 bg-transparent">
            <SelectValue placeholder="Access" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Access</SelectItem>
            {accessLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-9 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}

export function ResourcesDataTable({ onView }) {
  const [data, setData] = React.useState(initialResources);
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [accessFilter, setAccessFilter] = React.useState("all");

  // Delete confirmation dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [pendingDeleteId, setPendingDeleteId] = React.useState(null);
  const [isBulkDelete, setIsBulkDelete] = React.useState(false);

  // Responsive state
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter data
  const filteredData = React.useMemo(() => {
    let result = data;

    // Apply search filter
    if (globalFilter) {
      const search = globalFilter.toLowerCase();
      result = result.filter((resource) =>
        resource.name.toLowerCase().includes(search),
      );
    }

    // Apply category filter
    if (categoryFilter && categoryFilter !== "all") {
      result = result.filter(
        (resource) => resource.category === categoryFilter,
      );
    }

    // Apply access filter
    if (accessFilter && accessFilter !== "all") {
      result = result.filter((resource) => resource.access === accessFilter);
    }

    return result;
  }, [data, globalFilter, categoryFilter, accessFilter]);

  // Delete handler - shows confirmation dialog
  const handleDelete = (resourceId) => {
    setPendingDeleteId(resourceId);
    setIsBulkDelete(false);
    setDeleteDialogOpen(true);
  };

  // Confirm single delete
  const confirmDelete = () => {
    if (isBulkDelete) {
      // Bulk delete
      const selectedRows = table.getFilteredSelectedRowModel().rows;
      const ids = selectedRows.map((r) => r.original.id);
      setData((prev) => prev.filter((r) => !ids.includes(r.id)));
      setRowSelection({});
    } else if (pendingDeleteId) {
      // Single delete
      setData((prev) => prev.filter((r) => r.id !== pendingDeleteId));
    }
    setDeleteDialogOpen(false);
    setPendingDeleteId(null);
    setIsBulkDelete(false);
  };

  // Create columns with handlers
  const columns = React.useMemo(
    () => createColumns(onView, handleDelete),
    [onView],
  );

  // Filter columns for mobile view
  const visibleColumns = React.useMemo(() => {
    if (isMobile) {
      return columns.filter(
        (col) =>
          col.id === "select" ||
          col.accessorKey === "name" ||
          col.id === "actions",
      );
    }
    return columns;
  }, [columns, isMobile]);

  const table = useReactTable({
    data: filteredData,
    columns: visibleColumns,
    state: {
      sorting,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  // Calculate selected count
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedCount = selectedRows.length;

  // Clear selection
  const handleClearSelection = () => setRowSelection({});

  // Bulk delete handler
  const handleBulkDelete = () => {
    setIsBulkDelete(true);
    setDeleteDialogOpen(true);
  };

  // Export handler
  const handleExport = () => {
    const selectedData = selectedRows.map((r) => r.original);
    console.log("Exporting:", selectedData);
    // In real app: generate CSV/Excel file
    alert(`Exporting ${selectedCount} resources...`);
  };

  // Clear all filters
  const clearFilters = () => {
    setGlobalFilter("");
    setCategoryFilter("all");
    setAccessFilter("all");
  };

  const hasFilters =
    globalFilter || categoryFilter !== "all" || accessFilter !== "all";

  return (
    <div className="space-y-0">
      {/* Toolbar - switches based on selection */}
      {selectedCount > 0 ? (
        <SelectionToolbar
          selectedCount={selectedCount}
          onClearSelection={handleClearSelection}
          onBulkDelete={handleBulkDelete}
          onExport={handleExport}
        />
      ) : (
        <DataTableToolbar
          search={globalFilter}
          setSearch={setGlobalFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          accessFilter={accessFilter}
          setAccessFilter={setAccessFilter}
          hasFilters={hasFilters}
          clearFilters={clearFilters}
        />
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-100 dark:bg-card/30">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-gray-200 dark:border-border/50 hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className="font-bold text-xs"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-200 dark:border-border/50 hover:bg-muted/50 data-[state=selected]:bg-primary/5 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-2.5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={visibleColumns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No resources found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center sm:justify-between gap-2 px-3 py-2.5 border-t border-gray-300 dark:border-border/50">
        <div className="text-xs text-muted-foreground hidden md:block">
          {filteredData.length} resource{filteredData.length !== 1 ? "s" : ""}
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-[11px] font-medium text-muted-foreground px-2 whitespace-nowrap">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount() || 1}
          </span>
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-9 w-9 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-border/50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="border border-gray-300 dark:border-border/50">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isBulkDelete
                ? `Delete ${selectedCount} Resources?`
                : "Delete Resource?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isBulkDelete
                ? `This will permanently delete ${selectedCount} selected resources. This action cannot be undone.`
                : "This will permanently delete this resource. This action cannot be undone."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-300 dark:border-border/50">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
