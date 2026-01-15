// File: client/src/components/BackgroundPattern.jsx
import React from "react";

export const BackgroundPattern = () => {
  return (
    <>
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </>
  );
};
