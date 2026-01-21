// File: client/src/Teacher/components/TestEditor/QuestionsTab.jsx
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useFormContext, useFieldArray } from "react-hook-form";
import { useState, useCallback, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { Button } from "@/components/ui/button";
import { Plus, HelpCircle, LayoutGrid, X, ChevronsDownUp } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Floating Question Navigator with Search
function FloatingQuestionNavigator({ questions, editingId, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  if (questions.length < 5) return null;

  // Filter questions by search query (matches question text or number)
  const filteredQuestions = searchQuery.trim()
    ? questions.filter(
        (q, idx) =>
          q.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(idx + 1).includes(searchQuery),
      )
    : questions;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Navigator Panel */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-card border border-border rounded-xl p-3 shadow-2xl animate-in slide-in-from-bottom-2 fade-in duration-200 w-64 max-w-[calc(100vw-3rem)]">
          <div className="flex items-center justify-between pb-2 border-b border-border/30 mb-2">
            <span className="text-xs font-semibold text-muted-foreground">
              Jump to Question
            </span>
            <Badge variant="secondary" className="text-[9px] h-4 px-1.5">
              {questions.length}
            </Badge>
          </div>

          {/* Search Input */}
          {questions.length >= 10 && (
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-7 px-2.5 text-xs bg-muted/50 border border-border/40 rounded-md placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                autoFocus
              />
            </div>
          )}

          <div className="grid grid-cols-6 gap-1.5 max-h-52 overflow-y-auto scrollbar-thin p-0.5">
            {filteredQuestions.map((q) => {
              const idx = questions.findIndex((orig) => orig.id === q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigate(idx);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                  className={cn(
                    "w-7 h-7 rounded-md text-[10px] font-bold transition-all flex items-center justify-center",
                    editingId === q.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/50 hover:bg-primary/10 text-foreground hover:text-primary border border-border/30",
                  )}
                >
                  {idx + 1}
                </button>
              );
            })}
            {filteredQuestions.length === 0 && (
              <div className="col-span-6 py-3 text-center text-[10px] text-muted-foreground">
                No questions match "{searchQuery}"
              </div>
            )}
          </div>

          <div className="mt-2 pt-2 border-t border-border/30">
            <p className="text-[9px] text-muted-foreground/60 text-center">
              <kbd className="px-1 py-0.5 bg-muted/50 rounded">Esc</kbd>{" "}
              Collapse All
            </p>
          </div>
        </div>
      )}

      <Button
        type="button"
        size="icon"
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setSearchQuery("");
        }}
        className={cn(
          "h-10 w-10 rounded-full shadow-lg transition-all",
          isOpen
            ? "bg-muted text-foreground hover:bg-muted/80"
            : "bg-primary/80 hover:bg-primary text-primary-foreground",
        )}
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <LayoutGrid className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}

export default function QuestionsTab() {
  const { control } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "questions",
    keyName: "key",
  });

  const [activeId, setActiveId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setEditingId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCollapseAll = () => {
    setEditingId(null);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
    }
    setActiveId(null);
  };

  const handleAddQuestion = () => {
    const newId = Math.max(...fields.map((f) => Number(f.id) || 0), 0) + 1;
    append({
      id: newId,
      text: "New Question",
      type: "MCQ",
      marks: 1,
      difficulty: "Easy",
      explanation: "",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Option 1",
    });
    setEditingId(newId);

    setTimeout(() => {
      const element = document.getElementById(`question-${fields.length}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleNavigate = useCallback((index) => {
    const element = document.getElementById(`question-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <TabsContent
      value="questions"
      className="focus-visible:ring-0 outline-none"
    >
      <div className="w-full space-y-3">
        {/* Sticky Questions Header */}
        <div className="sticky top-0 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-background/95 backdrop-blur-sm border-b border-border/40">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Question Count */}
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
                Questions
              </h3>
              <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
                {fields.length}
              </Badge>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
              {/* Collapse All */}
              {editingId !== null && (
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCollapseAll}
                        className="h-8 px-2.5 text-xs text-muted-foreground hover:text-foreground"
                      >
                        <ChevronsDownUp className="w-3.5 h-3.5 mr-1.5" />
                        Collapse
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">
                        Collapse All{" "}
                        <kbd className="ml-1 px-1 py-0.5 bg-muted rounded text-[9px]">
                          Esc
                        </kbd>
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              {/* Add Question Button */}
              <Button
                type="button"
                size="sm"
                onClick={handleAddQuestion}
                className="h-8 px-3 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Add Question
              </Button>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields.map((f) => f.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-1.5">
              {fields.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm font-medium">No questions yet</p>
                  <p className="text-xs mt-1">
                    Click "Add Question" to get started
                  </p>
                </div>
              ) : (
                fields.map((field, index) => (
                  <QuestionCard
                    key={field.key}
                    question={field}
                    index={index}
                    onRemove={remove}
                    isEditing={editingId === field.id}
                    onEdit={() => setEditingId(field.id)}
                    onCancelEdit={() => setEditingId(null)}
                    onSaveEdit={() => setEditingId(null)}
                  />
                ))
              )}
            </div>
          </SortableContext>

          <DragOverlay>
            {activeId ? (
              <QuestionCard
                question={fields.find((f) => f.id === activeId)}
                index={fields.findIndex((f) => f.id === activeId)}
                onRemove={() => {}}
                onEdit={() => {}}
                onCancelEdit={() => {}}
                onSaveEdit={() => {}}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Floating Navigator */}
      <FloatingQuestionNavigator
        questions={fields}
        editingId={editingId}
        onNavigate={handleNavigate}
      />
    </TabsContent>
  );
}
