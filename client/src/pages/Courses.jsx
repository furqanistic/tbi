// File: client/src/pages/Courses.jsx
import React from "react";
import CourseHero from "@/components/courses/CourseHero";
import WhatYouWillLearn from "@/components/courses/WhatYouWillLearn";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import Instructor from "@/components/courses/Instructor";
import FAQ from "@/components/courses/FAQ";

function Courses() {
  return (
    <main className="min-h-screen">
      <CourseHero />
      <div className="space-y-0">
        <WhatYouWillLearn />
        <CourseCurriculum />
        <Instructor />
        <FAQ />
      </div>
    </main>
  );
}

export default Courses;
