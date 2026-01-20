// File: client/src/Teacher/components/TestEditor/InfoTab.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Hash,
  Tag,
  BookOpen,
  AlertCircle,
  FileText,
} from "lucide-react";
import { useFormContext } from "react-hook-form";
import { TabsContent } from "@/components/ui/tabs";

export default function InfoTab() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TabsContent
      value="basic"
      className="space-y-3 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Main Section - Test Details */}
        <div className="lg:col-span-2">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/10 rounded-md">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                </div>
                Test Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 space-y-3">
              <div className="space-y-1.5">
                <Label
                  htmlFor="title"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Full-Length Mock Exam 2024"
                  className="h-9 text-sm bg-muted/50 focus:bg-background transition-colors rounded-sm"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-[10px] text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.title.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="description"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the test syllabus and instructions..."
                  className="min-h-28 resize-y bg-muted/50 focus:bg-background transition-colors leading-relaxed text-sm rounded-sm"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-[10px] text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.description.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Configuration */}
        <div className="lg:col-span-1">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <div className="p-1.5 bg-purple-500/10 rounded-md">
                  <Hash className="w-3.5 h-3.5 text-purple-500" />
                </div>
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Subject
                </Label>
                <div className="relative">
                  <BookOpen className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-muted-foreground/60" />
                  <Input
                    placeholder="e.g., Physics"
                    className="pl-8 h-9 text-sm bg-muted/50 rounded-sm"
                    {...register("subject")}
                  />
                </div>
                {errors.subject && (
                  <p className="text-[10px] text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Topics
                </Label>
                <div className="relative">
                  <Tag className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-muted-foreground/60" />
                  <Input
                    placeholder="e.g., Algebra, Geometry"
                    className="pl-8 h-9 text-sm bg-muted/50 rounded-sm"
                    {...register("topics")}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-border/30 space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Duration (Minutes)
                </Label>
                <div className="relative">
                  <Clock className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-muted-foreground/60" />
                  <Input
                    type="number"
                    placeholder="90"
                    className="pl-8 h-9 text-sm bg-muted/50 rounded-sm"
                    {...register("duration", { valueAsNumber: true })}
                  />
                </div>
                {errors.duration && (
                  <p className="text-[10px] text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.duration.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TabsContent>
  );
}
