// File: client/src/pages/Faculty.jsx
import React from "react";
import FacultyHero from "@/components/faculty/FacultyHero";
import FacultyExpertise from "@/components/faculty/FacultyExpertise";
import FacultyTeam from "@/components/faculty/FacultyTeam";
import FacultyFAQ from "@/components/faculty/FacultyFAQ";

function Faculty() {
  return (
    <main className="min-h-screen">
      <FacultyHero />
      <div className="space-y-0">
        <FacultyExpertise />
        <FacultyTeam />
        <FacultyFAQ />
      </div>
    </main>
  );
}

export default Faculty;
