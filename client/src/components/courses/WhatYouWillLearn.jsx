import { motion } from "motion/react";
import {
  CheckCircle2,
  BookOpen,
  Globe,
  PenTool,
  Mic,
  Brain,
} from "lucide-react";

const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      title: "Essay Writing & Précis",
      description:
        "Master the art of argumentation, structure, and compression.",
      icon: <PenTool className="h-6 w-6 text-white" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Current Affairs & Pak Affairs",
      description:
        "In-depth analysis of national and international geopolitical dynamics.",
      icon: <Globe className="h-6 w-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "General Science & Ability",
      description:
        "Comprehensive coverage of scientific principles and logical reasoning.",
      icon: <Brain className="h-6 w-6 text-white" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Islamic Studies & Ethics",
      description: "Understanding core concepts with contemporary relevance.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and personality development sessions.",
      icon: <Mic className="h-6 w-6 text-white" />,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Compulsory Review",
      description: "Final crash course and review of all compulsory subjects.",
      icon: <CheckCircle2 className="h-6 w-6 text-white" />,
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Comprehensive <span className="text-primary">Curriculum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A structured roadmap designed to cover every aspect of the CSS & PMS
            syllabus, ensuring you are exam-ready.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-3xl bg-muted/20 border border-border/50 hover:bg-muted/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${point.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
