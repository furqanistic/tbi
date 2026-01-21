// File: client/src/Admin/pages/AdminUsers.jsx
import { Button } from "@/components/ui/button";
import { UsersDataTable } from "../components/users-table/data-table";
import { UserPlus, Download } from "lucide-react";

export default function AdminUsers() {
  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Users Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage all platform users (Teachers & Students)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs border-gray-300 dark:border-border/50"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Export
          </Button>
          <Button size="sm" className="h-8 text-xs">
            <UserPlus className="w-3.5 h-3.5 mr-1.5" />
            Add User
          </Button>
        </div>
      </div>

      {/* Users Data Table */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
        <UsersDataTable />
      </div>
    </div>
  );
}
