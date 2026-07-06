import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";
import delLimoneroAtardecer from "@/assets/Casas/Del Limonero/Exterior_Atardecer de otoño.jpeg";
import delLimoneroAmanecer from "@/assets/Casas/Del Limonero/Exterior_Amanecer de primavera.jpeg";
import delLimoneroAnochecer from "@/assets/Casas/Del Limonero/Exterior_Anochecer de verano.jpeg";
import delLimoneroExteriorGaleria from "@/assets/Casas/Del Limonero/CasaDelLimonero-Exterior_Galería.png";
import delLimoneroExteriorLateralAtardecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Atardecer de Otoño.png";
import delLimoneroExteriorLateralAnochecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Anochecer de Verano.png";
import delLimoneroExteriorLateralAmanecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Exterior Lateral_Amanecer de Primavera.png";
import delLimoneroContrafachadaAmanecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Amanecer de Primavera.png";
import delLimoneroContrafachadaAnochecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Anochecer de Invierno.png";
import delLimoneroContrafachadaAtardecer from "@/assets/Casas/Del Limonero/Casa del Limonero-Contrafachada_Atardecer de Otoño..png";
import delLimoneroDormitorio from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Dormitorio.png";
import delLimoneroLiving from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Living.png";
import delLimoneroOficina from "@/assets/Casas/Del Limonero/CasaDelLimonero-Interior_Oficina.png";
import zAmanecer from "@/assets/Proyectos/Z/Amanecer de primavera.png";
import zAmanecerCF from "@/assets/Proyectos/Z/Amanecer de primavera_CF.png";
import zAmanecerExterior from "@/assets/Proyectos/Z/Amanecer de Primavera_Exterior L.png";
import zAnochecerCF from "@/assets/Proyectos/Z/Anochecer de verano_CF.png";
import zAnochecerFrente from "@/assets/Proyectos/Z/Anochecer de verano_Frente.png";
import zAnochecerExterior from "@/assets/Proyectos/Z/Anochecer de vernano_Exterior L.png";
import zAtardecer from "@/assets/Proyectos/Z/Atardecer de otoño.png";
import zAtardecerJpg from "@/assets/Proyectos/Z/Atardecer de otoño.jpeg";
import zAtardecerExterior from "@/assets/Proyectos/Z/Atardecer de otoño_ Exterior.png";
import zContrafachadaAmanecer from "@/assets/Proyectos/Z/ProyectoZ-Contrafachada_Amanecer de Primavera..png";
import zContrafachadaAtardecer from "@/assets/Proyectos/Z/ProyectoZ-Contrafachada_Atardecer de Otoño..png";
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
import cContrafachadaAmanecer from "@/assets/Proyectos/CyG/CasaCyG-Contrafachada_Amanecer de Primavera.png";
import cContrafachadaAtardecer from "@/assets/Proyectos/CyG/CasaCyG-Contrafachada_Atardecer de Otoño.png";
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
  pt: string;
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
    label: LocalizedString;
    atmosphere: Exclude<AtmosphereType, "todos">;
    phase?: "antes" | "despues";
    isFeatured?: boolean;
    imageClassName?: string;
  }>;
  origin?: "casas" | "proyectos";
}

const uniqueGalleryBySrc = (
  gallery: Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos">; phase?: "antes" | "despues"; isFeatured?: boolean; imageClassName?: string }>
) =>
  gallery.reduce(
    (acc, item) => {
      if (!acc.some((existing) => existing.src === item.src)) {
        acc.push(item);
      }
      return acc;
    },
    [] as Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos">; phase?: "antes" | "despues"; isFeatured?: boolean; imageClassName?: string }>
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
    id: "proyecto-motoquero",
    title: {
      es: "Motoquero",
      en: "Motoquero",
      pt: "Motoquero",
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
        src: zContrafachadaAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "AMANECER PRIMAVERA",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zContrafachadaAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "FILTRO DE ATARDECER OTOÑO",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
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
  ] as Project[];

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
  const galleryItems = isPhaseFilterProject
    ? uniqueGalleryBySrc(project.gallery ?? []).filter((item) => {
        if (piliFilter === "all") return true;
        return item.phase === piliFilter;
      })
    : uniqueGalleryBySrc(
        project.gallery?.filter(
          (item) => modalAtmosphere === "todos" || item.atmosphere === modalAtmosphere
        ) ?? []
      );

  let reorderedGalleryItems = galleryItems;

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

  if (project.id === "casa-bonzi") {
    const desiredSrcOrder =
      piliFilter === "all"
        ? [
            casaBonziLivingDespues,
            casaBonziLivingAntes,
            casaBonziComedorDespues,
            casaBonziComedorAntes,
            casaBonziCocina01Despues,
            casaBonziCocina01Antes,
            casaBonziCocina02Despues,
            casaBonziCocina02Antes,
            casaBonziTerraza01Despues,
            casaBonziTerraza01Antes,
            casaBonziTerraza02Despues,
            casaBonziTerraza02Antes,
            casaBonziTerraza03Despues,
            casaBonziTerraza03Antes,
            casaBonziBanio01Despues,
            casaBonziBanio01Antes,
            casaBonziBanio02Despues,
            casaBonziBanio02Antes,
          ]
        : piliFilter === "antes"
          ? [
              casaBonziLivingAntes,
              casaBonziComedorAntes,
              casaBonziCocina01Antes,
              casaBonziCocina02Antes,
              casaBonziTerraza01Antes,
              casaBonziTerraza02Antes,
              casaBonziTerraza03Antes,
              casaBonziBanio01Antes,
              casaBonziBanio02Antes,
            ]
          : [
              casaBonziLivingDespues,
              casaBonziComedorDespues,
              casaBonziCocina01Despues,
              casaBonziCocina02Despues,
              casaBonziTerraza01Despues,
              casaBonziTerraza02Despues,
              casaBonziTerraza03Despues,
              casaBonziBanio01Despues,
              casaBonziBanio02Despues,
            ];

    reorderedGalleryItems = desiredSrcOrder
      .map((src) => reorderedGalleryItems.find((item) => item.src === src))
      .filter((item): item is (typeof reorderedGalleryItems)[number] => Boolean(item));

    const rest = reorderedGalleryItems.filter((item) => !desiredSrcOrder.includes(item.src));
    reorderedGalleryItems = [...reorderedGalleryItems, ...rest];
  }

  // Casa del Limonero exact ordering for atmosphere filters
  if (project.id === "casa-del-limonero") {
    reorderedGalleryItems = applyMoves(reorderedGalleryItems, [
      { from: 3, to: 6 },
      { from: 5, to: 6 },
    ]);

    const getOrderedItems = (desiredSrcOrder: string[]) => {
      const ordered = desiredSrcOrder
        .map((src) => reorderedGalleryItems.find((item) => item.src === src))
        .filter((item): item is typeof reorderedGalleryItems[number] => Boolean(item));
      const rest = reorderedGalleryItems.filter((item) => !desiredSrcOrder.includes(item.src));
      return [...ordered, ...rest];
    };

    if (modalAtmosphere === "anochecer") {
      reorderedGalleryItems = getOrderedItems([
        delLimoneroAnochecer,
        delLimoneroExteriorGaleria,
        delLimoneroContrafachadaAnochecer,
        delLimoneroExteriorLateralAnochecer,
        delLimoneroDormitorio,
        delLimoneroLiving,
        delLimoneroOficina,
      ]);
    }

    if (modalAtmosphere === "atardecer") {
      reorderedGalleryItems = getOrderedItems([
        delLimoneroAtardecer,
        delLimoneroContrafachadaAtardecer,
        delLimoneroExteriorLateralAtardecer,
        delLimoneroDormitorio,
        delLimoneroLiving,
        delLimoneroOficina,
      ]);
    }

    if (modalAtmosphere === "amanecer") {
      reorderedGalleryItems = getOrderedItems([
        delLimoneroAmanecer,
        delLimoneroContrafachadaAmanecer,
        delLimoneroExteriorLateralAmanecer,
        delLimoneroDormitorio,
        delLimoneroLiving,
        delLimoneroOficina,
      ]);
    }
  }

  // Casa Coffee: 1 stays, swap 2<->3, then rotate 4->5,5->6,6->4
  if (project.id === "casa-coffee") {
    if (galleryItems.length >= 6) {
      reorderedGalleryItems = [
        galleryItems[0],
        galleryItems[2],
        galleryItems[1],
        galleryItems[4],
        galleryItems[5],
        galleryItems[3],
        ...galleryItems.slice(6),
      ];
    } else if (galleryItems.length >= 3) {
      reorderedGalleryItems = [galleryItems[0], galleryItems[2], galleryItems[1], ...galleryItems.slice(3)];
    }
  }

  // Casa Scott: user-specified mapping
  // 1 <- 2, 2 <- 3, 3 <- 1, 4 <- 6, 5 <- 4, 6 <- 5
  // zero-based final order for first 6: [1,2,0,5,3,4]
  if (project.id === "casa-scott") {
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
      // Fallback: rotate first three when there are fewer than 6 items
      reorderedGalleryItems = [galleryItems[1], galleryItems[2], galleryItems[0], ...galleryItems.slice(3)];
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

  // Proyecto Z exact ordering by asset:
  // 1=Anochecer de verano_Frente, 2=Atardecer de otoño.jpeg, 3=Amanecer de primavera,
  // 4=Anochecer de vernano_Exterior L, 5=Atardecer de otoño_ Exterior,
  // 6=Amanecer de Primavera_Exterior L, 7=Anochecer de verano_CF,
  // 8=Atardecer de otoño.png, 9=Amanecer de primavera_CF,
  // 10=ProyectoZ-Contrafachada_Atardecer de Otoño., 11=ProyectoZ-Contrafachada_Amanecer de Primavera.
  if (project.id === "proyecto-z") {
    if (galleryItems.length >= 11) {
      reorderedGalleryItems = [
        galleryItems[4],
        galleryItems[9],
        galleryItems[1],
        galleryItems[5],
        galleryItems[10],
        galleryItems[2],
        galleryItems[3],
        galleryItems[0],
        galleryItems[8],
        galleryItems[7],
        galleryItems[6],
        ...galleryItems.slice(11),
      ];
    } else {
      reorderedGalleryItems = reorderedGalleryItems;
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

  // Proyecto Carla exact ordering by asset:
  // 1=Exterior-Anochecer de Verano, 2=Exterior_Atardecer de otoño,
  // 3=Exterior_Amanecer de Primavera, 4=ExteriorContraf._Anochecer de Verano,
  // 5=Contrafachada_Amanecer de Primavera, 6=Contrafachada_Anochecer de Verano,
  // 7=Contrafachada_Atardecer de Otoño, 8=ContrafachadaLateral_Amanecer de Primavera,
  // 9=ExteriorHall_Anochecer de verano, 10=Ext.Hall_Atardecer de Otoño,
  // 11=Hall_Amanecer de Primavera, 12=ExteriorLateral_Anochecer de Varano,
  // 13=ExteriorLateral_Atardecer de otoño, 14=ExteriorLateral_Amanecer de Primavera,
  // 15=Interior02, 16=Parrilla_Anochecer de Verano, 17=Interior
  if (project.id === "proyecto-carla") {
    if (galleryItems.length >= 17) {
      reorderedGalleryItems = [
        galleryItems[2],
        galleryItems[1],
        galleryItems[0],
        galleryItems[8],
        galleryItems[3],
        galleryItems[4],
        galleryItems[5],
        galleryItems[6],
        galleryItems[9],
        galleryItems[7],
        galleryItems[13],
        galleryItems[11],
        galleryItems[12],
        galleryItems[10],
        galleryItems[15],
        galleryItems[16],
        galleryItems[14],
        ...galleryItems.slice(17),
      ];
    } else {
      reorderedGalleryItems = applyMoves(reorderedGalleryItems, [
        { from: 0, to: 2 },
        { from: 2, to: 0 },
        { from: 3, to: 5 },
        { from: 4, to: 3 },
        { from: 5, to: 4 },
      ]);
    }
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
  const activeIndex = reorderedGalleryItems.length > 0 ? activeSlide % reorderedGalleryItems.length : 0;

  useEffect(() => {
    setModalAtmosphere(selectedAtmosphere);
  }, [selectedAtmosphere]);

  useEffect(() => {
    if (isPhaseFilterProject) {
      setPiliFilter("all");
    }
  }, [isPhaseFilterProject, project.id]);

  useEffect(() => {
    setActiveSlide(0);
  }, [modalAtmosphere, piliFilter, galleryItems.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [project.id, selectedAtmosphere]);

  const activeItem = reorderedGalleryItems[activeIndex];

  // If an image is expanded, show the expanded view
  if (expandedImageIndex !== null) {
    const expandedItem = reorderedGalleryItems[expandedImageIndex];
    return (
      <div
        className="fixed inset-0 z-90 bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-12"
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
            className="absolute top-2 right-2 md:right-20 z-10 text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black whitespace-nowrap"
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
                        onClick={() => setPiliFilter(button.key)}
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
                    })
                )}
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


