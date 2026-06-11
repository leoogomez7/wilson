import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";

export function Sustainability({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const sectionId = mode === "home" ? "sustentabilidad-home" : "sustentabilidad";

  return (
    <section id={sectionId} className="py-5 md:py-8 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
          {t.sustainability.sectionLabel}
        </span>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-10">
          {t.sustainability.heading}
        </h2>
        <p className="text-brand-gray leading-relaxed max-w-3xl mb-12">
          {t.sustainability.description}
        </p>
        {mode === "section" ? (
          <div className="grid gap-8 md:grid-cols-3">
            {t.sustainability.points.map((point) => (
              <div key={point.title} className="border border-border p-8 rounded-xl">
                <h3 className="font-serif text-2xl mb-3">{point.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray">{point.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-right">
            <a
              href="#sustentabilidad"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
            >
              {t.common.seeMore}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
