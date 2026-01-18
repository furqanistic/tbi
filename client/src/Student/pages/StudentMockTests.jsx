// File: client/src/pages/dashboard/StudentMockTests.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Clock,
  FileText,
  Trophy,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockTests } from "@/Student/data/mockTestsData";

// Mock Data

const PaginationControls = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-6 flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(
              "cursor-pointer",
              currentPage === 1 && "pointer-events-none opacity-50",
            )}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === i + 1}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={cn(
              "cursor-pointer",
              currentPage === totalPages && "pointer-events-none opacity-50",
            )}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default function StudentMockTests() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      // lg breakpoint is usually 1024px
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(4);
      }
    };

    // Set initial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentPageData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Mock Tests
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Practice with real exams to improve your performance.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Search or other global actions could go here */}
        </div>
      </div>

      <Tabs
        defaultValue="available"
        className="space-y-6"
        onValueChange={() => setCurrentPage(1)}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/40 pb-6">
          <TabsList className="bg-transparent p-0 h-auto grid grid-cols-3 w-full sm:w-auto gap-4">
            <TabsTrigger
              value="available"
              className="rounded-sm border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none px-2 py-1.5 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground"
            >
              Available ({mockTests.available.length})
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-sm border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none px-2 py-1.5 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground"
            >
              Upcoming ({mockTests.upcoming.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="rounded-sm border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none px-2 py-1.5 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground"
            >
              Past ({mockTests.past.length})
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search tests..."
              className="pl-8 h-8 text-xs bg-background/50 border-border/60"
            />
          </div>
        </div>

        {/* Available Tests Tab */}
        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentPageData(mockTests.available).map((test) => (
              <Card
                key={test.id}
                className="group flex flex-col rounded-sm border border-border bg-card dark:bg-card/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {test.subject}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] py-0 font-normal border-border/40",
                        test.difficulty === "Hard"
                          ? "text-red-500 bg-red-500/5 border-red-200 dark:border-red-900"
                          : test.difficulty === "Medium"
                            ? "text-amber-500 bg-amber-500/5 border-amber-200 dark:border-amber-900"
                            : "text-emerald-500 bg-emerald-500/5 border-emerald-200 dark:border-emerald-900",
                      )}
                    >
                      {test.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold leading-tight text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium">
                    Expires in{" "}
                    <span className="text-orange-600 dark:text-orange-400">
                      {test.expiresIn}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className=" flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {test.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-purple-500" />
                      {test.questions} Qs
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                      {test.totalMarks} Marks
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {test.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-secondary/40 px-1.5 py-0.5 rounded text-muted-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    size="sm"
                    className="w-full gap-2 text-xs h-8 font-semibold shadow-sm cursor-pointer"
                    onClick={() => navigate(`/student/mocks/${test.id}`)}
                  >
                    Start Test <ArrowRight className="w-3 h-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <PaginationControls
            totalItems={mockTests.available.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </TabsContent>

        {/* Upcoming Tests Tab */}
        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentPageData(mockTests.upcoming).map((test) => (
              <Card
                key={test.id}
                className="group flex flex-col rounded-sm border border-border bg-card dark:bg-card/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardHeader className="">
                  <div className="flex justify-between items-start mb-1">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border-blue-200 dark:border-blue-900"
                    >
                      Scheduled
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[10px] py-0 font-normal border-border/40"
                    >
                      {test.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold leading-tight text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2  text-xs font-medium text-muted-foreground/80">
                    <Calendar className="w-3.5 h-3.5" /> {test.startTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className=" flex-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground bg-secondary/30 p-2.5 rounded border border-border/40">
                    <span className="flex items-center gap-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />{" "}
                      {test.duration}
                    </span>
                    <span className="bg-background/50 px-1.5 py-0 rounded text-[10px] border border-border/40/20">
                      Not started
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs h-8 font-medium hover:bg-secondary hover:text-secondary-foreground transition-all cursor-pointer"
                  >
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <PaginationControls
            totalItems={mockTests.upcoming.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </TabsContent>

        {/* Past Attempts Tab */}
        <TabsContent value="past" className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {getCurrentPageData(mockTests.past).map((test) => (
              <div
                key={test.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-card dark:bg-card/30 border border-border rounded-sm p-3 hover:shadow-md transition-all duration-300 gap-4 group shadow-sm"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2",
                      test.status === "Passed"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-red-500/10 text-red-500 border-red-500/20",
                    )}
                  >
                    {test.status === "Passed" ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {test.completedAt} •{" "}
                      <span className="font-medium text-foreground/80">
                        {test.subject}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-center min-w-16">
                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                      Score
                    </p>
                    <p className="font-bold text-sm leading-tight">
                      {test.score}
                      <span className="text-muted-foreground text-[10px] font-normal">
                        /{test.totalMarks}
                      </span>
                    </p>
                  </div>
                  <div className="text-center min-w-16">
                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                      Result
                    </p>
                    <p
                      className={cn(
                        "font-bold text-sm leading-tight",
                        test.percentage >= 60
                          ? "text-emerald-500"
                          : "text-red-500",
                      )}
                    >
                      {test.percentage}%
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden sm:flex h-8 text-xs font-medium gap-1 hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Analysis <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:hidden h-8 text-xs"
                >
                  View Analysis
                </Button>
              </div>
            ))}
          </div>
          <PaginationControls
            totalItems={mockTests.past.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
