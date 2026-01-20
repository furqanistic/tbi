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
  HelpCircle,
  X,
  Plus,
  Save,
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

export default function QuestionCard({
  question,
  index,
  onRemove,
  isEditing,
  onEdit,
  onCancelEdit,
  onSaveEdit,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id, disabled: isEditing });

  const { register, control, watch, setValue } = useFormContext();

  // Watch all relevant fields for this question index to ensure View Mode updates live
  const questionValues = watch(`questions.${index}`);
  // Fallback to prop if watch returns undefined (shouldn't happen with correct usage)
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

  if (isEditing) {
    return (
      <div ref={setNodeRef} style={style} className="relative z-10 my-4">
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardContent className="p-3 sm:p-4 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-border/50">
              <h4 className="font-semibold flex items-center gap-2">
                <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                Edit Question
              </h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onCancelEdit}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={onSaveEdit}
                  className="h-8 bg-primary text-primary-foreground"
                >
                  <Save className="w-3.5 h-3.5 mr-1.5" />
                  Done
                </Button>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase">
                Question Text
              </Label>
              <Textarea
                placeholder="Type your question here..."
                className="min-h-20 bg-muted/30"
                {...register(`questions.${index}.text`)}
              />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                  Type
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.type`, val)
                  }
                  defaultValue={question.type}
                >
                  <SelectTrigger className="bg-muted/30 h-9">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MCQ">Multiple Choice</SelectItem>
                    <SelectItem value="True/False">True / False</SelectItem>
                    <SelectItem value="Short Answer">Short Answer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                  Marks
                </Label>
                <Input
                  type="number"
                  className="bg-muted/30 h-9"
                  {...register(`questions.${index}.marks`, {
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                  Difficulty
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.difficulty`, val)
                  }
                  defaultValue={question.difficulty}
                >
                  <SelectTrigger className="bg-muted/30 h-9">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Options Management for MCQ */}
            {questionType === "MCQ" && (
              <div className="space-y-3 pt-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase flex items-center justify-between">
                  Answer Options
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => appendOption("New Option")}
                    className="h-6 text-[10px] text-primary hover:text-primary/80"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Option
                  </Button>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {optionFields.map((opt, optIndex) => (
                    <div key={opt.id} className="flex gap-2">
                      <Input
                        {...register(`questions.${index}.options.${optIndex}`)}
                        className="bg-muted/30 h-9 md:h-10"
                        placeholder={`Option ${optIndex + 1}`}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeOption(optIndex)}
                        className="h-9 w-9 text-muted-foreground hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Correct Answer */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase">
                Correct Answer
              </Label>
              {questionType === "MCQ" || questionType === "True/False" ? (
                <Select
                  onValueChange={(val) =>
                    setValue(`questions.${index}.correctAnswer`, val)
                  }
                  defaultValue={question.correctAnswer}
                >
                  <SelectTrigger className="bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400 h-9">
                    <SelectValue placeholder="Select Correct Answer" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionType === "True/False" ? (
                      <>
                        <SelectItem value="True">True</SelectItem>
                        <SelectItem value="False">False</SelectItem>
                      </>
                    ) : (
                      // For MCQ, map through CURRENT form values for options, or fallback to default
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
                  className="bg-muted/30 border-emerald-500/30 focus-visible:ring-emerald-500/30"
                  placeholder="Enter the correct answer key..."
                  {...register(`questions.${index}.correctAnswer`)}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // View Mode
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("relative", isDragging && "opacity-50")}
    >
      <Card className="group border border-border/40 dark:border-border/20 hover:border-primary/50 transition-colors bg-card/50 dark:bg-card/30 shadow-none">
        <CardContent className="p-3 sm:p-4 flex items-start gap-3">
          {/* Drag Handle */}
          <button
            {...attributes}
            {...listeners}
            className="mt-1 p-1 text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <GripVertical className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2 min-w-0">
                <Badge
                  variant="outline"
                  className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400 shrink-0 mt-0.5"
                >
                  Q{index + 1}
                </Badge>
                <div>
                  <p className="text-sm font-medium line-clamp-2 leading-relaxed">
                    {currentQuestion.text}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-normal h-5 px-1.5 bg-muted"
                    >
                      {currentQuestion.type}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      {currentQuestion.marks} Mark
                      {currentQuestion.marks !== 1 && "s"}
                    </span>
                    {currentQuestion.difficulty && (
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded-full border",
                          currentQuestion.difficulty === "Easy"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : currentQuestion.difficulty === "Medium"
                              ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                              : "bg-red-500/10 text-red-600 border-red-500/20",
                        )}
                      >
                        {currentQuestion.difficulty}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(index)}
                        className="h-7 w-7 text-muted-foreground hover:text-foreground"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Question</p>
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
                        <p>Delete Question</p>
                      </TooltipContent>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete Question {index + 1}?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove this question? This
                            action cannot be undone.
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
            </div>

            {/* Answer Preview (Subtle) */}
            <div className="pl-0 sm:pl-11">
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-border/50">
                <HelpCircle className="w-3 h-3 text-muted-foreground/70" />
                <span className="truncate max-w-75 italic">
                  Answer: {currentQuestion.correctAnswer || "Not specified"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
