"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  Cog,
  Github,
  Layers,
  Linkedin,
  type LucideIcon,
  Mail,
  Quote,
  Rocket,
  Search,
  Target,
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  aboutMe,
  personalInfo,
  professionalExperience,
  socialLinks,
} from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const principleIconMap: Record<string, LucideIcon> = {
  search: Search,
  layers: Layers,
  settings: Cog,
  target: Target,
};

const socialListVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

/* ── Avatar with graceful placeholder fallback ────── */
function Avatar() {
  const [imageStatus, setImageStatus] = useState<"loading" | "loaded" | "failed">(
    "loading"
  );
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  useEffect(() => {
    if (!personalInfo.avatarUrl) {
      setImageStatus("failed");
      return;
    }
    const img = new window.Image();
    img.onload = () => setImageStatus("loaded");
    img.onerror = () => setImageStatus("failed");
    img.src = personalInfo.avatarUrl;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mx-auto mb-6"
    >
      <div className="relative h-32 w-32 md:h-36 md:w-36 mx-auto">
        {/* Glow halo */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
        {/* Gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
          <div className="w-full h-full rounded-full bg-background" />
        </div>
        {/* Content */}
        <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center">
          {imageStatus === "loaded" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={personalInfo.avatarUrl}
              alt={`Portrait de ${personalInfo.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="block text-3xl md:text-4xl font-bold gradient-text select-none leading-none">
              {initials}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Glassmorphism About block ───────────────────── */
function AboutGlassBlock() {
  const highlights = [
    { title: aboutMe.highlights[0].title, description: aboutMe.highlights[0].description },
    { title: aboutMe.highlights[1].title, description: aboutMe.highlights[1].description },
    { title: aboutMe.highlights[2].title, description: aboutMe.highlights[2].description },
  ];

  const socials = [
    socialLinks.github && {
      label: "GitHub",
      handle: "ClaudeK027",
      href: socialLinks.github,
      icon: Github,
    },
    socialLinks.linkedin && {
      label: "LinkedIn",
      handle: "Claude Menye",
      href: socialLinks.linkedin,
      icon: Linkedin,
    },
    socialLinks.codeur && {
      label: "Codeur",
      handle: "kaizenc",
      href: socialLinks.codeur,
      icon: BriefcaseBusiness,
    },
    socialLinks.email && {
      label: "Email",
      handle: personalInfo.email,
      href: socialLinks.email,
      icon: Mail,
    },
  ].filter(Boolean) as {
    label: string;
    handle: string;
    href: string;
    icon: typeof Github;
  }[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card/40 p-6 md:p-10 lg:p-12 backdrop-blur-2xl mb-12 md:mb-16"
    >
      {/* Glass gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04] pointer-events-none" />

      <div className="relative grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
        {/* Left column - Main content */}
        <div className="space-y-7">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur"
          >
            Mon Parcours
          </Badge>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span className="text-foreground">{personalInfo.title}</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-base leading-relaxed text-foreground/75"
            >
              {aboutMe.history[0]}
            </motion.p>
          </div>

          {/* Highlights stack */}
          <div className="grid gap-3">
            {highlights.map((item, index) => {
              const Icon = [Brain, Code2, Rocket][index] ?? Brain;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-4 md:p-5 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="glow-effect w-full sm:w-auto gap-2" asChild>
              <a href="#projects">
                Voir mes projets
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right column - Profile card */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/15 via-transparent to-transparent blur-3xl" />
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={false}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-primary/20 bg-card/70 p-6 md:p-8 backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <Avatar />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-1.5"
                >
                  <h4 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {personalInfo.name}
                  </h4>
                  <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    {personalInfo.title} · KC-Labs
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70 italic"
                >
                  « {personalInfo.baseline} »
                </motion.p>
              </div>

              {/* Social links */}
              <motion.div
                variants={socialListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-7 flex flex-col gap-2.5"
              >
                {socials.map((social) => {
                  const Icon = social.icon;
                  const isMail = social.href.startsWith("mailto:");
                  return (
                    <motion.a
                      key={social.label}
                      variants={socialItemVariants}
                      href={social.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className="group flex items-center justify-between rounded-2xl border border-primary/15 bg-card/60 px-4 py-2.5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/80 hover:shadow-md"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.985 }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all group-hover:bg-primary/15">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold">{social.label}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Professional Experience block ───────────────── */
function ProfessionalExperienceBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        <h3 className="text-2xl md:text-3xl font-bold">
          Expérience <span className="gradient-text">professionnelle</span>
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {professionalExperience.map((xp, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={false} className="h-full">
              <Card className="h-full border-primary/15 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:glow-effect transition-all duration-300">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground">
                        {xp.company}
                      </h4>
                      <p className="text-sm md:text-base text-primary mt-0.5">
                        {xp.role} · {xp.contract}
                      </p>
                    </div>
                    {xp.current && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        En cours
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground mb-4 font-mono">
                    {xp.period}
                  </p>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {xp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {xp.stack.map((tech, i) => (
                      <Badge key={i} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ── Manifesto card with 4 principles ─────────────── */
function ManifestoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative max-w-5xl mx-auto mb-12 md:mb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-3xl blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card/50 backdrop-blur-2xl p-6 md:p-10 lg:p-12">
        {/* Decorative quote icon */}
        <Quote className="absolute top-5 left-5 md:top-8 md:left-8 w-10 h-10 md:w-14 md:h-14 text-primary/15" />
        <Quote className="absolute bottom-5 right-5 md:bottom-8 md:right-8 w-10 h-10 md:w-14 md:h-14 text-accent/15 rotate-180" />

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-10 md:mb-12 max-w-3xl mx-auto"
        >
          <span className="gradient-text">{aboutMe.manifesto}</span>
        </motion.p>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-10 md:mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* 4 principles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {aboutMe.principles.map((principle, index) => {
            const Icon = principleIconMap[principle.icon] ?? Search;
            return (
              <motion.div
                key={principle.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-4 md:p-5 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                      {String(index + 1).padStart(2, "0")} · {principle.title}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto origin-center"
          />
        </motion.div>

        {/* Manifesto + 4 principles */}
        <ManifestoCard />

        {/* Glassmorphism portfolio block (parcours + highlights + profile card) */}
        <AboutGlassBlock />

        {/* Professional experience */}
        <ProfessionalExperienceBlock />
      </div>
    </section>
  );
};

export default About;
