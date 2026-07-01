import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";
import zAmanecer from "@/assets/Proyectos/Z/Amanecer de primavera.png";
import zAmanecerCF from "@/assets/Proyectos/Z/Amanecer de primavera_CF.png";
import zAmanecerExterior from "@/assets/Proyectos/Z/Amanecer de Primavera_Exterior L.png";
import zAnochecerCF from "@/assets/Proyectos/Z/Anochecer de verano_CF.png";
import zAnochecerFrente from "@/assets/Proyectos/Z/Anochecer de verano_Frente.png";
import zAnochecerExterior from "@/assets/Proyectos/Z/Anochecer de vernano_Exterior L.png";
import zAtardecer from "@/assets/Proyectos/Z/Atardecer de otoño.png";
import zAtardecerJpg from "@/assets/Proyectos/Z/Atardecer de otoño.jpeg";
import zAtardecerExterior from "@/assets/Proyectos/Z/Atardecer de otoño_ Exterior.png";
import zInteriorCocina from "@/assets/Proyectos/Z/Interior_Cocina.png";
import zInteriorComedor from "@/assets/Proyectos/Z/Interior_Comedor.png";
import zInteriorLivingComedor from "@/assets/Proyectos/Z/Interior_Living_Comedor.png";
import zInteriorLiving from "@/assets/Proyectos/Z/Interior_Living.png";
import zInteriorLiving02 from "@/assets/Proyectos/Z/Interior_Living02.png";
import zInteriorVistaPiso from "@/assets/Proyectos/Z/Interior_Vista entre piso.png";
import cAmanecer from "@/assets/Proyectos/CyG/Amanecer de primavera.png";
import cAnochecer from "@/assets/Proyectos/CyG/Anochecer de verano.png";
import cAnochecerBack from "@/assets/Proyectos/CyG/Anochecer de verano_Contrafrente.png";
import cAtardecer from "@/assets/Proyectos/CyG/Atardecer de otoño.png";
import cAtardecerFrente from "@/assets/Proyectos/CyG/Frente_Atardecer de otoño.png";
import cInteriorComedor from "@/assets/Proyectos/CyG/Interior_Comedor.png";
import cInteriorLiving from "@/assets/Proyectos/CyG/Interior_Living.png";
import cInteriorSuite from "@/assets/Proyectos/CyG/Interior_Suite.png";
import proyectoCarlaContrafachadaAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Contrafachada_Amanecer de Primavera.png";
import proyectoCarlaContrafachadaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Contrafachada_Anochecer de Verano.png";
import proyectoCarlaContrafachadaAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-Contrafachada_Atardecer de Otoño.jpeg";
import proyectoCarlaContrafachadaLateralAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-ContrafachadaLateral_Amanecer de Primavera.png";
import proyectoCarlaExtHallAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-Ext.Hall_Atardecer de Otoño.png";
import proyectoCarlaExteriorAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior_Amanecer de Primavera.png";
import proyectoCarlaExteriorAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior_Atardecer de otoño.png";
import proyectoCarlaExteriorAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior-Anochecer de Verano.png";
import proyectoCarlaExteriorContrafachadaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorContraf._Anochecer de Verano.png";
import proyectoCarlaExteriorHallAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorHall_Anochecer de verano.png";
import proyectoCarlaExteriorLateralAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Amanecer de Primavera.png";
import proyectoCarlaExteriorLateralAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Anochecer de Varano.png";
import proyectoCarlaExteriorLateralAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Atardecer de otoño.png";
import proyectoCarlaHallAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Hall_Amanecer de Primavera.png";
import proyectoCarlaInterior from "@/assets/Proyectos/Carla/ProyectoCarla-Interior.png";
import proyectoCarlaInterior02 from "@/assets/Proyectos/Carla/ProyectoCarla-Interior02.png";
import proyectoCarlaParrillaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Parrilla_Anochecer de Verano.png";
import { useTranslation } from "@/lib/i18n";
import { casaProjects } from "@/components/project-data";

type Category = "todos" | "viviendas" | "comercial" | "reformas";

type AtmosphereType = "todos" | "anochecer" | "atardecer" | "amanecer";

type SectionOrigin = "casas" | "proyectos";

interface LocalizedString {
  es: string;
  en: string;
  pt: string;
}

interface Project {
  id: string;
  title: LocalizedString;
  meta: LocalizedString;
  category: Exclude<Category, "todos">;
  image: string;
  location: string;
  year: string;
  area: string;
  description: LocalizedString;
  gallery?: Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos"> }>;
  origin?: "casas" | "proyectos";
}

const uniqueGalleryBySrc = (
  gallery: Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos"> }>
) =>
  gallery.reduce(
    (acc, item) => {
      if (!acc.some((existing) => existing.src === item.src)) {
        acc.push(item);
      }
      return acc;
    },
    [] as Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos"> }>
  );

export const projects: Project[] = [
  {
    id: "proyecto-cyg",
    title: {
      es: "Proyecto CyG",
      en: "Proyecto CyG",
      pt: "Proyecto CyG",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2025",
      en: "Single-family home — 2025",
      pt: "Casa unifamiliar — 2025",
    },
    category: "viviendas",
    image: cAtardecer,
    location: "Pilar, Buenos Aires",
    year: "2025",
    area: "239.21 m²",
    description: {
      es: "Estética, precisión y carácter en cada línea. Una propuesta pensada para quienes eligen calidad sin concesiones.",
      en: "Aesthetic precision and character in every line. A proposal created for those who value uncompromising quality.",
      pt: "Estética, precisão e caráter em cada linha. Uma proposta pensada para quem valoriza qualidade sem concessões.",
    },
    gallery: [
      {
        src: cAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: cAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: cAnochecerBack,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: cAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: cAtardecerFrente,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "amanecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "filter for all atmospheres",
          pt: "filtro para todas as atmosferas",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "anochecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "filter for all atmospheres",
          pt: "filtro para todas as atmosferas",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "atardecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "filter for all atmospheres",
          pt: "filtro para todas as atmosferas",
        },
      },
      {
        src: cInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: cInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: cInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: cInteriorSuite,
        atmosphere: "amanecer",
        label: {
          es: "interior suite",
          en: "suite interior",
          pt: "interior da suíte",
        },
      },
      {
        src: cInteriorSuite,
        atmosphere: "anochecer",
        label: {
          es: "interior suite",
          en: "suite interior",
          pt: "interior da suíte",
        },
      },
      {
        src: cInteriorSuite,
        atmosphere: "atardecer",
        label: {
          es: "interior suite",
          en: "suite interior",
          pt: "interior da suíte",
        },
      },
    ],
  },
  {
    id: "proyecto-carla",
    title: {
      es: "Proyecto Carla",
      en: "Carla Project",
      pt: "Projeto Carla",
    },
    meta: {
      es: "Comercial - 2026",
      en: "Commercial — 2026",
      pt: "Comercial — 2026",
    },
    category: "comercial",
    image: proyectoCarlaExteriorAnochecer,
    location: "Manzone, Pilar, Buenos Aires",
    year: "2026",
    area: "200 m²",
    description: {
      es: "El local de eventos se define mediante un gran marco volumétrico que jerarquiza la fachada y refuerza su carácter contemporáneo. Las celosías metálicas, los planos neutros y la vegetación construyen una imagen sobria e imponente. El acceso conecta directamente con un salón de doble altura y una terraza exterior como expansión del evento. La iluminación cálida y la materialidad neutra permiten un espacio versátil, funcional y adaptable de día y de noche.",
      en: "The event venue is defined by a large volumetric frame that hierarchizes the façade and reinforces its contemporary character. Metallic lattices, neutral planes, and greenery build a sober and imposing image. The entrance connects directly to a double-height hall and an exterior terrace as event expansion. Warm lighting and neutral materials create a versatile, functional space adaptable by day and night.",
      pt: "O local de eventos é definido por uma grande moldura volumétrica que hierarquiza a fachada e reforça seu caráter contemporâneo. As brises metálicas, os planos neutros e a vegetação constroem uma imagem sóbria e imponente. O acesso conecta diretamente a um salão de pé-direito duplo e a um terraço exterior como expansão do evento. A iluminação quente e a materialidade neutra permitem um espaço versátil, funcional e adaptável de dia e de noite.",
    },
    gallery: [
      {
        src: proyectoCarlaExteriorAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: proyectoCarlaExteriorAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: proyectoCarlaExteriorAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaContrafachadaAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: proyectoCarlaContrafachadaAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaContrafachadaAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de Otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: proyectoCarlaContrafachadaLateralAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: proyectoCarlaExtHallAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de Otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: proyectoCarlaExteriorContrafachadaAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaExteriorHallAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaExteriorLateralAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: proyectoCarlaExteriorLateralAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Varano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaExteriorLateralAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: proyectoCarlaHallAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: proyectoCarlaInterior,
        atmosphere: "amanecer",
        label: {
          es: "sin filtro",
          en: "no filter",
          pt: "sem filtro",
        },
      },
      {
        src: proyectoCarlaInterior02,
        atmosphere: "atardecer",
        label: {
          es: "sin filtro",
          en: "no filter",
          pt: "sem filtro",
        },
      },
      {
        src: proyectoCarlaParrillaAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
    ],
  },
  {
    id: "proyecto-z",
    title: {
      es: "Proyecto Z",
      en: "Proyecto Z",
      pt: "Proyecto Z",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2026",
      en: "Single-family home — 2026",
      pt: "Casa unifamiliar — 2026",
    },
    category: "viviendas",
    image: zAnochecerFrente,
    location: "Pilar, Buenos Aires",
    year: "2026",
    area: "187.82 m²",
    description: {
      es: "Proyecto de estilo minimalista, donde la pureza volumétrica y la atención al detalle definen una imagen elegante, funcional y atemporal.",
      en: "A minimalist architectural proposal where volumetric purity and attention to detail define an elegant, functional, and timeless image.",
      pt: "Uma proposta arquitetônica minimalista em que a pureza volumétrica e a atenção aos detalhes definem uma imagem elegante, funcional e atemporal.",
    },
    gallery: [
      {
        src: zAmanecerCF,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zAmanecerExterior,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zAnochecerCF,
        atmosphere: "anochecer",
        label: {
          es: "filtro de anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: zAnochecerFrente,
        atmosphere: "anochecer",
        label: {
          es: "filtro de anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: zAnochecerExterior,
        atmosphere: "anochecer",
        label: {
          es: "filtro de anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: zAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zAtardecerJpg,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zAtardecerExterior,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zInteriorCocina,
        atmosphere: "amanecer",
        label: {
          es: "interior de cocina",
          en: "kitchen interior",
          pt: "interior da cozinha",
        },
      },
      {
        src: zInteriorCocina,
        atmosphere: "anochecer",
        label: {
          es: "interior de cocina",
          en: "kitchen interior",
          pt: "interior da cozinha",
        },
      },
      {
        src: zInteriorCocina,
        atmosphere: "atardecer",
        label: {
          es: "interior de cocina",
          en: "kitchen interior",
          pt: "interior da cozinha",
        },
      },
      {
        src: zInteriorComedor,
        atmosphere: "amanecer",
        label: {
          es: "interior de comedor",
          en: "dining room interior",
          pt: "interior da sala de jantar",
        },
      },
      {
        src: zInteriorComedor,
        atmosphere: "anochecer",
        label: {
          es: "interior de comedor",
          en: "dining room interior",
          pt: "interior da sala de jantar",
        },
      },
      {
        src: zInteriorComedor,
        atmosphere: "atardecer",
        label: {
          es: "interior de comedor",
          en: "dining room interior",
          pt: "interior da sala de jantar",
        },
      },
      {
        src: zInteriorLivingComedor,
        atmosphere: "amanecer",
        label: {
          es: "interior living comedor",
          en: "living and dining interior",
          pt: "interior da sala de estar e jantar",
        },
      },
      {
        src: zInteriorLivingComedor,
        atmosphere: "anochecer",
        label: {
          es: "interior living comedor",
          en: "living and dining interior",
          pt: "interior da sala de estar e jantar",
        },
      },
      {
        src: zInteriorLivingComedor,
        atmosphere: "atardecer",
        label: {
          es: "interior living comedor",
          en: "living and dining interior",
          pt: "interior da sala de estar e jantar",
        },
      },
      {
        src: zInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: zInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: zInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
        },
      },
      {
        src: zInteriorLiving02,
        atmosphere: "amanecer",
        label: {
          es: "interior living 02",
          en: "living room interior 02",
          pt: "interior da sala de estar 02",
        },
      },
      {
        src: zInteriorLiving02,
        atmosphere: "anochecer",
        label: {
          es: "interior living 02",
          en: "living room interior 02",
          pt: "interior da sala de estar 02",
        },
      },
      {
        src: zInteriorLiving02,
        atmosphere: "atardecer",
        label: {
          es: "interior living 02",
          en: "living room interior 02",
          pt: "interior da sala de estar 02",
        },
      },
      {
        src: zInteriorVistaPiso,
        atmosphere: "amanecer",
        label: {
          es: "vista entre piso",
          en: "between-floor view",
          pt: "vista entre os pisos",
        },
      },
      {
        src: zInteriorVistaPiso,
        atmosphere: "anochecer",
        label: {
          es: "vista entre piso",
          en: "between-floor view",
          pt: "vista entre os pisos",
        },
      },
      {
        src: zInteriorVistaPiso,
        atmosphere: "atardecer",
        label: {
          es: "vista entre piso",
          en: "between-floor view",
          pt: "vista entre os pisos",
        },
      },
    ],
  },
];

import { SectionMode } from "@/components/SectionMode";

export function Projects({ mode = "home", section }: { mode?: SectionMode; section?: SectionOrigin }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [originFilter, setOriginFilter] = useState<"all" | "casas" | "proyectos">("all");
  const [listAtmosphere, setListAtmosphere] = useState<AtmosphereType>("todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navChoiceOpen, setNavChoiceOpen] = useState(false);

  const updateOriginFilterFromHash = () => {
    if (typeof window === "undefined") return;
    if (mode !== "section" || section !== "proyectos") return;

    const hash = window.location.hash.replace("#", "");
    const [, queryString] = hash.split("?", 2);
    const params = new URLSearchParams(queryString ?? "");
    const type = params.get("type");

    if (type === "casas") {
      setOriginFilter("casas");
    } else if (type === "proyectos") {
      setOriginFilter("proyectos");
    } else if (type === "all" || type === "todos") {
      setOriginFilter("all");
    }
  };

  useEffect(() => {
    if (mode !== "section" || section !== "proyectos") return;
    setOriginFilter("all");
  }, [mode, section]);

  useEffect(() => {
    updateOriginFilterFromHash();
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      updateOriginFilterFromHash();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [mode, section]);

  const casaProjectsWithIds = casaProjects.map((project, index) => ({
    ...project,
    id: project.id ?? `casa-${index + 1}`,
  }));
  const casaIds = new Set(casaProjectsWithIds.map((project) => project.id));
  const combinedProjects: Project[] = [
    ...casaProjectsWithIds.map((project) => ({
      ...project,
      origin: project.origin ?? ("casas" as const),
      gallery: project.gallery?.map((item) => ({
        ...item,
        label: project.title,
      })),
    })),
    ...projects
      .filter((project) => !casaIds.has(project.id))
      .map((project) => ({ ...project, origin: "proyectos" as const })),
  ];

  const source = combinedProjects;
  const sectionId = mode === "section" && section ? section : "proyectos";
  const filteredByCategory =
    active === "todos" ? source : source.filter((p) => p.category === active);
  const visibleByOrigin =
    originFilter === "all"
      ? filteredByCategory
      : filteredByCategory.filter((p) => p.origin === originFilter);
  const visible =
    listAtmosphere === "todos"
      ? visibleByOrigin
      : visibleByOrigin.filter(
          (p) => p.gallery?.some((item) => item.atmosphere === listAtmosphere) ?? false
        );
  const selected = selectedId ? source.find((p) => p.id === selectedId) : null;
  const atmospheres: Array<{ key: AtmosphereType; label: string }> = [
    { key: "todos", label: t.projects.atmospheres.todos },
    { key: "anochecer", label: t.projects.atmospheres.anochecer },
    { key: "atardecer", label: t.projects.atmospheres.atardecer },
    { key: "amanecer", label: t.projects.atmospheres.amanecer },
  ];
  const categoryFilters: Array<{ key: Category; label: string }> = [
    { key: "todos", label: t.projects.filters.todos },
    { key: "viviendas", label: t.projects.filters.viviendas },
    { key: "comercial", label: t.projects.filters.comercial },
    { key: "reformas", label: t.projects.filters.reformas },
  ];
  const typeFilters: Array<{ key: "all" | "casas" | "proyectos"; label: string }> = [
    { key: "all", label: t.projects.originFilterLabels.all },
    { key: "casas", label: t.projects.originFilterLabels.casas },
    { key: "proyectos", label: t.projects.originFilterLabels.proyectos },
  ];

  return (
    <section id="proyectos" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
      <div id="casas" className="absolute -top-24" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2 md:mb-4 gap-6">
        <div>
          <span className="text-[15px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.projects.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">{t.projects.heading}</h2>
          {mode === "section" ? (
            <>
              <p className="mt-4 w-full max-w-none text-base leading-relaxed text-brand-gray">
                {t.projects.sectionDescription}
              </p>
              <p className="mt-4 w-full max-w-none text-base leading-relaxed text-brand-gray">
                {t.casas.description}
              </p>
            </>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray mb-4">
          {t.projects.categoryFilterTitle}
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold">
          {categoryFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-none border border-brand-light px-4 py-2 uppercase transition whitespace-nowrap ${
                active === f.key ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black hover:bg-brand-light"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray mb-4">
          {t.projects.typeFilterTitle}
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold">
          {typeFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setOriginFilter(f.key)}
              className={`rounded-none border border-brand-light px-4 py-2 uppercase transition whitespace-nowrap ${
                originFilter === f.key ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black hover:bg-brand-light"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-12">
        {visible.length === 0 ? (
          <div className="col-span-12 rounded-none border border-brand-light bg-brand-gray/5 p-8 text-center text-sm uppercase tracking-[0.3em] text-brand-gray">
            {t.projects.noResults}
          </div>
        ) : (
          visible.map((project) => (
            <article
              key={project.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
              onClick={() => setSelectedId(project.id)}
            >
            <div className="overflow-hidden mb-6 bg-brand-light aspect-4/3">
              <img
                src={project.image}
                alt={project.title[language]}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200 ease-out"
              />
            </div>
            <div className={`mb-3 inline-flex items-center rounded-none px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap ${
                    project.origin === "proyectos"
                      ? "bg-brand-gray/10 text-brand-gray"
                      : "bg-brand-black text-white"
                  }`}>
              {project.origin === "proyectos"
                ? t.projects.originLabels.proyectos
                : t.projects.originLabels.casas}
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title[language]}</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-2">{project.meta[language]}</p>
            <div className="flex flex-col items-start gap-2 mb-6">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{project.location}</div>
            </div>
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-black pb-1 whitespace-nowrap">
              {t.common.readMore}
            </button>
          </article>
          ))
        )}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          selectedAtmosphere={listAtmosphere}
          onClose={() => setSelectedId(null)}
        />
      )}
      {mode === "home" ? (
        <div className="mt-12 text-right">
          <button
            type="button"
            onClick={() => setNavChoiceOpen(true)}
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {t.common.seeMore}
          </button>
        </div>
      ) : null}

      {navChoiceOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/80 p-4"
          onClick={() => setNavChoiceOpen(false)}
        >
          <div
            className="w-full max-w-sm border border-border bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end mb-6">
              <button
                type="button"
                onClick={() => setNavChoiceOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-brand-gray transition hover:bg-brand-black hover:text-white whitespace-nowrap"
                aria-label={t.projects.modal.close}
              >
                <X className="h-4 w-4" />
                {t.projects.modal.close}
              </button>
            </div>
            <div className="grid gap-4">
              <a
                href="#proyectos?type=all"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#proyectos?type=all";
                  setNavChoiceOpen(false);
                }}
                className="block rounded-2xl border border-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-white transition-colors whitespace-nowrap"
              >
                {t.projects.originFilterLabels.all}
              </a>
              <a
                href="#proyectos?type=casas"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#proyectos?type=casas";
                  setNavChoiceOpen(false);
                }}
                className="block rounded-2xl border border-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-white transition-colors whitespace-nowrap"
              >
                {t.projects.originFilterLabels.casas}
              </a>
              <a
                href="#proyectos?type=proyectos"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#proyectos?type=proyectos";
                  setNavChoiceOpen(false);
                }}
                className="block rounded-2xl border border-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-white transition-colors whitespace-nowrap"
              >
                {t.projects.originFilterLabels.proyectos}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectModal({
  project,
  selectedAtmosphere,
  onClose,
}: {
  project: Project;
  selectedAtmosphere: AtmosphereType;
  onClose: () => void;
}) {
  const { t, language } = useTranslation();
  const [modalAtmosphere, setModalAtmosphere] = useState<AtmosphereType>("todos");
  const atmosphereButtons: Array<{ key: AtmosphereType; label: string }> = [
    { key: "todos", label: t.projects.atmospheres.todos },
    { key: "anochecer", label: t.projects.atmospheres.anochecer },
    { key: "atardecer", label: t.projects.atmospheres.atardecer },
    { key: "amanecer", label: t.projects.atmospheres.amanecer },
  ];
  const galleryItems = uniqueGalleryBySrc(
    project.gallery?.filter(
      (item) => modalAtmosphere === "todos" || item.atmosphere === modalAtmosphere
    ) ?? []
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const activeIndex = galleryItems.length > 0 ? activeSlide % galleryItems.length : 0;

  useEffect(() => {
    setModalAtmosphere(selectedAtmosphere);
  }, [selectedAtmosphere]);

  useEffect(() => {
    setActiveSlide(0);
  }, [modalAtmosphere, galleryItems.length]);

  const activeItem = galleryItems[activeIndex];

  return (
    <div
      className="fixed inset-0 z-80 bg-brand-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t.projects.modal.close}
          className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black whitespace-nowrap"
        >
          {t.projects.modal.close}
        </button>
        {galleryItems.length > 0 ? (
          <div className="w-full">
            <div className="overflow-hidden h-[360px] sm:h-[420px] bg-brand-light">
              <img
                src={activeItem.src}
                alt={activeItem.label[language]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-8 md:px-12 pt-4">
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-brand-black/70 text-white transition hover:bg-brand-black/90"
                  aria-label={t.projects.pagination.previous}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % galleryItems.length)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-brand-black/70 text-white transition hover:bg-brand-black/90"
                  aria-label={t.projects.pagination.next}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex flex-nowrap items-center justify-center gap-3 overflow-visible py-1">
                {atmosphereButtons
                  .filter((atm) => atm.key !== "todos")
                  .map((atm) => {
                    const colorClass =
                      atm.key === "anochecer"
                        ? "bg-brand-black text-white border-brand-black"
                        : atm.key === "atardecer"
                          ? "bg-[#d97706] text-white border-[#d97706]"
                          : "bg-[#facc15] text-brand-black border-[#facc15]";

                    const isActive = modalAtmosphere === atm.key;

                    return (
                      <button
                        key={atm.key}
                        type="button"
                        onClick={() => setModalAtmosphere(atm.key)}
                        title={atm.label}
                        aria-label={atm.label}
                        className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                          isActive ? "scale-105 shadow-sm ring-2 ring-brand-black ring-offset-2" : "hover:scale-105"
                        } ${colorClass}`}
                      >
                        {isActive ? (
                          <span className="text-[14px] font-bold leading-none">✓</span>
                        ) : null}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : null}
        <div className="p-8 md:p-12">
          <span className="text-[15px] uppercase tracking-[0.4em] text-brand-gray/60">
            {project.meta[language]}
          </span>
          <h3 className="font-serif text-3xl md:text-5xl mt-3 mb-8">{project.title[language]}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[10px] uppercase tracking-[0.3em] border-y border-border py-6 mb-8">
            <div>
              <p className="opacity-50 mb-2">{t.projects.modal.location}</p>
              <p className="font-semibold">{project.location}</p>
            </div>
            <div>
              <p className="opacity-50 mb-2">{t.projects.modal.year}</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="opacity-50 mb-2">{t.projects.modal.area}</p>
              <p className="font-semibold">{project.area}</p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-brand-gray">{project.description[language]}</p>
        </div>
      </div>
    </div>
  );
}


