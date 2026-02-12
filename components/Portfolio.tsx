"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section id="portfolio" ref={ref} className="relative py-24 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4"
        >
          Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-neutral-400 max-w-xl mx-auto"
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

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${project.span} group`}
            >
              <Link href="/contact" className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 mb-4 ring-1 ring-neutral-700/50 transition-all duration-500 group-hover:ring-indigo-500/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(99,102,241,0.1)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <span className="absolute bottom-4 left-4 text-white/90 text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 group-hover:text-neutral-300 transition-colors">
                  {project.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl btn-primary text-white font-semibold text-lg shadow-lg"
          >
            Créons votre projet ensemble
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
