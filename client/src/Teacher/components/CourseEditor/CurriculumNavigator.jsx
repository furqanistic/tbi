// File: client/src/Teacher/components/CourseEditor/CurriculumNavigator.jsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LayoutList, Video, FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CurriculumNavigator({ modules }) {
  const scrollToModule = (moduleId) => {
    // In a real implementation we would use refs or ids to scroll
    // For now this is valid structure
    const element = document.getElementById(`module-${moduleId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-2 bg-background/50 backdrop-blur-sm sticky top-2 z-10 ml-auto sm:ml-0"
        >
          <LayoutList className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Navigator</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-75 sm:w-87.5">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-base font-semibold flex items-center gap-2">
            <LayoutList className="w-4 h-4 text-purple-500" />
            Curriculum
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)] pr-4">
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={module.id} className="space-y-1">
                <div
                  className="text-xs font-semibold text-foreground/80 cursor-pointer hover:text-purple-600 truncate"
                  onClick={() => scrollToModule(module.id)}
                >
                  <span className="text-muted-foreground mr-1">
                    {index + 1}.
                  </span>
                  {module.title.replace(/^Module \d+:\s*/i, "")}
                </div>
                <div className="pl-4 space-y-1 border-l-2 border-muted ml-1">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-2 text-[11px] text-muted-foreground py-0.5 cursor-pointer hover:text-foreground"
                    >
                      {lesson.type === "video" ? (
                        <Video className="w-3 h-3 shrink-0" />
                      ) : (
                        <FileText className="w-3 h-3 shrink-0" />
                      )}
                      <span className="truncate">{lesson.title}</span>
                    </div>
                  ))}
                  {module.lessons.length === 0 && (
                    <div className="text-[10px] text-muted-foreground/50 italic pl-1">
                      Empty Module
                    </div>
                  )}
                </div>
              </div>
            ))}

            {modules.length === 0 && (
              <div className="text-sm text-muted-foreground text-center py-10">
                No modules added yet.
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
