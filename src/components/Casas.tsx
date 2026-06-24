import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";

type Category = "todos" | "viviendas";

type AtmosphereType = "anochecer" | "atardecer" | "amanecer";

type LocalizedString = {
  es: string;
  en: string;
  pt: string;
};

interface CasaProject {
  id: string;
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
}

export const casaProjects: CasaProject[] = [
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
    image: p1,
    location: "San Isidro, Buenos Aires",
    year: "2023",
    area: "320 m²",
    description: {
      es: "Vivienda de líneas puras integrada al paisaje. Hormigón visto, grandes paños vidriados y una circulación que dialoga con el entorno natural.",
      en: "Pure-lined home integrated with the landscape. Exposed concrete, large glass panels and circulation that dialogues with the natural surroundings.",
      pt: "Casa de linhas puras integrada à paisagem. Concreto aparente, grandes painéis de vidro e circulação que dialoga com o entorno natural.",
    },
    category: "viviendas",
    origin: "ambos",
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
    image: p4,
    location: "Recoleta, CABA",
    year: "2024",
    area: "480 m²",
    description: {
      es: "Vivienda de alta gama con cocina integrada al living. Mármol, maderas nobles y aperturas dobles para iluminación natural.",
      en: "High-end residence with a kitchen integrated into the living area. Marble, noble woods and large openings for natural light.",
      pt: "Residência de alto padrão com cozinha integrada à sala. Mármore, madeiras nobres e amplas aberturas para luz natural.",
    },
    category: "viviendas",
    origin: "ambos",
  },
];

export function Casas({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [selectedAtmosphere, setSelectedAtmosphere] = useState<AtmosphereType>("anochecer");

  const atmospheres: Array<{ key: AtmosphereType; label: string }> = [
    { key: "anochecer", label: t.projects.atmospheres.anochecer },
    { key: "atardecer", label: t.projects.atmospheres.atardecer },
    { key: "amanecer", label: t.projects.atmospheres.amanecer },
  ];

  const filterItems: Array<{ key: Category; label: string }> = [
    { key: "todos", label: t.casas.filters.todos },
    { key: "viviendas", label: t.casas.filters.viviendas },
  ];

  const visible =
    active === "todos"
      ? casaProjects
      : casaProjects.filter(() => true);

  return (
    <section id="casas" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-2 md:mb-4 gap-6">
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
        <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold flex-wrap">
          {filterItems.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-none border border-brand-light px-4 py-2 transition whitespace-nowrap ${
                active === f.key ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black hover:bg-brand-light"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4 text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gray">
        {t.projects.atmosphereLabel}
      </div>
      <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.25em] font-semibold mb-10">
        {atmospheres.map((atm) => (
          <button
            key={atm.key}
            type="button"
            onClick={() => setSelectedAtmosphere(atm.key)}
            className={`border border-brand-light px-4 py-2 transition whitespace-nowrap ${
              selectedAtmosphere === atm.key ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black hover:bg-brand-light"
            }`}
          >
            {atm.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-12 mt-12">
        {visible.map((project) => (
          <article key={project.id} className="col-span-12 md:col-span-6 group">
            <div className="overflow-hidden mb-6 bg-brand-light aspect-4/3">
              <img
                src={project.image}
                alt={project.title[language]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1200 ease-out"
              />
            </div>
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="rounded-none px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap bg-brand-black text-white">
                {t.projects.originLabels.casas}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title[language]}</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-2">{project.meta[language]}</p>
            <div className="flex flex-col items-start gap-2 mb-6">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                {project.location}
              </div>
            </div>
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-black pb-1 whitespace-nowrap">
              {t.common.readMore}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
