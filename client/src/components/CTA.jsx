// File: client/src/components/CTA.jsx
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative isolate overflow-hidden bg-white/40 dark:bg-primary/5 backdrop-blur-3xl px-8 py-20 rounded-[3.5rem] shadow-2xl border border-primary/10 sm:px-16 lg:px-24 group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {/* Subtle Dot Pattern Overlay */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.2] dark:opacity-[0.1] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="relative space-y-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in zoom-in duration-700 delay-500">
              <Sparkles className="w-3 h-3 fill-current" />
              Limited Seats Available
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              Ready to Secure Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/80">
                Future Allocation?
              </span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-800">
              Join Pakistan's premier mentorship platform and turn your CSS &
              PMS aspirations into achievement. Expert guidance is just a click
              away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000">
              <button className="w-full sm:w-auto group relative px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 hover:bg-muted hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group shadow-sm">
                Contact Us
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform text-primary" />
              </button>
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
        </div>
      </div>
    </section>
  );
}
