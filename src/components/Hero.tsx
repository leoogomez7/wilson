import heroImg from "@/assets/hero.jpg";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative h-screen .min-h-160 w-full flex items-center justify-center overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={t.hero.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-60 animate-slow-zoom"
        />
        <div className="absolute inset-0 .bg-linear-to-b from-brand-black/40 via-transparent to-brand-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-70 mb-8 animate-fade">
          {t.hero.tagline}
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.95] animate-reveal">
          Wilson<br />Arquitectura
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
            className="border border-white/40 px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-black transition-all duration-300"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="bg-white text-brand-black px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all duration-300"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
