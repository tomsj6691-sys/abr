export const locales = ["en", "es", "fr", "de", "zh-CN", "ja", "ar", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-CN";
export const localeCookieName = "aibri-locale";

type LocaleMeta = {
  label: string;
  lang: string;
  dir: "ltr" | "rtl";
};

type PaginationCopy = {
  ariaLabel: string;
  page: string;
  prev: string;
  next: string;
};

type ArticleUiCopy = {
  sectionHeading: string;
  unavailable: string;
  minuteUnit: string;
  disclaimerFromApi: string;
  disclaimerPublished: string;
  leadAuditorName: string;
  leadAuditorBio: string;
  sovereigntyBody: string;
  verifiedSeal: string;
  officialSeal: string;
  documentSeal: string;
  linkedInLabel: string;
};

type HomeFeedUiCopy = {
  bulletinTypeLabel: string;
  liveTypeLabel: string;
  reportCta: string;
  alertCta: string;
};

type RootMetadataCopy = {
  description: string;
  notFoundTitle: string;
};

type HomeMetadataCopy = {
  description: string;
};

type FooterSubscriptionCopy = {
  title: string;
  body: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  invalidEmail: string;
  siteUnavailable: string;
  networkError: string;
};

type Messages = {
  languageLabel: string;
  brandSubtitle: string;
  translationNotice: {
    title: string;
    body: string;
  };
  nav: {
    home: string;
    reports: string;
    alerts: string;
    methodology: string;
    auditors: string;
    evidenceVault: string;
  };
  pagination: PaginationCopy;
  footer: {
    affairs: string;
    compliance: string;
    about: string;
    auditors: string;
    methodology: string;
    contact: string;
    privacy: string;
    terms: string;
    antiFraud: string;
    integrity: string;
    institutionDescription: string;
    legal: string;
  };
  footerSubscription: FooterSubscriptionCopy;
  home: {
    sectionLabel: string;
    sidebarLabel: string;
    bulletinTypeLabel: string;
    liveTypeLabel: string;
  };
  topUtility: {
    globalNodes: string;
    currentProtocol: string;
    perceptionData: string;
  };
  collections: {
    reports: {
      title: string;
      englishTitle: string;
      description: string;
      breadcrumb: string;
      readLink: string;
      fileIdLabel: string;
      sidebarHeading: string;
      sidebarLinksHeading: string;
    };
    alerts: {
      title: string;
      englishTitle: string;
      description: string;
      breadcrumb: string;
      readLink: string;
      fileIdLabel: string;
      sidebarHeading: string;
      sidebarLinksHeading: string;
    };
  };
  article: {
    home: string;
    archiveId: string;
    publishedAt: string;
    auditRegion: string;
    readTime: string;
    summary: string;
    shareReport: string;
    copyLink: string;
    disclaimer: string;
    auditorProfile: string;
    sovereignty: string;
    relatedFiles: string;
    independence: string;
    viewProfile: string;
  };
  staticPage: {
    lastUpdated: string;
    status: string;
    approval: string;
    documentId: string;
    secrecy: string;
    related: string;
  };
  pageTitles: {
    about: string;
    auditors: string;
    methodology: string;
    evidenceVault: string;
    privacy: string;
    terms: string;
    antiFraud: string;
    integrity: string;
  };
  breadcrumbs: {
    about: string;
    auditors: string;
    methodology: string;
    evidenceVault: string;
    privacy: string;
    terms: string;
    antiFraud: string;
    integrity: string;
  };
  notFound: {
    label: string;
    title: string;
    body: string;
    homeAction: string;
    reportsAction: string;
  };
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: "English", lang: "en", dir: "ltr" },
  es: { label: "Español", lang: "es", dir: "ltr" },
  fr: { label: "Français", lang: "fr", dir: "ltr" },
  de: { label: "Deutsch", lang: "de", dir: "ltr" },
  "zh-CN": { label: "中文 (简体)", lang: "zh-CN", dir: "ltr" },
  ja: { label: "日本語", lang: "ja", dir: "ltr" },
  ar: { label: "العربية", lang: "ar", dir: "rtl" },
  pt: { label: "Português", lang: "pt", dir: "ltr" },
};

const messages: Record<Locale, Messages> = {
  en: {
    languageLabel: "Language",
    brandSubtitle: "Official Bureau of Algorithmic Recognition Auditing",
    translationNotice: {
      title: "Localized interface enabled",
      body: "Navigation and page chrome are localized. Editorial translations for long-form report content are still in progress, so parts of the content may remain in the source language.",
    },
    nav: {
      home: "Audit Bulletin",
      reports: "Brand Benchmark Audits",
      alerts: "Audit Observations & Alerts",
      methodology: "Methodology",
      auditors: "Auditors",
      evidenceVault: "Evidence Vault",
    },
    pagination: {
      ariaLabel: "Pagination",
      page: "Page",
      prev: "Prev",
      next: "Next",
    },
    footer: {
      affairs: "Institution",
      compliance: "Compliance",
      about: "About AIBRI",
      auditors: "Auditor Profiles",
      methodology: "Methodology",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      antiFraud: "Anti-Fraud Statement",
      integrity: "Audit Integrity Code",
      institutionDescription:
        "An independent research institute focused on transparency and fairness in the algorithmic commercial era.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). Registered research institution. All content is protected by international copyright law.",
    },
    footerSubscription: {
      title: "Subscribe to updates",
      body: "Receive the latest audit bulletins and benchmark releases by email.",
      emailLabel: "Email address",
      emailPlaceholder: "user@example.com",
      submit: "Subscribe",
      submitting: "Submitting...",
      success: "Subscription successful.",
      invalidEmail: "Please enter a valid email address.",
      siteUnavailable: "Subscription is temporarily unavailable.",
      networkError: "Unable to submit right now. Please try again.",
    },
    home: {
      sectionLabel: "Official Audit Bulletin",
      sidebarLabel: "Office of Auditors",
      bulletinTypeLabel: "Institution Bulletin",
      liveTypeLabel: "Live Update",
    },
    topUtility: {
      globalNodes: "GLOBAL NODES: 24 ACTIVE",
      currentProtocol: "CURRENT PROTOCOL: V1.0.4",
      perceptionData: "PERCEPTION DATA: PROCESSING...",
    },
    collections: {
      reports: {
        title: "Brand Benchmark Audits",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI publishes structured benchmark audits on brand visibility, competitive positioning, and AI recognition gaps across recommendation flows.",
        breadcrumb: "Home / Brand Benchmark Audits",
        readLink: "View full audit file →",
        fileIdLabel: "File No.",
        sidebarHeading: "Chief Auditor Guidelines",
        sidebarLinksHeading: "Recent Alerts",
      },
      alerts: {
        title: "Audit Observations & Alerts",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI tracks structural output shifts, latency signals, and evidence-backtracking notices across high-stakes AI decision scenarios.",
        breadcrumb: "Home / Audit Observations & Alerts",
        readLink: "Open alert file →",
        fileIdLabel: "File No.",
        sidebarHeading: "Response Guidance",
        sidebarLinksHeading: "Alert Categories",
      },
    },
    article: {
      home: "Home",
      archiveId: "Audit File No.",
      publishedAt: "Published",
      auditRegion: "Audit Region",
      readTime: "Read Time",
      summary: "Executive Summary",
      shareReport: "Share",
      copyLink: "Copy Link",
      disclaimer: "Legal Disclaimer / Disclaimer",
      auditorProfile: "Lead Auditor Profile",
      sovereignty: "Audit Sovereignty",
      relatedFiles: "Related Files",
      independence: "Independence Principles",
      viewProfile: "View full profile →",
    },
    staticPage: {
      lastUpdated: "Last updated",
      status: "Document Status / Status",
      approval: "Approval",
      documentId: "Document ID",
      secrecy: "Classification",
      related: "Related Policies / Related",
    },
    pageTitles: {
      about: "About AIBRI",
      auditors: "Auditor Profiles",
      methodology: "Methodology",
      evidenceVault: "Evidence Vault",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      antiFraud: "Anti-Fraud Statement",
      integrity: "Audit Integrity Code",
    },
    breadcrumbs: {
      about: "Home / About",
      auditors: "Home / Institutional Affairs",
      methodology: "Home / Methodology",
      evidenceVault: "Home / Evidence Vault",
      privacy: "Home / Compliance / Privacy Policy",
      terms: "Home / Compliance / Terms of Service",
      antiFraud: "Home / Compliance / Anti-Fraud Statement",
      integrity: "Home / Compliance / Audit Integrity Code",
    },
    notFound: {
      label: "Missing Document",
      title: "The requested page or audit file could not be found",
      body: "The link may be outdated, or the file may not have been released publicly yet. Return to the homepage or browse the latest benchmark audits.",
      homeAction: "Back to Home",
      reportsAction: "View Benchmark Audits",
    },
  },
  es: {
    languageLabel: "Idioma",
    brandSubtitle: "Oficina Oficial de Auditoría del Reconocimiento Algorítmico",
    translationNotice: {
      title: "Interfaz localizada activada",
      body: "La navegación y la estructura de la página ya están localizadas. Las traducciones editoriales de los informes extensos siguen en preparación y parte del contenido puede permanecer en el idioma original.",
    },
    nav: {
      home: "Boletín de Auditoría",
      reports: "Auditorías comparativas de marca",
      alerts: "Observaciones y alertas de auditoría",
      methodology: "Metodología",
      auditors: "Auditores",
      evidenceVault: "Archivo de Evidencias",
    },
    pagination: {
      ariaLabel: "Paginación",
      page: "Página",
      prev: "Anterior",
      next: "Siguiente",
    },
    footer: {
      affairs: "Institución",
      compliance: "Cumplimiento",
      about: "Sobre AIBRI",
      auditors: "Perfiles de Auditores",
      methodology: "Metodología",
      contact: "Contáctenos",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      antiFraud: "Declaración Antifraude",
      integrity: "Código de Integridad",
      institutionDescription:
        "Un instituto de investigación independiente dedicado a la transparencia y la equidad en la era comercial algorítmica.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). Institución de investigación registrada. Todo el contenido está protegido por la ley internacional de derechos de autor.",
    },
    footerSubscription: {
      title: "Suscribirse a las actualizaciones",
      body: "Reciba por correo los últimos boletines de auditoría y nuevas publicaciones comparativas.",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "user@example.com",
      submit: "Suscribirse",
      submitting: "Enviando...",
      success: "Suscripción completada.",
      invalidEmail: "Ingrese un correo electrónico válido.",
      siteUnavailable: "La suscripción no está disponible temporalmente.",
      networkError: "No se pudo enviar ahora. Inténtelo de nuevo.",
    },
    home: {
      sectionLabel: "Boletín Oficial de Auditoría",
      sidebarLabel: "Oficina de Auditores",
      bulletinTypeLabel: "Boletín institucional",
      liveTypeLabel: "Actualización en vivo",
    },
    topUtility: {
      globalNodes: "NODOS GLOBALES: 24 ACTIVOS",
      currentProtocol: "PROTOCOLO ACTUAL: V1.0.4",
      perceptionData: "DATOS DE PERCEPCIÓN: PROCESANDO...",
    },
    collections: {
      reports: {
        title: "Auditorías comparativas de marca",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI publica auditorías recurrentes sobre cómo los grandes sistemas de IA representan y recomiendan sectores y marcas globales.",
        breadcrumb: "Inicio / Auditorías comparativas de marca",
        readLink: "Ver expediente completo →",
        fileIdLabel: "Expediente",
        sidebarHeading: "Criterios del Auditor Jefe",
        sidebarLinksHeading: "Alertas recientes",
      },
      alerts: {
        title: "Observaciones y alertas de auditoría",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI sigue patrones de salida anómalos en escenarios de decisión crítica y emite alertas estructuradas de sesgo.",
        breadcrumb: "Inicio / Observaciones y alertas de auditoría",
        readLink: "Abrir alerta →",
        fileIdLabel: "Expediente",
        sidebarHeading: "Guía de respuesta",
        sidebarLinksHeading: "Categorías",
      },
    },
    article: {
      home: "Inicio",
      archiveId: "Expediente",
      publishedAt: "Publicado",
      auditRegion: "Región de auditoría",
      readTime: "Tiempo de lectura",
      summary: "Resumen Ejecutivo",
      shareReport: "Compartir",
      copyLink: "Copiar enlace",
      disclaimer: "Aviso legal / Disclaimer",
      auditorProfile: "Perfil del Auditor",
      sovereignty: "Soberanía de Auditoría",
      relatedFiles: "Archivos relacionados",
      independence: "Principios de independencia",
      viewProfile: "Ver perfil completo →",
    },
    staticPage: {
      lastUpdated: "Última actualización",
      status: "Estado del documento / Status",
      approval: "Aprobación",
      documentId: "ID del documento",
      secrecy: "Clasificación",
      related: "Políticas relacionadas / Related",
    },
    pageTitles: {
      about: "Sobre AIBRI",
      auditors: "Perfiles de Auditores",
      methodology: "Metodología",
      evidenceVault: "Archivo de Evidencias",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      antiFraud: "Declaración Antifraude",
      integrity: "Código de Integridad",
    },
    breadcrumbs: {
      about: "Inicio / Sobre nosotros",
      auditors: "Inicio / Asuntos institucionales",
      methodology: "Inicio / Metodología",
      evidenceVault: "Inicio / Archivo de Evidencias",
      privacy: "Inicio / Cumplimiento / Política de Privacidad",
      terms: "Inicio / Cumplimiento / Términos del Servicio",
      antiFraud: "Inicio / Cumplimiento / Declaración Antifraude",
      integrity: "Inicio / Cumplimiento / Código de Integridad",
    },
    notFound: {
      label: "Documento faltante",
      title: "No se encontró la página o el expediente solicitado",
      body: "El enlace puede estar desactualizado o el archivo aún no se ha publicado. Puede volver al inicio o revisar los informes más recientes.",
      homeAction: "Volver al inicio",
      reportsAction: "Ver auditorías comparativas",
    },
  },
  fr: {
    languageLabel: "Langue",
    brandSubtitle: "Bureau officiel d'audit de la reconnaissance algorithmique",
    translationNotice: {
      title: "Interface localisée activée",
      body: "La navigation et l'habillage des pages sont localisés. Les traductions éditoriales des contenus longs sont encore en préparation et certaines parties peuvent rester dans la langue source.",
    },
    nav: {
      home: "Bulletin d'Audit",
      reports: "Audits comparatifs de marque",
      alerts: "Observations et alertes d'audit",
      methodology: "Méthodologie",
      auditors: "Auditeurs",
      evidenceVault: "Dépôt de Preuves",
    },
    pagination: {
      ariaLabel: "Pagination",
      page: "Page",
      prev: "Précédent",
      next: "Suivant",
    },
    footer: {
      affairs: "Institution",
      compliance: "Conformité",
      about: "À propos d'AIBRI",
      auditors: "Profils des auditeurs",
      methodology: "Méthodologie",
      contact: "Nous contacter",
      privacy: "Politique de confidentialité",
      terms: "Conditions de service",
      antiFraud: "Déclaration anti-fraude",
      integrity: "Code d'intégrité",
      institutionDescription:
        "Un institut de recherche indépendant dédié à la transparence et à l'équité dans l'ère commerciale algorithmique.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). Institution de recherche enregistrée. Tous les contenus sont protégés par le droit international d'auteur.",
    },
    footerSubscription: {
      title: "S'abonner aux mises à jour",
      body: "Recevez par e-mail les derniers bulletins d'audit et nouvelles publications comparatives.",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "user@example.com",
      submit: "S'abonner",
      submitting: "Envoi...",
      success: "Abonnement réussi.",
      invalidEmail: "Veuillez saisir une adresse e-mail valide.",
      siteUnavailable: "L'abonnement est temporairement indisponible.",
      networkError: "Impossible d'envoyer pour le moment. Réessayez plus tard.",
    },
    home: {
      sectionLabel: "Bulletin officiel d'audit",
      sidebarLabel: "Bureau des auditeurs",
      bulletinTypeLabel: "Bulletin institutionnel",
      liveTypeLabel: "Mise à jour en direct",
    },
    topUtility: {
      globalNodes: "NŒUDS MONDIAUX : 24 ACTIFS",
      currentProtocol: "PROTOCOLE ACTUEL : V1.0.4",
      perceptionData: "DONNÉES DE PERCEPTION : TRAITEMENT...",
    },
    collections: {
      reports: {
        title: "Audits comparatifs de marque",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI publie des audits récurrents sur la manière dont les grands systèmes d'IA représentent et recommandent les secteurs et les marques mondiales.",
        breadcrumb: "Accueil / Audits comparatifs de marque",
        readLink: "Voir le dossier complet →",
        fileIdLabel: "Dossier",
        sidebarHeading: "Principes de l'auditeur en chef",
        sidebarLinksHeading: "Alertes récentes",
      },
      alerts: {
        title: "Observations et alertes d'audit",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI suit les schémas de sortie anormaux dans les scénarios de décision critiques et publie des alertes structurées.",
        breadcrumb: "Accueil / Observations et alertes d'audit",
        readLink: "Ouvrir l'alerte →",
        fileIdLabel: "Dossier",
        sidebarHeading: "Guide de réponse",
        sidebarLinksHeading: "Catégories",
      },
    },
    article: {
      home: "Accueil",
      archiveId: "Dossier d'audit",
      publishedAt: "Publication",
      auditRegion: "Région auditée",
      readTime: "Temps de lecture",
      summary: "Résumé exécutif",
      shareReport: "Partager",
      copyLink: "Copier le lien",
      disclaimer: "Mentions légales / Disclaimer",
      auditorProfile: "Profil de l'auditeur",
      sovereignty: "Souveraineté d'audit",
      relatedFiles: "Documents liés",
      independence: "Principes d'indépendance",
      viewProfile: "Voir le profil complet →",
    },
    staticPage: {
      lastUpdated: "Dernière mise à jour",
      status: "Statut du document / Status",
      approval: "Approbation",
      documentId: "ID du document",
      secrecy: "Classification",
      related: "Politiques liées / Related",
    },
    pageTitles: {
      about: "À propos d'AIBRI",
      auditors: "Profils des auditeurs",
      methodology: "Méthodologie",
      evidenceVault: "Dépôt de preuves",
      privacy: "Politique de confidentialité",
      terms: "Conditions de service",
      antiFraud: "Déclaration anti-fraude",
      integrity: "Code d'intégrité",
    },
    breadcrumbs: {
      about: "Accueil / À propos",
      auditors: "Accueil / Affaires institutionnelles",
      methodology: "Accueil / Méthodologie",
      evidenceVault: "Accueil / Dépôt de preuves",
      privacy: "Accueil / Conformité / Politique de confidentialité",
      terms: "Accueil / Conformité / Conditions de service",
      antiFraud: "Accueil / Conformité / Déclaration anti-fraude",
      integrity: "Accueil / Conformité / Code d'intégrité",
    },
    notFound: {
      label: "Document introuvable",
      title: "La page ou le dossier demandé est introuvable",
      body: "Le lien peut être obsolète ou le document n'a pas encore été publié. Revenez à l'accueil ou consultez les derniers rapports.",
      homeAction: "Retour à l'accueil",
      reportsAction: "Voir les audits comparatifs",
    },
  },
  de: {
    languageLabel: "Sprache",
    brandSubtitle: "Offizielles Büro für algorithmische Wahrnehmungsaudits",
    translationNotice: {
      title: "Lokalisierte Oberfläche aktiv",
      body: "Navigation und Seitenrahmen sind lokalisiert. Redaktionelle Übersetzungen der Langform-Inhalte sind noch in Arbeit, daher können Teile des Inhalts in der Ausgangssprache bleiben.",
    },
    nav: {
      home: "Audit-Bulletin",
      reports: "Marken-Benchmark-Audits",
      alerts: "Audit-Beobachtungen und Warnungen",
      methodology: "Methodik",
      auditors: "Auditoren",
      evidenceVault: "Beweisarchiv",
    },
    pagination: {
      ariaLabel: "Seitennavigation",
      page: "Seite",
      prev: "Zurück",
      next: "Weiter",
    },
    footer: {
      affairs: "Institution",
      compliance: "Compliance",
      about: "Über AIBRI",
      auditors: "Auditorenprofile",
      methodology: "Methodik",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      antiFraud: "Anti-Betrugs-Erklärung",
      integrity: "Integritätskodex",
      institutionDescription:
        "Ein unabhängiges Forschungsinstitut für Transparenz und Fairness im algorithmischen Wirtschaftsumfeld.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). Eingetragene Forschungseinrichtung. Alle Inhalte sind durch internationales Urheberrecht geschützt.",
    },
    footerSubscription: {
      title: "Updates abonnieren",
      body: "Erhalten Sie die neuesten Audit-Bulletins und Benchmark-Veröffentlichungen per E-Mail.",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "user@example.com",
      submit: "Abonnieren",
      submitting: "Wird gesendet...",
      success: "Abonnement erfolgreich.",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      siteUnavailable: "Das Abonnement ist vorübergehend nicht verfügbar.",
      networkError: "Der Versand ist derzeit nicht möglich. Bitte versuchen Sie es erneut.",
    },
    home: {
      sectionLabel: "Offizielles Audit-Bulletin",
      sidebarLabel: "Auditorenbüro",
      bulletinTypeLabel: "Institutionsbulletin",
      liveTypeLabel: "Live-Update",
    },
    topUtility: {
      globalNodes: "GLOBALE KNOTEN: 24 AKTIV",
      currentProtocol: "AKTUELLES PROTOKOLL: V1.0.4",
      perceptionData: "WAHRNEHMUNGSDATEN: WERDEN VERARBEITET...",
    },
    collections: {
      reports: {
        title: "Marken-Benchmark-Audits",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI veröffentlicht fortlaufende Audits dazu, wie große KI-Systeme globale Branchen und Marken darstellen und empfehlen.",
        breadcrumb: "Start / Marken-Benchmark-Audits",
        readLink: "Vollständige Akte öffnen →",
        fileIdLabel: "Akte",
        sidebarHeading: "Leitlinien des Chef-Auditors",
        sidebarLinksHeading: "Neueste Warnungen",
      },
      alerts: {
        title: "Audit-Beobachtungen und Warnungen",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI verfolgt abnormale Ausgabe-Muster in kritischen Entscheidungsszenarien und veröffentlicht strukturierte Bias-Warnungen.",
        breadcrumb: "Start / Audit-Beobachtungen und Warnungen",
        readLink: "Warnung öffnen →",
        fileIdLabel: "Akte",
        sidebarHeading: "Reaktionshinweise",
        sidebarLinksHeading: "Kategorien",
      },
    },
    article: {
      home: "Start",
      archiveId: "Audit-Akte",
      publishedAt: "Veröffentlicht",
      auditRegion: "Prüfregion",
      readTime: "Lesezeit",
      summary: "Executive Summary",
      shareReport: "Teilen",
      copyLink: "Link kopieren",
      disclaimer: "Rechtlicher Hinweis / Disclaimer",
      auditorProfile: "Auditorenprofil",
      sovereignty: "Audit-Souveränität",
      relatedFiles: "Verwandte Dateien",
      independence: "Unabhängigkeitsprinzipien",
      viewProfile: "Vollständiges Profil ansehen →",
    },
    staticPage: {
      lastUpdated: "Zuletzt aktualisiert",
      status: "Dokumentstatus / Status",
      approval: "Freigabe",
      documentId: "Dokument-ID",
      secrecy: "Einstufung",
      related: "Verwandte Richtlinien / Related",
    },
    pageTitles: {
      about: "Über AIBRI",
      auditors: "Auditorenprofile",
      methodology: "Methodik",
      evidenceVault: "Beweisarchiv",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      antiFraud: "Anti-Betrugs-Erklärung",
      integrity: "Integritätskodex",
    },
    breadcrumbs: {
      about: "Start / Über uns",
      auditors: "Start / Institutionelle Angelegenheiten",
      methodology: "Start / Methodik",
      evidenceVault: "Start / Beweisarchiv",
      privacy: "Start / Compliance / Datenschutz",
      terms: "Start / Compliance / Nutzungsbedingungen",
      antiFraud: "Start / Compliance / Anti-Betrugs-Erklärung",
      integrity: "Start / Compliance / Integritätskodex",
    },
    notFound: {
      label: "Dokument fehlt",
      title: "Die angeforderte Seite oder Akte wurde nicht gefunden",
      body: "Der Link ist möglicherweise veraltet oder die Datei wurde noch nicht veröffentlicht. Kehren Sie zur Startseite zurück oder öffnen Sie die neuesten Berichte.",
      homeAction: "Zur Startseite",
      reportsAction: "Benchmark-Audits ansehen",
    },
  },
  "zh-CN": {
    languageLabel: "语言",
    brandSubtitle: "Official Bureau of Algorithmic Recognition Auditing",
    translationNotice: {
      title: "多语言界面已启用",
      body: "当前已支持多语言路由、导航与页面框架切换。除中文外，其它语种的长篇正文仍在持续校对中，部分内容会暂时保留原文。",
    },
    nav: {
      home: "审计动态",
      reports: "品牌对标审计",
      alerts: "审计观察与预警",
      methodology: "审计方法论",
      auditors: "关于审计员",
      evidenceVault: "证据存档库",
    },
    pagination: {
      ariaLabel: "分页导航",
      page: "第",
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      affairs: "机构事务",
      compliance: "合规声明",
      about: "关于 AIBRI",
      auditors: "审计员简介",
      methodology: "审计方法论",
      contact: "联系我们",
      privacy: "隐私权政策",
      terms: "服务条款",
      antiFraud: "反欺诈声明",
      integrity: "审计诚信准则",
      institutionDescription:
        "一家致力于算法商业时代透明度与公平性的独立研究机构。我们通过分布式全球节点审计人工智能对现实世界的认知偏差，为品牌确立数字时代的认知基准。",
      legal: "© 2025 AI BrandRank Institute (AIBRI). 注册研究机构。内容受国际版权法保护。",
    },
    footerSubscription: {
      title: "订阅更新",
      body: "通过邮箱接收最新审计动态与品牌对标发布。",
      emailLabel: "邮箱地址",
      emailPlaceholder: "user@example.com",
      submit: "立即订阅",
      submitting: "提交中...",
      success: "订阅成功。",
      invalidEmail: "请输入有效的邮箱地址。",
      siteUnavailable: "订阅服务暂时不可用。",
      networkError: "当前无法提交，请稍后重试。",
    },
    home: {
      sectionLabel: "官方审计公报",
      sidebarLabel: "审计员办公室",
      bulletinTypeLabel: "机构公报",
      liveTypeLabel: "实时动态",
    },
    topUtility: {
      globalNodes: "全球节点：24 个在线",
      currentProtocol: "当前协议：V1.0.4",
      perceptionData: "认知数据：处理中...",
    },
    collections: {
      reports: {
        title: "品牌对标审计",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI 聚焦品牌在 AI 认知与推荐链路中的相对位置，围绕品牌势能、竞品关系与认知差距发布结构化对标审计。",
        breadcrumb: "首页 / 品牌对标审计",
        readLink: "查看完整审计文件 →",
        fileIdLabel: "档案号",
        sidebarHeading: "首席审计官准则",
        sidebarLinksHeading: "最近预警",
      },
      alerts: {
        title: "审计观察与预警",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI 追踪模型输出中的结构性异动与时序偏差，围绕指数变动、偏差警报与证据回溯发布持续性的审计观察。",
        breadcrumb: "首页 / 审计观察与预警",
        readLink: "打开预警文件 →",
        fileIdLabel: "档案号",
        sidebarHeading: "预警处置建议",
        sidebarLinksHeading: "分类索引",
      },
    },
    article: {
      home: "首页",
      archiveId: "审计档案编号",
      publishedAt: "发布日期",
      auditRegion: "审计区域",
      readTime: "阅读时间",
      summary: "审计意见摘要 / Executive Summary",
      shareReport: "分享报告",
      copyLink: "复制链接",
      disclaimer: "法律免责声明 / Disclaimer",
      auditorProfile: "执行审计员档案",
      sovereignty: "审计主权声明",
      relatedFiles: "相关文件",
      independence: "独立性准则",
      viewProfile: "查看完整职业档案 →",
    },
    staticPage: {
      lastUpdated: "最后更新日期",
      status: "文档状态 / Status",
      approval: "核准状态",
      documentId: "文档编号",
      secrecy: "机密层级",
      related: "关联政策 / Related",
    },
    pageTitles: {
      about: "关于 AIBRI",
      auditors: "关于审计员",
      methodology: "审计方法论",
      evidenceVault: "证据存档库",
      privacy: "隐私权政策",
      terms: "服务条款",
      antiFraud: "反欺诈声明",
      integrity: "审计诚信准则",
    },
    breadcrumbs: {
      about: "首页 / 关于我们",
      auditors: "首页 / 机构事务",
      methodology: "首页 / 审计方法论",
      evidenceVault: "首页 / 证据存档库",
      privacy: "首页 / 合规声明 / 隐私权政策",
      terms: "首页 / 合规声明 / 服务条款",
      antiFraud: "首页 / 合规声明 / 反欺诈声明",
      integrity: "首页 / 合规声明 / 审计诚信准则",
    },
    notFound: {
      label: "文档缺失",
      title: "未找到对应页面或审计文件",
      body: "该链接可能已经失效，或对应内容尚未公开发布。你可以返回首页或浏览最新品牌对标审计继续查看。",
      homeAction: "返回首页",
      reportsAction: "查看品牌对标审计",
    },
  },
  ja: {
    languageLabel: "言語",
    brandSubtitle: "アルゴリズム認知監査公式局",
    translationNotice: {
      title: "ローカライズされたインターフェースを有効化",
      body: "ナビゲーションとページ構造はローカライズされています。長文レポート本文の編集翻訳は継続中のため、一部の内容は原文のまま表示されます。",
    },
    nav: {
      home: "監査速報",
      reports: "ブランド対標監査",
      alerts: "監査観測と警報",
      methodology: "方法論",
      auditors: "監査官",
      evidenceVault: "証拠アーカイブ",
    },
    pagination: {
      ariaLabel: "ページネーション",
      page: "ページ",
      prev: "前へ",
      next: "次へ",
    },
    footer: {
      affairs: "機関情報",
      compliance: "コンプライアンス",
      about: "AIBRI について",
      auditors: "監査官プロフィール",
      methodology: "方法論",
      contact: "お問い合わせ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      antiFraud: "反不正声明",
      integrity: "監査インテグリティ規程",
      institutionDescription:
        "アルゴリズム商業時代の透明性と公平性に焦点を当てる独立研究機関です。",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). 登録研究機関。すべてのコンテンツは国際著作権法により保護されています。",
    },
    footerSubscription: {
      title: "更新を購読",
      body: "最新の監査速報とブランド比較レポートをメールで受け取れます。",
      emailLabel: "メールアドレス",
      emailPlaceholder: "user@example.com",
      submit: "購読する",
      submitting: "送信中...",
      success: "購読が完了しました。",
      invalidEmail: "有効なメールアドレスを入力してください。",
      siteUnavailable: "購読サービスは一時的に利用できません。",
      networkError: "現在送信できません。しばらくしてから再度お試しください。",
    },
    home: {
      sectionLabel: "公式監査公報",
      sidebarLabel: "監査官オフィス",
      bulletinTypeLabel: "機関公報",
      liveTypeLabel: "ライブ更新",
    },
    topUtility: {
      globalNodes: "グローバルノード: 24 稼働中",
      currentProtocol: "現在のプロトコル: V1.0.4",
      perceptionData: "認知データ: 処理中...",
    },
    collections: {
      reports: {
        title: "ブランド対標監査",
        englishTitle: "Brand Benchmark Audits",
        description:
          "AIBRI は主要 AI システムが世界の業界やブランドをどのように認識し推薦するかを継続的に監査しています。",
        breadcrumb: "ホーム / ブランド対標監査",
        readLink: "完全な監査ファイルを見る →",
        fileIdLabel: "ファイル番号",
        sidebarHeading: "主任監査官ガイドライン",
        sidebarLinksHeading: "最近の警報",
      },
      alerts: {
        title: "監査観測と警報",
        englishTitle: "Audit Observations & Alerts",
        description:
          "AIBRI は重要な意思決定シナリオでの異常出力パターンを追跡し、構造化された警報を発行します。",
        breadcrumb: "ホーム / 監査観測と警報",
        readLink: "警報ファイルを開く →",
        fileIdLabel: "ファイル番号",
        sidebarHeading: "対応ガイダンス",
        sidebarLinksHeading: "カテゴリ",
      },
    },
    article: {
      home: "ホーム",
      archiveId: "監査ファイル番号",
      publishedAt: "公開日",
      auditRegion: "監査地域",
      readTime: "読了時間",
      summary: "監査要約 / Executive Summary",
      shareReport: "共有",
      copyLink: "リンクをコピー",
      disclaimer: "法的免責 / Disclaimer",
      auditorProfile: "監査官プロフィール",
      sovereignty: "監査主権声明",
      relatedFiles: "関連ファイル",
      independence: "独立性原則",
      viewProfile: "完全なプロフィールを見る →",
    },
    staticPage: {
      lastUpdated: "最終更新日",
      status: "文書ステータス / Status",
      approval: "承認状態",
      documentId: "文書番号",
      secrecy: "機密区分",
      related: "関連ポリシー / Related",
    },
    pageTitles: {
      about: "AIBRI について",
      auditors: "監査官プロフィール",
      methodology: "方法論",
      evidenceVault: "証拠アーカイブ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      antiFraud: "反不正声明",
      integrity: "監査インテグリティ規程",
    },
    breadcrumbs: {
      about: "ホーム / 機関概要",
      auditors: "ホーム / 機関業務",
      methodology: "ホーム / 方法論",
      evidenceVault: "ホーム / 証拠アーカイブ",
      privacy: "ホーム / コンプライアンス / プライバシーポリシー",
      terms: "ホーム / コンプライアンス / 利用規約",
      antiFraud: "ホーム / コンプライアンス / 反不正声明",
      integrity: "ホーム / コンプライアンス / 監査インテグリティ規程",
    },
    notFound: {
      label: "文書が見つかりません",
      title: "該当するページまたは監査ファイルが見つかりません",
      body: "リンクが無効になっているか、ファイルがまだ公開されていない可能性があります。ホームに戻るか最新のレポートをご覧ください。",
      homeAction: "ホームへ戻る",
      reportsAction: "レポートを見る",
    },
  },
  ar: {
    languageLabel: "اللغة",
    brandSubtitle: "المكتب الرسمي لتدقيق الاعتراف الخوارزمي",
    translationNotice: {
      title: "تم تفعيل الواجهة المترجمة",
      body: "تمت ترجمة التنقل وبنية الصفحة. أما الترجمات التحريرية للمحتوى الطويل فما زالت قيد الإعداد، لذلك قد تبقى بعض الأجزاء باللغة الأصلية.",
    },
    nav: {
      home: "نشرة التدقيق",
      reports: "تدقيق المقارنة المرجعية للعلامات",
      alerts: "ملاحظات التدقيق والتنبيهات",
      methodology: "المنهجية",
      auditors: "المدققون",
      evidenceVault: "أرشيف الأدلة",
    },
    pagination: {
      ariaLabel: "ترقيم الصفحات",
      page: "الصفحة",
      prev: "السابق",
      next: "التالي",
    },
    footer: {
      affairs: "المؤسسة",
      compliance: "الامتثال",
      about: "حول AIBRI",
      auditors: "ملفات المدققين",
      methodology: "المنهجية",
      contact: "اتصل بنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      antiFraud: "بيان مكافحة الاحتيال",
      integrity: "مدونة النزاهة",
      institutionDescription:
        "معهد بحثي مستقل يركز على الشفافية والإنصاف في العصر التجاري الخوارزمي.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). مؤسسة بحثية مسجلة. جميع المحتويات محمية بموجب قوانين حقوق النشر الدولية.",
    },
    footerSubscription: {
      title: "الاشتراك في التحديثات",
      body: "استلم أحدث نشرات التدقيق وإصدارات المقارنة المرجعية عبر البريد الإلكتروني.",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "user@example.com",
      submit: "اشترك",
      submitting: "جارٍ الإرسال...",
      success: "تم الاشتراك بنجاح.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
      siteUnavailable: "خدمة الاشتراك غير متاحة مؤقتًا.",
      networkError: "تعذر الإرسال الآن. يرجى المحاولة مرة أخرى لاحقًا.",
    },
    home: {
      sectionLabel: "النشرة الرسمية للتدقيق",
      sidebarLabel: "مكتب المدققين",
      bulletinTypeLabel: "موجز المؤسسة",
      liveTypeLabel: "تحديث مباشر",
    },
    topUtility: {
      globalNodes: "العقد العالمية: 24 نشطة",
      currentProtocol: "البروتوكول الحالي: V1.0.4",
      perceptionData: "بيانات الإدراك: قيد المعالجة...",
    },
    collections: {
      reports: {
        title: "تدقيق المقارنة المرجعية للعلامات",
        englishTitle: "Brand Benchmark Audits",
        description:
          "تنشر AIBRI عمليات تدقيق دورية حول كيفية تمثيل الأنظمة الذكية الكبرى للقطاعات والعلامات التجارية العالمية والتوصية بها.",
        breadcrumb: "الرئيسية / تدقيق المقارنة المرجعية للعلامات",
        readLink: "عرض الملف الكامل →",
        fileIdLabel: "رقم الملف",
        sidebarHeading: "إرشادات المدقق الرئيسي",
        sidebarLinksHeading: "أحدث التنبيهات",
      },
      alerts: {
        title: "ملاحظات التدقيق والتنبيهات",
        englishTitle: "Audit Observations & Alerts",
        description:
          "تتابع AIBRI الأنماط غير الطبيعية في سيناريوهات القرار الحساسة وتصدر تنبيهات تحيز منظمة.",
        breadcrumb: "الرئيسية / ملاحظات التدقيق والتنبيهات",
        readLink: "فتح ملف التنبيه →",
        fileIdLabel: "رقم الملف",
        sidebarHeading: "إرشادات الاستجابة",
        sidebarLinksHeading: "الفئات",
      },
    },
    article: {
      home: "الرئيسية",
      archiveId: "رقم ملف التدقيق",
      publishedAt: "تاريخ النشر",
      auditRegion: "منطقة التدقيق",
      readTime: "مدة القراءة",
      summary: "الملخص التنفيذي",
      shareReport: "مشاركة",
      copyLink: "نسخ الرابط",
      disclaimer: "إخلاء المسؤولية / Disclaimer",
      auditorProfile: "ملف المدقق",
      sovereignty: "سيادة التدقيق",
      relatedFiles: "ملفات ذات صلة",
      independence: "مبادئ الاستقلال",
      viewProfile: "عرض الملف الكامل →",
    },
    staticPage: {
      lastUpdated: "آخر تحديث",
      status: "حالة الوثيقة / Status",
      approval: "حالة الاعتماد",
      documentId: "رقم الوثيقة",
      secrecy: "مستوى السرية",
      related: "سياسات ذات صلة / Related",
    },
    pageTitles: {
      about: "حول AIBRI",
      auditors: "ملفات المدققين",
      methodology: "المنهجية",
      evidenceVault: "أرشيف الأدلة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      antiFraud: "بيان مكافحة الاحتيال",
      integrity: "مدونة النزاهة",
    },
    breadcrumbs: {
      about: "الرئيسية / حولنا",
      auditors: "الرئيسية / الشؤون المؤسسية",
      methodology: "الرئيسية / المنهجية",
      evidenceVault: "الرئيسية / أرشيف الأدلة",
      privacy: "الرئيسية / الامتثال / سياسة الخصوصية",
      terms: "الرئيسية / الامتثال / شروط الخدمة",
      antiFraud: "الرئيسية / الامتثال / بيان مكافحة الاحتيال",
      integrity: "الرئيسية / الامتثال / مدونة النزاهة",
    },
    notFound: {
      label: "مستند مفقود",
      title: "تعذر العثور على الصفحة أو ملف التدقيق المطلوب",
      body: "قد يكون الرابط منتهيًا أو أن الملف لم يُنشر بعد. يمكنك العودة إلى الصفحة الرئيسية أو تصفح أحدث التقارير.",
      homeAction: "العودة للرئيسية",
      reportsAction: "عرض التقارير",
    },
  },
  pt: {
    languageLabel: "Idioma",
    brandSubtitle: "Gabinete Oficial de Auditoria de Reconhecimento Algorítmico",
    translationNotice: {
      title: "Interface localizada ativada",
      body: "A navegação e a estrutura das páginas já estão localizadas. As traduções editoriais dos conteúdos longos ainda estão em preparação, por isso parte do conteúdo pode permanecer no idioma de origem.",
    },
    nav: {
      home: "Boletim de Auditoria",
      reports: "Auditorias comparativas de marca",
      alerts: "Observações e alertas de auditoria",
      methodology: "Metodologia",
      auditors: "Auditores",
      evidenceVault: "Arquivo de Evidências",
    },
    pagination: {
      ariaLabel: "Paginação",
      page: "Página",
      prev: "Anterior",
      next: "Próxima",
    },
    footer: {
      affairs: "Instituição",
      compliance: "Conformidade",
      about: "Sobre a AIBRI",
      auditors: "Perfis dos auditores",
      methodology: "Metodologia",
      contact: "Fale conosco",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      antiFraud: "Declaração Antifraude",
      integrity: "Código de Integridade",
      institutionDescription:
        "Um instituto de pesquisa independente dedicado à transparência e à equidade na era comercial algorítmica.",
      legal:
        "© 2025 AI BrandRank Institute (AIBRI). Instituição de pesquisa registrada. Todo o conteúdo é protegido pela legislação internacional de direitos autorais.",
    },
    footerSubscription: {
      title: "Assinar atualizações",
      body: "Receba por e-mail os boletins de auditoria e novos relatórios comparativos.",
      emailLabel: "E-mail",
      emailPlaceholder: "user@example.com",
      submit: "Assinar",
      submitting: "Enviando...",
      success: "Inscrição concluída.",
      invalidEmail: "Informe um endereço de e-mail válido.",
      siteUnavailable: "A assinatura está temporariamente indisponível.",
      networkError: "Não foi possível enviar agora. Tente novamente.",
    },
    home: {
      sectionLabel: "Boletim Oficial de Auditoria",
      sidebarLabel: "Gabinete dos Auditores",
      bulletinTypeLabel: "Boletim institucional",
      liveTypeLabel: "Atualização ao vivo",
    },
    topUtility: {
      globalNodes: "NÓS GLOBAIS: 24 ATIVOS",
      currentProtocol: "PROTOCOLO ATUAL: V1.0.4",
      perceptionData: "DADOS DE PERCEPÇÃO: PROCESSANDO...",
    },
    collections: {
      reports: {
        title: "Auditorias comparativas de marca",
        englishTitle: "Brand Benchmark Audits",
        description:
          "A AIBRI publica auditorias recorrentes sobre como os grandes sistemas de IA representam e recomendam setores e marcas globais.",
        breadcrumb: "Início / Auditorias comparativas de marca",
        readLink: "Ver arquivo completo →",
        fileIdLabel: "Arquivo",
        sidebarHeading: "Diretrizes do auditor-chefe",
        sidebarLinksHeading: "Alertas recentes",
      },
      alerts: {
        title: "Observações e alertas de auditoria",
        englishTitle: "Audit Observations & Alerts",
        description:
          "A AIBRI acompanha padrões anormais de saída em cenários críticos de decisão e publica alertas estruturados.",
        breadcrumb: "Início / Observações e alertas de auditoria",
        readLink: "Abrir alerta →",
        fileIdLabel: "Arquivo",
        sidebarHeading: "Guia de resposta",
        sidebarLinksHeading: "Categorias",
      },
    },
    article: {
      home: "Início",
      archiveId: "Arquivo de auditoria",
      publishedAt: "Publicado em",
      auditRegion: "Região auditada",
      readTime: "Tempo de leitura",
      summary: "Resumo Executivo",
      shareReport: "Compartilhar",
      copyLink: "Copiar link",
      disclaimer: "Aviso legal / Disclaimer",
      auditorProfile: "Perfil do auditor",
      sovereignty: "Soberania da auditoria",
      relatedFiles: "Arquivos relacionados",
      independence: "Princípios de independência",
      viewProfile: "Ver perfil completo →",
    },
    staticPage: {
      lastUpdated: "Última atualização",
      status: "Status do documento / Status",
      approval: "Aprovação",
      documentId: "ID do documento",
      secrecy: "Classificação",
      related: "Políticas relacionadas / Related",
    },
    pageTitles: {
      about: "Sobre a AIBRI",
      auditors: "Perfis dos auditores",
      methodology: "Metodologia",
      evidenceVault: "Arquivo de Evidências",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      antiFraud: "Declaração Antifraude",
      integrity: "Código de Integridade",
    },
    breadcrumbs: {
      about: "Início / Sobre",
      auditors: "Início / Assuntos institucionais",
      methodology: "Início / Metodologia",
      evidenceVault: "Início / Arquivo de Evidências",
      privacy: "Início / Conformidade / Política de Privacidade",
      terms: "Início / Conformidade / Termos de Serviço",
      antiFraud: "Início / Conformidade / Declaração Antifraude",
      integrity: "Início / Conformidade / Código de Integridade",
    },
    notFound: {
      label: "Documento ausente",
      title: "A página ou o arquivo solicitado não foi encontrado",
      body: "O link pode estar desatualizado ou o conteúdo ainda não foi publicado. Você pode voltar à página inicial ou consultar os relatórios mais recentes.",
      homeAction: "Voltar ao início",
      reportsAction: "Ver relatórios",
    },
  },
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleMeta(locale: Locale) {
  return localeMeta[locale];
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function getDirection(locale: Locale) {
  return localeMeta[locale].dir;
}

export function stripLocaleFromPathname(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const [pathWithoutHash, hash = ""] = path.split("#");
  const [pathWithoutQuery, query = ""] = pathWithoutHash.split("?");
  const segments = pathWithoutQuery.split("/").filter(Boolean);

  const barePath =
    segments.length > 0 && hasLocale(segments[0])
      ? `/${segments.slice(1).join("/")}`
      : pathWithoutQuery;
  const normalized = barePath === "/" || barePath === "" ? "/" : barePath.replace(/\/+$/, "");
  const queryPart = query ? `?${query}` : "";
  const hashPart = hash ? `#${hash}` : "";

  return `${normalized}${queryPart}${hashPart}`;
}

export function localizeHref(locale: Locale, href: string) {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return href;
  }

  const cleanHref = href || "/";
  const [pathWithoutHash, hash = ""] = cleanHref.split("#");
  const [pathWithoutQuery, query = ""] = pathWithoutHash.split("?");
  const stripped = stripLocaleFromPathname(pathWithoutQuery);
  const pathname = stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
  const queryPart = query ? `?${query}` : "";
  const hashPart = hash ? `#${hash}` : "";

  return `${pathname}${queryPart}${hashPart}`;
}

export function getHomeCopy(locale: Locale) {
  return getMessages(locale).home;
}

export function getTopUtilityCopy(locale: Locale) {
  return getMessages(locale).topUtility;
}

export function getCollectionCopy(locale: Locale, key: "reports" | "alerts") {
  return getMessages(locale).collections[key];
}

export function getPaginationCopy(locale: Locale) {
  return getMessages(locale).pagination;
}

export function getArticleCollectionLabel(locale: Locale, key: "reports" | "alerts") {
  return getMessages(locale).collections[key].title;
}

const articleUiCopyByLocale: Record<Locale, ArticleUiCopy> = {
  en: {
    sectionHeading: "Main Text",
    unavailable: "Content is temporarily unavailable.",
    minuteUnit: "min",
    disclaimerFromApi:
      "{collectionLabel} content is sourced from the public articles API for display only.",
    disclaimerPublished: "Public availability is subject to the published version in the CMS.",
    leadAuditorName: "Chief Auditor: Striver",
    leadAuditorBio:
      "Focused on global AI behavior auditing and algorithmic asset valuation, with 15 years of experience in digital compliance and cross-border data analysis.",
    sovereigntyBody:
      "AIBRI maintains a strict neutral audit stance. We do not accept requests from brands to purchase rankings, and all research funding comes from independent trusts to protect the AIRI index from commercial influence.",
    verifiedSeal: "VERIFIED",
    officialSeal: "OFFICIAL",
    documentSeal: "DOC",
    linkedInLabel: "LinkedIn",
  },
  es: {
    sectionHeading: "Texto principal",
    unavailable: "El contenido no está disponible temporalmente.",
    minuteUnit: "min",
    disclaimerFromApi:
      "El contenido de {collectionLabel} proviene de la API pública de artículos y es solo para visualización.",
    disclaimerPublished: "La disponibilidad pública depende de la versión publicada en el CMS.",
    leadAuditorName: "Auditora principal: Striver",
    leadAuditorBio:
      "Especialista en auditoría global del comportamiento de IA y valoración de activos algorítmicos, con 15 años de experiencia en cumplimiento digital y análisis transfronterizo de datos.",
    sovereigntyBody:
      "AIBRI mantiene una postura de auditoría estrictamente neutral. No aceptamos solicitudes de marcas para comprar posiciones y toda la financiación procede de fideicomisos independientes para proteger el índice AIRI de influencias comerciales.",
    verifiedSeal: "VERIFICADO",
    officialSeal: "OFICIAL",
    documentSeal: "DOC.",
    linkedInLabel: "LinkedIn",
  },
  fr: {
    sectionHeading: "Texte principal",
    unavailable: "Le contenu est temporairement indisponible.",
    minuteUnit: "min",
    disclaimerFromApi:
      "Le contenu de {collectionLabel} provient de l'API publique d'articles et est fourni à titre d'affichage uniquement.",
    disclaimerPublished: "La disponibilité publique dépend de la version publiée dans le CMS.",
    leadAuditorName: "Auditeur en chef : Striver",
    leadAuditorBio:
      "Spécialisé dans l'audit mondial du comportement des IA et la valorisation des actifs algorithmiques, avec 15 ans d'expérience en conformité numérique et en analyse de données transfrontalière.",
    sovereigntyBody:
      "AIBRI maintient une position d'audit strictement neutre. Nous n'acceptons aucune demande d'achat de classement de la part des marques et tout le financement de la recherche provient de fiducies indépendantes afin de protéger l'indice AIRI de toute influence commerciale.",
    verifiedSeal: "VÉRIFIÉ",
    officialSeal: "OFFICIEL",
    documentSeal: "DOC.",
    linkedInLabel: "LinkedIn",
  },
  de: {
    sectionHeading: "Haupttext",
    unavailable: "Inhalt ist vorübergehend nicht verfügbar.",
    minuteUnit: "Min.",
    disclaimerFromApi:
      "{collectionLabel}-Inhalte stammen aus der öffentlichen Artikel-API und dienen nur der Anzeige.",
    disclaimerPublished:
      "Die öffentliche Verfügbarkeit richtet sich nach der veröffentlichten Version im CMS.",
    leadAuditorName: "Leitender Auditor: Striver",
    leadAuditorBio:
      "Spezialisiert auf globale KI-Verhaltensaudits und die Bewertung algorithmischer Vermögenswerte, mit 15 Jahren Erfahrung in digitaler Compliance und grenzüberschreitender Datenanalyse.",
    sovereigntyBody:
      "AIBRI verfolgt eine strikt neutrale Audit-Haltung. Wir akzeptieren keine Anfragen von Marken zum Kauf von Rankings, und sämtliche Forschungsgelder stammen aus unabhängigen Trusts, um den AIRI-Index vor kommerziellem Einfluss zu schützen.",
    verifiedSeal: "VERIFIZIERT",
    officialSeal: "OFFIZIELL",
    documentSeal: "DOK.",
    linkedInLabel: "LinkedIn",
  },
  "zh-CN": {
    sectionHeading: "正文",
    unavailable: "内容暂时不可用。",
    minuteUnit: "分钟",
    disclaimerFromApi: "{collectionLabel} 内容来自公开文章接口，仅供展示。",
    disclaimerPublished: "文章公开状态以后台已发布版本为准。",
    leadAuditorName: "首席审计官: Striver",
    leadAuditorBio:
      "专注于全球人工智能行为审计与算法资产定价，拥有 15 年数字化合规与跨国数据分析经验，致力于建立 AI 时代的客观评价体系。",
    sovereigntyBody:
      "AIBRI 坚持严格的中立审计立场。我们不接受品牌方购买排名的请求，所有研究经费均来自独立信托，确保 AIRI 指数免受商业利益侵蚀。",
    verifiedSeal: "已核验",
    officialSeal: "官方",
    documentSeal: "文件",
    linkedInLabel: "领英",
  },
  ja: {
    sectionHeading: "本文",
    unavailable: "コンテンツは一時的に利用できません。",
    minuteUnit: "分",
    disclaimerFromApi: "{collectionLabel} の内容は公開記事 API から取得した表示用データです。",
    disclaimerPublished: "公開状態は CMS で公開済みの版に準じます。",
    leadAuditorName: "主任監査官: Striver",
    leadAuditorBio:
      "グローバルな AI 行動監査とアルゴリズム資産評価に注力し、デジタルコンプライアンスと越境データ分析で 15 年の経験を有します。",
    sovereigntyBody:
      "AIBRI は厳格に中立な監査姿勢を維持しています。ブランドによる順位購入の依頼は受け付けず、すべての研究資金は独立信託から提供され、AIRI 指数を商業的影響から守っています。",
    verifiedSeal: "検証済み",
    officialSeal: "公式",
    documentSeal: "文書",
    linkedInLabel: "LinkedIn",
  },
  ar: {
    sectionHeading: "النص الرئيسي",
    unavailable: "المحتوى غير متاح مؤقتًا.",
    minuteUnit: "دقيقة",
    disclaimerFromApi: "محتوى {collectionLabel} مصدره واجهة المقالات العامة ويُعرض لأغراض العرض فقط.",
    disclaimerPublished: "تعتمد حالة الإتاحة العامة على النسخة المنشورة في نظام CMS.",
    leadAuditorName: "المدقق الرئيسي: Striver",
    leadAuditorBio:
      "يركز على تدقيق سلوك الذكاء الاصطناعي عالميًا وتقييم الأصول الخوارزمية، مع خبرة تمتد 15 عامًا في الامتثال الرقمي وتحليل البيانات عبر الحدود.",
    sovereigntyBody:
      "تحافظ AIBRI على موقف تدقيق محايد بشكل صارم. نحن لا نقبل طلبات شراء التصنيفات من العلامات التجارية، ويأتي تمويل الأبحاث بالكامل من صناديق مستقلة لحماية مؤشر AIRI من التأثير التجاري.",
    verifiedSeal: "موثّق",
    officialSeal: "رسمي",
    documentSeal: "مستند",
    linkedInLabel: "لينكدإن",
  },
  pt: {
    sectionHeading: "Texto principal",
    unavailable: "O conteúdo está temporariamente indisponível.",
    minuteUnit: "min",
    disclaimerFromApi:
      "O conteúdo de {collectionLabel} vem da API pública de artigos e é exibido apenas para visualização.",
    disclaimerPublished: "A disponibilidade pública segue a versão publicada no CMS.",
    leadAuditorName: "Auditor-chefe: Striver",
    leadAuditorBio:
      "Especialista em auditoria global do comportamento de IA e precificação de ativos algorítmicos, com 15 anos de experiência em conformidade digital e análise transfronteiriça de dados.",
    sovereigntyBody:
      "A AIBRI mantém uma postura de auditoria estritamente neutra. Não aceitamos pedidos de compra de posições por marcas, e todo o financiamento da pesquisa vem de fundos independentes para proteger o índice AIRI da influência comercial.",
    verifiedSeal: "VERIFICADO",
    officialSeal: "OFICIAL",
    documentSeal: "DOC.",
    linkedInLabel: "LinkedIn",
  },
};

export function getArticleUiCopy(locale: Locale) {
  return articleUiCopyByLocale[locale];
}

const homeFeedUiCopyByLocale: Record<Locale, HomeFeedUiCopy> = {
  en: {
    bulletinTypeLabel: "Institution Bulletin",
    liveTypeLabel: "Live Update",
    reportCta: "View filing details →",
    alertCta: "View audit trail →",
  },
  es: {
    bulletinTypeLabel: "Boletín institucional",
    liveTypeLabel: "Actualización en vivo",
    reportCta: "Ver detalles del expediente →",
    alertCta: "Ver rastro de auditoría →",
  },
  fr: {
    bulletinTypeLabel: "Bulletin institutionnel",
    liveTypeLabel: "Mise à jour en direct",
    reportCta: "Voir le dossier →",
    alertCta: "Voir la trace d'audit →",
  },
  de: {
    bulletinTypeLabel: "Institutionsbulletin",
    liveTypeLabel: "Live-Update",
    reportCta: "Akte ansehen →",
    alertCta: "Audit-Spur ansehen →",
  },
  "zh-CN": {
    bulletinTypeLabel: "机构公报",
    liveTypeLabel: "实时动态",
    reportCta: "查看备案详情 →",
    alertCta: "查看审计轨迹 →",
  },
  ja: {
    bulletinTypeLabel: "機関公報",
    liveTypeLabel: "ライブ更新",
    reportCta: "届出の詳細を見る →",
    alertCta: "監査トレースを見る →",
  },
  ar: {
    bulletinTypeLabel: "موجز المؤسسة",
    liveTypeLabel: "تحديث مباشر",
    reportCta: "عرض تفاصيل الإيداع →",
    alertCta: "عرض مسار التدقيق →",
  },
  pt: {
    bulletinTypeLabel: "Boletim institucional",
    liveTypeLabel: "Atualização ao vivo",
    reportCta: "Ver detalhes do registro →",
    alertCta: "Ver trilha de auditoria →",
  },
};

export function getHomeFeedUiCopy(locale: Locale) {
  return homeFeedUiCopyByLocale[locale];
}

const homeMetadataCopyByLocale: Record<Locale, HomeMetadataCopy> = {
  en: {
    description:
      "AIBRI's official audit bulletin homepage featuring the latest brand benchmark audits, audit observations, alerts, and evidence-governance updates.",
  },
  es: {
    description:
      "Página inicial del boletín oficial de auditoría de AIBRI con las últimas auditorías comparativas de marca, observaciones, alertas y novedades sobre gobernanza de evidencias.",
  },
  fr: {
    description:
      "Page d'accueil du bulletin officiel d'audit d'AIBRI présentant les derniers audits comparatifs, observations, alertes et mises à jour sur la gouvernance des preuves.",
  },
  de: {
    description:
      "Startseite des offiziellen Audit-Bulletins von AIBRI mit den neuesten Marken-Benchmark-Audits, Beobachtungen, Warnungen und Updates zur Evidenz-Governance.",
  },
  "zh-CN": {
    description: "AIBRI 官方审计公报首页，展示最新品牌对标审计、审计观察与预警及证据治理动态。",
  },
  ja: {
    description:
      "AIBRI公式監査公報のトップページ。最新のブランド対標監査、監査観測・警報、証拠ガバナンス更新を掲載します。",
  },
  ar: {
    description:
      "الصفحة الرئيسية للنشرة الرسمية للتدقيق لدى AIBRI، وتعرض أحدث تدقيقات المقارنة بين العلامات التجارية والملاحظات والتنبيهات وتحديثات حوكمة الأدلة.",
  },
  pt: {
    description:
      "Página inicial do boletim oficial de auditoria da AIBRI com as auditorias comparativas de marca mais recentes, observações, alertas e atualizações de governança de evidências.",
  },
};

export function getHomeMetadataCopy(locale: Locale) {
  return homeMetadataCopyByLocale[locale];
}

export function getFooterSubscriptionCopy(locale: Locale) {
  return getMessages(locale).footerSubscription;
}

const rootMetadataCopyByLocale: Record<Locale, RootMetadataCopy> = {
  en: {
    description:
      "An independent global research institute auditing how AI models recognize brands through distributed nodes.",
    notFoundTitle: "Page Not Found",
  },
  es: {
    description:
      "Un instituto global de investigación independiente que audita cómo los modelos de IA reconocen marcas mediante nodos distribuidos.",
    notFoundTitle: "Página no encontrada",
  },
  fr: {
    description:
      "Un institut de recherche mondial indépendant qui audite la reconnaissance des marques par les modèles d'IA via des nœuds distribués.",
    notFoundTitle: "Page introuvable",
  },
  de: {
    description:
      "Ein unabhängiges globales Forschungsinstitut, das über verteilte Knoten prüft, wie KI-Modelle Marken erkennen.",
    notFoundTitle: "Seite nicht gefunden",
  },
  "zh-CN": {
    description: "独立的全球研究机构，通过分布式节点审计人工智能模型中的品牌认知权重。",
    notFoundTitle: "页面未找到",
  },
  ja: {
    description: "分散ノードを通じて AI モデルのブランド認知を監査する独立系グローバル研究機関。",
    notFoundTitle: "ページが見つかりません",
  },
  ar: {
    description:
      "معهد بحثي عالمي مستقل يدقق في كيفية تعرف نماذج الذكاء الاصطناعي على العلامات التجارية عبر عقد موزعة.",
    notFoundTitle: "الصفحة غير موجودة",
  },
  pt: {
    description:
      "Um instituto global independente de pesquisa que audita como modelos de IA reconhecem marcas por meio de nós distribuídos.",
    notFoundTitle: "Página não encontrada",
  },
};

export function getRootMetadataCopy(locale: Locale) {
  return rootMetadataCopyByLocale[locale];
}

export function getStaticPageCopy(
  locale: Locale,
  key:
    | "about"
    | "auditors"
    | "methodology"
    | "evidence-vault"
    | "privacy"
    | "terms"
    | "anti-fraud"
    | "integrity",
) {
  const localizedMessages = getMessages(locale);

  const titleMap = {
    about: localizedMessages.pageTitles.about,
    auditors: localizedMessages.pageTitles.auditors,
    methodology: localizedMessages.pageTitles.methodology,
    "evidence-vault": localizedMessages.pageTitles.evidenceVault,
    privacy: localizedMessages.pageTitles.privacy,
    terms: localizedMessages.pageTitles.terms,
    "anti-fraud": localizedMessages.pageTitles.antiFraud,
    integrity: localizedMessages.pageTitles.integrity,
  } as const;

  const breadcrumbMap = {
    about: localizedMessages.breadcrumbs.about,
    auditors: localizedMessages.breadcrumbs.auditors,
    methodology: localizedMessages.breadcrumbs.methodology,
    "evidence-vault": localizedMessages.breadcrumbs.evidenceVault,
    privacy: localizedMessages.breadcrumbs.privacy,
    terms: localizedMessages.breadcrumbs.terms,
    "anti-fraud": localizedMessages.breadcrumbs.antiFraud,
    integrity: localizedMessages.breadcrumbs.integrity,
  } as const;

  return {
    title: titleMap[key],
    breadcrumb: breadcrumbMap[key],
  };
}
