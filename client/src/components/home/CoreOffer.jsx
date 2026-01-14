// File: client/src/components/home/CoreOffer.jsx
import React from "react";
import {
  Video,
  PlayCircle,
  FileCheck,
  MessageSquare,
  BookOpen,
  Award,
  Compass,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const coreFeatures = [
  {
    title: "Live Interactive Classes",
    description: "Expert faculty engagement for instant query resolution.",
    icon: Video,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Recorded Lectures",
    description: "Comprehensive library access for flexible revision anytime.",
    icon: PlayCircle,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Weekly Mock Tests",
    description: "Regular assessments to simulate real exam environments.",
    icon: FileCheck,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "1-to-1 Feedback",
    description: "Direct mentorship to double down on your strengths.",
    icon: MessageSquare,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Study Material",
    description: "Curated notes and plans tailored for success.",
    icon: BookOpen,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Expert Mentorship",
    description: "Learn from toppers and subject specialists.",
    icon: Award,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Strategy Workshops",
    description: "Exclusive sessions on paper attempting techniques.",
    icon: Compass,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Student Community",
    description: "Collaborative learning with like-minded aspirants.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function CoreOffer() {
  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden border-y border-border/40">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
            What's Included
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our <span className="text-primary">Core Offerings</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto leading-relaxed">
            A minimalist look at the powerful features that drive your success.
          </p>
        </motion.div>

        {/* Badge Grid: 2 Col (Mobile) -> 4 Cols (Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto"
        >
          {coreFeatures.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <BadgeItem feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BadgeItem({ feature }) {
  return (
    <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 p-4 rounded-xl border border-border/40 bg-card/20 hover:bg-card/40 hover:border-primary/20 transition-all duration-300 h-full">
      <div
        className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${feature.bg} ${feature.color} transition-transform group-hover:scale-110 duration-300`}
      >
        <feature.icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <h4 className="text-[13px] sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
          {feature.title}
        </h4>
        <p className="text-[11px] sm:text-[12px] text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
