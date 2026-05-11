"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Accueil", href: "#hero", id: "hero" },
    { name: "À propos", href: "#about", id: "about" },
    { name: "Compétences", href: "#skills", id: "skills" },
    { name: "Offres", href: "#offers", id: "offers" },
    { name: "Projets", href: "#projects", id: "projects" },
    { name: "Témoignages", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "offers",
      "projects",
      "testimonials",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  /* Lock body scroll when sidebar is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* Close sidebar with Escape key */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const sidebarItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const sidebarContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.15 },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
          style={{
            width: `${scrollProgress}%`,
            maskImage: "linear-gradient(to right, transparent, black 5%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%)",
          }}
          transition={{ duration: 0.1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              KC-Labs
            </motion.a>

            {/* Desktop Navigation : pill indicator */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-1 border border-white/5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-1.5 text-sm transition-colors duration-200"
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-primary/15 border border-primary/25 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button with download icon (desktop) */}
            <div className="hidden lg:block">
              <Button
                className="relative overflow-hidden glow-effect group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary hover:to-accent border border-primary/40"
                asChild
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger le CV au format PDF"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
                  />
                  <Download
                    size={16}
                    className="relative mr-2 group-hover:translate-y-0.5 transition-transform duration-200"
                  />
                  <span className="relative">Voir le CV</span>
                  <span className="relative ml-2 text-[10px] font-mono uppercase tracking-widest bg-white/15 border border-white/20 rounded px-1.5 py-0.5">
                    PDF
                  </span>
                </a>
              </Button>
            </div>

            {/* Mobile hamburger button */}
            <motion.button
              className="lg:hidden text-foreground relative z-[120] flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 bg-primary/10 backdrop-blur hover:bg-primary/20 hover:border-primary/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} className="text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar (drawer) — outside of <nav> to avoid stacking issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (full screen, includes top to dim everything) */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
              aria-hidden
            />

            {/* Sidebar — starts below nav header to keep logo + close button visible */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="lg:hidden fixed top-16 right-0 bottom-0 w-72 sm:w-80 bg-card/95 backdrop-blur-2xl border-l border-primary/20 z-[105] flex flex-col shadow-2xl"
              aria-label="Menu de navigation"
            >
              {/* Nav items */}
              <motion.nav
                variants={sidebarContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto py-6 px-4"
              >
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.li key={item.name} variants={sidebarItemVariants}>
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`relative flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                            isActive
                              ? "bg-primary/15 border border-primary/30 text-primary"
                              : "text-foreground/80 hover:text-foreground hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              isActive
                                ? "bg-primary shadow-[0_0_8px_rgba(64,156,255,0.7)]"
                                : "bg-muted-foreground/40"
                            }`}
                          />
                          {item.name}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>

              {/* CTA at bottom */}
              <motion.div
                variants={sidebarItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="p-5 border-t border-white/5 shrink-0"
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden glow-effect group bg-gradient-to-r from-primary to-accent text-primary-foreground border border-primary/40 w-full"
                  asChild
                >
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
                    />
                    <Download size={16} className="relative mr-2" />
                    <span className="relative">Voir le CV</span>
                    <span className="relative ml-2 text-[10px] font-mono uppercase tracking-widest bg-white/15 border border-white/20 rounded px-1.5 py-0.5">
                      PDF
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
