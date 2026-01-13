import { motion } from "motion/react";
import { Video, PlayCircle, ClipboardCheck, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description:
      "Real-time learning with experienced faculty and instant doubt clearing.",
  },
  {
    icon: PlayCircle,
    title: "Anytime Revision",
    description:
      "Access our complete library of recorded lectures for flexible learning.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Mock Assessments",
    description: "Regular grand mocks designed on the latest CSS/PMS patterns.",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Personalized Feedback",
    description: "Individual attention to identify and fix your weak areas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function PackageFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            Our Comprehensive{" "}
            <span className="text-primary">Preparation Package</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Tailored for CSS & PMS aspirants to ensure conceptual clarity and
            exam success.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-border/50 bg-zinc-900/5 dark:bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]">
                {/* Subtle Border Beam Effect (Tailwind 4 approach with pseudo-element style) */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
