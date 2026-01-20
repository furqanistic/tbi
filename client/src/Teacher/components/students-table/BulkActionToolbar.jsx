// File: client/src/Teacher/components/students-table/BulkActionToolbar.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Mail, Trash2, X } from "lucide-react";
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

export function BulkActionToolbar({
  selectedCount,
  onClearSelection,
  onDeleteSelected,
  onEmailSelected,
}) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="flex items-center gap-3 bg-card/95 dark:bg-card/90 backdrop-blur-lg border border-border/50 shadow-xl rounded-full px-4 py-2.5">
        {/* Selection Count */}
        <div className="flex items-center gap-2 pr-3 border-r border-border/50">
          <span className="text-sm font-semibold text-foreground">
            {selectedCount} Student{selectedCount !== 1 ? "s" : ""} Selected
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

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={onEmailSelected}
            className="h-8 px-3 text-xs font-medium text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            Send Email
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs font-medium text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete {selectedCount} Student{selectedCount !== 1 ? "s" : ""}
                  ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to remove {selectedCount} student
                  {selectedCount !== 1 ? "s" : ""} from your roster? This action
                  cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onDeleteSelected}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
