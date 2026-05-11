"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import Particles from "./Particles";

/* ── Word-stagger animation variants ─────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ── Magnetic button hook ────────────────────────── */
function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [x, y, strength]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, springX, springY, handleMouse, reset };
}

/* ── Subtitle scramble effect ────────────────────── */
function ScrambleText({ text, delay = 0.8 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iteration += 1 / 2;
        if (iteration >= text.length) {
          setDisplayed(text);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay]);

  return <>{displayed || "\u00A0"}</>;
}

/* ── Social link with tooltip ────────────────────── */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="relative group p-2 text-foreground hover:text-primary transition-colors"
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-card px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-primary/20">
        {label}
      </span>
    </motion.a>
  );
}

/* ── Hero Component ──────────────────────────────── */
const Hero = () => {
  const titleWords = `Bonjour, je suis`.split(" ");
  const nameWords = personalInfo.name.split(" ");
  const subtitle = `${personalInfo.title} | ${personalInfo.subtitle}`;

  const mag1 = useMagnetic(0.3);
  const mag2 = useMagnetic(0.25);

  /* Mouse parallax for the grid */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridX = useSpring(useTransform(mouseX, [-500, 500], [6, -6]), {
    stiffness: 80,
    damping: 30,
  });
  const gridY = useSpring(useTransform(mouseY, [-500, 500], [6, -6]), {
    stiffness: 80,
    damping: 30,
  });

  const handleSectionMouse = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
      style={{ transform: "translateZ(0)" }}
      onMouseMove={handleSectionMouse}
    >
      {/* Aurora orbs */}
      <div className="aurora-bg">
        <div className="aurora-orb-1" />
        <div className="aurora-orb-2" />
        <div className="aurora-orb-3" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Grid parallax layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: gridX, y: gridY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Title : word-by-word stagger */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} className="inline-block mr-[0.3em]" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            {nameWords.map((word, i) => (
              <motion.span
                key={`name-${i}`}
                className="inline-block mr-[0.3em] gradient-text"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle : scramble decode */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-4 md:mb-5 lg:mb-6 font-mono"
          >
            <ScrambleText text={subtitle} delay={1} />
          </motion.p>

          {/* Baseline KC-Labs */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl italic text-foreground/80 mb-5 md:mb-6 lg:mb-8 max-w-3xl mx-auto tracking-wide"
          >
            <span className="gradient-text font-medium">{personalInfo.baseline}</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-muted-foreground mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons : magnetic */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 lg:mb-10 xl:mb-12"
          >
            <motion.div
              ref={mag1.ref}
              onMouseMove={mag1.handleMouse}
              onMouseLeave={mag1.reset}
              style={{ x: mag1.springX, y: mag1.springY }}
            >
              <Button size="lg" className="glow-effect-strong" asChild>
                <a href="#projects">Voir mes projets</a>
              </Button>
            </motion.div>
            <motion.div
              ref={mag2.ref}
              onMouseMove={mag2.handleMouse}
              onMouseLeave={mag2.reset}
              style={{ x: mag2.springX, y: mag2.springY }}
            >
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="flex gap-5 md:gap-6 justify-center"
          >
            {socialLinks.github && (
              <SocialIcon href={socialLinks.github} label="GitHub">
                <Github size={24} className="md:w-7 md:h-7" />
              </SocialIcon>
            )}
            {socialLinks.linkedin && (
              <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                <Linkedin size={24} className="md:w-7 md:h-7" />
              </SocialIcon>
            )}
            <SocialIcon href={socialLinks.email} label="Email">
              <Mail size={24} className="md:w-7 md:h-7" />
            </SocialIcon>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — positioned relative to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs mb-3 tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <div className="scroll-indicator" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
