import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  CheckCircle2,
  Flag,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { getMockTestQuestions } from "@/lib/data/mockTestQuestions";

// --- Components ---

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const format = (n) => (n < 10 ? `0${n}` : n);

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/50 border border-border/50",
        timeLeft < 300
          ? "text-red-500 bg-red-500/10 border-red-500/20"
          : "text-muted-foreground",
      )}
    >
      <Clock className="w-3.5 h-3.5" />
      <span>
        {format(hours)}:{format(minutes)}:{format(seconds)}
      </span>
    </div>
  );
};

const QuestionPalette = ({
  questions,
  currentIndex,
  answers,
  markedForReview,
  onNavigate,
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-5 sm:grid-cols-6 gap-2", className)}>
      {questions.map((q, idx) => {
        const isAnswered = answers[q.id] !== undefined;
        const isMarked = markedForReview.includes(q.id);
        const isCurrent = currentIndex === idx;

        return (
          <button
            key={q.id}
            onClick={() => onNavigate(idx)}
            className={cn(
              "h-8 w-full text-xs rounded-md transition-all flex items-center justify-center relative font-medium border",
              isCurrent
                ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20 z-10"
                : isMarked
                  ? "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400"
                  : isAnswered
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400"
                    : "bg-muted/30 text-muted-foreground border-transparent hover:bg-muted/50 hover:border-border",
            )}
          >
            {idx + 1}
            {isMarked && !isCurrent && (
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-500" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default function StudentTakeTest() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [testData, setTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    const data = getMockTestQuestions(testId);
    setTestData(data);
  }, [testId]);

  if (!testData) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const currentQuestion = testData.questions[currentQuestionIndex];
  const totalQuestions = testData.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const answeredCount = Object.keys(answers).length;

  const handleOptionSelect = (optionId) => {
    setAnswers((prev) => {
      const currentAnswer = prev[currentQuestion.id];
      if (currentQuestion.type === "multi-choice") {
        let newSelection = Array.isArray(currentAnswer)
          ? [...currentAnswer]
          : [];
        if (newSelection.includes(optionId)) {
          newSelection = newSelection.filter((id) => id !== optionId);
        } else {
          newSelection.push(optionId);
        }
        return { ...prev, [currentQuestion.id]: newSelection };
      }
      return { ...prev, [currentQuestion.id]: optionId };
    });
  };

  const toggleReview = () => {
    setMarkedForReview((prev) =>
      prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id],
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/dashboard/student/results");
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Compact Header */}
      <header className="h-14 px-4 md:px-6 flex items-center justify-between border-b border-border/40 bg-background/60 backdrop-blur-xl shrink-0 z-20">
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold truncate max-w-[200px] md:max-w-md">
            {testData.title}
          </h1>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <span>{testData.subject}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-border" />
            <span>{totalQuestions} Questions</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Timer duration={testData.duration} onTimeUp={handleSubmit} />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8 text-muted-foreground"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[85vw] p-0 flex flex-col">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-sm">Question Palette</h3>
              </div>
              <ScrollArea className="flex-1 p-4">
                <QuestionPalette
                  questions={testData.questions}
                  currentIndex={currentQuestionIndex}
                  answers={answers}
                  markedForReview={markedForReview}
                  onNavigate={setCurrentQuestionIndex}
                />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          {/* Question Section */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth no-scrollbar">
            <div className="max-w-4xl mx-auto space-y-6 pb-20">
              {/* Question Card */}
              <div className="rounded-xl border border-border/40 bg-background/40 p-6 md:p-8 relative transition-all">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="h-6 gap-1.5 px-2 bg-background/50 text-muted-foreground font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                      Q{currentQuestionIndex + 1}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="h-6 font-normal bg-secondary/50 text-muted-foreground"
                    >
                      {currentQuestion.marks} Marks
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleReview}
                    className={cn(
                      "h-7 px-2 text-xs gap-1.5 transition-all",
                      markedForReview.includes(currentQuestion.id)
                        ? "text-amber-600 bg-amber-500/10 hover:bg-amber-500/20"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Flag
                      className={cn(
                        "w-3.5 h-3.5",
                        markedForReview.includes(currentQuestion.id) &&
                          "fill-current",
                      )}
                    />
                    <span className="hidden sm:inline">Mark for Review</span>
                  </Button>
                </div>

                {/* Question Text */}
                <div className="space-y-5">
                  <h2 className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.code && (
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-4 overflow-x-auto text-xs md:text-sm font-mono">
                      <pre className="whitespace-pre-wrap text-muted-foreground">
                        {currentQuestion.code}
                      </pre>
                    </div>
                  )}

                  {/* Options List */}
                  <div className="grid gap-3 pt-2">
                    {currentQuestion.options.map((option) => {
                      const isMulti = currentQuestion.type === "multi-choice";
                      const isSelected = isMulti
                        ? answers[currentQuestion.id]?.includes(option.id)
                        : answers[currentQuestion.id] === option.id;

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option.id)}
                          className={cn(
                            "group relative flex items-start gap-3 p-3.5 rounded-lg border text-left text-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                            isSelected
                              ? "bg-primary/5 border-primary/30 shadow-sm"
                              : "bg-card/50 border-border/50 hover:bg-accent/40 hover:border-accent",
                          )}
                        >
                          <div
                            className={cn(
                              "mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all",
                              !isMulti && "rounded-full",
                              isSelected
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-muted-foreground/30 group-hover:border-primary/50 bg-background/50",
                            )}
                          >
                            {isSelected && <CheckCircle2 className="w-3 h-3" />}
                          </div>
                          <span
                            className={cn(
                              "leading-tight transition-colors",
                              isSelected
                                ? "text-foreground font-medium"
                                : "text-muted-foreground group-hover:text-foreground",
                            )}
                          >
                            {option.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Desktop) */}
          <aside className="hidden lg:flex w-72 flex-col border-l border-border/40 bg-background/20 backdrop-blur-sm">
            <div className="p-4 border-b border-border/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-sm text-foreground/80">
                  Question Overview
                </h3>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                  {answeredCount}/{totalQuestions}
                </span>
              </div>
              <div className="flex gap-4 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <span>Review</span>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <QuestionPalette
                questions={testData.questions}
                currentIndex={currentQuestionIndex}
                answers={answers}
                markedForReview={markedForReview}
                onNavigate={setCurrentQuestionIndex}
                className="grid-cols-5"
              />
            </ScrollArea>

            <div className="p-4 border-t border-border/40 bg-background/10">
              <Button
                className="w-full text-xs font-semibold shadow-none"
                size="sm"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Test"}
              </Button>
            </div>
          </aside>
        </main>
      </div>

      {/* Floating Action footer for Mobile/Tablet */}
      <div className="lg:hidden absolute bottom-4 left-4 right-4 z-50 flex justify-between items-center bg-background/80 backdrop-blur-md p-2 rounded-full border border-border/50 shadow-lg container max-w-md mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
          }
          disabled={currentQuestionIndex === 0}
          className="rounded-full h-10 w-10 shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="text-xs font-medium text-muted-foreground">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>

        <Button
          size="icon"
          onClick={() => {
            if (isLastQuestion) {
              // Open review or trigger sheet
            } else {
              setCurrentQuestionIndex((prev) =>
                Math.min(totalQuestions - 1, prev + 1),
              );
            }
          }}
          className="rounded-full h-10 w-10 shrink-0 shadow-md"
        >
          {isLastQuestion ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
