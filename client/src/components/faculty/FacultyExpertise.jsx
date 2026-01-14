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
    <section className="py-32 relative overflow-hidden bg-muted/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Strengths
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tighter"
          >
            Areas of{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-10 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-linear-to-br ${point.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
              />

              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${point.gradient} flex items-center justify-center mb-10 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500`}
              >
                {point.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                {point.title}
              </h3>
              <p className="text-muted-foreground/90 leading-relaxed font-medium">
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
