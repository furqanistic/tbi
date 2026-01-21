// File: client/src/Teacher/pages/TeacherStudents.jsx
import { Button } from "@/components/ui/button";
import { DataTable } from "../components/students-table/data-table";
import { columns } from "../components/students-table/columns";
import { studentsData } from "../data/studentsData";

export default function TeacherStudents() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground text-sm">
            Track progress and manage enrollments
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            Export Report
          </Button>
          <Button className="h-9">Invite Student</Button>
        </div>
      </div>

      <DataTable columns={columns} data={studentsData} />
    </div>
  );
}
