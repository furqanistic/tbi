// File: client/src/Teacher/pages/TeacherCourseEditor.jsx
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
  Eye,
  FileText,
  GripVertical,
  Image as ImageIcon,
  LayoutList,
  Plus,
  Save,
  Settings,
  Trash2,
  Video,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherCourseEditor() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="space-y-4 sm:space-y-6 pb-10 animate-in fade-in duration-500">
      {/* Header Actions - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky top-0 z-30 py-3 bg-background/95 backdrop-blur-md border-b -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/teacher/courses">
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight truncate">
              Create New Course
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Draft mode • Last saved 2m ago
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
            <span className="hidden sm:inline">Save & Publish</span>
            <span className="sm:hidden">Save</span>
          </Button>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4 sm:space-y-6"
      >
        {/* Tabs List - Scrollable on mobile */}
        <TabsList className="w-full h-auto p-1 bg-muted/10 rounded-lg flex">
          <TabsTrigger
            value="basic"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background/50 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Basic</span>
            <span className="xs:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger
            value="curriculum"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background/50 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <LayoutList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Curriculum</span>
            <span className="xs:hidden">Content</span>
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="flex-1 rounded-md py-2 px-2 sm:px-4 data-[state=active]:bg-background/50 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all text-[10px] sm:text-xs font-semibold gap-1 sm:gap-2"
          >
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Settings</span>
            <span className="xs:hidden">Price</span>
          </TabsTrigger>
        </TabsList>

        {/* 1. Basic Information Tab */}
        <TabsContent value="basic" className="space-y-4 sm:space-y-6 mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 ">
              <Card className="bg-card dark:bg-card/30">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">
                    Course Details
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    The main information about your course.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">Course Title</Label>
                    <Input
                      placeholder="e.g. Advanced English Essay Writing for CSS"
                      className="font-medium text-sm"
                    />
                    <p className="text-[10px] text-muted-foreground">
                      Keep it catchy and descriptive.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">
                      Short Description
                    </Label>
                    <Textarea
                      placeholder="Brief summary of what students will learn..."
                      className="h-20 sm:h-24 resize-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm">Category</Label>
                      <Select>
                        <SelectTrigger className="h-9 text-sm">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compulsory">
                            Compulsory Subjects
                          </SelectItem>
                          <SelectItem value="optional">
                            Optional Subjects
                          </SelectItem>
                          <SelectItem value="skills">
                            Skills & Interview
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm">Level</Label>
                      <Select>
                        <SelectTrigger className="h-9 text-sm">
                          <SelectValue placeholder="Select Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Media */}
            <div className="space-y-4 sm:space-y-6">
              <Card className={"dark:bg-card/30"}>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">
                    Course Media
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Upload course thumbnail.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-3">
                  <div className="aspect-video bg-muted rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:bg-muted/70 transition-colors cursor-pointer group">
                    <div className="p-2.5 sm:p-3 rounded-full bg-background shadow-xs group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-primary">
                        Click to upload
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        or drag and drop
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Recommended: 1280x720 (16:9). JPG, PNG, WEBP.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 2. Curriculum Tab */}
        <TabsContent value="curriculum" className="space-y-4 sm:space-y-6 mt-0">
          <Card className={"dark:bg-card/30"}>
            <CardHeader className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
              <div>
                <CardTitle className="text-base sm:text-lg">
                  Course Curriculum
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Organize your course into modules and lessons.
                </CardDescription>
              </div>
              <Button size="sm" className="gap-2 w-full sm:w-auto">
                <Plus className="w-4 h-4" /> Add Module
              </Button>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-4">
              {/* Mock Module */}
              <div className="border border-border rounded-lg bg-card dark:bg-card/30 overflow-hidden">
                <div className="p-2.5 sm:p-3 bg-muted/30 flex items-center gap-2 sm:gap-3 border-b border-border/50">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 cursor-move shrink-0"
                  >
                    <GripVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                  <div className="flex-1 font-semibold text-xs sm:text-sm truncate">
                    Module 1: Introduction
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="p-2 space-y-1.5">
                  {/* Lesson Item */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-accent/50 group transition-colors">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        Welcome to the Course
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Video • 5:20
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-[10px] sm:text-xs px-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    >
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-accent/50 group transition-colors">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        Course Outline PDF
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Resource • 2.5 MB
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-[10px] sm:text-xs px-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Empty State */}
              <div className="p-6 sm:p-8 border-2 border-dashed border-border/50 rounded-lg flex flex-col items-center justify-center text-center text-muted-foreground gap-2 hover:bg-accent/5 transition-colors">
                <div className="p-2.5 bg-muted rounded-full">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs sm:text-sm font-medium">
                  Add more content
                </p>
                <p className="text-[10px] sm:text-xs">
                  Create new modules to organize your lessons.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 3. Settings Tab */}
        <TabsContent value="settings" className="space-y-4 sm:space-y-6 mt-0">
          <Card className={"dark:bg-card/30"}>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">
                Pricing & Access
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Set your course pricing.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">
                    Course Price (PKR)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs sm:text-sm font-bold">
                      Rs.
                    </span>
                    <Input
                      type="number"
                      placeholder="5000"
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">
                    Discounted Price (Optional)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs sm:text-sm font-bold">
                      Rs.
                    </span>
                    <Input
                      type="number"
                      placeholder="3500"
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
