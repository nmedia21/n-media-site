"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BOOKING_URL, BOOKING_IS_EXTERNAL } from "@/lib/site";

const values = [
  "Excellence en web design : chaque interface est pensée pour séduire et convertir.",
  "Expertise IA : nous intégrons l'intelligence artificielle là où elle crée de la valeur.",
  "Partenariat durable basé sur la confiance et la transparence.",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-500 mb-6">
            À propos
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-10 leading-tight">
            L'agence qui transforme
            <br />
            <span className="text-gradient">vos ambitions</span> en réalité
          </h1>

          <div className="space-y-8 text-primary-600 leading-relaxed font-light mb-16">
            <p className="text-lg">
              N-Med.ia est une agence experte en web design et en intelligence artificielle.
            </p>
            <p>
              Nous créons des interfaces qui marquent les esprits et des solutions IA qui dopent 
              votre business. Du design à l’intégration technique, nous accompagnons votre vision.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-accent font-display text-2xl font-light">0{index + 1}</span>
                <p className="text-primary-600 font-light">{value}</p>
              </motion.div>
            ))}
          </div>

          <Link
            href={BOOKING_URL}
            target={BOOKING_IS_EXTERNAL ? "_blank" : undefined}
            rel={BOOKING_IS_EXTERNAL ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Démarrer mon projet</span>
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
