// File: client/src/components/home/Hero.jsx
import {
  GraduationCap,
  Globe,
  Stethoscope,
  Briefcase,
  School,
  ArrowRight,
  BookOpen,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroCategories = [
  {
    title: "CSS & PMS",
    courses: 92,
    students: "794K+",
    icon: <Globe className="w-5 h-5" />,
    color: "text-blue-500",
    lightBg: "bg-blue-50/50",
    lightBorder: "border-blue-500/20",
    lightIcon: "bg-blue-600 text-white shadow-blue-500/30",
    activeLine: true,
  },
  {
    title: "MDCAT",
    courses: 14,
    students: "600K+",
    icon: <Stethoscope className="w-5 h-5" />,
    color: "text-rose-500",
    lightBg: "bg-rose-50/40",
    lightBorder: "border-rose-500/20",
    lightIcon: "bg-rose-500 text-white shadow-rose-500/30",
  },
  {
    title: "CA",
    courses: 59,
    students: "263K+",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-emerald-500",
    lightBg: "bg-emerald-50/40",
    lightBorder: "border-emerald-500/20",
    lightIcon: "bg-emerald-500 text-white shadow-emerald-500/30",
  },
  {
    title: "FSc & Matric",
    courses: 69,
    students: "514K+",
    icon: <BookOpen className="w-5 h-5" />,
    color: "text-amber-500",
    lightBg: "bg-amber-50/40",
    lightBorder: "border-amber-500/20",
    lightIcon: "bg-amber-500 text-white shadow-amber-500/30",
  },
];

const secondaryCourses = [
  {
    title: "O'Level & A'Level",
    paths: 19,
    icon: <School className="w-5 h-5" />,
    color: "text-sky-500",
    lightBg: "bg-sky-50/30",
    lightBorder: "border-sky-500/10",
    lightIconBorder: "border-sky-500/20",
  },
  {
    title: "ACCA",
    paths: 3,
    icon: <FileText className="w-5 h-5" />,
    color: "text-purple-500",
    lightBg: "bg-purple-50/30",
    lightBorder: "border-purple-500/10",
    lightIconBorder: "border-purple-500/20",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-44 pb-20 overflow-hidden bg-background selection:bg-primary/30 text-foreground transition-colors duration-500">
      {/* Dot Grid Background - Theme Responsive */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/3 dark:bg-blue-500/5 border border-blue-500/10 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[13px] font-semibold mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Enrollment Open for 2026 Season
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-10">
          Redefining <br />
          <span className="italic font-light serif opacity-80">
            Modernity
          </span>{" "}
          <br />
          in <span className="text-blue-600 dark:text-blue-500">
            CSS & PMS
          </span>{" "}
          Prep.
        </h1>

        <p className="max-w-xl text-lg md:text-[20px] text-muted-foreground/90 leading-relaxed mx-auto lg:mx-0 font-medium mb-14">
          Your pathway to public service excellence through expert-led
          interactive classes, comprehensive resources, and personalized
          feedback.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <Button className="rounded-full bg-blue-600 hover:bg-blue-500 px-10 py-7 font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 text-xl">
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-border bg-background/50 backdrop-blur-sm px-10 py-7 font-semibold text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all text-xl"
          >
            View Packages
          </Button>
        </div>

        {/* Success Metrics */}
        <div className="mt-28 grid grid-cols-3 gap-12 border-t border-border/50 pt-12 max-w-lg mx-auto lg:mx-0">
          <div className="space-y-1">
            <div className="text-4xl font-bold tracking-tight">95%</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Success Rate
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold tracking-tight">500+</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Allocated
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold tracking-tight">24/7</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Support
            </div>
          </div>
        </div>
      </div>

      {/* Right Content: Premium Card System */}
      <div className="flex-1 relative mt-24 lg:mt-0 lg:ml-20 perspective-[3000px]">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/[0.03] dark:bg-blue-500/10 blur-[130px] rounded-full animate-glow pointer-events-none" />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/[0.03] dark:bg-purple-500/10 blur-[130px] rounded-full animate-glow pointer-events-none"
          style={{ animationDelay: "-3s" }}
        />

        <div className="flex flex-col gap-6 transform-gpu transition-all duration-1000">
          {/* Main 2x2 Category Grid */}
          <div className="grid grid-cols-2 gap-5">
            {heroCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`group relative p-7 rounded-[2.5rem] transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-xl border
                  ${
                    cat.activeLine
                      ? "bg-blue-600 dark:bg-blue-600/[0.03] border-blue-600 dark:border-blue-500/20 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.25)] dark:shadow-none"
                      : `${cat.lightBg} ${cat.lightBorder} dark:bg-zinc-900/40 dark:border-zinc-800/50 hover:border-blue-500/20 shadow-sm shadow-zinc-200/50 dark:shadow-none`
                  }
                  hover:-translate-y-2 hover:scale-[1.01]
                `}
              >
                {/* Professional Hover Glow */}
                <div className="absolute inset-0 bg-radial-at-tl from-white/[0.05] dark:from-blue-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Active Status Badge */}
                {cat.activeLine && (
                  <div
                    className={`absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                      cat.activeLine
                        ? "bg-white/20 border-white/20 dark:bg-blue-500/10 dark:border-blue-500/10"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        cat.activeLine ? "bg-white dark:bg-blue-500" : ""
                      }`}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        cat.activeLine ? "text-white dark:text-blue-400" : ""
                      }`}
                    >
                      Live
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Section */}
                  <div
                    className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm
                      ${
                        cat.activeLine
                          ? "bg-white text-blue-600 dark:bg-blue-600 dark:text-white"
                          : `${cat.lightIcon} dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-blue-500 dark:border dark:border-zinc-700/50`
                      }
                    `}
                  >
                    {cat.icon}
                  </div>

                  {/* Title Section */}
                  <h3
                    className={`text-xl font-bold mb-12 tracking-tight transition-colors duration-300 ${
                      cat.activeLine
                        ? "text-white dark:text-zinc-50"
                        : "text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-zinc-50"
                    }`}
                  >
                    {cat.title}
                  </h3>

                  {/* Meta Stats Section */}
                  <div
                    className={`mt-auto flex justify-between items-center border-t pt-6 ${
                      cat.activeLine
                        ? "border-white/20 dark:border-blue-500/10"
                        : "border-zinc-200/50 dark:border-zinc-800/50"
                    }`}
                  >
                    <div className="space-y-1">
                      <div
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          cat.activeLine
                            ? "text-white/60 dark:text-zinc-500"
                            : "text-zinc-400 dark:text-zinc-500"
                        }`}
                      >
                        Courses
                      </div>
                      <div
                        className={`text-sm font-bold ${
                          cat.activeLine
                            ? "text-white dark:text-blue-400"
                            : `${cat.color} dark:text-zinc-300`
                        }`}
                      >
                        {cat.courses}+
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          cat.activeLine
                            ? "text-white/60 dark:text-zinc-500"
                            : "text-zinc-400 dark:text-zinc-500"
                        }`}
                      >
                        Users
                      </div>
                      <div
                        className={`text-sm font-bold ${
                          cat.activeLine
                            ? "text-white dark:text-blue-400"
                            : `${cat.color} dark:text-zinc-300`
                        }`}
                      >
                        {cat.students}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Rows - Clean & Modular */}
          <div className="grid grid-cols-2 gap-5">
            {secondaryCourses.map((cat, idx) => (
              <div
                key={idx}
                className={`group relative p-5 rounded-[1.5rem] border backdrop-blur-md flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm dark:shadow-none
                  ${cat.lightBg} ${cat.lightBorder} dark:bg-zinc-900/40 dark:border-zinc-800/50 hover:border-blue-500/20
                `}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex shrink-0 items-center justify-center transition-all border shadow-xs
                  ${cat.lightIconBorder} bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 dark:border-zinc-700/50
                `}
                >
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-zinc-800 dark:text-zinc-200 font-bold tracking-tight text-[14px] group-hover:text-zinc-900 dark:group-hover:text-zinc-50 mb-0.5">
                    {cat.title}
                  </h4>
                  <p className="text-[9px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
                    {cat.paths} Learning Paths
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More - Premium CTA */}
          <div className="group relative p-[1px] rounded-[2.5rem] transition-all duration-700 cursor-pointer overflow-hidden">
            {/* Dynamic Border Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-zinc-200/50 via-blue-500/20 to-zinc-200/50 dark:from-zinc-800/50 dark:via-blue-500/30 dark:to-zinc-800/50" />

            <div className="relative bg-zinc-50 dark:bg-zinc-900/90 rounded-[2.4rem] px-8 py-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 shadow-sm transition-transform border border-blue-500/10">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                    Explore Career Tracks
                  </h4>
                  <p className="text-[12px] font-medium text-zinc-400 dark:text-zinc-500">
                    Discover 20+ specialized curriculum paths
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">
                  All Paths
                </span>
                <div className="w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-10 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
