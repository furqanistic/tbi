// File: client/src/components/about/AboutStats.jsx
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const StatItem = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/[,+]/g, ""));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-8">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const AboutStats = () => {
  const stats = [
    { value: "5000+", label: "Active Learners", suffix: "+" },
    { value: "92%", label: "Satisfaction Rate", suffix: "%" },
    { value: "100+", label: "Expert Mentors", suffix: "+" },
    { value: "15M+", label: "Minutes Watched", suffix: "+" },
  ];

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950/80 text-foreground dark:text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-zinc-200 dark:divide-zinc-800">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
