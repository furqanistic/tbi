// File: client/src/Teacher/pages/TeacherTestEditor.jsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  HelpCircle,
  LayoutList,
  Plus,
  Save,
  Settings,
  Trash2,
  GripVertical,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherTestEditor() {
  const [activeTab, setActiveTab] = useState("basic");

  // Mock questions state
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is the primary function of CSS?",
      type: "MCQ",
      marks: 1,
      difficulty: "Easy",
      explanation:
        "CSS (Cascading Style Sheets) is used to style and layout web pages.",
      topic: "Basics",
    },
    {
      id: 2,
      text: "Which HTML tag is used for the largest heading?",
      type: "MCQ",
      marks: 1,
      difficulty: "Easy",
      explanation: "The <h1> tag defines the most important heading.",
      topic: "HTML Structure",
    },
  ]);

  return (
    <div className="space-y-4 sm:space-y-6 pb-10 animate-in fade-in duration-500">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky top-0 z-30 py-3 bg-background/95 backdrop-blur-md border-b -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/teacher/tests">
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight truncate">
              Create New Test
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Draft mode • Last saved just now
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Eye className="w-3.5 h-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Preview</span>
          </Button>
          <Button
            size="sm"
            className="h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Save className="w-3.5 h-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Save Test</span>
            <span className="sm:hidden">Save</span>
          </Button>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4 sm:space-y-6"
      >
        <TabsList className="w-full h-auto p-1 bg-muted/10 rounded-lg flex">
          <TabsTrigger
            value="basic"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background/50 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Basic Info</span>
            <span className="xs:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger
            value="questions"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <LayoutList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Questions</span>
            <span className="xs:hidden">Qs</span>
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Settings</span>
            <span className="xs:hidden">Sets</span>
          </TabsTrigger>
        </TabsList>

        {/* 1. Basic Info Tab */}
        <TabsContent value="basic" className="space-y-4 sm:space-y-6 mt-0 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <Card className="bg-card dark:bg-card/30">
                <CardHeader className="p-3 sm:p-4">
                  <CardTitle className="text-base font-semibold">
                    Test Details
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Main information about the assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0 sm:pt-0 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">Test Title</Label>
                    <Input
                      placeholder="e.g. CSS Math Ability Mock 1"
                      className="font-medium text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">
                      Description / Instructions
                    </Label>
                    <Textarea
                      placeholder="Instructions for students..."
                      className="h-24 resize-none text-sm font-medium"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-card dark:bg-card/30">
                <CardHeader className="p-3 sm:p-4">
                  <CardTitle className="text-base font-semibold">
                    Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0 sm:pt-0 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">Subject</Label>
                    <Select>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="gk">General Knowledge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">
                      Difficulty Level
                    </Label>
                    <Select>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Select Difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">Tags / Topics</Label>
                    <Input
                      placeholder="e.g. Algebra, Grammar (comma separated)"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm">
                        Duration (Min)
                      </Label>
                      <Input
                        type="number"
                        placeholder="60"
                        className="h-9 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm">Total Marks</Label>
                      <Input
                        type="number"
                        placeholder="100"
                        className="h-9 text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 2. Questions Tab */}
        <TabsContent value="questions" className="space-y-4 sm:space-y-6 mt-0">
          <Card className="bg-card dark:bg-card/30">
            <CardHeader className="p-3 sm:p-4 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold">
                  Questions
                </CardTitle>
                <CardDescription className="text-xs">
                  Manage test questions and answers.
                </CardDescription>
              </div>
              <Button size="sm" className="h-8 text-xs gap-2">
                <Plus className="w-3.5 h-3.5" /> Add Question
              </Button>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0 sm:pt-0 space-y-3">
              {/* Questions List */}
              <div className="space-y-3">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className="group p-3 sm:p-4 rounded-lg border border-border bg-card/50 hover:bg-muted/30 transition-colors flex gap-3"
                  >
                    <div className="mt-1 cursor-move text-muted-foreground hover:text-foreground">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-sm line-clamp-2">
                          {i + 1}. {q.text}
                        </p>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground whitespace-nowrap">
                          {q.marks} Marks
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded border bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400">
                          MCQ
                        </span>
                        {q.difficulty && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded border bg-muted text-muted-foreground">
                            {q.difficulty}
                          </span>
                        )}
                        {q.topic && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded border bg-muted text-muted-foreground">
                            {q.topic}
                          </span>
                        )}
                      </div>
                      {q.explanation && (
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          <span className="font-semibold">Exp:</span>{" "}
                          {q.explanation}
                        </p>
                      )}
                    </div>
                    <div className="flex items-start gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Eye className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State / Add Area */}
              <div className="p-8 border-2 border-dashed border-border/50 rounded-lg flex flex-col items-center justify-center text-center gap-2 hover:bg-muted/20 transition-colors cursor-pointer">
                <div className="p-3 bg-muted rounded-full">
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium">Add a new question</p>
                <p className="text-xs text-muted-foreground">
                  Select question type to get started
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 3. Settings Tab */}
        <TabsContent value="settings" className="space-y-4 sm:space-y-6 mt-0">
          <Card className="bg-card dark:bg-card/30">
            <CardHeader className="p-3 sm:p-4">
              <CardTitle className="text-base font-semibold">
                Test Settings
              </CardTitle>
              <CardDescription className="text-xs">
                Configure access and grading rules.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0 sm:pt-0 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">
                    Passing Percentage
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="50"
                      className="pr-8 h-9 text-sm"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Allowed Attempts</Label>
                  <Input
                    type="number"
                    placeholder="1"
                    className="h-9 text-sm"
                  />
                  <p className="text-[10px] text-muted-foreground">
                    Enter 0 for unlimited attempts.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">
                    Start Date & Time
                  </Label>
                  <Input type="datetime-local" className="h-9 text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">End Date & Time</Label>
                  <Input type="datetime-local" className="h-9 text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Negative Marking</Label>
                  <Input
                    type="number"
                    placeholder="e.g. 0.25"
                    className="h-9 text-sm"
                  />
                  <p className="text-[10px] text-muted-foreground">
                    Marks deducted per wrong answer.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">
                    Result Visibility
                  </Label>
                  <Select>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">
                        Immediately after test
                      </SelectItem>
                      <SelectItem value="date">After End Date</SelectItem>
                      <SelectItem value="manual">Manual Release</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20">
                <div className="space-y-0.5">
                  <Label className="text-xs sm:text-sm font-semibold">
                    Shuffle Questions
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Randomize question order for each student.
                  </p>
                </div>
                {/* Switch component would go here, using a simpler checkbox for now */}
                <Input type="checkbox" className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
