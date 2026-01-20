// File: client/src/Teacher/pages/TeacherResults.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Search,
  FileText,
  Users,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

import TestResultsDetail from "@/Teacher/components/TestResultsDetail";

export default function TeacherResults() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 1024 ? 12 : 6,
  );

  // Handle responsive items per page (6 on sm/md, 12 on lg/xl)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 12 : 6);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredTests = testsData
    .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(
      (t) => statusFilter === "all" || t.status.toLowerCase() === statusFilter,
    );

  const totalPages = Math.ceil(filteredTests.length / itemsPerPage) || 1;
  // Compute safe current page (clamp to valid range)
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedTests = filteredTests.slice(
    startIndex,
    startIndex + itemsPerPage,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {paginatedTests.length > 0 ? (
          paginatedTests.map((test) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-10 justify-center">
          <PaginationContent className="gap-1">
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={cn(
                  "h-9 px-3 text-sm",
                  safeCurrentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer hover:bg-muted",
                )}
              />
            </PaginationItem>

            {/* Mobile: Show "Page X of Y" */}
            <PaginationItem className="lg:hidden">
              <span className="px-3 text-sm text-muted-foreground">
                Page {safeCurrentPage} of {totalPages}
              </span>
            </PaginationItem>

            {/* Desktop: Show page numbers */}
            <div className="hidden lg:flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    isActive={safeCurrentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={cn(
                      "cursor-pointer h-9 w-9 text-sm",
                      safeCurrentPage === i + 1 &&
                        "bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90",
                    )}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </div>

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className={cn(
                  "h-9 px-3 text-sm",
                  safeCurrentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer hover:bg-muted",
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
