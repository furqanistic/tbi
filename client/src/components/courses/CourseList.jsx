// File: client/src/components/courses/CourseList.jsx
import React from "react";
import CourseCard from "./CourseCard";
import { motion as Motion, AnimatePresence } from "motion/react";
import { SearchX } from "lucide-react";

const CourseList = ({ courses, searchQuery, columnsPerRow = 4 }) => {
  // Simple filter if searchQuery is provided (for backwards compatibility)
  const filteredCourses = searchQuery
    ? courses.filter((course) => {
        const searchLower = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(searchLower) ||
          course.category.toLowerCase().includes(searchLower) ||
          course.instructor.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower)
        );
      })
    : courses;

  // Dynamic grid class based on columnsPerRow
  const gridColsClass =
    {
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[columnsPerRow] || "lg:grid-cols-4";

  if (filteredCourses.length === 0) {
    return (
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-6">
          <SearchX className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-3">No courses found</h3>
        <p className="text-muted-foreground max-w-md">
          We couldn't find any courses matching your search. Try adjusting your
          filters or search for something else, like "ICS" or "CSS".
        </p>
      </Motion.div>
    );
  }

  return (
    <div className={`grid grid-cols-2 ${gridColsClass} gap-3 md:gap-6`}>
      <AnimatePresence mode="popLayout">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            columnsPerRow={columnsPerRow}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CourseList;
