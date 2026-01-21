// File: client/src/Admin/pages/AdminDashboard.jsx
import React from "react";
import { statsData, recentActivityData } from "../data/dashboardData";
import { ActivityDataTable } from "../components/activity-table/data-table";
import { CategoryDonutChart } from "../components/charts/CategoryDonutChart";
import { RevenueTrendChart } from "../components/charts/RevenueTrendChart";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  return (
    <div className="space-y-4 p-1">
      {/* Top Stats Row - Bento Cards with Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-3 sm:p-4 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground truncate pr-2">
                {stat.label}
              </span>
              <div
                className={cn("p-1.5 sm:p-2 rounded-full shrink-0", stat.bg)}
              >
                <stat.icon
                  className={cn("w-3 h-3 sm:w-4 sm:h-4", stat.color)}
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-3">
              <span
                className={cn(
                  "text-lg sm:text-2xl font-bold tracking-tight",
                  stat.color,
                )}
              >
                {stat.value}
              </span>
              {stat.meta && (
                <p
                  className={cn(
                    "text-[10px] sm:text-xs mt-0.5",
                    stat.metaColor,
                  )}
                >
                  {stat.meta}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section - Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Left: Category Distribution Donut (1/3 on desktop) */}
        <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-3 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Course Categories
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Distribution by type
          </p>
          <div className="h-50">
            <CategoryDonutChart />
          </div>
        </div>

        {/* Right: Revenue Trend Area Chart (2/3 on desktop) */}
        <div className="lg:col-span-2 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-3 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Revenue Trend
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Last 7 days performance
          </p>
          <div className="h-50">
            <RevenueTrendChart />
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
        <div className="px-3 py-2 sm:p-4 border-b border-gray-200 dark:border-border/50">
          <h2 className="text-base sm:text-lg font-semibold text-foreground">
            Recent Activity
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage latest platform events and requests.
          </p>
        </div>
        <ActivityDataTable data={recentActivityData} />
      </div>
    </div>
  );
}
