"use client";

import { motion } from "framer-motion";
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

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4"
        >
          Ce que disent nos clients
        </motion.h2>
      </div>

      <div className="relative py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-8 animate-marquee-left w-max">
          {[...quotes, ...quotes].map((quote, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] md:w-[380px] p-8 rounded-3xl bg-neutral-50 border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300"
            >
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">&quot;{quote.text}&quot;</p>
              <p className="font-semibold text-neutral-900">{quote.author}</p>
              <p className="text-sm text-neutral-500">{quote.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
