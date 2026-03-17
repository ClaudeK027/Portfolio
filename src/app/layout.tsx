import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claude MENYE",
  description: "Portfolio de Claude MENYE, Développeur Web & Solutions IA indépendant. Conception d'applications fullstack et de systèmes IA sur mesure, de l'architecture à la mise en production.",
  keywords: ["développeur web", "solutions ia", "intelligence artificielle", "machine learning", "python", "portfolio", "Lyon", "IA", "NLP", "Deep Learning", "freelance", "indépendant"],
  icons: {
    icon: process.env.NODE_ENV === "production" ? "/Portfolio/favicon.png" : "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
