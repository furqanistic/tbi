// File: client/src/components/courses/CourseHero.jsx
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Download,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseHero = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      text: "Qualified Mentors",
      color: "text-blue-500",
      lightBg: "bg-blue-50/50",
      lightBorder: "border-blue-500/20",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: "Premium Study Material",
      color: "text-rose-500",
      lightBg: "bg-rose-50/40",
      lightBorder: "border-rose-500/20",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Weekly Mock Exams",
      color: "text-emerald-500",
      lightBg: "bg-emerald-50/40",
      lightBorder: "border-emerald-500/20",
    },
  ];

  /*
   * Variants matching Home.jsx usage implies simpler "in-view" or staggered animations.
   * Keeping it clean with standard motion props or previous variants if needed.
   * Defining concise ones here for the redesigned elements.
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative flex min-h-screen flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-44 pb-20 overflow-hidden bg-background selection:bg-primary/30 text-foreground transition-colors duration-500">
      {/* Dynamic Background - Matching Home.jsx */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      {/* Left Content */}
      <motion.div
        className="flex-1 text-center lg:text-left z-10 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[13px] font-bold uppercase tracking-widest mb-10 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          2026 Batch Admissions Open
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]"
        >
          CSS & PMS <br />
          <span className="text-blue-600 dark:text-blue-500 italic font-light serif opacity-90">
            Excellence Program
          </span>
        </motion.h1>

        {/* Value Prop */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground/80 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
        >
          Secure your future in Pakistan's Civil Service with our data-driven
          curriculum, personalized mentorship, and the country's most rigorous
          mock exam series.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-500 px-10 py-7 font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 text-xl group"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-background/50 backdrop-blur-sm px-10 py-7 font-semibold text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all text-xl active:scale-95"
          >
            <Download className="mr-2 h-6 w-6" />
            Syllabus
          </Button>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border/50 pt-10 max-w-lg mx-auto lg:mx-0"
        >
          <div className="space-y-1">
            <div className="text-3xl font-bold tracking-tight">95%</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Success Rate
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold tracking-tight">500+</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Allocated
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold tracking-tight">24/7</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              Support
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content: Feature Cards */}
      <motion.div
        className="flex-1 relative mt-24 lg:mt-0 lg:ml-20 perspective-[2000px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/[0.05] dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 gap-6 relative z-10 max-w-md mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex items-center gap-6 p-6 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 shadow-sm
                  ${item.lightBg} ${item.lightBorder} 
                  dark:bg-zinc-900/60 dark:border-zinc-800/60 
                  hover:border-blue-500/30 hover:shadow-lg
              `}
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-inner
                  ${
                    item.color === "text-blue-500"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : ""
                  }
                  ${
                    item.color === "text-rose-500"
                      ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                      : ""
                  }
                  ${
                    item.color === "text-emerald-500"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : ""
                  }
                `}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.text}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Included in all plans</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hero Bottom - Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
