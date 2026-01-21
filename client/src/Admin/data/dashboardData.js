// File: client/src/Admin/data/dashboardData.js

import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  PlayCircle 
} from "lucide-react";

export const statsData = [
  {
    label: "Total Revenue",
    value: "PKR 1,250,000",
    meta: "+12% from last month",
    metaColor: "text-emerald-600 dark:text-emerald-500",
    icon: DollarSign,
    color: "text-emerald-600 dark:text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
  {
    label: "Active Students",
    value: "1,420",
    meta: "+58 this week",
    metaColor: "text-blue-600 dark:text-blue-500",
    icon: Users,
    color: "text-blue-600 dark:text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    label: "Verified Teachers",
    value: "35",
    meta: "3 Pending Approvals",
    metaColor: "text-amber-600 dark:text-amber-500",
    icon: GraduationCap,
    color: "text-purple-600 dark:text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-500/10",
  },
  {
    label: "Live Courses",
    value: "42",
    meta: "5 Awaiting Review",
    metaColor: "text-amber-600 dark:text-amber-500",
    icon: PlayCircle,
    color: "text-amber-600 dark:text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-500/10",
  },
];

export const recentActivityData = [
  {
    id: 1,
    event: "New Payout Request",
    user: "Sarah Ahmed",
    date: "2 mins ago",
    status: "Pending",
  },
  {
    id: 2,
    event: "New Course Approval",
    user: "Bilal Khan",
    date: "15 mins ago",
    status: "Review",
  },
  {
    id: 3,
    event: "Teacher Registration",
    user: "Fatima Ali",
    date: "1 hour ago",
    status: "Unverified",
  },
  {
    id: 4,
    event: "Refund Request",
    user: "John Doe",
    date: "3 hours ago",
    status: "Processing",
  },
  {
    id: 5,
    event: "Course Published",
    user: "Usman Zafar",
    date: "5 hours ago",
    status: "Published",
  },
  {
    id: 6,
    event: "Teacher Verification",
    user: "Ayesha Malik",
    date: "6 hours ago",
    status: "Approved",
  },
  {
    id: 7,
    event: "New Course Submission",
    user: "Ali Hassan",
    date: "8 hours ago",
    status: "Review",
  },
  {
    id: 8,
    event: "Payout Completed",
    user: "Sana Khan",
    date: "1 day ago",
    status: "Approved",
  },
  {
    id: 9,
    event: "Student Refund",
    user: "Ahmed Raza",
    date: "1 day ago",
    status: "Processing",
  },
  {
    id: 10,
    event: "Course Update",
    user: "Zara Qureshi",
    date: "2 days ago",
    status: "Published",
  },
  {
    id: 11,
    event: "New Teacher Application",
    user: "Hamza Sheikh",
    date: "2 days ago",
    status: "Pending",
  },
  {
    id: 12,
    event: "Course Revision Request",
    user: "Maria Iqbal",
    date: "3 days ago",
    status: "Review",
  },
];

// Status options for filter dropdown
export const statusOptions = [
  { value: "all", label: "All Statuses" },
  { value: "Pending", label: "Pending" },
  { value: "Review", label: "Review" },
  { value: "Processing", label: "Processing" },
  { value: "Approved", label: "Approved" },
  { value: "Published", label: "Published" },
  { value: "Unverified", label: "Unverified" },
];
