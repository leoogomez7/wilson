import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";
import delLimoneroAtardecer from "@/assets/Casas/Del Limonero/Exterior_Atardecer de otoño.jpeg";
import delLimoneroAmanecer from "@/assets/Casas/Del Limonero/Exterior_Amanecer de primavera.jpeg";
import delLimoneroAnochecer from "@/assets/Casas/Del Limonero/Exterior_Anochecer de verano.jpeg";
import delLimoneroExteriorGaleria from "@/assets/Casas/Del Limonero/CasaDelLimonero-Exterior_Galería.png";
import delLimoneroDormitorio from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Dormitorio.png";
import delLimoneroLiving from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Living.png";
import delLimoneroOficina from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Oficina.png";
import casaCoffeeExteriorAmanecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Amanecer de primavera.png";
import casaCoffeeExteriorAnochecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Anochecer de verano..png";
import casaCoffeeExteriorAtardecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Atardecer de otoño..png";
import casaCoffeeExteriorContrafachada from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Contrafachada..png";
import casaCoffeeInteriorLiving from "@/assets/Casas/Coffee/CasaCoffee-Interior_Living..png";
import casaCoffeeInteriorSuite from "@/assets/Casas/Coffee/CasaCoffee-Interior_Suite..png";
import casaScottExteriorAmanecer from "@/assets/Casas/Scott/CasaScott-Exterior_Amanecer de primavera.png";
import casaScottExteriorAnochecer from "@/assets/Casas/Scott/CasaScott-Exterior_Anochecer de verano.png";
import casaScottExteriorAtardecer from "@/assets/Casas/Scott/CasaScott-Exterior_Atardecer de otoño.png";
import casaScottExteriorContrafachada from "@/assets/Casas/Scott/CasaScott-Exterior_Contrafachada.png";
import casaScottInteriorCocina from "@/assets/Casas/Scott/CasaScott-Interior_Cocina..png";
import casaScottInteriorLiving from "@/assets/Casas/Scott/CasaScott-Interior_Living.png";
import casaScottInteriorSuite from "@/assets/Casas/Scott/CasaScott-Interior_Suite..png";
import casaIntiContrafachadaAmanecer from "@/assets/Casas/Inti/CasaInti-Contrafachada_Amanecer de Primavera.png";
import casaIntiContrafachadaAnochecer from "@/assets/Casas/Inti/CasaInti-Contrafachada_Anochecer de Verano.png";
import casaIntiContrafachadaAtardecer from "@/assets/Casas/Inti/CasaInti-Contrafachada_Atardecer de Otoño.png";
import casaIntiExteriorAmanecer from "@/assets/Casas/Inti/CasaInti-Exterior_Amanecer de Primavera.png";
import casaIntiExteriorAnochecer from "@/assets/Casas/Inti/CasaInti-Exterior_Anochecer de Verano.png";
import casaIntiExteriorAtardecer from "@/assets/Casas/Inti/CasaInti-Exterior_Atardecer de Otoño.png";
import casaIntiInterior from "@/assets/Casas/Inti/CasaInti-Interior.png";
import casaIntiInteriorCocina from "@/assets/Casas/Inti/CasaInti-Interior_Cocina.png";
import casaIntiInteriorLiving from "@/assets/Casas/Inti/CasaInti-Interior_Living.png";
import casaIntiInteriorLiving02 from "@/assets/Casas/Inti/CasaInti-Interior_Living02.png";
import casaNavarroExteriorContrafrenteAmanecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorContrafrente_Amanecer de Primavera.png";
import casaNavarroExteriorContrafrenteAnochecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorContrafrente_Anochcer de Verano.png";
import casaNavarroExteriorContrafrenteAtardecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorContrafrente_Atardecer de otoño.png";
import casaNavarroExteriorGaleriaAmanecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorGalería_Amaanecer de Primavera.png";
import casaNavarroExteriorGaleriaAnochecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorGalería_Anochecer de verano.png";
import casaNavarroExteriorGaleriaAtardecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorGalería_Atardecer de Otoño.png";
import casaNavarroExteriorLateralAmanecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorLateral_Amanecer de Primavera.png";
import casaNavarroExteriorLateralAnochecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorLateral_Anochcer de Verano.png";
import casaNavarroExteriorLateralAtardecer from "@/assets/Casas/Navarro/CasaNavarro-ExteriorLateral_Atardecer de otoño.png";
import casaNavarroInteriorDormitorio from "@/assets/Casas/Navarro/CasaNavarro-Interior_Dormitorio.png";
import casaNavarroInteriorDormitorio02 from "@/assets/Casas/Navarro/CasaNavarro-Interior_Dormitorio02.png";
import casaNavarroInteriorLiving02 from "@/assets/Casas/Navarro/CasaNavarro-Interior_Living02.png";
import casaNavarroInteriorCocina from "@/assets/Casas/Navarro/CasaNavarro-InteriorCocina.png";
import casaNavarroInteriorLiving from "@/assets/Casas/Navarro/CasaNavarro-InteriorLiving.png";

type Category = "todos" | "viviendas";
type AtmosphereType = "todos" | "anochecer" | "atardecer" | "amanecer";

type LocalizedString = {
  es: string;
  en: string;
  pt: string;
};

interface CasaGalleryItem {
  src: string;
  label: LocalizedString;
  atmosphere: Exclude<AtmosphereType, "todos">;
  isFeatured?: boolean;
}

interface CasaProject {
  id?: string;
  title: LocalizedString;
  meta: LocalizedString;
  description: LocalizedString;
  category: "viviendas";
  image: string;
  location: string;
  year: string;
  area: string;
  offset?: string;
  origin?: "casas" | "ambos";
  gallery?: CasaGalleryItem[];
}

const uniqueGalleryBySrc = (gallery: CasaGalleryItem[]) =>
  gallery.reduce(
    (acc, item) => {
      if (!acc.some((existing) => existing.src === item.src)) {
        acc.push(item);
      }
      return acc;
    },
    [] as CasaGalleryItem[]
  );

export const casaProjects: CasaProject[] = [
  {
    id: "casa-del-limonero",
    title: {
      es: "Casa Del Limonero",
      en: "Limonero House",
      pt: "Casa do Limonero",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2021",
      en: "Single-family home — 2021",
      pt: "Casa unifamiliar — 2021",
    },
    image: delLimoneroAnochecer,
    location: "Pte. Derqui, Pilar, Buenos Aires.",
    year: "2021",
    area: "280 m²",
    description: {
      es: "Geometría, elegancia y presencia. Una propuesta de estilo industrial donde los volúmenes puros y la iluminación arquitectónica crean una identidad sólida y atemporal.",
      en: "Geometry, elegance, and presence. An industrial-style proposal where pure volumes and architectural lighting create a solid, timeless identity.",
      pt: "Geometria, elegância e presença. Uma proposta de estilo industrial em que os volumes puros e a iluminação arquitetônica criam uma identidade sólida e atemporal.",
    },
    category: "viviendas",
    origin: "ambos",
    gallery: [
      {
        src: delLimoneroAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: delLimoneroAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: delLimoneroAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: delLimoneroExteriorGaleria,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: delLimoneroExteriorGaleria,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: delLimoneroExteriorGaleria,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: delLimoneroDormitorio,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: delLimoneroDormitorio,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: delLimoneroDormitorio,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: delLimoneroLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: delLimoneroLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: delLimoneroLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: delLimoneroOficina,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de oficina",
          en: "additional office image",
          pt: "imagem adicional de escritório",
        },
      },
      {
        src: delLimoneroOficina,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de oficina",
          en: "additional office image",
          pt: "imagem adicional de escritório",
        },
      },
      {
        src: delLimoneroOficina,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de oficina",
          en: "additional office image",
          pt: "imagem adicional de escritório",
        },
      },
    ],
  },
  {
    id: "casa-inti",
    title: {
      es: "Casa Inti",
      en: "Inti House",
      pt: "Casa Inti",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2023",
      en: "Single-family home - 2023",
      pt: "Casa unifamiliar - 2023",
    },
    image: casaIntiContrafachadaAnochecer,
    location: "Manzanares, Pilar, Buenos Aires",
    year: "2023",
    area: "76 m²",
    description: {
      es: "Luz, calidez y conexión. Una vivienda concebida para aprovechar la orientación solar, donde la luz natural, los materiales nobles y una distribución cuidadosamente planificada crean espacios cálidos, confortables y en armonía con su entorno.",
      en: "Light, warmth, and connection. A home designed to take advantage of solar orientation, where natural light, noble materials, and a carefully planned layout create warm, comfortable spaces in harmony with their surroundings.",
      pt: "Luz, calor e conexão. Uma residência concebida para aproveitar a orientação solar, onde a luz natural, os materiais nobres e uma distribuição cuidadosamente planejada criam espaços quentes, confortáveis e em harmonia com o entorno.",
    },
    category: "viviendas",
    origin: "ambos",
    gallery: [
      {
        src: casaIntiContrafachadaAmanecer,
        atmosphere: "amanecer",
        isFeatured: true,
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: casaIntiContrafachadaAnochecer,
        atmosphere: "anochecer",
        isFeatured: true,
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: casaIntiContrafachadaAtardecer,
        atmosphere: "atardecer",
        isFeatured: true,
        label: {
          es: "filtro de Atardecer de Otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: casaIntiExteriorAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaIntiExteriorAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaIntiExteriorAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaIntiInteriorCocina,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaIntiInteriorCocina,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaIntiInteriorCocina,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaIntiInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInteriorLiving02,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInteriorLiving02,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInteriorLiving02,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaIntiInterior,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de interior",
          en: "additional interior image",
          pt: "imagem adicional de interior",
        },
      },
      {
        src: casaIntiInterior,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de interior",
          en: "additional interior image",
          pt: "imagem adicional de interior",
        },
      },
      {
        src: casaIntiInterior,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de interior",
          en: "additional interior image",
          pt: "imagem adicional de interior",
        },
      },
    ],
  },
  {
    id: "casa-coffee",
    title: {
      es: "Casa Coffee",
      en: "Casa Coffee",
      pt: "Casa Coffee",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2024",
      en: "Single-family home - 2024",
      pt: "Casa unifamiliar - 2024",
    },
    image: casaCoffeeExteriorContrafachada,
    location: "Pilar, Buenos Aires",
    year: "2024",
    area: "95.41 m²",
    description: {
      es: "Sólida, equilibrada y de gran presencia visual. El diseño explora la relación entre estructuras, luz y proporción, que destaca por la fuerza de sus trazos horizontales y la integración de elementos estructurales como parte de la expresión estética.",
      en: "Solid, balanced, and visually striking. The design explores the relationship between structure, light, and proportion, standing out for the strength of its horizontal strokes and the integration of structural elements as part of the aesthetic expression.",
      pt: "Sólida, equilibrada e de grande presença visual. O projeto explora a relação entre estruturas, luz e proporção, destacando-se pela força de suas linhas horizontais e pela integração de elementos estruturais como parte da expressão estética.",
    },
    category: "viviendas",
    origin: "ambos",
    gallery: [
      {
        src: casaCoffeeExteriorAmanecer,
        atmosphere: "amanecer",
        isFeatured: true,
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: casaCoffeeExteriorAnochecer,
        atmosphere: "anochecer",
        isFeatured: true,
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: casaCoffeeExteriorAtardecer,
        atmosphere: "atardecer",
        isFeatured: true,
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: casaCoffeeExteriorContrafachada,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeeExteriorContrafachada,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeeExteriorContrafachada,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeeInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeeInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeeInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeeInteriorSuite,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaCoffeeInteriorSuite,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaCoffeeInteriorSuite,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
    ],
  },
  {
    id: "casa-scott",
    title: {
      es: "Casa Scott",
      en: "Scott House",
      pt: "Casa Scott",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2024",
      en: "Single-family home - 2024",
      pt: "Casa unifamiliar - 2024",
    },
    image: casaScottExteriorAnochecer,
    location: "Pilar, Buenos Aires",
    year: "2024",
    area: "130 m²",
    description: {
      es: "Jerarquía, geometría y equilibrio. Una propuesta donde el juego de volúmenes, las diferentes escalas y la composición en tonos grises construyen una arquitectura de carácter definido y espacios naturalmente iluminados.",
      en: "Hierarchy, geometry, and balance. A proposal where the play of volumes, differing scales, and the composition in gray tones build an architecture of defined character and naturally illuminated spaces.",
      pt: "Hierarquia, geometria e equilíbrio. Uma proposta em que o jogo de volumes, as diferentes escalas e a composição em tons de cinza constroem uma arquitetura de caráter definido e espaços naturalmente iluminados.",
    },
    category: "viviendas",
    origin: "ambos",
    gallery: [
      {
        src: casaScottExteriorAmanecer,
        atmosphere: "amanecer",
        isFeatured: true,
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: casaScottExteriorAnochecer,
        atmosphere: "anochecer",
        isFeatured: true,
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: casaScottExteriorAtardecer,
        atmosphere: "atardecer",
        isFeatured: true,
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: casaScottExteriorContrafachada,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaScottExteriorContrafachada,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaScottExteriorContrafachada,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaScottInteriorCocina,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaScottInteriorCocina,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaScottInteriorCocina,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaScottInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaScottInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaScottInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaScottInteriorSuite,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaScottInteriorSuite,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaScottInteriorSuite,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
    ],
  },
  {
    id: "casa-navarro",
    title: {
      es: "Casa Navarro",
      en: "Navarro House",
      pt: "Casa Navarro",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2024",
      en: "Single-family home - 2024",
      pt: "Casa unifamiliar - 2024",
    },
    image: casaNavarroExteriorContrafrenteAnochecer,
    location: "Pilar, Buenos Aires",
    year: "2024",
    area: "190 m²",
    description: {
      es: "La vivienda se define por una composición de volúmenes puros, donde un elemento revestido en piedra jerarquiza el acceso y aporta identidad a la fachada mediante un juego de llenos y vacíos. La implantación prioriza espacios integrados, iluminados y funcionales, complementados por una materialidad de tonos neutros, piedra natural y madera que aporta calidez al conjunto.",
      en: "The residence is defined by a composition of pure volumes, where a stone-clad element organizes the entrance and gives identity to the facade through a play of solids and voids. The layout prioritizes integrated, bright, and functional spaces, complemented by a material palette of neutral tones, natural stone, and wood that brings warmth to the whole.",
      pt: "A residência é definida por uma composição de volumes puros, em que um elemento revestido de pedra organiza o acesso e confere identidade à fachada por meio de um jogo de cheios e vazios. A implantação prioriza espaços integrados, iluminados e funcionais, complementados por uma materialidade em tons neutros, pedra natural e madeira que traz aconchego ao conjunto.",
    },
    category: "viviendas",
    origin: "ambos",
    gallery: [
      {
        src: casaNavarroExteriorContrafrenteAmanecer,
        atmosphere: "amanecer",
        isFeatured: true,
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: casaNavarroExteriorContrafrenteAnochecer,
        atmosphere: "anochecer",
        isFeatured: true,
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: casaNavarroExteriorContrafrenteAtardecer,
        atmosphere: "atardecer",
        isFeatured: true,
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: casaNavarroExteriorGaleriaAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaNavarroExteriorGaleriaAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaNavarroExteriorGaleriaAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de exterior",
          en: "additional exterior image",
          pt: "imagem adicional de exterior",
        },
      },
      {
        src: casaNavarroExteriorLateralAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de exterior lateral",
          en: "additional side exterior image",
          pt: "imagem adicional de exterior lateral",
        },
      },
      {
        src: casaNavarroExteriorLateralAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de exterior lateral",
          en: "additional side exterior image",
          pt: "imagem adicional de exterior lateral",
        },
      },
      {
        src: casaNavarroExteriorLateralAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de exterior lateral",
          en: "additional side exterior image",
          pt: "imagem adicional de exterior lateral",
        },
      },
      {
        src: casaNavarroInteriorDormitorio,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorDormitorio,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorDormitorio,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorDormitorio02,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorDormitorio02,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorDormitorio02,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de dormitorio",
          en: "additional bedroom image",
          pt: "imagem adicional de quarto",
        },
      },
      {
        src: casaNavarroInteriorLiving02,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaNavarroInteriorLiving02,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaNavarroInteriorLiving02,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaNavarroInteriorCocina,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaNavarroInteriorCocina,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaNavarroInteriorCocina,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de cocina",
          en: "additional kitchen image",
          pt: "imagem adicional de cozinha",
        },
      },
      {
        src: casaNavarroInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaNavarroInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaNavarroInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
    ],
  },
];

export function Casas({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [selectedProject, setSelectedProject] = useState<CasaProject | null>(null);
  const [modalAtmosphere, setModalAtmosphere] = useState<AtmosphereType>("todos");
  const [activeSlide, setActiveSlide] = useState(0);

  const filterItems: Array<{ key: Category; label: string }> = [
    { key: "todos", label: t.casas.filters.todos },
    { key: "viviendas", label: t.casas.filters.viviendas },
  ];

  const visible =
    active === "todos"
      ? casaProjects
      : casaProjects.filter(() => true);

  const atmosphereButtons: Array<{ key: AtmosphereType; label: string }> = [
    { key: "anochecer", label: t.projects.atmospheres.anochecer },
    { key: "atardecer", label: t.projects.atmospheres.atardecer },
    { key: "amanecer", label: t.projects.atmospheres.amanecer },
  ];

  const baseGalleryItems: CasaGalleryItem[] = selectedProject?.gallery?.length
    ? selectedProject.gallery
    : [
        {
          src: selectedProject?.image ?? p1,
          atmosphere: "anochecer" as const,
          label: selectedProject?.title ?? { es: "Imagen", en: "Image", pt: "Imagem" },
        },
        {
          src: selectedProject?.image ?? p1,
          atmosphere: "atardecer" as const,
          label: selectedProject?.title ?? { es: "Imagen", en: "Image", pt: "Imagem" },
        },
        {
          src: selectedProject?.image ?? p1,
          atmosphere: "amanecer" as const,
          label: selectedProject?.title ?? { es: "Imagen", en: "Image", pt: "Imagem" },
        },
      ];

  const galleryItems = uniqueGalleryBySrc(
    baseGalleryItems.filter((item) => {
      if (modalAtmosphere === "todos") {
        return true;
      }

      return item.atmosphere === modalAtmosphere;
    })
  );
  const activeIndex = galleryItems.length > 0 ? activeSlide % galleryItems.length : 0;
  const activeItem = galleryItems[activeIndex];

  useEffect(() => {
    setModalAtmosphere("todos");
    setActiveSlide(0);
  }, [selectedProject?.id]);


  return (
    <section id="casas" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
      <div id="casas-section" className="absolute -top-24" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2 md:mb-4 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.casas.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">{t.casas.heading}</h2>
          <p className="mt-4 w-full max-w-none text-base leading-relaxed text-brand-gray">
            {t.casas.description}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray mb-4">
          {t.projects.categoryFilterTitle}
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold">
          {filterItems.map((f) => (
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

      <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-12 mt-8">
        {visible.map((project) => (
          <article
            key={project.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="overflow-hidden mb-6 bg-brand-light aspect-4/3">
              <img
                src={project.image}
                alt={project.title[language]}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200 ease-out"
              />
            </div>
            <div className="mb-3 inline-flex items-center rounded-none px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap bg-brand-black text-white">
              {t.projects.originLabels.casas}
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title[language]}</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-2">{project.meta[language]}</p>
            <div className="flex flex-col items-start gap-2 mb-6">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{project.location}</div>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedProject(project);
              }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-black pb-1 whitespace-nowrap"
            >
              {t.common.readMore}
            </button>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-brand-black/90 p-4 backdrop-blur-sm md:p-12"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 border border-brand-black bg-white px-4 py-2 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap"
              aria-label={t.projects.modal.close}
            >
              {t.projects.modal.close}
            </button>
            <div className="w-full">
              <div className="overflow-hidden bg-brand-light aspect-4/3">
                <img
                  src={activeItem?.src ?? selectedProject.image}
                  alt={selectedProject.title[language]}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-8 pt-4 md:px-12">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-black/70 text-white transition hover:bg-brand-black/90"
                    aria-label={t.projects.pagination.previous}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide((prev) => (prev + 1) % galleryItems.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-black/70 text-white transition hover:bg-brand-black/90"
                    aria-label={t.projects.pagination.next}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex flex-nowrap items-center justify-center gap-3 overflow-visible py-1">
                  {atmosphereButtons.map((atm) => {
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
                        onClick={() => {
                          setModalAtmosphere(atm.key);
                          setActiveSlide(0);
                        }}
                        title={atm.label}
                        aria-label={atm.label}
                        className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                          isActive ? "scale-105 shadow-sm ring-2 ring-brand-black ring-offset-2" : "hover:scale-105"
                        } ${colorClass}`}
                      >
                        {isActive ? <span className="text-[14px] font-bold leading-none">✓</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60">
                {selectedProject.meta[language]}
              </span>
              <h3 className="mt-3 mb-8 font-serif text-3xl md:text-5xl">{selectedProject.title[language]}</h3>
              <div className="mb-8 grid grid-cols-2 gap-6 border-y border-border py-6 text-[10px] uppercase tracking-[0.3em] md:grid-cols-3">
                <div>
                  <p className="mb-2 opacity-50">{t.projects.modal.location}</p>
                  <p className="font-semibold">{selectedProject.location}</p>
                </div>
                <div>
                  <p className="mb-2 opacity-50">{t.projects.modal.year}</p>
                  <p className="font-semibold">{selectedProject.year}</p>
                </div>
                <div>
                  <p className="mb-2 opacity-50">{t.projects.modal.area}</p>
                  <p className="font-semibold">{selectedProject.area}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-brand-gray">
                {selectedProject.description[language]}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
