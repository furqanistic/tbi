// File: client/src/Teacher/pages/TeacherResults.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Search,
  FileText,
  Users,
  Calendar,
  Clock,
  Trophy,
  TrendingUp,
  Download,
} from "lucide-react";

import { testsData, studentResultsData } from "@/Teacher/data/testResultsData";

// Test Card Component - Premium, theme-aware design
function TestCard({ test, onClick }) {
  const scorePercent = Math.round((test.avgScore / test.totalMarks) * 100);

  return (
    <div
      onClick={onClick}
      className="group flex flex-col p-4 rounded-xl border border-border bg-card dark:bg-card/30 hover:border-primary/30 transition-colors cursor-pointer"
    >
      {/* Header: Title & Status */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-2.5 min-w-0 flex-1">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm text-foreground leading-snug min-h-10 group-hover:text-primary transition-colors">
              {test.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{test.course}</p>
          </div>
        </div>
        <span
          className={cn(
            "text-[10px] px-2 py-1 rounded-md font-medium border shrink-0",
            test.status === "Active"
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
              : "bg-muted text-muted-foreground border-border",
          )}
        >
          {test.status}
        </span>
      </div>

      {/* Subtle Divider */}
      <div className="border-t border-border/50 mb-4" />

      {/* Stats Grid - 2x2 layout spanning full width */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 text-xs">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-muted-foreground">Attempts:</span>
          <span className="font-semibold text-foreground">{test.attempts}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendingUp
            className={cn(
              "w-3.5 h-3.5",
              scorePercent >= 70
                ? "text-emerald-500"
                : scorePercent >= 50
                  ? "text-amber-500"
                  : "text-red-500",
            )}
          />
          <span className="text-muted-foreground">Avg:</span>
          <span
            className={cn(
              "font-semibold",
              scorePercent >= 70
                ? "text-emerald-600 dark:text-emerald-400"
                : scorePercent >= 50
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-red-600 dark:text-red-400",
            )}
          >
            {scorePercent}%
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-sky-500" />
          <span className="text-muted-foreground">Date:</span>
          <span className="font-medium text-foreground">
            {new Date(test.date).toLocaleDateString([], {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-muted-foreground">Duration:</span>
          <span className="font-medium text-foreground">{test.duration}</span>
        </div>
      </div>

      {/* Action Button */}
      <Button size="sm" className="w-full h-8 text-xs font-medium rounded-md">
        View Results
      </Button>
    </div>
  );
}

// Student Result Row Component - Compact, theme-aware
function StudentResultRow({ result, rank }) {
  const scorePercent = Math.round((result.score / result.totalMarks) * 100);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-2 px-3 hover:bg-muted/50 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <div className="flex items-center justify-center w-5 h-5 rounded bg-muted text-[10px] font-bold text-muted-foreground shrink-0">
          {rank}
        </div>
        <Avatar className="h-6 w-6 border border-border shrink-0">
          <AvatarImage src={result.image} alt={result.name} />
          <AvatarFallback className="text-[9px]">ST</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-medium text-xs text-foreground truncate group-hover:text-primary transition-colors">
            {result.name}
          </p>
          <p className="text-[10px] text-muted-foreground truncate hidden sm:block">
            {result.email}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pl-7 sm:pl-0">
        <div className="flex items-center gap-1 text-xs">
          <span className="text-muted-foreground">Score:</span>
          <span
            className={cn(
              "font-semibold",
              scorePercent >= 70
                ? "text-emerald-600 dark:text-emerald-400"
                : scorePercent >= 50
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-red-600 dark:text-red-400",
            )}
          >
            {result.score}/{result.totalMarks}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-xs">
          <span className="text-muted-foreground">Time:</span>
          <span className="font-medium text-foreground">
            {result.timeTaken}
          </span>
        </div>
        <span
          className={cn(
            "text-[10px] px-1.5 py-0.5 rounded font-medium border",
            result.status === "Passed"
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
              : "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
          )}
        >
          {result.status}
        </span>
      </div>
    </div>
  );
}

// Test Results Detail View
function TestResultsDetail({ test, results, onBack }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredResults = results
    .filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(
      (r) => statusFilter === "all" || r.status.toLowerCase() === statusFilter,
    )
    .sort((a, b) => b.score - a.score);

  const passedCount = results.filter((r) => r.status === "Passed").length;
  const failedCount = results.filter((r) => r.status === "Failed").length;
  const avgScore = Math.round(
    results.reduce((sum, r) => sum + r.score, 0) / results.length,
  );

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Back Button & Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onBack}
            className="h-7 w-7 shrink-0 rounded-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </Button>
          <div className="min-w-0">
            <h2 className="text-base font-bold text-foreground truncate">
              {test.name}
            </h2>
            <p className="text-[10px] text-muted-foreground">{test.course}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs font-medium gap-1.5"
        >
          <Download className="w-3 h-3" />
          Export
        </Button>
      </div>

      {/* Stats Cards - Compact */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          {
            label: "Attempts",
            value: results.length,
            icon: Users,
            color: "text-primary",
          },
          {
            label: "Avg Score",
            value: `${avgScore}/${test.totalMarks}`,
            icon: TrendingUp,
            color: "text-primary",
          },
          {
            label: "Passed",
            value: passedCount,
            icon: Trophy,
            color: "text-emerald-600 dark:text-emerald-400",
          },
          {
            label: "Failed",
            value: failedCount,
            icon: Clock,
            color: "text-red-600 dark:text-red-400",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-2.5 rounded-lg border border-border bg-card dark:bg-card/30"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <stat.icon className={cn("w-3 h-3", stat.color)} />
              <span className="text-[10px] font-medium text-muted-foreground">
                {stat.label}
              </span>
            </div>
            <p
              className={cn(
                "text-base font-bold",
                stat.color.includes("emerald") || stat.color.includes("red")
                  ? stat.color
                  : "text-foreground",
              )}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-8 text-xs"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-24 h-8 text-xs">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="passed">Passed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results List */}
      <div className="rounded-lg border border-border bg-card dark:bg-card/30 divide-y divide-border">
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <StudentResultRow
              key={result.id}
              result={result}
              rank={index + 1}
            />
          ))
        ) : (
          <div className="p-6 text-center text-xs text-muted-foreground">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeacherResults() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTests = testsData
    .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(
      (t) => statusFilter === "all" || t.status.toLowerCase() === statusFilter,
    );

  // Show detail view if a test is selected
  if (selectedTest) {
    const results = studentResultsData[selectedTest.id] || [];
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <TestResultsDetail
          test={selectedTest}
          results={results}
          onBack={() => setSelectedTest(null)}
        />
      </div>
    );
  }

  // Main test list view
  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-row gap-4 items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Test Results
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Performance overview for all tests
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-xs sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-28 sm:w-32 h-9 shrink-0">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Test List - Max 3 cols on large screens for better readability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <TestCard
              key={test.id}
              test={test}
              onClick={() => setSelectedTest(test)}
            />
          ))
        ) : (
          <div className="col-span-full p-8 text-center rounded-lg border border-dashed border-border bg-card dark:bg-card/30">
            <FileText className="w-6 h-6 mx-auto text-muted-foreground/50 mb-2" />
            <p className="text-xs text-muted-foreground">
              No results matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
