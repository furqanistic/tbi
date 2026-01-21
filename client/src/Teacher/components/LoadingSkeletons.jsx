// File: client/src/Teacher/components/LoadingSkeletons.jsx
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton for Course Cards in TeacherCourses grid
export function CourseCardSkeleton() {
  return (
    <div className="bg-card dark:bg-card/30 border border-border rounded-xl overflow-hidden flex flex-col">
      {/* Image skeleton - 16:9 aspect ratio */}
      <Skeleton className="aspect-video w-full" />

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 gap-3">
        <div className="flex-1 space-y-2">
          {/* Title */}
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-18" />
            <Skeleton className="h-3 w-14" />
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2.5 border-t border-border/50 flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton className="h-2 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-7 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Grid of Course Card Skeletons
export function CourseGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Skeleton for Test List Items in TeacherMockTests
export function TestListItemSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 rounded-lg border border-border bg-card dark:bg-card/30">
      {/* Checkbox placeholder */}
      <Skeleton className="h-4 w-4 rounded hidden sm:block" />

      {/* Icon & Title */}
      <div className="flex items-start gap-3 flex-1">
        <Skeleton className="h-4 w-4 rounded sm:hidden mt-1" />
        <Skeleton className="h-8 w-8 rounded shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-14" />
          </div>
        </div>
      </div>

      {/* Stats & Actions */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pl-11 sm:pl-0">
        <div className="flex items-center gap-4">
          <div className="text-center space-y-1">
            <Skeleton className="h-4 w-8 mx-auto" />
            <Skeleton className="h-2 w-12" />
          </div>
          <div className="text-center space-y-1">
            <Skeleton className="h-4 w-8 mx-auto" />
            <Skeleton className="h-2 w-12" />
          </div>
        </div>
        <div className="flex gap-1">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  );
}

// List of Test Item Skeletons
export function TestListSkeleton({ count = 5 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <TestListItemSkeleton key={i} />
      ))}
    </div>
  );
}

// Skeleton for DataTable rows
export function DataTableRowSkeleton({ columns = 6 }) {
  return (
    <div className="flex items-center gap-4 p-3 border-b border-border">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}

// Full DataTable Skeleton with header and rows
export function DataTableSkeleton({ rows = 5, columns = 6 }) {
  return (
    <div className="rounded-md border bg-card dark:bg-card/40">
      {/* Search bar skeleton */}
      <div className="p-4 border-b border-border">
        <Skeleton className="h-9 w-64" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 p-3 bg-muted/50 border-b border-border">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <DataTableRowSkeleton key={i} columns={columns} />
      ))}

      {/* Pagination skeleton */}
      <div className="flex items-center justify-between p-3 border-t border-border">
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  );
}

// Dashboard Stats Skeleton
export function StatsCardSkeleton() {
  return (
    <div className="bg-card dark:bg-card/30 rounded-lg border border-border p-2.5 space-y-1.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-6 rounded-md" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-2 w-12" />
      <Skeleton className="h-6 w-20" />
    </div>
  );
}

export function DashboardStatsSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <StatsCardSkeleton key={i} />
      ))}
    </div>
  );
}
