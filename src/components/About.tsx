"use client";

import { motion } from "framer-motion";
import { Brain, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe } from "@/data/portfolio-data";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: aboutMe.highlights[0].title,
      description: aboutMe.highlights[0].description,
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: aboutMe.highlights[1].title,
      description: aboutMe.highlights[1].description,
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: aboutMe.highlights[2].title,
      description: aboutMe.highlights[2].description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          {aboutMe.description.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 last:mb-0 text-left md:text-center">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-xl opacity-30" />
              <div className="relative bg-card p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-primary">{aboutMe.title}</h3>
                {aboutMe.history.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-6 last:mb-0 leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
