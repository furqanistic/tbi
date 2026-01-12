import { Hero } from "@/components/Hero";
import { CoreOffer } from "@/components/CoreOffer";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreOffer />
      <HowItWorks />
      {/* Additional sections for the home page will be added here */}
    </>
  );
}
