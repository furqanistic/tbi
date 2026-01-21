// File: client/src/Teacher/components/students-table/StudentDetailsSheet.jsx
"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Calendar, GraduationCap, Mail, Phone, TrendingUp } from "lucide-react";

// Helper function to get quiz color
const getQuizColor = (avg) => {
  if (avg > 75) return "text-emerald-600 dark:text-emerald-500";
  if (avg >= 50) return "text-amber-600 dark:text-amber-500";
  return "text-red-600 dark:text-red-500";
};

// Helper function to get status badge style
const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
    case "Top Performer":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "At Risk":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "Inactive":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Mock Quiz Data for the mini-chart
const mockQuizHistory = [
  { name: "Quiz 1", score: 78 },
  { name: "Quiz 2", score: 65 },
  { name: "Quiz 3", score: 82 },
  { name: "Quiz 4", score: 71 },
  { name: "Quiz 5", score: 88 },
];

export function StudentDetailsSheet({ student, open, onOpenChange }) {
  if (!student) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh] lg:max-w-3xl lg:mx-auto lg:rounded-t-xl">
        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 px-4 pb-4">
          {/* Header Section - Avatar, Name, Status in horizontal flex */}
          <DrawerHeader className="flex flex-row items-center gap-4 p-0 pt-2 pb-4 border-b border-border text-left">
            <Avatar className="h-14 w-14 border-2 border-border shrink-0">
              <AvatarImage src={student.image} alt={student.name} />
              <AvatarFallback className="text-lg font-semibold">
                {student.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <DrawerTitle className="text-base font-bold truncate">
                {student.name}
              </DrawerTitle>
              <DrawerDescription className="text-xs truncate">
                {student.email}
              </DrawerDescription>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] font-semibold px-2 py-0.5 shrink-0",
                getStatusStyle(student.status),
              )}
            >
              {student.status}
            </Badge>
          </DrawerHeader>

          <div className="py-4 space-y-4">
            {/* Bento Grid - 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1: Contact */}
              <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                <h4 className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                  Contact
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-muted-foreground uppercase">
                        Email
                      </p>
                      <p className="text-xs font-medium truncate">
                        {student.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-muted-foreground uppercase">
                        Phone
                      </p>
                      <p className="text-xs font-medium">+92 300 1234567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Enrollment */}
              <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                <h4 className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                  Enrollment
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-muted-foreground uppercase">
                        Course
                      </p>
                      <p className="text-xs font-medium truncate">
                        {student.course}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-muted-foreground uppercase">
                        Join Date
                      </p>
                      <p className="text-xs font-medium">Jan 15, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Progress - Prominent Bar */}
            <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                  Course Progress
                </h4>
                <span className="text-sm font-bold">{student.progress}%</span>
              </div>
              <Progress
                value={student.progress}
                className="h-3"
                indicatorClassName={cn(
                  "rounded-full",
                  student.progress > 80
                    ? "bg-emerald-500"
                    : student.progress < 30
                      ? "bg-amber-500"
                      : "bg-primary",
                )}
              />
            </div>

            {/* Quiz Performance (Mini Chart) */}
            <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                  Quiz Performance
                </h4>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span
                    className={cn("font-bold", getQuizColor(student.quizAvg))}
                  >
                    {student.quizAvg}% Avg
                  </span>
                </div>
              </div>
              {/* Simple Bar Chart Visualization */}
              <div className="flex items-end justify-between gap-2 h-20 pt-2">
                {mockQuizHistory.map((quiz, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 flex-1"
                  >
                    <div
                      className={cn(
                        "w-full rounded-t-sm transition-all min-h-[4px]",
                        quiz.score > 75
                          ? "bg-emerald-500"
                          : quiz.score >= 50
                            ? "bg-amber-500"
                            : "bg-red-500",
                      )}
                      style={{ height: `${quiz.score}%` }}
                    />
                    <span className="text-[9px] text-muted-foreground font-medium">
                      Q{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <DrawerFooter className="border-t border-border bg-background flex-row gap-2 px-4 py-3">
          <Button
            variant="outline"
            className="flex-1 h-9 text-xs"
            onClick={() => (window.location.href = `mailto:${student.email}`)}
          >
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            Send Email
          </Button>
          <Button className="flex-1 h-9 text-xs">View Full Report</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
