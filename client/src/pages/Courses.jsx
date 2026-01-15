// File: client/src/pages/Courses.jsx
import CourseHero from "@/components/courses/CourseHero";
import CourseList from "@/components/courses/CourseList";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/data/coursesData";
import { ArrowUpDown } from "lucide-react";
import { motion as Motion } from "motion/react";
import React, { useMemo, useState } from "react";

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Filter and sort courses
  const filteredAndSortedCourses = useMemo(() => {
    let result = [...courses];

    // Filter by category
    if (activeCategory) {
      result = result.filter((course) =>
        course.category.toLowerCase().includes(activeCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.category.toLowerCase().includes(searchLower) ||
          course.instructor.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        result.sort((a, b) => b.students - a.students);
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section with Search */}
      <CourseHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Courses List Section */}
      <section className="px-6 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with Sorting */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                {activeCategory
                  ? `${activeCategory.toUpperCase()} Courses`
                  : "All Courses"}
              </h2>
              <p className="text-muted-foreground">
                {filteredAndSortedCourses.length} course
                {filteredAndSortedCourses.length !== 1 ? "s" : ""} available
                {searchQuery && (
                  <span>
                    {" "}
                    for "
                    <span className="text-primary font-medium">
                      {searchQuery}
                    </span>
                    "
                  </span>
                )}
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 self-end md:self-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowUpDown className="h-4 w-4" />
                <span className="hidden sm:inline">Sort by:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 rounded-sm border-muted-foreground/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Motion.div>

          {/* Course Grid */}
          <CourseList courses={filteredAndSortedCourses} searchQuery="" />
        </div>
      </section>
    </main>
  );
}

export default Courses;
