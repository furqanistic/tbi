// File: client/src/Teacher/pages/TeacherCourseEditor.jsx
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Eye,
  FileText,
  LayoutList,
  Save,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InfoTab from "../components/CourseEditor/InfoTab";
import ContentTab from "../components/CourseEditor/ContentTab";
import PriceTab from "../components/CourseEditor/PriceTab";

export default function TeacherCourseEditor() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="space-y-4 pb-10 animate-in fade-in duration-500">
      {/* Sticky Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky top-0 z-30 py-3 bg-background/95 backdrop-blur-sm border-b border-border/40 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/teacher/courses">
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold tracking-tight truncate">
              Create New Course
            </h1>
            <p className="text-[10px] text-muted-foreground">
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
            className="h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
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
        className="space-y-4"
      >
        {/* Tab Navigation */}
        <TabsList className="w-full h-10 p-1 bg-muted/30 dark:bg-muted/10 border border-border/40 rounded-lg grid grid-cols-3">
          <TabsTrigger
            value="basic"
            className="rounded-md text-xs font-semibold gap-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden sm:inline">Details</span>
            <span className="sm:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger
            value="curriculum"
            className="rounded-md text-xs font-semibold gap-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            <LayoutList className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden sm:inline">Content</span>
            <span className="sm:hidden">Lessons</span>
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="rounded-md text-xs font-semibold gap-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">Pricing</span>
            <span className="sm:hidden">Price</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Content - Modular Components */}
        <InfoTab />
        <ContentTab />
        <PriceTab />
      </Tabs>
    </div>
  );
}
