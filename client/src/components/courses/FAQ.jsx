// File: client/src/components/courses/FAQ.jsx
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the duration of the CSS/PMS session?",
      answer:
        "The comprehensive session spans 5 months, covering all compulsory subjects and optional subject selection guidance. It includes regular mock exams and evaluation.",
    },
    {
      question: "Are the classes Live or Recorded?",
      answer:
        "We follow a hybrid model. All classes are conducted Live via Zoom for real-time interaction. Recordings are uploaded to the portal within 24 hours for revision.",
    },
    {
      question: "Can I pay the fee in installments?",
      answer:
        "Yes, we offer a flexible 2-installment plan for students who require financial accommodation. Please contact our support team for details.",
    },
    {
      question: "Does the course include Mock Exams?",
      answer:
        "Absolutely. We conduct weekly mini-mocks and a final Grand Mock series that replicates the actual exam environment to ensure you are fully prepared.",
    },
    {
      question: "How do I get my essays evaluated?",
      answer:
        "Students submit their essays through our Learning Management System (LMS). Our expert mentors provide detailed, annotated feedback within 48-72 hours.",
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
            Help Center
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to know about the program along with general
            inquiries.
          </p>
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

export default FAQ;
