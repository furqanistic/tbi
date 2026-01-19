// File: client/src/pages/dashboard/StudentDashboard.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  classSchedule,
  courseProgression,
  mentors,
  ongoingCourses,
} from "@/Student/data/dashboardData";
import {
  ArrowRight,
  BarChart,
  Bell,
  BookOpen,
  Clock,
  Filter,
  MoreHorizontal,
  MoreVertical,
  PlayCircle,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-500">
      {/* Main Content Area */}
      <div className="lg:col-span-9 space-y-8">
        {/* Top Search & Filter Bar (Optional if duplicate with layout, but matching design) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Note: Layout already has search, but if we want strictly matching the image, we can add page-specific filters here */}
        </div>

        {/* 1. Course Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courseProgression.map((item, i) => (
            <div
              key={i}
              className="bg-card dark:bg-card/30 rounded-sm border border-border p-4 flex flex-col justify-between gap-4 shadow-none hover:shadow-none transition-all"
            >
              <div className="flex justify-between items-start">
                <div className={cn("p-2 rounded-full", item.bgColor)}>
                  <BookOpen className={cn("w-4 h-4", item.iconColor)} />
                </div>
                <div className="text-[10px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                  {item.watched} Watched
                </div>
                <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <Progress
                  value={
                    (parseInt(item.watched.split("/")[0]) /
                      parseInt(item.watched.split("/")[1])) *
                    100
                  }
                  className="h-1.5 bg-muted"
                  indicatorClassName={item.color}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Continue Watching Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Continue Watching
              </h2>
              <p className="text-xs text-muted-foreground font-medium">Pick up right where you left off</p>
            </div>
            <div className="flex gap-2.5">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-xl border-border/40 hover:bg-muted/50 hover:text-primary transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-xl border-border/40 hover:bg-muted/50 hover:text-primary transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingCourses.map((course, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-4 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xs p-4 shadow-none hover:shadow-none transition-all duration-500 overflow-hidden"
              >
                {/* Image & Play Hover */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-none">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                      <PlayCircle className="w-14 h-14 text-white fill-white/10 relative z-10" />
                    </div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-none flex items-center justify-center">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary leading-none">
                      Course
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors h-11">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <Avatar className="h-6 w-6 border-2 border-background/50 ring-1 ring-border shadow-none">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.author || 'instructor' + i}`} />
                          <AvatarFallback>Ix</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-background shadow-none"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground/80">
                        {course.author || 'Furqan Afzal'}
                      </span>
                    </div>
                  </div>

                  {/* Progress Area */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-muted-foreground">{course.progress}% Completed</span>
                      <span className="text-primary italic">Keep it up!</span>
                    </div>
                    <Progress 
                      value={course.progress} 
                      className="h-1.5 bg-muted rounded-full" 
                      indicatorClassName="bg-linear-to-r from-primary to-primary/60 transition-all duration-500"
                    />
                  </div>
                  
                  <Button
                    className="w-full h-10 rounded-xl font-bold text-sm bg-primary hover:bg-primary/90 shadow-none hover:shadow-none transition-all group/btn"
                  >
                    <span>Continue Learning</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-3 space-y-6">
        {/* Profile Card */}
        {/* Schedule Card - Replaces Profile Card */}
        <div className="bg-card dark:bg-card/30 rounded-sm border border-border p-4 space-y-4 shadow-none">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">Your Schedule</h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-3">
            {classSchedule.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 rounded-sm hover:bg-muted/50 transition-colors group"
              >
                <div
                  className={cn("w-1 h-8 rounded-full shrink-0", item.color)}
                ></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium truncate">{item.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span>{item.time}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-border"></span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="text-[10px] font-medium bg-secondary px-2 py-0.5 rounded-full">
                  {item.type}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full text-xs h-9 rounded-sm border-dashed text-muted-foreground hover:text-foreground"
          >
            Add Event
          </Button>
        </div>

        {/* Your Mentor List */}
        <div className="bg-card dark:bg-card/30 rounded-sm border border-border p-4 space-y-4 shadow-none">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Your Mentor</h3>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Connect with expert instructors
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-3">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 p-2 -mx-2 rounded-sm hover:bg-muted/50 transition-all group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-border/40 ring-2 ring-transparent group-hover:ring-blue-500/20 transition-all">
                      <AvatarImage src={mentor.image} />
                      <AvatarFallback className="bg-linear-to-br from-blue-500 to-blue-500 text-white text-xs font-semibold">
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {mentor.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-background rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {mentor.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {mentor.role}
                    </p>
                    {mentor.followers && (
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[9px] text-muted-foreground font-medium">
                          {mentor.followers} followers
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  className={cn(
                    "h-7 text-[10px] px-3.5 rounded-full font-semibold shadow-none transition-all shrink-0",
                    mentor.isFollowing
                      ? "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border/50"
                      : "bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-none hover:shadow-none",
                  )}
                >
                  {mentor.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full text-xs h-9 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/40 font-semibold border border-blue-200/50 dark:border-blue-800/50 transition-all"
          >
            See All Mentors
          </Button>
        </div>
      </div>
    </div>
  );
}
