// File: client/src/Teacher/components/TestEditor/SettingsTab.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";
import { TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  Percent,
  ShieldBan,
  Shuffle,
  Timer,
  Eye,
  Settings2,
} from "lucide-react";

export default function SettingsTab() {
  const { register, watch, setValue } = useFormContext();

  const isTimeBound = watch("isTimeBound");
  const shuffleQuestions = watch("shuffleQuestions");
  const showResultsImmediately = watch("showResultsImmediately");

  return (
    <TabsContent
      value="settings"
      className="space-y-3 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Grading Rules - Emerald */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/10 rounded-md">
                <Percent className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              Grading Rules
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Total Marks
                </Label>
                <Input
                  type="number"
                  {...register("totalMarks", { valueAsNumber: true })}
                  className="h-9 text-sm bg-muted/50 rounded-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Passing %
                </Label>
                <Input
                  type="number"
                  {...register("passingPercentage", { valueAsNumber: true })}
                  className="h-9 text-sm bg-muted/50 rounded-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Neg. Marking
                </Label>
                <Input
                  type="number"
                  step="0.25"
                  {...register("negativeMarking", { valueAsNumber: true })}
                  className="h-9 text-sm bg-muted/50 rounded-sm"
                />
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground">
              Negative marking is deducted per wrong answer (e.g., 0.25)
            </p>
          </CardContent>
        </Card>

        {/* Access Control - Rose */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <div className="p-1.5 bg-rose-500/10 rounded-md">
                <ShieldBan className="w-3.5 h-3.5 text-rose-500" />
              </div>
              Access Control
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Attempts
                </Label>
                <Input
                  type="number"
                  {...register("attemptsAllowed", { valueAsNumber: true })}
                  className="h-9 text-sm bg-muted/50 rounded-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Start Date
                </Label>
                <div className="relative">
                  <Input
                    type="date"
                    className="h-9 text-sm bg-muted/50 rounded-sm"
                    {...register("startDate")}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  End Date
                </Label>
                <div className="relative">
                  <Input
                    type="date"
                    className="h-9 text-sm bg-muted/50 rounded-sm"
                    {...register("endDate")}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Behavior - Blue - Single Bento Row */}
      <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
        <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <div className="p-1.5 bg-blue-500/10 rounded-md">
              <Settings2 className="w-3.5 h-3.5 text-blue-500" />
            </div>
            Test Behavior
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Time Bound */}
            <div className="flex items-center justify-between gap-3 p-3 border border-border/40 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <Label
                htmlFor="time-bound"
                className="flex items-center gap-2 cursor-pointer flex-1"
              >
                <Timer className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-sm font-medium block">Time Bound</span>
                  <span className="text-[10px] text-muted-foreground">
                    Auto-submit on timeout
                  </span>
                </div>
              </Label>
              <Switch
                id="time-bound"
                checked={isTimeBound}
                onCheckedChange={(checked) => setValue("isTimeBound", checked)}
              />
            </div>

            {/* Shuffle Questions */}
            <div className="flex items-center justify-between gap-3 p-3 border border-border/40 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <Label
                htmlFor="shuffle"
                className="flex items-center gap-2 cursor-pointer flex-1"
              >
                <Shuffle className="w-4 h-4 text-purple-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-sm font-medium block">Shuffle</span>
                  <span className="text-[10px] text-muted-foreground">
                    Randomize order
                  </span>
                </div>
              </Label>
              <Switch
                id="shuffle"
                checked={shuffleQuestions}
                onCheckedChange={(checked) =>
                  setValue("shuffleQuestions", checked)
                }
              />
            </div>

            {/* Instant Results */}
            <div className="flex items-center justify-between gap-3 p-3 border border-border/40 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <Label
                htmlFor="results"
                className="flex items-center gap-2 cursor-pointer flex-1"
              >
                <Eye className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-sm font-medium block">
                    Instant Results
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Show score on submit
                  </span>
                </div>
              </Label>
              <Switch
                id="results"
                checked={showResultsImmediately}
                onCheckedChange={(checked) =>
                  setValue("showResultsImmediately", checked)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
