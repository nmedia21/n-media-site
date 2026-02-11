import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "N-Med.ia, agence experte en web design et en IA. Découvrez notre équipe, nos valeurs et notre approche pour transformer vos ambitions en réalité.",
  openGraph: {
    title: "À propos | N-Med.ia - Expert Web Design & IA",
    description:
      "L'agence qui transforme vos ambitions en réalité. Web design, interfaces et solutions IA sur-mesure.",
  },
};

export default function About() {
  return <AboutSection />;
}
