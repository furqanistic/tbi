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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 last:mb-0"
  >
    {/* Left: Image / Profile Visual with rounded-sm */}
    <div className="lg:w-1/2 relative group w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-blue-500/20 rounded-sm transform rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
      <div className="relative overflow-hidden rounded-sm shadow-xl border border-border/50 aspect-[4/5] bg-muted/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-110"
        />

        {/* Floating Badge - compact & rounded-sm */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-sm border border-border shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                Experience
              </p>
              <p className="text-sm font-bold text-foreground">{experience}</p>
            </div>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                Mentored
              </p>
              <p className="text-sm font-bold text-foreground">{mentored}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
          Mentor Profile
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground leading-tight">
          {name}
        </h2>
        <h3 className="text-lg md:text-xl text-primary font-semibold mb-6 tracking-tight">
          {role}
        </h3>

        <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8 font-medium max-w-lg mx-auto lg:mx-0">
          {description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            className="rounded-full h-12 px-10 text-base font-bold transition-all hover:-translate-y-1 active:scale-95 shadow-lg shadow-primary/20"
          >
            Full Profile
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full h-12 px-10 text-base font-bold gap-2 border-border hover:bg-accent transition-all hover:-translate-y-1 active:scale-95"
          >
            <Linkedin className="h-4 w-4" />
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
      role: "CSS/PMS Specialist",
      description: [
        "With over a decade of experience, Shahrukh is a beacon of guidance for aspiring civil servants.",
        "Known for his prediction accuracy and simplifying complex geopolitics, he has helped thousands secure top positions.",
      ],
      image: "/images/team/shahrukh.jpeg",
      experience: "12+ Years",
      mentored: "5000+",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
            Our Team
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Meet the <span className="text-primary">Mentors</span>
          </h3>
        </div>
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default FacultyTeam;
