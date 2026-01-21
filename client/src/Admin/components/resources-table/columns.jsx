// File: client/src/Admin/components/resources-table/columns.jsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  ArrowUpDown,
  Eye,
  Trash2,
  FileText,
  FileType,
  Link as LinkIcon,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

// Access badge styles
export const getAccessStyles = (access) => {
  switch (access) {
    case "Free":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Premium":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Type icon
export const getTypeIcon = (type) => {
  switch (type) {
    case "PDF":
      return <FileText className="h-4 w-4 text-red-500" />;
    case "Document":
      return <FileType className="h-4 w-4 text-blue-500" />;
    case "Link":
      return <LinkIcon className="h-4 w-4 text-green-500" />;
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />;
  }
};

export const createColumns = (onView, onDelete) => [
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
  // Resource Name
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Resource Name
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const resource = row.original;
      return (
        <div className="flex items-center gap-2 min-w-0">
          {getTypeIcon(resource.type)}
          <span className="font-medium text-xs sm:text-sm text-foreground truncate max-w-[130px] sm:max-w-none">
            {resource.name}
          </span>
        </div>
      );
    },
  },
  // Category
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category");
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5",
            getCategoryStyles(category),
          )}
        >
          {category}
        </Badge>
      );
    },
  },
  // Type
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground">
        {row.getValue("type")}
      </span>
    ),
  },
  // Access
  {
    accessorKey: "access",
    header: "Access",
    cell: ({ row }) => {
      const access = row.getValue("access");
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5",
            getAccessStyles(access),
          )}
        >
          {access}
        </Badge>
      );
    },
  },
  // Upload Date
  {
    accessorKey: "uploadDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Upload Date
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {new Date(row.getValue("uploadDate")).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>
    ),
  },
  // Actions
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      const resource = row.original;
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
                onView(resource);
              }}
            >
              <Eye className="h-3.5 w-3.5" />
              <span className="sr-only">View</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(resource.id);
              }}
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span className="sr-only">Delete</span>
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
                <DropdownMenuItem onClick={() => onView(resource)}>
                  <Eye className="mr-2 h-4 w-4" />
                  View Resource
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => onDelete(resource.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      );
    },
  },
];
