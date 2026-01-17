// File: client/src/pages/dashboard/StudentResults.jsx
import {
  TrendingUp,
  Award,
  BookOpen,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  BarChart,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
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

const subjectPerformance = [
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
];

const recentResults = [
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

export default function StudentResults() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Results & Analysis
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Track your progress across all courses and mock tests.
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-none h-8 text-xs"
          >
            <Filter className="mr-2 h-3.5 w-3.5" />
            Filter
          </Button>
          <Button
            size="sm"
            className="flex-1 sm:flex-none h-8 text-xs shadow-none"
          >
            <Download className="mr-2 h-3.5 w-3.5" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg border border-border/40 bg-background/50 p-4 hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                {stat.title}
              </span>
              <stat.icon className={cn("h-3.5 w-3.5", stat.color)} />
            </div>
            <div className="space-y-1">
              <span className="text-xl font-bold tracking-tight">
                {stat.value}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-[10px] font-medium flex items-center gap-0.5",
                    stat.trendUp ? "text-emerald-500" : "text-red-500",
                  )}
                >
                  {stat.trendUp ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingUp className="w-3 h-3" /> // You might want a TrendingDown icon here if available
                  )}
                  {stat.trend}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Recent Results Table */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground/90">
              Recent Tests
            </h2>
            {recentResults.length > 0 && (
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
              >
                View All History <ChevronRight className="ml-1 w-3 h-3" />
              </Button>
            )}
          </div>

          <div className="rounded-lg border border-border/40 bg-background/40 overflow-hidden min-h-50">
            {recentResults.length > 0 ? (
              <Table>
                <TableHeader className="bg-muted/40 text-[10px] uppercase text-muted-foreground font-semibold">
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableHead className="px-3 py-2 h-8">Test Name</TableHead>
                    <TableHead className="px-3 py-2 h-8 text-center">
                      Score
                    </TableHead>
                    <TableHead className="px-3 py-2 h-8 hidden sm:table-cell">
                      Duration
                    </TableHead>
                    <TableHead className="px-3 py-2 h-8 text-right">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/40 text-xs">
                  {recentResults.map((result) => (
                    <TableRow
                      key={result.id}
                      className="group hover:bg-muted/20 transition-colors cursor-pointer border-border/40"
                    >
                      <TableCell className="px-3 py-2 relative font-normal">
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {result.test}
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {result.date}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-3 py-2 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="font-semibold text-foreground">
                            {result.score}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-3 py-2 hidden sm:table-cell text-muted-foreground text-[11px]">
                        {result.time}
                      </TableCell>
                      <TableCell className="px-3 py-2 text-right">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "text-[10px] h-5 px-1.5 font-medium border-0",
                            result.status === "Passed" &&
                              "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25",
                            result.status === "Average" &&
                              "bg-amber-500/15 text-amber-500 hover:bg-amber-500/25",
                            result.status === "Failed" &&
                              "bg-red-500/15 text-red-500 hover:bg-red-500/25",
                          )}
                        >
                          {result.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                  <BarChart className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  No results yet
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-50">
                  Take your first mock test to see performance analytics here.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 h-8 text-xs"
                >
                  Browse Tests
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Subject Analysis */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-sm font-semibold text-foreground/90">
            Subject Performance
          </h2>
          <div className="space-y-4 rounded-lg border border-border/40 bg-background/40 p-5 min-h-50">
            {subjectPerformance.length > 0 ? (
              <>
                {subjectPerformance.map((subject, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-foreground/80">
                        {subject.subject}
                      </span>
                      <span className="text-muted-foreground">
                        {subject.score}%
                      </span>
                    </div>
                    <Progress
                      value={subject.score}
                      className="h-1.5"
                      // Note: Custom color class requires tailwind config or a wrapper if Progress doesn't pass className to indicator
                      // Assuming default shadcn implementation which might need tweaks for custom colors
                      indicatorColor={subject.color}
                    />
                  </div>
                ))}

                <div className="pt-4 mt-2 border-t border-border/40">
                  <div className="bg-primary/5 rounded-md p-3">
                    <h4 className="text-xs font-semibold text-primary mb-1 flex items-center gap-2">
                      <TrendingUp className="w-3 h-3" /> Insight
                    </h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      You're excelling in <strong>Islamic Studies</strong> but
                      need more focus on <strong>General Science</strong>.
                      Consider revisiting Module 3.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center h-full">
                <Target className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-xs text-muted-foreground">
                  Complete more tests to unlock subject-wise analysis.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
