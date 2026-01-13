import React from "react";
import CourseHero from "@/components/courses/CourseHero";
import CourseStats from "@/components/courses/CourseStats";
import WhatYouWillLearn from "@/components/courses/WhatYouWillLearn";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import Instructor from "@/components/courses/Instructor";
import FAQ from "@/components/courses/FAQ";

function Courses() {
  return (
    <main className="pb-20">
      <CourseHero />
      <CourseStats />
      <WhatYouWillLearn />
      <CourseCurriculum />
      <Instructor />
      <FAQ />
    </main>
  );
}

export default Courses;
