"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, Mail, MapPin, Phone, Send, Check, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { calendly, personalInfo } from "@/data/portfolio-data";

const formFieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: 15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const infoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      title: "Téléphone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Localisation",
      value: personalInfo.location,
      link: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    await new Promise((resolve) => setTimeout(resolve, 800));
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contactez-<span className="gradient-text">moi</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        {/* Calendly CTA — le plus rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <Card className={`border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-accent/10 backdrop-blur-sm ${calendly.url ? "glow-effect" : ""}`}>
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <div className="flex-shrink-0 p-3 md:p-4 bg-primary/15 border border-primary/30 rounded-xl">
                <CalendarClock className="w-7 h-7 md:w-9 md:h-9 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                  Le plus rapide
                </p>
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {calendly.label}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({calendly.duration})
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">{calendly.description}</p>
              </div>
              {calendly.url ? (
                <Button
                  size="lg"
                  className="glow-effect-strong w-full md:w-auto"
                  asChild
                >
                  <a href={calendly.url} target="_blank" rel="noopener noreferrer">
                    <CalendarClock className="w-4 h-4 mr-2" />
                    Réserver un créneau
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  disabled
                  className="w-full md:w-auto cursor-not-allowed"
                  title="Réservation en ligne bientôt disponible"
                >
                  <CalendarClock className="w-4 h-4 mr-2" />
                  Bientôt disponible
                </Button>
              )}
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-3">
            {calendly.url
              ? "Ou utilisez le formulaire ci-dessous pour un message asynchrone."
              : "En attendant, contactez-moi via le formulaire ci-dessous."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Card className="border-primary/10 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-5 md:p-8">
                <h3 className="text-lg font-semibold mb-6 text-foreground">
                  Envoyez-moi un message
                </h3>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  variants={formContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div variants={formFieldVariants}>
                      <label
                        htmlFor="name"
                        className="block text-sm text-muted-foreground mb-1.5"
                      >
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        required
                        className="input-glow bg-secondary/50 border-border/50"
                      />
                    </motion.div>
                    <motion.div variants={formFieldVariants}>
                      <label
                        htmlFor="email"
                        className="block text-sm text-muted-foreground mb-1.5"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        className="input-glow bg-secondary/50 border-border/50"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-muted-foreground mb-1.5"
                    >
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Objet de votre message"
                      required
                      className="input-glow bg-secondary/50 border-border/50"
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm text-muted-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet ou posez votre question..."
                      rows={5}
                      required
                      className="input-glow bg-secondary/50 border-border/50 resize-none"
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <Button
                      type="submit"
                      className="w-full glow-effect-strong"
                      size="lg"
                      disabled={isSubmitting || isSuccess}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Envoi en cours...
                          </motion.span>
                        ) : isSuccess ? (
                          <motion.span
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Message envoyé !
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Envoyer le message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.div
              variants={infoContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={infoItemVariants}>
                <h3 className="text-lg font-semibold mb-2">Restons en contact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Que ce soit pour un projet, une question ou simplement pour
                  discuter, je serais ravi d&apos;échanger avec vous.
                </p>
              </motion.div>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={infoItemVariants}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-card/60 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-2.5 bg-secondary/80 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{info.title}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                variants={infoItemVariants}
                className="p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Temps de réponse habituel :{" "}
                  <span className="text-primary font-medium">sous 24h</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
