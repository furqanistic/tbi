// File: client/src/Teacher/components/profile/ProfileStats.jsx
import { BookOpen, Star, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    label: "Total Students",
    value: "12,345",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Active Courses",
    value: "24",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    label: "Total Reviews",
    value: "1.8k",
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    label: "Avg. Rating",
    value: "4.9",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-card dark:bg-card/30 border border-border p-3 rounded-xl flex items-center gap-3"
        >
          <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
            <stat.icon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-lg font-bold leading-none">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground font-medium mt-1 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
