// File: client/src/Admin/components/approvals-table/columns.jsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ArrowUpDown, MoreVertical, Check, X, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Status badge styles
export const getStatusStyles = (status) => {
  switch (status) {
    case "Pending":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "Review":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
    case "Live":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Rejected":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Category badge styles
export const getCategoryStyles = (category) => {
  switch (category) {
    case "CSS":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
    case "PMS":
      return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
    case "General":
      return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const createColumns = (onRowClick, onQuickApprove, onQuickReject) => [
  // Checkbox Column
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
        onClick={(e) => e.stopPropagation()}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // Course Title + Category
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Course
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const course = row.original;
      return (
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-xs sm:text-sm text-foreground truncate max-w-32.5 sm:max-w-none">
            {course.title}
          </span>
          <Badge
            variant="outline"
            className={cn(
              "text-[9px] font-semibold px-1.5 py-0 w-fit mt-0.5",
              getCategoryStyles(course.category),
            )}
          >
            {course.category}
          </Badge>
        </div>
      );
    },
  },
  // Instructor
  {
    accessorKey: "instructor",
    header: "Instructor",
    cell: ({ row }) => {
      const course = row.original;
      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6 border border-border/50">
            <AvatarImage
              src={course.instructorAvatar}
              alt={course.instructor}
            />
            <AvatarFallback className="text-[9px] font-semibold">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-foreground truncate max-w-25">
            {course.instructor}
          </span>
        </div>
      );
    },
  },
  // Submission Date
  {
    accessorKey: "submissionDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Submitted
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {new Date(row.getValue("submissionDate")).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </span>
    ),
  },
  // Status
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap",
            getStatusStyles(status),
          )}
        >
          {status === "Review" ? "In Review" : status}
        </Badge>
      );
    },
  },
  // Actions
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      const course = row.original;
      return (
        <>
          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center justify-end gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10"
              onClick={(e) => {
                e.stopPropagation();
                onRowClick(course);
              }}
            >
              <Eye className="h-3.5 w-3.5" />
              <span className="sr-only">Preview</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10"
              onClick={(e) => {
                e.stopPropagation();
                onQuickApprove(course.id);
              }}
            >
              <Check className="h-3.5 w-3.5" />
              <span className="sr-only">Approve</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
              onClick={(e) => {
                e.stopPropagation();
                onQuickReject(course.id);
              }}
            >
              <X className="h-3.5 w-3.5" />
              <span className="sr-only">Reject</span>
            </Button>
          </div>
          {/* Mobile Actions */}
          <div className="sm:hidden flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 p-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onRowClick(course)}>
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Course
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-emerald-600 dark:text-emerald-400"
                  onClick={() => onQuickApprove(course.id)}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Approve
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => onQuickReject(course.id)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      );
    },
  },
];

// Dynamic column for mobile view
export const getDynamicColumnCell = (row, columnKey) => {
  const course = row.original;
  switch (columnKey) {
    case "instructor":
      return (
        <div className="flex items-center gap-1.5">
          <Avatar className="h-5 w-5 border border-border/50">
            <AvatarImage
              src={course.instructorAvatar}
              alt={course.instructor}
            />
            <AvatarFallback className="text-[8px]">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span className="text-[10px] text-foreground truncate max-w-15">
            {course.instructor.split(" ")[0]}
          </span>
        </div>
      );
    case "submissionDate":
      return (
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
          {new Date(course.submissionDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      );
    case "status":
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[9px] font-semibold px-1.5 py-0",
            getStatusStyles(course.status),
          )}
        >
          {course.status}
        </Badge>
      );
    default:
      return null;
  }
};
