"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectGallery from "@/components/ProjectGallery";
import type { Project } from "@/data/portfolio-data";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const stagger = {
  visible: { transition: { staggerChildren: 0.045 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

const scalePop = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Modal wrapper */}
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
      >
        <div
          className="min-h-full flex items-center justify-center p-3 sm:p-5 md:p-8"
          onClick={onClose}
        >
          {/* Card */}
          <div
            className="relative w-full max-w-5xl bg-card rounded-2xl border border-primary/15 shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 text-white h-8 w-8 rounded-full border border-white/10 backdrop-blur-sm"
              onClick={onClose}
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </Button>

            {/* ── Two-panel layout ── */}
            <div className="flex flex-col lg:flex-row lg:max-h-[88vh]">

              {/* LEFT — Gallery + Title + Points clés + Buttons */}
              <div className="lg:w-[55%] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-primary/10 bg-black/20 overflow-y-auto scrollbar-hide">
                <div className="p-5 md:p-6 flex flex-col gap-5">

                  {/* Gallery */}
                  <ProjectGallery images={project.images} title={project.title} />

                  {/* Title */}
                  <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2">
                      {project.title}
                    </h2>
                    <div className="h-[2px] w-10 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </motion.div>

                  {/* Key points */}
                  {project.highlights.length > 0 && (
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                        Points clés
                      </h3>
                      <motion.ul
                        className="space-y-2.5"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                      >
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            variants={fadeLeft}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-[3px] flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}

                  {/* Action buttons moved to the right panel */}
                </div>
              </div>

              {/* RIGHT — Description + Tech */}
              <div className="lg:w-[45%] flex flex-col">
                
                {/* Fixed Top Action Bar in Right Panel (Desktop Only) */}
                <div className="hidden lg:flex p-5 md:p-6 pb-0 md:pb-0 items-center justify-between border-b border-primary/10 mb-2">
                  <motion.div
                    className="flex flex-wrap gap-2.5 pb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    {project.github ? (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          Code source
                        </a>
                      </Button>
                    ) : (
                      <div title="Code privé / Non disponible" className="inline-block">
                        <Button variant="outline" size="sm" className="gap-2 opacity-35 pointer-events-none" disabled>
                          <Github className="w-3.5 h-3.5" />
                          Code source
                        </Button>
                      </div>
                    )}
                    {project.demo && (
                      <Button size="sm" className="glow-effect gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Démo live
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>

                {/* Scrollable Content (Description + Tech) */}
                <div className="flex-1 overflow-y-auto scrollbar-hide p-5 md:p-6 pt-2 md:pt-4 flex flex-col gap-5 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06, duration: 0.35 }}
                  className="pr-8"
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                    Description
                  </h3>
                  <div className="h-[2px] w-8 bg-gradient-to-r from-primary/60 to-accent/40 rounded-full" />
                </motion.div>

                {/* Description text */}
                <motion.div
                  className="text-muted-foreground text-sm leading-[1.7] space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                >
                  {project.longDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-primary/8" />

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                    Technologies
                  </h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                  >
                    {project.techStack.map((tech) => (
                      <motion.div key={tech.name} variants={scalePop}>
                        <Badge
                          variant="outline"
                          className="text-[11px] py-1 px-2.5 border-primary/25 hover:border-primary/55 hover:bg-primary/8 transition-colors duration-200 cursor-default"
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Mobile Action Buttons (Bottom) */}
                <div className="lg:hidden mt-6">
                  <div className="h-px bg-primary/8 mb-6" />
                  <motion.div
                    className="flex flex-wrap gap-2.5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    {project.github ? (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          Code source
                        </a>
                      </Button>
                    ) : (
                      <div title="Code privé / Non disponible" className="inline-block">
                        <Button variant="outline" size="sm" className="gap-2 opacity-35 pointer-events-none" disabled>
                          <Github className="w-3.5 h-3.5" />
                          Code source
                        </Button>
                      </div>
                    )}
                    {project.demo && (
                      <Button size="sm" className="glow-effect gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Démo live
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 min-h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
