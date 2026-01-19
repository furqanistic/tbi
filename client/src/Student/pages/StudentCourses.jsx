// File: client/src/pages/dashboard/StudentCourses.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
    BookOpen,
    CheckCircle2,
    Clock,
    Filter,
    MoreVertical,
    PlayCircle,
    Search,
} from "lucide-react";
import { useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");

  // Map URL param to filter state
  const getFilterFromParam = (param) => {
    switch (param) {
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "All";
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const filter = getFilterFromParam(filterParam);

  const setFilter = (newFilter) => {
    // Map filter state back to URL param
    let paramValue = "";
    if (newFilter === "In Progress") paramValue = "in-progress";
    else if (newFilter === "Completed") paramValue = "completed";

    if (paramValue) setSearchParams({ filter: paramValue });
    else setSearchParams({});
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course, i) => (
          <div
            key={course.id}
            onClick={() => navigate(`/student/courses/${course.id}`)}
            className="group relative flex flex-col rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xs p-4 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted shadow-inner">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                  <PlayCircle className="w-12 h-12 text-white fill-white/10 relative z-10" />
                </div>
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm flex items-center justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary leading-none">
                  {course.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-4 mt-2">
              <div className="space-y-2">
                <h3 className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors h-10">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Avatar className="h-5 w-5 border-2 border-background/50 ring-1 ring-border shadow-sm">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor + i}`} />
                        <AvatarFallback>Ix</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground/80">
                    {course.instructor}
                  </span>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                {/* Stats Row */}
                <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground/70">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>
                      {course.lessonsCompleted}/{course.totalLessons} Lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.lastAccessed}</span>
                  </div>
                </div>

                {/* Progress Area */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                    <span className="text-foreground/80">
                      {course.progress}% Completed
                    </span>
                    {course.status === "Completed" ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    ) : ( course.progress > 0 && (
                      <span className="text-primary italic animate-pulse">In Progress</span>
                    ))}
                  </div>
                  <Progress 
                    value={course.progress} 
                    className="h-1.5 bg-muted rounded-full" 
                    indicatorClassName="bg-linear-to-r from-primary to-primary/60 transition-all duration-500"
                  />
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
