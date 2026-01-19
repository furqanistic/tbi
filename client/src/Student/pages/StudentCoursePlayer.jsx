// File: client/src/pages/dashboard/StudentCoursePlayer.jsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courses } from "@/Student/data/coursesData";
import {
    Check,
    CheckCircle,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Circle,
    Clock,
    Lightbulb,
    Play,
    PlayCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const getNextLesson = () => {
    if (!activeLesson || !course) return null;
    let nextModuleIndex = activeLesson.moduleIndex;
    let nextLessonIndex = activeLesson.lessonIndex + 1;

    if (nextLessonIndex >= course.syllabus[nextModuleIndex].lessons.length) {
      if (nextModuleIndex < course.syllabus.length - 1) {
        nextModuleIndex++;
        nextLessonIndex = 0;
      } else {
        return null;
      }
    }
    return {
      ...course.syllabus[nextModuleIndex].lessons[nextLessonIndex],
      moduleTitle: course.syllabus[nextModuleIndex].title,
    };
  };

  const nextLessonPreview = getNextLesson();

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-4 sm:-m-6 lg:-m-8">
      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        {/* Main Content (Video Player) */}
        <div className="flex-1 flex flex-col bg-background/50 h-auto lg:h-full lg:overflow-y-auto scrollbar-hide">
          {/* Breadcrumbs / top nav */}
          <div className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-10">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 -ml-2 text-muted-foreground hover:text-foreground text-xs"
              onClick={() => navigate("/student/courses")}
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Courses
            </Button>
            <span className="text-border/60">/</span>
            <span className="truncate font-medium text-foreground text-xs">
              {course.title}
            </span>
          </div>

          {/* Video Player Placeholder */}
          <div className="w-full aspect-video dark:bg-background/50 bg-zinc-200 text-black flex items-center justify-center relative group shrink-0">
            <div className="text-black/80 dark:text-white/80 text-center">
              <PlayCircle className="w-14 h-14 mx-auto mb-3 opacity-80 group-hover:scale-110 transition-transform" />
              <p className="font-medium">
                Playing: {activeLesson?.title || "Select a lesson"}
              </p>
            </div>
          </div>

          {/* Lesson Details - Compact */}
          <div className="p-4 w-full space-y-4 pb-6">
            {/* Header: Title + Controls */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 min-w-0">
                <Badge
                  variant="secondary"
                  className="shrink-0 text-[10px] font-medium px-2 py-0.5"
                >
                  M{(activeLesson?.moduleIndex ?? 0) + 1}
                </Badge>
                <h2 className="text-base sm:text-lg font-semibold truncate">
                  {activeLesson?.title}
                </h2>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => navigateLesson(-1)}
                  disabled={
                    !activeLesson ||
                    (activeLesson.moduleIndex === 0 &&
                      activeLesson.lessonIndex === 0)
                  }
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => navigateLesson(1)}
                  disabled={
                    !activeLesson ||
                    (activeLesson.moduleIndex === course.syllabus.length - 1 &&
                      activeLesson.lessonIndex ===
                        course.syllabus[activeLesson.moduleIndex].lessons
                          .length -
                          1)
                  }
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  variant={
                    isCompleted(
                      activeLesson?.moduleIndex,
                      activeLesson?.lessonIndex,
                    )
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  className={cn(
                    "h-7 gap-1.5 ml-1 text-xs",
                    isCompleted(
                      activeLesson?.moduleIndex,
                      activeLesson?.lessonIndex,
                    ) &&
                      "bg-emerald-600 hover:bg-emerald-700 border-emerald-600",
                  )}
                  onClick={() => activeLesson && toggleComplete()}
                >
                  {isCompleted(
                    activeLesson?.moduleIndex,
                    activeLesson?.lessonIndex,
                  ) ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      <span>Done</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3 h-3" />
                      <span>Complete</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Content Grid - Compact 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,240px] gap-4">
              {/* Left: About + Key Takeaways */}
              <div className="space-y-3">
                {/* About - Minimal */}
                <p className="text-sm text-muted-foreground">
                  Core concepts of{" "}
                  <span className="text-foreground font-medium">
                    {activeLesson?.title}
                  </span>
                  . Pay attention to the key takeaways below.
                </p>

                {/* Key Takeaways - Compact */}
                <div className="rounded-lg border border-zinc-200 dark:border-border/50 bg-white/50 dark:bg-card/30 p-3 shadow-none dark:shadow-none">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs font-medium">
                      What you'll learn
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {course.whatYouWillLearn?.slice(0, 4).map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check
                          className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"
                          strokeWidth={3}
                        />
                        <span className="line-clamp-2 leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sidebar Cards - Compact */}
              <div className="flex flex-col gap-3">
                {/* Instructor - Compact */}
                <div className="rounded-lg border border-zinc-200 dark:border-border/50 bg-white/50 dark:bg-card/30 p-2.5 shadow-none dark:shadow-none">
                  <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                    Instructor
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs border border-primary/20">
                      {course.instructor?.charAt(0) || "T"}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-xs truncate">
                        {course.instructor}
                      </div>
                      <div className="text-[10px] text-muted-foreground truncate">
                        {course.instructorRole}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Up Next - Compact */}
                {nextLessonPreview && (
                  <div
                    className="rounded-lg border border-zinc-200 dark:border-border/50 bg-white/50 dark:bg-card/30 p-2.5 cursor-pointer hover:border-primary/40 hover:bg-zinc-50 dark:hover:bg-card/50 transition-colors group shadow-none dark:shadow-none"
                    onClick={() => navigateLesson(1)}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                        Up Next
                      </span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        {nextLessonPreview.duration}
                      </span>
                    </div>
                    <div className="text-[10px] text-primary font-medium">
                      {nextLessonPreview.moduleTitle}
                    </div>
                    <div className="font-medium text-xs line-clamp-1 group-hover:text-primary transition-colors">
                      {nextLessonPreview.title}
                    </div>
                    <div className="mt-1.5 flex items-center text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
                      <Play className="w-2.5 h-2.5 mr-0.5 fill-current" />
                      Watch
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Syllabus) */}
        <div
          className={cn(
            "border-t lg:border-t-0 lg:border-l border-border/40 bg-card flex flex-col transition-all duration-300 ease-in-out lg:relative",
            // Mobile: always auto height, full width
            // Desktop: dynamic width based on state
            sidebarOpen ? "w-full lg:w-72" : "w-full lg:w-15",
            "h-auto lg:h-full shrink-0",
          )}
        >
          {/* Sidebar Header */}
          <div
            className={cn(
              "h-12 flex items-center border-b border-border/40 shrink-0 cursor-pointer hover:bg-muted/30 transition-colors relative overflow-hidden",
              "justify-between px-3",
              !sidebarOpen && "lg:justify-center lg:px-0",
            )}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            <div
              className={cn(
                "flex flex-col transition-opacity duration-200 min-w-50",
                !sidebarOpen
                  ? "lg:opacity-0 lg:absolute lg:pointer-events-none"
                  : "opacity-100",
              )}
            >
              <span className="font-semibold text-xs">Course Content</span>
              <span className="text-[10px] text-muted-foreground font-normal whitespace-nowrap">
                {completedLessons.length}/
                {course?.syllabus?.reduce(
                  (acc, m) => acc + m.lessons.length,
                  0,
                ) || 0}{" "}
                (
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

            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform text-muted-foreground shrink-0",
                sidebarOpen ? "rotate-90" : "rotate-180",
              )}
            />
          </div>

          {/* Sidebar Content */}
          <div
            className={cn(
              "flex-1 overflow-y-auto scrollbar-hide bg-card transition-all duration-300",
              !sidebarOpen
                ? "lg:opacity-0 lg:pointer-events-none hidden lg:block"
                : "lg:opacity-100",
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
                  <AccordionTrigger className="px-3 py-2.5 hover:no-underline hover:bg-muted/50 text-xs font-medium">
                    <div className="text-left">
                      <div className="line-clamp-1">{module.title}</div>
                      <div className="text-[10px] text-muted-foreground font-normal mt-0.5">
                        {module.lessons.length} lessons
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
                            "w-full flex items-start gap-2.5 px-3 py-2 text-left transition-colors border-l-2",
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
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            ) : (
                              <PlayCircle className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-[11px] font-medium leading-tight mb-0.5",
                                isActive ? "text-primary" : "text-foreground",
                              )}
                            >
                              {lesson.title}
                            </p>
                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                              <Clock className="w-2.5 h-2.5" />
                              {lesson.duration}
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
