// File: client/src/Teacher/components/TestEditor/InfoTab.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Hash, Tag, BookOpen, AlertCircle } from "lucide-react";
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
      className="space-y-4 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Section - Test Details */}
        <div className="lg:col-span-2 space-y-3">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-3 pt-4 px-4 border-b border-border/30">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileTextIcon className="w-4 h-4 text-blue-500" />
                Test Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 pb-4 px-4 space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Full-Length Mock Exam 2024"
                  className="font-medium text-base h-11 bg-muted/30 focus:bg-background transition-colors rounded-sm"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.title.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the test syllabus and instructions..."
                  className="min-h-40 resize-y bg-muted/30 focus:bg-background transition-colors leading-relaxed rounded-sm"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.description.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Quick Settings */}
        <div className="lg:col-span-1 space-y-3">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-3 pt-4 px-4 border-b border-border/30">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Hash className="w-4 h-4 text-purple-500" />
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 pb-4 px-4 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject
                </Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="e.g., Physics"
                    className="pl-9 bg-muted/30 rounded-sm"
                    {...register("subject")}
                  />
                </div>
                {errors.subject && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Topics
                </Label>
                <div className="relative">
                  <Tag className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="e.g., Algebra, Geometry"
                    className="pl-9 bg-muted/30 rounded-sm"
                    {...register("topics")}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Duration (Mins)
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    className="pl-9 bg-muted/30 rounded-sm"
                    {...register("duration", { valueAsNumber: true })}
                  />
                </div>
                {errors.duration && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
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

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
