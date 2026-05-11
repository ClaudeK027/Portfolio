"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Wrench, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio-data";

const lineVariants = {
  hidden: { width: 0 },
  show: {
    width: "5rem",
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

/* ── Group skills into 3 themed clusters ─────────── */
function getByCategory(name: string): string[] {
  return skills.find((s) => s.category === name)?.items ?? [];
}

function dedupe(items: string[]): string[] {
  return Array.from(new Set(items));
}

const groups: {
  label: string;
  icon: LucideIcon;
  items: string[];
  direction: "left" | "right";
  duration: string;
}[] = [
  {
    label: "IA & Machine Learning",
    icon: Brain,
    items: dedupe([...getByCategory("Machine Learning"), ...getByCategory("Data & IA")]),
    direction: "left",
    duration: "45s",
  },
  {
    label: "Développement & Code",
    icon: Code2,
    items: dedupe([
      ...getByCategory("Développement Web"),
      ...getByCategory("Programmation"),
    ]),
    direction: "right",
    duration: "40s",
  },
  {
    label: "Outils & Méthodes",
    icon: Wrench,
    items: dedupe([
      ...getByCategory("Outils & Technologies"),
      ...getByCategory("Soft Skills"),
    ]),
    direction: "left",
    duration: "42s",
  },
];

/* ── MarqueeRow component ────────────────────────── */
function MarqueeRow({
  label,
  icon: Icon,
  items,
  direction,
  duration,
}: (typeof groups)[number]) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/25 transition-colors"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] pointer-events-none" />

      <div className="relative py-5 md:py-6 space-y-4">
        {/* Eyebrow label */}
        <div className="flex items-center gap-2.5 px-5 md:px-6">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary/85">
            {label}
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          <span className="text-[10px] font-mono text-muted-foreground/60">
            {items.length} techs
          </span>
        </div>

        {/* Marquee */}
        <div className="group relative overflow-hidden marquee-mask">
          <div
            className={`flex gap-3 w-max ${
              direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
            } group-hover:[animation-play-state:paused]`}
            style={{ "--marquee-duration": duration } as React.CSSProperties}
          >
            {doubled.map((item, i) => (
              <Badge
                key={`${item}-${i}`}
                variant="tech"
                className="text-sm whitespace-nowrap flex-shrink-0"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
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

        {/* 3 themed marquees */}
        <div className="space-y-5 md:space-y-6 max-w-5xl mx-auto">
          {groups.map((group) => (
            <MarqueeRow key={group.label} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
