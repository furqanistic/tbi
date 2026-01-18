// File: client/src/Student/components/ProgressAnalytics.jsx
import { TrendingUp, Clock, Target, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  weeklyStudyPattern,
  subjectProgress,
  improvementTrend,
  weeklyStats,
} from "@/Student/data/analyticsData";

export default function ProgressAnalytics() {
  // Calculate percentage change from first to last test
  const firstScore = improvementTrend[0].score;
  const lastScore = improvementTrend[improvementTrend.length - 1].score;
  const improvement = ((lastScore - firstScore) / firstScore) * 100;

  // Chart configurations
  const barChartConfig = {
    hours: {
      label: "Study Hours",
      color: "hsl(var(--chart-1))",
    },
  };

  const lineChartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <div className="bg-card dark:bg-card/30 rounded-sm border border-border p-5 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-base flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-500" />
            Progress Analytics
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Your learning insights this week
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Weekly Target</p>
          <p className="text-lg font-bold text-foreground">
            {weeklyStats.totalHours}
            <span className="text-xs text-muted-foreground font-normal">
              /{weeklyStats.targetHours}h
            </span>
          </p>
        </div>
      </div>

      {/* Weekly Stats Summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-background/50 dark:bg-background/30 rounded-sm p-3 border border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <p className="text-[10px] font-medium text-muted-foreground">
              Total Hours
            </p>
          </div>
          <p className="text-xl font-bold">{weeklyStats.totalHours}h</p>
        </div>
        <div className="bg-background/50 dark:bg-background/30 rounded-sm p-3 border border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-3.5 h-3.5 text-emerald-500" />
            <p className="text-[10px] font-medium text-muted-foreground">
              Daily Avg
            </p>
          </div>
          <p className="text-xl font-bold">{weeklyStats.averageDaily}h</p>
        </div>
        <div className="bg-background/50 dark:bg-background/30 rounded-sm p-3 border border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <p className="text-[10px] font-medium text-muted-foreground">
              Completion
            </p>
          </div>
          <p className="text-xl font-bold">{weeklyStats.completionRate}%</p>
        </div>
      </div>

      {/* Weekly Study Pattern - Bar Chart */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold">Weekly Study Pattern</h4>
        <ChartContainer
          config={barChartConfig}
          className="h-48 w-full [&_.recharts-surface]:aspect-auto!"
        >
          <BarChart data={weeklyStudyPattern} accessibilityLayer>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}h`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-37.5"
                  nameKey="hours"
                  labelFormatter={(value) =>
                    weeklyStudyPattern.find((d) => d.day === value)?.label
                  }
                />
              }
            />
            <Bar
              dataKey="hours"
              fill="hsl(217, 91%, 60%)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Subject-wise Progress */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold">Subject-wise Progress</h4>
        <div className="space-y-3">
          {subjectProgress.map((subject, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{subject.subject}</span>
                <span className={cn("text-xs font-bold", subject.textColor)}>
                  {subject.progress}%
                </span>
              </div>
              <Progress
                value={subject.progress}
                className="h-1.5 bg-muted"
                indicatorClassName={subject.color}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Trend - Line Chart */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Test Score Trend</h4>
          <div className="flex items-center gap-1 text-emerald-500">
            <TrendingUp className="w-3 h-3" />
            <span className="text-xs font-bold">
              +{improvement.toFixed(1)}%
            </span>
          </div>
        </div>
        <ChartContainer
          config={lineChartConfig}
          className="h-48 w-full [&_.recharts-surface]:aspect-auto!"
        >
          <LineChart data={improvementTrend} accessibilityLayer>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="test"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.split(" ")[1]}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-37.5"
                  nameKey="score"
                  labelFormatter={(value, payload) => {
                    const item = payload?.[0]?.payload;
                    return item ? `${item.test} (${item.date})` : value;
                  }}
                  formatter={(value) => [`${value}%`, "Score"]}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={2}
              dot={{
                fill: "hsl(142, 76%, 36%)",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
