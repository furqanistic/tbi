// File: client/src/Teacher/components/CourseEditor/ModuleCard.jsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  GripVertical,
  Pencil,
  Plus,
  Trash2,
  Video,
} from "lucide-react";
import LessonItem from "./LessonItem";

export default function ModuleCard({
  module,
  index,
  onEdit,
  onDelete,
  onAddLesson,
  onEditLesson,
  onDeleteLesson,
  onLessonRowClick,
}) {
  return (
    <div className="border border-border/40 rounded-lg overflow-hidden flex flex-col bg-card/40">
      {/* Module Header - min-w-0 on text container to allow truncate */}
      <div className="p-2 sm:p-2.5 bg-muted/20 flex items-center gap-2 border-b border-border/30 overflow-hidden">
        {/* Drag Handle - Fixed size */}
        <button className="p-1 text-muted-foreground/50 hover:text-foreground cursor-grab shrink-0">
          <GripVertical className="w-3.5 h-3.5" />
        </button>

        {/* Title Section - Flex 1 with min-w-0 implies it takes remaining space but can shrink */}
       {/* Title Section - flex-1 with min-w-0 and w-0 forces the container to shrink */}
<div className="flex-1 min-w-0 w-0 flex flex-col justify-center overflow-hidden">
  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-px shrink-0">
    Module {index + 1}
  </span>
  <span
    className="text-xs font-semibold truncate block w-full text-foreground/90"
    title={module.title}
  >
    {module.title.replace(/^Module \d+:\s*/i, "")}
  </span>
</div>

        {/* Action Buttons - Shrink 0 to never collapse */}
        <div className="flex items-center gap-0.5 shrink-0 ml-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(module)}
            className="h-7 w-7 text-muted-foreground hover:text-purple-600 hover:bg-purple-500/10"
            title="Edit Module"
          >
            <Pencil className="w-3.5 h-3.5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-purple-500 hover:text-purple-600 hover:bg-purple-500/10"
                title="Add Content"
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onAddLesson(module.id, "video")}>
                <Video className="w-4 h-4 mr-2 text-purple-500" />
                Add Video
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onAddLesson(module.id, "resource")}
              >
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                Add PDF Resource
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(module.id)}
            className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            title="Delete Module"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Lesson List */}
      <div className="flex flex-col">
        {module.lessons.length > 0 ? (
          <div className="p-1.5 space-y-1">
            {module.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                onClick={() => onLessonRowClick(module.id, lesson)}
                onEdit={(l) => onEditLesson(module.id, l)}
                onDelete={(lid) => onDeleteLesson(module.id, lid)}
              />
            ))}
          </div>
        ) : (
          // Add Content Button for empty modules
          <div className="p-4 flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-xs text-muted-foreground hover:text-purple-600 h-8"
                >
                  <Plus className="w-3.5 h-3.5 mr-1.5" /> Add Content
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem
                  onClick={() => onAddLesson(module.id, "video")}
                >
                  <Video className="w-4 h-4 mr-2 text-purple-500" />
                  Add Video
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onAddLesson(module.id, "resource")}
                >
                  <FileText className="w-4 h-4 mr-2 text-blue-500" />
                  Add PDF Resource
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
