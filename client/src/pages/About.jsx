import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
};

export default About;
