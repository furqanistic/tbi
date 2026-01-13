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
    <div className="container mx-auto px-6 -mt-12 md:-mt-16 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-3xl md:rounded-full py-6 px-8 md:py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border border-white/20 dark:border-white/10 shadow-2xl"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center md:flex-1 gap-4 w-full md:w-auto px-4 group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-bold text-foreground">
                {stat.value}
              </span>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-10 w-px bg-border/50 ml-auto" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseStats;
