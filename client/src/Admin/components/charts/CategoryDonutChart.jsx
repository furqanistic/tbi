// File: client/src/Admin/components/charts/CategoryDonutChart.jsx
"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "CSS", value: 45, color: "#3b82f6" },
  { name: "PMS", value: 30, color: "#8b5cf6" },
  { name: "General", value: 25, color: "#f59e0b" },
];

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="flex flex-wrap justify-center gap-3 mt-2">
      {payload.map((entry, index) => (
        <li key={`legend-${index}`} className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-muted-foreground">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export function CategoryDonutChart() {
  return (
    <div className="w-full min-h-[200px] h-full">
      <ResponsiveContainer width="100%" height="100%" minHeight={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={50}
            outerRadius={75}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
