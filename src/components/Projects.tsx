"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { projects as projectsData, type Project } from "@/data/portfolio-data";
import ProjectDetail from "@/components/ProjectDetail";

const Projects = () => {
  const projects = projectsData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const tagContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
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
        {/* Section title with gradient text and animated decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
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

        {/* Staggered card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
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
                  {/* Image container with zoom on hover and gradient overlay */}
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
                    />
                    {/* Featured indicator */}
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

                  {/* Tag badges with staggered animation */}
                  <CardContent>
                    <motion.div
                      variants={tagContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.slice(0, MAX_VISIBLE_TAGS).map((tag, tagIndex) => (
                        <motion.div key={tagIndex} variants={tagItem}>
                          <Badge variant="secondary">{tag}</Badge>
                        </motion.div>
                      ))}
                      {project.techStack?.length > Math.min(project.tags.length, MAX_VISIBLE_TAGS) && (
                        <motion.div variants={tagItem}>
                          <Badge variant="outline" className="border-primary/30 text-muted-foreground">
                            +{project.techStack.length - Math.min(project.tags.length, MAX_VISIBLE_TAGS)}
                          </Badge>
                        </motion.div>
                      )}
                    </motion.div>
                  </CardContent>

                  {/* Animated GitHub / Demo buttons */}
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
        </motion.div>
      </div>

      {/* Project detail overlay */}
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
