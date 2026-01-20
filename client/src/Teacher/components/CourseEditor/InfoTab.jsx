// File: client/src/Teacher/components/CourseEditor/InfoTab.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Image as ImageIcon } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";

export default function InfoTab() {
  return (
    <TabsContent
      value="basic"
      className="space-y-3 mt-0 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Left Column - Course Details */}
        <div className="lg:col-span-2">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/10 rounded-md">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                </div>
                Course Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Course Title
                </Label>
                <Input
                  placeholder="e.g. Advanced English Essay Writing for CSS"
                  className="h-9 text-sm bg-muted/50 rounded-sm"
                />
                <p className="text-[10px] text-muted-foreground">
                  Keep it catchy and descriptive.
                </p>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Short Description
                </Label>
                <Textarea
                  placeholder="Brief summary of what students will learn..."
                  className="min-h-16 resize-none text-sm bg-muted/50 rounded-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="h-9 text-sm bg-muted/50 rounded-sm">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compulsory">
                        Compulsory Subjects
                      </SelectItem>
                      <SelectItem value="optional">
                        Optional Subjects
                      </SelectItem>
                      <SelectItem value="skills">Skills & Interview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Level
                  </Label>
                  <Select>
                    <SelectTrigger className="h-9 text-sm bg-muted/50 rounded-sm">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Course Media */}
        <div className="lg:col-span-1">
          <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none h-full">
            <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/10 rounded-md">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                </div>
                Course Media
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 space-y-2 flex flex-col h-[calc(100%-52px)]">
              <div className="flex-1 aspect-video lg:aspect-auto bg-muted/30 rounded-lg border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="p-2.5 rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-5 h-5 text-muted-foreground" />
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
              <p className="text-[10px] text-muted-foreground text-center">
                1280×720 (16:9) • JPG, PNG, WEBP
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </TabsContent>
  );
}
