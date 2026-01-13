// File: client/src/components/home/CourseSelection.jsx
import React from "react";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Stethoscope,
  FileText,
  Globe,
  School,
  Plus,
} from "lucide-react";

/**
 * Modern, theme-aware Course Selection section.
 * Features glassmorphism hover effects and semantic colors for dark/light modes.
 */

const categories = [
  {
    title: "CA",
    courses: 59,
    enrollments: 263265,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    icon: <Briefcase className="w-8 h-8 text-green-500" />,
  },
  {
    title: "SBI",
    courses: 36,
    enrollments: 5721,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "ACCA",
    courses: 3,
    enrollments: 286,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "MDCAT",
    courses: 14,
    enrollments: 600341,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    icon: <Stethoscope className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Entry Tests",
    courses: 20,
    enrollments: 70674,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    icon: <Plus className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "CSS & PMS",
    courses: 92,
    enrollments: 794750,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "O'Level & A'Level",
    courses: 19,
    enrollments: 32388,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    icon: <School className="w-8 h-8 text-cyan-500" />,
  },
  {
    title: "FSc & Matric",
    courses: 69,
    enrollments: 514441,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    icon: <BookOpen className="w-8 h-8 text-orange-600" />,
  },
];

export function CourseSelection() {
  return (
    <section className="bg-muted/10 py-20 px-6 lg:px-16 border-y border-border">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Take control of your learning today
        </h2>
        <p className="text-xl text-muted-foreground font-medium">
          Acing your exam is just a click away!
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-card/80 rounded-3xl p-8 border border-border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer flex flex-col justify-between min-h-48 overflow-hidden"
            >
              {/* Background Glass Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-2xl ${category.bgColor} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {category.icon}
                </div>
                <h3
                  className={`text-2xl font-bold ${category.color} tracking-tight`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-border/50 flex items-center justify-between text-muted-foreground font-semibold">
                <div className="flex flex-col">
                  <span className="text-lg text-foreground">
                    {category.courses}
                  </span>
                  <span className="text-xs uppercase tracking-wider opacity-70">
                    Courses
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg text-foreground">
                    {category.enrollments.toLocaleString()}
                  </span>
                  <span className="text-xs uppercase tracking-wider opacity-70">
                    Enrollments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
