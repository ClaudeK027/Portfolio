"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Check, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { offers } from "@/data/portfolio-data";

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

const Offers = () => {
  return (
    <section id="offers" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">offres</span>
          </h2>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trois formats packagés pour démarrer simplement. Toute mission sur-mesure reste possible —{" "}
            <a href="#contact" className="text-primary hover:text-accent underline-offset-4 hover:underline">
              contactez-moi
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {offers.map((offer, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={false}
                className="h-full"
              >
                <Card
                  className={`h-full relative backdrop-blur-sm transition-all duration-300 ${
                    offer.highlighted
                      ? "bg-primary/10 border border-primary/40 glow-effect-strong lg:scale-[1.03]"
                      : "bg-white/5 border border-white/5 glass-border hover:border-primary/50 hover:glow-effect"
                  }`}
                >
                  {offer.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        <Sparkles size={12} />
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <header className="mb-5">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{offer.title}</h3>
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <p className="text-2xl md:text-3xl font-bold gradient-text">
                          {offer.price}
                        </p>
                      </div>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock size={14} />
                        {offer.duration}
                      </p>
                    </header>

                    <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-grow-0">
                      {offer.description}
                    </p>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {offer.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant={offer.highlighted ? "default" : "outline"}
                      className={`w-full mt-auto ${offer.highlighted ? "glow-effect" : ""}`}
                    >
                      <a href="#contact">{offer.ctaLabel}</a>
                    </Button>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Mission spécifique en dehors de ces packages ?{" "}
          <a href="#contact" className="text-primary hover:text-accent underline-offset-4 hover:underline">
            Parlons-en
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default Offers;
