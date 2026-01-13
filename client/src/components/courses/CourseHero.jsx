import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseHero = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      text: "Qualified Mentors",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: "Premium Study Material",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Weekly Mock Exams",
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background accents - Calm & Focused */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            2026 Batch Admissions Open
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            CSS & PMS <br className="hidden md:block" />
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Excellence Program
            </span>
          </motion.h1>

          {/* Value Prop */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Secure your future in Pakistan's Civil Service with our data-driven
            curriculum, personalized mentorship, and the country's most rigorous
            mock exam series.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/20 hover:bg-muted/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-foreground/90 text-left">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 group"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full px-10 py-7 text-lg font-bold border-primary/20 text-primary hover:bg-primary/5 transition-all hover:-translate-y-1 active:scale-95"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Syllabus
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHero;
