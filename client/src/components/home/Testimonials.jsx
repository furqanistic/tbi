import { Star, Quote, Award } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "LUMS '28",
    content:
      "The personalized feedback on my essays was a game-changer. I never thought I could score 1500+ on the SAT until I joined TBI.",
    achievement: "1520 SAT Score",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha&backgroundColor=c0aede",
  },
  {
    name: "Bilal Ahmed",
    role: "IBA '27",
    content:
      "TBI's mock exams are harder than the actual test, which made the real exam feel like a breeze. Truly grateful for the mentorship.",
    achievement: "Accepted into IBA",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal&backgroundColor=b6e3f4",
  },
  {
    name: "Fatima Ali",
    role: "NUST '28",
    content:
      "The live sessions were incredibly interactive. The mentors make sure you understand every concept before moving forward.",
    achievement: "Top 1% in NET",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=ffdfbf",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Trusted by Pakistan's <br className="hidden md:block" />
            <span className="text-primary relative inline-block">
              Top Students
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="opacity-50"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of students who have secured admissions in top
            universities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/50 dark:bg-black/50 border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Achievement
                </span>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
