import Link from "next/link";
import type { Metadata } from "next";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description: "Réservez un créneau pour un échange téléphonique avec N-Med.ia et parlons de votre projet.",
};

export default function RdvPage() {
  if (BOOKING_URL) {
    return (
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 text-center">
            Prendre rendez-vous
          </h1>
          <p className="text-neutral-600 text-center mb-8">
            Choisissez un créneau pour un échange téléphonique.
          </p>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <iframe
              src={BOOKING_URL}
              title="Calendrier de rendez-vous"
              className="w-full min-h-[700px] md:min-h-[750px] border-0"
            />
          </div>
          <p className="text-center text-sm text-neutral-500 mt-6">
            Vous préférez nous écrire ?{" "}
            <Link href="/contact" className="text-indigo-600 hover:underline font-medium">
              Formulaire de contact
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-4">
          Prendre rendez-vous
        </h1>
        <p className="text-neutral-600 mb-6">
          Pour afficher le calendrier ici, ajoutez votre lien Calendly (ou Cal.com) dans Vercel :
        </p>
        <ol className="text-left text-sm text-neutral-600 mb-8 space-y-2 list-decimal list-inside">
          <li>Ouvrez votre projet sur <strong>vercel.com</strong></li>
          <li>Settings → Environment Variables</li>
          <li>Ajoutez <code className="bg-neutral-100 px-1.5 py-0.5 rounded">NEXT_PUBLIC_BOOKING_URL</code></li>
          <li>Valeur : votre URL Calendly (ex. https://calendly.com/votre-compte/rdv)</li>
          <li>Redéployez le site</li>
        </ol>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl btn-primary text-white font-semibold"
        >
          Nous contacter par formulaire
        </Link>
      </div>
    </section>
  );
}
