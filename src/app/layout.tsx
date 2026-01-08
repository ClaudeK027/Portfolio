import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claude MENYE | Data Scientist - Portfolio",
  description: "Portfolio de Claude MENYE, Data Scientist passionné par l'IA et le Machine Learning. Spécialisé en développement IA, analyse de données et NLP. Recherche d'alternance à Lyon.",
  keywords: ["data scientist", "intelligence artificielle", "machine learning", "python", "portfolio", "Lyon", "IA", "NLP", "Deep Learning"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
