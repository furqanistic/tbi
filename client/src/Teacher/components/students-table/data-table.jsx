// File: client/src/Teacher/components/students-table/data-table.jsx
"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
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

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { BulkActionToolbar } from "./BulkActionToolbar";

export function DataTable({ columns, data }) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  // Responsive column visibility based on screen width
  const getResponsiveVisibility = () => {
    if (typeof window === "undefined") return {};
    const width = window.innerWidth;
    if (width < 480) {
      // Small mobile: only show select, name, and status
      return { course: false, progress: false, quizAvg: false, actions: false };
    } else if (width < 640) {
      // Mobile: hide course, progress, quizAvg
      return { course: false, progress: false, quizAvg: false };
    } else if (width < 768) {
      // Small tablet: hide course, quizAvg
      return { course: false, quizAvg: false };
    } else if (width < 1024) {
      // Tablet: hide quizAvg
      return { quizAvg: false };
    }
    return {};
  };

  const [columnVisibility, setColumnVisibility] = React.useState(
    getResponsiveVisibility(),
  );

  // Update column visibility on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setColumnVisibility(getResponsiveVisibility());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // Calculate selected count
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedCount = selectedRows.length;

  // Handlers for bulk actions
  const handleClearSelection = () => {
    table.resetRowSelection();
  };

  const handleDeleteSelected = () => {
    const selectedIds = selectedRows.map((row) => row.original.id);
    console.log("Delete students:", selectedIds);
    // In real app: API call to delete
    table.resetRowSelection();
  };

  const handleEmailSelected = () => {
    const emails = selectedRows.map((row) => row.original.email).join(",");
    window.location.href = `mailto:${emails}`;
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border bg-card dark:bg-card/40">
        <div className="">
          <Table>
            <TableHeader className="bg-muted/50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
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
                    className="hover:bg-muted/30 data-[state=selected]:bg-primary/5"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
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
                    colSpan={columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="border-t border-border" />
        <DataTablePagination table={table} />
      </div>

      {/* Floating Bulk Action Toolbar */}
      <BulkActionToolbar
        selectedCount={selectedCount}
        onClearSelection={handleClearSelection}
        onDeleteSelected={handleDeleteSelected}
        onEmailSelected={handleEmailSelected}
      />
    </div>
  );
}
