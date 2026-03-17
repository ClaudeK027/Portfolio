"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe } from "@/data/portfolio-data";
import Tilt from "react-parallax-tilt";

const iconComponents = [Brain, Code2, Rocket];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const descriptionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  const highlights = [
    {
      Icon: Brain,
      title: aboutMe.highlights[0].title,
      description: aboutMe.highlights[0].description,
    },
    {
      Icon: Code2,
      title: aboutMe.highlights[1].title,
      description: aboutMe.highlights[1].description,
    },
    {
      Icon: Rocket,
      title: aboutMe.highlights[2].title,
      description: aboutMe.highlights[2].description,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>

          {/* Decorative line - expands from 0 to full width */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 origin-center"
          />

          {/* Description paragraphs with staggered entrance */}
          <motion.div
            variants={descriptionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutMe.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 last:mb-0 text-left md:text-center"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
          {/* Mon Parcours card with 3D tilt and glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <div className="relative">
                {/* Subtle halo */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5 rounded-lg blur-xl" />
                {/* Card */}
                <div className="relative bg-card/80 border border-primary/10 p-5 md:p-8 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary/90">
                    {aboutMe.title}
                  </h3>
                  {aboutMe.history.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground mb-6 last:mb-0 leading-relaxed text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Highlight cards with staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover="hovered"
                  initial="idle"
                >
                  <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
                    <CardContent className="flex items-start gap-3 md:gap-4 p-4 md:p-6">
                      <motion.div
                        className="flex-shrink-0"
                        variants={{
                          idle: { scale: 1, rotate: 0 },
                          hovered: { scale: 1.1, rotate: 10 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
