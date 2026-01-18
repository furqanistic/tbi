// File: client/src/Student/data/analyticsData.js

// Weekly study pattern - hours spent each day
export const weeklyStudyPattern = [
  { day: "Mon", hours: 4.5, label: "Monday" },
  { day: "Tue", hours: 3.2, label: "Tuesday" },
  { day: "Wed", hours: 5.8, label: "Wednesday" },
  { day: "Thu", hours: 2.5, label: "Thursday" },
  { day: "Fri", hours: 6.2, label: "Friday" },
  { day: "Sat", hours: 7.5, label: "Saturday" },
  { day: "Sun", hours: 4.8, label: "Sunday" },
];

// Subject-wise progress distribution
export const subjectProgress = [
  {
    subject: "English Essay",
    progress: 65,
    color: "bg-purple-500",
    textColor: "text-purple-500",
  },
  {
    subject: "General Science",
    progress: 40,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    subject: "Pakistan Affairs",
    progress: 20,
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    subject: "Current Affairs",
    progress: 55,
    color: "bg-amber-500",
    textColor: "text-amber-500",
  },
  {
    subject: "Islamiyat",
    progress: 75,
    color: "bg-rose-500",
    textColor: "text-rose-500",
  },
];

// Improvement trend over last 6 tests
export const improvementTrend = [
  { test: "Test 1", score: 62, date: "Oct 5" },
  { test: "Test 2", score: 68, date: "Oct 12" },
  { test: "Test 3", score: 65, date: "Oct 19" },
  { test: "Test 4", score: 72, date: "Oct 26" },
  { test: "Test 5", score: 78, date: "Nov 2" },
  { test: "Test 6", score: 82, date: "Nov 9" },
];

// Total weekly stats
export const weeklyStats = {
  totalHours: 34.5,
  averageDaily: 4.9,
  targetHours: 40,
  completionRate: 86,
};
