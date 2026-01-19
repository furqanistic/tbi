// File: client/src/Teacher/pages/TeacherDashboard.jsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  dashboardStats,
  popularCourses,
  recentActivity,
  studentProgress,
  upcomingClasses,
} from "@/Teacher/data/dashboardData";
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Plus,
  Settings,
  Star,
  TrendingUp,
} from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 animate-in fade-in duration-500">
      {/* Main Content Area */}
      <div className="lg:col-span-8 xl:col-span-9 space-y-4">
        {/* 1. Quick Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {dashboardStats.map((item, i) => (
            <div
              key={i}
              className="bg-card dark:bg-card/30 rounded-lg border border-border p-2.5 space-y-1.5"
            >
              {/* Top row: Icon + Trend */}
              <div className="flex items-center justify-between">
                <div className={cn("p-1 rounded-md", item.bg)}>
                  <item.icon className={cn("w-3.5 h-3.5", item.color)} />
                </div>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  {item.description.split(" ")[0]} vs last month
                </span>
              </div>
              {/* Label */}
              <p className="text-[11px] text-muted-foreground font-medium">
                {item.title}
              </p>
              {/* Value */}
              <p className="text-lg font-semibold text-foreground tracking-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Top Performing Courses */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                Your Top Courses
              </h2>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Best performing content this month
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-7 gap-1.5 group"
            >
              View All
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularCourses.map((course, i) => (
              <div
                key={i}
                className="group flex flex-col gap-2 rounded-lg border border-border bg-card dark:bg-card/30 p-2 hover:border-primary/30 transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[9px] font-semibold">
                    {course.students} Students
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 px-0.5">
                  <h3 className="font-semibold text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="font-medium text-foreground">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {course.trend}
                    </div>
                  </div>

                  <div className="pt-1.5 flex items-center justify-between border-t border-border">
                    <div>
                      <p className="text-[9px] text-muted-foreground">
                        Revenue
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-primary">
                        {course.revenue}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="h-6 sm:h-7 text-[10px] sm:text-xs font-medium px-3 rounded-full"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Student Progress & Recent Sales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Student Progress Overview */}
          <div className="bg-card dark:bg-card/30 rounded-lg border border-border p-3 sm:p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Student Progress
              </h3>
              <p className="text-[10px] text-muted-foreground">
                Overall performance metrics
              </p>
            </div>
            <div className="space-y-3">
              {studentProgress.map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        item.color,
                      )}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card dark:bg-card/30 rounded-lg border border-border p-3 sm:p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Recent Sales
              </h3>
              <p className="text-[10px] text-muted-foreground">
                Latest transactions
              </p>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Course Purchased</p>
                      <p className="text-[10px] text-muted-foreground">
                        by {["Ali K.", "Sara M.", "John D."][i]}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-foreground">
                      + PKR 15,000
                    </p>
                    <p className="text-[9px] text-muted-foreground">2m ago</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full text-[10px] sm:text-xs font-medium h-7 sm:h-8 rounded-full">
              View All Transactions
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Schedule & Activity */}
      <div className="lg:col-span-4 xl:col-span-3 space-y-3">
        {/* Schedule */}
        <div className="bg-card dark:bg-card/30 rounded-lg border border-border p-3 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xs sm:text-sm">
              Upcoming Classes
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="w-3 h-3" />
            </Button>
          </div>

          <div className="space-y-2">
            {upcomingClasses.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-md border border-transparent hover:border-border hover:bg-muted/50 transition-colors group"
              >
                <div
                  className={cn("w-0.5 h-8 rounded-full shrink-0", item.color)}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-[10px] sm:text-xs font-medium truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>
                      {item.time}, {item.date}
                    </span>
                  </div>
                </div>
                <div className="text-[9px] font-semibold bg-secondary px-1.5 py-0.5 rounded text-foreground/80">
                  {item.students}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full text-[10px] sm:text-xs h-7 rounded-md border-dashed text-muted-foreground hover:text-foreground hover:border-primary/50"
          >
            Manage Schedule
          </Button>
        </div>

        {/* Recent Activity */}
        <div className="bg-card dark:bg-card/30 rounded-lg border border-border p-3 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xs sm:text-sm">
              Recent Activity
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Settings className="w-3 h-3" />
            </Button>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-2">
                <img
                  src={activity.avatar}
                  alt={activity.student}
                  className="w-6 h-6 rounded-full shrink-0 bg-muted"
                />
                <div className="flex-1 min-w-0 space-y-0">
                  <p className="text-[10px] sm:text-xs font-medium leading-tight">
                    <span className="font-semibold hover:text-primary cursor-pointer transition-colors">
                      {activity.student}
                    </span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground line-clamp-1">
                    {activity.detail}
                  </p>
                  <p className="text-[9px] text-muted-foreground/60">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-full text-[10px] sm:text-xs font-medium h-7 text-primary hover:text-primary/80"
          >
            View All Activity
          </Button>
        </div>
      </div>
    </div>
  );
}
