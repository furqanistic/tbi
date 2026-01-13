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

export function CoreOffer() {
  return (
    <section className="py-20 lg:py-24 bg-background/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80">
            What's Included
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our <span className="text-primary">Core Offer</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            All-in-one preparation package designed for your success.
          </p>
        </div>

        {/* Responsive Grid: 1 Col (Mobile) -> 2 Cols (Tablet) -> 3 Cols (Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {coreFeatures.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="group h-full md:p-6 p-4 rounded-lg border border-border/60 bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 flex flex-col items-start gap-4 justify-between">
      <div className="space-y-4 w-full">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.bg} ${feature.color} transition-transform group-hover:scale-105`}
        >
          <feature.icon className="w-6 h-6" />
        </div>

        <div>
          <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {feature.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="pt-2 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span>Details</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
}
