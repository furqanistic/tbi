// File: client/src/Admin/pages/AdminCourseApprovals.jsx
import { ApprovalsDataTable } from "../components/approvals-table/data-table";
import { FileCheck, Clock } from "lucide-react";

export default function AdminCourseApprovals() {
  return (
    <div className=" space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Course Approvals
          </h1>
          <p className="text-sm text-muted-foreground">
            Review and approve courses submitted by instructors
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>Click a course to preview details</span>
        </div>
      </div>

      {/* Approvals Data Table */}
      <div className=" rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
        <ApprovalsDataTable />
      </div>
    </div>
  );
}
