import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";
import delLimoneroAtardecer from "@/assets/Casas/Del Limonero/Exterior_Atardecer de otoño.jpeg";
import delLimoneroAmanecer from "@/assets/Casas/Del Limonero/Exterior_Amanecer de primavera.jpeg";
import delLimoneroAnochecer from "@/assets/Casas/Del Limonero/Exterior_Anochecer de verano.jpeg";
import delLimoneroExteriorLateralAtardecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Atardecer de Otoño.png";
import delLimoneroExteriorLateralAnochecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Anochecer de Verano.png";
import delLimoneroExteriorLateralAmanecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Amanecer de Primavera.png";
import delLimoneroContrafachadaAmanecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Amanecer de Primavera.png";
import delLimoneroContrafachadaAnochecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Anochecer de verano.png";
import delLimoneroContrafachadaAtardecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Atardecer de Otoño..png";
import delLimoneroDormitorio from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Dormitorio.png";
import delLimoneroLiving from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Living.png";
import delLimoneroOficina from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Oficina.png";
import casaCoffeeExteriorAmanecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Amanecer de primavera.png";
import casaCoffeeExteriorAnochecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Anochecer de verano..png";
import casaCoffeeExteriorAtardecer from "@/assets/Casas/Coffee/CasaCoffee-Exterior_Atardecer de otoño..png";
import casaCoffeeContrafachadaAmanecer from "@/assets/Casas/Coffee/CasaCoffee_Contrafachada_Amanecer de Primavera.png";
import casaCoffeeContrafachadaAnochecer from "@/assets/Casas/Coffee/CasaCoffee-Contrafachada_Anochecer de verano.png";
import casaCoffeeContrafachadaAtardecer from "@/assets/Casas/Coffee/CasaCoffee-Contrafachada_Atardecer de otoño.png";
import casaCoffeeInteriorLiving from "@/assets/Casas/Coffee/CasaCoffee-Interior_Living..png";
import casaCoffeeInteriorSuite from "@/assets/Casas/Coffee/CasaCoffee-Interior_Suite..png";
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
import casaNavarroExteriorAmanecer from "@/assets/Casas/Navarro/CasaNavarro-Exterior_Amanecer de Primavera.png";
import casaNavarroExteriorAnochecer from "@/assets/Casas/Navarro/CasaNavarro-Exterior_Anochecer de Verano.png";
import casaNavarroExteriorAtardecer from "@/assets/Casas/Navarro/CasaNavarro-Exterior_Atardecer de otoño.png";
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
import casaScottExteriorAmanecer from "@/assets/Casas/Scott/CasaScott-Exterior_Amanecer de primavera.png";
import casaScottExteriorAnochecer from "@/assets/Casas/Scott/CasaScott-Exterior_Anochecer de verano.png";
import casaScottExteriorAtardecer from "@/assets/Casas/Scott/CasaScott-Exterior_Atardecer de otoño.png";
import casaScottContrafachadaAmanecer from "@/assets/Casas/Scott/CasaScott-Contrafachada_Amanecer de Primavera.png";
import casaScottContrafachadaAnochecer from "@/assets/Casas/Scott/CasaScott-Contrafachada_Anochecer de Verano.png";
import casaScottContrafachadaAtardecer from "@/assets/Casas/Scott/CasaScott-Contrafachada_Atardecer de Otoño.png";
import casaScottInteriorCocina from "@/assets/Casas/Scott/CasaScott-Interior_Cocina..png";
import casaScottInteriorLiving from "@/assets/Casas/Scott/CasaScott-Interior_Living.png";
import casaScottInteriorSuite from "@/assets/Casas/Scott/CasaScott-Interior_Suite..png";
import zAmanecer from "@/assets/Proyectos/Z/Frente_Amanecer de primavera.png";
import zAmanecerExterior from "@/assets/Proyectos/Z/Frente_Lateral_Amanecer de Primavera.png";
import zAnochecerFrente from "@/assets/Proyectos/Z/Frente_Anochecer de verano.png";
import zAnochecerCF from "@/assets/Proyectos/Z/Contrafachada_Anochecer de verano.png";
import zAnochecerExterior from "@/assets/Proyectos/Z/Frente_Lateral_Anochecer de vernano.png";
import zAtardecer from "@/assets/Proyectos/Z/Contrafachada_Atardecer de otoño.png";
import zAtardecerJpg from "@/assets/Proyectos/Z/Frente_Atardecer de otoño.jpeg";
import zAtardecerExterior from "@/assets/Proyectos/Z/Frente_Lateral_Atardecer de otoño.png";
import zContrafachadaAmanecer from "@/assets/Proyectos/Z/Contrafachada_Amanecer de Primavera.png";
import zInteriorCocina from "@/assets/Proyectos/Z/Interior_Cocina.png";
import zInteriorComedor from "@/assets/Proyectos/Z/Interior_Comedor.png";
import zInteriorLivingComedor from "@/assets/Proyectos/Z/Interior_Living_Comedor.png";
import zInteriorLiving from "@/assets/Proyectos/Z/Interior_Living.png";
import zInteriorLiving02 from "@/assets/Proyectos/Z/Interior_Living02.png";
import zInteriorVistaPiso from "@/assets/Proyectos/Z/Interior_Vista entre piso.png";
import cAmanecer from "@/assets/Proyectos/CyG/Frente_Amanecer de primavera.png";
import cAnochecer from "@/assets/Proyectos/CyG/Frente_Anochecer de verano.png";
import cAnochecerBack from "@/assets/Proyectos/CyG/CasaCyG-Contrafachada_Anochecer de verano.png";
import cAtardecer from "@/assets/Proyectos/CyG/Frente_Atardecer de otoño.png";
import cAtardecerFrente from "@/assets/Proyectos/CyG/FrenteLateral_Atardecer de otoño.png";
import cContrafachadaAmanecer from "@/assets/Proyectos/CyG/CasaCyG-Contrafachada_Amanecer de Primavera.png";
import cContrafachadaAtardecer from "@/assets/Proyectos/CyG/CasaCyG-Contrafachada_Atardecer de Otoño.png";
import cInteriorComedor from "@/assets/Proyectos/CyG/Interior_Comedor.png";
import cInteriorLiving from "@/assets/Proyectos/CyG/Interior_Living.png";
import cInteriorSuite from "@/assets/Proyectos/CyG/Interior_Suite.png";
import proyectoCarlaContrafachadaAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorContraf._Amanecer de Primavera.png";
import proyectoCarlaContrafachadaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ContrafachadaLateral_Anochecer de Verano.png";
import proyectoCarlaContrafachadaAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-ContrafachadaLateral_Atardecer de Otoño.jpeg";
import proyectoCarlaContrafachadaLateralAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-ContrafachadaLateral_Amanecer de Primavera.png";
import proyectoCarlaExtHallAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-Hall_Atardecer de Otoño.png";
import proyectoCarlaExteriorAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior_Amanecer de Primavera.png";
import proyectoCarlaExteriorAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior_Atardecer de otoño.png";
import proyectoCarlaExteriorAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Exterior-Anochecer de Verano.png";
import proyectoCarlaExteriorContrafachadaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorContraf._Anochecer de Verano.png";
import proyectoCarlaExteriorHallAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Hall_Anochecer de verano.png";
import proyectoCarlaExteriorLateralAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Amanecer de Primavera.png";
import proyectoCarlaExteriorLateralAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Anochecer de Varano.png";
import proyectoCarlaExteriorLateralAtardecer from "@/assets/Proyectos/Carla/ProyectoCarla-ExteriorLateral_Atardecer de otoño.png";
import proyectoCarlaHallAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Hall_Amanecer de Primavera.png";
import proyectoCarlaParrillaAmanecer from "@/assets/Proyectos/Carla/ProyectoCarla-Parrilla_Amanecer de Primavera.png";
import proyectoCarlaInterior02 from "@/assets/Proyectos/Carla/ProyectoCarla-Interior02.png";
import proyectoCarlaParrillaAnochecer from "@/assets/Proyectos/Carla/ProyectoCarla-Parrilla_Anochecer de Verano.png";
import salemFrenteAnochecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Anochecer de Verano.png";
import salemFrenteAtardecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Atardecer de Otoño.png";
import salemFrenteAmanecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Amanecer de Primavera.png";
import salemFrenteLateralExteriorAnochecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Lateral_Exterior_Anochecer de Verano.png";
import salemFrenteLateralExteriorAtardecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Lateral_Exterior_Atardecer de otoño.png";
import salemFrenteLateralExteriorAmanecer from "@/assets/Proyectos/Salem/Proyecto-CentroSalem_Frente_Lateral_Exterior_Amanecer de Primavera.png";
import salemInterior from "@/assets/Proyectos/Salem/Proyecto_CentroSalem_Interior.png";
import salemInteriorLateral from "@/assets/Proyectos/Salem/Proyecto_CentroSalem_Interior_Lateral.png";
import salemBufet from "@/assets/Proyectos/Salem/Proyecto_CentroSalem_Bufet.png";
import casaBonziBanio01Antes from "@/assets/Casas/Bonzi/CasaBonzi_Baño01_Antes.png";
import casaBonziBanio01Despues from "@/assets/Casas/Bonzi/CasaBonzi_Baño01_Despues.png";
import casaBonziBanio02Antes from "@/assets/Casas/Bonzi/CasaBonzi_Baño02_Antes.png";
import casaBonziBanio02Despues from "@/assets/Casas/Bonzi/CasaBonzi_Baño02_Despues.png";
import casaBonziCocina01Antes from "@/assets/Casas/Bonzi/CasaBonzi_Cocina01_Antes.png";
import casaBonziCocina01Despues from "@/assets/Casas/Bonzi/CasaBonzi_Cocina01_Despues.png";
import casaBonziCocina02Antes from "@/assets/Casas/Bonzi/CasaBonzi_Cocina02_Antes.png";
import casaBonziCocina02Despues from "@/assets/Casas/Bonzi/CasaBonzi_Cocina02_Despues.png";
import casaBonziComedorAntes from "@/assets/Casas/Bonzi/CasaBonzi_Comedor_Antes.png";
import casaBonziComedorDespues from "@/assets/Casas/Bonzi/CasaBonzi_Comedor_Despues.png";
import casaBonziLivingAntes from "@/assets/Casas/Bonzi/CasaBonzi_Living_Antes.png";
import casaBonziLivingDespues from "@/assets/Casas/Bonzi/CasaBonzi_Living_Despues.png";
import casaBonziTerraza01Antes from "@/assets/Casas/Bonzi/CasaBonzi_Terraza01_Antes.png";
import casaBonziTerraza01Despues from "@/assets/Casas/Bonzi/CasaBonzi_Terraza01_Despues.png";
import casaBonziTerraza02Antes from "@/assets/Casas/Bonzi/CasaBonzi_Terraza02_Antes.png";
import casaBonziTerraza02Despues from "@/assets/Casas/Bonzi/CasaBonzi_Terraza02_Despues.png";
import casaBonziTerraza03Antes from "@/assets/Casas/Bonzi/CasaBonzi_Terraza03_Antes.png";
import casaBonziTerraza03Despues from "@/assets/Casas/Bonzi/CasaBonzi_Terraza03_Despues.png";
import motoqueroExteriorAnochecer from "@/assets/Proyectos/Motoquero/Motoquero-Exterior_Anochecer de Verano.png";
import motoqueroExteriorAtardecer from "@/assets/Proyectos/Motoquero/Motoquero-Exterior_Atardecer de Otoño.png";
import motoqueroExteriorAmanecer from "@/assets/Proyectos/Motoquero/Motoquero-Exterior_Amanecer de Primavera.png";
import motoqueroInteriorTaller from "@/assets/Proyectos/Motoquero/Motoquero-Interior_Taller.png";
import motoqueroInteriorTaller2 from "@/assets/Proyectos/Motoquero/Motoquero-Interior_Taller2.png";
import motoqueroInteriorTaller3 from "@/assets/Proyectos/Motoquero/Motoquero-Interior_Taller3.png";
import motoqueroInteriorTienda from "@/assets/Proyectos/Motoquero/Motoquero-Interior_Tienda de respuestos.png";
import { useTranslation } from "@/lib/i18n";
import { casaProjects } from "@/components/project-data";

type Category = "todos" | "viviendas" | "comercial" | "reformas";

type AtmosphereType = "todos" | "anochecer" | "atardecer" | "amanecer";

type SectionOrigin = "casas" | "proyectos";

interface LocalizedString {
  es: string;
  en: string;
  pt?: string;
}

interface Project {
  id: string;
  title: LocalizedString;
  meta: LocalizedString;
  category: Exclude<Category, "todos">;
  image: string;
  previewImages?: string[];
  location: string;
  year: string;
  area: string;
  description: LocalizedString;
  gallery?: Array<{
    src: string;
    openSrc?: string;
    label: LocalizedString;
    atmosphere: Exclude<AtmosphereType, "todos">;
    phase?: "antes" | "despues";
    isFeatured?: boolean;
    imageClassName?: string;
  }>;
  origin?: "casas" | "proyectos";
}

type GalleryItem = {
  src: string;
  label: LocalizedString;
  atmosphere: Exclude<AtmosphereType, "todos">;
  phase?: "antes" | "despues";
  isFeatured?: boolean;
  imageClassName?: string;
  openSrc?: string;
};

const uniqueGalleryBySrc = (gallery: GalleryItem[], targetAtmosphere?: AtmosphereType) => {
  const acc: GalleryItem[] = [];

  for (const item of gallery) {
    const existingIndex = acc.findIndex((existing) => existing.src === item.src);
    if (existingIndex === -1) {
      acc.push(item);
      continue;
    }

    if (targetAtmosphere && item.atmosphere === targetAtmosphere) {
      acc[existingIndex] = item;
    }
  }

  return acc;
};

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
    image: cAnochecer,
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
        src: cContrafachadaAmanecer,
        atmosphere: "amanecer",
        isFeatured: true,
        label: {
          es: "AMANECER PRIMAVERA",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
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
        src: cContrafachadaAtardecer,
        atmosphere: "atardecer",
        isFeatured: true,
        label: {
          es: "FILTRO DE ATARDECER OTOÑO",
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
      en: "Proyecto Carla",
      pt: "Proyecto Carla",
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
        src: proyectoCarlaExteriorAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
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
        src: proyectoCarlaExteriorAmanecer,
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
          es: "filtro de Anochecer de Verano",
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
        src: proyectoCarlaExteriorLateralAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
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
        src: proyectoCarlaExteriorHallAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de Verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: proyectoCarlaExtHallAtardecer,
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
        src: proyectoCarlaInterior02,
        atmosphere: "atardecer",
        label: {
          es: "Interior 02",
          en: "Interior 02",
          pt: "Interior 02",
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
      {
        src: proyectoCarlaParrillaAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de Primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
    ],
  },
  {
    id: "proyecto-salem",
    title: {
      es: "Proyecto Salem",
      en: "Proyecto Salem",
      pt: "Proyecto Salem",
    },
    meta: {
      es: "Comercial - 2025",
      en: "Commercial — 2025",
      pt: "Comercial — 2025",
    },
    category: "comercial",
    origin: "proyectos",
    image: salemFrenteAnochecer,
    location: "Pilar, Buenos Aires",
    year: "2025",
    area: "807 m²",
    description: {
      es: "La propuesta se concibe como un espacio de encuentro y reflexión, donde la composición de volúmenes y la jerarquía del acceso expresan una identidad arquitectónica sólida y acogedora. El proyecto organiza sus espacios para favorecer la congregación, incorporando materiales sobrios y amplias superficies vidriadas que potencian la luz natural y la conexión con el exterior.",
      en: "The proposal is conceived as a space for gathering and reflection, where the composition of volumes and the hierarchy of the entrance express a solid and welcoming architectural identity. The project organizes its spaces to favor congregation, incorporating sober materials and large glazed surfaces that enhance natural light and the connection with the exterior.",
      pt: "A proposta é concebida como um espaço de encontro e reflexão, onde a composição de volumes e a hierarquia do acesso expressam uma identidade arquitetônica sólida e acolhedora. O projeto organiza seus espaços para favorecer a congregação, incorporando materiais sóbrios e amplas superfícies envidraçadas que potencializam a luz natural e a conexão com o exterior.",
    },
    gallery: [
      { src: salemFrenteAnochecer, atmosphere: "anochecer", label: { es: "Frente Anochecer de verano", en: "Front Summer Dusk", pt: "Frente Anoitecer de verão" } },
      { src: salemFrenteAtardecer, atmosphere: "atardecer", label: { es: "Frente Atardecer de otoño", en: "Front Autumn Sunset", pt: "Frente Entardecer de outono" } },
      { src: salemFrenteAmanecer, atmosphere: "amanecer", label: { es: "Frente Amanecer de primavera", en: "Front Spring Sunrise", pt: "Frente Amanhecer de primavera" } },
      { src: salemFrenteLateralExteriorAnochecer, atmosphere: "anochecer", label: { es: "Frente Lateral Exterior Anochecer de verano", en: "Side Exterior Summer Dusk", pt: "Lateral Exterior Anoitecer de verão" } },
      { src: salemFrenteLateralExteriorAtardecer, atmosphere: "atardecer", label: { es: "Frente Lateral Exterior Atardecer de otoño", en: "Side Exterior Autumn Sunset", pt: "Lateral Exterior Entardecer de outono" } },
      { src: salemFrenteLateralExteriorAmanecer, atmosphere: "amanecer", label: { es: "Frente Lateral Exterior Amanecer de primavera", en: "Side Exterior Spring Sunrise", pt: "Lateral Exterior Amanhecer de primavera" } },
      { src: salemInterior, atmosphere: "anochecer", label: { es: "Interior", en: "Interior", pt: "Interior" } },
      { src: salemInteriorLateral, atmosphere: "anochecer", label: { es: "Interior Lateral", en: "Interior Side", pt: "Interior Lateral" } },
      { src: salemBufet, atmosphere: "anochecer", label: { es: "Bufet", en: "Buffet", pt: "Bufê" } },
      { src: salemInterior, atmosphere: "atardecer", label: { es: "Interior", en: "Interior", pt: "Interior" } },
      { src: salemInteriorLateral, atmosphere: "atardecer", label: { es: "Interior Lateral", en: "Interior Side", pt: "Interior Lateral" } },
      { src: salemBufet, atmosphere: "atardecer", label: { es: "Bufet", en: "Buffet", pt: "Bufê" } },
      { src: salemInterior, atmosphere: "amanecer", label: { es: "Interior", en: "Interior", pt: "Interior" } },
      { src: salemInteriorLateral, atmosphere: "amanecer", label: { es: "Interior Lateral", en: "Interior Side", pt: "Interior Lateral" } },
      { src: salemBufet, atmosphere: "amanecer", label: { es: "Bufet", en: "Buffet", pt: "Bufê" } },
    ],
  },
  {
    id: "proyecto-motoquero",
    title: {
      es: "El Motoquero",
      en: "El Motoquero",
      pt: "El Motoquero",
    },
    meta: {
      es: "Local Comercial - 2026",
      en: "Commercial space — 2026",
      pt: "Espaço comercial — 2026",
    },
    category: "comercial",
    image: motoqueroExteriorAnochecer,
    location: "Pilar, Buenos Aires",
    year: "2026",
    area: "235 m²",
    description: {
      es: "La propuesta arquitectónica se concibe como un espacio que integra el área de servicio técnico y la tienda de repuestos bajo una identidad única, proyectando una imagen ordenada y de fuerte carácter comercial. La distribución diferencia claramente las áreas de atención, venta y servicio técnico, optimizando la circulación y el funcionamiento diario, mientras que la materialidad industrial y la iluminación potencian un ambiente ordenado, moderno y eficiente.",
      en: "The architectural proposal is conceived as a space that integrates the technical service area and the spare parts store under a single identity, projecting an orderly image with a strong commercial character. The layout clearly distinguishes the service, sales, and technical areas, optimizing circulation and daily operation, while the industrial materiality and lighting enhance an orderly, modern, and efficient environment.",
      pt: "A proposta arquitetônica é concebida como um espaço que integra a área de serviço técnico e a loja de peças sob uma identidade única, projetando uma imagem ordenada e de forte caráter comercial. A distribuição diferencia claramente as áreas de atendimento, venda e serviço técnico, otimizando a circulação e o funcionamento diário, enquanto a materialidade industrial e a iluminação potencializam um ambiente ordenado, moderno e eficiente.",
    },
    gallery: [
      { src: motoqueroExteriorAnochecer, atmosphere: "anochecer", label: { es: "Anochecer de verano", en: "Summer dusk", pt: "Anoitecer de verão" } },
      { src: motoqueroExteriorAtardecer, atmosphere: "atardecer", label: { es: "Atardecer de otoño", en: "Autumn sunset", pt: "Entardecer de outono" } },
      { src: motoqueroExteriorAmanecer, atmosphere: "amanecer", label: { es: "Amanecer de primavera", en: "Spring sunrise", pt: "Amanhecer de primavera" } },
      { src: motoqueroInteriorTaller, atmosphere: "anochecer", label: { es: "Taller", en: "Workshop", pt: "Oficina técnica" } },
      { src: motoqueroInteriorTaller2, atmosphere: "anochecer", label: { es: "Taller 2", en: "Workshop 2", pt: "Oficina técnica 2" } },
      { src: motoqueroInteriorTaller3, atmosphere: "anochecer", label: { es: "Taller 3", en: "Workshop 3", pt: "Oficina técnica 3" } },
      { src: motoqueroInteriorTienda, atmosphere: "anochecer", label: { es: "Tienda de repuestos", en: "Spare parts shop", pt: "Loja de peças" } },
      { src: motoqueroInteriorTaller, atmosphere: "atardecer", label: { es: "Taller", en: "Workshop", pt: "Oficina técnica" } },
      { src: motoqueroInteriorTaller2, atmosphere: "atardecer", label: { es: "Taller 2", en: "Workshop 2", pt: "Oficina técnica 2" } },
      { src: motoqueroInteriorTaller3, atmosphere: "atardecer", label: { es: "Taller 3", en: "Workshop 3", pt: "Oficina técnica 3" } },
      { src: motoqueroInteriorTienda, atmosphere: "atardecer", label: { es: "Tienda de repuestos", en: "Spare parts shop", pt: "Loja de peças" } },
      { src: motoqueroInteriorTaller, atmosphere: "amanecer", label: { es: "Taller", en: "Workshop", pt: "Oficina técnica" } },
      { src: motoqueroInteriorTaller2, atmosphere: "amanecer", label: { es: "Taller 2", en: "Workshop 2", pt: "Oficina técnica 2" } },
      { src: motoqueroInteriorTaller3, atmosphere: "amanecer", label: { es: "Taller 3", en: "Workshop 3", pt: "Oficina técnica 3" } },
      { src: motoqueroInteriorTienda, atmosphere: "amanecer", label: { es: "Tienda de repuestos", en: "Spare parts shop", pt: "Loja de peças" } },
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
        src: zAnochecerFrente,
        atmosphere: "anochecer",
        label: {
          es: "filtro de anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
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
        src: zAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
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
        src: zAtardecerExterior,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
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
        src: zAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zContrafachadaAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "AMANECER PRIMAVERA",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
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
        src: zInteriorLivingComedor,
        atmosphere: "amanecer",
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
        src: zInteriorLiving02,
        atmosphere: "amanecer",
        label: {
          es: "interior living 02",
          en: "living room interior 02",
          pt: "interior da sala de estar 02",
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
        src: zInteriorCocina,
        atmosphere: "amanecer",
        label: {
          es: "interior de cocina",
          en: "kitchen interior",
          pt: "interior da cozinha",
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
        src: zInteriorLivingComedor,
        atmosphere: "anochecer",
        label: {
          es: "interior living comedor",
          en: "living and dining interior",
          pt: "interior da sala de estar e jantar",
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
        src: zInteriorLiving02,
        atmosphere: "anochecer",
        label: {
          es: "interior living 02",
          en: "living room interior 02",
          pt: "interior da sala de estar 02",
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
        src: zInteriorCocina,
        atmosphere: "anochecer",
        label: {
          es: "interior de cocina",
          en: "kitchen interior",
          pt: "interior da cozinha",
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
        atmosphere: "atardecer",
        label: {
          es: "interior living",
          en: "living room interior",
          pt: "interior da sala de estar",
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
        src: zInteriorComedor,
        atmosphere: "atardecer",
        label: {
          es: "interior de comedor",
          en: "dining room interior",
          pt: "interior da sala de jantar",
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
    ],
  },
];

import { SectionMode } from "@/components/SectionMode";

export function Projects({ mode = "home", section }: { mode?: SectionMode; section?: SectionOrigin }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [listAtmosphere, setListAtmosphere] = useState<AtmosphereType>("todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navChoiceOpen, setNavChoiceOpen] = useState(false);

  useEffect(() => {
    if (mode !== "section" || section !== "proyectos") return;
    setActive("todos");
  }, [mode, section]);

  const casaProjectsWithIds = casaProjects
    .map((project, index) => ({
      ...project,
      id: project.id ?? `casa-${index + 1}`,
    })) as Project[];
  const casaIds = new Set(casaProjectsWithIds.map((project) => project.id));
  const combinedProjects: Project[] = [
    ...casaProjectsWithIds.map((project) => ({
      ...project,
      origin: project.origin ?? ("casas" as const),
      gallery: project.gallery?.map((item) => ({
        ...item,
        label: item.label || project.title,
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
  const visibleByOrigin = filteredByCategory;
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
              {project.id === "casa-pili" && project.previewImages?.length ? (
                <div className="relative h-full w-full">
                  <img
                    src={project.previewImages[0]}
                    alt={project.title[language]}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title[language]}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200 ease-out"
                />
              )}
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
  const [modalAtmosphere, setModalAtmosphere] = useState<AtmosphereType>(selectedAtmosphere);
  const [piliFilter, setPiliFilter] = useState<"all" | "antes" | "despues">("all");
  const isPhaseFilterProject = project.id === "casa-pili" || project.id === "casa-bonzi";
  const atmosphereButtons: Array<{ key: AtmosphereType; label: string }> = [
    { key: "todos", label: t.projects.atmospheres.todos },
    { key: "anochecer", label: t.projects.atmospheres.anochecer },
    { key: "atardecer", label: t.projects.atmospheres.atardecer },
    { key: "amanecer", label: t.projects.atmospheres.amanecer },
  ];
  const pilisFilterButtons = [
    { key: "antes", label: t.projects.piliFilters.antes },
    { key: "despues", label: t.projects.piliFilters.despues },
  ] as const;

  const getCasaBonziPhaseTargetSrc = (
    src?: string,
    targetPhase?: "antes" | "despues"
  ): string | null => {
    if (!src || !targetPhase) return null;

    const bonziPairs: Record<string, string> = {
      [casaBonziBanio01Antes]: casaBonziBanio01Despues,
      [casaBonziBanio02Antes]: casaBonziBanio02Despues,
      [casaBonziCocina01Antes]: casaBonziCocina01Despues,
      [casaBonziCocina02Antes]: casaBonziCocina02Despues,
      [casaBonziComedorAntes]: casaBonziComedorDespues,
      [casaBonziLivingAntes]: casaBonziLivingDespues,
      [casaBonziTerraza01Antes]: casaBonziTerraza01Despues,
      [casaBonziTerraza02Antes]: casaBonziTerraza02Despues,
      [casaBonziTerraza03Antes]: casaBonziTerraza03Despues,
    };

    const counterpart =
      bonziPairs[src] ??
      Object.entries(bonziPairs).find(([, after]) => after === src)?.[0] ??
      null;

    if (targetPhase === "antes") {
      if (Object.keys(bonziPairs).includes(src)) return src;
      return counterpart;
    }

    if (targetPhase === "despues") {
      if (Object.values(bonziPairs).includes(src)) return src;
      return counterpart;
    }

    return null;
  };

  const getCasaPiliPhaseTargetSrc = (
    src?: string,
    targetPhase?: "antes" | "despues"
  ): string | null => {
    if (!src || !targetPhase || !project.gallery) return null;

    const getSceneKey = (label: LocalizedString) => {
      const text = (label.es || label.en || label.pt || "").toLowerCase();
      return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\b(antes|despues|después|depois|before|after)\b/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
    };

    const currentItem = project.gallery.find((item) => item.src === src);
    if (!currentItem) return null;

    if (currentItem.phase === targetPhase) return currentItem.src;

    const currentSceneKey = getSceneKey(currentItem.label);
    if (!currentSceneKey) return null;

    const targetItem = project.gallery.find(
      (item) => item.phase === targetPhase && getSceneKey(item.label) === currentSceneKey
    );

    return targetItem?.src ?? null;
  };

  const handlePiliFilterChange = (nextFilter: "antes" | "despues") => {
    if (project.id === "casa-bonzi") {
      const currentSrc = reorderedGalleryItems[activeIndex]?.src ?? galleryItems[activeIndex]?.src;
      const targetSrc = getCasaBonziPhaseTargetSrc(currentSrc, nextFilter);
      setPiliFilter(nextFilter);
      setDesiredActiveSrc(targetSrc);
      return;
    }

    if (project.id === "casa-pili") {
      const currentSrc = reorderedGalleryItems[activeIndex]?.src ?? galleryItems[activeIndex]?.src;
      const targetSrc = getCasaPiliPhaseTargetSrc(currentSrc, nextFilter);
      setPiliFilter(nextFilter);
      setDesiredActiveSrc(targetSrc);
      return;
    }

    setPiliFilter(nextFilter);
  };

  const applyMoves = <T,>(items: T[], moves: Array<{ from: number; to: number }>): T[] => {
    const res = items.slice();
    for (const mv of moves) {
      const from = mv.from;
      const to = mv.to;
      if (from < 0 || from >= res.length) continue;
      const [item] = res.splice(from, 1);
      const dest = Math.min(Math.max(0, to), res.length);
      res.splice(dest, 0, item);
    }
    return res;
  };

  const orderGalleryItemsBySrc = (
    items: GalleryItem[],
    desiredSrcOrder: string[],
    includeRemaining = true
  ) => {
    const remaining = items.slice();
    const ordered: GalleryItem[] = [];

    for (const src of desiredSrcOrder) {
      const index = remaining.findIndex((item) => item.src === src);
      if (index >= 0) {
        ordered.push(remaining.splice(index, 1)[0]);
      }
    }

    return includeRemaining ? [...ordered, ...remaining] : ordered;
  };

  const getCarlaDesiredSrcOrder = (atm: AtmosphereType): string[] => {
    const fullOrder = [
      proyectoCarlaExteriorAnochecer,
      proyectoCarlaExteriorAtardecer,
      proyectoCarlaExteriorAmanecer,
      proyectoCarlaExteriorLateralAnochecer,
      proyectoCarlaExteriorLateralAtardecer,
      proyectoCarlaExteriorLateralAmanecer,
      proyectoCarlaExteriorContrafachadaAnochecer,
      proyectoCarlaContrafachadaAmanecer,
      proyectoCarlaContrafachadaAnochecer,
      proyectoCarlaContrafachadaAtardecer,
      proyectoCarlaContrafachadaLateralAmanecer,
      proyectoCarlaExteriorHallAnochecer,
      proyectoCarlaExtHallAtardecer,
      proyectoCarlaHallAmanecer,
      proyectoCarlaInterior02,
      proyectoCarlaParrillaAnochecer,
      proyectoCarlaParrillaAmanecer,
    ];

    if (atm === "todos") {
      return fullOrder;
    }

    if (atm === "anochecer") {
      return [
        proyectoCarlaExteriorAnochecer,
        proyectoCarlaExteriorLateralAnochecer,
        proyectoCarlaExteriorContrafachadaAnochecer,
        proyectoCarlaContrafachadaAnochecer,
        proyectoCarlaExteriorHallAnochecer,
        proyectoCarlaInterior02,
        proyectoCarlaParrillaAnochecer,
      ];
    }

    if (atm === "atardecer") {
      return [
        proyectoCarlaExteriorAtardecer,
        proyectoCarlaExteriorLateralAtardecer,
        proyectoCarlaContrafachadaAtardecer,
        proyectoCarlaExtHallAtardecer,
        proyectoCarlaHallAmanecer,
        proyectoCarlaInterior02,
      ];
    }

    return [
      proyectoCarlaExteriorAmanecer,
      proyectoCarlaExteriorLateralAmanecer,
      proyectoCarlaContrafachadaAmanecer,
      proyectoCarlaContrafachadaLateralAmanecer,
      proyectoCarlaHallAmanecer,
      proyectoCarlaInterior02,
      proyectoCarlaParrillaAmanecer,
    ];
  };

  const getCasaCoffeeDesiredSrcOrder = (atm: AtmosphereType): string[] => {
    if (atm === "todos") {
      return [
        casaCoffeeExteriorAnochecer,
        casaCoffeeExteriorAtardecer,
        casaCoffeeExteriorAmanecer,
        casaCoffeeContrafachadaAnochecer,
        casaCoffeeContrafachadaAtardecer,
        casaCoffeeContrafachadaAmanecer,
        casaCoffeeInteriorLiving,
        casaCoffeeInteriorSuite,
      ];
    }

    if (atm === "anochecer") {
      return [
        casaCoffeeExteriorAnochecer,
        casaCoffeeContrafachadaAnochecer,
        casaCoffeeInteriorLiving,
        casaCoffeeInteriorSuite,
      ];
    }

    if (atm === "atardecer") {
      return [
        casaCoffeeExteriorAtardecer,
        casaCoffeeContrafachadaAtardecer,
        casaCoffeeInteriorLiving,
        casaCoffeeInteriorSuite,
      ];
    }

    return [
      casaCoffeeExteriorAmanecer,
      casaCoffeeContrafachadaAmanecer,
      casaCoffeeInteriorLiving,
      casaCoffeeInteriorSuite,
    ];
  };

  const galleryItems = isPhaseFilterProject
    ? uniqueGalleryBySrc(project.gallery ?? []).filter((item) => {
        if (piliFilter === "all") return true;
        return item.phase === piliFilter;
      })
    : project.id === "proyecto-salem"
    ? modalAtmosphere === "todos"
      ? uniqueGalleryBySrc(project.gallery ?? [])
      : (project.gallery ?? []).filter((item) => item.atmosphere === modalAtmosphere)
    : project.id === "casa-del-limonero"
    ? (project.gallery ?? []).filter(
        (item) =>
          modalAtmosphere === "todos" ||
          item.atmosphere === modalAtmosphere ||
          [delLimoneroDormitorio, delLimoneroLiving, delLimoneroOficina].includes(item.src)
      )
    : project.id === "proyecto-carla"
    ? orderGalleryItemsBySrc(
        uniqueGalleryBySrc(project.gallery ?? []),
        getCarlaDesiredSrcOrder(modalAtmosphere),
        false
      )
    : uniqueGalleryBySrc(
        project.gallery?.filter(
          (item) => modalAtmosphere === "todos" || item.atmosphere === modalAtmosphere
        ) ?? []
      );

  let reorderedGalleryItems = galleryItems;

  if (project.id === "casa-del-limonero" && modalAtmosphere === "todos") {
    reorderedGalleryItems = orderGalleryItemsBySrc(
      reorderedGalleryItems,
      [
        delLimoneroAnochecer,
        delLimoneroAtardecer,
        delLimoneroAmanecer,
        delLimoneroContrafachadaAnochecer,
        delLimoneroContrafachadaAtardecer,
        delLimoneroContrafachadaAmanecer,
        delLimoneroExteriorLateralAnochecer,
        delLimoneroExteriorLateralAtardecer,
        delLimoneroExteriorLateralAmanecer,
        delLimoneroDormitorio,
        delLimoneroLiving,
        delLimoneroOficina,
      ],
      false
    );
  }

  if (project.id === "casa-coffee") {
    reorderedGalleryItems = orderGalleryItemsBySrc(
      reorderedGalleryItems,
      getCasaCoffeeDesiredSrcOrder(modalAtmosphere),
      false
    );
  }

  // Casa Scott: user-specified mapping
  // 1 <- 2, 2 <- 3, 3 <- 1, 4 <- 6, 5 <- 4, 6 <- 5
  // zero-based final order for first 6: [1,2,0,5,3,4]
  if (project.id === "casa-scott") {
    if (modalAtmosphere === "todos") {
      if (galleryItems.length >= 6) {
        reorderedGalleryItems = [
          galleryItems[1],
          galleryItems[2],
          galleryItems[0],
          galleryItems[4],
          galleryItems[5],
          galleryItems[3],
          ...galleryItems.slice(6),
        ];
      } else if (galleryItems.length >= 3) {
        // Fallback: rotate first three only when all images are shown
        reorderedGalleryItems = [galleryItems[1], galleryItems[2], galleryItems[0], ...galleryItems.slice(3)];
      }
    } else {
      reorderedGalleryItems = orderGalleryItemsBySrc(
        reorderedGalleryItems,
        [
          casaScottExteriorAnochecer,
          casaScottExteriorAtardecer,
          casaScottExteriorAmanecer,
          casaScottContrafachadaAnochecer,
          casaScottContrafachadaAtardecer,
          casaScottContrafachadaAmanecer,
          casaScottInteriorCocina,
          casaScottInteriorLiving,
          casaScottInteriorSuite,
        ],
        false
      );
    }
  }

  // Casa Inti: no special-case reorder here, the gallery order in project-data already defines the desired swap.
  if (project.id === "casa-inti") {
    reorderedGalleryItems = reorderedGalleryItems;
  }

  // Casa Navarro exact mapping:
  // 1 <- 3, 2 stays, 3 <- 1, 4 <- 6, 5 stays, 6 <- 4,
  // 7 <- 8, 8 <- 9, 9 <- 7, 10 <- 11, 11 <- 12, 12 <- 10
  if (project.id === "casa-navarro") {
    if (galleryItems.length >= 12) {
      reorderedGalleryItems = [
        galleryItems[2],
        galleryItems[1],
        galleryItems[0],
        galleryItems[5],
        galleryItems[4],
        galleryItems[3],
        galleryItems[7],
        galleryItems[8],
        galleryItems[6],
        galleryItems[10],
        galleryItems[11],
        galleryItems[9],
        ...galleryItems.slice(12),
      ];
    } else {
      reorderedGalleryItems = applyMoves(reorderedGalleryItems, [
        { from: 0, to: 2 },
        { from: 2, to: 0 },
        { from: 3, to: 5 },
        { from: 5, to: 3 },
      ]);
    }
  }

  // Proyecto CyG exact mapping by asset:
  // 1=Anochecer de verano, 2=Atardecer de otoño, 3=Frente_Atardecer de otoño,
  // 4=Amanecer de primavera, 5=Anochecer de verano_Contrafrente,
  // 6=CasaCyG-Contrafachada_Atardecer de Otoño,
  // 7=CasaCyG-Contrafachada_Amanecer de Primavera
  if (project.id === "proyecto-cyg") {
    if (galleryItems.length >= 7) {
      reorderedGalleryItems = [
        galleryItems[1],
        galleryItems[4],
        galleryItems[5],
        galleryItems[0],
        galleryItems[2],
        galleryItems[6],
        galleryItems[3],
        ...galleryItems.slice(7),
      ];
    } else {
      reorderedGalleryItems = applyMoves(reorderedGalleryItems, [
        { from: 1, to: 0 },
        { from: 4, to: 1 },
        { from: 5, to: 2 },
        { from: 0, to: 3 },
        { from: 2, to: 4 },
      ]);
    }
  }

  if (project.id === "proyecto-salem") {
    const desiredSrcOrder =
      modalAtmosphere === "anochecer"
        ? [
            salemFrenteAnochecer,
            salemFrenteLateralExteriorAnochecer,
            salemInterior,
            salemInteriorLateral,
            salemBufet,
          ]
        : modalAtmosphere === "atardecer"
          ? [
              salemFrenteAtardecer,
              salemFrenteLateralExteriorAtardecer,
              salemInterior,
              salemInteriorLateral,
              salemBufet,
            ]
          : modalAtmosphere === "amanecer"
            ? [
                salemFrenteAmanecer,
                salemFrenteLateralExteriorAmanecer,
                salemInterior,
                salemInteriorLateral,
                salemBufet,
              ]
            : [
                salemFrenteAnochecer,
                salemFrenteAtardecer,
                salemFrenteAmanecer,
                salemFrenteLateralExteriorAnochecer,
                salemFrenteLateralExteriorAtardecer,
                salemFrenteLateralExteriorAmanecer,
                salemInterior,
                salemInteriorLateral,
                salemBufet,
                salemInterior,
                salemInteriorLateral,
                salemBufet,
                salemInterior,
                salemInteriorLateral,
                salemBufet,
              ];

    reorderedGalleryItems = desiredSrcOrder
      .map((src) => reorderedGalleryItems.find((item) => item.src === src))
      .filter((item): item is (typeof reorderedGalleryItems)[number] => Boolean(item));

    const rest = reorderedGalleryItems.filter((item) => !desiredSrcOrder.includes(item.src));
    reorderedGalleryItems = [...reorderedGalleryItems, ...rest];
  }

  if (project.id === "proyecto-motoquero") {
    const desiredSrcOrder =
      modalAtmosphere === "anochecer"
        ? [
            motoqueroExteriorAnochecer,
            motoqueroInteriorTaller,
            motoqueroInteriorTaller2,
            motoqueroInteriorTaller3,
            motoqueroInteriorTienda,
          ]
        : modalAtmosphere === "atardecer"
          ? [
              motoqueroExteriorAtardecer,
              motoqueroInteriorTaller,
              motoqueroInteriorTaller2,
              motoqueroInteriorTaller3,
              motoqueroInteriorTienda,
            ]
          : modalAtmosphere === "amanecer"
            ? [
                motoqueroExteriorAmanecer,
                motoqueroInteriorTaller,
                motoqueroInteriorTaller2,
                motoqueroInteriorTaller3,
                motoqueroInteriorTienda,
              ]
            : [
                motoqueroExteriorAnochecer,
                motoqueroExteriorAtardecer,
                motoqueroExteriorAmanecer,
                motoqueroInteriorTaller,
                motoqueroInteriorTaller2,
                motoqueroInteriorTaller3,
                motoqueroInteriorTienda,
              ];

    reorderedGalleryItems = desiredSrcOrder
      .map((src) => reorderedGalleryItems.find((item) => item.src === src))
      .filter((item): item is (typeof reorderedGalleryItems)[number] => Boolean(item));

    const rest = reorderedGalleryItems.filter((item) => !desiredSrcOrder.includes(item.src));
    reorderedGalleryItems = [...reorderedGalleryItems, ...rest];
  }

  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const [atmosphereError, setAtmosphereError] = useState<string | null>(null);
  const [desiredActiveSrc, setDesiredActiveSrc] = useState<string | null>(null);
  const [preserveActiveSlide, setPreserveActiveSlide] = useState(false);
  const skipActiveSlideResetRef = useRef(false);
  const activeIndex = reorderedGalleryItems.length > 0 ? activeSlide % reorderedGalleryItems.length : 0;

  const delLimoneroSrcTargets: Record<
    string,
    Record<Exclude<AtmosphereType, "todos">, string>
  > = {
    [delLimoneroContrafachadaAmanecer]: {
      anochecer: delLimoneroContrafachadaAnochecer,
      atardecer: delLimoneroContrafachadaAtardecer,
      amanecer: delLimoneroContrafachadaAmanecer,
    },
    [delLimoneroContrafachadaAnochecer]: {
      anochecer: delLimoneroContrafachadaAnochecer,
      atardecer: delLimoneroContrafachadaAtardecer,
      amanecer: delLimoneroContrafachadaAmanecer,
    },
    [delLimoneroContrafachadaAtardecer]: {
      anochecer: delLimoneroContrafachadaAnochecer,
      atardecer: delLimoneroContrafachadaAtardecer,
      amanecer: delLimoneroContrafachadaAmanecer,
    },
    [delLimoneroExteriorLateralAmanecer]: {
      anochecer: delLimoneroExteriorLateralAnochecer,
      atardecer: delLimoneroExteriorLateralAtardecer,
      amanecer: delLimoneroExteriorLateralAmanecer,
    },
    [delLimoneroExteriorLateralAnochecer]: {
      anochecer: delLimoneroExteriorLateralAnochecer,
      atardecer: delLimoneroExteriorLateralAtardecer,
      amanecer: delLimoneroExteriorLateralAmanecer,
    },
    [delLimoneroExteriorLateralAtardecer]: {
      anochecer: delLimoneroExteriorLateralAnochecer,
      atardecer: delLimoneroExteriorLateralAtardecer,
      amanecer: delLimoneroExteriorLateralAmanecer,
    },
    [delLimoneroAmanecer]: {
      anochecer: delLimoneroAnochecer,
      atardecer: delLimoneroAtardecer,
      amanecer: delLimoneroAmanecer,
    },
    [delLimoneroAnochecer]: {
      anochecer: delLimoneroAnochecer,
      atardecer: delLimoneroAtardecer,
      amanecer: delLimoneroAmanecer,
    },
    [delLimoneroAtardecer]: {
      anochecer: delLimoneroAnochecer,
      atardecer: delLimoneroAtardecer,
      amanecer: delLimoneroAmanecer,
    },
    [delLimoneroDormitorio]: {
      anochecer: delLimoneroDormitorio,
      atardecer: delLimoneroDormitorio,
      amanecer: delLimoneroDormitorio,
    },
    [delLimoneroLiving]: {
      anochecer: delLimoneroLiving,
      atardecer: delLimoneroLiving,
      amanecer: delLimoneroLiving,
    },
    [delLimoneroOficina]: {
      anochecer: delLimoneroOficina,
      atardecer: delLimoneroOficina,
      amanecer: delLimoneroOficina,
    },
  };

  const casaIntiSrcTargets: Record<
    string,
    Record<Exclude<AtmosphereType, "todos">, string>
  > = {
    [casaIntiExteriorAmanecer]: {
      anochecer: casaIntiExteriorAnochecer,
      atardecer: casaIntiExteriorAtardecer,
      amanecer: casaIntiExteriorAmanecer,
    },
    [casaIntiExteriorAtardecer]: {
      anochecer: casaIntiExteriorAnochecer,
      atardecer: casaIntiExteriorAtardecer,
      amanecer: casaIntiExteriorAmanecer,
    },
    [casaIntiExteriorAnochecer]: {
      anochecer: casaIntiExteriorAnochecer,
      atardecer: casaIntiExteriorAtardecer,
      amanecer: casaIntiExteriorAmanecer,
    },
    [casaIntiContrafachadaAmanecer]: {
      anochecer: casaIntiContrafachadaAnochecer,
      atardecer: casaIntiContrafachadaAtardecer,
      amanecer: casaIntiContrafachadaAmanecer,
    },
    [casaIntiContrafachadaAtardecer]: {
      anochecer: casaIntiContrafachadaAnochecer,
      atardecer: casaIntiContrafachadaAtardecer,
      amanecer: casaIntiContrafachadaAmanecer,
    },
    [casaIntiContrafachadaAnochecer]: {
      anochecer: casaIntiContrafachadaAnochecer,
      atardecer: casaIntiContrafachadaAtardecer,
      amanecer: casaIntiContrafachadaAmanecer,
    },
    [casaIntiInterior]: {
      anochecer: casaIntiInterior,
      atardecer: casaIntiInterior,
      amanecer: casaIntiInterior,
    },
    [casaIntiInteriorCocina]: {
      anochecer: casaIntiInteriorCocina,
      atardecer: casaIntiInteriorCocina,
      amanecer: casaIntiInteriorCocina,
    },
    [casaIntiInteriorLiving]: {
      anochecer: casaIntiInteriorLiving,
      atardecer: casaIntiInteriorLiving,
      amanecer: casaIntiInteriorLiving,
    },
    [casaIntiInteriorLiving02]: {
      anochecer: casaIntiInteriorLiving02,
      atardecer: casaIntiInteriorLiving02,
      amanecer: casaIntiInteriorLiving02,
    },
  };

  const casaCoffeeSrcTargets: Record<
    string,
    Record<Exclude<AtmosphereType, "todos">, string>
  > = {
    [casaCoffeeExteriorAmanecer]: {
      anochecer: casaCoffeeExteriorAnochecer,
      atardecer: casaCoffeeExteriorAtardecer,
      amanecer: casaCoffeeExteriorAmanecer,
    },
    [casaCoffeeExteriorAtardecer]: {
      anochecer: casaCoffeeExteriorAnochecer,
      atardecer: casaCoffeeExteriorAtardecer,
      amanecer: casaCoffeeExteriorAmanecer,
    },
    [casaCoffeeExteriorAnochecer]: {
      anochecer: casaCoffeeExteriorAnochecer,
      atardecer: casaCoffeeExteriorAtardecer,
      amanecer: casaCoffeeExteriorAmanecer,
    },
    [casaCoffeeContrafachadaAmanecer]: {
      anochecer: casaCoffeeContrafachadaAnochecer,
      atardecer: casaCoffeeContrafachadaAtardecer,
      amanecer: casaCoffeeContrafachadaAmanecer,
    },
    [casaCoffeeContrafachadaAtardecer]: {
      anochecer: casaCoffeeContrafachadaAnochecer,
      atardecer: casaCoffeeContrafachadaAtardecer,
      amanecer: casaCoffeeContrafachadaAmanecer,
    },
    [casaCoffeeContrafachadaAnochecer]: {
      anochecer: casaCoffeeContrafachadaAnochecer,
      atardecer: casaCoffeeContrafachadaAtardecer,
      amanecer: casaCoffeeContrafachadaAmanecer,
    },
    [casaCoffeeInteriorLiving]: {
      anochecer: casaCoffeeInteriorLiving,
      atardecer: casaCoffeeInteriorLiving,
      amanecer: casaCoffeeInteriorLiving,
    },
    [casaCoffeeInteriorSuite]: {
      anochecer: casaCoffeeInteriorSuite,
      atardecer: casaCoffeeInteriorSuite,
      amanecer: casaCoffeeInteriorSuite,
    },
  };

  const getCasaIntiOrderedGalleryItems = (atm: AtmosphereType) => {
    return (project.gallery ?? []).filter(
      (item) => atm === "todos" || item.atmosphere === atm
    );
  };

  const getCasaCoffeeOrderedGalleryItems = (atm: AtmosphereType) => {
    return orderGalleryItemsBySrc(
      (project.gallery ?? []).filter(
        (item) => atm === "todos" || item.atmosphere === atm
      ),
      getCasaCoffeeDesiredSrcOrder(atm),
      false
    );
  };

  const getCasaScottOrderedGalleryItems = (atm: AtmosphereType) => {
    const filtered = orderGalleryItemsBySrc(
      (project.gallery ?? []).filter((item) => atm === "todos" || item.atmosphere === atm),
      [
        casaScottExteriorAnochecer,
        casaScottExteriorAtardecer,
        casaScottExteriorAmanecer,
        casaScottContrafachadaAnochecer,
        casaScottContrafachadaAtardecer,
        casaScottContrafachadaAmanecer,
        casaScottInteriorCocina,
        casaScottInteriorLiving,
        casaScottInteriorSuite,
      ],
      false
    );

    if (atm === "todos") {
      if (filtered.length >= 6) {
        return [
          filtered[1],
          filtered[2],
          filtered[0],
          filtered[4],
          filtered[5],
          filtered[3],
          ...filtered.slice(6),
        ];
      }

      if (filtered.length >= 3) {
        return [filtered[1], filtered[2], filtered[0], ...filtered.slice(3)];
      }
    }

    return filtered;
  };

  const getCasaBonziTargetSrc = (src?: string, targetPhase?: "antes" | "despues"): string | null => {
    if (!src || !targetPhase) return null;

    const bonziPairs: Record<string, string> = {
      [casaBonziBanio01Antes]: casaBonziBanio01Despues,
      [casaBonziBanio02Antes]: casaBonziBanio02Despues,
      [casaBonziCocina01Antes]: casaBonziCocina01Despues,
      [casaBonziCocina02Antes]: casaBonziCocina02Despues,
      [casaBonziComedorAntes]: casaBonziComedorDespues,
      [casaBonziLivingAntes]: casaBonziLivingDespues,
      [casaBonziTerraza01Antes]: casaBonziTerraza01Despues,
      [casaBonziTerraza02Antes]: casaBonziTerraza02Despues,
      [casaBonziTerraza03Antes]: casaBonziTerraza03Despues,
    };

    const counterpart = bonziPairs[src] ?? Object.entries(bonziPairs).find(([, after]) => after === src)?.[0];
    const isAntes = Object.keys(bonziPairs).includes(src);
    const isDespues = Object.values(bonziPairs).includes(src);

    if (targetPhase === "antes") {
      if (isAntes) return src;
      return counterpart ?? null;
    }

    if (targetPhase === "despues") {
      if (isDespues) return src;
      return counterpart ?? null;
    }

    return null;
  };

  const createThreeWayAtmosphereMap = (
    anochecerSrc: string,
    atardecerSrc: string,
    amanecerSrc: string
  ) => ({
    [anochecerSrc]: { anochecer: anochecerSrc, atardecer: atardecerSrc, amanecer: amanecerSrc },
    [atardecerSrc]: { anochecer: anochecerSrc, atardecer: atardecerSrc, amanecer: amanecerSrc },
    [amanecerSrc]: { anochecer: anochecerSrc, atardecer: atardecerSrc, amanecer: amanecerSrc },
  });

  const getProjectAlwaysVisibleSrcs = (projectId: string) => {
    if (projectId === "casa-del-limonero") {
      return [delLimoneroDormitorio, delLimoneroLiving, delLimoneroOficina];
    }

    if (projectId === "casa-coffee") {
      return [casaCoffeeInteriorLiving, casaCoffeeInteriorSuite];
    }

    if (projectId === "casa-inti") {
      return [
        casaIntiInterior,
        casaIntiInteriorCocina,
        casaIntiInteriorLiving,
        casaIntiInteriorLiving02,
      ];
    }

    if (projectId === "casa-scott") {
      return [
        casaScottInteriorCocina,
        casaScottInteriorLiving,
        casaScottInteriorSuite,
      ];
    }

    return [];
  };

  const casaIntiInteriorSrcs = [
    casaIntiInteriorCocina,
    casaIntiInteriorLiving,
    casaIntiInteriorLiving02,
    casaIntiInterior,
  ];

  const casaCoffeeInteriorSrcs = [
    casaCoffeeInteriorLiving,
    casaCoffeeInteriorSuite,
  ];

  const casaScottInteriorSrcs = [
    casaScottInteriorCocina,
    casaScottInteriorLiving,
    casaScottInteriorSuite,
  ];

  const getSceneKey = (label: LocalizedString) => {
    const text = (label.es || label.en || label.pt || "").toLowerCase();
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  };

  const getAtmosphereSceneKey = (label: LocalizedString) => {
    return getSceneKey(label)
      .replace(/\b(antes|despues|después|depois|before|after)\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const getProjectAtmosphereTargetSrc = (
    projectId: string,
    currentSrc?: string,
    targetAtmosphere?: AtmosphereType,
    gallery?: GalleryItem[]
  ): string | null => {
    if (!currentSrc || !targetAtmosphere || targetAtmosphere === "todos") return null;

    const alwaysVisible = getProjectAlwaysVisibleSrcs(projectId);
    if (alwaysVisible.includes(currentSrc)) return currentSrc;

    const currentItem = gallery?.find((item) => item.src === currentSrc);
    if (
      projectId === "casa-coffee" &&
      [casaCoffeeInteriorLiving, casaCoffeeInteriorSuite].includes(currentSrc)
    ) {
      return currentSrc;
    }

    if (currentItem) {
      if (currentItem.atmosphere === targetAtmosphere) return currentSrc;

      const currentSceneKey = getAtmosphereSceneKey(currentItem.label);
      const targetItem = gallery?.find(
        (item) =>
          item.atmosphere === targetAtmosphere && getAtmosphereSceneKey(item.label) === currentSceneKey
      );
      if (targetItem) return targetItem.src;
    }

    const targetMap: Record<
      string,
      Record<string, Record<Exclude<AtmosphereType, "todos">, string>>
    > = {
      "casa-inti": {
        ...createThreeWayAtmosphereMap(casaIntiExteriorAnochecer, casaIntiExteriorAtardecer, casaIntiExteriorAmanecer),
        ...createThreeWayAtmosphereMap(casaIntiContrafachadaAnochecer, casaIntiContrafachadaAtardecer, casaIntiContrafachadaAmanecer),
        [casaIntiInterior]: {
          anochecer: casaIntiInterior,
          atardecer: casaIntiInterior,
          amanecer: casaIntiInterior,
        },
        [casaIntiInteriorCocina]: {
          anochecer: casaIntiInteriorCocina,
          atardecer: casaIntiInteriorCocina,
          amanecer: casaIntiInteriorCocina,
        },
        [casaIntiInteriorLiving]: {
          anochecer: casaIntiInteriorLiving,
          atardecer: casaIntiInteriorLiving,
          amanecer: casaIntiInteriorLiving,
        },
        [casaIntiInteriorLiving02]: {
          anochecer: casaIntiInteriorLiving02,
          atardecer: casaIntiInteriorLiving02,
          amanecer: casaIntiInteriorLiving02,
        },
      },
      "casa-coffee": {
        ...createThreeWayAtmosphereMap(casaCoffeeExteriorAnochecer, casaCoffeeExteriorAtardecer, casaCoffeeExteriorAmanecer),
        ...createThreeWayAtmosphereMap(casaCoffeeContrafachadaAnochecer, casaCoffeeContrafachadaAtardecer, casaCoffeeContrafachadaAmanecer),
        [casaCoffeeInteriorLiving]: {
          anochecer: casaCoffeeInteriorLiving,
          atardecer: casaCoffeeInteriorLiving,
          amanecer: casaCoffeeInteriorLiving,
        },
        [casaCoffeeInteriorSuite]: {
          anochecer: casaCoffeeInteriorSuite,
          atardecer: casaCoffeeInteriorSuite,
          amanecer: casaCoffeeInteriorSuite,
        },
      },
      "casa-scott": {
        ...createThreeWayAtmosphereMap(casaScottExteriorAnochecer, casaScottExteriorAtardecer, casaScottExteriorAmanecer),
        ...createThreeWayAtmosphereMap(casaScottContrafachadaAnochecer, casaScottContrafachadaAtardecer, casaScottContrafachadaAmanecer),
        [casaScottInteriorCocina]: {
          anochecer: casaScottInteriorCocina,
          atardecer: casaScottInteriorCocina,
          amanecer: casaScottInteriorCocina,
        },
        [casaScottInteriorLiving]: {
          anochecer: casaScottInteriorLiving,
          atardecer: casaScottInteriorLiving,
          amanecer: casaScottInteriorLiving,
        },
        [casaScottInteriorSuite]: {
          anochecer: casaScottInteriorSuite,
          atardecer: casaScottInteriorSuite,
          amanecer: casaScottInteriorSuite,
        },
      },
      "casa-navarro": {
        ...createThreeWayAtmosphereMap(casaNavarroExteriorAnochecer, casaNavarroExteriorAtardecer, casaNavarroExteriorAmanecer),
        ...createThreeWayAtmosphereMap(casaNavarroExteriorContrafrenteAnochecer, casaNavarroExteriorContrafrenteAtardecer, casaNavarroExteriorContrafrenteAmanecer),
        ...createThreeWayAtmosphereMap(casaNavarroExteriorGaleriaAnochecer, casaNavarroExteriorGaleriaAtardecer, casaNavarroExteriorGaleriaAmanecer),
        ...createThreeWayAtmosphereMap(casaNavarroExteriorLateralAnochecer, casaNavarroExteriorLateralAtardecer, casaNavarroExteriorLateralAmanecer),
      },
      "proyecto-cyg": {
        ...createThreeWayAtmosphereMap(cAnochecer, cAtardecer, cAmanecer),
        ...createThreeWayAtmosphereMap(cAnochecerBack, cContrafachadaAtardecer, cContrafachadaAmanecer),
        [cAtardecerFrente]: { anochecer: cAnochecer, atardecer: cAtardecer, amanecer: cAmanecer },
      },
      "proyecto-carla": {
        ...createThreeWayAtmosphereMap(proyectoCarlaExteriorAnochecer, proyectoCarlaExteriorAtardecer, proyectoCarlaExteriorAmanecer),
        ...createThreeWayAtmosphereMap(proyectoCarlaExteriorLateralAnochecer, proyectoCarlaExteriorLateralAtardecer, proyectoCarlaExteriorLateralAmanecer),
        ...createThreeWayAtmosphereMap(proyectoCarlaExteriorContrafachadaAnochecer, proyectoCarlaContrafachadaAtardecer, proyectoCarlaContrafachadaAmanecer),
        ...createThreeWayAtmosphereMap(proyectoCarlaExteriorHallAnochecer, proyectoCarlaExtHallAtardecer, proyectoCarlaHallAmanecer),
        [proyectoCarlaInterior02]: { anochecer: proyectoCarlaInterior02, atardecer: proyectoCarlaInterior02, amanecer: proyectoCarlaInterior02 },
        [proyectoCarlaParrillaAnochecer]: { anochecer: proyectoCarlaParrillaAnochecer, atardecer: proyectoCarlaParrillaAnochecer, amanecer: proyectoCarlaParrillaAmanecer },
        [proyectoCarlaParrillaAmanecer]: { anochecer: proyectoCarlaParrillaAnochecer, atardecer: proyectoCarlaParrillaAmanecer, amanecer: proyectoCarlaParrillaAmanecer },
        [proyectoCarlaContrafachadaLateralAmanecer]: {
          anochecer: proyectoCarlaContrafachadaLateralAmanecer,
          atardecer: proyectoCarlaContrafachadaLateralAmanecer,
          amanecer: proyectoCarlaContrafachadaLateralAmanecer,
        },
      },
      "proyecto-salem": {
        ...createThreeWayAtmosphereMap(salemFrenteAnochecer, salemFrenteAtardecer, salemFrenteAmanecer),
        ...createThreeWayAtmosphereMap(salemFrenteLateralExteriorAnochecer, salemFrenteLateralExteriorAtardecer, salemFrenteLateralExteriorAmanecer),
      },
      "proyecto-motoquero": {
        ...createThreeWayAtmosphereMap(motoqueroExteriorAnochecer, motoqueroExteriorAtardecer, motoqueroExteriorAmanecer),
      },
      "proyecto-z": {
        ...createThreeWayAtmosphereMap(zAnochecerFrente, zAtardecerJpg, zAmanecer),
        ...createThreeWayAtmosphereMap(zAnochecerExterior, zAtardecerExterior, zAmanecerExterior),
        ...createThreeWayAtmosphereMap(zAnochecerCF, zAtardecer, zContrafachadaAmanecer),
      },
    };

    return targetMap[projectId]?.[currentSrc]?.[targetAtmosphere] ?? null;
  };

  const getDelLimoneroOrderedGalleryItems = (atm: AtmosphereType) => {
    return (project.gallery ?? []).filter(
      (item) =>
        atm === "todos" ||
        item.atmosphere === atm ||
        [delLimoneroDormitorio, delLimoneroLiving, delLimoneroOficina].includes(item.src)
    );
  };

  const getCurrentSrcInTargetAtmosphere = (
    currentSrc?: string,
    targetAtmosphere?: AtmosphereType
  ) => {
    if (!currentSrc || !targetAtmosphere || targetAtmosphere === "todos") return null;
    return (project.gallery ?? []).some(
      (item) => item.src === currentSrc && item.atmosphere === targetAtmosphere
    )
      ? currentSrc
      : null;
  };

  const handleAtmosphereChange = (atm: AtmosphereType) => {
    const currentSrc = reorderedGalleryItems[activeIndex]?.src ?? galleryItems[activeIndex]?.src;
    if (atm === "todos") {
      const shouldKeepCurrentInterior =
        ["casa-coffee", "casa-inti", "casa-scott"].includes(project.id) &&
        getProjectAlwaysVisibleSrcs(project.id).includes(currentSrc);

      setPreserveActiveSlide(shouldKeepCurrentInterior);
      setDesiredActiveSrc(shouldKeepCurrentInterior ? currentSrc : null);
      setModalAtmosphere(atm);
      setAtmosphereError(null);
      return;
    }

    const hasAtmosphere = (project.gallery ?? []).some((item) => item.atmosphere === atm);
    if (!hasAtmosphere) {
      setAtmosphereError(t.projects.modal.atmosphereUnavailable);
      return;
    }

    if (project.id === "casa-bonzi") {
      const targetPhase = atm === "anochecer" ? "despues" : atm === "amanecer" ? "antes" : null;
      if (targetPhase) {
        const targetSrc = getCasaBonziTargetSrc(currentSrc, targetPhase);
        setPreserveActiveSlide(Boolean(targetSrc));
        setDesiredActiveSrc(targetSrc);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else if (project.id === "casa-del-limonero") {
      const targetSrc = currentSrc ? delLimoneroSrcTargets[currentSrc]?.[atm] ?? null : null;

      if (targetSrc) {
        const targetItems = getDelLimoneroOrderedGalleryItems(atm);
        const targetIndex = targetItems.findIndex((item) => item.src === targetSrc);

        if (targetIndex >= 0) {
          setActiveSlide(targetIndex);
          setPreserveActiveSlide(true);
        } else {
          setActiveSlide(0);
          setPreserveActiveSlide(false);
        }

        setDesiredActiveSrc(null);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else if (project.id === "casa-inti") {
      const targetSrc = currentSrc
        ? casaIntiSrcTargets[currentSrc]?.[atm] ?? null
        : null;

      if (targetSrc) {
        const targetItems = (project.gallery ?? []).filter((item) => item.atmosphere === atm);
        const targetIndex = targetItems.findIndex((item) => item.src === targetSrc);

        if (targetIndex >= 0) {
          setActiveSlide(targetIndex);
          setPreserveActiveSlide(true);
        } else {
          setActiveSlide(0);
          setPreserveActiveSlide(false);
        }

        setDesiredActiveSrc(null);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else if (project.id === "casa-coffee") {
      const targetSrc = currentSrc
        ? casaCoffeeSrcTargets[currentSrc]?.[atm] ?? null
        : null;

      if (targetSrc) {
        const targetItems = getCasaCoffeeOrderedGalleryItems(atm);
        const targetIndex = targetItems.findIndex((item) => item.src === targetSrc);

        if (targetIndex >= 0) {
          setActiveSlide(targetIndex);
          setPreserveActiveSlide(true);
        } else {
          setActiveSlide(0);
          setPreserveActiveSlide(false);
        }

        setDesiredActiveSrc(null);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else if (project.id === "casa-scott") {
      const shouldKeepInterior = getProjectAlwaysVisibleSrcs(project.id).includes(currentSrc);
      const targetSrc = shouldKeepInterior || getCurrentSrcInTargetAtmosphere(currentSrc, atm)
        ? currentSrc
        : getProjectAtmosphereTargetSrc(project.id, currentSrc, atm, project.gallery);

      if (targetSrc) {
        const targetItems = getCasaScottOrderedGalleryItems(atm);
        const targetIndex = targetItems.findIndex((item) => item.src === targetSrc);

        if (targetIndex >= 0) {
          setActiveSlide(targetIndex);
          setPreserveActiveSlide(true);
        } else {
          setActiveSlide(0);
          setPreserveActiveSlide(false);
        }

        setDesiredActiveSrc(null);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else if (
      [
        "casa-navarro",
        "proyecto-cyg",
        "proyecto-carla",
        "proyecto-salem",
        "proyecto-motoquero",
        "proyecto-z",
      ].includes(project.id)
    ) {
      const targetSrc = getProjectAtmosphereTargetSrc(project.id, currentSrc, atm, project.gallery);
      if (targetSrc) {
        setPreserveActiveSlide(true);
        setDesiredActiveSrc(targetSrc);
      } else {
        setPreserveActiveSlide(false);
        setDesiredActiveSrc(null);
      }
    } else {
      setPreserveActiveSlide(false);
      setDesiredActiveSrc(null);
    }

    setModalAtmosphere(atm);
    setAtmosphereError(null);
  };

  useEffect(() => {
    setModalAtmosphere(selectedAtmosphere);
  }, [selectedAtmosphere]);

  useEffect(() => {
    if (!atmosphereError) return;
    const timeout = window.setTimeout(() => setAtmosphereError(null), 3000);
    return () => window.clearTimeout(timeout);
  }, [atmosphereError]);

  useEffect(() => {
    if (isPhaseFilterProject) {
      setPiliFilter("all");
    }
  }, [isPhaseFilterProject, project.id]);

  useEffect(() => {
    if (skipActiveSlideResetRef.current) {
      skipActiveSlideResetRef.current = false;
      return;
    }

    if (galleryItems.length === 0) {
      setActiveSlide(0);
      setExpandedImageIndex(null);
      return;
    }

    if (isPhaseFilterProject) {
      setActiveSlide((prev) => Math.min(prev, galleryItems.length - 1));
      setExpandedImageIndex((prev) =>
        prev === null ? null : Math.min(prev, galleryItems.length - 1)
      );
    } else if (!preserveActiveSlide && !desiredActiveSrc) {
      setActiveSlide(0);
      setExpandedImageIndex(null);
    }
  }, [
    modalAtmosphere,
    piliFilter,
    galleryItems.length,
    isPhaseFilterProject,
    desiredActiveSrc,
    preserveActiveSlide,
  ]);

  useEffect(() => {
    if (!desiredActiveSrc) return;
    if (reorderedGalleryItems.length === 0) return;

    const nextIndex = reorderedGalleryItems.findIndex((item) => item.src === desiredActiveSrc);

    setActiveSlide(nextIndex >= 0 ? nextIndex : 0);
    setPreserveActiveSlide(false);
    setDesiredActiveSrc(null);
  }, [desiredActiveSrc, reorderedGalleryItems]);

  useEffect(() => {
    setActiveSlide(0);
  }, [project.id, selectedAtmosphere]);

  const activeItem = reorderedGalleryItems[activeIndex] ?? reorderedGalleryItems[0];
  if (!activeItem) return null;

  // If an image is expanded, show the expanded view
  if (expandedImageIndex !== null) {
    const expandedItem = reorderedGalleryItems[expandedImageIndex];
    if (!expandedItem) return null;
    return (
      <div
        className="fixed inset-0 z-90 bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
        onClick={() => setExpandedImageIndex(null)}
      >
        <div
          className="relative max-w-full max-h-[90vh] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setExpandedImageIndex(null)}
            aria-label={t.projects.modal.close}
            className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black whitespace-nowrap"
          >
            {t.projects.modal.close}
          </button>
          <img
            src={expandedItem.src}
            alt={expandedItem.label[language]}
            className={`max-w-full max-h-full ${expandedItem.imageClassName ?? "object-contain"}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-80 bg-brand-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {galleryItems.length > 0 ? (
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.modal.close}
              className="text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black whitespace-nowrap"
            >
              {t.projects.modal.close}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onClose}
            aria-label={t.projects.modal.close}
            className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black whitespace-nowrap"
          >
            {t.projects.modal.close}
          </button>
        )}
        {galleryItems.length > 0 ? (
          <div className="w-full">
            <div
              className="overflow-hidden h-90 sm:h-105 bg-brand-light cursor-pointer group"
              onClick={() => setExpandedImageIndex(activeIndex)}
            >
              <img
                src={activeItem.src}
                alt={activeItem.label[language]}
                className={`w-full h-full ${activeItem.imageClassName ?? "object-cover"} transition-transform group-hover:scale-105`}
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
                {isPhaseFilterProject ? (
                  pilisFilterButtons.map((button) => {
                    const isActive = piliFilter === button.key;
                    return (
                      <button
                        key={button.key}
                        type="button"
                        onClick={() => handlePiliFilterChange(button.key)}
                        title={button.label}
                        aria-label={button.label}
                        className={`relative rounded-none border px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition ${
                          isActive
                            ? "bg-brand-black text-white shadow-sm ring-2 ring-brand-black ring-offset-2"
                            : "bg-white text-brand-black hover:bg-brand-black hover:text-white"
                        }`}
                      >
                        {button.label}
                      </button>
                    );
                  })
                ) : (
                  atmosphereButtons
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
                          onClick={() => handleAtmosphereChange(atm.key)}
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
                    })
                )}
              </div>
              {atmosphereError ? (
                <div className="mt-3 text-center text-sm text-red-600">
                  {atmosphereError}
                </div>
              ) : null}
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


