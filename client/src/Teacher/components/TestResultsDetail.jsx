// File: client/src/Teacher/components/TestResultsDetail.jsx
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Search,
  Users,
  Clock,
  Trophy,
  TrendingUp,
  Download,
} from "lucide-react";

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
export default function TestResultsDetail({ test, results, onBack }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =  7;

  const filteredResults = results
    .filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(
      (r) => statusFilter === "all" || r.status.toLowerCase() === statusFilter,
    )
    .sort((a, b) => b.score - a.score);

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedResults = filteredResults.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
            className="pl-8 h-8 text-xs"
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(val) => {
            setStatusFilter(val);
            setCurrentPage(1); // Reset to page 1 on filter change
          }}
        >
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
        {paginatedResults.length > 0 ? (
          paginatedResults.map((result, index) => (
            <StudentResultRow
              key={result.id}
              result={result}
              rank={startIndex + index + 1}
            />
          ))
        ) : (
          <div className="p-6 text-center text-xs text-muted-foreground">
            No results found.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-6 justify-center">
          <PaginationContent className="gap-1">
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={cn(
                  "h-8 px-2.5 text-xs",
                  safeCurrentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer hover:bg-muted",
                )}
              />
            </PaginationItem>

            {/* Mobile: Show "Page X of Y" */}
            <PaginationItem className="lg:hidden">
              <span className="px-2 text-xs text-muted-foreground">
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
                      "cursor-pointer h-8 w-8 text-xs",
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
                  "h-8 px-2.5 text-xs",
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
