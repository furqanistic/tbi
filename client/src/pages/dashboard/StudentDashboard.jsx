// File: client/src/pages/dashboard/StudentDashboard.jsx
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Trophy,
  MoreHorizontal,
  PlayCircle,
  Calendar,
  Flame,
  Timer,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import {
  dashboardStats,
  recentActivity,
  ongoingCourses,
} from "@/lib/data/dashboardData";

export default function StudentDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Welcome back, Ali. You have 2 classes coming up.
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-none h-8 text-xs"
          >
            <Calendar className="mr-2 h-3.5 w-3.5" />
            Calendar
          </Button>
          <Button
            size="sm"
            className="flex-1 sm:flex-none h-8 text-xs shadow-none"
          >
            <PlayCircle className="mr-2 h-3.5 w-3.5" />
            Join Class
          </Button>
        </div>
      </div>

      {/* Stats Grid - Ultra Compact */}
      <div className="grid grid-cols-3 gap-4">
        {dashboardStats.map((stat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg border border-border/40 bg-background/50 p-4 hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                {stat.title}
              </span>
              <stat.icon className={cn("h-3.5 w-3.5", stat.color)} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Content Area - Ongoing Courses */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground/90">
              Continue Learning
            </h2>
            <Link
              to="/dashboard/student/courses"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              All Courses <ArrowUpRight className="ml-1 w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-2">
            {ongoingCourses.map((course, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-lg border border-border/30 bg-background/40 p-2.5 hover:bg-muted/20 hover:border-border/60 transition-all"
              >
                {/* Compact Image */}
                <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm leading-none truncate pr-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Timer className="w-3 h-3" /> {course.nextClass}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-blue-500/70" />{" "}
                      {course.lessonsLeft} left
                    </span>
                    <span className="w-0.5 h-0.5 rounded-full bg-border" />
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500/70" />{" "}
                      {course.streak}d streak
                    </span>
                    <span className="w-0.5 h-0.5 rounded-full bg-border" />
                    <span>{course.progress}% complete</span>
                  </div>
                </div>

                {/* Progress & Action */}
                <div className="hidden sm:flex items-center gap-4 pl-2 border-l border-border/30">
                  <div className="w-24">
                    <Progress value={course.progress} className="h-1" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                  >
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity - Timeline */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-sm font-semibold text-foreground/90">
            Recent Activity
          </h2>
          <div className="relative pl-2 space-y-6">
            {/* Timeline Line */}
            <div className="absolute top-2 bottom-2 left-2.75 w-px bg-border/40" />

            {recentActivity.map((item, i) => (
              <div key={i} className="relative flex gap-4 items-start group">
                <div
                  className={cn(
                    "relative z-10 w-5 h-5 rounded-full border border-background flex items-center justify-center shrink-0 bg-background",
                    item.color,
                  )}
                >
                  <item.icon className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0 -mt-0.5">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-xs font-medium text-foreground leading-tight">
                      {item.action}
                    </p>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap tabular-nums">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                    {item.course}
                  </p>
                  <p className="text-[11px] text-muted-foreground/60 truncate mt-0.5 pl-2 border-l-2 border-border/40">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full text-xs h-8 border-dashed text-muted-foreground hover:text-foreground hover:border-solid"
          >
            View History
          </Button>
        </div>
      </div>
    </div>
  );
}
