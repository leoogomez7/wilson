import w from "@/assets/Estudio/Wilson.jpeg";
import j from "@/assets/Estudio/Josue.jpeg";
import k from "@/assets/Estudio/Keyla.jpeg";
import grupal from "@/assets/Estudio/Grupal.jpeg";
import { useEffect, useRef, useState } from "react";
import zAmanecer from "@/assets/Proyectos/Z/Amanecer de primavera.png";
import zAmanecerCF from "@/assets/Proyectos/Z/Amanecer de primavera_CF.png";
import zAmanecerExterior from "@/assets/Proyectos/Z/Anochecer de primavera_Exterior L.png";
import zAnochecerCF from "@/assets/Proyectos/Z/Anochecer de verano_CF.png";
import zAnochecerFrente from "@/assets/Proyectos/Z/Anochecer de verano_Frente.png";
import zAnochecerExterior from "@/assets/Proyectos/Z/Anochecer de vernano_Exterior L.png";
import zAtardecer from "@/assets/Proyectos/Z/Atardecer de otoño.png";
import zAtardecerJpg from "@/assets/Proyectos/Z/Atardecer de otoño.jpeg";
import zAtardecerExterior from "@/assets/Proyectos/Z/Atardecer de otoño_ Exterior.png";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const memberImages: Record<string, string> = {
  josue: j,
  wilson: w,
  keyla: k,
};

const memberImagePositions: Record<string, string> = {
  josue: "center 39%",
  wilson: "center 35%",
  keyla: "center 15%",
};

const memberModalImagePositions: Record<string, string> = {
  josue: "50% 40%",
  wilson: "50% 35%",
  keyla: "50% 15%",
};

const memberImageSizes: Record<string, string> = {
  josue: "w-52 h-52 md:w-64 md:h-64",
  wilson: "w-56 h-56 md:w-72 md:h-72",
  keyla: "w-52 h-52 md:w-64 md:h-64",
};

export function Team({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const team = t.team.members;
  const [estudioSlide, setEstudioSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const estudioGallery = [grupal];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setEstudioSlide((prev) => (prev + 1) % estudioGallery.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [estudioGallery.length]);

  if (mode === "home") {
    return (
      <section id="estudio-home" className="relative py-5 md:py-8 px-6 md:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden relative w-full">
              <img
                src={estudioGallery[estudioSlide]}
                alt={t.team.imageAlt}
                className="block w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center md:px-0 w-full lg:pl-8">
              <div className="w-full max-w-none">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4 text-left">
                  {t.team.sectionLabel}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4 text-left w-full">
                  {t.team.heading}
                </h2>
                <p className="text-brand-gray leading-relaxed mb-6 text-left max-w-3xl">
                  {t.team.homeDescription}
                </p>
              </div>
              <div className="w-full flex justify-end">
                <a
                  href="#estudio"
                  className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  {t.common.seeMore}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="equipo" className="relative py-5 md:py-8 px-6 md:px-20 bg-white scroll-mt-24">
      <div id="estudio" className="absolute -top-32 scroll-mt-32" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 w-full max-w-none">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.team.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">{t.team.heading}</h2>
          <div className="mt-8 grid gap-8">
            <p className="text-brand-gray leading-relaxed">{t.team.homeDescription}</p>
            <div className="overflow-hidden">
              <img
                src={estudioGallery[estudioSlide]}
                alt={t.team.imageAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {team.map((member) => {
            const memberImg = memberImages[member.id];
            const memberSize = memberImageSizes[member.id] ?? "w-52 h-52 md:w-64 md:h-64";
            return (
              <article key={member.id} className="group flex flex-col items-center text-center">
                <div
                  className={`overflow-hidden rounded-full bg-brand-light mb-6 flex items-center justify-center ${memberSize}`}
                >
                  <img
                    src={memberImg}
                    alt={`Retrato de ${member.name}`}
                    loading="lazy"
                    style={{ objectPosition: memberImagePositions[member.id] || "center" }}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                <h3 className="font-serif text-2xl">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mt-2 mb-4">
                  {member.role}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black hover:text-brand-gray transition-colors whitespace-nowrap">
                      {t.common.seeMore}
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    className="w-[90vw] max-w-[90vw] rounded-none sm:rounded-none overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-4rem)] min-h-[60vh] sm:min-h-[70vh] pt-4 px-4 pb-0 sm:pt-6 sm:px-6 sm:pb-0"
                    ref={scrollRef}
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="overflow-hidden w-full max-w-[20rem] h-80 sm:w-88 sm:h-88 shrink-0 rounded-none">
                        <img
                          src={memberImg}
                          alt={`Foto de ${member.name}`}
                          style={{ objectPosition: memberModalImagePositions[member.id] || "center" }}
                          className="w-full h-full object-cover rounded-none"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <DialogHeader>
                          <DialogTitle>{member.name}</DialogTitle>
                          <DialogDescription className="text-sm text-brand-gray">
                            {member.role}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="text-sm leading-relaxed text-brand-gray mt-4">
                          {member.bio}
                        </div>
                      </div>
                    </div>
                    <div className="sticky bottom-0 z-10 flex items-center justify-center border-t border-brand-gray/10 bg-white/95 pb-0 backdrop-blur-sm sm:hidden">
                      <button
                        type="button"
                        className="w-full max-w-[18rem] text-center text-[10px] uppercase tracking-[0.4em] text-brand-black font-bold py-3"
                        onClick={() => {
                          const container = scrollRef.current;
                          if (container) {
                            container.scrollTo({
                              top: container.scrollHeight - container.clientHeight,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {t.common.scroll}
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
