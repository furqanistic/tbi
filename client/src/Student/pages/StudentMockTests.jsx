// File: client/src/Student/pages/StudentMockTests.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { mockTests } from "@/Student/data/mockTestsData";
import {
    AlertCircle,
    ArrowRight,
    Calendar,
    CheckCircle2,
    Clock,
    FileText,
    Search,
    Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "available";

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
    // Reset pagination when tab changes if needed, or keep it independent
    setCurrentPage(1);
  };

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
        value={activeTab}
        className="space-y-6"
        onValueChange={handleTabChange}
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
              <div
                key={test.id}
                className="group relative flex flex-col rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xs p-5 shadow-none hover:shadow-none transition-all duration-500 overflow-hidden"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="px-2.5 py-1 rounded-full bg-secondary/50 backdrop-blur-md border border-border/40 flex items-center justify-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary-foreground leading-none">
                      {test.subject}
                    </span>
                  </div>
                  <div className={cn(
                    "px-2.5 py-1 rounded-full flex items-center justify-center border",
                    test.difficulty === "Hard"
                      ? "text-red-500 bg-red-500/5 border-red-500/20"
                      : test.difficulty === "Medium"
                        ? "text-amber-500 bg-amber-500/5 border-amber-500/20"
                        : "text-emerald-500 bg-emerald-500/5 border-emerald-500/20",
                  )}>
                    <span className="text-[10px] font-bold uppercase tracking-tight leading-none">
                      {test.difficulty}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold leading-snug text-foreground/90 group-hover:text-primary transition-colors line-clamp-2 h-11">
                      {test.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-tighter">
                      <AlertCircle className="size-3.5" />
                      <span>Expires in {test.expiresIn}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/40">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-[10px] font-black text-muted-foreground/80">{test.duration}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center border-x border-border/40">
                      <FileText className="w-4 h-4 text-purple-500" />
                      <span className="text-[10px] font-black text-muted-foreground/80">{test.questions} Qs</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-[10px] font-black text-muted-foreground/80">{test.totalMarks} M</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {test.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold bg-muted/60 px-2 py-0.5 rounded-lg text-muted-foreground/80 border border-border/40 uppercase tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full mt-6 h-10 rounded-xl font-bold text-sm bg-primary hover:bg-primary/90 shadow-none hover:shadow-none transition-all group/btn"
                  onClick={() => navigate(`/student/mocks/${test.id}`)}
                >
                  <span>Start Test</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
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
                className="group flex flex-col rounded-sm border border-border bg-card dark:bg-card/30 shadow-none hover:shadow-none transition-all duration-300"
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
                className="flex flex-col sm:flex-row items-center justify-between bg-card dark:bg-card/30 border border-border rounded-sm p-3 hover:shadow-none transition-all duration-300 gap-4 group shadow-none"
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
