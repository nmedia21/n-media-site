"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-6 h-6 text-neutral-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
