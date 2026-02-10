"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo, socialLinks as socialLinksData } from "@/data/portfolio-data";

const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: socialLinksData.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: socialLinksData.linkedin, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: socialLinksData.email, label: "Email" },
  ].filter(link => link.href);

  const footerLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* KC-Labs Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`${basePath}/KC-Logo.png`}
                alt="KC-Labs Logo"
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-foreground">KC-Labs</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground text-xs">
              SIREN : 999678113
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={socialLinksData.email}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                {personalInfo.location}
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:glow-effect"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} KC-Labs. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-xs">
            Créé avec{" "}
            <span className="text-primary">Next.js</span> et{" "}
            <span className="text-accent">Shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
