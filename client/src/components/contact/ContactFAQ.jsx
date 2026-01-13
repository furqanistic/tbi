import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When do the new CSS/PMS preparation sessions start?",
    answer:
      "New batches typically commence every two months. You can check our latest session schedule in the 'Courses' section or talk to our counselors via the lead form above for the exact start date of the next cohort.",
  },
  {
    question: "How do the weekly mock assessments work?",
    answer:
      "Every weekend, we conduct grand mocks designed on the most recent UPSC/CSS patterns. These are evaluated by expert faculty, and you receive detailed feedback within 48 hours to help you refine your answer-writing skills.",
  },
  {
    question: "Are recorded lectures available if I miss a live session?",
    answer:
      "Yes, every live session is recorded and uploaded to our student portal within a few hours. You will have 24/7 access to these recordings throughout your enrollment period for unlimited revision.",
  },
  {
    question: "How can I schedule a 1-on-1 mentorship session?",
    answer:
      "Enrolled students can book mentorship slots directly through the student dashboard. These sessions are designed to identify your weak areas and provide personalized strategies for improvement.",
  },
  {
    question: "What is the fee structure for the full preparation package?",
    answer:
      "We offer various tiers depending on your needs. Please submit your details in the contact form, and our counselors will send you the detailed fee prospectus along with any ongoing scholarship opportunities.",
  },
];

export function ContactFAQ() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            Find Quick <span className="text-primary">Answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about our preparation programs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 bg-zinc-900/5 dark:bg-zinc-900/40 backdrop-blur-xl rounded-2xl px-6 border overflow-hidden transition-all hover:border-primary/30"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-semibold hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
