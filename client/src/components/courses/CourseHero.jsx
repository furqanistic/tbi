// File: client/src/components/courses/CourseHero.jsx
import React from "react";
import { motion as Motion } from "motion/react";
import {
  Search,
  Sparkles,
  BookOpen,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = [
  { label: "All Courses", value: "" },
  { label: "ICS", value: "ics" },
  { label: "CSS", value: "css" },
  { label: "FSc", value: "fsc" },
  { label: "Pre-Medical", value: "pre-medical" },
  { label: "Pre-Engineering", value: "pre-engineering" },
];

const stats = [
  { icon: BookOpen, label: "Courses", value: "300+" },
  { icon: Users, label: "Students", value: "50K+" },
  { icon: GraduationCap, label: "Instructors", value: "120+" },
  { icon: Trophy, label: "Success Rate", value: "95%" },
];

const CourseHero = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-24 overflow-hidden bg-background">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs for premium feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 fill-current" />
          Learn From The Best Educators
        </Motion.div>

        {/* Title */}
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
        >
          Explore Our <span className="text-primary">Premium Courses</span>
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Whether it's ICS, CSS, or FSc, find the perfect course taught by our
          top-tier faculty. Start your journey towards academic excellence
          today.
        </Motion.p>

        {/* Search Bar */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <div className="relative group">
            <Search className=" z-50 absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="text"
              placeholder="Search courses (e.g., ICS, CSS, Biology...)"
              className="pl-14 pr-6 h-16 rounded-full border-muted-foreground/20 focus-visible:ring-primary shadow-xl shadow-primary/5 text-base font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </Motion.div>

        {/* Category Pills */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory?.(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-background/50 backdrop-blur-sm border-muted-foreground/20 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
            >
              {category.label}
            </button>
          ))}
        </Motion.div>

    
      </div>
    </section>
  );
};

export default CourseHero;
