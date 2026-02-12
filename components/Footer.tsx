"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-neutral-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-white">
              <span className="font-logo font-bold bg-white text-black flex items-center justify-center rounded-xl w-9 h-9 text-xl">N</span>
              -Med.ia
            </p>
            <p className="mt-2 text-sm text-neutral-500 max-w-sm">
              Expert en web design et en IA — Sites, refonte, interfaces et solutions intelligentes.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Navigation</p>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/#services", label: "Services" },
                  { href: "/#portfolio", label: "Portfolio" },
                  { href: "/about", label: "À propos" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition-colors inline-block hover:translate-x-0.5">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Contact</p>
              <p className="text-sm">contact@n-media.online</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span>© {new Date().getFullYear()} N-Med.ia</span>
          <Link href="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
