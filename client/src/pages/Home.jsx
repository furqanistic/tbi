import { Hero } from "@/components/Hero";
import { CoreOffer } from "@/components/CoreOffer";
import { HowItWorks } from "@/components/HowItWorks";

import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreOffer />
      <HowItWorks />
      <CTA />
    </>
  );
}
