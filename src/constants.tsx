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
    imageUrl: 'https://www.doc.ic.ac.uk/~nuric/posts/teaching/imperial-college-machine-learning-neural-networks/cover.gif',
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
  {
    id: '1',
    title: 'Automatisierter Rechnungs-Parser mit OCR',
    date: '12. Oktober 2023',
    excerpt: 'Wie wir mit Python, Tesseract und OpenCV den Rechnungseingang eines mittelständischen Logistikunternehmens vollständig automatisiert haben.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'OCR', 'Automation'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Die manuelle Datenerfassung ist einer der größten Zeitfresser in modernen Büros. In diesem Deep-Dive zeige ich, wie wir für einen Logistikkunden einen intelligenten Rechnungs-Parser entwickelt haben, der nicht nur Zeit spart, sondern auch die Fehlerquote auf nahezu Null reduziert.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Das Problem: Papierkram und PDF-Chaos</h2>
      <p class="mb-4">Unser Kunde erhielt monatlich ca. 1.500 Rechnungen per E-Mail. Diese mussten:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Heruntergeladen werden.</li>
        <li>Nach Lieferant sortiert werden.</li>
        <li>Geöffnet werden, um Rechnungsnummer, Datum, Netto- und Bruttobeträge sowie IBAN abzutippen.</li>
        <li>Manuell in das veraltete ERP-System eingepflegt werden.</li>
      </ul>
      <p class="mb-4">Dieser Prozess band zwei Vollzeitmitarbeiter fast zur Hälfte ihrer Arbeitszeit. Flüchtigkeitsfehler bei der IBAN-Eingabe führten zudem regelmäßig zu Rückläufern bei Überweisungen.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Lösung: Ein Python-basierter OCR-Worker</h2>
      <p class="mb-4">Wir entschieden uns gegen teure Enterprise-Lösungen wie ABBYY und für einen maßgeschneiderten, kosteneffizienten Ansatz auf Basis von Open-Source-Technologien. Der Kern der Anwendung läuft in einem Docker-Container, was das Deployment auf dem bestehenden Linux-Server des Kunden extrem einfach machte.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Der Tech-Stack</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Python 3.10:</strong> Als robuste Basis für die Logik.</li>
        <li><strong>Tesseract OCR:</strong> Die wohl beste Open-Source OCR-Engine, gewartet von Google.</li>
        <li><strong>OpenCV:</strong> Für die Bildvorverarbeitung (Denoising, Thresholding), um die OCR-Genauigkeit zu erhöhen.</li>
        <li><strong>Regular Expressions (Regex):</strong> Für das präzise Extrahieren strukturierter Daten.</li>
        <li><strong>FastAPI:</strong> Um das Ganze als Microservice bereitzustellen.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Deep Dive: Die Bildvorverarbeitung</h2>
      <p class="mb-4">Der größte Hebel für gute OCR-Ergebnisse ist nicht die OCR-Engine selbst, sondern das Bild, das man ihr füttert. Scans sind oft schief, haben Schatten oder schlechten Kontrast. Bevor wir Tesseract auf das Dokument loslassen, durchläuft jedes PDF folgende Pipeline:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Konvertierung:</strong> PDF zu hochauflösendem PNG (300 DPI) mittels <code>pdf2image</code>.</li>
        <li><strong>Grayscale:</strong> Entfernung von Farbinformationen, um Rauschen zu minimieren.</li>
        <li><strong>Binarisierung:</strong> Anwendung eines adaptiven Thresholds, um Text hart schwarz und den Hintergrund hart weiß zu machen.</li>
        <li><strong>Deskewing:</strong> Automatische Korrektur der Rotation, falls das Dokument schief eingescannt wurde.</li>
      </ol>

      <h2 class="text-2xl font-bold mb-4 mt-8">Datenextraktion mit Fuzzy Logic</h2>
      <p class="mb-4">Ein großes Problem bei Rechnungen ist, dass "Rechnungsnummer" mal als "Rech-Nr.", mal als "Invoice #", oder einfach nur "Nr." bezeichnet wird. Starre Layout-Schablonen funktionieren hier nicht.</p>
      <p class="mb-4">Wir haben daher einen Algorithmus entwickelt, der nach Schlüsselwörtern sucht und dann in der räumlichen Umgebung (Bounding Box) nach passenden Werten sucht, die einem bestimmten Regex-Muster entsprechen. Kombiniert mit Fuzzy-String-Matching (via <code>thefuzz</code> Library) erreichen wir eine Erkennungsrate von über 98%.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Integration in das ERP</h2>
      <p class="mb-4">Die extrahierten Daten werden validiert (z.B. Summenprüfung: Netto + Steuer = Brutto). Stimmen die Daten, generiert unser Skript eine JSON-Payload, die direkt an die REST-Schnittstelle des ERP-Systems gesendet wird. Stimmen sie nicht, wird die Rechnung in einen "Review-Ordner" verschoben und der Mitarbeiter erhält eine Slack-Benachrichtigung mit einem Link zur manuellen Prüfung.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Ergebnis & Fazit</h2>
      <p class="mb-4">Nach drei Monaten im Einsatz konnten wir folgende Metriken verzeichnen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Reduktion der manuellen Eingabezeit um <strong>90%</strong>.</li>
        <li>ROI (Return on Invest) wurde bereits nach 8 Wochen erreicht.</li>
        <li>Mitarbeiterzufriedenheit stieg signifikant, da stumpfe Abtipp-Arbeit entfiel.</li>
      </ul>
      <p>Dieses Projekt zeigt, dass man mit intelligent eingesetzter Open-Source-Technologie oft bessere und flexiblere Ergebnisse erzielen kann als mit teurer Standard-Software.</p>
    `
  },
  {
    id: '2',
    title: 'Server Monitoring Dashboard',
    date: '05. November 2023',
    excerpt: 'Warum Grafana manchmal zu viel ist: Entwicklung eines minimalistischen Echtzeit-Dashboards für Docker-Umgebungen mit React und WebSockets.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Docker', 'DevOps'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Jeder SysAdmin kennt sie: Prometheus und Grafana. Die Industriestandards für Monitoring. Aber manchmal ist ein Kampfjet einfach das falsche Werkzeug, wenn man nur zum Supermarkt will. Für ein Kundenprojekt mit 50 Microservices bauten wir eine leichtgewichtige, maßgeschneiderte Alternative.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Anforderung: Einfachheit vor Mächtigkeit</h2>
      <p class="mb-4">Der Kunde, eine Marketing-Agentur mit eigener kleiner Server-Farm, wollte wissen: "Laufen alle Container? Wie voll ist die Disk? Wie hoch ist die CPU-Last?". Grafana war für das nicht-technische Management zu komplex, die Konfiguration zu aufwendig. Das Ziel war ein "Single Pane of Glass", das auf einem großen Monitor im Büro hängen kann.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Architektur: Push statt Pull</h2>
      <p class="mb-4">Klassisches Monitoring funktioniert oft nach dem Pull-Prinzip (Prometheus scrapt Metriken). Wir wollten jedoch Echtzeit-Feedback ohne Verzögerung. Daher entschieden wir uns für eine WebSocket-Architektur.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Backend: Python & Docker Socket</h3>
      <p class="mb-4">Das Herzstück ist ein kleiner Python-Service, der direkt auf dem Host-System läuft. Er nutzt die Docker Engine API (via <code>docker-py</code>), um Statusinformationen aller Container abzufragen. </p>
      <p class="mb-4">Zusätzlich liest er System-Metriken (CPU, RAM, Disk I/O) über <code>psutil</code> aus. Diese Daten werden nicht in eine Datenbank geschrieben (was Overhead erzeugt hätte), sondern direkt über einen WebSocket-Stream gebroadcastet.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Frontend: React & Framer Motion</h3>
      <p class="mb-4">Das Dashboard selbst ist eine React Single Page Application (SPA). Wir nutzen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Recharts:</strong> Für flüssige Live-Graphen der CPU-Auslastung.</li>
        <li><strong>Framer Motion:</strong> Für sanfte Übergänge, wenn Container starten oder stoppen. Visuelles Feedback ist wichtig!</li>
        <li><strong>Tailwind CSS:</strong> Für schnelles Styling und Dark Mode Support.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Herausforderung: Performance</h2>
      <p class="mb-4">Wenn 50 Container jede Sekunde Metriken senden, kann der Browser schnell überfordert sein. Wir mussten einige Optimierungen vornehmen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Throttling:</strong> Das Backend sendet Updates maximal 2x pro Sekunde, auch wenn sich Daten öfter ändern.</li>
        <li><strong>Data Merging:</strong> Im Frontend werden nur die Deltas verarbeitet, nicht der gesamte State neu gerendert.</li>
        <li><strong>Canvas Rendering:</strong> Für die historischen Graphen nutzen wir Canvas statt SVG, da dies bei vielen Datenpunkten performanter ist.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Deployment & Sicherheit</h2>
      <p class="mb-4">Das gesamte Tool wird selbst als Docker-Stack (Frontend + Backend + Nginx Reverse Proxy) deployed. Der Zugriff ist über Basic Auth und IP-Whitelisting geschützt, sodass nur das Büro-Netzwerk Zugriff hat.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Fazit</h2>
      <p class="mb-4">Das Ergebnis ist ein visuell ansprechendes, extrem schnelles Dashboard, das genau das tut, was es soll – und nicht mehr. Es verbraucht weniger als 50MB RAM auf dem Server und bietet dem Kunden die nötige Transparenz auf einen Blick.</p>
    `
  },
  {
    id: '3',
    title: 'N8N Workflow für Social Media',
    date: '20. Januar 2024',
    excerpt: 'Content-Verteilung auf LinkedIn, Twitter und Instagram automatisiert: Ein Blick unter die Haube unserer "Write Once, Publish Everywhere" Engine.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    tags: ['N8N', 'Social Media', 'No-Code'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Social Media ist für moderne Unternehmen unverzichtbar, aber die Pflege von drei oder vier Kanälen ist ein Vollzeitjob. In diesem Artikel erkläre ich, wie wir für ein Start-up einen vollautomatischen Publishing-Workflow mit N8N gebaut haben, der 80% der manuellen Arbeit eliminiert.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Strategie: Content Recycling</h2>
      <p class="mb-4">Die Idee war simpel: Ein "Master-Content-Piece" (z.B. ein Blogpost oder eine Notiz in Notion) soll automatisch in die passenden Formate für LinkedIn (Business-Ton), Twitter (Thread/Kurzform) und Instagram (Visual + Caption) umgewandelt werden.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Das Werkzeug: N8N</h2>
      <p class="mb-4">N8N ist ein Workflow-Automatisierungstool, ähnlich wie Zapier, aber mächtiger und selbst hostbar. Da Datenschutz für uns wichtig war, hosten wir N8N auf einem eigenen Hetzner Cloud Server.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 1: Der Trigger (Notion)</h3>
      <p class="mb-4">Alles beginnt in Notion. Wir haben eine Datenbank "Content Pipeline". Sobald der Status einer Karte auf "Ready to Publish" gesetzt wird, feuert Notion einen Webhook an unseren N8N-Workflow.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 2: Die KI-Transformation (OpenAI GPT-4)</h3>
      <p class="mb-4">Der Rohtext aus Notion wird an die OpenAI API gesendet. Hier nutzen wir komplexe System-Prompts, um unterschiedliche Varianten zu erzeugen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>LinkedIn:</strong> Professionell, mit Absätzen, Emojis und 3-5 relevanten Hashtags.</li>
        <li><strong>Twitter:</strong> Unter 280 Zeichen, prägnant, provokant oder informativ.</li>
        <li><strong>Instagram:</strong> Inspirierend, "Link in Bio" Hinweis, Block mit 30 Hashtags.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 3: Visuals Generierung (DALL-E 3)</h3>
      <p class="mb-4">Ist kein Bild in Notion hinterlegt, analysiert GPT-4 den Text und schreibt einen Prompt für DALL-E 3. N8N sendet diesen Prompt an die Image-Generation-API, lädt das Bild herunter und optimiert es (Formatierung auf 1:1 oder 16:9) mittels eines kleinen Python-Code-Nodes innerhalb von N8N.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 4: Das Publishing</h3>
      <p class="mb-4">Nun werden die APIs der Plattformen angesprochen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>LinkedIn API:</strong> Postet Text und Bild als "Organic Share".</li>
        <li><strong>Twitter API (v2):</strong> Lädt Media hoch und erstellt den Tweet.</li>
        <li><strong>Buffer/Instagram:</strong> Da Instagrams API restriktiv ist, nutzen wir hier Buffer als Zwischenschicht, die von N8N angesteuert wird.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Error Handling & Human in the Loop</h2>
      <p class="mb-4">Was, wenn die KI Halluzinationen hat? Wir haben einen "Approval-Step" eingebaut. Bevor der Post live geht, sendet N8N die Entwürfe in einen privaten Slack-Channel. Dort gibt es zwei Buttons: "Approve" und "Reject". Erst bei Klick auf "Approve" läuft der Workflow weiter.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Zusammenfassung</h2>
      <p class="mb-4">Durch diesen Workflow konnte das Start-up seine Social Media Frequenz von 2 Posts pro Woche auf 5 Posts pro Woche steigern, bei gleichbleibendem Personalaufwand. Die Konsistenz stieg, und damit auch die Reichweite (+45% in 2 Monaten).</p>
    `
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automatisierter Rechnungs-Parser mit OCR',
    date: '12. Oktober 2023',
    excerpt: 'Wie wir mit Python, Tesseract und OpenCV den Rechnungseingang eines mittelständischen Logistikunternehmens vollständig automatisiert haben.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'OCR', 'Automation'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Die manuelle Datenerfassung ist einer der größten Zeitfresser in modernen Büros. In diesem Deep-Dive zeige ich, wie wir für einen Logistikkunden einen intelligenten Rechnungs-Parser entwickelt haben, der nicht nur Zeit spart, sondern auch die Fehlerquote auf nahezu Null reduziert.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Das Problem: Papierkram und PDF-Chaos</h2>
      <p class="mb-4">Unser Kunde erhielt monatlich ca. 1.500 Rechnungen per E-Mail. Diese mussten:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Heruntergeladen werden.</li>
        <li>Nach Lieferant sortiert werden.</li>
        <li>Geöffnet werden, um Rechnungsnummer, Datum, Netto- und Bruttobeträge sowie IBAN abzutippen.</li>
        <li>Manuell in das veraltete ERP-System eingepflegt werden.</li>
      </ul>
      <p class="mb-4">Dieser Prozess band zwei Vollzeitmitarbeiter fast zur Hälfte ihrer Arbeitszeit. Flüchtigkeitsfehler bei der IBAN-Eingabe führten zudem regelmäßig zu Rückläufern bei Überweisungen.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Lösung: Ein Python-basierter OCR-Worker</h2>
      <p class="mb-4">Wir entschieden uns gegen teure Enterprise-Lösungen wie ABBYY und für einen maßgeschneiderten, kosteneffizienten Ansatz auf Basis von Open-Source-Technologien. Der Kern der Anwendung läuft in einem Docker-Container, was das Deployment auf dem bestehenden Linux-Server des Kunden extrem einfach machte.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Der Tech-Stack</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Python 3.10:</strong> Als robuste Basis für die Logik.</li>
        <li><strong>Tesseract OCR:</strong> Die wohl beste Open-Source OCR-Engine, gewartet von Google.</li>
        <li><strong>OpenCV:</strong> Für die Bildvorverarbeitung (Denoising, Thresholding), um die OCR-Genauigkeit zu erhöhen.</li>
        <li><strong>Regular Expressions (Regex):</strong> Für das präzise Extrahieren strukturierter Daten.</li>
        <li><strong>FastAPI:</strong> Um das Ganze als Microservice bereitzustellen.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Deep Dive: Die Bildvorverarbeitung</h2>
      <p class="mb-4">Der größte Hebel für gute OCR-Ergebnisse ist nicht die OCR-Engine selbst, sondern das Bild, das man ihr füttert. Scans sind oft schief, haben Schatten oder schlechten Kontrast. Bevor wir Tesseract auf das Dokument loslassen, durchläuft jedes PDF folgende Pipeline:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Konvertierung:</strong> PDF zu hochauflösendem PNG (300 DPI) mittels <code>pdf2image</code>.</li>
        <li><strong>Grayscale:</strong> Entfernung von Farbinformationen, um Rauschen zu minimieren.</li>
        <li><strong>Binarisierung:</strong> Anwendung eines adaptiven Thresholds, um Text hart schwarz und den Hintergrund hart weiß zu machen.</li>
        <li><strong>Deskewing:</strong> Automatische Korrektur der Rotation, falls das Dokument schief eingescannt wurde.</li>
      </ol>

      <h2 class="text-2xl font-bold mb-4 mt-8">Datenextraktion mit Fuzzy Logic</h2>
      <p class="mb-4">Ein großes Problem bei Rechnungen ist, dass "Rechnungsnummer" mal als "Rech-Nr.", mal als "Invoice #", oder einfach nur "Nr." bezeichnet wird. Starre Layout-Schablonen funktionieren hier nicht.</p>
      <p class="mb-4">Wir haben daher einen Algorithmus entwickelt, der nach Schlüsselwörtern sucht und dann in der räumlichen Umgebung (Bounding Box) nach passenden Werten sucht, die einem bestimmten Regex-Muster entsprechen. Kombiniert mit Fuzzy-String-Matching (via <code>thefuzz</code> Library) erreichen wir eine Erkennungsrate von über 98%.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Integration in das ERP</h2>
      <p class="mb-4">Die extrahierten Daten werden validiert (z.B. Summenprüfung: Netto + Steuer = Brutto). Stimmen die Daten, generiert unser Skript eine JSON-Payload, die direkt an die REST-Schnittstelle des ERP-Systems gesendet wird. Stimmen sie nicht, wird die Rechnung in einen "Review-Ordner" verschoben und der Mitarbeiter erhält eine Slack-Benachrichtigung mit einem Link zur manuellen Prüfung.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Ergebnis & Fazit</h2>
      <p class="mb-4">Nach drei Monaten im Einsatz konnten wir folgende Metriken verzeichnen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Reduktion der manuellen Eingabezeit um <strong>90%</strong>.</li>
        <li>ROI (Return on Invest) wurde bereits nach 8 Wochen erreicht.</li>
        <li>Mitarbeiterzufriedenheit stieg signifikant, da stumpfe Abtipp-Arbeit entfiel.</li>
      </ul>
      <p>Dieses Projekt zeigt, dass man mit intelligent eingesetzter Open-Source-Technologie oft bessere und flexiblere Ergebnisse erzielen kann als mit teurer Standard-Software.</p>
    `
  },
  {
    id: '2',
    title: 'Server Monitoring Dashboard',
    date: '05. November 2023',
    excerpt: 'Warum Grafana manchmal zu viel ist: Entwicklung eines minimalistischen Echtzeit-Dashboards für Docker-Umgebungen mit React und WebSockets.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Docker', 'DevOps'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Jeder SysAdmin kennt sie: Prometheus und Grafana. Die Industriestandards für Monitoring. Aber manchmal ist ein Kampfjet einfach das falsche Werkzeug, wenn man nur zum Supermarkt will. Für ein Kundenprojekt mit 50 Microservices bauten wir eine leichtgewichtige, maßgeschneiderte Alternative.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Anforderung: Einfachheit vor Mächtigkeit</h2>
      <p class="mb-4">Der Kunde, eine Marketing-Agentur mit eigener kleiner Server-Farm, wollte wissen: "Laufen alle Container? Wie voll ist die Disk? Wie hoch ist die CPU-Last?". Grafana war für das nicht-technische Management zu komplex, die Konfiguration zu aufwendig. Das Ziel war ein "Single Pane of Glass", das auf einem großen Monitor im Büro hängen kann.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Architektur: Push statt Pull</h2>
      <p class="mb-4">Klassisches Monitoring funktioniert oft nach dem Pull-Prinzip (Prometheus scrapt Metriken). Wir wollten jedoch Echtzeit-Feedback ohne Verzögerung. Daher entschieden wir uns für eine WebSocket-Architektur.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Backend: Python & Docker Socket</h3>
      <p class="mb-4">Das Herzstück ist ein kleiner Python-Service, der direkt auf dem Host-System läuft. Er nutzt die Docker Engine API (via <code>docker-py</code>), um Statusinformationen aller Container abzufragen. </p>
      <p class="mb-4">Zusätzlich liest er System-Metriken (CPU, RAM, Disk I/O) über <code>psutil</code> aus. Diese Daten werden nicht in eine Datenbank geschrieben (was Overhead erzeugt hätte), sondern direkt über einen WebSocket-Stream gebroadcastet.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Frontend: React & Framer Motion</h3>
      <p class="mb-4">Das Dashboard selbst ist eine React Single Page Application (SPA). Wir nutzen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Recharts:</strong> Für flüssige Live-Graphen der CPU-Auslastung.</li>
        <li><strong>Framer Motion:</strong> Für sanfte Übergänge, wenn Container starten oder stoppen. Visuelles Feedback ist wichtig!</li>
        <li><strong>Tailwind CSS:</strong> Für schnelles Styling und Dark Mode Support.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Herausforderung: Performance</h2>
      <p class="mb-4">Wenn 50 Container jede Sekunde Metriken senden, kann der Browser schnell überfordert sein. Wir mussten einige Optimierungen vornehmen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Throttling:</strong> Das Backend sendet Updates maximal 2x pro Sekunde, auch wenn sich Daten öfter ändern.</li>
        <li><strong>Data Merging:</strong> Im Frontend werden nur die Deltas verarbeitet, nicht der gesamte State neu gerendert.</li>
        <li><strong>Canvas Rendering:</strong> Für die historischen Graphen nutzen wir Canvas statt SVG, da dies bei vielen Datenpunkten performanter ist.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Deployment & Sicherheit</h2>
      <p class="mb-4">Das gesamte Tool wird selbst als Docker-Stack (Frontend + Backend + Nginx Reverse Proxy) deployed. Der Zugriff ist über Basic Auth und IP-Whitelisting geschützt, sodass nur das Büro-Netzwerk Zugriff hat.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Fazit</h2>
      <p class="mb-4">Das Ergebnis ist ein visuell ansprechendes, extrem schnelles Dashboard, das genau das tut, was es soll – und nicht mehr. Es verbraucht weniger als 50MB RAM auf dem Server und bietet dem Kunden die nötige Transparenz auf einen Blick.</p>
    `
  },
  {
    id: '3',
    title: 'N8N Workflow für Social Media',
    date: '20. Januar 2024',
    excerpt: 'Content-Verteilung auf LinkedIn, Twitter und Instagram automatisiert: Ein Blick unter die Haube unserer "Write Once, Publish Everywhere" Engine.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    tags: ['N8N', 'Social Media', 'No-Code'],
    githubLink: 'https://github.com/M-Enderle',
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Social Media ist für moderne Unternehmen unverzichtbar, aber die Pflege von drei oder vier Kanälen ist ein Vollzeitjob. In diesem Artikel erkläre ich, wie wir für ein Start-up einen vollautomatischen Publishing-Workflow mit N8N gebaut haben, der 80% der manuellen Arbeit eliminiert.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Die Strategie: Content Recycling</h2>
      <p class="mb-4">Die Idee war simpel: Ein "Master-Content-Piece" (z.B. ein Blogpost oder eine Notiz in Notion) soll automatisch in die passenden Formate für LinkedIn (Business-Ton), Twitter (Thread/Kurzform) und Instagram (Visual + Caption) umgewandelt werden.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Das Werkzeug: N8N</h2>
      <p class="mb-4">N8N ist ein Workflow-Automatisierungstool, ähnlich wie Zapier, aber mächtiger und selbst hostbar. Da Datenschutz für uns wichtig war, hosten wir N8N auf einem eigenen Hetzner Cloud Server.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 1: Der Trigger (Notion)</h3>
      <p class="mb-4">Alles beginnt in Notion. Wir haben eine Datenbank "Content Pipeline". Sobald der Status einer Karte auf "Ready to Publish" gesetzt wird, feuert Notion einen Webhook an unseren N8N-Workflow.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 2: Die KI-Transformation (OpenAI GPT-4)</h3>
      <p class="mb-4">Der Rohtext aus Notion wird an die OpenAI API gesendet. Hier nutzen wir komplexe System-Prompts, um unterschiedliche Varianten zu erzeugen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>LinkedIn:</strong> Professionell, mit Absätzen, Emojis und 3-5 relevanten Hashtags.</li>
        <li><strong>Twitter:</strong> Unter 280 Zeichen, prägnant, provokant oder informativ.</li>
        <li><strong>Instagram:</strong> Inspirierend, "Link in Bio" Hinweis, Block mit 30 Hashtags.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 3: Visuals Generierung (DALL-E 3)</h3>
      <p class="mb-4">Ist kein Bild in Notion hinterlegt, analysiert GPT-4 den Text und schreibt einen Prompt für DALL-E 3. N8N sendet diesen Prompt an die Image-Generation-API, lädt das Bild herunter und optimiert es (Formatierung auf 1:1 oder 16:9) mittels eines kleinen Python-Code-Nodes innerhalb von N8N.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Schritt 4: Das Publishing</h3>
      <p class="mb-4">Nun werden die APIs der Plattformen angesprochen:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>LinkedIn API:</strong> Postet Text und Bild als "Organic Share".</li>
        <li><strong>Twitter API (v2):</strong> Lädt Media hoch und erstellt den Tweet.</li>
        <li><strong>Buffer/Instagram:</strong> Da Instagrams API restriktiv ist, nutzen wir hier Buffer als Zwischenschicht, die von N8N angesteuert wird.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Error Handling & Human in the Loop</h2>
      <p class="mb-4">Was, wenn die KI Halluzinationen hat? Wir haben einen "Approval-Step" eingebaut. Bevor der Post live geht, sendet N8N die Entwürfe in einen privaten Slack-Channel. Dort gibt es zwei Buttons: "Approve" und "Reject". Erst bei Klick auf "Approve" läuft der Workflow weiter.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Zusammenfassung</h2>
      <p class="mb-4">Durch diesen Workflow konnte das Start-up seine Social Media Frequenz von 2 Posts pro Woche auf 5 Posts pro Woche steigern, bei gleichbleibendem Personalaufwand. Die Konsistenz stieg, und damit auch die Reichweite (+45% in 2 Monaten).</p>
    `
  }
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
