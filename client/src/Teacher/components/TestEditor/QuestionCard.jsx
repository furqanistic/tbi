// File: client/src/Teacher/components/TestEditor/QuestionCard.jsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GripVertical,
  Pencil,
  Trash2,
  CheckCircle2,
  X,
  Plus,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFormContext, useFieldArray } from "react-hook-form";
import { forwardRef } from "react";

const QuestionCard = forwardRef(function QuestionCard(
  { question, index, onRemove, isEditing, onEdit, onCancelEdit, onSaveEdit },
  ref,
) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id, disabled: isEditing });

  const { register, control, watch, setValue } = useFormContext();

  // Watch all relevant fields for this question index
  const questionValues = watch(`questions.${index}`);
  const currentQuestion = questionValues || question;
  const questionType = currentQuestion.type;

  // Field array for options if MCQ
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
  };

  // Combine refs
  const combinedRef = (node) => {
    setNodeRef(node);
    if (ref) {
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  };

  // Edit Mode - Compact Layout
  if (isEditing) {
    return (
      <div
        ref={combinedRef}
        style={style}
        className="relative z-10 my-1"
        id={`question-${index}`}
      >
        <Card className="border border-primary/30 dark:border-primary/20 bg-card/50 dark:bg-card/30 shadow-sm">
          <CardContent className="p-3 sm:p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-border/30">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span className="bg-primary/10 text-primary w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {index + 1}
                </span>
                Edit Question
              </h4>
              <div className="flex gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onCancelEdit}
                  className="h-7 w-7 p-0"
                >
                  <X className="w-3.5 h-3.5" />
                </Button>
                <Button
                  size="sm"
                  onClick={onSaveEdit}
                  className="h-7 text-xs px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Check className="w-3 h-3 mr-1" />
                  Done
                </Button>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                Question Text
              </Label>
              <Textarea
                placeholder="Type your question here..."
                className="min-h-16 text-sm bg-muted/50 rounded-sm"
                {...register(`questions.${index}.text`)}
              />
            </div>

            {/* Type, Marks, Difficulty - Single Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Type
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.type`, val)
                  }
                  defaultValue={question.type}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 rounded-sm">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MCQ">MCQ</SelectItem>
                    <SelectItem value="True/False">True/False</SelectItem>
                    <SelectItem value="Short Answer">Short Answer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Marks
                </Label>
                <Input
                  type="number"
                  className="h-8 text-xs bg-muted/50 rounded-sm"
                  {...register(`questions.${index}.marks`, {
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Difficulty
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.difficulty`, val)
                  }
                  defaultValue={question.difficulty}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 rounded-sm">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* MCQ Options */}
            {questionType === "MCQ" && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Answer Options
                  </Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => appendOption("New Option")}
                    className="h-6 px-2 text-[10px] text-primary hover:text-primary/80 hover:bg-primary/10"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {optionFields.map((opt, optIndex) => (
                    <div key={opt.id} className="flex gap-1.5 group">
                      <Input
                        {...register(`questions.${index}.options.${optIndex}`)}
                        className="h-8 text-xs bg-muted/50 rounded-sm flex-1"
                        placeholder={`Option ${optIndex + 1}`}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeOption(optIndex)}
                        className="h-8 w-8 text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Correct Answer */}
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                Correct Answer
              </Label>
              {questionType === "MCQ" || questionType === "True/False" ? (
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.correctAnswer`, val)
                  }
                  defaultValue={question.correctAnswer}
                >
                  <SelectTrigger className="h-8 text-xs bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-sm">
                    <SelectValue placeholder="Select Answer" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionType === "True/False" ? (
                      <>
                        <SelectItem value="True">True</SelectItem>
                        <SelectItem value="False">False</SelectItem>
                      </>
                    ) : (
                      (watch(`questions.${index}.options`) || []).map(
                        (opt, i) => (
                          <SelectItem key={i} value={opt}>
                            {opt || `Option ${i + 1}`}
                          </SelectItem>
                        ),
                      )
                    )}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  className="h-8 text-xs bg-muted/50 border-emerald-500/30 focus-visible:ring-emerald-500/30 rounded-sm"
                  placeholder="Enter the correct answer..."
                  {...register(`questions.${index}.correctAnswer`)}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Collapsed View Mode - Accordion Style
  return (
    <div
      ref={combinedRef}
      style={style}
      id={`question-${index}`}
      className={cn("relative", isDragging && "opacity-50")}
    >
      <Card className="group border border-border/40 dark:border-border/20 hover:border-primary/40 transition-colors bg-card/50 dark:bg-card/30 shadow-none">
        <CardContent className="p-2 sm:p-2.5 flex items-start gap-2 min-w-0">
          {/* Drag Handle */}
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-muted-foreground/40 hover:text-foreground cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-ring rounded shrink-0"
          >
            <GripVertical className="w-3.5 h-3.5" />
          </button>

          {/* Question Number Badge */}
          <Badge
            variant="outline"
            className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400 shrink-0 text-[10px] px-1.5 h-5 font-bold"
          >
            {index + 1}
          </Badge>

          {/* Question Text - Line Clamped */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <p
              className="text-sm font-medium line-clamp-2 wrap-break-word whitespace-normal"
              style={{ overflowWrap: "anywhere" }}
            >
              {currentQuestion.text}
            </p>
          </div>

          {/* Compact metadata badges - Desktop only */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <Badge
              variant="secondary"
              className="text-[9px] font-normal h-4 px-1.5 bg-muted"
            >
              {currentQuestion.type}
            </Badge>
            <span className="text-[9px] text-muted-foreground flex items-center gap-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-blue-500" />
              {currentQuestion.marks}m
            </span>
            {currentQuestion.difficulty && (
              <span
                className={cn(
                  "text-[9px] px-1 py-0.5 rounded-full",
                  currentQuestion.difficulty === "Easy"
                    ? "bg-green-500/10 text-green-600"
                    : currentQuestion.difficulty === "Medium"
                      ? "bg-yellow-500/10 text-yellow-600"
                      : "bg-red-500/10 text-red-600",
                )}
              >
                {currentQuestion.difficulty}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0.5 shrink-0">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(index)}
                    className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Edit</p>
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
                        className="h-7 w-7 text-destructive sm:text-muted-foreground sm:hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </AlertDialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Delete</p>
                  </TooltipContent>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Delete Question {index + 1}?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onRemove(index)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

export default QuestionCard;
