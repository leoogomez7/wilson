import { useTranslation } from "@/lib/i18n";
import { VideoImages } from "@/components/video-images";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] w-full flex items-start justify-center py-28 pb-16 overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0">
        <VideoImages
          className="absolute inset-0 h-full w-full overflow-hidden"
          imageClassName="h-full w-full object-cover opacity-60 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-full">
        <p className="text-[16px] uppercase tracking-[0.5em] opacity-70 mb-8 animate-fade">
          {t.hero.tagline}
        </p>
        <h1 className="font-serif w-full max-w-none text-[clamp(2.8rem,11vw,7rem)] sm:text-[clamp(4.5rem,10vw,10rem)] lg:text-[clamp(5.5rem,10vw,11rem)] mb-8 tracking-[0.12em] sm:tracking-[0.3em] leading-[0.95] whitespace-normal animate-reveal">
          Wilson<br /><span className="inline-block whitespace-nowrap">Arquitectura</span>
        </h1>
        <p
          className="text-[11px] md:text-sm uppercase tracking-[0.4em] font-light max-w-xl mx-auto leading-loose opacity-80 animate-reveal"
          style={{ animationDelay: "200ms" }}
        >
          {t.hero.description}
        </p>
        <div
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center animate-reveal"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#proyectos"
            className="border border-white/40 px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-black transition-all duration-300 whitespace-nowrap"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-white hover:bg-white hover:text-brand-black border border-white transition-all duration-300 whitespace-nowrap"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
