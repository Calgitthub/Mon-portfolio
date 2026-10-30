export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Plateforme Étatique' | 'Media & CMS' | 'E-Commerce';
  role: string;
  period: string;
  client?: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  tags: string[];
  highlights: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  iconType: 'degree' | 'cert' | 'school';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experienceYear: string;
    isPrimary?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Calleb ADIBO',
  tagline: 'Développeur Full-Stack & Webmaster',
  bio: "Diplômé en Informatique de Gestion (IUT Parakou) et certifié en Développement Web No-Code (EIG-Bénin). Fort d'expériences concrètes à l'Agence Nationale de Météorologie (METEO-BENIN), au Centre Hospitalier Universitaire (CHUD-BA) et comme Webmaster pour le média international Prime News Monde. Je conçois des solutions web fiables, performantes et intuitives.",
  location: 'Cotonou & Parakou, Bénin',
  email: 'adibocalleb@gmail.com',
  phones: ['+229 01 94 83 88 93', '+229 01 97 01 95 75'],
  whatsapp: '2290194838893',
  cvPath: '/assets/aistudio/Mon_CV_Calleb_ADIBO_09-2026_1f3efa35.pdf',
  portraitImage: '/images/calleb_cv_photo.jpg',
  studioImage: '/images/calleb_adibo_portrait_1793386762758.jpg',
  availableForHire: true,
  stats: [
    { label: "Années d'Expérience & Stages", value: '4+' },
    { label: 'Projets d’Envergure Livrés', value: '5+' },
    { label: 'Technologies & CMS Maîtrisés', value: '15+' },
    { label: 'Taux d’Engagement & Rigueur', value: '100%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'synop-meteo',
    title: 'Plateforme de Gestion des Messages SYNOP',
    subtitle: 'Système météorologique d’encodage, décodage et télémesure',
    category: 'Plateforme Étatique',
    role: 'Développeur Logiciel Principal',
    period: '2025 – 2026',
    client: 'Agence Nationale de Météorologie (METEO-BENIN)',
    image: '/images/synop_official_capture.png',
    description: "Système informatique critique conçu pour l’Agence Nationale de Météorologie du Bénin (METEO-BENIN). Il assure la surveillance globale, la collecte, le décodage et l'analyse de ponctualité des télégrammes météorologiques SYNOP transmis par les stations nationales (Stations DMZ) selon les normes de l'OMM.",
    tags: ['React.js', 'Node.js', 'Express', 'TypeScript', 'Supervision Métier', 'Tableau de Bord Météo'],
    highlights: [
      'Vue Globale Admin : supervision en temps réel de l’état du système opérationnel et sauvegarde des données',
      'Analyse de ponctualité et suivi des messages transmis dans les 15 premières minutes',
      'Module de gestion des utilisateurs, des accès centralisés et des stations météorologiques régionales (DMZ)',
      'Contrôle qualité et statistiques d’assiduité du réseau de transmission national'
    ],
    featured: true
  },
  {
    id: 'primenews-monde',
    title: 'Portail Média International Prime News Monde',
    subtitle: 'Conception et webmastering de la plateforme d’actualités',
    category: 'Media & CMS',
    role: 'Webmaster & Développeur Web',
    period: '2024 – 2025',
    client: 'Prime News Monde (ex-Prime News TV Bénin)',
    image: '/images/primenews_official_capture.jpg',
    liveUrl: 'https://www.primenewsmonde.bj/',
    description: "Conception complète, structuration éditoriale et gestion quotidienne du portail d’information continue primenewsmonde.bj. Optimisation pour absorber les pics de trafic lors d’événements majeurs, intégration multimédia et référencement naturel avancé (SEO).",
    tags: ['React', 'WordPress', 'PHP', 'JavaScript', 'SEO & Core Web Vitals', 'Architecture Média'],
    highlights: [
      'Refonte globale de l’ergonomie et des gabarits d’articles pour une lecture fluide sur smartphone',
      'Intégration d’un flux vidéo web TV et fil d’actualités instantané',
      'Gains mesurables de vitesse de chargement et conformité aux bonnes pratiques Google SEO',
      'Maintenance préventive, sécurisation des données et gestion des comptes journalistes'
    ],
    featured: true
  },
  {
    id: 'meteo-stock',
    title: 'Gestion de Stock des Équipements Météorologiques',
    subtitle: 'Inventaire centralisé et suivi logistique des stations',
    category: 'Full-Stack',
    role: 'Développeur Full-Stack',
    period: '2025 – 2026',
    client: 'METEO-BENIN',
    image: '/images/project_inventory_meteo_1793385458398.jpg',
    description: "Application de gestion d'inventaire et de maintenance préventive pour le matériel de pointe météorologique (anémomètres, pluviomètres, baromètres de précision, capteurs solaires). Offre une traçabilité rigoureuse des mouvements entre le dépôt central et les stations régionales.",
    tags: ['React.js', 'Express', 'Node.js', 'SQL / Bases de données', 'Gestion de Parc', 'Traçabilité'],
    highlights: [
      'Cartographie et suivi en temps réel du statut opérationnel des équipements de chaque station',
      'Génération d’alertes de seuil minimal pour anticiper le réapprovisionnement des pièces critiques',
      'Historique complet des interventions de maintenance et fiches de vie des capteurs',
      'Exportation en un clic de bilans logistiques détaillés au format Excel et PDF'
    ],
    featured: true
  },
  {
    id: 'ecommerce-platform',
    title: 'Plateforme E-Commerce Haute Performance',
    subtitle: 'Boutique en ligne complète avec panier interactif et checkout sécurisé',
    category: 'E-Commerce',
    role: 'Développeur Full-Stack',
    period: '2024 – 2025',
    image: '/images/project_ecommerce_1793385458520.jpg',
    description: "Solution e-commerce moderne pensée pour la conversion. Dotée d'un catalogue dynamique avec recherche instantanée et filtres facettés, d'un panier d'achat fluide géré côté client avec synchronisation API, et d'un tunnel de paiement intuitif.",
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'REST API', 'Architecture Micro-Composants'],
    highlights: [
      'Catalogue avec filtrage multi-critères instantané et prévisualisation rapide des articles',
      'Panier interactif avec persistance locale et synchronisation des stocks',
      'Back-office d’administration pour la gestion des commandes, clients et remises',
      'Expérience d’achat mobile-first ultra réactive et accessible'
    ],
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'meteo-benin',
    role: 'Stage Professionnel (6 mois)',
    company: 'Agence Nationale de Météorologie (METEO-BENIN)',
    location: 'Cotonou, Bénin',
    period: '2025 – 2026',
    duration: '6 mois',
    description: "Immersion au cœur des systèmes d'information météorologiques nationaux. Conception et réalisation d'applications logicielles stratégiques pour la collecte, le traitement et la logistique des stations d'observation.",
    achievements: [
      'Développement de la plateforme de décodage et gestion des télégrammes météorologiques SYNOP',
      'Mise en place de l’outil d’inventaire et de gestion de stock des instruments d’observation',
      'Collaboration étroite avec les ingénieurs prévisionnistes et techniciens de stations'
    ],
    techStack: ['React', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'Git']
  },
  {
    id: 'chud-ba',
    role: 'Stage Professionnel (3 mois)',
    company: 'Centre Hospitalier Universitaire Départemental Borgou-Alibori (CHUD-BA)',
    location: 'Parakou, Bénin',
    period: '2025',
    duration: '3 mois',
    description: "Participation à l'exploitation et à la maintenance du système d'information hospitalier. Support aux utilisateurs des différents services médicaux et administratifs.",
    achievements: [
      'Diagnostic et maintenance préventive des postes de travail et périphériques hospitaliers',
      'Assistance au déploiement des applications de gestion des dossiers patients',
      'Sensibilisation du personnel aux bonnes pratiques de sécurité informatique'
    ],
    techStack: ['Windows 10/11', 'Pack Office', 'Réseaux & Systèmes', 'Support Informatique']
  },
  {
    id: 'primenews',
    role: 'Webmaster & Responsable Technique',
    company: 'Prime News TV Bénin (renommé Prime News Monde)',
    location: 'Bénin',
    period: '08 Octobre 2024 – 08 Février 2025',
    duration: '4 mois',
    description: "Administration technique et éditoriale du site internet d'information générale primenewsmonde.bj. Coordination avec la rédaction journalistique et veille continue sur la disponibilité de la plateforme.",
    achievements: [
      'Conception et mise en production du site internet responsive',
      'Intégration quotidienne des articles, reportages et contenus multimédias',
      'Optimisation continue du référencement naturel et des temps d’affichage',
      'Mise à niveau de la sécurité du CMS et sauvegardes planifiées'
    ],
    techStack: ['WordPress', 'PHP', 'JavaScript', 'Photoshop', 'Canva', 'SEO']
  },
  {
    id: 'divines-production',
    role: 'Stage Professionnel (6 mois)',
    company: 'Divines Production',
    location: 'Parakou, Bénin',
    period: '2023',
    duration: '6 mois',
    description: "Production web et multimédia au sein d'une agence de communication. Création de supports numériques et développement de sites vitrines.",
    achievements: [
      'Conception de maquettes et développement de sites web pour clients',
      'Création d’éléments graphiques et d’identité visuelle via Adobe Photoshop et Canva',
      'Intégration de formulaires et de fonctionnalités interactives'
    ],
    techStack: ['CMS', 'HTML/CSS', 'JavaScript', 'Adobe Photoshop', 'Canva']
  },
  {
    id: 'systeme-orbite',
    role: 'Stage Académique (3 mois)',
    company: 'Système et Orbite',
    location: 'Parakou, Bénin',
    period: '2022',
    duration: '3 mois',
    description: "Premier contact pratique avec le développement logiciel professionnel et la gestion de projet informatique.",
    achievements: [
      'Modélisation de données et conception de schémas relationnels',
      'Pratique du développement web back-end en PHP et front-end JavaScript',
      'Apprentissage de la collaboration via Git et les workflows d’équipe'
    ],
    techStack: ['PHP', 'JavaScript', 'SQL', 'Git', 'HTML5/CSS3']
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'cert-nocode',
    degree: 'Certification en Développement Web No Code',
    institution: 'École Internationale de Graphisme du Bénin (EIG-Bénin)',
    location: 'Bénin',
    period: 'Avril – Août 2024',
    details: 'Maîtrise des architectures web rapides, CMS modernes, intégration sans code et automatisation de flux.',
    iconType: 'cert'
  },
  {
    id: 'licence-iut',
    degree: 'Licence en Informatique de Gestion',
    institution: 'Institut Universitaire de Technologie — Université de Parakou (IUT-UP)',
    location: 'Parakou, Bénin',
    period: '2018 – 2022',
    details: 'Cursus universitaire complet : Algorithmique, Génie logiciel, Bases de données relationnelles, Systèmes & Réseaux, Gestion financière et organisationnelle.',
    iconType: 'degree'
  },
  {
    id: 'bac-d',
    degree: 'Baccalauréat Série D (Scientifique)',
    institution: 'Lycée Mathieu Bouké de Parakou (LMB)',
    location: 'Parakou, Bénin',
    period: '2017 – 2018',
    details: 'Formation scientifique approfondie en mathématiques, sciences de la vie et de la terre, et physique-chimie.',
    iconType: 'school'
  },
  {
    id: 'bepc',
    degree: 'Brevet d’Études du Premier Cycle (BEPC)',
    institution: 'CS "Les Tournesols"',
    location: 'Abomey-Calavi, Bénin',
    period: '2013 – 2014',
    details: 'Enseignement secondaire général.',
    iconType: 'school'
  },
  {
    id: 'cep',
    degree: 'Certificat d’Études Primaires (CEP)',
    institution: 'Cours Primaires "Zongo 2"',
    location: 'Parakou, Bénin',
    period: '2010 – 2011',
    details: 'Enseignement fondamental primaire.',
    iconType: 'school'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Langages de Programmation',
    description: 'Maitrise approfondie des langages de programmation, de script et de structuration web.',
    skills: [
      { name: 'PHP', level: 68, experienceYear: '3+ ans', isPrimary: true },
      { name: 'Python', level: 65, experienceYear: '3 ans', isPrimary: true },
      { name: 'JavaScript (ES6+)', level: 72, experienceYear: '4+ ans', isPrimary: true },
      { name: 'TypeScript', level: 69, experienceYear: '2+ ans', isPrimary: true },
      { name: 'JSX', level: 92, experienceYear: '3 ans', isPrimary: true },
      { name: 'SQL & Modélisation', level: 86, experienceYear: '4 ans', isPrimary: true },
      { name: 'HTML5 & CSS3', level: 98, experienceYear: '5 ans' }
    ]
  },
  {
    title: 'Frameworks & Architecture Web',
    description: 'Technologies d’applications dynamiques, back-end Node/Express et mobile React Native.',
    skills: [
      { name: 'React.js', level: 92, experienceYear: '3+ ans', isPrimary: true },
      { name: 'Node.js', level: 88, experienceYear: '3+ ans', isPrimary: true },
      { name: 'Express.js', level: 88, experienceYear: '3+ ans', isPrimary: true },
      { name: 'Tailwind CSS', level: 92, experienceYear: '3 ans', isPrimary: true },
      { name: 'React Native', level: 80, experienceYear: '2 ans' },
      { name: 'Vite', level: 90, experienceYear: '3 ans' },
      { name: 'API REST & Microservices', level: 90, experienceYear: '4 ans', isPrimary: true }
    ]
  },
  {
    title: 'CMS & No-Code',
    description: 'Déploiement rapide, gestion éditoriale et plateformes de contenu.',
    skills: [
      { name: 'WordPress (Thèmes & Plugins)', level: 94, experienceYear: '3+ ans', isPrimary: true },
      { name: 'Joomla', level: 78, experienceYear: '2 ans' },
      { name: 'Wix & WebAdor', level: 85, experienceYear: '2 ans' },
      { name: 'Weebly', level: 80, experienceYear: '2 ans' },
      { name: 'Solutions No-Code (EIG)', level: 88, experienceYear: '2 ans' }
    ]
  },
  {
    title: 'Outils, DevOps & Bureautique',
    description: 'Environnements de travail, versioning et administration bureautique.',
    skills: [
      { name: 'Git & GitHub', level: 90, experienceYear: '4 ans', isPrimary: true },
      { name: 'Pack Office Avancé (Access, Excel, Word)', level: 95, experienceYear: '6 ans', isPrimary: true },
      { name: 'Windows 10/11 & Maintenance', level: 92, experienceYear: '5 ans' },
      { name: 'Adobe Photoshop', level: 82, experienceYear: '3 ans' },
      { name: 'Canva Pro', level: 90, experienceYear: '3 ans' }
    ]
  }
];

export const SOFT_SKILLS = [
  'Créativité appliquée',
  'Capacité d’innovation',
  'Ouverture d’esprit',
  'Curiosité technique',
  'Assiduité & Rigueur',
  'Sens des responsabilités',
  'Prise d’initiative',
  'Excellente aisance relationnelle',
  'Capacité à travailler sous pression',
  'Esprit d’équipe',
  'Écoute active'
];

export const LANGUAGES = [
  { name: 'Français', level: 'Courant / Langue de travail', spoken: true, written: true },
  { name: 'Anglais', level: 'Technique & Professionnel', spoken: true, written: true },
  { name: 'Fon-gbe', level: 'Langue maternelle parlée', spoken: true, written: false }
];

export const INTERESTS = [
  'Veille technologique & autodidacte',
  'Développement personnel',
  'Lecture scientifique et littéraire',
  'Pratique sportive',
  'Voyages & découvertes',
  'Méditation & concentration'
];
