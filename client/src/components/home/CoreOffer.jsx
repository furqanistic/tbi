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
    <section className="py-20 sm:py-24 bg-background relative overflow-hidden border-y border-border/40">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-24"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                What's Included
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                Everything you need to <span className="text-primary">Succeed</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                A comprehensive preparation ecosystem designed to take you from
                basics to mastery with expert guidance at every step.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {coreFeatures.map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <FeatureItem feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature }) {
  return (
    <div className="group p-3 sm:p-5 rounded-2xl border border-border/40 sm:border-transparent hover:border-border/60 hover:bg-card/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
      <div
        className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${feature.bg} ${feature.color} transition-transform group-hover:scale-110 duration-300`}
      >
        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <div className="space-y-1">
        <h4 className="text-sm sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
          {feature.title}
        </h4>
        <p className="text-[11px] sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
