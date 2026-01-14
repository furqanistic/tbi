// File: client/src/components/faculty/FacultyExpertise.jsx
import { motion } from "motion/react";
import { Brain, Globe, PenTool, BookOpen, Mic, Trophy } from "lucide-react";

const FacultyExpertise = () => {
  const expertisePoints = [
    {
      title: "Pedagogical Excellence",
      description:
        "Innovative teaching methodologies tailored for competitive exam success.",
      icon: <Brain className="h-6 w-6 text-white" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Policy Analysis",
      description:
        "Deep expertise in national and international current affairs and policy making.",
      icon: <Globe className="h-6 w-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Strategic Writing",
      description:
        "Specialized sessions on CSS/PMS essay structure and précis techniques.",
      icon: <PenTool className="h-6 w-6 text-white" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Content Development",
      description:
        "Creation of premium, up-to-date study resources and mock exams.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Mentorship & Coaching",
      description: "One-on-one personality development and interview grooming.",
      icon: <Mic className="h-6 w-6 text-white" />,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Result Oriented",
      description:
        "Track record of producing top scorers in civil services exams.",
      icon: <Trophy className="h-6 w-6 text-white" />,
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 relative overflow-hidden bg-background border-y border-border/40">
      {/* Subtle Background Pattern matching CoreOffer.jsx */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-3"
          >
            Our Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Faculty <span className="text-primary">Core Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto leading-relaxed"
          >
            Our mentors bring together a diverse range of skills to provide a
            comprehensive learning experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-4 rounded-sm border border-border/40 bg-card/20 hover:bg-card/40 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`w-10 h-10 rounded-sm bg-linear-to-br ${point.gradient} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                {point.icon}
              </div>
              <h3 className="text-[13px] sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                {point.title}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground leading-relaxed line-clamp-2">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FacultyExpertise;
