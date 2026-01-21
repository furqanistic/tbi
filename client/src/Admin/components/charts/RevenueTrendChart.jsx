// File: client/src/Admin/components/charts/RevenueTrendChart.jsx
"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", revenue: 42000 },
  { day: "Tue", revenue: 38000 },
  { day: "Wed", revenue: 55000 },
  { day: "Thu", revenue: 47000 },
  { day: "Fri", revenue: 62000 },
  { day: "Sat", revenue: 51000 },
  { day: "Sun", revenue: 68000 },
];

// Flat custom tooltip - no shadow, solid border
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-gray-300 dark:border-border/50 rounded-md px-3 py-2">
        <p className="text-xs font-medium text-foreground">{label}</p>
        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500">
          PKR {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueTrendChart() {
  return (
    <div className="w-full min-h-[200px] h-full">
      <ResponsiveContainer width="100%" height="100%" minHeight={200}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            className="text-gray-200 dark:text-border/30"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11 }}
            className="text-muted-foreground"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11 }}
            tickFormatter={(value) => `${value / 1000}k`}
            className="text-muted-foreground"
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={2}
            fill="#10b981"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
