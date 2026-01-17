// File: client/src/lib/data/resultsData.js
import { BarChart, BookOpen, Award, Target } from "lucide-react";

export const resultsStats = [
  {
    title: "Average Score",
    value: "78%",
    trend: "+2.5%",
    trendUp: true,
    icon: BarChart,
    description: "vs. last month",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Tests Taken",
    value: "24",
    trend: "+4",
    trendUp: true,
    icon: BookOpen,
    description: "this month",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Highest Score",
    value: "92%",
    trend: "Unix OS",
    trendUp: true,
    icon: Award,
    description: "Best subject",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Percentile Rank",
    value: "Top 10%",
    trend: "+5%",
    trendUp: true,
    icon: Target,
    description: "vs. peers",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export const subjectPerformance = [
  {
    subject: "Pakistan Affairs",
    score: 85,
    total: 100,
    color: "bg-emerald-500",
  },
  { subject: "Current Affairs", score: 72, total: 100, color: "bg-blue-500" },
  { subject: "English Essay", score: 65, total: 100, color: "bg-amber-500" },
  {
    subject: "Islamic Studies",
    score: 88,
    total: 100,
    color: "bg-emerald-500",
  },
  { subject: "General Science", score: 55, total: 100, color: "bg-red-500" },
  // Adding empty state test data if needed in future
];

export const recentResults = [
  {
    id: 1,
    test: "Mock Test 4: Indo-Pak History",
    date: "Oct 24, 2025",
    time: "2h 45m",
    score: 82,
    total: 100,
    status: "Passed",
    trend: "up",
  },
  {
    id: 2,
    test: "Weekly Quiz: Political Science",
    date: "Oct 22, 2025",
    time: "45m",
    score: 68,
    total: 100,
    status: "Average",
    trend: "down",
  },
  {
    id: 3,
    test: "English Précis & Composition",
    date: "Oct 20, 2025",
    time: "3h 00m",
    score: 45,
    total: 100,
    status: "Failed",
    trend: "down",
  },
  {
    id: 4,
    test: "Mock Test 3: International Relations",
    date: "Oct 18, 2025",
    time: "2h 30m",
    score: 88,
    total: 100,
    status: "Passed",
    trend: "up",
  },
  {
    id: 5,
    test: "Weekly Quiz: General Ability",
    date: "Oct 15, 2025",
    time: "30m",
    score: 95,
    total: 100,
    status: "Passed",
    trend: "up",
  },
];
