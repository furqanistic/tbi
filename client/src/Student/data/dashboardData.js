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

export const mentors = [
  {
    name: "Dr. Ayesha Khan",
    role: "Senior Instructor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
    isFollowing: true,
  },
  {
    name: "Sir Hamza Ali",
    role: "Essay Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
    isFollowing: false,
  },
  {
    name: "Prof. Sarah Ahmed",
    role: "Current Affairs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    isFollowing: true,
  },
];

export const courseProgression = [
  {
    title: "English Essay",
    watched: "4/12",
    color: "bg-purple-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "General Science",
    watched: "8/20",
    color: "bg-blue-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Pakistan Affairs",
    watched: "2/10",
    color: "bg-emerald-500",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export const instructorSessions = [
  {
    instructor: "Dr. Ayesha Khan",
    date: "12 Oct, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
    type: "LIVE",
    title: "Critical Analysis: Fall of Dhaka",
    typeColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    instructor: "Sir Hamza Ali",
    date: "14 Oct, 2025",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
    type: "WORKSHOP",
    title: "Essay Structure & Outlines",
    typeColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
];

export const classSchedule = [
  {
    title: "CSS Essay Writing",
    time: "10:00 AM",
    date: "Today",
    type: "Live",
    color: "bg-red-500",
  },
  {
    title: "Pakistan Affairs",
    time: "02:00 PM",
    date: "Today",
    type: "Recorded",
    color: "bg-blue-500",
  },
  {
    title: "General Science",
    time: "11:00 AM",
    date: "Tomorrow",
    type: "Live",
    color: "bg-green-500",
  },
];
