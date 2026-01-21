// File: client/src/Admin/components/activity-table/EmptyState.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Inbox, RefreshCw } from "lucide-react";

export function EmptyState({ onRefresh }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Flat Illustration */}
      <div className="w-16 h-16 rounded-full bg-muted/50 border border-gray-300 dark:border-border/50 flex items-center justify-center mb-4">
        <Inbox className="w-8 h-8 text-muted-foreground/60" />
      </div>

      {/* Text */}
      <h3 className="text-sm font-semibold text-foreground mb-1">
        No recent activity found
      </h3>
      <p className="text-xs text-muted-foreground mb-4 text-center max-w-xs">
        There are no events or actions to display at the moment.
      </p>

      {/* Refresh Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        className="h-8 px-3 text-xs border-gray-300 dark:border-border/50"
      >
        <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
        Refresh
      </Button>
    </div>
  );
}
