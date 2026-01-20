// File: client/src/Teacher/components/CourseEditor/LessonItem.jsx
import { Button } from "@/components/ui/button";
import { FileText, MoreVertical, Trash2, Video } from "lucide-react";

export default function LessonItem({ lesson, onClick, onEdit, onDelete }) {
  // Determine icon and color based on type
  const isVideo = lesson.type === "video";
  const Icon = isVideo ? Video : FileText;
  const iconColorClass = isVideo ? "text-purple-500" : "text-blue-500";
  const bgColorClass = isVideo ? "bg-purple-500/10" : "bg-blue-500/10";

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 p-2 rounded-md bg-muted/30 hover:bg-muted/50 group transition-colors cursor-pointer w-full min-w-0"
    >
      {/* Icon - Always visible, fixed size */}
      <div
        className={`h-7 w-7 rounded-md flex items-center justify-center shrink-0 ${bgColorClass}`}
      >
        <Icon className={`w-3.5 h-3.5 ${iconColorClass}`} />
      </div>

      {/* Content - Flex 1 with min-w-0 to allow truncation */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <p className="text-xs font-medium truncate leading-tight">
          {lesson.title}
        </p>
        <p className="text-[9px] text-muted-foreground truncate leading-tight">
          {lesson.meta}
        </p>
      </div>

      {/* Desktop Actions - Hidden on mobile, Flex row, Fixed size */}
      <div className="hidden sm:flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(lesson);
          }}
          className="h-6 text-[10px] px-2 text-muted-foreground hover:text-foreground"
        >
          Edit
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(lesson.id);
          }}
          className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>

      {/* Mobile Actions Indicator - Only visible on mobile */}
      <div className="sm:hidden text-muted-foreground shrink-0">
        <MoreVertical className="w-4 h-4" />
      </div>
    </div>
  );
}
