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
  baseline: "J'automatise ce qui prend du temps. Je construis ce qui crée de la valeur.",
  description:
    "Je conçois et déploie des applications web fullstack et des systèmes IA sur mesure. Automatisation de processus, plateformes intelligentes, intégration de LLMs : je prends en charge vos projets de l'architecture à la mise en production.",
  location: "69007 - Lyon",
  email: "menyeclaude33@outlook.fr",
  phone: "+33 7 59 17 07 26",
  resumeUrl: `${basePath}/CV-Claude.pdf`,
  avatarUrl: `${basePath}/avatar.jpg`, // Ajoutez votre photo dans public/
};

export const calendly = {
  url: "https://calendly.com/menyeclaude33/30min",
  duration: "30 min",
  label: "Réserver un appel découverte",
  description:
    "Échangeons 30 minutes pour cadrer votre projet — sans engagement.",
};

export const socialLinks = {
  github: "https://github.com/ClaudeK027",
  linkedin: "https://www.linkedin.com/in/claudemenye027",
  codeur: "https://www.codeur.com/-kaizenc",
  twitter: "",
  email: "mailto:menyeclaude33@outlook.fr",
  // Ajoutez d'autres liens selon vos besoins
  portfolio: "",
  medium: "",
};

export interface AboutPrinciple {
  title: string;
  description: string;
  icon: "search" | "layers" | "settings" | "target";
}

export const aboutMe = {
  title: "Mon Parcours",
  manifesto:
    "Plus qu'un développeur, un explorateur de solutions web & IA.",
  principles: [
    {
      title: "Le bon problème",
      description:
        "Avant d'écrire une ligne de code, je cherche à comprendre les rouages de votre activité pour identifier où la technologie crée vraiment de la valeur.",
      icon: "search",
    },
    {
      title: "Sur mesure",
      description:
        "Chaque mission est construite spécifiquement : architecture adaptée, stack choisie pour durer, résultat pensé pour votre usage réel.",
      icon: "layers",
    },
    {
      title: "Production-ready",
      description:
        "Je ne livre pas des démos : APIs robustes, pipelines de données, modèles d'IA intégrés dans des interfaces utilisables — déployés et monitorés.",
      icon: "settings",
    },
    {
      title: "Valeur concrète",
      description:
        "De l'automation métier à l'IA générative en production, je transforme la complexité technique en impact mesurable pour votre projet.",
      icon: "target",
    },
  ] as AboutPrinciple[],
  description: [
    "Plus qu'un développeur, un explorateur de solutions web & IA.",
    "Ma démarche commence toujours par une question simple : quel est le vrai problème à résoudre ? Avant d'écrire une seule ligne de code, je cherche à comprendre les rouages de votre activité pour identifier où la technologie peut réellement faire la différence.",
    "Je travaille en indépendant sur des projets web et IA pour des clients qui veulent aller au-delà des solutions génériques. Chaque mission est construite sur mesure : architecture adaptée, stack choisie pour durer, résultat pensé pour votre usage réel.",
    "Mon approche repose sur la profondeur technique. Je ne livre pas des démos, je déploie des systèmes en production : APIs robustes, pipelines de données, modèles d'IA intégrés dans des interfaces utilisables.",
    "Que vous ayez besoin d'automatiser un processus métier, de construire une plateforme intelligente ou d'intégrer l'IA générative dans votre produit, je transforme la complexité technique en valeur concrète pour votre projet."
  ],
  history: [
    "Mon parcours s'est construit à l'intersection du développement web fullstack et de l'IA appliquée, sur des projets variés qui m'ont confronté à des contraintes métier réelles dès le départ.",
    "J'ai conçu des systèmes concrets dans des contextes différents : moteurs de recommandation pour des plateformes e-commerce, architectures de transfert de style par IA générative (SDXL), pipelines d'analyse NLP et systèmes IoT de collecte de données. Des problématiques distinctes, une exigence commune : que ça tourne en conditions réelles.",
    "Aujourd'hui, je prends en charge des missions freelance de bout en bout : de la définition de l'architecture à la mise en production, en passant par l'intégration de LLMs (RAG, fine-tuning, agents multi-modèles), la conception d'APIs backend et la livraison d'interfaces web modernes."
  ],
  highlights: [
    {
      title: "Intelligence Artificielle & ML",
      description: "Conception de systèmes IA en production : RAG, fine-tuning LLM, agents multi-modèles, computer vision et NLP appliqué à des cas métier réels.",
    },
    {
      title: "Développement Web Fullstack",
      description: "Conception d'applications web complètes : interfaces React/Next.js, APIs FastAPI/Node.js, bases de données, du design à la livraison.",
    },
    {
      title: "Déploiement & Production",
      description: "Mise en production sur Vercel, Railway et Docker, avec CI/CD, monitoring et architectures pensées pour passer à l'échelle.",
    },
  ],
};

export const skills = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Scikit-Learn", "PyTorch", "Transformers", "SDXL", "LLM (Gemini, Claude, GPT)"],
  },
  {
    category: "Développement Web",
    items: ["Next.js", "Node.js", "React Native", "FastAPI", "Django", "TypeScript", "JavaScript", "HTML/CSS", "API REST"],
  },
  {
    category: "Programmation",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    category: "Outils & Technologies",
    items: ["Docker", "Supabase", "Stripe", "Vercel", "Railway", "Automatisation (n8n/make)", "Power BI", "Git", "GitHub/GitLab"],
  },
  {
    category: "Data & IA",
    items: ["RAG", "Fine-tuning", "LangChain", "Bases de données Vectorielles", "NLP", "Computer Vision", "Data Analysis", "IoT (Arduino, capteurs)", "Prompt Engineering"],
  },
  {
    category: "Soft Skills",
    items: ["Autonomie", "Adaptabilité", "Rigoureux", "Proactif", "Travail d'équipe"],
  },
];

export type ProjectCategory = "ai" | "web" | "data";

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  ai: "IA & ML",
  web: "Web Fullstack",
  data: "Data & IoT",
};

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  techStack: { name: string }[];
  highlights: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  categories: ProjectCategory[];
}

export const projects: Project[] = [
  {
    title: "BETIX - Plateforme SaaS de Pronostics Sportifs IA",
    description:
      "Plateforme SaaS complète de pronostics sportifs propulsés par l'IA (Gemini, Claude, GPT). Couvre Football, Basketball et Tennis avec analyses détaillées, scores de confiance et suivi temps réel des matchs.",
    longDescription:
      "BETIX est une plateforme SaaS de pronostics sportifs propulsés par l'intelligence artificielle, couvrant trois sports — Football, Basketball et Tennis. Elle agrège plus de 15 sources de données par match (statistiques, forme récente, confrontations directes, cotes bookmakers, ratings Elo, arbitres) pour générer des analyses détaillées via des LLM multi-providers (Gemini, Claude, GPT).\n\nChaque prédiction est classée en 3 niveaux de confiance (Safe, Value, Risky) et accompagnée d'une analyse experte rédigée en langage naturel, de facteurs clés avec indicateurs d'impact, et des cotes associées. Le système inclut un suivi temps réel des matchs en direct avec mises à jour automatiques des scores.\n\nL'architecture repose sur un frontend Next.js 15 (App Router, Server Components, shadcn/ui) et un backend FastAPI Python avec 4 workers gérés par Supervisord : API, worker live, sync données et batch IA. Le modèle freemium offre 2 prédictions/jour gratuites avec accès illimité en premium via Stripe.",
    image: `${basePath}/projects/betix/landing.png`,
    images: [
      `${basePath}/projects/betix/landing.png`,
      `${basePath}/projects/betix/features.png`,
      `${basePath}/projects/betix/pricing.png`,
      `${basePath}/projects/betix/login.png`,
      `${basePath}/projects/betix/dashboard.png`,
      `${basePath}/projects/betix/football.png`,
      `${basePath}/projects/betix/basketball.png`,
      `${basePath}/projects/betix/match-detail.png`,
      `${basePath}/projects/betix/predictions.png`,
      `${basePath}/projects/betix/explorer.png`,
    ],
    tags: ["Next.js 15", "FastAPI", "LLM Multi-Provider", "Supabase", "Stripe", "SaaS"],
    techStack: [
      { name: "Next.js 15" },
      { name: "TypeScript" },
      { name: "Tailwind CSS v4" },
      { name: "shadcn/ui" },
      { name: "Framer Motion" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Supabase (PostgreSQL)" },
      { name: "Gemini / Claude / GPT" },
      { name: "Stripe" },
      { name: "Docker" },
      { name: "Supervisord" },
      { name: "Vercel" },
      { name: "Railway" },
    ],
    highlights: [
      "Moteur IA multi-provider (Gemini, Claude, GPT) avec circuit breaker et retry",
      "Agrégation de 15+ sources de données par match pour des prédictions précises",
      "Architecture microservices : 4 workers (API, live, data sync, batch IA)",
      "Suivi temps réel des matchs avec machine d'états (scheduled → live → finished)",
      "Système de paiement Stripe complet avec webhooks et gestion abonnements",
      "Double schéma DB : public (UI) et analytics (données IA internes)",
    ],
    github: "https://github.com/ClaudeK027/Betix",
    demo: "",
    featured: true,
    categories: ["ai", "web"],
  },
  {
    title: "KC-Jobs - Cockpit de Recherche d'Emploi IA",
    description:
      "Hub intelligent centralisant la recherche d'emploi. Architecture 'Triple Backend' (Next.js, Supabase, n8n) avec matching sémantique (pgvector), scraping multi-sources automatisé et parsing de CV par IA.",
    longDescription:
      "KC-Jobs est un cockpit intelligent conçu pour révolutionner la recherche d'emploi. Le système centralise et automatise l'ensemble du processus grâce à une architecture 'Triple Backend' innovante combinant Next.js pour le frontend, Supabase pour la base de données et l'authentification, et n8n pour l'orchestration des workflows automatisés.\n\nLe cœur du système repose sur un moteur de matching sémantique propulsé par pgvector, qui analyse les compétences du candidat et les compare aux offres disponibles en temps réel. Un pipeline de scraping multi-sources collecte automatiquement les offres depuis plusieurs plateformes, tandis qu'un module de parsing par IA extrait et structure les informations clés des CV.\n\nL'interface offre un tableau de bord complet avec suivi des candidatures, statistiques de matching, et recommandations personnalisées basées sur le profil de l'utilisateur.",
    image: `${basePath}/projects/kc-jobs-dashboard.png`,
    images: [
      `${basePath}/projects/kc-jobs-dashboard.png`,
      `${basePath}/projects/kc-jobs/search.png`,
      `${basePath}/projects/kc-jobs/job-detail.png`,
      `${basePath}/projects/kc-jobs/applications.png`,
      `${basePath}/projects/kc-jobs/profile-dark.png`,
      `${basePath}/projects/kc-jobs/profile-light.png`,
      `${basePath}/projects/kc-jobs/workflow-jobs.png`,
      `${basePath}/projects/kc-jobs/workflow-profile.png`,
    ],
    tags: ["Next.js", "Supabase", "n8n", "AI", "pgvector"],
    techStack: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "n8n" },
      { name: "pgvector" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "PostgreSQL" },
      { name: "OpenAI API" },
    ],
    highlights: [
      "Matching sémantique avec pgvector pour une précision de recommandation élevée",
      "Scraping multi-sources automatisé via workflows n8n",
      "Parsing intelligent de CV par IA avec extraction structurée",
      "Architecture Triple Backend scalable et modulaire",
    ],
    github: "https://github.com/ClaudeK027/KC-Jobs",
    demo: "",
    featured: true,
    categories: ["ai", "web"],
  },
  {
    title: "Plateforme de MLOps & Fine-Tuning de LLM (Full-Stack)",
    description:
      "Conception et développement d'une solution bout-en-bout pour le fine-tuning de modèles de langage, intégrant les principes de MLOps pour garantir la traçabilité et la performance des entraînements.",
    longDescription:
      "Cette plateforme full-stack MLOps est une solution complète dédiée au fine-tuning de grands modèles de langage (LLM). Elle a été conçue pour offrir un environnement robuste et visuel permettant de configurer, lancer et analyser des entraînements de modèles sans avoir à manipuler la ligne de commande.\n\nL'orchestration des tâches d'entraînement très gourmandes en calcul est gérée par une architecture asynchrone performante s'appuyant sur Celery et Redis. Côté modélisation, l'intégration de la méthode d'optimisation LoRA (Low-Rank Adaptation) permet un fine-tuning efficace avec une consommation minimale de mémoire RAM/VRAM, rendant la plateforme scalable.\n\nOutre l'entraînement, l'application se démarque par des outils visuels avancés : un composant interactif d'exploration permet de visualiser de manière graphique toute l'architecture interne des modèles (couches existantes, dimensions tensoriels). Enfin, des routines de tests approfondies sont intégrées nativement pour évaluer rigoureusement la qualité des jeux de données fournis en entrée et valider méticuleusement les performances du modèle affiné en sortie.",
    image: `${basePath}/projects/fine-tuner-dashboard.png`,
    images: [
      `${basePath}/projects/fine-tuner-dashboard.png`,
      `${basePath}/projects/fine-tuner/architecture.png`,
      `${basePath}/projects/fine-tuner/chat-preview.png`,
      `${basePath}/projects/fine-tuner/config.png`,
      `${basePath}/projects/fine-tuner/density.png`,
      `${basePath}/projects/fine-tuner/job-detail.png`,
      `${basePath}/projects/fine-tuner/new-job.png`,
    ],
    tags: ["React", "Django", "Transformers", "TensorFlow"],
    techStack: [
      { name: "React" },
      { name: "Django" },
      { name: "Hugging Face Transformers" },
      { name: "TensorFlow" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "Celery Worker" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "REST API" },
    ],
    highlights: [
      "Pipeline MLOps complet avec versioning et reproductibilité",
      "Dashboard de monitoring des entraînements en temps réel",
      "Support multi-modèles via Hugging Face Transformers",
      "Architecture modulaire permettant le scaling horizontal",
      "Possibilité d'optimisation avancée via la méthode LoRA (Low-Rank Adaptation) pour limiter la consommation de ressources RAM",
      "Exploration graphique détaillée du graphe de modèles permettant d'en visualiser ses couches et composants internes",
      "Intégration de routines approfondies pour l'assurance qualité des datasets entrants et une évaluation rigoureuse fine-tuning",
    ],
    github: "https://github.com/ClaudeK027/Fine-Tuner-app",
    demo: "",
    featured: true,
    categories: ["ai", "web"],
  },
  {
    title: "Chatbot RAG - Constitution Française",
    description:
      "Chatbot intelligent basé sur la méthode RAG (Retrieval-Augmented Generation) utilisant le modèle Llama pour répondre aux questions sur la Constitution française. Interface développée avec Streamlit.",
    longDescription:
      "Ce chatbot exploite la technique RAG (Retrieval-Augmented Generation) pour fournir des réponses précises et sourcées sur la Constitution française. Contrairement à un LLM classique qui peut halluciner, le système RAG garantit que chaque réponse est ancrée dans le texte constitutionnel réel.\n\nLe pipeline technique comprend : l'indexation du texte constitutionnel en chunks optimisés, la création d'embeddings vectoriels pour la recherche sémantique, et la génération de réponses contextualisées via le modèle Llama. Le tout est orchestré avec LangChain pour une gestion fluide de la chaîne de traitement.\n\nL'interface Streamlit permet une interaction conversationnelle intuitive, avec affichage des sources utilisées pour chaque réponse, renforçant la transparence et la fiabilité du système.",
    image: `${basePath}/projects/chat-bot-cons/config.png`,
    images: [
      `${basePath}/projects/chat-bot-cons/config.png`,
      `${basePath}/projects/chat-bot-cons/mistral-chat.png`,
      `${basePath}/projects/chat-bot-cons/phi3-chat.png`,
    ],
    tags: ["RAG", "Llama", "Streamlit", "Python", "NLP"],
    techStack: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "Llama" },
      { name: "Streamlit" },
      { name: "FAISS" },
      { name: "NLP" },
      { name: "Embeddings" },
    ],
    highlights: [
      "Réponses sourcées et vérifiables grâce au pipeline RAG",
      "Recherche sémantique performante avec embeddings vectoriels",
      "Interface conversationnelle intuitive avec Streamlit",
      "Zéro hallucination grâce à l'ancrage constitutionnel",
    ],
    github: "https://github.com/ClaudeK027/chatbot-constitution-francaise",
    demo: "",
    featured: true,
    categories: ["ai"],
  },
  {
    title: "Unidaily - Application de Gestion de Vie Étudiante",
    description:
      "Plateforme complète pour la gestion de la vie étudiante avec tableau de bord personnalisé, emploi du temps interactif, profil étudiant, gestion des événements du campus. Disponible en version web et mobile.",
    longDescription:
      "Unidaily est une plateforme tout-en-un dédiée à simplifier et enrichir la vie étudiante au quotidien. Conçue à la fois en version web (React) et mobile (React Native), elle offre une expérience cohérente sur tous les supports.\n\nLe tableau de bord personnalisé permet à chaque étudiant de visualiser en un coup d'œil ses cours, événements à venir, et notifications importantes. L'emploi du temps interactif s'intègre directement avec les plannings universitaires et permet l'ajout d'événements personnels.\n\nLe backend Django assure une gestion robuste des données avec une API REST complète. Le design UX a été pensé et prototypé sur Figma avant le développement, garantissant une interface intuitive et moderne adaptée aux usages étudiants.",
    image: `${basePath}/projects/unidaily.png`,
    images: [
      `${basePath}/projects/unidaily.png`,
      `${basePath}/projects/unidaily/dashboard.png`,
      `${basePath}/projects/unidaily/home.png`,
      `${basePath}/projects/unidaily/planning.png`,
      `${basePath}/projects/unidaily/profile.png`,
      `${basePath}/projects/unidaily/register.png`,
    ],
    tags: ["React", "React Native", "Django", "Figma"],
    techStack: [
      { name: "React" },
      { name: "React Native" },
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "Figma" },
      { name: "PostgreSQL" },
      { name: "JavaScript" },
    ],
    highlights: [
      "Application cross-platform web et mobile avec codebase partagée",
      "Emploi du temps interactif avec synchronisation en temps réel",
      "Design UX/UI complet réalisé sur Figma avant développement",
      "API REST complète avec Django REST Framework",
    ],
    github: "https://github.com/ClaudeK027/Unidaily-project",
    demo: "",
    featured: true,
    categories: ["web"],
  },
  {
    title: "Plateforme E-commerce avec IA",
    description:
      "Développement d'une plateforme e-commerce incluant un système de recommandation basé sur l'IA pour personnaliser l'expérience utilisateur et optimiser les ventes.",
    longDescription:
      "Cette plateforme e-commerce intègre un moteur de recommandation intelligent basé sur le Machine Learning, capable d'analyser les comportements d'achat et de navigation pour proposer des produits pertinents à chaque utilisateur.\n\nLe système de recommandation utilise des algorithmes de filtrage collaboratif et de content-based filtering pour générer des suggestions personnalisées. Le backend Django gère le catalogue produits, le panier, le processus de commande et l'intégration du module IA.\n\nLes données collectées alimentent un pipeline d'apprentissage continu qui affine les recommandations au fil du temps, améliorant progressivement le taux de conversion et la satisfaction client.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    ],
    tags: ["Python", "Machine Learning", "Django", "Recommandation System"],
    techStack: [
      { name: "Python" },
      { name: "Django" },
      { name: "Scikit-Learn" },
      { name: "PostgreSQL" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
    highlights: [
      "Système de recommandation hybride (collaboratif + content-based)",
      "Pipeline d'apprentissage continu pour affiner les suggestions",
      "Gestion complète du cycle e-commerce (catalogue, panier, commandes)",
    ],
    github: "",
    demo: "",
    featured: false,
    categories: ["ai", "web"],
  },
  {
    title: "Dashboard BI Interactif",
    description:
      "Création d'un tableau de bord Business Intelligence interactif pour l'analyse des données financières. Visualisations dynamiques et KPIs en temps réel développés avec Flask.",
    longDescription:
      "Ce dashboard BI offre une vue consolidée et interactive des données financières d'entreprise. Développé avec Flask, il propose des visualisations dynamiques permettant aux décideurs d'explorer les données sous différents angles.\n\nLes KPIs clés sont affichés en temps réel avec des indicateurs de tendance. Les graphiques interactifs permettent le drill-down dans les données, le filtrage par période, département ou catégorie, et l'export de rapports personnalisés.\n\nL'architecture est conçue pour se connecter à diverses sources de données (CSV, bases SQL, APIs) et transformer automatiquement les données brutes en insights visuels exploitables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    tags: ["Flask", "Python", "Data Visualization", "BI", "Analytics"],
    techStack: [
      { name: "Flask" },
      { name: "Python" },
      { name: "Plotly" },
      { name: "Pandas" },
      { name: "SQL" },
      { name: "HTML/CSS" },
    ],
    highlights: [
      "Visualisations dynamiques avec drill-down interactif",
      "KPIs en temps réel avec indicateurs de tendance",
      "Connexion multi-sources de données (CSV, SQL, APIs)",
    ],
    github: "",
    demo: "",
    featured: false,
    categories: ["data"],
  },
  {
    title: "Système de Ruches Connectées IoT",
    description:
      "Conception d'un système de ruches connectées avec analyse des comportements pour l'optimisation des récoltes et maintenance des infrastructures réseau IoT.",
    longDescription:
      "Ce projet IoT combine capteurs Arduino, transmission de données en temps réel et analyse prédictive pour moderniser la gestion apicole. Les capteurs mesurent la température, l'humidité, le poids et l'activité sonore des ruches.\n\nLes données collectées sont transmises via un réseau IoT vers un serveur central où elles sont analysées avec Python et visualisées dans des dashboards Power BI. Des algorithmes de détection d'anomalies alertent l'apiculteur en cas de comportement inhabituel (essaimage, maladie, baisse d'activité).\n\nLe système permet d'optimiser les périodes de récolte en prédisant les pics de production à partir des données historiques et des conditions météorologiques.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    tags: ["IoT", "Data Analysis", "Python", "Power BI"],
    techStack: [
      { name: "Arduino" },
      { name: "Python" },
      { name: "Power BI" },
      { name: "IoT Sensors" },
      { name: "Data Analysis" },
      { name: "MQTT" },
    ],
    highlights: [
      "Monitoring en temps réel avec capteurs multi-paramètres",
      "Détection d'anomalies pour alertes préventives",
      "Prédiction des pics de production basée sur l'historique",
    ],
    github: "",
    demo: "",
    featured: false,
    categories: ["data", "ai"],
  },
];

export interface ProfessionalExperience {
  company: string;
  role: string;
  contract: string;
  period: string;
  description: string;
  stack: string[];
  current: boolean;
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    company: "Pachamama",
    role: "Ops & AI Automation",
    contract: "Alternance",
    period: "Février 2026 — En cours",
    description:
      "Conception et déploiement de l'écosystème d'automation centralisée (n8n, Bubble, Airtable, CRM, Slack) qui pilote 100 % des flux de données et processus métier critiques. Développement d'algorithmes de recherche sémantique (ML/NLP) pour le matching profils ↔ opportunités. Migration vers Next.js/React.",
    stack: ["n8n", "Bubble", "Airtable", "Next.js", "React", "Python", "ML/NLP"],
    current: true,
  },
  {
    company: "KC-Labs",
    role: "Développeur Freelance Web & IA",
    contract: "Fondateur",
    period: "Août 2025 — En cours",
    description:
      "Conception d'agents IA autonomes et automatisation de workflows métier en production. Développement d'applications fullstack avec architectures RAG et pipelines NLP. Réalisation de plateformes SaaS complètes (BETIX, KC-Jobs).",
    stack: ["Next.js", "FastAPI", "LangChain", "LLMs", "Supabase", "n8n", "Stripe"],
    current: true,
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

export interface Testimonial {
  name: string;
  position: string;
  content: string;
  rating: number;
  date: string;
  source?: string;
  sourceUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "lilzer",
    position: "Client BETIX — Plateforme IA de pronostics sportifs",
    content:
      "Honnêtement, tout s'est extrêmement bien passé du début à la fin. Il a été très réactif, toujours disponible pour répondre aux questions. Claude est quelqu'un de très sérieux, impliqué et à l'écoute. Le travail livré est propre, professionnel et les délais ont été respectés.",
    rating: 5,
    date: "Mars 2026",
    source: "Codeur",
    sourceUrl: "https://www.codeur.com/-kaizenc",
  },
  // TODO: remplacer/adapter avec un vrai retour utilisateur si disponible
  {
    name: "Elisabeth",
    position: "Utilisatrice Unidaily — Étudiante en école de commerce",
    content:
      "L'app Unidaily m'a clairement simplifié l'année. L'emploi du temps synchronisé et le tableau de bord centralisé évitent de jongler entre dix outils. Interface claire, retours pris en compte rapidement pendant la beta — un vrai plus pour la vie étudiante.",
    rating: 5,
    date: "Août 2025",
  },
  // TODO: remplacer/adapter avec un vrai retour utilisateur si disponible
  {
    name: "Thomas R.",
    position: "Beta-testeur KC-Jobs — Développeur en recherche d'emploi",
    content:
      "J'ai testé KC-Jobs pendant ma recherche. Le matching sémantique remonte des offres pertinentes là où d'autres plateformes me sortaient du bruit. Le parsing automatique du CV et le suivi des candidatures m'ont fait économiser plusieurs heures par semaine.",
    rating: 5,
    date: "Décembre 2025",
  },
];

export interface Offer {
  title: string;
  duration: string;
  price: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  highlighted?: boolean;
  badge?: string;
}

export const offers: Offer[] = [
  {
    title: "Application Web sur Mesure",
    duration: "Variable selon scope",
    price: "À partir de 1 500 €",
    description:
      "De la landing page percutante à l'application métier complète : je conçois et livre des produits web pensés pour vos utilisateurs réels — design soigné, architecture solide, performance et SEO au rendez-vous. Frontend, backend, base de données, déploiement : tout est pris en charge.",
    deliverables: [
      "Cadrage & maquettes",
      "Frontend Next.js / React + backend si besoin",
      "Déploiement production (Vercel, Railway, Docker)",
    ],
    ctaLabel: "Demander un devis",
  },
  {
    title: "POC Agent IA",
    duration: "5 jours",
    price: "À partir de 2 500 €",
    description:
      "De l'idée au prototype démontrable en une semaine. Je conçois et livre un agent IA fonctionnel sur votre cas d'usage le plus stratégique : support, qualification de leads, traitement de documents…",
    deliverables: [
      "Agent fonctionnel + démo accessible",
      "Code source documenté (repo Git)",
      "Stack : LangChain, LLMs, FastAPI",
    ],
    ctaLabel: "Lancer un POC",
    highlighted: true,
    badge: "Le plus demandé",
  },
  {
    title: "Setup Automation n8n",
    duration: "3 à 5 jours",
    price: "1 500 € à 2 500 €",
    description:
      "Vos outils ne communiquent pas et votre équipe perd des heures en saisie manuelle ? Je connecte vos systèmes (CRM, mailing, compta, Notion, Slack…) avec n8n et restitue le temps de vos équipes au métier.",
    deliverables: [
      "3 à 6 workflows n8n opérationnels",
      "Connexions entre vos outils existants",
      "Documentation + formation 1h",
    ],
    ctaLabel: "Automatiser mes process",
  },
];

// Configuration du site
export const siteConfig = {
  name: "Claude Menye — Développeur freelance IA & Web · Lyon · KC-Labs",
  shortName: "Claude Menye · KC-Labs",
  description:
    "Développeur freelance Web & IA basé à Lyon. Agents IA, RAG, Machine Learning, automation n8n. KC-Labs : je conçois et déploie des systèmes intelligents en production.",
  tagline: personalInfo.baseline,
  url: "https://claudek027.github.io/Portfolio",
  ogImage: `${basePath}/og-image.png`,
  keywords: [
    "freelance IA Lyon",
    "développeur freelance",
    "développeur Web Lyon",
    "machine learning",
    "agent IA",
    "RAG",
    "LLM",
    "NLP",
    "automation n8n",
    "Next.js",
    "FastAPI",
    "KC-Labs",
    "Claude Menye",
  ],
  author: personalInfo.name,
  locale: "fr_FR",
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
  showTestimonials: true, // Activer/désactiver les témoignages
  showBlog: false, // Activer/désactiver le blog
  enableContactForm: true, // Activer/désactiver le formulaire de contact
  enableDarkMode: false, // Activer/désactiver le mode sombre (à implémenter)
};
