// File: client/src/Teacher/components/students-table/columns.jsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowUpDown, FileText, Mail, MoreVertical } from "lucide-react";

export const columns = [
  {
    accessorKey: "name",
    header: "Student",
    cell: ({ row }) => {
      const student = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src={student.image} alt={student.name} />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-sm">
              {student.name}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {student.email}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "course",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 text-xs font-semibold"
        >
          Enrolled Course
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium text-xs max-w-50 truncate">
        {row.getValue("course")}
      </div>
    ),
  },
  {
    accessorKey: "progress",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 text-xs font-semibold"
        >
          Progress
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const progress = parseFloat(row.getValue("progress"));
      return (
        <div className="w-45 space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">{progress}% Complete</span>
          </div>
          <Progress
            value={progress}
            className="h-1.5"
            indicatorClassName={cn(
              progress > 80
                ? "bg-emerald-500"
                : progress < 30
                  ? "bg-amber-500"
                  : "bg-primary",
            )}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "quizAvg",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 text-xs font-semibold"
        >
          Quiz Avg.
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const avg = parseFloat(row.getValue("quizAvg"));
      return (
        <div className="font-bold text-xs">
          <span
            className={cn(
              avg >= 80
                ? "text-emerald-500"
                : avg < 50
                  ? "text-red-500"
                  : "text-foreground",
            )}
          >
            {avg}%
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 text-xs font-semibold"
        >
          Status
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border",
            status === "Active"
              ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
              : status === "Top Performer"
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                : status === "At Risk"
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                  : "bg-muted text-muted-foreground border-border",
          )}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            title="Email Student"
          >
            <Mail className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            title="View Report"
          >
            <FileText className="w-3.5 h-3.5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-7 w-7 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                Copy Student ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Edit Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
