"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, RefreshCw, Palette, Code, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Création visuelle et expérience utilisateur sur-mesure. Identité, interfaces et parcours qui convertissent.",
  },
  {
    icon: Globe,
    title: "Sites & Applications",
    description: "Sites corporate et applications web qui incarnent votre marque et vos objectifs.",
  },
  {
    icon: RefreshCw,
    title: "Refonte",
    description: "Modernisation de votre présence digitale : design, expérience et performances.",
  },
  {
    icon: Cpu,
    title: "Intelligence artificielle",
    description: "Intégration d'IA dans vos produits : chatbots, automatisation, personnalisation et outils sur-mesure.",
  },
  {
    icon: Code,
    title: "Développement sur-mesure",
    description: "Solutions techniques robustes, évolutives et alignées avec votre stratégie.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4"
        >
          Nos services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-neutral-400 max-w-2xl mx-auto"
        >
          Une expertise complète au service de votre marque.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-800 rounded-3xl p-10 border border-neutral-700"
            >
              <service.icon className="w-10 h-10 text-indigo-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold text-sm hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Demander un devis
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
