// File: client/src/components/about/AboutMission.jsx
import { motion } from "motion/react";
import { Accessibility, Zap, Target } from "lucide-react";

const PillarCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-8 rounded-[2rem] bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const AboutMission = () => {
  const pillars = [
    {
      icon: Accessibility,
      title: "Accessibility",
      description:
        "We believe education is a fundamental right. Our platform is designed to be accessible to every student, regardless of their location or socioeconomic background.",
      delay: 0.1,
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "By combining advanced pedagogy with cutting-edge technology, we create learning experiences that are not just informative, but transformative and engaging.",
      delay: 0.2,
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "We don't just measure enrollment; we measure success. Our focus is on creating tangible outcomes—better grades, secured jobs, and empowered futures.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our Core Pillars
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything we do is guided by three fundamental principles that
            ensure we stay true to our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
