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
  Filter,
  MoreVertical,
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
          <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </Link>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between py-2">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background border-border/50 h-9"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-35 h-9 bg-background border-border/50">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9 shrink-0">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, i) => (
            <div
              key={i}
              className="group bg-card dark:bg-card/40 border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Link to={`/teacher/courses/${i}/edit`}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 text-xs font-bold"
                    >
                      Edit Content
                    </Button>
                  </Link>
                </div>
                <div
                  className={cn(
                    "absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-md bg-background/90 backdrop-blur-sm",
                    course.status === "Draft"
                      ? "text-amber-500"
                      : course.status === "Archived"
                        ? "text-muted-foreground"
                        : "text-emerald-500",
                  )}
                >
                  {course.status || "Published"}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-base leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {course.students} Students
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {course.rating || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Revenue Metric */}
                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      Total Revenue
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {course.revenue}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-muted"
                  >
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
