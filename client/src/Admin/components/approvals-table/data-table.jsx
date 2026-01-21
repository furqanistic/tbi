// File: client/src/Admin/components/approvals-table/data-table.jsx
"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { DataTableToolbar, SelectionToolbar } from "./data-table-toolbar";
import { createColumns, getDynamicColumnCell } from "./columns";
import { courseSubmissions } from "../../data/courseApprovalsData";

export function ApprovalsDataTable() {
  const navigate = useNavigate();
  const [data, setData] = React.useState(courseSubmissions);
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [dynamicColumn, setDynamicColumn] = React.useState("instructor");

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
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(search) ||
          course.instructor.toLowerCase().includes(search),
      );
    }

    // Apply category filter
    if (categoryFilter && categoryFilter !== "all") {
      result = result.filter((course) => course.category === categoryFilter);
    }

    // Apply status filter
    if (statusFilter && statusFilter !== "all") {
      result = result.filter((course) => course.status === statusFilter);
    }

    return result;
  }, [data, globalFilter, categoryFilter, statusFilter]);

  // Navigate to course detail page
  const handleRowClick = (course) => {
    navigate(`/admin/approvals/${course.id}`);
  };

  // Quick approve (from table actions)
  const handleQuickApprove = (courseId) => {
    setData((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, status: "Live" } : c)),
    );
  };

  // Quick reject (navigates to detail page)
  const handleQuickReject = (courseId) => {
    navigate(`/admin/approvals/${courseId}`);
  };

  // Create columns with handlers
  const columns = React.useMemo(
    () => createColumns(handleRowClick, handleQuickApprove, handleQuickReject),
    [navigate],
  );

  // Filter columns for mobile view
  const visibleColumns = React.useMemo(() => {
    if (isMobile) {
      return columns.filter(
        (col) =>
          col.id === "select" ||
          col.accessorKey === "title" ||
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

  // Bulk action handlers
  const handleClearSelection = () => setRowSelection({});

  const handleBulkApprove = () => {
    const ids = selectedRows.map((r) => r.original.id);
    setData((prev) =>
      prev.map((c) => (ids.includes(c.id) ? { ...c, status: "Live" } : c)),
    );
    setRowSelection({});
  };

  const handleBulkReject = () => {
    const ids = selectedRows.map((r) => r.original.id);
    setData((prev) =>
      prev.map((c) => (ids.includes(c.id) ? { ...c, status: "Rejected" } : c)),
    );
    setRowSelection({});
  };

  return (
    <div className="space-y-0">
      {/* Top Toolbar */}
      {selectedCount > 0 ? (
        <SelectionToolbar
          selectedCount={selectedCount}
          onClearSelection={handleClearSelection}
          onBulkApprove={handleBulkApprove}
          onBulkReject={handleBulkReject}
        />
      ) : (
        <DataTableToolbar
          search={globalFilter}
          setSearch={setGlobalFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          isMobile={isMobile}
          dynamicColumn={dynamicColumn}
          setDynamicColumn={setDynamicColumn}
        />
      )}

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <Table className="">
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-gray-200 dark:border-border/50 hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => {
                  const isTitleHeader = header.column.id === "title";
                  return (
                    <React.Fragment key={header.id}>
                      <TableHead
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
                      {isMobile && isTitleHeader && (
                        <TableHead className="capitalize font-bold text-xs">
                          {dynamicColumn === "submissionDate"
                            ? "Date"
                            : dynamicColumn}
                        </TableHead>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-200 dark:border-border/50 hover:bg-muted/50 data-[state=selected]:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => handleRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isTitleCell = cell.column.id === "title";
                    return (
                      <React.Fragment key={cell.id}>
                        <TableCell className="py-2.5">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                        {isMobile && isTitleCell && (
                          <TableCell className="py-2.5">
                            {getDynamicColumnCell(row, dynamicColumn)}
                          </TableCell>
                        )}
                      </React.Fragment>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={visibleColumns.length + (isMobile ? 1 : 0)}
                  className="h-24 text-center text-muted-foreground"
                >
                  No courses pending approval.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center sm:justify-between gap-2 px-3 py-2.5 border-t border-gray-300 dark:border-border/50">
        <div className="text-xs text-muted-foreground hidden md:block">
          {filteredData.length} course{filteredData.length !== 1 ? "s" : ""}{" "}
          pending
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
    </div>
  );
}
