"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight">
              Bonjour, je suis{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-5 md:mb-6 lg:mb-8">
              {personalInfo.title} | {personalInfo.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-muted-foreground mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 lg:mb-10 xl:mb-12"
          >
            <Button size="lg" className="glow-effect-strong">
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact">Me contacter</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-5 md:gap-6 justify-center mb-10 md:mb-16 lg:mb-20 xl:mb-28"
          >
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} className="md:w-7 md:h-7" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="md:w-7 md:h-7" />
              </a>
            )}
            <a
              href={socialLinks.email}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} className="md:w-7 md:h-7" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Découvrir plus</span>
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
