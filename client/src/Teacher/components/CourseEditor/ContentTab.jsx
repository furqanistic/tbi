import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  GripVertical,
  LayoutList,
  Plus,
  Trash2,
  Video,
  Upload,
  Link as LinkIcon,
  Pencil,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContentTab() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Module 1: Introduction",
      lessons: [
        {
          id: 101,
          type: "video",
          title: "Welcome to the Course",
          meta: "Video • 5:20",
          source: "url",
          url: "https://example.com/video",
        },
        {
          id: 102,
          type: "resource",
          title: "Course Outline PDF",
          meta: "Resource • 2.5 MB",
          source: "file",
          file: null, // Simulated already uploaded
        },
      ],
    },
  ]);

  // Module state
  const [isModuleDialogOpen, setIsModuleDialogOpen] = useState(false);
  const [editingModuleId, setEditingModuleId] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState("");

  // Lesson state
  const [isLessonDialogOpen, setIsLessonDialogOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);

  const [lessonType, setLessonType] = useState("video"); // 'video' | 'resource'
  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [videoSource, setVideoSource] = useState("upload"); // 'upload' | 'url'
  const [selectedFile, setSelectedFile] = useState(null);
  const [lessonUrl, setLessonUrl] = useState("");

  // -- Module Handlers --

  const openAddModuleDialog = () => {
    setEditingModuleId(null);
    setNewModuleTitle("");
    setIsModuleDialogOpen(true);
  };

  const openEditModuleDialog = (module) => {
    setEditingModuleId(module.id);
    setNewModuleTitle(module.title);
    setIsModuleDialogOpen(true);
  };

  const handleSaveModule = () => {
    if (!newModuleTitle.trim()) return;

    if (editingModuleId) {
      // Update existing
      setModules(
        modules.map((m) =>
          m.id === editingModuleId ? { ...m, title: newModuleTitle } : m,
        ),
      );
    } else {
      // Create new
      const newModule = {
        id: Date.now(),
        title: newModuleTitle,
        lessons: [],
      };
      setModules([...modules, newModule]);
    }

    setNewModuleTitle("");
    setEditingModuleId(null);
    setIsModuleDialogOpen(false);
  };

  const handleDeleteModule = (moduleId) => {
    setModules(modules.filter((m) => m.id !== moduleId));
  };

  // -- Lesson Handlers --

  const openAddLessonDialog = (moduleId, type) => {
    setActiveModuleId(moduleId);
    setEditingLessonId(null);
    setLessonType(type);

    // Reset form
    setNewLessonTitle("");
    setSelectedFile(null);
    setLessonUrl("");
    setVideoSource("upload");

    setIsLessonDialogOpen(true);
  };

  const openEditLessonDialog = (moduleId, lesson) => {
    setActiveModuleId(moduleId);
    setEditingLessonId(lesson.id);
    setLessonType(lesson.type);

    // Pre-fill form
    setNewLessonTitle(lesson.title);

    if (lesson.type === "video") {
      setVideoSource(lesson.source || "upload");
      setLessonUrl(lesson.url || "");
      setSelectedFile(lesson.file || null);
    } else {
      setSelectedFile(lesson.file || null);
    }

    setIsLessonDialogOpen(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSaveLesson = () => {
    if (!newLessonTitle.trim()) return;

    // Validation
    if (lessonType === "video") {
      if (videoSource === "upload" && !selectedFile && !editingLessonId) return; // Allow empty file on edit if keeping existing
      if (videoSource === "url" && !lessonUrl.trim()) return;
    } else if (lessonType === "resource" && !selectedFile && !editingLessonId) {
      return;
    }

    // Determine Metadata
    let metaInfo = "";
    let safeFile = selectedFile;

    // If editing and no new file selected, we might need to preserve usage of existing file logic if we had real backend
    // For local state demo, if selectedFile is null during edit, we assume "keep existing" logic or it's just a title update
    // But since we reset selectedFile on open, if user doesn't re-upload, selectedFile is null.
    // To handle "keep existing file" in this purely frontend demo, we need to know the old file.
    // Simplification: We require re-upload or assuming it's replaced if provided.
    // Actually, I pre-filled selectedFile in openEditLessonDialog, so if they don't change it, it's there.
    // EXCEPT: file inputs can't be programmatically set to a File object for security.
    // So selectedFile state being a File object is fine for us to hold, but the <input type="file" /> won't show it selected.
    // We will show "Selected: filename" in UI instead.

    if (lessonType === "video") {
      if (videoSource === "upload") {
        const size = safeFile
          ? (safeFile.size / (1024 * 1024)).toFixed(1)
          : "0";
        metaInfo = `Video • ${size} MB`;
      } else {
        metaInfo = "Video • External Link";
      }
    } else {
      const size = safeFile ? (safeFile.size / (1024 * 1024)).toFixed(1) : "0";
      metaInfo = `Resource • ${size} MB`;
    }

    const lessonData = {
      type: lessonType,
      title: newLessonTitle,
      meta: metaInfo,
      source: lessonType === "video" ? videoSource : "file",
      url: lessonType === "video" && videoSource === "url" ? lessonUrl : null,
      file: safeFile,
    };

    if (editingLessonId) {
      // Update existing lesson
      setModules(
        modules.map((m) => {
          if (m.id === activeModuleId) {
            return {
              ...m,
              lessons: m.lessons.map((l) =>
                l.id === editingLessonId ? { ...l, ...lessonData } : l,
              ),
            };
          }
          return m;
        }),
      );
    } else {
      // Create new lesson
      const newLesson = {
        id: Date.now(),
        ...lessonData,
      };

      setModules(
        modules.map((m) => {
          if (m.id === activeModuleId) {
            return {
              ...m,
              lessons: [...m.lessons, newLesson],
            };
          }
          return m;
        }),
      );
    }

    setIsLessonDialogOpen(false);
  };

  const handleDeleteLesson = (moduleId, lessonId) => {
    setModules(
      modules.map((m) => {
        if (m.id === moduleId) {
          return {
            ...m,
            lessons: m.lessons.filter((l) => l.id !== lessonId),
          };
        }
        return m;
      }),
    );
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "0 MB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <TabsContent
      value="curriculum"
      className="space-y-3 mt-0 focus-visible:ring-0 outline-none"
    >
      <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
        <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30 flex flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-purple-500/10 rounded-md">
              <LayoutList className="w-3.5 h-3.5 text-purple-500" />
            </div>
            <div>
              <CardTitle className="text-sm font-semibold">
                Course Curriculum
              </CardTitle>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Organize your course into modules and lessons
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={openAddModuleDialog}
            className="h-7 px-2.5 text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-500/10"
          >
            <Plus className="w-3.5 h-3.5 mr-1" />
            Add Module
          </Button>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 space-y-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="border border-border/40 rounded-lg overflow-hidden"
            >
              {/* Module Header */}
              <div className="p-2 sm:p-2.5 bg-muted/20 flex items-center gap-2 border-b border-border/30">
                <button className="p-1 text-muted-foreground/50 hover:text-foreground cursor-grab">
                  <GripVertical className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-xs font-semibold truncate">
                  {module.title}
                </span>
                <div className="flex items-center gap-0.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openEditModuleDialog(module)}
                    className="h-6 w-6 text-muted-foreground hover:text-purple-600 hover:bg-purple-500/10"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-purple-500 hover:text-purple-600 hover:bg-purple-500/10"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => openAddLessonDialog(module.id, "video")}
                      >
                        <Video className="w-4 h-4 mr-2 text-purple-500" />
                        Add Video
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          openAddLessonDialog(module.id, "resource")
                        }
                      >
                        <FileText className="w-4 h-4 mr-2 text-blue-500" />
                        Add PDF Resource
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteModule(module.id)}
                    className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              {/* Lessons */}
              {module.lessons.length > 0 && (
                <div className="p-1.5 space-y-1">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-2 p-2 rounded-md bg-muted/30 hover:bg-muted/50 group transition-colors"
                    >
                      <div
                        className={`h-7 w-7 rounded-md flex items-center justify-center shrink-0 ${
                          lesson.type === "video"
                            ? "bg-purple-500/10"
                            : "bg-blue-500/10"
                        }`}
                      >
                        {lesson.type === "video" ? (
                          <Video className="w-3.5 h-3.5 text-purple-500" />
                        ) : (
                          <FileText className="w-3.5 h-3.5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                          {lesson.title}
                        </p>
                        <p className="text-[9px] text-muted-foreground">
                          {lesson.meta}
                        </p>
                      </div>
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            openEditLessonDialog(module.id, lesson)
                          }
                          className="h-6 text-[10px] px-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleDeleteLesson(module.id, lesson.id)
                          }
                          className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Content Button if no lessons, or at bottom */}
              {module.lessons.length === 0 && (
                <div className="p-4 flex justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-xs text-muted-foreground hover:text-purple-600"
                      >
                        <Plus className="w-3.5 h-3.5 mr-1.5" /> Add Content
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuItem
                        onClick={() => openAddLessonDialog(module.id, "video")}
                      >
                        <Video className="w-4 h-4 mr-2 text-purple-500" />
                        Add Video
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          openAddLessonDialog(module.id, "resource")
                        }
                      >
                        <FileText className="w-4 h-4 mr-2 text-blue-500" />
                        Add PDF Resource
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          ))}

          {/* Empty State / Add More */}
          {modules.length === 0 && (
            <button
              onClick={openAddModuleDialog}
              className="w-full p-8 border-2 border-dashed border-border/40 rounded-lg flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-purple-500/30 hover:bg-purple-500/5 hover:text-purple-600 transition-colors"
            >
              <div className="p-3 bg-muted/50 rounded-full">
                <Plus className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Start your curriculum</p>
              <p className="text-xs">Create your first module to get started</p>
            </button>
          )}

          <button
            onClick={openAddModuleDialog}
            className="w-full p-4 border-2 border-dashed border-border/40 rounded-lg flex flex-col items-center justify-center gap-1.5 text-muted-foreground hover:border-purple-500/30 hover:bg-purple-500/5 hover:text-purple-600 transition-colors"
          >
            <div className="p-2 bg-muted/50 rounded-full">
              <Plus className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium">Add another module</p>
          </button>
        </CardContent>
      </Card>

      {/* Module Dialog (Add/Edit) */}
      <Dialog open={isModuleDialogOpen} onOpenChange={setIsModuleDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingModuleId ? "Edit Module" : "Add New Module"}
            </DialogTitle>
            <DialogDescription>
              {editingModuleId
                ? "Update your module details."
                : "Create a new section for your course content."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="module-title">Module Title</Label>
              <Input
                id="module-title"
                placeholder="e.g. Introduction to Exam"
                value={newModuleTitle}
                onChange={(e) => setNewModuleTitle(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModuleDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveModule}
              disabled={!newModuleTitle.trim()}
            >
              {editingModuleId ? "Save Changes" : "Add Module"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Lesson Dialog (Add/Edit) */}
      <Dialog open={isLessonDialogOpen} onOpenChange={setIsLessonDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingLessonId
                ? "Edit Lesson"
                : `Add ${lessonType === "video" ? "Video Lesson" : "PDF Resource"}`}
            </DialogTitle>
            <DialogDescription>
              {lessonType === "video"
                ? "Upload a video or provide a URL."
                : "Upload a downloadable PDF for students."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Common Title Input */}
            <div className="space-y-2">
              <Label htmlFor="lesson-title">Title</Label>
              <Input
                id="lesson-title"
                placeholder={
                  lessonType === "video"
                    ? "e.g. Course Intro"
                    : "e.g. Study Guide"
                }
                value={newLessonTitle}
                onChange={(e) => setNewLessonTitle(e.target.value)}
              />
            </div>

            {/* Video Logic */}
            {lessonType === "video" && (
              <Tabs
                value={videoSource}
                onValueChange={setVideoSource}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger
                    value="upload"
                    className="flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload File
                  </TabsTrigger>
                  <TabsTrigger
                    value="url"
                    className="flex items-center gap-1.5"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    Video URL
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="mt-0">
                  <div className="flex flex-col gap-3">
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition-colors ${selectedFile ? "border-purple-500/50 bg-purple-500/5" : "border-border/60 hover:border-purple-500/30 hover:bg-muted/50"}`}
                    >
                      <input
                        type="file"
                        accept=".mp4,.mov"
                        className="hidden"
                        id="video-upload"
                        onChange={handleFileChange}
                      />

                      {selectedFile ? (
                        <div className="flex flex-col items-center gap-1 animate-in fade-in-50 zoom-in-95">
                          <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-1">
                            <Video className="w-5 h-5" />
                          </div>
                          <p className="text-sm font-medium text-center truncate max-w-[200px]">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(selectedFile.size)}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs text-destructive hover:text-destructive mt-1 hover:bg-destructive/10"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedFile(null);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <label
                          htmlFor="video-upload"
                          className="flex flex-col items-center gap-2 cursor-pointer w-full h-full"
                        >
                          <div className="p-2.5 bg-muted rounded-full">
                            <Upload className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-purple-600 hover:underline">
                              Click to upload
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              MP4 or MOV (max 200MB)
                            </p>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="url" className="mt-0 space-y-2">
                  <Label htmlFor="video-url">Video Link</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="video-url"
                      placeholder="https://youtube.com/..."
                      className="pl-9"
                      value={lessonUrl}
                      onChange={(e) => setLessonUrl(e.target.value)}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Identify supported platforms like YouTube, Vimeo, etc.
                  </p>
                </TabsContent>
              </Tabs>
            )}

            {/* PDF Logic */}
            {lessonType === "resource" && (
              <div className="flex flex-col gap-3 pt-1">
                <Label>Upload PDF</Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition-colors ${selectedFile ? "border-blue-500/50 bg-blue-500/5" : "border-border/60 hover:border-blue-500/30 hover:bg-muted/50"}`}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="pdf-upload"
                    onChange={handleFileChange}
                  />

                  {selectedFile ? (
                    <div className="flex flex-col items-center gap-1 animate-in fade-in-50 zoom-in-95">
                      <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-1">
                        <FileText className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium text-center truncate max-w-[200px]">
                        {selectedFile.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(selectedFile.size)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs text-destructive hover:text-destructive mt-1 hover:bg-destructive/10"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedFile(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <label
                      htmlFor="pdf-upload"
                      className="flex flex-col items-center gap-2 cursor-pointer w-full h-full"
                    >
                      <div className="p-2.5 bg-muted rounded-full">
                        <Upload className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-blue-600 hover:underline">
                          Click to upload
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          PDF Files only
                        </p>
                      </div>
                    </label>
                  )}
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsLessonDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveLesson}
              disabled={
                !newLessonTitle.trim() ||
                (lessonType === "video" &&
                  videoSource === "upload" &&
                  !selectedFile &&
                  !editingLessonId) ||
                (lessonType === "video" &&
                  videoSource === "url" &&
                  !lessonUrl.trim()) ||
                (lessonType === "resource" && !selectedFile && !editingLessonId)
              }
            >
              {editingLessonId
                ? "Save Changes"
                : `Add ${lessonType === "video" ? "Video" : "Resource"}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TabsContent>
  );
}
