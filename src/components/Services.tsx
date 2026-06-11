import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";

const serviceLabels: Record<"es" | "en" | "pt", string[]> = {
  es: [
    "Proyecto Arquitectónico",
    "Dirección de Obra",
    "Construcción",
    "Interiorismo & Renders",
    "Remodelaciones",
    "Regularizaciones",
    "Cómputos y Presupuestos",
    "Gestión Integral de Obras",
  ],
  en: [
    "Architectural Design",
    "Construction Management",
    "Construction",
    "Interior Design & Renders",
    "Renovations",
    "Regularizations",
    "Quantity Surveying",
    "Comprehensive Project Management",
  ],
  pt: [
    "Projeto Arquitetônico",
    "Direção de Obra",
    "Construção",
    "Design de Interiores & Renders",
    "Reformas",
    "Regularizações",
    "Orçamentos e Cálculos",
    "Gestão Integral de Obras",
  ],
};

const processSteps: Record<"es" | "en" | "pt", Array<[string, string, string]>> = {
  es: [
    ["01", "Reunión inicial", "Escuchamos la visión y los objetivos del cliente."],
    ["02", "Estudio de necesidades", "Analizamos el sitio, el programa y las restricciones."],
    ["03", "Diseño conceptual", "Definimos partido arquitectónico y materialidad."],
    ["04", "Proyecto ejecutivo", "Documentación técnica completa y planos de obra."],
    ["05", "Presupuesto", "Cómputos detallados y planificación de costos."],
    ["06", "Construcción", "Dirección de obra con control de calidad permanente."],
    ["07", "Entrega final", "Revisión, ajustes y acompañamiento post-obra."],
  ],
  en: [
    ["01", "Initial meeting", "We listen to the client's vision and goals."],
    ["02", "Needs analysis", "We analyze the site, program and constraints."],
    ["03", "Concept design", "We define the architectural strategy and materiality."],
    ["04", "Executive design", "Complete technical documentation and construction plans."],
    ["05", "Budget", "Detailed cost estimates and budget planning."],
    ["06", "Construction", "Construction management with continuous quality control."],
    ["07", "Final delivery", "Review, adjustments and post-construction support."],
  ],
  pt: [
    ["01", "Reunião inicial", "Ouvimos a visão e os objetivos do cliente."],
    ["02", "Estudo de necessidades", "Analisamos o local, o programa e as restrições."],
    ["03", "Projeto conceitual", "Definimos o partido arquitetônico e a materialidade."],
    ["04", "Projeto executivo", "Documentação técnica completa e plantas de obra."],
    ["05", "Orçamento", "Cálculos detalhados e planejamento de custos."],
    ["06", "Construção", "Direção de obra com controle de qualidade permanente."],
    ["07", "Entrega final", "Revisão, ajustes e acompanhamento pós-obra."],
  ],
};

export function Services({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();

  return (
    <section id="servicios" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.services.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-10 tracking-tight">
            {t.services.heading}
          </h2>
          <div className="space-y-0">
            {serviceLabels[language].map((s, i) => (
              <div
                key={s}
                className="group border-b border-brand-black/10 py-5 flex justify-between items-center hover:border-brand-black transition-colors"
              >
                <span className="text-lg md:text-xl">{s}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-right">
            <a
              href="#servicios"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
            >
              {t.common.seeMore}
            </a>
          </div>
        </div>

        <div id="proceso">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.services.processLabel}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-12 tracking-tight">
            {t.services.processHeading}
          </h2>
          <div className="relative">
            <div className="absolute left-4.5 top-2 bottom-2 w-px bg-brand-black/15" />
            <div className="space-y-8">
              {processSteps[language].map(([n, title, desc]) => (
                <div key={n} className="flex gap-6 items-start">
                  <div className="relative z-10 size-10 shrink-0 rounded-full bg-white border border-brand-black flex items-center justify-center text-[10px] font-bold tracking-widest">
                    {n}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="font-serif text-xl mb-1">{title}</h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-right">
            <a
              href="#proceso"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
            >
              {t.common.seeMore}
            </a>
          </div>
        </div>
      </div>
      {mode === "section" && (
        <div className="mt-12 text-right">
          <a
            href="#sustentabilidad"
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
          >
            {t.common.seeMore}
          </a>
        </div>
      )}
    </section>
  );
}

export function ServiceCapabilities({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();

  return (
    <section id="servicios" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
          {t.services.sectionLabel}
        </span>
        <h2 className="font-serif text-5xl md:text-6xl mb-10 tracking-tight">
          {t.services.heading}
        </h2>
        {mode === "section" ? (
          <p className="max-w-3xl text-base leading-relaxed text-brand-gray mb-10">
            Nuestros servicios incluyen proyecto arquitectónico, dirección de obra, interiorismo, remodelaciones y gestión integral, acompañando cada etapa con foco en calidad funcional y estética.
          </p>
        ) : null}
        <div className="space-y-0">
          {serviceLabels[language].map((s, i) => (
            <div
              key={s}
              className="group border-b border-brand-black/10 py-5 flex justify-between items-center hover:border-brand-black transition-colors"
            >
              <span className="text-lg md:text-xl">{s}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();

  return (
    <section id="proceso" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
          {t.services.processLabel}
        </span>
        <h2 className="font-serif text-5xl md:text-6xl mb-12 tracking-tight">
          {t.services.processHeading}
        </h2>
        {mode === "section" ? (
          <p className="max-w-3xl text-base leading-relaxed text-brand-gray mb-10">
            El proceso de trabajo muestra cómo avanzamos desde la idea inicial hasta la entrega final, con etapas claras de análisis, diseño, presupuesto y construcción para asegurar resultados integrales.
          </p>
        ) : null}
        <div className="relative">
          <div className="absolute left-4.5 top-2 bottom-2 w-px bg-brand-black/15" />
          <div className="space-y-8">
            {processSteps[language].map(([n, title, desc]) => (
              <div key={n} className="flex gap-6 items-start">
                <div className="relative z-10 size-10 shrink-0 rounded-full bg-white border border-brand-black flex items-center justify-center text-[10px] font-bold tracking-widest">
                  {n}
                </div>
                <div className="pt-1.5">
                  <h4 className="font-serif text-xl mb-1">{title}</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
