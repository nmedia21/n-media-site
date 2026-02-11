import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations juridiques du site N-Med.ia.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
          Mentions légales
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, dite L.C.E.N., les présentes mentions légales s&apos;imposent à tout éditeur de site internet.
        </p>

        <div className="space-y-10 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">1. Éditeur du site</h2>
            <p>
              Le site <strong>www.n-media.online</strong> est édité par :<br />
              <strong>N-Med.ia</strong><br />
              Auto-entreprise<br />
              15 rue de Niederbronn<br />
              67000 Strasbourg<br />
              France
            </p>
            <p className="mt-2">
              Contact : <a href="mailto:contact@n-media.online" className="text-indigo-600 hover:underline">contact@n-media.online</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est Nebil Neghouche.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">3. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>GitHub, Inc.</strong><br />
              88 Colin P. Kelly Jr. Street<br />
              San Francisco, CA 94107<br />
              États-Unis
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété de N-Med.ia ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite et constitue une contrefaçon.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">5. Données personnelles</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont destinées uniquement à traiter votre demande. Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés », vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer, contactez-nous à <a href="mailto:contact@n-media.online" className="text-indigo-600 hover:underline">contact@n-media.online</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage n&apos;est déposé sans votre consentement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">7. Limitation de responsabilité</h2>
            <p>
              N-Med.ia s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site. Toutefois, elle ne peut garantir l&apos;exhaustivité ni l&apos;absence de modification par des tiers. Les liens vers des sites externes n&apos;engagent pas la responsabilité de N-Med.ia.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <Link
          href="/"
          className="inline-block mt-8 text-indigo-600 hover:underline font-medium"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
