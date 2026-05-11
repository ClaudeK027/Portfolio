"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, Eye, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  projects as projectsData,
  projectCategoryLabels,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio-data";
import ProjectDetail from "@/components/ProjectDetail";

type FilterKey = "all" | ProjectCategory;

const Projects = () => {
  const projects = projectsData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string; count: number }[] = useMemo(() => {
    const base: { key: FilterKey; label: string }[] = [
      { key: "all", label: "Tous" },
      { key: "ai", label: projectCategoryLabels.ai },
      { key: "web", label: projectCategoryLabels.web },
      { key: "data", label: projectCategoryLabels.data },
    ];
    return base.map((f) => ({
      ...f,
      count:
        f.key === "all"
          ? projects.length
          : projects.filter((p) => p.categories.includes(f.key as ProjectCategory)).length,
    }));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [projects, filter]);

  const tagContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const tagItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const titleLine = {
    hidden: { width: 0 },
    show: {
      width: "5rem",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const MAX_VISIBLE_TAGS = 3;

  return (
    <section id="projects" className="py-16 md:py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <motion.div
            variants={titleLine}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez mes réalisations récentes et projets personnels
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <LayoutGroup id="project-filter">
            <div
              role="tablist"
              aria-label="Filtrer les projets par catégorie"
              className="inline-flex flex-wrap justify-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-sm"
            >
              {filters.map((f) => {
                const isActive = filter === f.key;
                return (
                  <button
                    key={f.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(f.key)}
                    className="relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm transition-colors duration-200"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="filterPill"
                        className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-1.5 ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f.label}
                      <span
                        className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-primary/20 text-primary"
                            : "bg-white/5 text-muted-foreground/70"
                        }`}
                      >
                        {f.count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </motion.div>

        {/* Project grid */}
        <LayoutGroup id="project-cards">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#0080FF"
                    glareBorderRadius="12px"
                    className="h-full"
                  >
                    <Card className="h-full glass-border card-shine hover:border-primary/50 transition-all duration-300 hover:glow-effect overflow-hidden group flex flex-col">
                      <div className="relative aspect-video overflow-hidden bg-secondary">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
                        />
                        {project.featured && (
                          <div className="absolute top-3 right-3 z-10">
                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                              <Sparkles className="w-3 h-3 text-accent" />
                              <span className="text-xs font-medium gradient-text">
                                Featured
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <motion.div
                          variants={tagContainer}
                          initial="hidden"
                          animate="show"
                          className="flex flex-wrap gap-2"
                        >
                          {project.tags.slice(0, MAX_VISIBLE_TAGS).map((tag, tagIndex) => (
                            <motion.div key={tagIndex} variants={tagItem}>
                              <Badge variant="tech">{tag}</Badge>
                            </motion.div>
                          ))}
                          {project.techStack?.length >
                            Math.min(project.tags.length, MAX_VISIBLE_TAGS) && (
                            <motion.div variants={tagItem}>
                              <Badge
                                variant="outline"
                                className="border-primary/30 text-muted-foreground"
                              >
                                +
                                {project.techStack.length -
                                  Math.min(project.tags.length, MAX_VISIBLE_TAGS)}
                              </Badge>
                            </motion.div>
                          )}
                        </motion.div>
                      </CardContent>

                      <CardFooter className="gap-2 mt-auto">
                        {project.github ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 group/github"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2 transition-transform duration-200 group-hover/github:rotate-12" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <div className="flex-1" title="Code privé / Non disponible">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full opacity-40 pointer-events-none"
                              disabled
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        )}
                        <Button
                          size="sm"
                          className="flex-1 group/demo"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Eye className="w-4 h-4 mr-2 transition-transform duration-200 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                          Voir plus
                        </Button>
                      </CardFooter>
                    </Card>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
