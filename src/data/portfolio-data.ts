const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Portfolio' : '';

/**
 * Fichier de configuration centralisé pour les données du portfolio
 * Modifiez ce fichier pour personnaliser votre portfolio
 */

export const personalInfo = {
  name: "Claude MENYE",
  title: "Développeur Web & Solutions IA",
  subtitle: "Développeur indépendant disponible pour vos projets",
  description:
    "Actuellement en Bachelor 3 Data & Business Intelligence à Nexta Digital School, je suis passionné par l'univers de l'IA et de ses technologies et leurs applications concrètes. Mon désir est de contribuer au développement de solutions IA adaptées tout en approfondissant mon expertise dans un environnement stimulant et collaboratif.",
  location: "69007 - Lyon",
  email: "menyeclaude33@outlook.fr",
  phone: "+33 7 58 67 08 57",
  resumeUrl: `${basePath}/claude-menye-cv-v2.pdf`,
  avatarUrl: `${basePath}/avatar.jpg`, // Ajoutez votre photo dans public/
};

export const socialLinks = {
  github: "https://github.com/ClaudeK027",
  linkedin: "https://www.linkedin.com/in/claudemenye027",
  twitter: "",
  email: "mailto:menyeclaude33@outlook.fr",
  // Ajoutez d'autres liens selon vos besoins
  portfolio: "",
  medium: "",
};

export const aboutMe = {
  title: "Mon Parcours",
  description: [
    "Plus qu'un développeur, un explorateur de solutions web & IA.",
    "Ma démarche ne s'arrête pas à l'écriture de lignes de code. Elle commence par une curiosité insatiable pour les problématiques de mes clients. Pour moi, chaque projet est une phase de découverte : je cherche à comprendre les rouages de votre activité pour identifier où la technologie peut réellement faire la différence.",
    "Mon approche repose sur l'approfondissement technique. Je ne me contente pas de solutions de surface ; je plonge dans les données et les dernières innovations en Intelligence Artificielle pour concevoir des outils robustes et intelligents.",
    "Mon objectif final ? La création de solutions concrètes et sur mesure. Que ce soit pour automatiser vos tâches répétitives via l'IA ou pour bâtir une plateforme web qui booste votre visibilité, je transforme la complexité technique en simplicité d'utilisation pour votre entreprise."
  ],
  history: [
    "Mon évolution professionnelle s'est construite à l'intersection du développement web de haut niveau et de l'intelligence artificielle appliquée.",
    "J'ai débuté en concevant des architectures web robustes et des plateformes e-commerce évolutives, où l'accent était mis sur l'efficacité des flux de données et l'expérience utilisateur. Très vite, j'ai intégré des solutions d'IA au cœur de ces systèmes, notamment via des moteurs de recommandation personnalisés et l'automatisation de processus complexes.",
    "Spécialisé dans le déploiement d'applications intelligentes (ML, NLP, IA Générative), je transforme des concepts théoriques en outils concrets : de la création de sites e-commerce dopés à l'IA jusqu'à l'implémentation de systèmes IoT connectés. Mon parcours est guidé par une mission simple : bâtir des infrastructures web solides capables d'héberger et de sublimer le potentiel du Machine Learning pour répondre aux défis métier réels."
  ],
  highlights: [
    {
      title: "Intelligence Artificielle",
      description: "Expertise en Machine Learning et Deep Learning avec TensorFlow et PyTorch",
    },
    {
      title: "Analyse de Données",
      description: "Maîtrise de l'analyse approfondie et visualisation avec Power BI",
    },
    {
      title: "Autonomie & Rigueur",
      description: "Capacité à mener des projets complexes de manière proactive et structurée",
    },
  ],
};

export const skills = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Scikit-Learn", "PyTorch", "Transformers", "SDXL"],
  },
  {
    category: "Développement Web",
    items: ["React", "Django", "JavaScript", "HTML/CSS", "API REST"],
  },
  {
    category: "Programmation",
    items: ["Python", "JavaScript", "C/C++", "SQL"],
  },
  {
    category: "Outils & Technologies",
    items: ["Notion", "Automatisation (n8n/make)", "Power BI", "MS Office", "Git", "GitHub/GitLab"],
  },
  {
    category: "Data & IA",
    items: ["RAG", "Fine-tuning", "Langchain", "base de données Vectorielles", "NLP", "Computer Vision", "Data Analysis", "IoT (Arduino, capteurs)", "API"],
  },
  {
    category: "Soft Skills",
    items: ["Autonomie", "Adaptabilité", "Rigoureux", "Proactif", "Travail d'équipe"],
  },
];

export const projects = [
  {
    title: "KC-Jobs - Cockpit de Recherche d'Emploi IA",
    description:
      "Hub intelligent centralisant la recherche d'emploi. Architecture 'Triple Backend' (Next.js, Supabase, n8n) avec matching sémantique (pgvector), scraping multi-sources automatisé et parsing de CV par IA.",
    image: `${basePath}/projects/kc-jobs-dashboard.png`,
    tags: ["Next.js", "Supabase", "n8n", "AI", "pgvector"],
    github: "https://github.com/ClaudeK027/KC-Jobs",
    demo: "",
    featured: true,
  },
  {
    title: "Unidaily - Application de Gestion de Vie Étudiante",
    description:
      "Plateforme complète pour la gestion de la vie étudiante avec tableau de bord personnalisé, emploi du temps interactif, profil étudiant, gestion des événements du campus. Disponible en version web et mobile.",
    image: `${basePath}/projects/unidaily.png`,
    tags: ["React", "React Native", "Django", "Figma"],
    github: "https://github.com/ClaudeK027/Unidaily-project",
    demo: "",
    featured: true,
  },
  {
    title: "Plateforme de MLOps & Fine-Tuning de LLM (Full-Stack)",
    description:
      "Conception et développement d'une solution bout-en-bout pour le fine-tuning de modèles de langage, intégrant les principes de MLOps pour garantir la traçabilité et la performance des entraînements.",
    image: `${basePath}/projects/fine-tuner-dashboard.png`,
    tags: ["React", "Django", "Transformers", "TensorFlow"],
    github: "https://github.com/ClaudeK027/Fine-Tuner-app",
    demo: "",
    featured: true,
  },
  {
    title: "Chatbot RAG - Constitution Française",
    description:
      "Chatbot intelligent basé sur la méthode RAG (Retrieval-Augmented Generation) utilisant le modèle Llama pour répondre aux questions sur la Constitution française. Interface développée avec Streamlit.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    tags: ["RAG", "Llama", "Streamlit", "Python", "NLP"],
    github: "https://github.com/ClaudeK027/chatbot-constitution-francaise",
    demo: "",
    featured: true,
  },
  {
    title: "Plateforme E-commerce avec IA",
    description:
      "Développement d'une plateforme e-commerce incluant un système de recommandation basé sur l'IA pour personnaliser l'expérience utilisateur et optimiser les ventes.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Python", "Machine Learning", "Django", "Recommandation System"],
    github: "https://github.com/ClaudeK027",
    demo: "",
    featured: false,
  },
  {
    title: "Dashboard BI Interactif",
    description:
      "Création d'un tableau de bord Business Intelligence interactif pour l'analyse des données financières. Visualisations dynamiques et KPIs en temps réel développés avec Flask.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Flask", "Python", "Data Visualization", "BI", "Analytics"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    title: "Système de Ruches Connectées IoT",
    description:
      "Conception d'un système de ruches connectées avec analyse des comportements pour l'optimisation des récoltes et maintenance des infrastructures réseau IoT.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["IoT", "Data Analysis", "Python", "Power BI"],
    github: "https://github.com/ClaudeK027",
    demo: "",
    featured: false,
  },
];

export const experience = [
  {
    company: "CHAPIOCK",
    position: "Développeur IA | Stage",
    period: "Mai 2024 - Août 2024",
    description:
      "Conception et développement d'une plateforme de e-commerce, incluant la collecte, le stockage et l'organisation de grandes quantités de données. Développement et intégration d'un système de recommandation basé sur l'IA pour personnaliser l'expérience utilisateur.",
    technologies: ["Python", "Machine Learning", "Django", "Data Management"],
  },
  {
    company: "ARTIFY - HEMELGESE",
    position: "Développeur IA | Clinique de l'IA",
    period: "Jan 2024 - Mai 2024",
    description:
      "Développement d'une architecture de style de transfert via l'IA Générative, en utilisant des modèles de diffusion (SDXL). Entraînement et optimisation des modèles en ajustant les hyperparamètres.",
    technologies: ["SDXL", "Diffusion Models", "PyTorch", "IA Générative"],
  },
  {
    company: "SIMCITY",
    position: "Data Analyst | Stage",
    period: "Jun 2023 - Août 2023",
    description:
      "Conception et mise en œuvre d'un système de ruches connectées. Configuration et maintenance des infrastructures réseau IoT. Optimisation des flux de données pour améliorer l'efficacité des systèmes de surveillance.",
    technologies: ["Arduino", "IoT", "Data Analysis", "Python"],
  },
  {
    company: "PITCHBOY",
    position: "Data Analyst | Clinique de l'IA",
    period: "Jan 2023 - Mai 2023",
    description:
      "Réalisation d'analyses approfondies des conversations, extraction de caractéristiques clés. Utilisation des modèles de traitement du langage naturel (API GPT, BERT) pour générer des insights exploitables.",
    technologies: ["NLP", "BERT", "GPT API", "Python", "Data Analysis"],
  },
];

export const education = [
  {
    school: "NEXTA DIGITAL SCHOOL",
    degree: "Bachelor Data & Business Intelligence",
    period: "2025 - 2026",
    description: "Formation spécialisée en Data Science et Business Intelligence.",
  },
  {
    school: "AUXBURY SCHOOL FOR TECHNOLOGY BUSINESS & SOCIETY",
    degree: "Programme Grande École",
    period: "2022 - 2024",
    description: "Formation en technologies, business et société.",
  },
  {
    school: "UNIVERSITÉ FAIDHERBE",
    degree: "Information et Communication Technology & STMG",
    period: "2020 - 2022",
    description: "Formation en technologies de l'information et communication.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/",
  },
  // Ajoutez d'autres certifications...
];

export const testimonials = [
  {
    name: "Client / Collègue",
    position: "CEO, Entreprise",
    content:
      "Un excellent développeur avec qui il est très agréable de travailler. Livraison de qualité et dans les délais.",
    avatar: "/testimonials/person1.jpg",
  },
  // Ajoutez d'autres témoignages...
];

// Configuration du site
export const siteConfig = {
  name: "Portfolio",
  description: "Portfolio de développeur moderne",
  url: "https://ClaudeK027.github.io/Portfolio",
  ogImage: `${basePath}/og-image.jpg`,
  keywords: [
    "portfolio",
    "développeur",
    "web",
    "react",
    "next.js",
    "typescript",
    "full stack",
  ],
  author: personalInfo.name,
};

// Analytics
export const analytics = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  // Ajoutez d'autres services d'analytics...
};

// Features toggles
export const features = {
  showExperience: true, // Activer/désactiver la section Expérience
  showEducation: true, // Activer/désactiver la section Éducation
  showTestimonials: false, // Activer/désactiver les témoignages
  showBlog: false, // Activer/désactiver le blog
  enableContactForm: true, // Activer/désactiver le formulaire de contact
  enableDarkMode: false, // Activer/désactiver le mode sombre (à implémenter)
};
