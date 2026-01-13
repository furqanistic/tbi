// File: client/src/components/courses/Instructor.jsx
import { motion } from "motion/react";
import { Linkedin, Twitter, Award, GraduationCap, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Instructor = () => {
  // Placeholder image URL - replace with actual instructor image
  const instructorImage =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop";

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left: Image / Profile Visual */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10">
              <img
                src={instructorImage}
                alt="Lead Instructor"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Experience
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      12+ Years
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Mentored
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      5000+ Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Lead Mentor
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                Sir Furqan
              </h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
                CSS/PMS Specialist & Career Coach
              </h3>

              <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed mb-10">
                <p>
                  With over a decade of experience in the competitive exam
                  landscape, Sir Bilal has established himself as a beacon of
                  guidance for aspiring civil servants. His unique teaching
                  methodology blends{" "}
                  <span className="text-foreground font-semibold">
                    analytical depth
                  </span>{" "}
                  with practical application.
                </p>
                <p>
                  Known for his prediction accuracy and ability to simplify
                  complex geopolitical concepts, he has helped thousands of
                  students secure top positions in FPSC and PPSC examinations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-bold h-12 shadow-lg shadow-primary/20"
                >
                  View Full Profile
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 gap-2 hover:text-blue-600 hover:border-blue-600/30"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;
