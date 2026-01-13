// File: client/src/components/resources/ResourceCategories.jsx
import React from "react";
import { History, FileText, Trophy, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResourceCategories() {
  const categories = [
    {
      title: "Past Papers Vault",
      description:
        "20 years of CSS & PMS papers categorized by year and subject.",
      icon: <History className="w-6 h-6 text-blue-500" />,
      link: "#",
    },
    {
      title: "Official Syllabus",
      description:
        "Latest FPSC & PPSC guidelines and subject-wise syllabus PDFs.",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      link: "#",
    },
    {
      title: "Toppers' Library",
      description:
        "Recommended books, study plans, and high-scoring essay outlines.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-zinc-950/40 backdrop-blur-md border-border/50 hover:border-blue-500/50 transition-colors duration-300 rounded-lg overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-900/50 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                  {cat.icon}
                </div>
                <CardTitle className="text-xl font-bold">{cat.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-base">
                  {cat.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-500 hover:text-blue-400 font-semibold group-hover:underline-offset-4"
                >
                  Explore Archive{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default ResourceCategories;
