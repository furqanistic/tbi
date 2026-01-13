// File: client/src/components/home/Hero.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BookOpen,
  Briefcase,
  FileText,
  Globe,
  GraduationCap,
  Plus,
  School,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const categories = [
  {
    title: "CA",
    courses: 59,
    enrollments: 263265,
    color: "text-green-600 dark:text-green-500",
    bgColor: "bg-green-50 dark:bg-green-500/10",
    icon: <Briefcase className="w-5 h-5 text-green-600 dark:text-green-500" />,
  },
  {
    title: "SBI",
    courses: 36,
    enrollments: 5721,
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
    icon: (
      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-500" />
    ),
  },
  {
    title: "ACCA",
    courses: 3,
    enrollments: 286,
    color: "text-purple-600 dark:text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-500/10",
    icon: <FileText className="w-5 h-5 text-purple-600 dark:text-purple-500" />,
  },
  {
    title: "MDCAT",
    courses: 14,
    enrollments: 600341,
    color: "text-red-500 dark:text-red-500",
    bgColor: "bg-red-50 dark:bg-red-500/10",
    icon: <Stethoscope className="w-5 h-5 text-red-500 dark:text-red-500" />,
  },
  {
    title: "Entry Tests",
    courses: 20,
    enrollments: 70674,
    color: "text-blue-500 dark:text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
    icon: <Plus className="w-5 h-5 text-blue-500 dark:text-blue-500" />,
  },
  {
    title: "CSS & PMS",
    courses: 92,
    enrollments: 794750,
    color: "text-orange-600 dark:text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
    icon: <Globe className="w-5 h-5 text-orange-600 dark:text-orange-500" />,
  },
  {
    title: "O'Level & A'Level",
    courses: 19,
    enrollments: 32388,
    color: "text-cyan-600 dark:text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
    icon: <School className="w-5 h-5 text-cyan-600 dark:text-cyan-500" />,
  },
  {
    title: "FSc & Matric",
    courses: 69,
    enrollments: 514441,
    color: "text-orange-600 dark:text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
    icon: <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-500" />,
  },
];

export function Hero() {
  return (
    <section className="relative bg-background flex flex-col pt-32 lg:pt-36 pb-12 overflow-hidden min-h-screen">
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* 1. Carousel Section - NOW AT TOP */}
      <div className="container mx-auto px-4 relative z-20 mb-16 animate-in slide-in-from-top-10 duration-700">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 pb-4">
            {categories.map((cat, index) => (
              <CarouselItem
                key={index}
                className="pl-3 basis-10/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="group relative bg-card hover:bg-accent/50 rounded-sm p-4 border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center ${cat.bgColor} ${cat.color} group-hover:scale-105 transition-transform`}
                    >
                      {cat.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {cat.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
                    <span>{cat.courses} Courses</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground" />
                    <span>{cat.enrollments.toLocaleString()} Students</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Mobile Controls / Indicators could go here if needed, but 'peek' is often sufficient */}
          <div className="flex gap-2 justify-end mt-2 pr-4 lg:hidden">
            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
            <CarouselNext className="static translate-y-0 h-8 w-8" />
          </div>
          <CarouselPrevious className="hidden lg:flex -left-4 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background border-border" />
          <CarouselNext className="hidden lg:flex -right-4 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background border-border" />
        </Carousel>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Excellence in Education
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Master Your Future with{" "}
              <span className="text-blue-600 dark:text-blue-500">
                Expert Guidance
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join almost 2 million students learning with TBI. Expert-led
              interactive classes for competitive exams and academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 lg:mb-0">
              <Button className="rounded-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-500/20 text-white">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="rounded-full h-12 px-8 text-base border-border hover:bg-accent text-foreground"
              >
                View Success Stories
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="hidden lg:flex gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-foreground">1.9M+</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Students
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.8/5</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Rating
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">300+</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Instructors
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px]">
              {/* Glow effect behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
              <img
                src={heroImage}
                alt="TBI Education Platform"
                className="w-full h-auto object-contain drop-shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
