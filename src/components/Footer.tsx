"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { personalInfo, socialLinks as socialLinksData } from "@/data/portfolio-data";

const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: socialLinksData.github, label: "GitHub" },
    { icon: <Linkedin size={18} />, href: socialLinksData.linkedin, label: "LinkedIn" },
    { icon: <Mail size={18} />, href: socialLinksData.email, label: "Email" },
  ].filter((link) => link.href);

  const footerLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/50 relative">
      {/* Gradient separator */}
      <div className="separator-gradient" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Top section: brand + social */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src={`${basePath}/KC-Logo.png`}
                alt="KC-Labs Logo"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-foreground">KC-Labs</span>
            </motion.div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {personalInfo.title}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card/60 border border-primary/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 text-muted-foreground hover:text-primary"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle section: 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-center sm:text-left">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={14} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={socialLinksData.email}
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={14} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                  {personalInfo.email}
                </a>
              </li>
              <li className="group inline-flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={14} className="flex-shrink-0" />
                {personalInfo.location}
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Informations
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>SIREN : 999678113</li>
              <li>Micro-entreprise</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} KC-Labs. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-xs">
            Créé avec{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Next.js
            </a>{" "}
            et{" "}
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
