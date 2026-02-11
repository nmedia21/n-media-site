import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ weight: ["600", "700", "800"], subsets: ["latin"], variable: "--font-logo-n" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://n-media.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "N-Med.ia - Expert Web Design & IA | Agence Web Paris",
    template: "%s | N-Med.ia",
  },
  description:
    "Agence experte en web design et en intelligence artificielle. Sites sur-mesure, interfaces innovantes et solutions IA pour votre business. Paris & France.",
  keywords: [
    "agence web",
    "web design",
    "intelligence artificielle",
    "IA",
    "création site internet",
    "refonte site",
    "UI UX",
    "site haute gamme",
    "Paris",
    "France",
  ],
  authors: [{ name: "N-Med.ia", url: siteUrl }],
  creator: "N-Med.ia",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "N-Med.ia",
    title: "N-Med.ia - Expert Web Design & IA",
    description:
      "Agence experte en web design et en IA. Sites sur-mesure, interfaces innovantes et solutions intelligentes pour votre marque.",
  },
  twitter: {
    card: "summary_large_image",
    title: "N-Med.ia - Expert Web Design & IA",
    description: "Agence experte en web design et en intelligence artificielle. Sites & solutions IA sur-mesure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "N-Med.ia",
  url: siteUrl,
  description:
    "Agence experte en web design et en intelligence artificielle. Sites sur-mesure, interfaces innovantes et solutions IA.",
  potentialAction: {
    "@type": "ContactAction",
    target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/contact` },
    "http://schema.org/contactOption": "contact@n-media.online",
  },
};

return (
    <html lang="fr">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
