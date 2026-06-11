import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import p1 from "@/assets/project-1.jpg";
import p4 from "@/assets/project-4.jpg";

type Category = "todos" | "viviendas";

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
  span: string;
  aspect: string;
  location: string;
  year: string;
  area: string;
  offset?: string;
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
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
    location: "San Isidro, Buenos Aires",
    year: "2023",
    area: "320 m²",
    description: {
      es: "Vivienda de líneas puras integrada al paisaje. Hormigón visto, grandes paños vidriados y una circulación que dialoga con el entorno natural.",
      en: "Pure-lined home integrated with the landscape. Exposed concrete, large glass panels and circulation that dialogues with the natural surroundings.",
      pt: "Casa de linhas puras integrada à paisagem. Concreto aparente, grandes painéis de vidro e circulação que dialoga com o entorno natural.",
    },
    category: "viviendas",
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
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    location: "Recoleta, CABA",
    year: "2024",
    area: "480 m²",
    description: {
      es: "Vivienda de alta gama con cocina integrada al living. Mármol, maderas nobles y aperturas dobles para iluminación natural.",
      en: "High-end residence with a kitchen integrated into the living area. Marble, noble woods and large openings for natural light.",
      pt: "Residência de alto padrão com cozinha integrada à sala. Mármore, madeiras nobres e amplas aberturas para luz natural.",
    },
    category: "viviendas",
  },
];

const filterLabels: Record<"es" | "en" | "pt", { key: Category; label: string }[]> = {
  es: [
    { key: "todos", label: "Todos" },
    { key: "viviendas", label: "Viviendas" },
  ],
  en: [
    { key: "todos", label: "All" },
    { key: "viviendas", label: "Residential" },
  ],
  pt: [
    { key: "todos", label: "Todos" },
    { key: "viviendas", label: "Residencial" },
  ],
};

export function Casas({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");

  const visible =
    active === "todos"
      ? casaProjects
      : casaProjects.filter(() => true);

  return (
    <section id="casas" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            Hogar propio
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight">Casas</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-gray">
            Cada casa es concebida como un espacio único, diseñado para reflejar la identidad, las necesidades y el estilo de vida de quienes la habitan. Buscamos crear ambientes funcionales, confortables y atemporales, donde la arquitectura se convierta en el escenario de experiencias y recuerdos duraderos.
          </p>
        </div>
      </div>
      <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-brand-light pb-4 w-full md:w-auto overflow-x-auto">
        {filterLabels[language].map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`transition-opacity whitespace-nowrap ${
              active === f.key ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-12 mt-12">
        {visible.map((project) => (
          <article key={project.id} className={`col-span-12 ${project.span} group`}>
            <div className="overflow-hidden mb-6 bg-brand-light">
              <img
                src={project.image}
                alt={project.title[language]}
                loading="lazy"
                className={`w-full ${project.aspect} object-cover transition-transform duration-[1200ms] ease-out`}
              />
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title[language]}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">{project.meta[language]}</p>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                {project.location}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
