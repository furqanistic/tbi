// File: client/src/components/resources/ResourcesHero.jsx
import React from "react";
import { Search, Filter, BookOpen, Clock, Download } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
function ResourcesHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase"
      >
        The Digital Vault for <br className="hidden md:block" />
        <span className="text-blue-600 dark:text-blue-500">CSS & PMS</span>{" "}
        Aspirants
      </motion.h1>
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-medium"
      >
        Instant access to updated past papers, official syllabus, and
        topper-recommended study material.
      </motion.p>
      {/* Search Hub - Soft Modern Refactor (Rounded-LG & Gap-3) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-3 w-full max-w-3xl mb-16"
      >
        {/* Search Input Container */}
        <div className="flex-1 relative flex items-center w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
            <Search className="w-5 h-5" />
          </div>
          <Input
            type="text"
            placeholder="Search resource vault..."
            className="pl-10 h-12 rounded-sm border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md focus-visible:ring-blue-500/20 text-base shadow-sm"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Button */}
          <Button className="h-12 px-8 font-semibold bg-blue-600/50 hover:dark:bg-accent/50 text-white shadow-sm cursor-pointer transition-all flex-1 md:flex-none">
            Search
          </Button>
        </div>
      </motion.div>

      {/* Stats Row - Refined with Separators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-wrap md:justify-center md:items-center gap-4 md:gap-8 text-center"
      >
        {[
          {
            label: "Downloads",
            value: "10,000+",
            icon: <Download className="w-5 h-5" />,
          },
          {
            label: "Past Papers",
            value: "20 Years",
            icon: <Clock className="w-5 h-5" />,
          },
          {
            label: "Subject Guides",
            value: "50+",
            icon: <BookOpen className="w-5 h-5" />,
          },
        ].map((stat, i, arr) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-3 group px-4">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
            {i !== arr.length - 1 && (
              <Separator
                orientation="vertical"
                className="h-10 hidden md:block"
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}

export default ResourcesHero;
