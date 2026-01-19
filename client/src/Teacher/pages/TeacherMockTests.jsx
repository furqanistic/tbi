// File: client/src/Teacher/pages/TeacherMockTests.jsx
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
  Calendar,
  Clock,
  FileText,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Users,
  AlertCircle,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { mockTests } from "../data/mockTestsData";

export default function TeacherMockTests() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 1024 ? 10 : 5,
  );

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 10 : 5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to valid page when itemsPerPage changes
  useEffect(() => {
    const newTotalPages = Math.ceil(mockTests.length / itemsPerPage);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages || 1);
    }
  }, [itemsPerPage, mockTests.length, currentPage]);

  const filteredTests = mockTests.filter((test) => {
    const statusMatch =
      filter === "all" || test.status.toLowerCase() === filter;
    const searchMatch = test.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTests = filteredTests.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Controls */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Mock Tests
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Manage assessments
          </p>
        </div>
        <Link to="/teacher/tests/new">
          <Button className="font-semibold h-8 text-xs sm:h-9 sm:text-sm gap-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Create Test</span>
            <span className="xs:hidden">Create Test</span>
          </Button>
        </Link>
      </div>

      {/* Filters Toolbar */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-xs sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-auto min-w-25 h-9 shrink-0 gap-2">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tests List */}
      <div className="space-y-4">
        {filteredTests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed rounded-lg">
            <div className="p-4 bg-muted/50 rounded-full mb-4">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No mock tests found
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              We couldn't find any tests matching your filters.
            </p>
            <Link to="/teacher/tests/new">
              <Button variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Create New Test
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {paginatedTests.map((test) => (
              <div
                key={test.id}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 rounded-lg border border-border bg-card dark:bg-card/30 hover:bg-muted/30 transition-colors"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded bg-primary/10 text-primary shrink-0 mt-0.5 sm:mt-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm truncate">
                        {test.title}
                      </h3>
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-medium border",
                          test.status === "Published"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
                            : test.status === "Draft"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400"
                              : "bg-slate-500/10 text-slate-600 border-slate-500/20 dark:text-slate-400",
                        )}
                      >
                        {test.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        {test.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {test.totalQuestions} Qs
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {test.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {test.createdAt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pl-11 sm:pl-0 border-t sm:border-t-0 pt-2 sm:pt-0 mt-1 sm:mt-0">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="text-center min-w-12">
                      <div className="font-semibold text-blue-600 dark:text-blue-400">
                        {test.attempts}
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        Attempts
                      </div>
                    </div>
                    <div className="text-center min-w-12">
                      <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {test.avgScore}
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        Avg Score
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Test</DropdownMenuItem>
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination className="justify-end">
            <PaginationContent className="gap-0 sm:gap-1">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    "h-8 px-2 sm:px-3 text-xs sm:text-sm",
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer",
                  )}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className="cursor-pointer h-8 w-8 text-xs sm:text-sm"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={cn(
                    "h-8 px-2 sm:px-3 text-xs sm:text-sm",
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer",
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
