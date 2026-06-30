import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "es" | "en" | "pt";
export const locales: Locale[] = ["es", "en", "pt"];
export const defaultLocale: Locale = "es";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      estudio: "Estudio",
      casas: "Casas",
      proyectos: "Proyectos",
      sustentabilidad: "Sustentabilidad",
      servicios: "Nuestros Servicios",
      proceso: "Proceso de trabajo",
      otrosServicios: "Otros servicios",
      contacto: "Contacto",
      language: "Idioma",
      menuOpen: "Menú",
      menuClose: "Cerrar",
      menuToggleAriaOpen: "Abrir menú",
      menuToggleAriaClose: "Cerrar menú",
      logoAlt: "Logo Wilson",
      languageOptions: {
        es: "Español",
        en: "English",
        pt: "Português",
      },
    },
    common: {
      seeMore: "Ver más",
      readMore: "Leer más",
      scroll: "Seguir leyendo",
    },
    meta: {
      title: "Wilson Arquitectura",
      description: "Estudio de arquitectura contemporánea en Pilar, Buenos Aires. Residencial, comercial, dirección de obra e interiorismo.",
      ogTitle: "Wilson Arquitectura",
      ogDescription: "Diseñamos espacios que trascienden. Arquitectura, dirección de obra e interiorismo en Buenos Aires.",
      twitterCard: "summary",
    },
    errors: {
      pageNotFound: "Página no encontrada",
      pageNotFoundDescription: "Lo sentimos, no pudimos encontrar esta página.",
      goHome: "Volver al inicio",
      pageLoadFailed: "No se pudo cargar la página",
      pageLoadFailedDescription: "Hubo un problema al cargar el contenido. Intenta nuevamente o vuelve al inicio.",
      tryAgain: "Intentar de nuevo",
    },
    stats: {
      experience: "Años de Experiencia",
      projects: "Proyectos Realizados",
      builtArea: "m² Construidos",
    },
    hero: {
      tagline: "Estudio de Arquitectura · Pilar, Buenos Aires",
      description: "Creamos espacios exclusivos, donde el diseño, la funcionalidad y la calidad se integran en cada detalle. Transformamos ideas en obras que reflejan el estilo y las necesidades de cada cliente.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Solicitar Asesoramiento",
      scroll: "Desplazar",
      imageAlt: "Arquitectura contemporánea de hormigón",
    },
    history: {
      sectionLabel: "Nuestro Concepto",
      heading: "Proyecto, Dirección y Ejecución de obra",
      description:
        "Somos un estudio de arquitectura que cuenta con doce años de experiencia, nuestro enfoque es combinar diseño, planificación estratégico y gestión integral, con el compromiso claro de transformar ideas en espacios concretos funcionales de alto valor, con profesionalismo y visión.",
      description2:
        "Cada proyecto comienza con una conversación cercana con el cliente y un análisis profundo del contexto, para ofrecer soluciones constructivas elegantes y duraderas.",
    },
    projects: {
      sectionLabel: "Análisis y Visión",
      homeLabel: "Casas",
      originLabels: {
        casas: "Casas",
        proyectos: "Proyectos",
        ambos: "Casas y Proyectos",
      },
      heading: "Proyectos",
      sectionDescription:
        "Cada proyecto nace de una visión particular y de un profundo análisis de su contexto. Nos enfocamos en desarrollar propuestas que integren calidad espacial, innovación y funcionalidad, adaptándose a las características del entorno y a los objetivos específicos de cada desafío arquitectónico.",
      noResults: "No se encontraron resultados",
      filters: {
        todos: "Todos",
        viviendas: "Viviendas",
        comercial: "Comercial",
        reformas: "Reformas",
      },
      categoryFilterTitle: "Categoría",
      modal: {
        close: "Cerrar",
        location: "Ubicación",
        year: "Año",
        area: "Superficie",
        description: "Descripción",
      },
      pagination: {
        previous: "Anterior",
        next: "Siguiente",
      },
      originFilterTitle: "Origen",
      originFilterLabels: {
        all: "Todos",
        casas: "Casas",
        proyectos: "Proyectos",
      },
      atmosphereLabel: "Atmósfera",
      atmospheres: {
        todos: "Todos",
        anochecer: "Anochecer de verano",
        atardecer: "Atardecer de otoño",
        amanecer: "Amanecer de primavera",
      },
    },
    casas: {
      sectionLabel: "Hogar propio",
      heading: "Casas",
      description:
        "Cada casa es concebida como un espacio único, diseñado para reflejar la identidad, las necesidades y el estilo de vida de quienes la habitan. Buscamos crear ambientes funcionales, confortables y atemporales, donde la arquitectura se convierta en el escenario de experiencias y recuerdos duraderos.",
      filters: {
        todos: "Todos",
        viviendas: "Viviendas",
      },
    },
    services: {
      sectionLabel: "Capacidades",
      heading: "Nuestros Servicios",
      capabilitiesDescription:
        "Nuestros servicios incluyen proyecto arquitectónico, dirección de obra, interiorismo, remodelaciones y gestión integral, acompañando cada etapa con foco en calidad funcional y estética.",
      serviceItems: [
        {
          number: "01",
          title: "Proyecto Arquitectónico",
          description: "Desarrollamos el diseño conceptual y técnico con planos, maquetas y soluciones adaptadas a tu proyecto.",
        },
        {
          number: "02",
          title: "Dirección de Obra",
          description: "Coordinamos el proceso constructivo, supervisando calidad, tiempos y cumplimiento de normativa.",
        },
        {
          number: "03",
          title: "Construcción",
          description: "Gestionamos la obra con equipos técnicos y proveedores para entregar el proyecto según estándar profesional.",
        },
        {
          number: "04",
          title: "Interiorismo & Renders",
          description: "Diseñamos interiores funcionales y de estilo, complementados con renders para visualizar el resultado final.",
        },
        {
          number: "05",
          title: "Remodelaciones",
          description: "Renovamos espacios existentes para optimizar su uso, estética y confort con soluciones actuales.",
        },
        {
          number: "06",
          title: "Regularizaciones",
          description: "Tramitamos la documentación y los permisos necesarios para que tu obra cumpla con la normativa.",
        },
        {
          number: "07",
          title: "Cómputos y Presupuestos",
          description: "Preparamos mediciones, estimaciones y presupuestos claros para una planificación económica segura.",
        },
        {
          number: "08",
          title: "Gestión Integral de Obras",
          description: "Acompañamos todas las etapas del proyecto, desde la idea inicial hasta la entrega final.",
        },
      ],
      processLabel: "Metodología",
      processSteps: [
        { number: "01", title: "Reunión inicial", description: "Escuchamos la visión y los objetivos del cliente." },
        { number: "02", title: "Estudio de necesidades", description: "Analizamos el sitio, el programa y las restricciones." },
        { number: "03", title: "Diseño conceptual", description: "Definimos partido arquitectónico y materialidad." },
        { number: "04", title: "Proyecto ejecutivo", description: "Documentación técnica completa y planos de obra." },
        { number: "05", title: "Presupuesto", description: "Cómputos detallados y planificación de costos." },
        { number: "06", title: "Construcción", description: "Dirección de obra con control de calidad permanente." },
        { number: "07", title: "Entrega final", description: "Revisión, ajustes y acompañamiento post-obra." },
      ],
      processHeading: "Proceso de Trabajo",
      processDescription: "Nuestro proceso combina diálogo con el cliente, análisis de sitio y coordenadas técnicas para entregar proyectos claros, eficientes y listos para construirse.",
    },
    team: {
      sectionLabel: "12 años de trayectoria",
      heading: "El Estudio",
      homeDescription:
        "Nuestra trayectoria está guiada por la pasión de crear lugares que trasciendan en el tiempo. Diseñamos espacios únicos que reflejan una visión de futuro y se transforman en el escenario de historias memorables. Unimos visión, creatividad y precisión para crear espacios que inspiran, perduran y mejoran la experiencia de quienes los habitan.",
      imageAlt: "Equipo Wilson Arquitectura",
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
        typePlaceholder: "Vivienda, local, reforma…",
        message: "Mensaje",
      },
      sendButton: "Enviar Consulta",
      mailtoSubject: "Consulta web —",
      whatsappButton: "Contactanos por WhatsApp",
      sendEmailAria: "Enviar correo",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      social: "Redes",
      logoAlt: "Logo Wilson",
      description: "Estudio de arquitectura contemporánea. Diseño, dirección y construcción de obras de alto valor.",
      designedFor: "Diseñado para la excelencia",
      copyright: "© {year} Wilson Arquitectura",
      location: "Ubicación",
      email: "Email",
      phone: "Teléfono",
      instagram: "Instagram",
      facebook: "Facebook",
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
      facebookLabel: "Facebook",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      brandName: "Wilson Arquitectura",
      locationTitle: "Ubicación de Wilson Arquitectura",
    },
    sustainability: {
      sectionLabel: "Cuidar el Entorno",
      heading: "Sustentabilidad",
      description:
        "Creemos que el verdadero legado de la arquitectura se refleja en el impacto positivo que genera en las personas y en su entorno. Por eso diseñamos espacios eficientes, funcionales y sostenibles, donde la innovación y el respeto por los recursos forman parte de cada decisión. Cada proyecto es concebido para mejorar la calidad de vida, optimizar el uso de la energía y crear soluciones duraderas que respondan a las necesidades actuales sin comprometer el futuro.",
      imageAlt1: "Sustentabilidad 1",
      imageAlt2: "Sustentabilidad 2",
      imageAlt3: "Sustentabilidad 3",
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
      otrosServicios: "Other Services",
      contacto: "Contact",
      language: "Language",
      menuOpen: "Menu",
      menuClose: "Close",
      menuToggleAriaOpen: "Open menu",
      menuToggleAriaClose: "Close menu",
      logoAlt: "Wilson logo",
      languageOptions: {
        es: "Español",
        en: "English",
        pt: "Português",
      },
    },
    common: {
      seeMore: "See more",
      readMore: "Read more",
      scroll: "Continue reading",
    },
    meta: {
      title: "Wilson Architecture",
      description: "Contemporary architecture studio in Pilar, Buenos Aires. Residential, commercial, construction supervision and interior design.",
      ogTitle: "Wilson Architecture",
      ogDescription: "We design spaces that transcend. Architecture, construction supervision and interior design in Buenos Aires.",
      twitterCard: "summary",
    },
    errors: {
      pageNotFound: "Page not found",
      pageNotFoundDescription: "Sorry, we couldn't find that page.",
      goHome: "Back to home",
      pageLoadFailed: "The page could not be loaded",
      pageLoadFailedDescription: "There was a problem loading the content. Please try again or go back home.",
      tryAgain: "Try again",
    },
    stats: {
      experience: "Years of Experience",
      projects: "Projects Completed",
      builtArea: "Built Area",
    },
    hero: {
      tagline: "Architecture Studio · Pilar, Buenos Aires",
      description:
        "Project management, construction supervision and execution. We design unique spaces with exclusivity in every detail. We turn your ideas and dreams into reality.",
      ctaProjects: "View Projects",
      ctaContact: "Request Consultation",
      scroll: "Scroll",
      imageAlt: "Contemporary concrete architecture",
    },
    history: {
      sectionLabel: "Our Concept",
      heading: "Project, direction and execution",
      description:
        "We are an architecture studio with twelve years of experience, focused on combining design, planning, strategic management and construction with a clear commitment to turning ideas into high-value functional spaces.",
      description2:
        "Each project begins with a close conversation with the client and a thorough reading of the context, to propose elegant, lasting constructive solutions.",
    },
    projects: {
      sectionLabel: "Featured Works",
      homeLabel: "Houses & Projects",
      originLabels: {
        casas: "Houses",
        proyectos: "Projects",
        ambos: "Houses & Projects",
      },
      noResults: "No results found",
      originFilterLabels: {
        all: "All",
        casas: "Houses",
        proyectos: "Projects",
      },
      atmosphereLabel: "Atmosphere",
      atmospheres: {
        todos: "All",
        anochecer: "Summer dusk",
        atardecer: "Autumn sunset",
        amanecer: "Spring sunrise",
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
      categoryFilterTitle: "Category",
      originFilterTitle: "Origin",
      modal: {
        close: "Close",
        location: "Location",
        year: "Year",
        area: "Area",
        description: "Description",
      },
      pagination: {
        previous: "Previous",
        next: "Next",
      },
    },
    casas: {
      sectionLabel: "Residential Homes",
      heading: "Houses",
      description:
        "Each house is conceived as a unique space designed to reflect the identity, needs and lifestyle of those who inhabit it. We seek to create functional, comfortable and timeless environments, where architecture becomes the setting for lasting experiences and memories.",
      filters: {
        todos: "All",
        viviendas: "Residential",
      },
    },
    services: {
      sectionLabel: "Capabilities",
      heading: "Our Services",
      capabilitiesDescription:
        "Our services include architectural design, construction supervision, interior design, renovations and full project management, supporting every stage with a focus on functional quality and aesthetics.",
      serviceItems: [
        {
          number: "01",
          title: "Architectural Design",
          description: "We develop conceptual and technical design with plans, models and tailored solutions for your project.",
        },
        {
          number: "02",
          title: "Construction Supervision",
          description: "We coordinate construction, supervising quality, schedules and regulatory compliance.",
        },
        {
          number: "03",
          title: "Construction",
          description: "We manage the build with technical teams and suppliers to deliver the project professionally.",
        },
        {
          number: "04",
          title: "Interior Design & Renders",
          description: "We design functional, stylish interiors and provide renders to visualize the final result.",
        },
        {
          number: "05",
          title: "Renovations",
          description: "We renew existing spaces to optimize use, aesthetics and comfort with modern solutions.",
        },
        {
          number: "06",
          title: "Permits & Legalization",
          description: "We handle documentation and permits so your project meets all regulations.",
        },
        {
          number: "07",
          title: "Estimating & Budgeting",
          description: "We prepare measurements, estimates and budgets for safe economic planning.",
        },
        {
          number: "08",
          title: "Full Project Management",
          description: "We support every stage of the project, from initial idea to final delivery.",
        },
      ],
      processLabel: "Methodology",
      processSteps: [
        { number: "01", title: "Initial meeting", description: "We listen to the client's vision and objectives." },
        { number: "02", title: "Needs study", description: "We analyze the site, program and constraints." },
        { number: "03", title: "Concept design", description: "We define the architectural approach and materiality." },
        { number: "04", title: "Executive design", description: "Complete technical documentation and construction plans." },
        { number: "05", title: "Budget", description: "Detailed quantities and cost planning." },
        { number: "06", title: "Construction", description: "Construction management with permanent quality control." },
        { number: "07", title: "Final delivery", description: "Review, adjustments and post-project support." },
      ],
      processHeading: "Work Process",
      processDescription:
        "The work process shows how we move from the initial idea to final delivery, with clear stages of analysis, design, budgeting and construction to ensure comprehensive results.",
    },
    team: {
      sectionLabel: "Leadership",
      heading: "The Studio",
      homeDescription:
        "Our journey is guided by a passion for creating places that transcend time. We design unique spaces that reflect a future vision and become the setting for memorable stories. We combine vision, creativity and precision to create spaces that inspire, endure and enhance the experience of those who inhabit them.",
      imageAlt: "Wilson Architecture Team",
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
      sectionLabel: "Contact",
      heading: "Let's talk about your idea",
      thankYou: "Thank you for your inquiry.",
      sentMessage: "Your email client will open to complete the message.",
      fields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        type: "Project type",
        typePlaceholder: "Residential, commercial, renovation…",
        message: "Message",
      },
      sendButton: "Send Inquiry",
      mailtoSubject: "Web inquiry —",
      whatsappButton: "Contact us by WhatsApp",
      sendEmailAria: "Send email",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      social: "Social",
      logoAlt: "Wilson logo",
      description: "Contemporary architecture studio. Design, management and construction of high-value projects.",
      designedFor: "Designed for excellence",
      copyright: "© {year} Wilson Arquitectura",
      location: "Location",
      email: "Email",
      phone: "Phone",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    map: {
      sectionLabel: "Location",
      heading: "Visit the studio",
      description:
        "We work by appointment in Buenos Aires, Argentina. We schedule site visits and project meetings on demand.",
      howToGetThere: "How to get there",
      emailLabel: "Email",
      telLabel: "Tel",
      addressLabel: "Address",
      facebookLabel: "Facebook",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      brandName: "Wilson Arquitectura",
      locationTitle: "Wilson Arquitectura location",
    },
    sustainability: {
      sectionLabel: "Sustainability",
      heading: "Sustainability",
      description:
        "We believe that the true legacy of architecture is reflected in the positive impact it has on people and their surroundings. That is why we design efficient, functional, and sustainable spaces, where innovation and respect for resources are part of every decision. Each project is conceived to improve quality of life, optimize energy use, and create lasting solutions that meet today’s needs without compromising the future.",
      imageAlt1: "Sustainability 1",
      imageAlt2: "Sustainability 2",
      imageAlt3: "Sustainability 3",
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
      home: "Início",
      estudio: "Estúdio",
      casas: "Casas",
      proyectos: "Projetos",
      sustentabilidad: "Sustentabilidade",
      servicios: "Nossos Serviços",
      proceso: "Processo de Trabalho",
      otrosServicios: "Outros serviços",
      contacto: "Contato",
      language: "Idioma",
      menuOpen: "Menu",
      menuClose: "Fechar",
      menuToggleAriaOpen: "Abrir menu",
      menuToggleAriaClose: "Fechar menu",
      logoAlt: "Logo Wilson",
      languageOptions: {
        es: "Español",
        en: "English",
        pt: "Português",
      },
    },
    common: {
      seeMore: "Ver mais",
      readMore: "Ler mais",
      scroll: "Continuar lendo",
    },
    meta: {
      title: "Wilson Arquitetura",
      description: "Estúdio de arquitetura contemporânea em Pilar, Buenos Aires. Residencial, comercial, direção de obra e design de interiores.",
      ogTitle: "Wilson Arquitetura",
      ogDescription: "Projetamos espaços que transcendem. Arquitetura, direção de obra e design de interiores em Buenos Aires.",
      twitterCard: "summary",
    },
    errors: {
      pageNotFound: "Página não encontrada",
      pageNotFoundDescription: "Desculpe, não conseguimos encontrar esta página.",
      goHome: "Voltar ao início",
      pageLoadFailed: "Não foi possível carregar a página",
      pageLoadFailedDescription: "Ocorreu um problema ao carregar o conteúdo. Tente novamente ou volte ao início.",
      tryAgain: "Tentar novamente",
    },
    stats: {
      experience: "Anos de Experiência",
      projects: "Projetos Realizados",
      builtArea: "Área Construída",
    },
    hero: {
      tagline: "Estúdio de Arquitetura · Pilar, Buenos Aires",
      description:
        "Projeto, direção de obra e execução. Projetamos espaços únicos com exclusividade em cada detalhe. Transformamos suas ideias e sonhos em realidade.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Solicitar Consultoria",
      scroll: "Rolar",
      imageAlt: "Arquitetura contemporânea em concreto",
    },
    history: {
      sectionLabel: "Nosso Conceito",
      heading: "Projeto, direção e execução",
      description:
        "Somos um estúdio de arquitetura com doze anos de experiência, focado em combinar design, planejamento, gestão estratégica e construção com um compromisso claro de transformar ideias em espaços funcionais de alto valor.",
      description2:
        "Cada projeto começa com uma conversa próxima com o cliente e uma leitura cuidadosa do contexto, para propor soluções construtivas elegantes e duradouras.",
    },
    projects: {
      sectionLabel: "Obras em Destaque",
      homeLabel: "Casas e Projetos",
      originLabels: {
        casas: "Casas",
        proyectos: "Projetos",
        ambos: "Casas e Projetos",
      },
      noResults: "Nenhum resultado encontrado",
      originFilterLabels: {
        all: "Todos",
        casas: "Casas",
        proyectos: "Projetos",
      },
      atmosphereLabel: "Atmosfera",
      atmospheres: {
        todos: "Todos",
        anochecer: "Anoitecer de verão",
        atardecer: "Pôr do sol de outono",
        amanecer: "Amanhecer de primavera",
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
      categoryFilterTitle: "Categoria",
      originFilterTitle: "Origem",
      modal: {
        close: "Fechar",
        location: "Localização",
        year: "Ano",
        area: "Área",
        description: "Descrição",
      },
      pagination: {
        previous: "Anterior",
        next: "Próximo",
      },
    },
    casas: {
      sectionLabel: "Lares",
      heading: "Casas",
      description:
        "Cada casa é concebida como um espaço único, projetado para refletir a identidade, as necessidades e o estilo de vida de quem a habita. Buscamos criar ambientes funcionais, confortáveis e atemporais, onde a arquitetura se torna o cenário de experiências e memórias duradouras.",
      filters: {
        todos: "Todos",
        viviendas: "Residencial",
      },
    },
    services: {
      sectionLabel: "Capacidades",
      heading: "Nossos Serviços",
      capabilitiesDescription:
        "Nossos serviços incluem projeto arquitetônico, direção de obra, design de interiores, reformas e gestão completa de projetos, acompanhando cada etapa com foco em qualidade funcional e estética.",
      serviceItems: [
        {
          number: "01",
          title: "Projeto Arquitetônico",
          description: "Desenvolvemos o projeto conceitual e técnico com plantas, maquetes e soluções adaptadas ao seu projeto.",
        },
        {
          number: "02",
          title: "Direção de Obra",
          description: "Coordenamos o processo construtivo, supervisionando qualidade, prazos e conformidade normativa.",
        },
        {
          number: "03",
          title: "Construção",
          description: "Gerenciamos a obra com equipes técnicas e fornecedores para entregar o projeto com padrão profissional.",
        },
        {
          number: "04",
          title: "Design de Interiores & Renders",
          description: "Desenhamos interiores funcionais e de estilo, complementados com renders para visualizar o resultado final.",
        },
        {
          number: "05",
          title: "Reformas",
          description: "Renovamos espaços existentes para otimizar uso, estética e conforto com soluções atuais.",
        },
        {
          number: "06",
          title: "Regularizações",
          description: "Tramitamos a documentação e as licenças necessárias para que sua obra cumpra a norma.",
        },
        {
          number: "07",
          title: "Orçamentos e Cálculos",
          description: "Preparamos medições, estimativas e orçamentos claros para um planejamento econômico seguro.",
        },
        {
          number: "08",
          title: "Gestão Integral de Obras",
          description: "Acompanhamos todas as etapas do projeto, da ideia inicial à entrega final.",
        },
      ],
      processLabel: "Metodologia",
      processSteps: [
        { number: "01", title: "Reunião inicial", description: "Ouvimos a visão e os objetivos do cliente." },
        { number: "02", title: "Estudo de necessidades", description: "Analisamos o local, o programa e as restrições." },
        { number: "03", title: "Projeto conceitual", description: "Definimos o partido arquitetônico e a materialidade." },
        { number: "04", title: "Projeto executivo", description: "Documentação técnica completa e plantas de obra." },
        { number: "05", title: "Orçamento", description: "Cálculos detalhados e planejamento de custos." },
        { number: "06", title: "Construção", description: "Direção de obra com controle de qualidade permanente." },
        { number: "07", title: "Entrega final", description: "Revisão, ajustes e acompanhamento pós-obra." },
      ],
      processHeading: "Processo de Trabalho",
      processDescription:
        "O processo de trabalho mostra como avançamos da ideia inicial até a entrega final, com etapas claras de análise, projeto, orçamento e construção para garantir resultados integrados.",
    },
    team: {
      sectionLabel: "Liderança",
      heading: "O Estúdio",
      homeDescription:
        "Nossa trajetória é guiada pela paixão de criar lugares que transcendem o tempo. Projetamos espaços únicos que refletem uma visão de futuro e se tornam o cenário de histórias memoráveis. Unimos visão, criatividade e precisão para criar espaços que inspiram, perduram e melhoram a experiência de quem os habita.",
      imageAlt: "Equipe Wilson Arquitetura",
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
      sectionLabel: "Contato",
      heading: "Vamos falar sobre sua ideia",
      thankYou: "Obrigado pelo seu contato.",
      sentMessage: "Seu cliente de e-mail será aberto para confirmar o envio.",
      fields: {
        name: "Nome completo",
        email: "Email",
        phone: "Telefone",
        type: "Tipo de projeto",
        typePlaceholder: "Residencial, comercial, reforma…",
        message: "Mensagem",
      },
      sendButton: "Enviar Solicitação",
      mailtoSubject: "Consulta web —",
      whatsappButton: "Contato via WhatsApp",
      sendEmailAria: "Enviar e-mail",
    },
    footer: {
      navigation: "Navegação",
      contact: "Contato",
      social: "Redes",
      logoAlt: "Logo Wilson",
      description: "Estúdio de arquitetura contemporânea. Design, direção e construção de obras de alto valor.",
      designedFor: "Projetado para a excelência",
      copyright: "© {year} Wilson Arquitectura",
      location: "Localização",
      email: "Email",
      phone: "Telefone",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    map: {
      sectionLabel: "Localização",
      heading: "Visite o estúdio",
      description:
        "Atendemos com hora marcada em Buenos Aires, Argentina. Agendamos visitas e reuniões de projeto sob medida.",
      howToGetThere: "Como chegar",
      emailLabel: "Email",
      telLabel: "Tel",
      addressLabel: "Endereço",
      facebookLabel: "Facebook",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      brandName: "Wilson Arquitectura",
      locationTitle: "Localização da Wilson Arquitectura",
    },
    sustainability: {
      sectionLabel: "Sustentabilidade",
      heading: "Sustentabilidade",
      description:
        "Acreditamos que o verdadeiro legado da arquitetura se reflete no impacto positivo que gera nas pessoas e em seu entorno. Por isso, projetamos espaços eficientes, funcionais e sustentáveis, onde a inovação e o respeito pelos recursos fazem parte de cada decisão. Cada projeto é concebido para melhorar a qualidade de vida, otimizar o uso de energia e criar soluções duradouras que atendam às necessidades atuais sem comprometer o futuro.",
      imageAlt1: "Sustentabilidade 1",
      imageAlt2: "Sustentabilidade 2",
      imageAlt3: "Sustentabilidade 3",      points: [
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

function mergeTranslation(base: unknown, override: unknown): unknown {
  if (Array.isArray(base) || Array.isArray(override)) {
    return override ?? base;
  }

  if (typeof base !== "object" || base === null || typeof override !== "object" || override === null) {
    return override ?? base;
  }

  const merged = { ...base } as Record<string, unknown>;

  for (const key of Object.keys(override as Record<string, unknown>)) {
    merged[key] = mergeTranslation(
      (base as Record<string, unknown>)[key],
      (override as Record<string, unknown>)[key],
    );
  }

  return merged;
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Locale>(defaultLocale);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const preferred = getPreferredLocale();
    if (preferred !== language) {
      setLanguage(preferred);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("wilson_language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = mergeTranslation(translations[defaultLocale], translations[language]) as TranslationValue;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
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
