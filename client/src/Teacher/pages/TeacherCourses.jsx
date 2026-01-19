// File: client/src/Teacher/pages/TeacherCourses.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { popularCourses } from "@/Teacher/data/dashboardData";
import {
  BookOpen,
  Clock,
  Filter,
  MoreVertical,
  PlayCircle,
  Plus,
  Search,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherCourses() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allCourses = [
    ...popularCourses,
    // Add some mock draft/archived courses
    {
      title: "Introduction to International Relations",
      students: 0,
      rating: 0,
      revenue: "PKR 0",
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2000&auto=format&fit=crop",
      status: "Draft",
      trend: "0%",
    },
    {
      title: "Everyday Science - Biology Module",
      students: 12,
      rating: 4.5,
      revenue: "PKR 15,000",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      status: "Archived",
      trend: "-2%",
    },
  ];

  // Filter courses based on selected status and search query
  const filteredCourses = allCourses.filter((course) => {
    const courseStatus = (course.status || "Published").toLowerCase();
    const matchesFilter = filter === "all" || courseStatus === filter;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground text-sm">
            Manage your curriculum and content
          </p>
        </div>
        <Link to="/teacher/courses/new">
          <Button className="font-semibold ">
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </Link>
      </div>

      {/* Filters Toolbar */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-xs sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-28 sm:w-32 h-9 shrink-0">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="p-4 bg-muted/50 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            No courses found
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            {filter === "all"
              ? "You haven't created any courses yet. Start by creating your first course!"
              : `No ${filter} courses found. Try a different filter or create a new course.`}
          </p>
          <Link to="/teacher/courses/new">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create New Course
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCourses.map((course, i) => (
            <div
              key={i}
              className="group bg-card dark:bg-card/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Status Badge */}
                <div
                  className={cn(
                    "absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm bg-background/90 border border-border/50 shadow-sm",
                    course.status === "Draft"
                      ? "text-amber-600 dark:text-amber-400"
                      : course.status === "Archived"
                        ? "text-muted-foreground"
                        : "text-emerald-600 dark:text-emerald-400",
                  )}
                >
                  {course.status || "Published"}
                </div>
                {/* Optional Badge */}
                {course.badge && (
                  <div
                    className={cn(
                      "absolute top-2 right-2 text-[9px] font-medium px-1.5 py-0.5 rounded backdrop-blur-sm bg-background/90 border border-border/50 shadow-sm",
                      course.badge === "Trending"
                        ? "text-violet-600 dark:text-violet-400"
                        : course.badge === "Best Seller"
                          ? "text-orange-600 dark:text-orange-400"
                          : "text-cyan-600 dark:text-cyan-400",
                    )}
                  >
                    {course.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-1 gap-3">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {course.students} Students
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {course.rating || "N/A"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PlayCircle className="w-3.5 h-3.5" />
                      {course.lessons || 12} Lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration || "8h 30m"}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-2.5 border-t border-border/50 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      Revenue
                    </p>
                    <p className="text-sm font-bold text-primary truncate">
                      {course.revenue}
                    </p>
                  </div>
                  <Link to={`/teacher/courses/${i}/edit`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs font-medium px-3 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
