import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import { VideoImages } from "@/components/video-images";

export function History({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();

  return (
    <section id="concepto" className="py-5 md:py-8 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <VideoImages />
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
              {t.history.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
              {t.history.heading}
            </h2>
          </div>
        </div>
        <div className="grid gap-8 text-brand-gray text-base leading-relaxed max-w-3xl">
          <p>{t.history.description}</p>
        </div>
        <div className="mt-12 text-right">
          <a
            href="#estudio"
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
          >
            {t.common.seeMore}
          </a>
        </div>
      </div>
    </section>
  );
}
