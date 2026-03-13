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

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);

  // Scroll lock without moving the page
  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    // Simple overflow hidden — no position:fixed needed
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

  // Keyboard handling
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="min-h-full flex items-start justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-5xl bg-card rounded-xl border border-primary/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 text-white h-9 w-9 rounded-full"
              onClick={onClose}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Vertical layout: gallery on top, info below */}
            <div className="flex flex-col p-4 md:p-8 gap-6">
              {/* Gallery - full width on top */}
              <div className="w-full max-w-3xl mx-auto">
                <ProjectGallery images={project.images} title={project.title} />
              </div>

              {/* Info - below */}
              <div className="flex flex-col gap-5">
                {/* Title */}
                <motion.h2
                  className="text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {project.title}
                </motion.h2>

                {/* Long description */}
                <motion.div
                  className="text-muted-foreground text-sm leading-relaxed space-y-3 max-w-4xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  {project.longDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>

                {/* Tech Stack + Highlights side by side on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: { staggerChildren: 0.04 },
                        },
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <motion.div
                          key={tech.name}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-colors duration-200"
                          >
                            {tech.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Highlights */}
                  {project.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                    >
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Points clés
                      </h3>
                      <motion.ul
                        className="space-y-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: { staggerChildren: 0.06 },
                          },
                        }}
                      >
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </div>

                {/* Action buttons */}
                <motion.div
                  className="flex gap-3 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {project.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code source
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button className="glow-effect" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Démo live
                      </a>
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
