// File: client/src/Teacher/components/students-table/columns.jsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowUpDown, FileText, Mail, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  // Student Name & Email
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
  // Enrolled Course (hidden on small screens)
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
  // Progress
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
        <div className="w-32 sm:w-45 space-y-1">
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
  // Quiz Average
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
  // Status with proper Badge styling
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
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5",
            status === "Active"
              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
              : status === "Top Performer"
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                : status === "At Risk"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
                  : status === "Inactive"
                    ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30"
                    : "bg-muted text-muted-foreground border-border",
          )}
        >
          {status}
        </Badge>
      );
    },
  },
  // Direct Action Icons (no dropdown menu)
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => {
      const student = row.original;
      return (
        <div className="flex items-center justify-end gap-0.5">
          <TooltipProvider delayDuration={0}>
            {/* Email Action */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10"
                  onClick={() =>
                    (window.location.href = `mailto:${student.email}`)
                  }
                >
                  <Mail className="w-3.5 h-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Send Email</p>
              </TooltipContent>
            </Tooltip>

            {/* View Report Action */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10"
                >
                  <FileText className="w-3.5 h-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>View Report</p>
              </TooltipContent>
            </Tooltip>

            {/* Delete Action */}
            <AlertDialog>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-red-500 sm:text-muted-foreground sm:hover:text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </AlertDialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Delete Student</p>
                </TooltipContent>
              </Tooltip>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete {student.name}?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove this student from your
                    roster? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={() => console.log("Delete student:", student.id)}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TooltipProvider>
        </div>
      );
    },
  },
];
