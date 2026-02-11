"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const quotes = [
  {
    text: "Une équipe réactive et à l'écoute. Notre nouveau site reflète enfin notre image.",
    author: "Marie L.",
    role: "Directrice marketing",
  },
  {
    text: "Ils ont su comprendre nos besoins et livrer un résultat au-delà de nos attentes.",
    author: "Thomas B.",
    role: "Fondateur startup",
  },
  {
    text: "Un site qui nous ressemble, élégant et performant. L'intégration IA a transformé notre relation client.",
    author: "Sophie M.",
    role: "Directrice digitale, secteur luxe",
  },
  {
    text: "Professionnalisme et créativité. Notre refonte a boosté notre crédibilité et nos conversions.",
    author: "Philippe D.",
    role: "PDG, cabinet conseil",
  },
  {
    text: "Du premier échange à la livraison, tout a été fluide. Je recommande N-Med.ia les yeux fermés.",
    author: "Claire V.",
    role: "Responsable communication",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4"
        >
          Ce que disent nos clients
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-50"
            >
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">"{quote.text}"</p>
              <p className="font-semibold text-neutral-900">{quote.author}</p>
              <p className="text-sm text-neutral-500">{quote.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
