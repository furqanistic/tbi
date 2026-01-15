// File: client/src/pages/Resources.jsx
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceCategories from "@/components/resources/ResourceCategories";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dot Grid Background - Theme Responsive */}
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Hero Section */}

      {/* Hero Section */}
      <ResourcesHero />

      {/* Resource Categories Section */}
      <ResourceCategories />
    </div>
  );
};

export default Resources;
