"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex flex-col items-center justify-center bg-neutral-50 pb-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block cursor-default group group-hero"
        >
          <h1 className="inline-flex items-center gap-2 sm:gap-3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-neutral-900">
            <span className="hero-n-3d-wrapper inline-flex">
              <span className="font-logo font-bold hero-n-3d bg-black text-white flex items-center justify-center rounded-2xl w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-[4.5rem] sm:text-[5.25rem] md:text-[6.75rem] lg:text-[8.25rem] leading-none overflow-hidden">
                N
              </span>
            </span>
            <span>-Med.ia</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-xl md:text-2xl text-neutral-600 font-normal max-w-2xl mx-auto"
        >
          Experte en web design et en intelligence artificielle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-lg"
          >
            Nous contacter
          </Link>
          <span className="hidden sm:inline text-neutral-300">—</span>
          <Link
            href="/#services"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-lg"
          >
            Découvrir nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
