"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-white">
              N-Med.ia
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
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Contact</p>
              <p className="text-sm">contact@n-media.fr</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500">
          © {new Date().getFullYear()} N-Med.ia
        </div>
      </div>
    </footer>
  );
}
