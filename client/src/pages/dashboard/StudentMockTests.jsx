import { useState, useEffect } from "react";
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
import { mockTests } from "@/lib/data/mockTestsData";

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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TabsList className="bg-muted/50 p-1 h-9 grid grid-cols-3 w-full sm:w-auto">
            <TabsTrigger
              value="available"
              className="px-4 py-1.5 text-xs font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Available ({mockTests.available.length})
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="px-4 py-1.5 text-xs font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Upcoming ({mockTests.upcoming.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="px-4 py-1.5 text-xs font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Past ({mockTests.past.length})
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tests..."
              className="pl-9 h-9 text-sm bg-background border-input"
            />
          </div>
        </div>

        {/* Available Tests Tab */}
        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentPageData(mockTests.available).map((test) => (
              <Card
                key={test.id}
                className="group flex flex-col rounded-lg border border-border/50 bg-card overflow-hidden hover:border-border transition-all hover:shadow-sm"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="text-[10px] bg-secondary/50 font-normal border-none"
                    >
                      {test.subject}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-normal border-border/50",
                        test.difficulty === "Hard"
                          ? "text-red-500 bg-red-500/5"
                          : test.difficulty === "Medium"
                            ? "text-amber-500 bg-amber-500/5"
                            : "text-emerald-500 bg-emerald-500/5",
                      )}
                    >
                      {test.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="text-xs pt-1">
                    Expires in{" "}
                    <span className="text-orange-500 font-medium">
                      {test.expiresIn}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {test.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {test.questions} Qs
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      {test.totalMarks} Marks
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {test.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-muted/50 px-1.5 py-0.5 rounded text-muted-foreground border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full gap-2 text-xs h-9">
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
                className="group flex flex-col rounded-lg border border-border/50 bg-muted/20 opacity-80"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] bg-blue-500/5 text-blue-500 border-blue-500/20"
                    >
                      Scheduled
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[10px] font-normal border-border/50"
                    >
                      {test.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold leading-tight text-muted-foreground">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5" /> {test.startTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground bg-muted/30 p-2.5 rounded border border-border/30">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {test.duration}
                    </span>
                    <span>Not started</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full h-9 text-xs cursor-not-allowed"
                    disabled
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
          <div className="grid grid-cols-1 gap-3">
            {getCurrentPageData(mockTests.past).map((test) => (
              <div
                key={test.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-card border border-border/50 rounded-lg p-3 hover:bg-muted/20 hover:border-border transition-all gap-4 group"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
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
                    <p className="text-xs text-muted-foreground">
                      Completed on {test.completedAt} • {test.subject}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-center min-w-15">
                    <p className="text-[10px] text-muted-foreground uppercase font-medium">
                      Score
                    </p>
                    <p className="font-bold text-sm">
                      {test.score}/{test.totalMarks}
                    </p>
                  </div>
                  <div className="text-center min-w-15">
                    <p className="text-[10px] text-muted-foreground uppercase font-medium">
                      Result
                    </p>
                    <p
                      className={cn(
                        "font-bold text-sm",
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
                    className="hidden sm:flex h-8 text-xs gap-1"
                  >
                    Analysis <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:hidden"
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
