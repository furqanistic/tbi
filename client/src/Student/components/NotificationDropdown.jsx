// File: client/src/components/dashboard/NotificationDropdown.jsx
import { useState } from "react";
import { Bell, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { savedNotifications } from "@/Student/data/notificationsData";

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState(savedNotifications);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-background ring-1 ring-background"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
          <DropdownMenuLabel className="p-0 text-xs font-semibold">
            Notifications
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="h-auto p-0 text-[10px] text-primary hover:text-primary/80 hover:bg-transparent font-medium"
            >
              Mark all read
            </Button>
          )}
        </div>

        <ScrollArea className="h-75">
          <div className="flex flex-col">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-xs text-muted-foreground">
                No notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <button
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={cn(
                    "flex items-start gap-3 px-4 py-3 text-left transition-colors border-b border-border/40 last:border-0 hover:bg-muted/40 w-full",
                    !notification.isRead ? "bg-muted/20" : "bg-transparent",
                  )}
                >
                  <div
                    className={cn(
                      "mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-border/50 bg-background/50",
                      notification.type === "info" && "text-blue-500",
                      notification.type === "success" && "text-emerald-500",
                      notification.type === "warning" && "text-amber-500",
                      notification.type === "default" &&
                        "text-muted-foreground",
                    )}
                  >
                    <notification.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between leading-none">
                      <p
                        className={cn(
                          "text-xs font-medium",
                          !notification.isRead
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {notification.title}
                      </p>
                      <span className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
                        {notification.time}
                        {!notification.isRead && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-2">
                      {notification.message}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </ScrollArea>
        <div className="p-2 border-t border-border/40 bg-muted/20">
          <Button
            variant="ghost"
            className="w-full h-7 text-[10px] text-muted-foreground hover:text-foreground"
          >
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
