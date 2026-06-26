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
import casaCoffeExteriorAmanecer from "@/assets/Casas/Coffe/CasaCoffe-Exterior_Amanecer de primavera.png";
import casaCoffeExteriorAnochecer from "@/assets/Casas/Coffe/CasaCoffe-Exterior_Anochecer de verano..png";
import casaCoffeExteriorAtardecer from "@/assets/Casas/Coffe/CasaCoffe-Exterior_Atardecer de otoño..png";
import casaCoffeExteriorContrafachada from "@/assets/Casas/Coffe/CasaCoffe-Exterior_Contrafachada..png";
import casaCoffeInteriorLiving from "@/assets/Casas/Coffe/CasaCoffe-Interior_Living..png";
import casaCoffeInteriorSuite from "@/assets/Casas/Coffe/CasaCoffe-Interior_Suite..png";

type Category = "todos" | "viviendas";
type AtmosphereType = "todos" | "anochecer" | "atardecer" | "amanecer";

type LocalizedString = {
  es: string;
  en: string;
  pt: string;
};

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
  gallery?: Array<{ src: string; label: LocalizedString; atmosphere: Exclude<AtmosphereType, "todos"> }>;
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
    id: "casa-coffe",
    title: {
      es: "Casa Coffe",
      en: "Casa Coffe",
      pt: "Casa Coffe",
    },
    meta: {
      es: "Vivienda Unifamiliar - 2024",
      en: "Single-family home - 2024",
      pt: "Casa unifamiliar - 2024",
    },
    image: casaCoffeExteriorContrafachada,
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
        src: casaCoffeExteriorAmanecer,
        atmosphere: "amanecer",
        label: {
          es: "filtro de Amanecer de primavera",
          en: "spring sunrise filter",
          pt: "filtro de amanhecer de primavera",
        },
      },
      {
        src: casaCoffeExteriorAnochecer,
        atmosphere: "anochecer",
        label: {
          es: "filtro de Anochecer de verano",
          en: "summer dusk filter",
          pt: "filtro de anoitecer de verão",
        },
      },
      {
        src: casaCoffeExteriorAtardecer,
        atmosphere: "atardecer",
        label: {
          es: "filtro de Atardecer de otoño",
          en: "autumn sunset filter",
          pt: "filtro de entardecer de outono",
        },
      },
      {
        src: casaCoffeExteriorContrafachada,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeExteriorContrafachada,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeExteriorContrafachada,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de contrafachada",
          en: "additional rear facade image",
          pt: "imagem adicional de fachada traseira",
        },
      },
      {
        src: casaCoffeInteriorLiving,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeInteriorLiving,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeInteriorLiving,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de living",
          en: "additional living room image",
          pt: "imagem adicional de sala",
        },
      },
      {
        src: casaCoffeInteriorSuite,
        atmosphere: "amanecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaCoffeInteriorSuite,
        atmosphere: "atardecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
        },
      },
      {
        src: casaCoffeInteriorSuite,
        atmosphere: "anochecer",
        label: {
          es: "imagen adicional de suite",
          en: "additional suite image",
          pt: "imagem adicional de suíte",
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

  const baseGalleryItems: Array<{
    src: string;
    label: LocalizedString;
    atmosphere: Exclude<AtmosphereType, "todos">;
  }> = selectedProject?.gallery?.length
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
              <div className="overflow-hidden bg-brand-light">
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
