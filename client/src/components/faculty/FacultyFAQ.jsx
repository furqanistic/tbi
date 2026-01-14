// File: client/src/components/faculty/FacultyFAQ.jsx
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FacultyFAQ = () => {
  const faqs = [
    {
      question: "Who are the instructors at TBI?",
      answer:
        "Our faculty consists of CSS/PMS specialists, experienced civil servants, and subject matter experts with 10+ years of coaching experience.",
    },
    {
      question: "Can I get one-on-one mentorship?",
      answer:
        "Yes, we offer personalized mentorship sessions for essay evaluation, interview preparation, and personality grooming.",
    },
    {
      question: "How do I communicate with the faculty?",
      answer:
        "Students can interact with faculty during live sessions, via our dedicated LMS forums, and through scheduled Q&A hours.",
    },
    {
      question: "Is the faculty available for career counseling?",
      answer:
        "Absolutely. We provide comprehensive career counseling and subject selection guidance for both CSS and PMS aspirants.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-muted/5">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Faculty Support
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Questions about our{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Mentors
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-background rounded-[2.5rem] p-8 md:p-12 border border-border/50 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-muted/30 rounded-2xl px-6 transition-all duration-300 data-[state=open]:bg-muted/50 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-primary transition-all py-6 no-underline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/90 text-lg leading-relaxed pb-6 pr-4 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultyFAQ;
