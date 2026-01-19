// File: client/src/Teacher/pages/TeacherDashboard.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  dashboardStats,
  popularCourses,
  recentActivity,
  upcomingClasses,
} from "@/Teacher/data/dashboardData";
import {
  ArrowRight,
  BarChart,
  Calendar,
  CheckCircle2,
  DollarSign,
  MoreVertical,
  Plus,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-500">
      {/* Main Content Area */}
      <div className="lg:col-span-9 space-y-8">
        {/* 1. Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dashboardStats.map((item, i) => (
            <div
              key={i}
              className="bg-card dark:bg-card/30 rounded-xl border border-border p-5 flex flex-col justify-between gap-4 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className={cn("p-2.5 rounded-xl", item.bg)}>
                  <item.icon className={cn("w-5 h-5", item.color)} />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  {item.description.split(" ")[0]}
                </div>
              </div>
              <div>
                <h3 className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight">
                    {item.value}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Top Performing Courses */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Your Top Courses
              </h2>
              <p className="text-xs text-muted-foreground font-medium">
                Best performing content this month
              </p>
            </div>
            <Button variant="ghost" className="text-xs h-8 gap-2 group">
              View All
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCourses.map((course, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-3 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xs p-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                    {course.students} Students
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 p-1">
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2 h-10 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-medium text-foreground">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-500 font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {course.trend}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-border/50 mt-2">
                    <div>
                      <p className="text-[10px] text-muted-foreground">
                        Revenue
                      </p>
                      <p className="text-sm font-bold text-primary">
                        {course.revenue}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 text-xs font-semibold"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Revenue & Analytics Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-primary/5 via-card to-card rounded-2xl border border-border/60 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Revenue Overview</h3>
                <p className="text-xs text-muted-foreground">
                  Monthly earning report
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  This Month
                </Button>
              </div>
            </div>

            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 flex-1 group"
                >
                  <div className="w-full relative">
                    <div
                      className="w-full bg-primary/20 rounded-t-sm transition-all duration-500 group-hover:bg-primary/40"
                      style={{ height: `${h * 1.5}px` }}
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-full bg-primary rounded-t-sm transition-all duration-700 ease-out group-hover:opacity-90"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/50 rounded-2xl border border-border/60 p-6 space-y-4">
            <div>
              <h3 className="font-bold text-lg">Recent Sales</h3>
              <p className="text-xs text-muted-foreground">
                Latest transactions
              </p>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Course Purchased</p>
                      <p className="text-xs text-muted-foreground">
                        by {["Ali K.", "Sara M.", "John D.", "Zara A."][i]}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">
                      + PKR 15,000
                    </p>
                    <p className="text-[10px] text-muted-foreground">2m ago</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full text-xs font-semibold h-9"
            >
              View All Transactions
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Schedule & Activity */}
      <div className="lg:col-span-3 space-y-6">
        {/* Schedule */}
        <div className="bg-card dark:bg-card/30 rounded-xl border border-border p-4 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">Upcoming Classes</h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-3">
            {upcomingClasses.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-border/50 hover:bg-muted/50 transition-all group"
              >
                <div
                  className={cn("w-1 h-10 rounded-full shrink-0", item.color)}
                ></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {item.time}, {item.date}
                    </span>
                  </div>
                </div>
                <div className="text-[10px] font-bold bg-secondary px-2 py-1 rounded-md text-foreground/80">
                  {item.students}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full text-xs h-9 rounded-lg border-dashed text-muted-foreground hover:text-foreground hover:border-primary/50"
          >
            Manage Schedule
          </Button>
        </div>

        {/* Recent Activity */}
        <div className="bg-card dark:bg-card/30 rounded-xl border border-border p-4 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">Recent Activity</h3>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Settings className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-0 text-left">
            <div className="relative border-l-2 border-border/50 ml-2 space-y-6 pb-2">
              {recentActivity.map((activity, i) => (
                <div key={i} className="relative pl-6">
                  <div
                    className={cn(
                      "absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full border-2 border-background",
                      activity.color.replace("text-", "bg-"),
                    )}
                  ></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium">
                      <span className="font-bold hover:text-primary cursor-pointer transition-colors">
                        {activity.student}
                      </span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {activity.detail}
                    </p>
                    <p className="text-[10px] text-muted-foreground/60">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full text-xs font-semibold h-8 text-primary hover:text-primary/80"
          >
            View All Activity
          </Button>
        </div>
      </div>
    </div>
  );
}
