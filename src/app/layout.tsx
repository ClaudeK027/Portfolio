import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { personalInfo, siteConfig, socialLinks } from "@/data/portfolio-data";

const inter = Inter({ subsets: ["latin"] });

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: personalInfo.name, url: siteConfig.url }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.name,
    description: siteConfig.tagline || siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline || siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: siteConfig.description,
  url: siteConfig.url,
  email: personalInfo.email,
  telephone: personalInfo.phone,
  image: `${siteConfig.url}${personalInfo.avatarUrl.replace(basePath, "")}`,
  sameAs: [socialLinks.github, socialLinks.linkedin, "https://www.codeur.com/-kaizenc"].filter(
    Boolean
  ),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    postalCode: "69007",
    addressCountry: "FR",
  },
  worksFor: {
    "@type": "Organization",
    name: "KC-Labs",
  },
  knowsAbout: [
    "Machine Learning",
    "Agents IA",
    "RAG",
    "NLP",
    "LLM",
    "Next.js",
    "FastAPI",
    "n8n",
    "Python",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
