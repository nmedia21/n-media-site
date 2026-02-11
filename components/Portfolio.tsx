"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, BOOKING_IS_EXTERNAL } from "@/lib/site";

const projects = [
  {
    id: 1,
    title: "E-commerce premium",
    category: "E-commerce",
    description: "Boutique en ligne haut de gamme. Expérience d'achat fluide, storytelling produit et checkout sur-mesure.",
    image: "/portfolio/portfolio-ecommerce.png",
    span: "md:col-span-2",
  },
  {
    id: 2,
    title: "Marque de mode",
    category: "Web Design",
    description: "Refonte complète du site d'une griffe française. Direction artistique, lookbooks et intégration éditoriale.",
    image: "/portfolio/portfolio-mode.png",
    span: "md:col-span-1",
  },
  {
    id: 3,
    title: "Gestion de patrimoine",
    category: "Corporate",
    description: "Portail client sécurisé et site vitrine pour un acteur de la gestion de patrimoine. Conformité et élégance.",
    image: "/portfolio/portfolio-institution.png",
    span: "md:col-span-1",
  },
  {
    id: 4,
    title: "Hôtellerie & gastronomie",
    category: "Refonte",
    description: "Site pour un palace parisien. Réservations, expérience immersive et mise en valeur de l'art de vivre.",
    image: "/portfolio/portfolio-hotel.png",
    span: "md:col-span-2",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4"
        >
          Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-neutral-600 max-w-xl mx-auto"
        >
          Exemples de sites très haute gamme — e-commerce, luxe, corporate.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm text-neutral-500 max-w-2xl mx-auto mt-2"
        >
          Les visuels ci-dessous illustrent le type de sites que nous pouvons réaliser pour vous.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${project.span} group`}
            >
              <Link href={BOOKING_URL} target={BOOKING_IS_EXTERNAL ? "_blank" : undefined} rel={BOOKING_IS_EXTERNAL ? "noopener noreferrer" : undefined} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href={BOOKING_URL}
            target={BOOKING_IS_EXTERNAL ? "_blank" : undefined}
            rel={BOOKING_IS_EXTERNAL ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl btn-primary text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Créons votre projet ensemble
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
