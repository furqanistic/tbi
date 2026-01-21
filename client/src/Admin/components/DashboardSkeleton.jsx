// File: client/src/Admin/components/DashboardSkeleton.jsx
"use client";

import { cn } from "@/lib/utils";

// Reusable skeleton block
function Skeleton({ className }) {
  return (
    <div className={cn("animate-pulse bg-muted/60 rounded-md", className)} />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-4 p-1">
      {/* Top Stats Row - 4 Skeleton Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-3 sm:p-4 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="mt-3 space-y-2">
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section - 2 Skeleton Chart Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Left Chart Skeleton (1/3) */}
        <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-3 sm:p-4">
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-3 w-24 mb-3" />
          <div className="h-50 flex items-center justify-center">
            <Skeleton className="h-32 w-32 rounded-full" />
          </div>
        </div>

        {/* Right Chart Skeleton (2/3) */}
        <div className="lg:col-span-2 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-3 sm:p-4">
          <Skeleton className="h-4 w-28 mb-1" />
          <Skeleton className="h-3 w-36 mb-3" />
          <div className="h-50 flex flex-col justify-end">
            <div className="flex items-end justify-between gap-2 h-full">
              {[40, 60, 80, 55, 90, 70, 85].map((h, i) => (
                <Skeleton
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Table Skeleton */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
        {/* Table Header */}
        <div className="px-3 py-2 sm:p-4 border-b border-gray-200 dark:border-border/50">
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-3 w-48" />
        </div>

        {/* Table Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-border/50">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 w-28" />
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200 dark:divide-border/50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 px-3 py-3">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24 hidden sm:block" />
              <Skeleton className="h-4 w-20 hidden sm:block" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <div className="ml-auto flex gap-1">
                <Skeleton className="h-7 w-7 rounded" />
                <Skeleton className="h-7 w-7 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex items-center justify-center gap-2 px-3 py-2.5 border-t border-gray-200 dark:border-border/50">
          <Skeleton className="h-9 w-9 rounded" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-9 w-9 rounded" />
        </div>
      </div>
    </div>
  );
}
