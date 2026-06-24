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
import cAmanecer from "@/assets/Proyectos/CyG/Amanecer de primavera.png";
import cAnochecer from "@/assets/Proyectos/CyG/Anochecer de verano.png";
import cAnochecerBack from "@/assets/Proyectos/CyG/Anochecer de verano_Contrafrente.png";
import cAtardecer from "@/assets/Proyectos/CyG/Atardecer de otoño.png";
import cAtardecerFrente from "@/assets/Proyectos/CyG/Frente_Atardecer de otoño.png";
import cInteriorComedor from "@/assets/Proyectos/CyG/Interior_Comedor.png";
import { useTranslation } from "@/lib/i18n";
import { casaProjects } from "@/components/Casas";

type Category = "todos" | "viviendas" | "comercial" | "reformas";

type AtmosphereType = "todos" | "anochecer" | "atardecer" | "amanecer";

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
  origin?: "casas" | "proyectos" | "ambos";
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

const projects: Project[] = [
  {
    id: "los-arboles",
    title: {
      es: "Residencia Los Árboles",
      en: "Los Árboles Residence",
      pt: "Residência Los Árboles",
    },
    meta: {
      es: "Vivienda Unifamiliar — 2023",
      en: "Single Family Home — 2023",
      pt: "Casa Unifamiliar — 2023",
    },
    category: "viviendas",
    image: p1,
    location: "San Isidro, Buenos Aires",
    year: "2023",
    area: "320 m²",
    description: {
      es: "Vivienda de líneas puras integrada al paisaje. Hormigón visto, grandes paños vidriados y una circulación que dialoga con el entorno natural.",
      en: "Pure-lined home integrated with the landscape. Exposed concrete, large glass panels and circulation that dialogues with the natural surroundings.",
      pt: "Casa de linhas puras integrada à paisagem. Concreto aparente, grandes painéis de vidro e circulação que dialoga com o entorno natural.",
    },
  },
  {
    id: "nexo",
    title: {
      es: "Proyecto CyG",
      en: "CyG Project",
      pt: "Projeto CyG",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2025",
      en: "Single Family Home — 2025",
      pt: "Casa Unifamiliar — 2025",
    },
    category: "viviendas",
    image: p4,
    location: "Pilar, Buenos Aires",
    year: "2025",
    area: "239.21 m²",
    description: {
      es: "Estética, precisión y carácter en cada línea. Una propuesta pensada para quienes eligen calidad sin concesiones.",
      en: "Aesthetic precision and character in every line. A proposal designed for those who choose uncompromising quality.",
      pt: "Estética, precisão e caráter em cada linha. Uma proposta pensada para quem escolhe qualidade sem concessões.",
    },
    gallery: [
      {
        src: cAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring dawn filter",
          pt: "filtro de Amanhecer de primavera",
        },
      },
      {
        src: cAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de Anoitecer de verão",
        },
      },
      {
        src: cAnochecerBack,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de Anoitecer de verão",
        },
      },
      {
        src: cAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn dusk filter",
          pt: "filtro de Entardecer de outono",
        },
      },
      {
        src: cAtardecerFrente,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn dusk filter",
          pt: "filtro de Entardecer de outono",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "amanecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "all atmospheres filter",
          pt: "filtro das 3 atmosferas",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "anochecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "all atmospheres filter",
          pt: "filtro das 3 atmosferas",
        },
      },
      {
        src: cInteriorComedor,
        atmosphere: "atardecer",
        label: {
          es: "filtro de las 3 atmosferas",
          en: "all atmospheres filter",
          pt: "filtro das 3 atmosferas",
        },
      },
    ],
  },
  {
    id: "fitz-roy",
    title: {
      es: "Proyecto Z",
      en: "Project Z",
      pt: "Projeto Z",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2026",
      en: "Single Family Home — 2026",
      pt: "Casa Unifamiliar — 2026",
    },
    category: "viviendas",
    image: p1,
    location: "Pilar, Buenos Aires",
    year: "2026",
    area: "187.82 m²",
    description: {
      es: "Propuesta arquitectónica de carácter minimalista, donde la pureza volumétrica y la atención al detalle constructivo definen una imagen elegante, funcional y atemporal.",
      en: "Architectural proposal with a minimalist character, where volumetric purity and attention to construction detail define an elegant, functional, and timeless image.",
      pt: "Proposta arquitetônica de caráter minimalista, onde a pureza volumétrica e a atenção ao detalhe construtivo definem uma imagem elegante, funcional e atemporal.",
    },
    gallery: [
      {
        src: zAmanecerCF,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring dawn filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring dawn filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: zAmanecerExterior,
        atmosphere: "amanecer",
        label: {
          es: "filtro de amanecer de primavera",
          en: "spring dawn filter",
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
          en: "autumn dusk filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zAtardecerJpg,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn dusk filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: zAtardecerExterior,
        atmosphere: "atardecer",
        label: {
          es: "filtro de atardecer de otoño",
          en: "autumn dusk filter",
          pt: "filtro de entardecer de outono",
        },
      },
    ],
  },
  {
    id: "casa-recoleta",
    title: {
      es: "Casa Recoleta",
      en: "Recoleta House",
      pt: "Casa Recoleta",
    },
    meta: {
      es: "Vivienda Premium — 2024",
      en: "Premium Residence — 2024",
      pt: "Residência Premium — 2024",
    },
    category: "viviendas",
    image: p4,
    location: "Recoleta, CABA",
    year: "2024",
    area: "480 m²",
    description: {
      es: "Vivienda de alta gama con cocina integrada al living. Mármol, maderas nobles y aperturas dobles para iluminación natural.",
      en: "High-end residence with a kitchen integrated into the living area. Marble, noble woods and large openings for natural light.",
      pt: "Residência de alto padrão com cozinha integrada à sala. Mármore, madeiras nobres e amplas aberturas para luz natural.",
    },
  },

];

import { SectionMode } from "@/components/SectionMode";

export function Projects({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [originFilter, setOriginFilter] = useState<"all" | "casas" | "proyectos">("all");
  const [listAtmosphere, setListAtmosphere] = useState<AtmosphereType>("todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navChoiceOpen, setNavChoiceOpen] = useState(false);
  const [projectZSlide, setProjectZSlide] = useState(0);
  const [projectCyGSlide, setProjectCyGSlide] = useState(0);

  const zGallery = projects.find((project) => project.id === "fitz-roy")?.gallery ?? [];
  const cyGGallery = projects.find((project) => project.id === "nexo")?.gallery ?? [];

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

  const filteredZGallery =
    listAtmosphere === "todos"
      ? uniqueGalleryBySrc(zGallery)
      : zGallery.filter((item) => item.atmosphere === listAtmosphere);
  const filteredCyGGallery =
    listAtmosphere === "todos"
      ? uniqueGalleryBySrc(cyGGallery)
      : cyGGallery.filter((item) => item.atmosphere === listAtmosphere);

  const zSlideIndex = filteredZGallery.length > 0 ? projectZSlide % filteredZGallery.length : 0;
  const cyGSlideIndex = filteredCyGGallery.length > 0 ? projectCyGSlide % filteredCyGGallery.length : 0;

  useEffect(() => {
    if (filteredZGallery.length === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setProjectZSlide((prev) => (prev + 1) % filteredZGallery.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [filteredZGallery.length]);

  useEffect(() => {
    if (filteredCyGGallery.length === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setProjectCyGSlide((prev) => (prev + 1) % filteredCyGGallery.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [filteredCyGGallery.length]);

  const casaIds = new Set(casaProjects.map((project) => project.id));
  const combinedProjects: Project[] = [
    ...casaProjects.map((project) => ({
      ...project,
      origin: ("casas" as const),
    })),
    ...projects
      .filter((project) => !casaIds.has(project.id))
      .map((project) => ({ ...project, origin: "proyectos" as const })),
  ];

  const sectionSource = combinedProjects.filter((project) => project.origin !== "casas");
  const source = mode === "home" ? combinedProjects : sectionSource;
  const filteredByCategory =
    active === "todos" ? source : source.filter((p) => p.category === active);
  const visibleByOrigin =
    originFilter === "all"
      ? filteredByCategory
      : filteredByCategory.filter((p) =>
          originFilter === "casas"
            ? p.origin === "casas" || p.origin === "ambos"
            : p.origin === "proyectos" || p.origin === "ambos"
        );
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
  const originFilters: Array<{ key: "all" | "casas" | "proyectos"; label: string }> = [
    { key: "all", label: t.projects.originFilterLabels.all },
    { key: "casas", label: t.projects.originFilterLabels.casas },
    { key: "proyectos", label: t.projects.originFilterLabels.proyectos },
  ];

  return (
    <section id="proyectos" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
      <div id="casas" className="absolute -top-24" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2 md:mb-4 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {mode === "home" ? t.projects.homeLabel : t.projects.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">{t.projects.heading}</h2>
          {mode === "section" ? (
            <p className="mt-4 w-full max-w-none text-base leading-relaxed text-brand-gray">
              {t.projects.sectionDescription}
            </p>
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

      {mode === "home" ? (
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray mb-4">
            {t.projects.originFilterTitle}
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold">
            {originFilters.map((f) => (
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
      ) : null}

      <div className="mb-4 text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray">
        {t.projects.atmosphereLabel}
      </div>
      <div className="flex flex-wrap gap-4 md:flex-nowrap md:gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold mb-10">
        {atmospheres.map((atm) => (
          <button
            key={atm.key}
            type="button"
            onClick={() => setListAtmosphere(atm.key)}
            className={`rounded-none border border-brand-light px-3 py-2 text-[10px] uppercase tracking-[0.2em] transition whitespace-nowrap ${
              listAtmosphere === atm.key ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black hover:bg-brand-light"
            }`}
          >
            {atm.label}
          </button>
        ))}
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
                src={
                  project.id === "fitz-roy" && filteredZGallery.length > 0
                    ? filteredZGallery[zSlideIndex].src
                    : project.id === "nexo" && filteredCyGGallery.length > 0
                    ? filteredCyGGallery[cyGSlideIndex].src
                    : project.image
                }
                alt={
                  project.id === "fitz-roy" && filteredZGallery.length > 0
                    ? filteredZGallery[zSlideIndex].label[language]
                    : project.id === "nexo" && filteredCyGGallery.length > 0
                    ? filteredCyGGallery[cyGSlideIndex].label[language]
                    : project.title[language]
                }
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200 ease-out"
              />
            </div>
            <div className={`mb-3 inline-flex items-center rounded-none px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap ${
                    project.origin === "proyectos"
                      ? "bg-brand-gray/10 text-brand-gray"
                      : "bg-brand-black text-white"
                  }`}>
              {project.origin === "ambos"
                ? t.projects.originLabels.ambos
                : project.origin === "casas"
                ? t.projects.originLabels.casas
                : t.projects.originLabels.proyectos}
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
                href="#casas"
                onClick={() => setNavChoiceOpen(false)}
                className="block rounded-2xl border border-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-white transition-colors whitespace-nowrap"
              >
                {t.nav.casas}
              </a>
              <a
                href="#proyectos"
                onClick={() => setNavChoiceOpen(false)}
                className="block rounded-2xl bg-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold text-white hover:bg-brand-gray transition-colors whitespace-nowrap"
              >
                {t.nav.proyectos}
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

    if (galleryItems.length === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryItems.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
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
            <div className="overflow-hidden .h-[360px] .sm:h-[420px] bg-brand-light">
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
              <div className="mt-4 flex flex-nowrap gap-2 overflow-hidden">
                {atmosphereButtons.map((atm) => (
                  <button
                    key={atm.key}
                    type="button"
                    onClick={() => setModalAtmosphere(atm.key)}
                    className={`rounded-none border border-brand-light px-3 py-2 text-[9px] uppercase tracking-[0.15em] transition whitespace-nowrap ${
                      modalAtmosphere === atm.key
                        ? "bg-brand-black text-white border-brand-black"
                        : "bg-white text-brand-black hover:bg-brand-light"
                    }`}
                  >
                    {atm.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        <div className="p-8 md:p-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60">
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
