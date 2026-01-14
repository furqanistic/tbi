// File: client/src/components/faculty/FacultyHero.jsx
import { motion } from "motion/react";
import { Users, Award, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FacultyHero = () => {
  const highlights = [
    {
      icon: <Award className="h-5 w-5" />,
      text: "Certified Professionals",
      color: "text-blue-500",
      lightBg: "bg-blue-50/50",
      lightBorder: "border-blue-500/20",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Industry Practitioners",
      color: "text-rose-500",
      lightBg: "bg-rose-50/40",
      lightBorder: "border-rose-500/20",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      text: "Proven Success Record",
      color: "text-emerald-500",
      lightBg: "bg-emerald-50/40",
      lightBorder: "border-emerald-500/20",
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Proven Success Record",
      color: "text-emerald-500",
      lightBg: "bg-emerald-50/40",
      lightBorder: "border-emerald-500/20",
    }
  ];

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
    <section className="relative flex min-h-[85vh] flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-32 pb-16 overflow-hidden bg-background selection:bg-primary/30 text-foreground transition-colors duration-500">
      {/* Background Decor - Subtle Grid matching Home Hero */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
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
        {/* Badge - Matching Home style */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6"
        >
          <Star className="h-3 w-3 fill-current" />
          Excellence in Mentorship
        </motion.div>

        {/* Title - Compact size like Home */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
        >
          Learn from the <br />
          <span className="text-blue-600 dark:text-blue-500">
            Top 1% Mentors
          </span>
        </motion.h1>

        {/* Value Prop */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
        >
          Our faculty consists of seasoned professionals and CSS/PMS specialists
          dedicated to guiding you through every step of your competitive exam
          journey.
        </motion.p>

        {/* Buttons - Pill shaped like Home */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="rounded-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-500/20 text-white transition-transform hover:scale-105 active:scale-95"
          >
            Meet the Team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 text-base border-border hover:bg-accent text-foreground transition-all hover:border-foreground/20"
          >
            Our Success Stories
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Content: Faculty Highlights with rounded-sm */}
      <motion.div
        className="flex-1 relative mt-16 lg:mt-0 lg:ml-20"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 relative z-10 max-w-md mx-auto lg:mx-0">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-4 p-4 rounded-sm border backdrop-blur-md transition-all duration-300 shadow-xs hover:shadow-lg dark:shadow-none
                  ${item.lightBg} ${item.lightBorder} 
                  bg-background/40 dark:bg-zinc-900/60 dark:border-zinc-800/60 
                  hover:border-border
              `}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 ring-1 ring-inset ring-black/5 dark:ring-white/10
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
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacultyHero;
