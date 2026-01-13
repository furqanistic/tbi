// File: client/src/pages/Home.jsx
import { Hero } from "@/components/home/Hero";
import { CoreOffer } from "@/components/home/CoreOffer";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";

import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreOffer />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
