import { Search, UserPlus, BookOpen, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Explore Courses",
    description:
      "Browse our specialized CSS & PMS preparation packages tailored for different levels.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Join the Batch",
    description:
      "Enroll in your chosen course and get immediate access to our premium student portal.",
    icon: UserPlus,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Master Concepts",
    description:
      "Attend live interactive classes and engage with top-tier faculty for conceptual clarity.",
    icon: BookOpen,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Qualify & Excel",
    description:
      "Regular mock tests and strategy workshops ensure you are fully prepared to succeed.",
    icon: Trophy,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background/50 relative overflow-hidden border-y border-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
            The Process
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
              Works
            </span>
          </h3>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Your journey from an aspirant to a successful candidate follows a
            proven, structured path.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-y-1/2 z-0 animate-in fade-in duration-1000 delay-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="relative">
                  <div
                    className={`w-20 h-20 rounded-3xl ${step.bg} flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm border border-primary/5`}
                  >
                    <step.icon className={`w-10 h-10 ${step.color}`} />

                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg border-2 border-background">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Pulse Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl ${step.bg} animate-ping opacity-20 group-hover:block hidden`}
                  ></div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-62.5 mx-auto font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow (Vertical) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden py-4 text-primary/30">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
