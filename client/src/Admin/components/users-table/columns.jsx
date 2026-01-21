// File: client/src/Admin/components/users-table/columns.jsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  ArrowUpDown,
  MoreVertical,
  UserCheck,
  Ban,
  Trash2,
  Mail,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Status badge color mapping
export const getStatusStyles = (status) => {
  switch (status) {
    case "Active":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
    case "Verified":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Pending":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "Suspended":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Role badge color mapping
export const getRoleStyles = (role) => {
  switch (role) {
    case "Teacher":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
    case "Student":
      return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const columns = [
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
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // User (Avatar + Name + Email) - always visible
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        User
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 border border-border/50">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-[10px] font-semibold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-xs sm:text-sm text-foreground truncate max-w-[120px] sm:max-w-none">
              {user.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground truncate max-w-[120px] sm:max-w-none">
              {user.email}
            </span>
          </div>
        </div>
      );
    },
  },
  // Role Column
  {
    accessorKey: "role",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Role
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const role = row.getValue("role");
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap",
            getRoleStyles(role),
          )}
        >
          {role}
        </Badge>
      );
    },
  },
  // Status Column
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
          {status}
        </Badge>
      );
    },
  },
  // Join Date Column
  {
    accessorKey: "joinDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 text-xs font-bold hover:bg-transparent"
      >
        Joined
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {new Date(row.getValue("joinDate")).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>
    ),
  },
  // Actions Column
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <>
          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center justify-end gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10"
              onClick={() => (window.location.href = `mailto:${user.email}`)}
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10"
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span className="sr-only">Verify</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10"
            >
              <Ban className="h-3.5 w-3.5" />
              <span className="sr-only">Suspend</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
          {/* Mobile Actions - 3 dots menu */}
          <div className="sm:hidden flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    (window.location.href = `mailto:${user.email}`)
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email User
                </DropdownMenuItem>
                <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Verify User
                </DropdownMenuItem>
                <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                  <Ban className="mr-2 h-4 w-4" />
                  Suspend User
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete User
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
  const user = row.original;
  switch (columnKey) {
    case "role":
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[9px] font-semibold px-1.5 py-0.5",
            getRoleStyles(user.role),
          )}
        >
          {user.role}
        </Badge>
      );
    case "status":
      return (
        <Badge
          variant="outline"
          className={cn(
            "text-[9px] font-semibold px-1.5 py-0.5",
            getStatusStyles(user.status),
          )}
        >
          {user.status}
        </Badge>
      );
    case "joinDate":
      return (
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
          {new Date(user.joinDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      );
    default:
      return null;
  }
};
