import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";

const TeamMember = ({ name, role, quote, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-muted mb-6">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
        <p className="italic mb-6 text-sm md:text-base leading-relaxed">
          "{quote}"
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-1">{name}</h3>
    <p className="text-primary font-medium">{role}</p>
  </motion.div>
);

const AboutTeam = () => {
  const team = [
    {
      name: "Shahrukh Mustafa",
      role: "Co-Founder & CEO",
      quote:
        "Our goal is to make quality education so accessible that brilliance becomes the standard, not the exception.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      delay: 0.1,
    },
    {
      name: "Ammar Ali Ayub",
      role: "Co-Founder & COO",
      quote:
        "Efficiency in learning is about more than just speed—it's about depth, retention, and the joy of discovery.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      delay: 0.2,
    },
    {
      name: "Hassan Bin Rizwan",
      role: "Co-Founder & Academic Head",
      quote:
        "We are bridging the gap between traditional wisdom and digital-first innovation to empower the youth.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Visionaries at the Helm
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the educators and innovators crafting the TBI experience. A
              team dedicated to redefining Pakistan's educational landscape.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-border mx-12 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
