// File: client/src/components/home/CTA.jsx
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/5 dark:to-primary/10 border border-border/50 dark:border-border/30 rounded-2xl sm:rounded-3xl px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 text-center shadow-sm">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl flex flex-col items-center gap-6 sm:gap-8">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/50 dark:border-border/30 text-xs font-semibold text-primary">
              <Sparkles className="w-3 h-3" />
              <span>Limited Seats Available</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center leading-tight">
              Ready to Secure Your <span className="text-primary">Future?</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-xl px-2">
              Join Pakistan's premier mentorship platform. Expert guidance is
              just a click away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base bg-background/50 dark:bg-background/30 border-border/50 dark:border-border/30 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
