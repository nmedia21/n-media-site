"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { number: 50, suffix: "+", label: "Projets livrés" },
  { number: 10, suffix: "", label: "Ans d'expertise" },
  { number: 98, suffix: "%", label: "Clients satisfaits" },
  { number: 100, suffix: "%", label: "Sur-mesure" },
];

const DURATION_MS = 700; // très rapide
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Counter({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const progress = easeOutExpo(t);
      const value = Math.round(progress * target);
      setDisplay(value);
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };

    requestAnimationFrame(tick);
  }, [start, target]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white border-y border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 tracking-tight tabular-nums">
                <Counter
                  target={stat.number}
                  suffix={stat.suffix}
                  start={isInView}
                />
              </p>
              <p className="mt-1 text-sm md:text-base text-neutral-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
