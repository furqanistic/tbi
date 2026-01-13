// File: client/src/components/home/HowItWorks.jsx
import React from "react";
import { Search, UserPlus, BookOpen, Trophy } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Explore Courses",
    description: "Browse specialized preparation packages.",
    icon: Search,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100/80 dark:bg-blue-500/15",
  },
  {
    step: "02",
    title: "Join the Batch",
    description: "Get immediate access to premium portal.",
    icon: UserPlus,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100/80 dark:bg-purple-500/15",
  },
  {
    step: "03",
    title: "Master Concepts",
    description: "Attend live classes with top faculty.",
    icon: BookOpen,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100/80 dark:bg-amber-500/15",
  },
  {
    step: "04",
    title: "Qualify & Excel",
    description: "Succeed with mocks and strategy.",
    icon: Trophy,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100/80 dark:bg-emerald-500/15",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 bg-background/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-2">
            The Process
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3 sm:mb-4">
            How It Works
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Your structured path to success.
          </p>
        </motion.div>

        {/* Responsive Grid: 1 Col (Mobile) -> 2 Cols (Tablet) -> 4 Cols (Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line (Desktop Only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border/50 -z-10 group-hover:bg-primary/20 transition-colors" />
              )}
              <StepCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ item }) {
  return (
    <div className="bg-background dark:bg-card/50 border border-border/50 dark:border-border/30 p-5 sm:p-6 rounded-xl h-full flex flex-col items-center text-center sm:items-start sm:text-left gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 relative overflow-hidden group">
      <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between w-full gap-3 sm:gap-0">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg} ${item.color} transition-transform group-hover:scale-110 duration-300`}
        >
          <item.icon className="w-6 h-6" />
        </div>
        <span className="text-4xl sm:text-5xl font-extrabold text-primary/15 dark:text-primary/20 group-hover:text-primary/30 transition-colors">
          {item.step}
        </span>
      </div>

      <div className="space-y-1.5 sm:space-y-2 relative z-10">
        <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
