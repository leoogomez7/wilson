import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "es" | "en" | "pt";
export const locales: Locale[] = ["es", "en", "pt"];
export const defaultLocale: Locale = "es";

const translations = {
  es: {
    nav: {
      home: "Home",
      estudio: "Estudio",
      casas: "Casas",
      proyectos: "Proyectos",
      sustentabilidad: "Sustentabilidad",
      servicios: "Nuestros Servicios",
      proceso: "Proceso de trabajo",
      contacto: "Contacto",
      language: "Idioma",
    },
    common: {
      seeMore: "Ver más",
    },
    hero: {
      tagline: "Estudio de Arquitectura · Pilar, Buenos Aires",
      description: "Te acompañamos desde el asesoramiento inicial hasta que puedas disfrutar del espacio que tenés en mente, brindándote la garantía de nuestro servicio.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Solicitar Asesoramiento",
      scroll: "Scroll",
    },
    history: {
      sectionLabel: "Nuestro Concepto",
      heading: "Proyección, Dirección y Ejecución",
      description:
        "Somos un estudio de arquitectura que cuenta con doce años de experiencia, nuestro enfoque es combinar diseños, planificación, estratégica y gestión integral, con el compromiso claro de transformar ideas en espacios concretos funcionales de alto valor, con profesionalismo y visión.",
    },
    projects: {
      sectionLabel: "Análisis y Visión",
      heading: "Proyectos",
      filters: {
        todos: "Todos",
        viviendas: "Viviendas",
        comercial: "Comercial",
        reformas: "Reformas",
      },
      modal: {
        close: "Cerrar",
        location: "Ubicación",
        year: "Año",
        area: "Superficie",
        description: "Descripción",
      },
    },
    services: {
      sectionLabel: "Capacidades",
      heading: "Nuestros Servicios",
      processLabel: "Metodología",
      processHeading: "Proceso de Trabajo",
    },
    team: {
      sectionLabel: "12 años de trayectoria",
      heading: "El Estudio",
    },
    contact: {
      sectionLabel: "Contacto",
      heading: "Hablemos de su idea",
      thankYou: "Gracias por su consulta.",
      sentMessage: "Se abrirá su cliente de correo para confirmar el envío.",
      fields: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono",
        type: "Tipo de proyecto",
        message: "Mensaje",
      },
      sendButton: "Enviar Consulta",
      mailtoSubject: "Consulta web —",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      social: "Redes",
      description: "Estudio de arquitectura contemporánea. Diseño, dirección y construcción de obras de alto valor.",
      designedFor: "Diseñado para la excelencia",
      copyright: "© {year} Wilson Arquitectura",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
    map: {
      sectionLabel: "Ubicación",
      heading: "Visite el estudio",
      description:
        "Atendemos con cita previa en Buenos Aires, Argentina. Coordinamos visitas a obra y reuniones de proyecto a medida.",
      howToGetThere: "Cómo llegar",
      emailLabel: "Email",
      telLabel: "Tel",
      addressLabel: "Dirección",
    },
    sustainability: {
      sectionLabel: "Cuidar el Entorno",
      heading: "Sustentabilidad",
      description:
        "Creemos que el verdadero legado no está en lo que construimos, sino en cómo cuidamos y respetamos el espacio que compartimos.",
      points: [
        {
          title: "Materiales responsables",
          description:
            "Seleccionamos sistemas constructivos y acabados con menor huella de carbono.",
        },
        {
          title: "Eficiencia energética",
          description:
            "Diseñamos fachadas, envolventes y climatización para reducir consumo y mejorar confort.",
        },
        {
          title: "Gestión integral",
          description:
            "Planificamos obra y procesos con foco en economía circular y residuos controlados.",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      estudio: "Studio",
      casas: "Houses",
      proyectos: "Projects",
      sustentabilidad: "Sustainability",
      servicios: "Our Services",
      proceso: "Work Process",
      contacto: "Contact",
      language: "Language",
    },
    common: {
      seeMore: "See more",
    },
    hero: {
      tagline: "Architecture Studio · Buenos Aires",
      description:
        "We design spaces that transcend. We turn ideas into meaningful architecture.",
      ctaProjects: "View Projects",
      ctaContact: "Request Consultation",
      scroll: "Scroll",
    },
    history: {
      sectionLabel: "01 — Our Concept",
      heading: "Projection, Direction and Execution",
      description:
        "We are an architecture studio with twelve years of experience, focused on combining design, planning, strategic management and construction with a clear commitment to turning ideas into high-value functional spaces.",
      description2:
        "Each project begins with a close conversation with the client and a thorough reading of the context, to propose elegant, lasting constructive solutions.",
    },
    projects: {
      sectionLabel: "02 — Featured Works",
      heading: "Projects",
      filters: {
        todos: "All",
        viviendas: "Residential",
        comercial: "Commercial",
        reformas: "Renovations",
      },
      modal: {
        close: "Close",
        location: "Location",
        year: "Year",
        area: "Area",
        description: "Description",
      },
    },
    services: {
      sectionLabel: "02 — Capabilities",
      heading: "Our Services",
      processLabel: "03 — Methodology",
      processHeading: "Work Process",
    },
    team: {
      sectionLabel: "04 — Leadership",
      heading: "The Studio",
    },
    contact: {
      sectionLabel: "05 — Contact",
      heading: "Let's talk about your idea",
      thankYou: "Thank you for your inquiry.",
      sentMessage: "Your email client will open to complete the message.",
      fields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        type: "Project type",
        message: "Message",
      },
      sendButton: "Send Inquiry",
      mailtoSubject: "Web inquiry —",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      social: "Social",
      description: "Contemporary architecture studio. Design, management and construction of high-value projects.",
      designedFor: "Designed for excellence",
      copyright: "© {year} Wilson Arquitectura",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
    map: {
      sectionLabel: "06 — Location",
      heading: "Visit the studio",
      description:
        "We work by appointment in Buenos Aires, Argentina. We schedule site visits and project meetings on demand.",
      howToGetThere: "How to get there",
      emailLabel: "Email",
      telLabel: "Tel",
      addressLabel: "Address",
    },
    sustainability: {
      sectionLabel: "05 — Sustainability",
      heading: "Sustainability",
      description:
        "We integrate efficient solutions and responsible materials in every project to reduce environmental impact.",
      points: [
        {
          title: "Responsible materials",
          description:
            "We choose construction systems and finishes with a lower carbon footprint.",
        },
        {
          title: "Energy efficiency",
          description:
            "We design facades, envelopes and HVAC for reduced consumption and greater comfort.",
        },
        {
          title: "Integrated management",
          description:
            "We plan construction and process workflows with circular economy and controlled waste.",
        },
      ],
    },
  },
  pt: {
    nav: {
      home: "Home",
      estudio: "Estúdio",
      casas: "Casas",
      proyectos: "Projetos",
      sustentabilidad: "Sustentabilidade",
      servicios: "Nossos Serviços",
      proceso: "Processo de Trabalho",
      contacto: "Contato",
      language: "Idioma",
    },
    common: {
      seeMore: "Ver mais",
    },
    hero: {
      tagline: "Estúdio de Arquitetura · Buenos Aires",
      description:
        "Projetamos espaços que transcendem. Transformamos ideias em arquitetura de valor.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Solicitar Consultoria",
      scroll: "Scroll",
    },
    history: {
      sectionLabel: "01 — Nosso Conceito",
      heading: "Projeção, Direção e Execução",
      description:
        "Somos um estúdio de arquitetura com doze anos de experiência, focado em combinar design, planejamento, gestão estratégica e construção com um compromisso claro de transformar ideias em espaços funcionais de alto valor.",
      description2:
        "Cada projeto começa com uma conversa próxima com o cliente e uma leitura cuidadosa do contexto, para propor soluções construtivas elegantes e duradouras.",
    },
    projects: {
      sectionLabel: "02 — Obras em Destaque",
      heading: "Projetos",
      filters: {
        todos: "Todos",
        viviendas: "Residencial",
        comercial: "Comercial",
        reformas: "Reformas",
      },
      modal: {
        close: "Fechar",
        location: "Localização",
        year: "Ano",
        area: "Área",
        description: "Descrição",
      },
    },
    services: {
      sectionLabel: "02 — Capacidades",
      heading: "Nossos Serviços",
      processLabel: "03 — Metodologia",
      processHeading: "Processo de Trabalho",
    },
    team: {
      sectionLabel: "04 — Liderança",
      heading: "O Estúdio",
    },
    contact: {
      sectionLabel: "05 — Contato",
      heading: "Vamos falar sobre sua ideia",
      thankYou: "Obrigado pelo seu contato.",
      sentMessage: "Seu cliente de e-mail será aberto para confirmar o envio.",
      fields: {
        name: "Nome completo",
        email: "Email",
        phone: "Telefone",
        type: "Tipo de projeto",
        message: "Mensagem",
      },
      sendButton: "Enviar Solicitação",
      mailtoSubject: "Consulta web —",
    },
    footer: {
      navigation: "Navegação",
      contact: "Contato",
      social: "Redes",
      description: "Estúdio de arquitetura contemporânea. Design, direção e construção de obras de alto valor.",
      designedFor: "Projetado para a excelência",
      copyright: "© {year} Wilson Arquitectura",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
    map: {
      sectionLabel: "06 — Localização",
      heading: "Visite o estúdio",
      description:
        "Atendemos com hora marcada em Buenos Aires, Argentina. Agendamos visitas e reuniões de projeto sob medida.",
      howToGetThere: "Como chegar",
      emailLabel: "Email",
      telLabel: "Tel",
      addressLabel: "Endereço",
    },
    sustainability: {
      sectionLabel: "05 — Sustentabilidade",
      heading: "Sustentabilidade",
      description:
        "Integramos soluções eficientes e materiais responsáveis em cada projeto para reduzir o impacto ambiental.",
      points: [
        {
          title: "Materiais responsáveis",
          description:
            "Selecionamos sistemas construtivos e acabamentos com menor pegada de carbono.",
        },
        {
          title: "Eficiência energética",
          description:
            "Desenhamos fachadas, envoltórias e climatização para reduzir consumo e melhorar conforto.",
        },
        {
          title: "Gestão integrada",
          description:
            "Planejamos obra e processos com foco em economia circular e resíduos controlados.",
        },
      ],
    },
  },
} as const;

type TranslationValue = (typeof translations)[keyof typeof translations];

type TranslationContextValue = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: TranslationValue;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function getPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const query = new URLSearchParams(window.location.search).get("lang") as Locale | null;
  if (query && locales.includes(query)) {
    return query;
  }

  const stored = window.localStorage.getItem("wilson_language") as Locale | null;
  if (stored && locales.includes(stored)) {
    return stored;
  }

  const browserLang = window.navigator.language.slice(0, 2).toLowerCase();
  if (browserLang === "pt") {
    return "pt";
  }
  if (browserLang === "en") {
    return "en";
  }

  return defaultLocale;
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Locale>(getPreferredLocale);

  useEffect(() => {
    window.localStorage.setItem("wilson_language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
