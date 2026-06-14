import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import { useTranslation } from "@/lib/i18n";
import { casaProjects } from "@/components/Casas";

type Category = "todos" | "viviendas" | "comercial" | "reformas";

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
  span: string;
  offset?: string;
  aspect: string;
  location: string;
  year: string;
  area: string;
  description: LocalizedString;
  origin?: "casas" | "proyectos" | "ambos";
}

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
  },
  {
    id: "nexo",
    title: {
      es: "Nexo Comercial",
      en: "Nexo Commercial",
      pt: "Nexo Comercial",
    },
    meta: {
      es: "Local Comercial — 2022",
      en: "Retail Space — 2022",
      pt: "Loja Comercial — 2022",
    },
    category: "comercial",
    image: p2,
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    location: "Palermo, CABA",
    year: "2022",
    area: "150 m²",
    description: {
      es: "Diseño de local retail con foco en la experiencia de marca. Iluminación escenográfica, paleta neutra y mobiliario a medida.",
      en: "Retail design focused on brand experience. Scenic lighting, a neutral palette, and custom furnishings.",
      pt: "Design de loja com foco na experiência da marca. Iluminação cênica, paleta neutra e mobiliário sob medida.",
    },
  },
  {
    id: "fitz-roy",
    title: {
      es: "Intervención Fitz Roy",
      en: "Fitz Roy Intervention",
      pt: "Intervenção Fitz Roy",
    },
    meta: {
      es: "Reforma Integral — 2024",
      en: "Full Renovation — 2024",
      pt: "Reforma Integral — 2024",
    },
    category: "reformas",
    image: p3,
    span: "md:col-span-4",
    aspect: "aspect-[5/6]",
    location: "Palermo Hollywood",
    year: "2024",
    area: "210 m²",
    description: {
      es: "Reconversión de antiguo galpón a loft contemporáneo conservando la estructura industrial original.",
      en: "Conversion of an old warehouse into a contemporary loft while preserving the original industrial structure.",
      pt: "Conversão de antigo galpão em loft contemporâneo, preservando a estrutura industrial original.",
    },
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
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    location: "Recoleta, CABA",
    year: "2024",
    area: "480 m²",
    description: {
      es: "Vivienda de alta gama con cocina integrada al living. Mármol, maderas nobles y aperturas dobles para iluminación natural.",
      en: "High-end residence with a kitchen integrated into the living area. Marble, noble woods and large openings for natural light.",
      pt: "Residência de alto padrão com cozinha integrada à sala. Mármore, madeiras nobres e amplas aberturas para luz natural.",
    },
  },
  {
    id: "lobby-civico",
    title: {
      es: "Centro Cívico",
      en: "Civic Center",
      pt: "Centro Cívico",
    },
    meta: {
      es: "Obra Institucional — 2023",
      en: "Institutional Project — 2023",
      pt: "Projeto Institucional — 2023",
    },
    category: "comercial",
    image: p5,
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
    location: "Vicente López",
    year: "2023",
    area: "1.200 m²",
    description: {
      es: "Proyecto institucional con doble altura, geometría curva e iluminación arquitectónica indirecta.",
      en: "Institutional project with double-height spaces, curved geometry and indirect architectural lighting.",
      pt: "Projeto institucional com pé-direito duplo, geometria curva e iluminação arquitetônica indireta.",
    },
  },
];

import { SectionMode } from "@/components/SectionMode";

export function Projects({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const [active, setActive] = useState<Category>("todos");
  const [originFilter, setOriginFilter] = useState<"all" | "casas" | "proyectos">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navChoiceOpen, setNavChoiceOpen] = useState(false);

  const casaIds = new Set(casaProjects.map((project) => project.id));
  const combinedProjects: Project[] = [
    ...casaProjects.map((project) => ({
      ...project,
      origin: projects.some((p) => p.id === project.id) ? ("ambos" as const) : ("casas" as const),
    })),
    ...projects
      .filter((project) => !casaIds.has(project.id))
      .map((project) => ({ ...project, origin: "proyectos" as const })),
  ];

  const sectionSource = combinedProjects.filter((project) => project.origin !== "casas");
  const source = mode === "home" ? combinedProjects : sectionSource;
  const filteredByCategory =
    active === "todos" ? source : source.filter((p) => p.category === active);
  const visible =
    originFilter === "all"
      ? filteredByCategory
      : filteredByCategory.filter((p) =>
          originFilter === "casas"
            ? p.origin === "casas" || p.origin === "ambos"
            : p.origin === "proyectos" || p.origin === "ambos"
        );
  const selected = selectedId ? source.find((p) => p.id === selectedId) : null;
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {mode === "home" ? t.projects.homeLabel : t.projects.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight">{t.projects.heading}</h2>
          {mode === "section" ? (
            <p className="mt-6 w-full max-w-none text-base leading-relaxed text-brand-gray">
              {t.projects.sectionDescription}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-brand-light pb-4 w-full md:w-auto overflow-x-auto mb-6">
        {categoryFilters.map((f) => (
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

      {mode === "home" ? (
        <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-brand-light pb-4 w-full md:w-auto overflow-x-auto mb-10">
          {originFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setOriginFilter(f.key)}
              className={`transition-opacity whitespace-nowrap ${
                originFilter === f.key ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-12">
        {visible.map((project) => (
          <article
            key={project.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedId(project.id)}
          >
            <div className="overflow-hidden mb-6 bg-brand-light">
              <img
                src={project.image}
                alt={project.title[language]}
                loading="lazy"
                className={`w-full ${project.aspect} object-cover group-hover:scale-105 transition-transform duration-1200 ease-out`}
              />
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <div
                  className={`mb-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold ${
                    project.origin === "ambos"
                      ? "bg-brand-black text-white"
                      : "bg-brand-gray/10 text-brand-gray"
                  }`}
                >
                  {project.origin === "ambos"
                    ? t.projects.originLabels.ambos
                    : project.origin === "casas"
                    ? t.projects.originLabels.casas
                    : t.projects.originLabels.proyectos}
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title[language]}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">{project.meta[language]}</p>
              </div>
              <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-black pb-1 shrink-0">
                {t.common.readMore}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelectedId(null)} />}
      {mode === "home" ? (
        <div className="mt-12 text-right">
          <button
            type="button"
            onClick={() => setNavChoiceOpen(true)}
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
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
            className="w-full max-w-sm rounded-3xl border border-border bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end mb-6">
              <button
                type="button"
                onClick={() => setNavChoiceOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-brand-gray transition hover:bg-brand-black hover:text-white"
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
                className="block rounded-2xl border border-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-white transition-colors"
              >
                {t.nav.casas}
              </a>
              <a
                href="#proyectos"
                onClick={() => setNavChoiceOpen(false)}
                className="block rounded-2xl bg-brand-black px-6 py-4 text-center uppercase tracking-[0.3em] font-bold text-white hover:bg-brand-gray transition-colors"
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, language } = useTranslation();

  return (
    <div
      className="fixed inset-0 z-80 bg-brand-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t.projects.modal.close}
          className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-black"
        >
          {t.projects.modal.close}
        </button>
        <img src={project.image} alt={project.title[language]} className="w-full aspect-video object-cover" />
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
