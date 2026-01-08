"use client";

import { motion } from "framer-motion";
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
    "Machine Learning": <Brain className="w-8 h-8 text-primary" />,
    "Développement Web": <Layout className="w-8 h-8 text-accent" />,
    "Programmation": <Code2 className="w-8 h-8 text-primary" />,
    "Outils & Technologies": <Lightbulb className="w-8 h-8 text-accent" />,
    "Data & IA": <LineChart className="w-8 h-8 text-primary" />,
    "Soft Skills": <Database className="w-8 h-8 text-accent" />,
  };

  const skillCategories = skills.map((skill) => ({
    icon: iconMap[skill.category] || <Code2 className="w-8 h-8 text-primary" />,
    title: skill.category,
    skills: skill.items,
  }));

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

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une stack technologique moderne pour créer des solutions performantes et évolutives
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
