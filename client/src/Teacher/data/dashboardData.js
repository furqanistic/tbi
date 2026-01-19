// File: client/src/Teacher/data/dashboardData.js
import {
  BarChart3,
  BookOpen,
  DollarSign,
  GraduationCap,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Revenue",
    value: "PKR 158,400",
    icon: DollarSign,
    description: "+12% from last month",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Total Students",
    value: "1,248",
    icon: Users,
    description: "+45 new this week",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Active Courses",
    value: "8",
    icon: BookOpen,
    description: "2 in draft",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export const recentActivity = [
  {
    student: "Furqan Afzal",
    action: "Enrolled in",
    detail: "CSS Compulsory Batch 15",
    time: "2m ago",
    icon: GraduationCap,
    color: "text-blue-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Furqan",
  },
  {
    student: "Ayesha Siddiqui",
    action: "Completed",
    detail: "English Essay Module 1",
    time: "35m ago",
    icon: Star,
    color: "text-amber-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
  },
  {
    student: "Ahmed Raza",
    action: "Left a review",
    detail: "⭐⭐⭐⭐⭐ Great explanation!",
    time: "2h ago",
    icon: Star,
    color: "text-yellow-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
  },
  {
    student: "Zainab Malik",
    action: "Submitted Quiz",
    detail: "Pakistan Affairs Quiz 3",
    time: "4h ago",
    icon: PlayCircle,
    color: "text-purple-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
  },
];

export const popularCourses = [
  {
    title: "CSS English Essay Masterclass",
    students: 450,
    rating: 4.8,
    revenue: "PKR 850k",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
    status: "Published",
    badge: "Best Seller",
    trend: "+12%",
    lessons: 24,
    duration: "12.5h",
  },
  {
    title: "Pakistan Affairs Comprehensive",
    students: 312,
    rating: 4.9,
    revenue: "PKR 520k",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
    status: "Published",
    badge: "Trending",
    trend: "+8%",
    lessons: 18,
    duration: "10h",
  },
  {
    title: "General Science & Ability",
    students: 215,
    rating: 4.7,
    revenue: "PKR 380k",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    status: "Published",
    badge: "New",
    trend: "+24%",
    lessons: 32,
    duration: "15h",
  },
];

export const upcomingClasses = [
  {
    title: "Live Essay Evaluation",
    time: "05:00 PM",
    date: "Today",
    type: "Zoom Live",
    color: "bg-red-500",
    students: 45,
  },
  {
    title: "PA Q&A Session",
    time: "02:00 PM",
    date: "Tomorrow",
    type: "Live Stream",
    color: "bg-blue-500",
    students: 128,
  },
  {
    title: "Precis Writing Workshop",
    time: "11:00 AM",
    date: "Wed",
    type: "Webinar",
    color: "bg-purple-500",
    students: 80,
  },
];

export const studentPerformance = [
  {
    name: "Ahmed Ali",
    course: "English Essay",
    score: "92%",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Sara Khan",
    course: "General Science",
    score: "88%",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Bilal Ahmed",
    course: "Pakistan Affairs",
    score: "85%",
    image: "https://github.com/shadcn.png",
  },
];

export const studentProgress = [
  {
    label: "Course Completion",
    value: 72,
    color: "bg-primary",
  },
  {
    label: "Avg Test Score",
    value: 85,
    color: "bg-emerald-500",
  },
  {
    label: "Active Learners",
    value: 68,
    color: "bg-blue-500",
  },
];
