"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Brain,
  Code2,
  Database,
  Layout,
  LineChart,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio-data";

const Skills = () => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Machine Learning": <Brain className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    "Développement Web": <Layout className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
    "Programmation": <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    "Outils & Technologies": <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
    "Data & IA": <LineChart className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    "Soft Skills": <Database className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
  };

  const skillCategories = skills.map((skill) => ({
    icon: iconMap[skill.category] || <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    title: skill.category,
    skills: skill.items,
  }));

  // Parent container: stagger cards with 0.1s delay
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Badge container: stagger badges with 0.05s delay after card appears
  const badgeContainerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  // Individual badge entrance
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Icon bounce when card enters viewport
  const iconBounceVariants = {
    hidden: { scale: 0, rotate: -10 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
        delay: 0.1,
      },
    },
  };

  // Decorative line expanding from 0 width
  const lineVariants = {
    hidden: { width: 0 },
    show: {
      width: "5rem",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title with gradient-text and animated decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une stack technologique moderne pour créer des solutions performantes et évolutives
          </p>
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={false}
                className="h-full"
              >
                <Card className="h-full backdrop-blur-sm bg-white/5 border border-white/5 glass-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Icon with bounce animation on scroll-in */}
                      <motion.div
                        variants={iconBounceVariants}
                        className="p-2 bg-secondary rounded-lg"
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-base md:text-xl font-semibold">{category.title}</h3>
                    </div>

                    {/* Staggered badge entrance */}
                    <motion.div
                      variants={badgeContainerVariants}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={badgeVariants}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="rounded-full"
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
