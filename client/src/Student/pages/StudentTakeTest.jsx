// File: client/src/pages/dashboard/StudentTakeTest.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { getMockTestQuestions } from "@/Student/data/mockTestQuestions";
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Circle,
    Clock,
    Flag,
    LayoutGrid,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        "flex items-center gap-1.5 font-mono text-xs font-medium px-2 py-1 rounded-md border",
        timeLeft < 300
          ? "text-red-500 bg-red-500/10 border-red-500/20"
          : "text-muted-foreground bg-secondary/50 border-border/50",
      )}
    >
      <Clock className="w-3 h-3" />
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
    <div className={cn("grid grid-cols-5 sm:grid-cols-6 gap-1.5", className)}>
      {questions.map((q, idx) => {
        const isAnswered = answers[q.id] !== undefined;
        const isMarked = markedForReview.includes(q.id);
        const isCurrent = currentIndex === idx;

        return (
          <button
            key={q.id}
            onClick={() => onNavigate(idx)}
            className={cn(
              "h-7 w-full text-xs rounded transition-all flex items-center justify-center relative font-medium border",
              isCurrent
                ? "bg-primary text-primary-foreground border-primary"
                : isMarked
                  ? "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400"
                  : isAnswered
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400"
                    : "bg-muted/30 text-muted-foreground border-transparent hover:bg-muted/50",
            )}
          >
            {idx + 1}
            {isMarked && !isCurrent && (
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-amber-500" />
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
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const data = getMockTestQuestions(testId);
      setTestData(data);
    };
    loadData();
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
      navigate("/student/results");
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-4 sm:-m-6 lg:-m-8">
      {/* Compact Header */}
      <header className="h-11 px-3 md:px-4 flex items-center justify-between border-b border-zinc-200 dark:border-border/40 bg-white/80 dark:bg-background/60 backdrop-blur-sm shrink-0 z-20">
        <div className="flex flex-col">
          <h1 className="text-xs font-semibold truncate max-w-48 md:max-w-md">
            {testData.title}
          </h1>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span>{testData.subject}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-border" />
            <span>{totalQuestions} Questions</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Timer duration={testData.duration} onTimeUp={handleSubmit} />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-7 w-7 text-muted-foreground"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] p-0 flex flex-col">
              <div className="p-3 border-b border-border/40">
                <h3 className="font-semibold text-xs">Question Palette</h3>
              </div>
              <ScrollArea className="flex-1 p-3">
                <QuestionPalette
                  questions={testData.questions}
                  currentIndex={currentQuestionIndex}
                  answers={answers}
                  markedForReview={markedForReview}
                  onNavigate={setCurrentQuestionIndex}
                />
              </ScrollArea>
              <div className="p-3 border-t border-border/40">
                <Button
                  className="w-full text-xs font-semibold"
                  size="sm"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Test"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
          {/* Question Section */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 scrollbar-hide">
            <div className="max-w-3xl mx-auto space-y-4 pb-24 lg:pb-6">
              {/* Question Card */}
              <div className="rounded-lg border border-zinc-200 dark:border-border/40 bg-white dark:bg-card/30 p-4 md:p-5 shadow-none dark:shadow-none">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <Badge
                      variant="outline"
                      className="h-5 gap-1 px-1.5 text-[10px] bg-white dark:bg-background/50 text-muted-foreground font-normal border-zinc-200 dark:border-border/50"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />Q
                      {currentQuestionIndex + 1}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="h-5 text-[10px] font-normal bg-zinc-100 dark:bg-secondary/50 text-muted-foreground"
                    >
                      {currentQuestion.marks} Marks
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleReview}
                    className={cn(
                      "h-6 px-2 text-[10px] gap-1 transition-all",
                      markedForReview.includes(currentQuestion.id)
                        ? "text-amber-600 bg-amber-500/10 hover:bg-amber-500/20"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Flag
                      className={cn(
                        "w-3 h-3",
                        markedForReview.includes(currentQuestion.id) &&
                          "fill-current",
                      )}
                    />
                    <span className="hidden sm:inline">Review</span>
                  </Button>
                </div>

                {/* Question Text */}
                <div className="space-y-4">
                  <h2 className="text-sm md:text-base font-medium leading-relaxed text-foreground">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.code && (
                    <div className="rounded-md border border-zinc-200 dark:border-border/50 bg-zinc-50 dark:bg-muted/30 p-3 overflow-x-auto text-xs font-mono">
                      <pre className="whitespace-pre-wrap text-muted-foreground">
                        {currentQuestion.code}
                      </pre>
                    </div>
                  )}

                  {/* Options List */}
                  <div className="grid gap-2">
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
                            "group relative flex items-center gap-2.5 p-3 rounded-md border text-left text-xs transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                            isSelected
                              ? "bg-primary/5 border-primary/40 dark:border-primary/30"
                              : "bg-white dark:bg-card/50 border-zinc-200 dark:border-border/50 hover:bg-zinc-50 dark:hover:bg-accent/40 hover:border-zinc-300 dark:hover:border-accent",
                          )}
                        >
                          <div
                            className={cn(
                              "w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all",
                              !isMulti && "rounded-full",
                              isSelected
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-zinc-300 dark:border-muted-foreground/30 group-hover:border-primary/50 bg-white dark:bg-background/50",
                            )}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-2.5 h-2.5" />
                            )}
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
          <aside className="hidden lg:flex w-64 flex-col border-l border-zinc-200 dark:border-border/40 bg-zinc-50/50 dark:bg-background/20">
            <div className="p-3 border-b border-zinc-200 dark:border-border/40">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-xs text-foreground/80">
                  Question Overview
                </h3>
                <span className="text-[10px] text-muted-foreground bg-zinc-200/50 dark:bg-secondary/50 px-1.5 py-0.5 rounded-full">
                  {answeredCount}/{totalQuestions}
                </span>
              </div>
              <div className="flex gap-3 text-[9px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Review</span>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-3">
              <QuestionPalette
                questions={testData.questions}
                currentIndex={currentQuestionIndex}
                answers={answers}
                markedForReview={markedForReview}
                onNavigate={setCurrentQuestionIndex}
                className="grid-cols-5"
              />
            </ScrollArea>

            <div className="p-3 border-t border-zinc-200 dark:border-border/40">
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
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 flex justify-between items-center bg-white/90 dark:bg-background/80 backdrop-blur-md p-2 rounded-full border border-zinc-200 dark:border-border/50 shadow-none max-w-sm mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
          }
          disabled={currentQuestionIndex === 0}
          className="rounded-full h-9 w-9 shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="text-xs font-medium text-muted-foreground">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>

        <Button
          size="icon"
          onClick={() => {
            if (isLastQuestion) {
              handleSubmit();
            } else {
              setCurrentQuestionIndex((prev) =>
                Math.min(totalQuestions - 1, prev + 1),
              );
            }
          }}
          className="rounded-full h-9 w-9 shrink-0 shadow-none"
        >
          {isLastQuestion ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
