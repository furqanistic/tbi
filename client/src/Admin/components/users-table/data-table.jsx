// File: client/src/Admin/components/users-table/data-table.jsx
"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  flexRender,
  getCoreRowModel,
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
import { columns, getDynamicColumnCell } from "./columns";
import { fetchUsers } from "../../data/usersData";

// Loading skeleton row
function SkeletonRow({ colCount }) {
  return (
    <TableRow className="border-gray-200 dark:border-border/50">
      {Array.from({ length: colCount }).map((_, i) => (
        <TableCell key={i} className="py-3">
          <div className="h-4 w-full bg-muted/60 rounded animate-pulse" />
        </TableCell>
      ))}
    </TableRow>
  );
}

export function UsersDataTable() {
  const navigate = useNavigate();
  // State for server-side pagination
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [pageCount, setPageCount] = React.useState(0);
  const [totalCount, setTotalCount] = React.useState(0);
  const [sorting, setSorting] = React.useState([]);
  const [rowSelection, setRowSelection] = React.useState({});

  // Filter state
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [dynamicColumn, setDynamicColumn] = React.useState("role");

  // Responsive state
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = React.useState(search);
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch data when pagination/filters change
  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchUsers({
          pageIndex,
          pageSize,
          sorting,
          filters: {
            search: debouncedSearch,
            role: roleFilter,
            status: statusFilter,
          },
        });
        setData(result.data);
        setPageCount(result.pageCount);
        setTotalCount(result.totalCount);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [pageIndex, pageSize, sorting, debouncedSearch, roleFilter, statusFilter]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setPageIndex(0);
    setRowSelection({});
  }, [debouncedSearch, roleFilter, statusFilter]);

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
  }, [isMobile]);

  const table = useReactTable({
    data,
    columns: visibleColumns,
    pageCount,
    state: {
      sorting,
      rowSelection,
      pagination: { pageIndex, pageSize },
    },
    manualPagination: true,
    manualSorting: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: (updater) => {
      const newSorting =
        typeof updater === "function" ? updater(sorting) : updater;
      setSorting(newSorting);
      setPageIndex(0);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Calculate selected count
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedCount = selectedRows.length;

  // Bulk action handlers
  const handleClearSelection = () => setRowSelection({});

  const handleVerifySelected = () => {
    const ids = selectedRows.map((r) => r.original.id);
    console.log("Verify users:", ids);
    setRowSelection({});
  };

  const handleSuspendSelected = () => {
    const ids = selectedRows.map((r) => r.original.id);
    console.log("Suspend users:", ids);
    setRowSelection({});
  };

  const handleDeleteSelected = () => {
    const ids = selectedRows.map((r) => r.original.id);
    console.log("Delete users:", ids);
    setRowSelection({});
  };

  return (
    <div className="space-y-0">
      {/* Top Toolbar - conditionally shows Search/Filter OR Selection Bar */}
      {selectedCount > 0 ? (
        <SelectionToolbar
          selectedCount={selectedCount}
          onClearSelection={handleClearSelection}
          onVerifySelected={handleVerifySelected}
          onSuspendSelected={handleSuspendSelected}
          onDeleteSelected={handleDeleteSelected}
        />
      ) : (
        <DataTableToolbar
          search={search}
          setSearch={setSearch}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
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
                  const isNameHeader = header.column.id === "name";
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
                      {isMobile && isNameHeader && (
                        <TableHead className="capitalize font-bold text-xs">
                          {dynamicColumn === "joinDate"
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
            {loading ? (
              // Show skeleton rows while loading
              Array.from({ length: pageSize }).map((_, i) => (
                <SkeletonRow
                  key={i}
                  colCount={visibleColumns.length + (isMobile ? 1 : 0)}
                />
              ))
            ) : data.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-200 dark:border-border/50 hover:bg-muted/50 data-[state=selected]:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => navigate(`/admin/users/${row.original.id}`)}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isNameCell = cell.column.id === "name";
                    return (
                      <React.Fragment key={cell.id}>
                        <TableCell className="py-2.5">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                        {isMobile && isNameCell && (
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
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <DataTablePagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={pageCount}
        totalCount={totalCount}
        selectedCount={selectedCount}
        onPageChange={setPageIndex}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPageIndex(0);
        }}
      />
    </div>
  );
}
