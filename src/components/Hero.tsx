import { useTranslation } from "@/lib/i18n";
import { VideoImages } from "@/components/video-images";
import { casaProjects } from "@/components/project-data";
import { projects, sortProjectsByRequestedOrder } from "@/components/Projects";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] w-full flex items-start justify-center pt-16 pb-16 sm:pt-2 lg:pt-4 overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0">
        <VideoImages
          className="absolute inset-0 h-full w-full overflow-hidden"
          imageClassName="h-full w-full object-cover opacity-60 animate-slow-zoom"
          intervalMs={1700}
          images={[
            ...sortProjectsByRequestedOrder(
              [
                ...casaProjects.filter(
                  (project) => project.id !== "casa-bonzi" && project.id !== "casa-rosales"
                ),
                ...projects.filter((project) => project.id !== "casa-rosales"),
              ]
            ).map((project) => project.image),
          ]}
        />
        <div className="absolute inset-0 .bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-full">
        <p className="text-[10px] sm:text-[16px] uppercase tracking-[0.5em] opacity-70 mb-8 animate-fade">
          {t.hero.tagline}
        </p>
        <h1 className="font-serif inline-flex flex-col items-center text-center mx-auto text-[clamp(4rem,12vw,8rem)] sm:text-[clamp(4.5rem,10vw,10rem)] lg:text-[clamp(5.5rem,10vw,11rem)] max-w-[90vw] mb-8 tracking-[0.06em] sm:tracking-[0.08em] leading-[0.95] whitespace-normal animate-reveal">
          <span className="block font-semibold uppercase text-[1.15em] sm:text-[1.08em] lg:text-[1.375em]">Wilson</span>
          <span className="block whitespace-nowrap font-medium uppercase text-[0.62em] sm:text-[0.7em] lg:text-[0.7875em] tracking-[0.01em] mobile-justify-full">Arquitectura</span>
        </h1>
        <p
          className="text-[11px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] font-light max-w-4xl mx-auto leading-loose opacity-80 animate-reveal"
          style={{ animationDelay: "200ms" }}
        >
          {t.hero.description}
        </p>
        <div
          className="mt-10 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-reveal"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#proyectos"
            className="border border-white/40 px-10 py-4 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] hover:bg-white hover:text-brand-black transition-all duration-300 whitespace-nowrap"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="px-10 py-4 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-white hover:bg-white hover:text-brand-black border border-white transition-all duration-300 whitespace-nowrap"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}


