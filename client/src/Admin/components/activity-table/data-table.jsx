// File: client/src/Admin/components/activity-table/data-table.jsx
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

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar, SelectionToolbar } from "./data-table-toolbar";
import { EmptyState } from "./EmptyState";
import { columns, getDynamicColumnCell } from "./columns";

export function ActivityDataTable({ data }) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [dynamicColumn, setDynamicColumn] = React.useState("user");

  // Responsive state
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter columns for mobile view
  const visibleColumns = React.useMemo(() => {
    if (isMobile) {
      return columns.filter(
        (col) =>
          col.id === "select" ||
          col.accessorKey === "event" ||
          col.id === "actions",
      );
    }
    return columns;
  }, [isMobile]);

  // Apply status filter to data
  const filteredData = React.useMemo(() => {
    let result = data;

    // Apply status filter
    if (statusFilter && statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

    return result;
  }, [data, statusFilter]);

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
    globalFilterFn: (row, columnId, filterValue) => {
      const search = filterValue.toLowerCase();
      const event = row.original.event?.toLowerCase() || "";
      const user = row.original.user?.toLowerCase() || "";
      return event.includes(search) || user.includes(search);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  // Calculate selected count
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedCount = selectedRows.length;

  // Handlers for bulk actions
  const handleClearSelection = () => {
    table.resetRowSelection();
  };

  const handleApproveSelected = () => {
    const selectedIds = selectedRows.map((row) => row.original.id);
    console.log("Approve items:", selectedIds);
    table.resetRowSelection();
  };

  const handleRejectSelected = () => {
    const selectedIds = selectedRows.map((row) => row.original.id);
    console.log("Reject items:", selectedIds);
    table.resetRowSelection();
  };

  const handleExportData = () => {
    const selectedData = selectedRows.map((row) => row.original);
    const csvContent = [
      ["ID", "Event", "User", "Date", "Status"].join(","),
      ...selectedData.map((item) =>
        [item.id, item.event, item.user, item.date, item.status].join(","),
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activity_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-0">
      {/* Top Toolbar - conditionally shows Search/Filter OR Selection Bar */}
      {selectedCount > 0 ? (
        <SelectionToolbar
          selectedCount={selectedCount}
          onClearSelection={handleClearSelection}
          onApproveSelected={handleApproveSelected}
          onRejectSelected={handleRejectSelected}
          onExportData={handleExportData}
        />
      ) : (
        <DataTableToolbar
          table={table}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          isMobile={isMobile}
          dynamicColumn={dynamicColumn}
          setDynamicColumn={setDynamicColumn}
        />
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-gray-200 dark:border-border/50 hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => {
                  const isEventHeader = header.column.id === "event";
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
                      {isMobile && isEventHeader && (
                        <TableHead className="capitalize font-bold text-xs">
                          {dynamicColumn}
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
                  className="border-gray-200 dark:border-border/50 hover:bg-muted/50 data-[state=selected]:bg-primary/5 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => {
                    const isEventCell = cell.column.id === "event";
                    return (
                      <React.Fragment key={cell.id}>
                        <TableCell className="py-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                        {isMobile && isEventCell && (
                          <TableCell className="py-2">
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
                  className="p-0"
                >
                  <EmptyState onRefresh={() => window.location.reload()} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} />
    </div>
  );
}
