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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the program along with general
            inquiries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-background/40 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/20 dark:border-white/5 shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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
