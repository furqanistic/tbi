// File: client/src/pages/dashboard/StudentCourses.jsx
import { useState } from "react";
import {
  Search,
  Filter,
  PlayCircle,
  Clock,
  BookOpen,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useNavigate } from "react-router-dom";

const myCourses = [
  {
    id: "ics-computer-science",
    title: "ICS Computer Science - Part 1",
    instructor: "Prof. Ahmed Khan",
    progress: 65,
    lessonsCompleted: 24,
    totalLessons: 45,
    lastAccessed: "2h ago",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    category: "ICS",
  },
  {
    id: "css-current-affairs",
    title: "CSS Current Affairs 2026",
    instructor: "Sir Salman Ali",
    progress: 32,
    lessonsCompleted: 8,
    totalLessons: 60,
    lastAccessed: "1d ago",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=800&auto=format&fit=crop",
    category: "CSS",
  },
  {
    id: "mdcat-prep-complete",
    title: "MDCAT Complete Preparation",
    instructor: "Dr. Team TBI",
    progress: 10,
    lessonsCompleted: 12,
    totalLessons: 120,
    lastAccessed: "3d ago",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    category: "MDCAT",
  },
  {
    id: "fsc-pre-medical-biology",
    title: "FSc Pre-Medical Biology",
    instructor: "Dr. Maria Fatima",
    progress: 0,
    lessonsCompleted: 0,
    totalLessons: 55,
    lastAccessed: "Never",
    status: "Not Started",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
    category: "FSc",
  },
];

export default function StudentCourses() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCourses = myCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || course.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            My Courses
          </h1>
          <p className="text-muted-foreground text-xs mt-0.5">
            Manage your learning progress and pick up where you left off.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-8 h-8 text-xs bg-background/50 border-border/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-2 text-xs border-dashed border-border/60"
              >
                <Filter className="h-3 w-3" />
                <span className="hidden sm:inline">Filter: {filter}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onClick={() => setFilter("All")}
                className="text-xs"
              >
                All Courses
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("In Progress")}
                className="text-xs"
              >
                In Progress
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("Not Started")}
                className="text-xs"
              >
                Not Started
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("Completed")}
                className="text-xs"
              >
                Completed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/student/courses/${course.id}`)}
            className="group flex flex-col rounded-sm border border-border bg-card dark:bg-card/30 overflow-hidden hover:shadow-md transition-all cursor-pointer shadow-sm"
          >
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <Button
                  size="icon"
                  className="rounded-full h-8 w-8 bg-white/90 text-black hover:bg-white hover:scale-105 transition-all shadow-lg"
                >
                  <PlayCircle className="w-4 h-4 fill-black" />
                </Button>
              </div>
              <Badge
                variant="secondary"
                className="absolute top-2 right-2 text-[9px] bg-background/90 backdrop-blur-sm border-none shadow-sm h-4 px-1.5 rounded-sm"
              >
                {course.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-3 gap-3">
              <div className="space-y-1">
                <h3 className="font-semibold text-xs leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-[10px] text-muted-foreground">
                  By {course.instructor}
                </p>
              </div>

              <div className="mt-auto space-y-2">
                {/* Stats Row */}
                <div className="flex items-center justify-between text-[10px] text-muted-foreground/80">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>
                      {course.lessonsCompleted}/{course.totalLessons}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.lastAccessed}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="font-medium text-foreground">
                      {course.progress}%
                    </span>
                    {course.status === "Completed" && (
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                    )}
                  </div>
                  <Progress value={course.progress} className="h-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p>No courses found matching your criteria.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setFilter("All");
            }}
            className="mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
