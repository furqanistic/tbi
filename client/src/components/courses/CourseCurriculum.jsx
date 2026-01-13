import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseCurriculum = () => {
  const modules = [
    {
      id: "module-1",
      label: "Module 1",
      title: "Foundation & Essay Writing",
      topics: [
        "Deconstructing the Essay Prompt",
        "The Art of Outlining",
        "Thesis Statement Formulation",
        "Paragraph Construction & Cohesion",
        "Grammar & Syntax Essentials",
      ],
    },
    {
      id: "module-2",
      label: "Module 2",
      title: "Précis & Composition",
      topics: [
        "Précis Writing Techniques",
        "Reading Comprehension Mastery",
        "Vocabulary Building (GRE/SAT)",
        "Idioms & Phrasal Verbs",
        "Translation Skills",
      ],
    },
    {
      id: "module-3",
      label: "Module 3",
      title: "Current & Pakistan Affairs",
      topics: [
        "Post-Partition History Analysis",
        "Constitutional Development in Pakistan",
        "Contemporary Global Geopolitics",
        "Economy & Foreign Policy Analysis",
        "Climate Change & Non-Traditional Security",
      ],
    },
    {
      id: "module-4",
      label: "Module 4",
      title: "Islamic Studies & Ethics",
      topics: [
        "Fundamental Beliefs & Practices",
        "Islamic Governance Model",
        "Islam & Modern World Challenges",
        "Comparative Religions (for Non-Muslims)",
        "Rights & Duties in Islam",
      ],
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Learning Path
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Syllabus{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Breakdown
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            A meticulously crafted roadmap designated to take you from a
            beginner to a competitive aspirant in 5 months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <Tabs defaultValue="module-1" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-4 bg-transparent mb-12">
              {modules.map((module) => (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="px-8 py-4 rounded-2xl text-base font-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=active]:border-primary data-[state=active]:shadow-2xl transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                >
                  {module.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent
                key={module.id}
                value={module.id}
                className="mt-0 focus-visible:ring-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-background/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-border/50 shadow-2xl flex flex-col md:flex-row md:items-center gap-12 md:gap-20 relative overflow-hidden group"
                >
                  {/* Subtle pulsing glow behind the card content */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-125 max-h-125 bg-primary/10 blur-[120px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <div className="md:w-2/5">
                    <h3 className="text-3xl md:text-5xl font-black mb-6 text-foreground leading-[1.1] tracking-tighter">
                      {module.title}
                    </h3>
                    <div className="h-2 w-24 bg-primary rounded-full mb-8 shadow-sm" />
                    <p className="text-muted-foreground/80 font-medium text-lg leading-relaxed">
                      Master the core concepts and gain the competitive edge
                      with our specialized training module.
                    </p>
                  </div>

                  <div className="md:w-3/5">
                    <ul className="grid grid-cols-1 gap-5">
                      {module.topics.map((topic, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="flex items-center gap-5 p-5 rounded-2xl bg-muted/30 hover:bg-muted/60 transition-all duration-300 border border-transparent hover:border-primary/20 group/item"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                          <span className="text-foreground font-bold text-lg leading-tight">
                            {topic}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
