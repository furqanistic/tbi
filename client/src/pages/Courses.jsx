import React from "react";
import CourseHero from "@/components/courses/CourseHero";
import CourseStats from "@/components/courses/CourseStats";

function Courses() {
  return (
    <main className="pb-20">
      <CourseHero />
      <CourseStats />
    </main>
  );
}

export default Courses;
