// File: client/src/components/Hero.jsx
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero_image.png";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col lg:flex-row items-center justify-between px-6 lg:px-16 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Left Content: Text & CTAs */}
      <div className="flex-1 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Enrollment Open for 2026 Season
        </div>

        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Redefining{" "}
          <span className="text-serif italic font-medium">Modernity</span> in{" "}
          <span className="text-primary italic text-serif">CSS & PMS</span>{" "}
          Prep.
        </h1>

        <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          Your pathway to public service excellence through expert-led
          interactive classes, comprehensive recorded resources, and
          personalized feedback.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <Button className="rounded-full bg-primary px-10 py-7 font-bold text-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.6)] transition-all hover:-translate-y-1 active:scale-95 text-lg">
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-primary/20 bg-background/50 backdrop-blur-sm px-10 py-7 font-bold text-foreground hover:bg-primary/5 transition-all hover:border-primary/40 text-lg"
          >
            View Packages
          </Button>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary/10 pt-8 max-w-lg mx-auto lg:mx-0 animate-in fade-in duration-1000 delay-1000">
          <div>
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Success Rate
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Allocated
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Support
            </div>
          </div>
        </div>
      </div>

      {/* Right Content: Professional Image */}
      <div className="flex-1 relative mt-16 lg:mt-0 lg:ml-12 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
        <div className="relative z-10 w-full max-w-150 mx-auto group">
          {/* Main Image Container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]">
            <img
              src={heroImage}
              alt="Professional Aspirant"
              className="w-full h-auto object-cover"
            />
            {/* Glassy Overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating Card UI 1 */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-bounce duration-3000 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
                  Live Sessions
                </div>
                <div className="text-sm font-extrabold">Active Now</div>
              </div>
            </div>
          </div>

          {/* Floating Card UI 2 */}
          <div className="absolute -bottom-8 -left-8 glass p-5 rounded-3xl shadow-2xl hidden md:block animate-in fade-in slide-in-from-left-8 delay-1000">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold">
                  Total Mentors
                </div>
                <div className="text-xl font-black text-primary">
                  50+ Experts
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Accent for image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-[3rem] -z-10 rotate-3 scale-105" />
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
}
