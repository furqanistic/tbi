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
    <section className="relative flex min-h-[90vh] flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-44 pb-20 overflow-hidden bg-background selection:bg-primary/30 text-foreground transition-colors duration-500">
      {/* Dynamic Background */}
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
          <Star className="h-4 w-4 fill-current" />
          Our Expert Faculty
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]"
        >
          Learn from the <br />
          <span className="text-blue-600 dark:text-blue-500 italic font-light serif opacity-90">
            Best Minds
          </span>
        </motion.h1>

        {/* Value Prop */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground/80 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
        >
          Our faculty consists of seasoned professionals and CSS/PMS specialists
          dedicated to guiding you through every step of your competitive exam
          journey.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="rounded-sm bg-blue-600 hover:bg-blue-500 px-10 py-7 font-medium text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 text-xl group"
          >
            Meet the Team
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-sm  bg-background/50 backdrop-blur-sm px-10 py-7 font-medium cursor-pointer text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all text-xl active:scale-95"
          >
            Our Success Stories
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Content: Stats/Cards adapted for Faculty */}
      <motion.div
        className="flex-1 relative mt-24 lg:mt-0 lg:ml-20 perspective-[2000px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacultyHero;
