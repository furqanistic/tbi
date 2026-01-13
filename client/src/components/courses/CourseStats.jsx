import { motion } from "motion/react";
import { Clock, BarChart, BookOpen, Presentation } from "lucide-react";

const CourseStats = () => {
  const stats = [
    {
      label: "Duration",
      value: "5 Months",
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      label: "Level",
      value: "Foundation to Pro",
      icon: <BarChart className="h-5 w-5 text-primary" />,
    },
    {
      label: "Total Lectures",
      value: "120+ Sessions",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
    },
    {
      label: "Mode",
      value: "Live + Recorded",
      icon: <Presentation className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="bg-background/80 backdrop-blur-2xl rounded-[2.5rem] py-10 px-8 md:py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 border border-white/20 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center md:flex-1 gap-6 w-full md:w-auto px-4 group transition-transform hover:scale-105"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
              <div className="group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </span>
              <span className="text-base md:text-xl font-black text-foreground tracking-tight">
                {stat.value}
              </span>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden lg:block h-12 w-px bg-border/40 ml-auto" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseStats;
