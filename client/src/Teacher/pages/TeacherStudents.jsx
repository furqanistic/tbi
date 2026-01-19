import { Button } from "@/components/ui/button";
import { DataTable } from "../components/students-table/data-table";
import { columns } from "../components/students-table/columns";

const studentsData = [
  {
    id: "1",
    name: "Ali Khan",
    email: "ali.khan@example.com",
    course: "CSS Compulsory Batch 15",
    progress: 75,
    lastActive: "2 min ago",
    quizAvg: 82,
    status: "Active",
    image: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    course: "English Essay Masterclass",
    progress: 32,
    lastActive: "4 hours ago",
    quizAvg: 65,
    status: "At Risk",
    image: "https://github.com/shadcn.png",
  },
  {
    id: "3",
    name: "Hassan Raza",
    email: "hassan.raza@example.com",
    course: "Pakistan Affairs",
    progress: 92,
    lastActive: "1 day ago",
    quizAvg: 95,
    status: "Top Performer",
    image: "https://github.com/shadcn.png",
  },
  {
    id: "4",
    name: "Zainab Bibi",
    email: "zainab.bibi@example.com",
    course: "CSS Compulsory Batch 15",
    progress: 12,
    lastActive: "5 days ago",
    quizAvg: 0,
    status: "Inactive",
    image: "https://github.com/shadcn.png",
  },
  {
    id: "5",
    name: "Bilal Ahmed",
    email: "bilal.ahmed@example.com",
    course: "General Science & Ability",
    progress: 55,
    lastActive: "12 hours ago",
    quizAvg: 78,
    status: "Active",
    image: "https://github.com/shadcn.png",
  },
];

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
