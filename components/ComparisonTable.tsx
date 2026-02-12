"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import Link from "next/link";

const rows = [
  { criterion: "Suivi personnalisé & réactif", nmedia: true, agence: false, freelance: "variable" },
  { criterion: "Design + Dev + IA dans une seule équipe", nmedia: true, agence: false, freelance: false },
  { criterion: "Expertise IA intégrée (chatbots, automatisation)", nmedia: true, agence: "parfois", freelance: "rare" },
  { criterion: "Délais maîtrisés & process clair", nmedia: true, agence: true, freelance: "variable" },
  { criterion: "Tarifs transparents, pas de surprises", nmedia: true, agence: "parfois", freelance: true },
  { criterion: "Refonte & évolutions dans la durée", nmedia: true, agence: true, freelance: "variable" },
];

const labels = {
  agence: "Agence classique",
  freelance: "Freelance",
};

function NMediaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 font-semibold tracking-tight ${className}`}>
      <span className="font-logo font-bold bg-black text-white flex items-center justify-center rounded-xl w-8 h-8 text-lg leading-none shrink-0">
        N
      </span>
      <span>-Med.ia</span>
    </span>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={2} />;
  if (value === false)
    return <X className="w-5 h-5 text-neutral-300 mx-auto" strokeWidth={2} />;
  return (
    <span className="text-neutral-500 text-sm font-medium">{value}</span>
  );
}

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparatif" ref={ref} className="relative py-24 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <NMediaLogo className="text-neutral-900 text-3xl md:text-4xl [&>span:first-child]:w-12 [&>span:first-child]:h-12 [&>span:first-child]:text-2xl md:[&>span:first-child]:w-14 md:[&>span:first-child]:h-14 md:[&>span:first-child]:text-3xl" />
          <span>en un coup d&apos;œil</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-neutral-600 max-w-2xl mx-auto"
        >
          Un petit tableau pour y voir plus clair.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-indigo-500/5 transition-shadow duration-500"
        >
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/80">
                  <th className="py-4 px-5 text-neutral-600 font-semibold">
                    Critère
                  </th>
                  <th className="py-4 px-5 text-center w-[160px]">
                    <span className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-indigo-500 text-white">
                      <NMediaLogo className="text-white [&>span:last-child]:text-white" />
                    </span>
                  </th>
                  <th className="py-4 px-5 text-center w-[140px] text-neutral-600 font-semibold">
                    {labels.agence}
                  </th>
                  <th className="py-4 px-5 text-center w-[140px] text-neutral-600 font-semibold">
                    {labels.freelance}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={row.criterion}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                    className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 text-neutral-800 font-medium">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-5 text-center">
                      <Cell value={row.nmedia} />
                    </td>
                    <td className="py-4 px-5 text-center">
                      <Cell value={row.agence} />
                    </td>
                    <td className="py-4 px-5 text-center">
                      <Cell value={row.freelance} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: une carte par critère, liste lisible */}
          <div className="md:hidden p-4 space-y-4">
            {rows.map((row, index) => (
              <motion.div
                key={row.criterion}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="rounded-xl bg-neutral-50 border border-neutral-200 p-5"
              >
                <p className="text-neutral-900 font-semibold text-base mb-4 leading-snug">
                  {row.criterion}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg bg-indigo-50 border border-indigo-100">
                    <NMediaLogo className="text-indigo-700 text-sm" />
                    <Cell value={row.nmedia} />
                  </li>
                  <li className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg bg-neutral-100/80">
                    <span className="text-neutral-600 text-sm font-medium">Agence classique</span>
                    <Cell value={row.agence} />
                  </li>
                  <li className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg bg-neutral-100/80">
                    <span className="text-neutral-600 text-sm font-medium">Freelance</span>
                    <Cell value={row.freelance} />
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl btn-primary text-white font-semibold text-sm"
          >
            Discutons de votre projet
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
