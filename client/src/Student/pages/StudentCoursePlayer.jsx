// File: client/src/pages/dashboard/StudentCoursePlayer.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/Student/data/coursesData";
import {
  PlayCircle,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Menu,
  CheckCircle,
  Lock,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function StudentCoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Find the course
  const course = courses.find((c) => c.id === courseId);

  // Initialize first lesson if available
  useEffect(() => {
    if (course && course.syllabus && course.syllabus.length > 0) {
      // Default to first lesson of first module
      const firstLesson = course.syllabus[0].lessons[0];
      if (firstLesson) {
        setActiveLesson({
          ...firstLesson,
          moduleIndex: 0,
          lessonIndex: 0,
          moduleTitle: course.syllabus[0].title,
        });
      }
    }
  }, [course]);

  if (!course) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Course not found.
      </div>
    );
  }

  const handleLessonChange = (
    lesson,
    moduleIndex,
    lessonIndex,
    moduleTitle,
  ) => {
    setActiveLesson({ ...lesson, moduleIndex, lessonIndex, moduleTitle });
  };

  const toggleComplete = () => {
    // Unique ID for lesson based on indices
    const id = `${activeLesson.moduleIndex}-${activeLesson.lessonIndex}`;
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isCompleted = (modIdx, lesIdx) => {
    return completedLessons.includes(`${modIdx}-${lesIdx}`);
  };

  // Flatten logic to find next/prev
  const navigateLesson = (direction) => {
    if (!activeLesson || !course) return;

    const currentModuleIndex = activeLesson.moduleIndex;
    const currentLessonIndex = activeLesson.lessonIndex;

    let nextModuleIndex = currentModuleIndex;
    let nextLessonIndex = currentLessonIndex + direction;

    // Check if we need to change modules
    if (nextLessonIndex < 0) {
      // Trying to go to previous lesson, but at start of module
      if (nextModuleIndex > 0) {
        nextModuleIndex--;
        nextLessonIndex = course.syllabus[nextModuleIndex].lessons.length - 1;
      } else {
        // At very beginning of course
        return;
      }
    } else if (
      nextLessonIndex >= course.syllabus[nextModuleIndex].lessons.length
    ) {
      // Trying to go to next lesson, but at end of module
      if (nextModuleIndex < course.syllabus.length - 1) {
        nextModuleIndex++;
        nextLessonIndex = 0;
      } else {
        // At very end of course
        return;
      }
    }

    const nextLesson =
      course.syllabus[nextModuleIndex].lessons[nextLessonIndex];
    const nextModuleTitle = course.syllabus[nextModuleIndex].title;

    handleLessonChange(
      nextLesson,
      nextModuleIndex,
      nextLessonIndex,
      nextModuleTitle,
    );
  };
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-4 sm:-m-6 lg:-m-8">
      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        {/* Main Content (Video Player) */}
        <div className="flex-1 flex flex-col bg-background/50 h-auto lg:h-full lg:overflow-y-auto">
          {/* Breadcrumbs / top nav */}
          <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-10">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1 -ml-2 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/student/courses")}
            >
              <ChevronLeft className="w-4 h-4" /> Back to Courses
            </Button>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">
              {course.title}
            </span>
          </div>

          {/* Video Player Placeholder */}
          <div className="w-full aspect-video bg-black flex items-center justify-center relative group shrink-0">
            {/* This would be an iframe or video tag */}
            <div className="text-white/80 text-center">
              <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-lg">
                Playing: {activeLesson?.title || "Select a lesson"}
              </p>
            </div>
          </div>

          {/* Lesson Details & Navigation */}
          <div className="p-6 max-w-4xl mx-auto w-full space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Module {activeLesson?.moduleIndex + 1}:{" "}
                  {activeLesson?.moduleTitle}
                </div>
                <h2 className="text-2xl font-bold">{activeLesson?.title}</h2>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateLesson(-1)}
                  disabled={
                    !activeLesson ||
                    (activeLesson.moduleIndex === 0 &&
                      activeLesson.lessonIndex === 0)
                  }
                  title="Previous Lesson"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateLesson(1)}
                  disabled={
                    !activeLesson ||
                    (activeLesson.moduleIndex === course.syllabus.length - 1 &&
                      activeLesson.lessonIndex ===
                        course.syllabus[activeLesson.moduleIndex].lessons
                          .length -
                          1)
                  }
                  title="Next Lesson"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                <Separator
                  orientation="vertical"
                  className="h-6 mx-2 hidden sm:block"
                />

                <Button
                  variant={
                    isCompleted(
                      activeLesson?.moduleIndex,
                      activeLesson?.lessonIndex,
                    )
                      ? "default"
                      : "outline"
                  }
                  className={cn(
                    "gap-2",
                    isCompleted(
                      activeLesson?.moduleIndex,
                      activeLesson?.lessonIndex,
                    ) && "bg-emerald-600 hover:bg-emerald-700",
                  )}
                  onClick={() => activeLesson && toggleComplete()}
                >
                  {isCompleted(
                    activeLesson?.moduleIndex,
                    activeLesson?.lessonIndex,
                  ) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />{" "}
                      <span className="hidden sm:inline">Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />{" "}
                      <span className="hidden sm:inline">Mark Complete</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            <Separator />

            <div className="prose dark:prose-invert max-w-none">
              <h3>About this lesson</h3>
              <p className="text-muted-foreground">
                In this lesson, we will cover the core concepts of{" "}
                {activeLesson?.title}. Make sure to take notes and complete the
                quiz at the end of the module.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar (Syllabus) */}
        <div
          className={cn(
            "w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border/40 bg-card flex flex-col transition-all duration-300 lg:relative",
            // Always visible on mobile now (as a block), desktop fixed
            "h-auto lg:h-full",
          )}
        >
          <div
            className="h-14 flex items-center justify-between px-4 border-b border-border/40 shrink-0 cursor-pointer lg:cursor-default"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Course Content</span>
              <span className="text-[10px] text-muted-foreground font-normal">
                {completedLessons.length}/
                {course?.syllabus?.reduce(
                  (acc, m) => acc + m.lessons.length,
                  0,
                ) || 0}{" "}
                Completed (
                {Math.round(
                  (completedLessons.length /
                    (course?.syllabus?.reduce(
                      (acc, m) => acc + m.lessons.length,
                      0,
                    ) || 1)) *
                    100,
                )}
                %)
              </span>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <ChevronRight
                className={cn(
                  "w-4 h-4 transition-transform",
                  sidebarOpen ? "rotate-90" : "",
                )}
              />
            </Button>
          </div>

          <div
            className={cn(
              "flex-1 lg:overflow-y-auto",
              !sidebarOpen ? "hidden lg:block" : "block",
            )}
          >
            <Accordion
              type="multiple"
              defaultValue={course?.syllabus?.map((_, i) => `item-${i}`)}
              className="w-full"
            >
              {course.syllabus.map((module, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={i}
                  className="border-b border-border/40"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 text-sm font-medium">
                    <div className="text-left">
                      <div className="line-clamp-1">{module.title}</div>
                      <div className="text-[10px] text-muted-foreground font-normal mt-0.5">
                        {module.lessons.length} lessons •{" "}
                        {isCompleted(i, -1) ? "100%" : "0%"}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    {module.lessons.map((lesson, j) => {
                      const isActive =
                        activeLesson?.moduleIndex === i &&
                        activeLesson?.lessonIndex === j;
                      const isDone = isCompleted(i, j);

                      return (
                        <button
                          key={j}
                          onClick={() =>
                            handleLessonChange(lesson, i, j, module.title)
                          }
                          className={cn(
                            "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors border-l-2",
                            isActive
                              ? "bg-primary/5 border-primary"
                              : "hover:bg-muted/50 border-transparent",
                          )}
                        >
                          <div
                            className={cn(
                              "mt-0.5",
                              isDone
                                ? "text-emerald-500"
                                : "text-muted-foreground/30",
                            )}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : (
                              <PlayCircle className="w-4 h-4" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-xs font-medium leading-tight mb-1",
                                isActive ? "text-primary" : "text-foreground",
                              )}
                            >
                              {lesson.title}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {lesson.duration}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
