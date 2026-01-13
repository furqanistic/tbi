import { motion } from "motion/react";
import { GraduationCap, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTACard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  variant,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, x: delay > 0.2 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`p-10 md:p-16 rounded-[3rem] ${
      variant === "primary"
        ? "bg-primary text-primary-foreground"
        : "bg-zinc-950 text-white"
    } flex flex-col justify-between h-full relative overflow-hidden group`}
  >
    <div className="relative z-10">
      <div
        className={`w-16 h-16 rounded-2xl ${
          variant === "primary" ? "bg-white/20" : "bg-primary/20"
        } flex items-center justify-center mb-8`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
        {title}
      </h3>
      <p
        className={`text-lg mb-10 leading-relaxed ${
          variant === "primary" ? "text-primary-foreground/80" : "text-zinc-400"
        }`}
      >
        {description}
      </p>
    </div>

    <div className="relative z-10">
      <Button
        size="lg"
        variant={variant === "primary" ? "secondary" : "default"}
        className="rounded-full px-10 py-7 text-lg font-bold group"
      >
        {buttonText}
        <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Button>
    </div>

    {/* Background Decorative Element */}
    <div
      className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl ${
        variant === "primary" ? "bg-white/10" : "bg-primary/10"
      } group-hover:scale-125 transition-transform duration-700`}
    />
  </motion.div>
);

const AboutCTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-125">
          <CTACard
            icon={GraduationCap}
            title="Start Your Learning Journey Today"
            description="Access premium courses, expert mentorship, and join a community of thousands of successful students."
            buttonText="Explore Courses"
            variant="primary"
            delay={0.1}
          />
          <CTACard
            icon={Users}
            title="Impact Lives through Teaching"
            description="Share your expertise with the next generation. Join our elite force of mentors and redefine education."
            buttonText="Become a Mentor"
            variant="dark"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
