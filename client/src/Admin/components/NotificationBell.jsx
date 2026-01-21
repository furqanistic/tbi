// File: client/src/Admin/components/NotificationBell.jsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bell,
  DollarSign,
  FileCheck,
  UserPlus,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    title: "New Payout Request",
    description: "Sarah Ahmed requested PKR 25,000",
    time: "2 mins ago",
    icon: DollarSign,
    color: "text-emerald-600 dark:text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
    unread: true,
  },
  {
    id: 2,
    title: "Course Pending Review",
    description: "Advanced CSS by Bilal Khan",
    time: "15 mins ago",
    icon: FileCheck,
    color: "text-blue-600 dark:text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-500/10",
    unread: true,
  },
  {
    id: 3,
    title: "New Teacher Registration",
    description: "Fatima Ali applied as instructor",
    time: "1 hour ago",
    icon: UserPlus,
    color: "text-purple-600 dark:text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-500/10",
    unread: false,
  },
  {
    id: 4,
    title: "Refund Request",
    description: "John Doe requested refund",
    time: "3 hours ago",
    icon: AlertCircle,
    color: "text-amber-600 dark:text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-500/10",
    unread: false,
  },
  {
    id: 5,
    title: "Course Published",
    description: "PMS Preparation Guide is now live",
    time: "5 hours ago",
    icon: BookOpen,
    color: "text-teal-600 dark:text-teal-500",
    bg: "bg-teal-100 dark:bg-teal-500/10",
    unread: false,
  },
];

export function NotificationBell() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 relative text-muted-foreground hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-80 p-0 border border-gray-300 dark:border-border/50 rounded-lg overflow-hidden"
        sideOffset={8}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-border/50 bg-muted/30">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">
              Notifications
            </h4>
            {unreadCount > 0 && (
              <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                {unreadCount} new
              </span>
            )}
          </div>
        </div>

        {/* Notification List */}
        <div className="max-h-[320px] overflow-y-auto divide-y divide-gray-200 dark:divide-border/50">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer",
                notification.unread && "bg-primary/5",
              )}
            >
              <div className={cn("shrink-0 p-2 rounded-full", notification.bg)}>
                <notification.icon
                  className={cn("h-3.5 w-3.5", notification.color)}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-foreground truncate">
                    {notification.title}
                  </p>
                  {notification.unread && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                  {notification.description}
                </p>
                <p className="text-[10px] text-muted-foreground/70 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-gray-200 dark:border-border/50 bg-muted/30">
          <Button
            variant="ghost"
            size="sm"
            className="w-full h-7 text-xs text-primary hover:text-primary hover:bg-primary/10"
          >
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
