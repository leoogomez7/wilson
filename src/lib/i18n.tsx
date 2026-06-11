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
      readMore: "Leer más",
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
      homeLabel: "Casas y Proyectos",
      originLabels: {
        casas: "Casa",
        proyectos: "Proyectos",
        ambos: "Casas y Proyectos",
      },
      heading: "Proyectos",
      sectionDescription:
        "Cada proyecto nace de una visión particular y de un profundo análisis de su contexto. Nos enfocamos en desarrollar propuestas que integren calidad espacial, innovación y funcionalidad, adaptándose a las características del entorno y a los objetivos específicos de cada desafío arquitectónico.",
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
      capabilitiesDescription:
        "Nuestros servicios incluyen proyecto arquitectónico, dirección de obra, interiorismo, remodelaciones y gestión integral, acompañando cada etapa con foco en calidad funcional y estética.",
      processLabel: "Metodología",
      processHeading: "Proceso de Trabajo",
      processDescription:
        "El proceso de trabajo muestra cómo avanzamos desde la idea inicial hasta la entrega final, con etapas claras de análisis, diseño, presupuesto y construcción para asegurar resultados integrales.",
    },
    team: {
      sectionLabel: "12 años de trayectoria",
      heading: "El Estudio",
      homeDescription:
        "Nuestra trayectoria está guiada por la pasión de crear lugares que trascienden el tiempo. Diseñamos espacios únicos que reflejan una visión de futuro y se transforman en el escenario de historias memorables.",
      members: [
        {
          id: "josue",
          name: "Josué",
          role: "Maestro Mayor de Obras",
          bio:
            "Estudiante avanzado de Arquitectura, combina formación técnica y visión profesional para llevar cada proyecto a su máximo nivel. Dentro del estudio, se especializa en la resolución técnica, cómputos y dirección de obra, aportando precisión, compromiso y una mirada estratégica en cada etapa. Su perfil proactivo y su búsqueda constante de mejora lo convierten en una pieza clave dentro del equipo, impulsando resultados de calidad y optimización en cada proyecto.",
        },
        {
          id: "wilson",
          name: "Wilson",
          role: "Fundador & Director",
          bio:
            "Arquitecto formado en la Universidad de Buenos Aires (UBA), distinguido con el premio al mérito académico 2019 y con una sólida trayectoria como ex docente universitario. Cuenta con más de 12 años de experiencia en el rubro, desempeñándose además como asesor técnico en cooperativas de trabajo y jurado suplente del CAUBA 5. En cada proyecto, lidera desde el primer contacto con el cliente hasta la ejecución final de obra. Su enfoque combina diseño, planificación estratégica y gestión integral: asesora, proyecta, coordina equipos técnicos, negocia con proveedores y dirige cada etapa del proceso constructivo. Su compromiso es claro: transformar ideas en espacios concretos, funcionales y de alto valor, acompañando al cliente en cada decisión con profesionalismo y visión.",
        },
        {
          id: "keyla",
          name: "Keyla",
          role: "Diseño de Interiores",
          bio:
            "Especializada en programas de representación visual. Su trabajo es fundamental en cada proyecto: transformar ideas en imágenes concretas, dando forma a los espacios que nuestros clientes imaginan y desean habitar. Con un perfil proactivo, orientado al detalle y una visión enfocada en la excelencia, Keyla aporta soluciones precisas que elevan cada diseño y optimizan la toma de decisiones. Su compromiso y dedicación la convierten en una pieza clave dentro de nuestro equipo.",
        },
      ],
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
      body1:
        "Entendemos la arquitectura como una herramienta para mejorar la forma en que vivimos. Por eso desarrollamos proyectos que combinan diseño, innovación y compromiso ambiental, aprovechando los recursos de manera inteligente y responsable. Cada obra es concebida para generar bienestar, reducir el impacto ecológico y construir un futuro más sostenible para las próximas generaciones.",
      body2:
        "Cada proyecto refleja nuestra visión de una arquitectura inteligente y sostenible. Diseñamos espacios que no solo destacan por su identidad y calidad constructiva, sino también por su eficiencia energética y respeto por el entorno. Apostamos por soluciones que generan bienestar, reducen el consumo de recursos y contribuyen a construir un futuro más consciente y duradero.",
      designPrinciplesHeading: "Principios de Diseño",
      callout:
        "Si vamos a construir el futuro, que sea sostenible y trascendente.",
      principles: [
        {
          title: "Confort Bioclimático",
          description:
            "Diseñamos espacios que aprovechan las condiciones naturales del entorno para mejorar el confort térmico y lumínico durante todo el año, reduciendo la dependencia de sistemas mecánicos.",
        },
        {
          title: "Circulación de Aire Optimizada",
          description:
            "Planificamos la distribución de los ambientes y las aberturas para favorecer la ventilación cruzada, mejorando la calidad del aire interior y la eficiencia energética.",
        },
        {
          title: "Materiales Responsables",
          description:
            "Seleccionamos materiales duraderos, eficientes y de bajo impacto ambiental, priorizando soluciones que aporten sostenibilidad y valor a largo plazo.",
        },
        {
          title: "Implantación Estratégica",
          description:
            "Cada proyecto se adapta a las características específicas del terreno, considerando orientación solar, vientos predominantes, topografía y contexto urbano.",
        },
        {
          title: "Eficiencia Energética",
          description:
            "Incorporamos tecnologías y recursos que optimizan el consumo energético, promoviendo edificaciones más eficientes y sostenibles.",
        },
        {
          title: "Tecnología Integrada",
          description:
            "Aplicamos soluciones inteligentes para automatizar funciones clave del edificio, mejorando la seguridad, el confort y la gestión de recursos.",
        },
        {
          title: "Movilidad y Accesibilidad",
          description:
            "Diseñamos recorridos y accesos pensados para la comodidad de todos, priorizando la conectividad y el bienestar de los usuarios.",
        },
        {
          title: "Atención al Contexto",
          description:
            "Respetamos el paisaje construido y natural, generando proyectos que dialogan con su entorno físico y cultural.",
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
      readMore: "Read more",
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
      homeLabel: "Houses & Projects",
      originLabels: {
        casas: "House",
        proyectos: "Projects",
        ambos: "Houses & Projects",
      },
      heading: "Projects",
      sectionDescription:
        "Each project is born from a specific vision and a deep analysis of its context. We focus on developing proposals that integrate spatial quality, innovation and functionality, adapting to the characteristics of the environment and the specific objectives of each architectural challenge.",
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
      capabilitiesDescription:
        "Our services include architectural design, construction supervision, interior design, renovations and full project management, supporting every stage with a focus on functional quality and aesthetics.",
      processLabel: "03 — Methodology",
      processHeading: "Work Process",
      processDescription:
        "The work process shows how we move from the initial idea to final delivery, with clear stages of analysis, design, budgeting and construction to ensure comprehensive results.",
    },
    team: {
      sectionLabel: "04 — Leadership",
      heading: "The Studio",
      homeDescription:
        "Our journey is guided by a passion for creating places that transcend time. We design unique spaces that reflect a future vision and become the setting for memorable stories.",
      members: [
        {
          id: "josue",
          name: "Josué",
          role: "Master Builder",
          bio:
            "Master Builder and advanced architecture student. Specialist in construction management, technical solutions, cost estimates and planning.",
        },
        {
          id: "wilson",
          name: "Wilson",
          role: "Founder & Director — UBA",
          bio:
            "Architect trained at the University of Buenos Aires. Merit Award 2019. Over 12 years leading residential and commercial projects of high complexity. Former university lecturer and substitute jury member at CAUBA 5.",
        },
        {
          id: "keyla",
          name: "Keyla",
          role: "Interior Design",
          bio:
            "Interior designer specialized in architectural visualization, rendering and graphic representation. Leads the studio's interior design area.",
        },
      ],
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
      body1:
        "We understand architecture as a tool to improve the way we live. That is why we develop projects that combine design, innovation and environmental commitment, using resources intelligently and responsibly. Every work is conceived to generate well-being, reduce ecological impact, and build a more sustainable future for coming generations.",
      body2:
        "Each project reflects our vision of intelligent and sustainable architecture. We design spaces that not only stand out for their identity and constructive quality, but also for their energy efficiency and respect for the surroundings. We pursue solutions that generate well-being, reduce resource consumption, and help build a more conscious and lasting future.",
      designPrinciplesHeading: "Design Principles",
      callout:
        "If we are going to build the future, let it be sustainable and transcendent.",
      principles: [
        {
          title: "Bioclimatic Comfort",
          description:
            "We design spaces that take advantage of natural environmental conditions to improve thermal and visual comfort year round, reducing dependence on mechanical systems.",
        },
        {
          title: "Optimized Airflow",
          description:
            "We plan room layouts and openings to promote cross ventilation, improving indoor air quality and energy efficiency.",
        },
        {
          title: "Responsible Materials",
          description:
            "We select durable, efficient, low-impact materials, prioritizing solutions that provide long-term sustainability and value.",
        },
        {
          title: "Strategic Placement",
          description:
            "Every project is adapted to the specific characteristics of the site, considering solar orientation, prevailing winds, topography and urban context.",
        },
        {
          title: "Energy Efficiency",
          description:
            "We incorporate technologies and resources that optimize energy consumption, promoting more efficient and sustainable buildings.",
        },
        {
          title: "Integrated Technology",
          description:
            "We apply intelligent solutions to automate key building functions, improving security, comfort and resource management.",
        },
        {
          title: "Mobility and Accessibility",
          description:
            "We design circulation and access for everyone’s comfort, prioritizing connectivity and user well-being.",
        },
        {
          title: "Contextual Awareness",
          description:
            "We respect the built and natural landscape, creating projects that dialogue with their physical and cultural environment.",
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
      readMore: "Ler mais",
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
      homeLabel: "Casas e Projetos",
      originLabels: {
        casas: "Casa",
        proyectos: "Projetos",
        ambos: "Casas e Projetos",
      },
      heading: "Projetos",
      sectionDescription:
        "Cada projeto nasce de uma visão particular e de uma análise profunda do seu contexto. Nosso foco é desenvolver propostas que integrem qualidade espacial, inovação e funcionalidade, adaptando-se às características do entorno e aos objetivos específicos de cada desafio arquitetônico.",
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
      capabilitiesDescription:
        "Nossos serviços incluem projeto arquitetônico, direção de obra, design de interiores, reformas e gestão completa de projetos, acompanhando cada etapa com foco em qualidade funcional e estética.",
      processLabel: "03 — Metodologia",
      processHeading: "Processo de Trabalho",
      processDescription:
        "O processo de trabalho mostra como avançamos da ideia inicial até a entrega final, com etapas claras de análise, projeto, orçamento e construção para garantir resultados integrados.",
    },
    team: {
      sectionLabel: "04 — Liderança",
      heading: "O Estúdio",
      homeDescription:
        "Nossa trajetória é guiada pela paixão de criar lugares que transcendem o tempo. Projetamos espaços únicos que refletem uma visão de futuro e se tornam o cenário de histórias memoráveis.",
      members: [
        {
          id: "josue",
          name: "Josué",
          role: "Mestre de Obras",
          bio:
            "Mestre de Obras e estudante avançado de Arquitetura. Especialista em direção de obra, resolução técnica, orçamentos e planejamento construtivo.",
        },
        {
          id: "wilson",
          name: "Wilson",
          role: "Fundador & Diretor — UBA",
          bio:
            "Arquiteto formado na Universidade de Buenos Aires. Prêmio de Mérito Acadêmico 2019. Mais de 12 anos de experiência liderando projetos residenciais e comerciais de alta complexidade. Ex-docente universitário e jurado suplente CAUBA 5.",
        },
        {
          id: "keyla",
          name: "Keyla",
          role: "Design de Interiores",
          bio:
            "Designer de interiores especializada em visualização arquitetônica, renderização e representação gráfica. Lidera a área de interiores do estúdio.",
        },
      ],
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
      body1:
        "Entendemos a arquitetura como uma ferramenta para melhorar a forma como vivemos. Por isso desenvolvemos projetos que combinam design, inovação e compromisso ambiental, aproveitando os recursos de forma inteligente e responsável. Cada obra é concebida para gerar bem-estar, reduzir o impacto ecológico e construir um futuro mais sustentável para as próximas gerações.",
      body2:
        "Cada projeto reflete nossa visão de uma arquitetura inteligente e sustentável. Projetamos espaços que não apenas se destacam por sua identidade e qualidade construtiva, mas também por sua eficiência energética e respeito ao entorno. Apostamos em soluções que geram bem-estar, reduzem o consumo de recursos e contribuem para construir um futuro mais consciente e duradouro.",
      designPrinciplesHeading: "Princípios de Design",
      callout:
        "Se vamos construir o futuro, que seja sustentável e transcendente.",
      principles: [
        {
          title: "Conforto Bioclimático",
          description:
            "Projetamos espaços que aproveitam as condições ambientais naturais para melhorar o conforto térmico e visual ao longo do ano, reduzindo a dependência de sistemas mecânicos.",
        },
        {
          title: "Fluxo de Ar Otimizado",
          description:
            "Planejamos a distribuição dos ambientes e aberturas para promover a ventilação cruzada, melhorando a qualidade do ar interior e a eficiência energética.",
        },
        {
          title: "Materiais Responsáveis",
          description:
            "Selecionamos materiais duráveis, eficientes e de baixo impacto, priorizando soluções que proporcionem sustentabilidade e valor a longo prazo.",
        },
        {
          title: "Implantação Estratégica",
          description:
            "Cada projeto é adaptado às características específicas do terreno, considerando orientação solar, ventos predominantes, topografia e contexto urbano.",
        },
        {
          title: "Eficiência Energética",
          description:
            "Incorporamos tecnologias e recursos que otimizam o consumo de energia, promovendo edificações mais eficientes e sustentáveis.",
        },
        {
          title: "Tecnologia Integrada",
          description:
            "Aplicamos soluções inteligentes para automatizar funções-chave do edifício, melhorando segurança, conforto e gestão de recursos.",
        },
        {
          title: "Mobilidade e Acessibilidade",
          description:
            "Projetamos percursos e acessos pensados para o conforto de todos, priorizando conectividade e bem-estar dos usuários.",
        },
        {
          title: "Atenção ao Contexto",
          description:
            "Respeitamos a paisagem construída e natural, gerando projetos que dialogam com seu entorno físico e cultural.",
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
