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
} from "lucide-react";

export default function SettingsTab() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const isTimeBound = watch("isTimeBound");
  const shuffleQuestions = watch("shuffleQuestions");
  const showResultsImmediately = watch("showResultsImmediately");

  return (
    <TabsContent
      value="settings"
      className="space-y-4 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {/* Grading Rules */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-3 pt-4 px-4 border-b border-border/30">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Percent className="w-4 h-4 text-emerald-500" />
              Grading Rules
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 pb-4 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Total Marks
                </Label>
                <Input
                  type="number"
                  {...register("totalMarks", { valueAsNumber: true })}
                  className="bg-muted/30 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Passing %
                </Label>
                <Input
                  type="number"
                  {...register("passingPercentage", { valueAsNumber: true })}
                  className="bg-muted/30 rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Negative Marking (per wrong answer)
              </Label>
              <Input
                type="number"
                step="0.25"
                {...register("negativeMarking", { valueAsNumber: true })}
                className="bg-muted/30 rounded-sm"
              />
              <p className="text-[10px] text-muted-foreground">
                Usually 0.25 or 0.5 marks deducted per wrong answer.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Access Control */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-3 pt-4 px-4 border-b border-border/30">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ShieldBan className="w-4 h-4 text-rose-500" />
              Access Control
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 pb-4 px-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Attempts Allowed
              </Label>
              <Input
                type="number"
                {...register("attemptsAllowed", { valueAsNumber: true })}
                className="bg-muted/30 rounded-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Start Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="date"
                    className="pl-9 bg-muted/30 rounded-sm"
                    {...register("startDate")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  End Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="date"
                    className="pl-9 bg-muted/30 rounded-sm"
                    {...register("endDate")}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Behavior */}
        <Card className="lg:col-span-2 border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-3 pt-4 px-4 border-b border-border/30">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Timer className="w-4 h-4 text-blue-500" />
              Test Behavior
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 pb-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg bg-muted/10">
              <Label
                htmlFor="time-bound"
                className="flex flex-col gap-1 cursor-pointer"
              >
                <span className="font-medium text-sm">Time Bound</span>
                <span className="text-[10px] text-muted-foreground">
                  Auto-submit when time ends
                </span>
              </Label>
              <Switch
                id="time-bound"
                checked={isTimeBound}
                onCheckedChange={(checked) => setValue("isTimeBound", checked)}
              />
            </div>

            <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg bg-muted/10">
              <Label
                htmlFor="shuffle"
                className="flex flex-col gap-1 cursor-pointer"
              >
                <span className="font-medium text-sm flex items-center gap-1.5">
                  <Shuffle className="w-3 h-3" /> Shuffle Questions
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Randomize order for each student
                </span>
              </Label>
              <Switch
                id="shuffle"
                checked={shuffleQuestions}
                onCheckedChange={(checked) =>
                  setValue("shuffleQuestions", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg bg-muted/10">
              <Label
                htmlFor="results"
                className="flex flex-col gap-1 cursor-pointer"
              >
                <span className="font-medium text-sm flex items-center gap-1.5">
                  <Eye className="w-3 h-3" /> Instant Results
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Show score after submission
                </span>
              </Label>
              <Switch
                id="results"
                checked={showResultsImmediately}
                onCheckedChange={(checked) =>
                  setValue("showResultsImmediately", checked)
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
