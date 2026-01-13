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
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Syllabus <span className="text-primary">Breakdown</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A meticulously crafted roadmap designated to take you from a
            beginner to a competitive aspirant in 5 months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="module-1" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent mb-8">
              {modules.map((module) => (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="px-6 py-3 rounded-full text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all duration-300 hover:bg-primary/5 hover:text-primary"
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/20 dark:border-white/5 shadow-xl md:min-h-[300px] flex flex-col md:flex-row md:items-center gap-8 md:gap-16 relative overflow-hidden group"
                >
                  {/* Subtle pulsing glow behind the card content */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] max-h-[300px] bg-primary/20 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="md:w-1/3">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 text-primary leading-tight">
                      {module.title}
                    </h3>
                    <div className="h-1.5 w-20 bg-primary/30 rounded-full" />
                  </div>

                  <div className="md:w-2/3">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-border/50"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-medium leading-relaxed">
                            {topic}
                          </span>
                        </li>
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
