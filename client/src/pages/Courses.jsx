import React from "react";
import CourseHero from "@/components/courses/CourseHero";
import CourseStats from "@/components/courses/CourseStats";
import WhatYouWillLearn from "@/components/courses/WhatYouWillLearn";

function Courses() {
  return (
    <main className="pb-20">
      <CourseHero />
      <CourseStats />
      <WhatYouWillLearn />
    </main>
  );
}

export default Courses;
