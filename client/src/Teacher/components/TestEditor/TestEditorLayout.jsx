// File: client/src/Teacher/components/TestEditor/TestEditorLayout.jsx
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Eye,
  Save,
  Settings,
  FileText,
  LayoutList,
} from "lucide-react";
import { Link } from "react-router-dom";

import { FormProvider } from "react-hook-form";

export default function TestEditorLayout({
  form,
  children,
  activeTab,
  onTabChange,
  onSave,
}) {
  const {
    formState: { isDirty, isValid },
  } = form;

  const tabs = ["basic", "questions", "settings"];
  const currentStepIndex = tabs.indexOf(activeTab) + 1;

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
            <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500/50 animate-pulse" />
              Draft mode • {isDirty ? "Unsaved changes" : "All changes saved"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm" className="h-8 text-xs bg-card">
            <Eye className="w-3.5 h-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Preview</span>
          </Button>
          <Button
            size="sm"
            onClick={onSave}
            disabled={!isValid}
            className="h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
          >
            <Save className="w-3.5 h-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Save Test</span>
            <span className="sm:hidden">Save</span>
          </Button>
        </div>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
          {/* Step Progress Indicator */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                Step {currentStepIndex} of 3
              </span>
              <div className="flex items-center gap-1">
                {tabs.map((tab, i) => (
                  <div
                    key={tab}
                    className={cn(
                      "h-1.5 w-6 rounded-full transition-colors",
                      activeTab === tab
                        ? "bg-primary"
                        : tabs.indexOf(activeTab) > i
                          ? "bg-primary/40"
                          : "bg-muted",
                    )}
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground">
              {activeTab === "basic" && "Basic Details"}
              {activeTab === "questions" && "Test Questions"}
              {activeTab === "settings" && "Test Settings"}
            </span>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={onTabChange}
            className="w-full"
          >
            <div className="mb-6">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 dark:bg-card/30 border border-border/50 p-1 rounded-lg h-auto">
                <TabsTrigger
                  value="basic"
                  className="rounded-md py-2 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5 sm:mr-2" />
                  <span className="hidden xs:inline">Basic Details</span>
                  <span className="xs:hidden">Details</span>
                </TabsTrigger>
                <TabsTrigger
                  value="questions"
                  className="rounded-md py-2 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  <LayoutList className="w-3.5 h-3.5 mr-1.5 sm:mr-2" />
                  Questions
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-md py-2 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  <Settings className="w-3.5 h-3.5 mr-1.5 sm:mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>
            {children}
          </Tabs>
        </form>
      </FormProvider>
    </div>
  );
}
