// File: client/src/Admin/pages/CourseDetailView.jsx
"use client";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BookOpen,
  PlayCircle,
  DollarSign,
  Percent,
  User,
  Calendar,
  X,
  Check,
} from "lucide-react";
import { courseSubmissions } from "../data/courseApprovalsData";

// Status badge styles
const getStatusStyles = (status) => {
  switch (status) {
    case "Pending":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "Review":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
    case "Live":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Rejected":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Category badge styles
const getCategoryStyles = (category) => {
  switch (category) {
    case "CSS":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
    case "PMS":
      return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
    case "General":
      return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function CourseDetailView() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectFeedback, setRejectFeedback] = useState("");

  // Find course by ID
  const course = courseSubmissions.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h2 className="text-xl font-bold text-foreground">Course Not Found</h2>
        <p className="text-muted-foreground">
          The requested course does not exist.
        </p>
        <Button variant="outline" onClick={() => navigate("/admin/approvals")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to List
        </Button>
      </div>
    );
  }

  const discountedPrice = course.discount
    ? course.price - (course.price * course.discount) / 100
    : course.price;

  const handleApprove = () => {
    console.log("Approved course:", course.id);
    navigate("/admin/approvals");
  };

  const handleReject = () => {
    console.log("Rejected course:", course.id, "Feedback:", rejectFeedback);
    setRejectModalOpen(false);
    setRejectFeedback("");
    navigate("/admin/approvals");
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-start gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/approvals")}
            className="h-8 px-2.5 border-gray-300 dark:border-border/50"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-tight">
              {course.title}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className={cn(
                  "text-[10px] font-semibold px-2 py-0.5",
                  getCategoryStyles(course.category),
                )}
              >
                {course.category}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "text-[10px] font-semibold px-2 py-0.5",
                  getStatusStyles(course.status),
                )}
              >
                {course.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {course.description}
      </p>

      {/* Bento Grid: Instructor & Pricing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Instructor Card */}
        <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-4">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            Instructor Details
          </h4>
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-border/50">
              <AvatarImage
                src={course.instructorAvatar}
                alt={course.instructor}
              />
              <AvatarFallback className="text-sm font-semibold">
                {course.instructor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground">
                {course.instructor}
              </p>
              <p className="text-[11px] text-muted-foreground truncate">
                {course.instructorEmail}
              </p>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
                <Calendar className="w-3 h-3" />
                Submitted{" "}
                {new Date(course.submissionDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-4">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" />
            Pricing Details
          </h4>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                  PKR {discountedPrice.toLocaleString()}
                </span>
                {course.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through">
                    PKR {course.price.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Final price for students
              </p>
            </div>
            {course.discount > 0 && (
              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-sm">
                <Percent className="w-3.5 h-3.5 mr-1" />
                {course.discount}% OFF
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-4">
        <h4 className="text-xs font-bold text-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Curriculum Overview ({course.modules.length} Modules,{" "}
          {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)}{" "}
          Lessons)
        </h4>
        <div className="space-y-2">
          {course.modules.map((module, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 dark:border-border/50 overflow-hidden"
            >
              <div className="px-3 py-2 bg-muted/50 border-b border-gray-200 dark:border-border/50">
                <span className="text-xs font-semibold text-foreground">
                  Module {idx + 1}: {module.title}
                </span>
              </div>
              <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {module.lessons.map((lesson, lessonIdx) => (
                  <div
                    key={lessonIdx}
                    className="flex items-center gap-2 px-2 py-1.5 text-xs text-muted-foreground rounded hover:bg-muted/30 transition-colors"
                  >
                    <PlayCircle className="w-3 h-3 text-primary/60 shrink-0" />
                    <span className="truncate">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-background border-t border-gray-300 dark:border-border/50 p-2 sm:p-4 flex justify-end gap-2 sm:gap-3 z-40">
        <Button
          variant="outline"
          onClick={() => setRejectModalOpen(true)}
          className="h-9 sm:h-10 px-3 sm:px-6 text-xs sm:text-sm border-red-300 text-red-600 hover:bg-red-50 dark:border-red-500/30 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          <X className="w-4 h-4 mr-1 sm:mr-2" />
          Reject
        </Button>
        <Button
          onClick={handleApprove}
          className="h-9 sm:h-10 px-3 sm:px-6 text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <Check className="w-4 h-4 mr-1 sm:mr-2" />
          Approve
        </Button>
      </div>

      {/* Reject Feedback Modal */}
      <Dialog open={rejectModalOpen} onOpenChange={setRejectModalOpen}>
        <DialogContent className="sm:max-w-md border border-gray-300 dark:border-border/50">
          <DialogHeader>
            <DialogTitle>Reject Course</DialogTitle>
            <DialogDescription className="text-xs">
              Provide feedback for the instructor explaining why this course was
              rejected.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Enter your feedback..."
            value={rejectFeedback}
            onChange={(e) => setRejectFeedback(e.target.value)}
            className="min-h-25 text-sm resize-none border-gray-300 dark:border-border/50"
          />
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setRejectModalOpen(false)}
              className="border-gray-300 dark:border-border/50"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={!rejectFeedback.trim()}
            >
              <X className="w-4 h-4 mr-1" />
              Confirm Reject
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
