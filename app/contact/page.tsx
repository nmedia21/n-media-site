import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Contactez N-Med.ia pour un site sur-mesure, une refonte ou une solution IA. Devis et conseil gratuits.",
  openGraph: {
    title: "Contact | N-Med.ia - Expert Web Design & IA",
    description: "Discutons de votre projet web ou IA. Réponse rapide et accompagnement sur-mesure.",
  },
};

export default function Contact() {
  return <ContactForm />;
}
