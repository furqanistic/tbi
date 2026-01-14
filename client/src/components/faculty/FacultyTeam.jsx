// File: client/src/components/faculty/FacultyTeam.jsx
import { motion } from "motion/react";
import { Linkedin, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamMember = ({
  name,
  role,
  description,
  image,
  experience,
  mentored,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 last:mb-0"
  >
    {/* Left: Image / Profile Visual */}
    <div className="lg:w-1/2 relative group">
      <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-blue-500/30 rounded-[3rem] transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
      <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/10 aspect-4/5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-110"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-8 left-8 right-8 bg-background/60 dark:bg-zinc-900/60 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-inner">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                Experience
              </p>
              <p className="text-lg font-black text-foreground">{experience}</p>
            </div>
          </div>
          <div className="w-px h-10 bg-border/50" />
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 shadow-inner">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                Mentored
              </p>
              <p className="text-lg font-black text-foreground">{mentored}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Content */}
    <div className="lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">
          Member of Faculty
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground leading-tight">
          {name}
        </h2>
        <h3 className="text-2xl md:text-3xl text-muted-foreground/80 font-bold mb-10 tracking-tight">
          {role}
        </h3>

        <div className="space-y-8 text-xl text-muted-foreground/90 leading-relaxed mb-12 font-medium">
          {description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="rounded-full px-12 py-8 text-xl font-black shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] transition-all hover:-translate-y-1 active:scale-95"
          >
            View Full Profile
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-12 py-8 text-xl font-black gap-3 border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all hover:-translate-y-1 active:scale-95"
          >
            <Linkedin className="h-6 w-6" />
            LinkedIn
          </Button>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const FacultyTeam = () => {
  const team = [
    {
      name: "Shahrukh Mustafa",
      role: "CSS/PMS Specialist & Career Coach",
      description: [
        "With over a decade of experience in the competitive exam landscape, Shahrukh has established himself as a beacon of guidance for aspiring civil servants.",
        "Known for his prediction accuracy and ability to simplify complex geopolitical concepts, he has helped thousands of students secure top positions in FPSC and PPSC examinations.",
      ],
      image: "/images/team/shahrukh.jpeg",
      experience: "12+ Years",
      mentored: "5000+",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
            Meet the <span className="text-primary italic">Mentors</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            Our expert faculty is committed to your success.
          </p>
        </div>
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default FacultyTeam;
