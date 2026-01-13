// File: client/src/pages/Resources.jsx
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceCategories from "@/components/resources/ResourceCategories";
import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dot Grid Background - Theme Responsive */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background Decorative Glow - Muted for Industrial look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-blue-500/3 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <ResourcesHero />

      {/* Resource Categories Section */}
      <ResourceCategories />
    </div>
  );
};

export default Resources;
