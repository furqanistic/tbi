// File: client/src/lib/data/dashboardData.js
import {
  BookOpen,
  Clock,
  Trophy,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Enrolled Courses",
    value: "3",
    icon: BookOpen,
    description: "2 Active",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Mock Tests",
    value: "12",
    icon: Clock,
    description: "Avg. 78%",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Performance",
    value: "Top 10%",
    icon: Trophy,
    description: "+5% vs last",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export const recentActivity = [
  {
    course: "CSS Compulsory",
    action: "Completed Module",
    detail: "Pakistan Affairs - 1947 Era",
    time: "2h ago",
    icon: CheckCircle2,
    color: "text-emerald-500",
  },
  {
    course: "Essay Masterclass",
    action: "Submitted Mock",
    detail: "Democracy in Pakistan",
    time: "5h ago",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    course: "PMS GK",
    action: "Watched Lecture",
    detail: "Current Affairs Oct 2025",
    time: "1d ago",
    icon: PlayCircle,
    color: "text-amber-500",
  },
  {
    course: "English Precis",
    action: "Quiz Result",
    detail: "Score: 18/20",
    time: "2d ago",
    icon: Trophy,
    color: "text-purple-500",
  },
];

export const ongoingCourses = [
  {
    title: "CSS Compulsories Batch 15",
    progress: 65,
    nextClass: "Today, 5 PM",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    lessonsLeft: 12,
    streak: 4,
    timeSpent: "14h",
  },
  {
    title: "English Essay Intensive",
    progress: 32,
    nextClass: "Tomorrow, 6 PM",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
    lessonsLeft: 8,
    streak: 2,
    timeSpent: "6h",
  },
];
