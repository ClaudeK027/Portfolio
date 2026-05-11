"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Quote, Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: 0 },
  show: {
    width: "5rem",
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const Testimonials = () => {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ils m&apos;ont fait <span className="gradient-text">confiance</span>
          </h2>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Retours de mes clients sur les missions livrées.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={false}
                className="h-full"
              >
                <Card className="h-full backdrop-blur-sm bg-white/5 border border-white/5 glass-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-primary/40 mb-4" />

                    <div className="flex gap-1 mb-4" aria-label={`${t.rating} étoiles sur 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < t.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }
                        />
                      ))}
                    </div>

                    <blockquote className="text-sm md:text-base text-foreground/85 italic leading-relaxed mb-6 flex-1">
                      « {t.content} »
                    </blockquote>

                    <footer className="border-t border-white/10 pt-4 mt-auto">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground mb-2">{t.position}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground/80">
                        <time>{t.date}</time>
                        {t.source && t.sourceUrl && (
                          <a
                            href={t.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:text-accent transition-colors"
                          >
                            Voir sur {t.source}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </footer>
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

export default Testimonials;
