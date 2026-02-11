import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ weight: ["600", "700", "800"], subsets: ["latin"], variable: "--font-logo-n" });

export const metadata: Metadata = {
  title: "N-Med.ia - Expert Web Design & IA",
  description: "Agence experte en web design et en intelligence artificielle. Sites sur-mesure, interfaces innovantes et solutions IA pour votre business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
