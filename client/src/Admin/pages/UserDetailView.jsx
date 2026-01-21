// File: client/src/Admin/pages/UserDetailView.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Mail,
  User as UserIcon,
  Phone,
  Calendar,
  BookOpen,
  History,
  Lock,
  Ban,
  Save,
  GraduationCap,
  Clock,
  Star,
  Users,
} from "lucide-react";
import { getUserById } from "../data/usersData";
import {
  getRoleStyles,
  getStatusStyles,
} from "../components/users-table/columns";

// Mock extra data generator since main data is simple
const generateUserExtraDetails = (user) => {
  if (!user) return null;

  return {
    phone: "+92 300 1234567",
    joinedDate: user.joinDate,
    lastLogin: "2026-01-20 14:30",
    courses:
      user.role === "Teacher"
        ? [
            {
              id: 1,
              title: "Advanced CSS Masterclass",
              students: 1250,
              rating: 4.8,
              status: "Live",
            },
            {
              id: 2,
              title: "React Native Basics",
              students: 850,
              rating: 4.6,
              status: "Live",
            },
            {
              id: 3,
              title: "UI/UX Principles",
              students: 0,
              rating: 0,
              status: "Draft",
            },
          ]
        : [
            {
              id: 101,
              title: "Introduction to Python",
              progress: 75,
              lastAccessed: "2 days ago",
            },
            {
              id: 102,
              title: "Web Development Bootcamp",
              progress: 30,
              lastAccessed: "1 week ago",
            },
          ],
    activityLog: [
      {
        id: 1,
        action: "Logged in",
        date: "2026-01-20 14:30",
        ip: "192.168.1.1",
      },
      {
        id: 2,
        action: "Updated profile avatar",
        date: "2026-01-18 09:15",
        ip: "192.168.1.1",
      },
      {
        id: 3,
        action: "Password changed",
        date: "2025-12-30 11:20",
        ip: "192.168.1.5",
      },
      {
        id: 4,
        action: "Account verified",
        date: "2025-11-15 10:00",
        ip: "System",
      },
    ],
    stats:
      user.role === "Teacher"
        ? { totalStudents: 2100, totalCourses: 3, totalRevenue: "PKR 450,000" }
        : { coursesEnrolled: 2, completedCourses: 0, avgScore: "85%" },
  };
};

export default function UserDetailView() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [extraDetails, setExtraDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate delay
      const userData = getUserById(userId);
      setUser(userData);
      setExtraDetails(generateUserExtraDetails(userData));
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h2 className="text-xl font-bold text-foreground">User Not Found</h2>
        <p className="text-muted-foreground text-sm">
          The requested user does not exist or has been removed.
        </p>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/users")}
          className="border-gray-300 dark:border-border/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Users
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4">
        {/* Top Row: Back button and Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/users")}
            className="h-9 px-2.5 border-gray-300 dark:border-border/50"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          {/* Action Buttons - Top Right */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 text-xs border-red-300 text-red-600 hover:bg-red-50 dark:border-red-500/30 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <Ban className="w-4 h-4 mr-1.5" />
              Suspend
            </Button>
            <Button size="sm" className="h-9 px-4 text-xs">
              <Save className="w-4 h-4 mr-1.5" />
              Save
            </Button>
          </div>
        </div>

        {/* User Info Row */}
        <div className="flex items-center gap-4">
          <Avatar
            className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-gray-300 dark:border-border/50 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {}}
          >
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xl font-bold bg-muted">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-tight cursor-pointer hover:underline">
              {user.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant="outline"
                className={cn(
                  "text-xs font-semibold px-2.5 py-0.5",
                  getRoleStyles(user.role),
                )}
              >
                {user.role}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "text-xs font-semibold px-2.5 py-0.5",
                  getStatusStyles(user.status),
                )}
              >
                {user.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid: User Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Personal Information */}
        <div className="md:col-span-1 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-4 space-y-4">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
            <UserIcon className="w-4 h-4 text-primary" />
            Personal Information
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-gray-200 dark:border-border/50 shrink-0">
                <Mail className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email Address</p>
                <p
                  className="font-medium text-foreground truncate"
                  title={user.email}
                >
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-gray-200 dark:border-border/50 shrink-0">
                <Phone className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone Number</p>
                <p className="font-medium text-foreground">
                  {extraDetails.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-gray-200 dark:border-border/50 shrink-0">
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Joined Date</p>
                <p className="font-medium text-foreground">
                  {new Date(extraDetails.joinedDate).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" },
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic / Teaching Summary */}
        <div className="md:col-span-2 rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 p-4">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2 mb-4">
            {user.role === "Teacher" ? (
              <GraduationCap className="w-4 h-4 text-primary" />
            ) : (
              <BookOpen className="w-4 h-4 text-primary" />
            )}
            {user.role === "Teacher" ? "Teaching Summary" : "Academic Summary"}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {user.role === "Teacher" ? (
              <>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Total Students
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {extraDetails.stats.totalStudents.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Active Courses
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {extraDetails.stats.totalCourses}
                  </p>
                </div>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-emerald-600">PKR</span>
                    <p className="text-xs text-muted-foreground">
                      Total Revenue
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                    {extraDetails.stats.totalRevenue}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Enrolled Courses
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {extraDetails.stats.coursesEnrolled}
                  </p>
                </div>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {extraDetails.stats.completedCourses}
                  </p>
                </div>
                <div className="p-3 rounded-md bg-background border border-gray-200 dark:border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Average Score
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                    {extraDetails.stats.avgScore}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            Last active: {extraDetails.lastLogin}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="courses" className="mt-6">
        <TabsList className="bg-slate-100 dark:bg-muted/50 border border-gray-300 dark:border-border/50">
          <TabsTrigger
            value="courses"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
          >
            Courses
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
          >
            Activity Log
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4">
          <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100 dark:bg-muted/50 border-b-2 border-gray-300 dark:border-border/50 hover:bg-slate-100 dark:hover:bg-muted/50">
                  <TableHead className="font-bold text-xs">
                    Course Title
                  </TableHead>
                  <TableHead className="font-bold text-xs">
                    {user.role === "Teacher" ? "Students" : "Progress"}
                  </TableHead>
                  <TableHead className="font-bold text-xs">
                    {user.role === "Teacher" ? "Rating" : "Last Accessed"}
                  </TableHead>
                  <TableHead className="text-right font-bold text-xs">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {extraDetails.courses.map((course) => (
                  <TableRow
                    key={course.id}
                    className="border-gray-200 dark:border-border/50 hover:bg-muted/30"
                  >
                    <TableCell className="font-medium text-sm">
                      {course.title}
                    </TableCell>
                    <TableCell className="text-sm">
                      {user.role === "Teacher" ? (
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-muted-foreground" />
                          {course.students.toLocaleString()}
                        </span>
                      ) : (
                        `${course.progress}%`
                      )}
                    </TableCell>
                    <TableCell className="text-sm">
                      {user.role === "Teacher" ? (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500" />
                          {course.rating}
                        </span>
                      ) : (
                        course.lastAccessed
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {user.role === "Teacher" ? (
                        <Badge
                          variant="outline"
                          className={
                            course.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                              : "bg-gray-500/10 text-gray-600 border-gray-500/30"
                          }
                        >
                          {course.status}
                        </Badge>
                      ) : (
                        <div className="w-full max-w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-auto">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {extraDetails.courses.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-muted-foreground h-24"
                    >
                      No courses data available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="mt-4">
          <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100 dark:bg-muted/50 border-b-2 border-gray-300 dark:border-border/50 hover:bg-slate-100 dark:hover:bg-muted/50">
                  <TableHead className="font-bold text-xs">Action</TableHead>
                  <TableHead className="font-bold text-xs">
                    Date & Time
                  </TableHead>
                  <TableHead className="text-right font-bold text-xs">
                    IP Address
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {extraDetails.activityLog.map((log) => (
                  <TableRow
                    key={log.id}
                    className="border-gray-200 dark:border-border/50 hover:bg-muted/30"
                  >
                    <TableCell className="font-medium text-sm flex items-center gap-2">
                      <History className="w-3.5 h-3.5 text-muted-foreground" />
                      {log.action}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {log.date}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground font-mono text-xs">
                      {log.ip}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
