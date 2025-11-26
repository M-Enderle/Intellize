import { Service, BlogPost, Project, TechItem, Testimonial, FAQItem } from './types/types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Automatisierung & Workflows',
    slug: 'automatisierung',
    iconName: 'Workflow',
    imageUrl: '/images/n8n_agent.png',
    shortDescription: 'Wir automatisieren repetitive Aufgaben, damit Sie sich auf das Wesentliche konzentrieren können.',
    fullDescription: 'In der modernen Geschäftswelt ist Zeit die wertvollste Ressource. Unsere Automatisierungslösungen verbinden Ihre Tools und Workflows nahtlos miteinander. Ob komplexe Datenverarbeitung mit Python-Skripten oder visuelle Workflow-Automatisierung mit N8N – wir eliminieren manuelle Handgriffe und Fehlerquellen.',
    features: [
      'Entwicklung maßgeschneiderter Python-Skripte',
      'Einrichtung und Wartung von N8N Workflows',
      'API-Integrationen (REST & GraphQL)',
      'Automatisierte Berichterstellung und E-Mail-Versand',
      'Fehlerbehandlung und Logging Systeme'
    ],
    benefits: [
      'Reduzierung der operativen Kosten um bis zu 40%',
      'Eliminierung menschlicher Flüchtigkeitsfehler',
      'Skalierbare Prozesse ohne zusätzlichen Personalaufwand',
      'Schnellere Durchlaufzeiten für Standardaufgaben'
    ],
    process: [
      'Analyse Ihrer aktuellen manuellen Prozesse',
      'Identifikation von Automatisierungspotenzialen',
      'Entwicklung von Prototypen (Python/N8N)',
      'Deployment und Monitoring'
    ]
  },
  {
    id: '2',
    title: 'AI Implementierung',
    slug: 'ai-implementierung',
    iconName: 'BrainCircuit',
    imageUrl: '/images/meta_sam_3.png',
    shortDescription: 'Integration moderner KI-Modelle in Ihre bestehenden Geschäftsprozesse.',
    fullDescription: 'Künstliche Intelligenz ist kein Hype mehr, sondern ein essentielles Werkzeug zur Wettbewerbsfähigkeit. Wir helfen Ihnen, LLMs (Large Language Models) wie GPT-4 oder lokale Open-Source-Modelle sicher und effizient in Ihre Infrastruktur zu integrieren. Von Chatbots für den Kundensupport bis hin zur intelligenten Dokumentenanalyse.',
    features: [
      'Integration von OpenAI & Anthropic APIs',
      'Deployment lokaler LLMs (Llama, Mistral) für Datenschutz',
      'RAG (Retrieval-Augmented Generation) Systeme',
      'Prompt Engineering und Optimierung',
      'AI-gestützte Datenanalyse'
    ],
    benefits: [
      'Automatisierter 24/7 Kundensupport',
      'Sekundenschnelle Analyse großer Dokumentenmengen',
      'Personalisierte Kundenansprache durch AI',
      'Datenschutzkonforme AI-Lösungen (On-Premise)'
    ],
    process: [
      'Use-Case Workshop',
      'Auswahl des passenden Modells (Cloud vs. Lokal)',
      'Integration in Ihre Software-Landschaft',
      'Fine-Tuning und Prompt-Optimierung'
    ]
  },
  {
    id: '3',
    title: 'Server Management',
    slug: 'server-management',
    iconName: 'Server',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000',
    shortDescription: 'Sicheres Hosting, Wartung und Skalierung Ihrer Infrastruktur.',
    fullDescription: 'Ihre Applikationen benötigen ein Zuhause, das sicher, schnell und verfügbar ist. Wir übernehmen das Management Ihrer Linux-Server, Docker-Container und Cloud-Infrastrukturen. Sicherheit und Performance stehen dabei an erster Stelle, damit Ihre Dienste rund um die Uhr erreichbar sind.',
    features: [
      'Linux Server Administration (Ubuntu/Debian)',
      'Docker & Kubernetes Orchestrierung',
      'CI/CD Pipeline Einrichtung',
      'Sicherheits-Audits und Hardening',
      'Automatisierte Backups und Disaster Recovery'
    ],
    benefits: [
      'Maximale Uptime und Verfügbarkeit',
      'Schutz vor Cyber-Attacken durch Hardening',
      'Automatische Skalierung bei Lastspitzen',
      'Transparente Kostenkontrolle'
    ],
    process: [
      'Infrastruktur-Audit',
      'Einrichtung der Server-Umgebung',
      'Implementierung von Monitoring-Lösungen',
      'Laufende Wartung und Updates'
    ]
  },
  {
    id: '4',
    title: 'Data Science & Visualisierung',
    slug: 'data-science',
    iconName: 'BarChart3',
    imageUrl: 'https://christophm.github.io/interpretable-ml-book/images/shap-importance-extended.jpg',
    shortDescription: 'Verwandeln Sie rohe Daten in verständliche und handlungsrelevante Insights.',
    fullDescription: 'Daten sind das neue Gold, aber nur, wenn man sie versteht. Wir analysieren Ihre Unternehmensdaten, bereinigen sie und erstellen interaktive Dashboards, die Ihnen helfen, fundierte Entscheidungen zu treffen. Wir nutzen modernste Bibliotheken für aussagekräftige Visualisierungen.',
    features: [
      'Datenbereinigung und Preprocessing (Pandas/NumPy)',
      'Interaktive Dashboards (Streamlit, React)',
      'Statistische Auswertungen',
      'Predictive Analytics',
      'Visualisierung komplexer Zusammenhänge'
    ],
    benefits: [
      'Erkennen von versteckten Trends',
      'Datengestützte Entscheidungsfindung',
      'Echtzeit-Überblick über KPIs',
      'Prognose zukünftiger Entwicklungen'
    ],
    process: [
      'Datenquellen-Anbindung',
      'Explorative Datenanalyse (EDA)',
      'Modellierung und Berechnung',
      'Dashboard-Erstellung und Rollout'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
];

export const PROJECTS: Project[] = [
];

export const TECH_STACK: TechItem[] = [
  { name: 'Python', category: 'LANGUAGE' },
  { name: 'N8N', category: 'Automation' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Linux', category: 'OS' },
  { name: 'Redis', category: 'Datastore' },
  { name: 'Gemini, ChatGPT, ...', category: 'AI' },
  { name: 'Hetzner', category: 'Cloud' },
  { name: 'FastAPI', category: 'Framework' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'Cloudflare', category: 'CDN' }
];

export const CLIENTS: { name: string; website: string }[] = [
  { name: "ALLGÄU LIVING", website: "https://allgaeuliving.de/" },
  { name: "SCHLÜSSELDIENST ALLGÄU", website: "https://schluesseldienst-allgaeu.de/" },
  { name: "AUXMONEY GMBH", website: "https://www.auxmoney.com/" },
  { name: "ABELS UMZUG", website: "https://ihrumzugsangebot.de/"},
  { name: "YU TAEKWONDO", website: "https://yu-taekwondo.at/"},
  { name: "MEWA TEXTILIEN", website: "https://www.mewa.de/"},
  { name: "STUDIO ROTSTICH", website: "https://www.janaenderle.com/de"}
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: "Dank der Automatisierung sparen wir wöchentlich über 15 Stunden in der Buchhaltung. Die Investition hat sich in weniger als zwei Monaten amortisiert.",
    author: "Thomas Müller",
    role: "Geschäftsführer",
    company: "Müller Logistik KG"
  },
  {
    id: '2',
    content: "Intellize hat unsere alte Server-Infrastruktur komplett modernisiert. Endlich sind unsere Systeme sicher und skalierbar. Absolute Empfehlung für DevOps-Themen.",
    author: "Sarah Weber",
    role: "CTO",
    company: "TechStart GmbH"
  },
  {
    id: '3',
    content: "Die KI-Integration in unseren Kundensupport war ein Gamechanger. Wir können Anfragen jetzt 24/7 vorqualifizieren. Professionelle Umsetzung und top Beratung.",
    author: "Markus Klein",
    role: "Head of Support",
    company: "Digital Focus AG"
  },
  {
    id: '4',
    content: "Die Automatisierung unserer Workflows hat unsere Effizienz enorm gesteigert. Besonders die N8N-Integration hat uns geholfen, repetitive Aufgaben zu eliminieren.",
    author: "Anna Schmidt",
    role: "Projektmanagerin",
    company: "ALLGÄU LIVING"
  },
  {
    id: '5',
    content: "Mit der Hilfe von Intellize haben wir unsere Server-Management-Prozesse optimiert. Die Docker- und Kubernetes-Expertise hat uns viel Zeit und Geld gespart.",
    author: "Michael Bauer",
    role: "IT-Leiter",
    company: "SCHLÜSSELDIENST ALLGÄU"
  },
  {
    id: '6',
    content: "Die AI-Implementierung hat unsere Datenanalyse revolutioniert. Dank der RAG-Systeme können wir nun präzisere Insights gewinnen.",
    author: "Lisa Wagner",
    role: "Data Analyst",
    company: "AUXMONEY GMBH"
  },
  {
    id: '7',
    content: "Intellize hat uns bei der Visualisierung unserer Unternehmensdaten geholfen. Die interaktiven Dashboards sind ein großer Erfolg bei unseren Stakeholdern.",
    author: "David Fischer",
    role: "Geschäftsführer",
    company: "ABELS UMZUG"
  },
  {
    id: '8',
    content: "Die Automatisierungslösungen haben unsere Trainingsprozesse vereinfacht. Python-Skripte für die Mitgliederverwaltung sind ein Gamechanger.",
    author: "Julia Meier",
    role: "Trainerin",
    company: "YU TAEKWONDO"
  },
  {
    id: '9',
    content: "Server Management und Sicherheit waren unsere Priorität. Intellize hat uns mit Hardening und Monitoring-Lösungen perfekt unterstützt.",
    author: "Robert Schulz",
    role: "Operations Manager",
    company: "MEWA TEXTILIEN"
  },
  {
    id: '10',
    content: "Die Data Science & Visualisierung hat unsere kreativen Prozesse verbessert. Pandas und Streamlit haben uns geholfen, Daten besser zu verstehen.",
    author: "Nina Becker",
    role: "Kreativdirektorin",
    company: "STUDIO ROTSTICH"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Für wen sind Ihre Dienstleistungen geeignet?",
    answer: "Wir arbeiten primär mit kleinen bis mittelständischen Unternehmen (KMU) sowie Startups zusammen, die ihre Prozesse digitalisieren möchten. Aber auch Privatpersonen mit komplexen Data-Science-Projekten gehören zu unseren Kunden."
  },
  {
    question: "Welche Technologien nutzen Sie für Automatisierungen?",
    answer: "Unser Fokus liegt auf Python für komplexe Skripte und N8N für visuelle Workflows. Je nach Anforderung nutzen wir auch Zapier, Make oder entwickeln eigene APIs mit FastAPI."
  },
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer: "Wir starten immer mit einem unverbindlichen Erstgespräch, um Ihre Prozesse zu verstehen. Danach erstellen wir ein Konzept inkl. Kostenvoranschlag. Nach der Umsetzung bieten wir auf Wunsch auch Wartung und Support an."
  },
  {
    question: "Können Sie auch bestehende Software erweitern?",
    answer: "Ja, wir sind spezialisiert darauf, 'Silos' aufzubrechen. Wir verbinden Ihre bestehende Software (ERP, CRM, etc.) über APIs, um einen nahtlosen Datenaustausch zu ermöglichen."
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer: "Die Dauer hängt vom Umfang ab. Einfache Automatisierungen können in 1-2 Wochen umgesetzt werden, während komplexe KI-Integrationen oder Server-Migrationen mehrere Monate in Anspruch nehmen können."
  },
  {
    question: "Wie stellen Sie Datenschutz und Sicherheit sicher?",
    answer: "Datenschutz ist uns extrem wichtig. Wir halten uns an DSGVO-Richtlinien, nutzen verschlüsselte Verbindungen und bieten auf Wunsch On-Premise-Lösungen an, um sensible Daten nicht in die Cloud zu geben."
  },
  {
    question: "Bieten Sie Schulungen für meine Mitarbeiter an?",
    answer: "Ja, nach der Implementierung bieten wir Schulungen an, um sicherzustellen, dass Ihr Team die neuen Tools effektiv nutzen kann. Wir erstellen auch Dokumentationen für langfristige Unabhängigkeit."
  },
  {
    question: "Was kostet eine Zusammenarbeit mit Ihnen?",
    answer: "Die Kosten variieren je nach Projekt. Wir bieten transparente Festpreise für definierte Aufgaben oder Stundensätze für flexible Projekte. Kontaktieren Sie uns für ein individuelles Angebot."
  }
];
