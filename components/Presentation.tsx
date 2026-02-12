"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="presentation" ref={ref} className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-50/80 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6"
        >
          Plus qu&apos;une agence,
          <br />
          un partenaire créatif.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Web design et IA au service de votre marque. 
          Nous créons des expériences qui racontent votre histoire et des solutions qui anticipent demain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl btn-primary text-white font-semibold shadow-lg"
          >
            Découvrir l&apos;agence
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
