"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MessageCircle, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Échange", desc: "On discute de votre projet et de vos objectifs." },
  { icon: Palette, title: "Conception", desc: "Design et maquettes adaptés à votre identité." },
  { icon: Code, title: "Développement", desc: "Code propre et performant, livré à temps." },
  { icon: Rocket, title: "Mise en ligne", desc: "Lancement et accompagnement." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4"
        >
          Comment on travaille
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-neutral-600 max-w-2xl mx-auto"
        >
          Une méthode simple et transparente. Étape par étape.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl ring-1 ring-neutral-200/80 group"
        >
          <Image
            src="/process-workflow.png"
            alt="Notre méthode de travail : échange, conception, développement et mise en ligne"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-6 ring-1 ring-neutral-200/50 transition-all duration-300 group-hover:bg-indigo-50 group-hover:ring-indigo-200 group-hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]">
                <step.icon className="w-7 h-7 text-neutral-700 group-hover:text-indigo-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-indigo-700 transition-colors">{step.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
