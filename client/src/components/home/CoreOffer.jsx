import {
  Users,
  Video,
  PlayCircle,
  FileCheck,
  MessageSquare,
  BookOpen,
  Award,
  Compass,
  ArrowRight,
} from "lucide-react";

const coreFeatures = [
  {
    title: "Live Interactive Classes",
    description:
      "Real-time engagement with expert faculty to resolve queries instantly and build solid concepts.",
    icon: Video,
    color: "bg-blue-500",
  },
  {
    title: "Recorded Lectures",
    description:
      "Access our comprehensive library of recorded sessions anytime, anywhere for flexible revision.",
    icon: PlayCircle,
    color: "bg-purple-500",
  },
  {
    title: "Weekly Mock Tests",
    description:
      "Regular assessments including Grand Mocks to simulate real exam environments and track progress.",
    icon: FileCheck,
    color: "bg-amber-500",
  },
  {
    title: "1-to-1 Personalized Feedback",
    description:
      "Direct mentorship and detailed evaluation of your performance to double down on strengths.",
    icon: MessageSquare,
    color: "bg-emerald-500",
  },
  {
    title: "Comprehensive Study Material",
    description:
      "Curated notes, sample papers, and study plans tailored for CSS/PMS success.",
    icon: BookOpen,
    color: "bg-rose-500",
  },
  {
    title: "Subject Specialist Mentorship",
    description:
      "Learn from toppers and subject specialists who bring years of proven expertise.",
    icon: Award,
    color: "bg-indigo-500",
  },
  {
    title: "Strategy & Guidance",
    description:
      "Exclusive workshops on paper attempting techniques and CSS/PMS preparation strategies.",
    icon: Compass,
    color: "bg-cyan-500",
  },
  {
    title: "Student Community",
    description:
      "Join an exclusive circle of like-minded aspirants for collaborative learning and support.",
    icon: Users,
    color: "bg-orange-500",
  },
];

export function CoreOffer() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-size-[40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
            What's Included
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
              Core Offer
            </span>{" "}
            for Success
          </h3>
          <p className="text-muted-foreground text-lg font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            A comprehensive, all-in-one preparation package designed to
            transform your CSS & PMS journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl border border-primary/5 bg-background hover:bg-white dark:hover:bg-primary/5 transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] card-parent overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card Accent Glow */}
              <div
                className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.color}`}
              ></div>

              <div className="relative z-10 space-y-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.color} bg-opacity-10 text-foreground`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </div>

              {/* Decorative border bottom */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
