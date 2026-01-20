// File: client/src/Teacher/pages/TeacherMockTests.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  FileText,
  Filter,
  Plus,
  Search,
  AlertCircle,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
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
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 10 : 5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredTests = mockTests.filter((test) => {
    const statusMatch =
      filter === "all" || test.status.toLowerCase() === filter;
    const searchMatch = test.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredTests.length / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedTests = filteredTests.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Selection helpers
  const paginatedIds = paginatedTests.map((t) => t.id);
  const allPageSelected =
    paginatedIds.length > 0 &&
    paginatedIds.every((id) => selectedIds.includes(id));
  const somePageSelected =
    paginatedIds.some((id) => selectedIds.includes(id)) && !allPageSelected;

  const toggleSelectAll = () => {
    if (allPageSelected) {
      setSelectedIds(selectedIds.filter((id) => !paginatedIds.includes(id)));
    } else {
      setSelectedIds([...new Set([...selectedIds, ...paginatedIds])]);
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const handleBulkDelete = () => {
    // In real app, call API to delete selected tests
    console.log("Deleting tests:", selectedIds);
    setSelectedIds([]);
    setBulkDeleteOpen(false);
  };

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

      {/* Bulk Actions Bar - Shows when items selected */}
      {selectedIds.length > 0 && (
        <div className="flex items-center justify-between gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSelection}
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium">
              {selectedIds.length} test{selectedIds.length > 1 ? "s" : ""}{" "}
              selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="h-8 text-xs gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Selected
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Delete {selectedIds.length} tests?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete{" "}
                    <span className="font-semibold text-foreground">
                      {selectedIds.length} test
                      {selectedIds.length > 1 ? "s" : ""}
                    </span>{" "}
                    and all associated data including student attempts and
                    results.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleBulkDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete {selectedIds.length} Test
                    {selectedIds.length > 1 ? "s" : ""}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}

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
          <>
            {/* Select All Header */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/30 border border-border">
              <Checkbox
                checked={allPageSelected}
                onCheckedChange={toggleSelectAll}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                {...(somePageSelected && { "data-state": "indeterminate" })}
              />
              <span className="text-xs text-muted-foreground">
                {allPageSelected
                  ? `All ${paginatedIds.length} on this page selected`
                  : somePageSelected
                    ? `${selectedIds.filter((id) => paginatedIds.includes(id)).length} selected on this page`
                    : "Select all on this page"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {paginatedTests.map((test) => (
                <div
                  key={test.id}
                  className={cn(
                    "group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 rounded-lg border bg-card dark:bg-card/30 hover:bg-muted/30 transition-colors",
                    selectedIds.includes(test.id)
                      ? "border-primary/50 bg-primary/5"
                      : "border-border",
                  )}
                >
                  {/* Checkbox */}
                  <Checkbox
                    checked={selectedIds.includes(test.id)}
                    onCheckedChange={() => toggleSelect(test.id)}
                    className="shrink-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary hidden sm:flex"
                  />

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Mobile checkbox */}
                    <Checkbox
                      checked={selectedIds.includes(test.id)}
                      onCheckedChange={() => toggleSelect(test.id)}
                      className="shrink-0 mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary sm:hidden"
                    />
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
                    {/* Action Icons */}
                    <div className="flex items-center gap-1">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link to={`/teacher/tests/${test.id}/edit`}>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit Test</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <AlertDialog>
                            <TooltipTrigger asChild>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive sm:text-muted-foreground sm:hover:text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </AlertDialogTrigger>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Delete Test</p>
                            </TooltipContent>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete the test "{test.title}" and
                                  all associated data including student attempts
                                  and results.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                  Delete Test
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination className="justify-center mt-10">
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
    </div>
  );
}
