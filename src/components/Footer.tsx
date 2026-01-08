"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks as socialLinksData } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: socialLinksData.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: socialLinksData.linkedin, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: socialLinksData.email, label: "Email" },
  ].filter(link => link.href); // Filtrer les liens vides

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
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">{personalInfo.name}</h3>
            <p className="text-muted-foreground">
              {personalInfo.title} - {personalInfo.location}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
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
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Portfolio. Créé avec{" "}
            <span className="text-primary">Next.js</span> et{" "}
            <span className="text-accent">Shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
