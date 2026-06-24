import w from "@/assets/Estudio/Wilson.jpeg";
import j from "@/assets/Estudio/Josue.jpeg";
import k from "@/assets/Estudio/Keyla.jpeg";
import grupal from "@/assets/Estudio/Grupal.jpeg";
import { useEffect, useState } from "react";
import zAmanecer from "@/assets/Proyectos/Z/Amanecer de primavera.png";
import zAmanecerCF from "@/assets/Proyectos/Z/Amanecer de primavera_CF.png";
import zAmanecerExterior from "@/assets/Proyectos/Z/Amanecer de Primavera_Exterior L.png";
import zAnochecerCF from "@/assets/Proyectos/Z/Anochecer de verano_CF.png";
import zAnochecerFrente from "@/assets/Proyectos/Z/Anochecer de verano_Frente.png";
import zAnochecerExterior from "@/assets/Proyectos/Z/Anochecer de vernano_Exterior L.png";
import zAtardecer from "@/assets/Proyectos/Z/Atardecer de otoño.png";
import zAtardecerJpg from "@/assets/Proyectos/Z/Atardecer de otoño.jpeg";
import zAtardecerExterior from "@/assets/Proyectos/Z/Atardecer de otoño_ Exterior.png";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
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

export function Team({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const team = t.team.members;
  const [estudioSlide, setEstudioSlide] = useState(0);
  const estudioGallery = [grupal];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setEstudioSlide((prev) => (prev + 1) % estudioGallery.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [estudioGallery.length]);

  if (mode === "home") {
    return (
      <section id="estudio-home" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden">
              <img
                src={estudioGallery[estudioSlide]}
                alt={t.team.imageAlt}
                className="w-full h-full min-h-105 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
                {t.team.sectionLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                {t.team.heading}
              </h2>
              <p className="text-brand-gray leading-relaxed mb-6">
                {t.team.homeDescription}
              </p>
              <div className="text-right">
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
            const isWilson = member.name === "Wilson";
            const memberImg = memberImages[member.id];
            return (
              <article key={member.id} className="group flex flex-col items-center text-center">
                <div
                  className={`overflow-hidden rounded-full bg-brand-light mb-6 flex items-center justify-center ${
                    isWilson ? "w-56 h-56 md:w-72 md:h-72" : "w-52 h-52 md:w-64 md:h-64"
                  }`}
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
                  <DialogContent className="sm:max-w-xl">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="overflow-hidden w-full sm:w-40 h-44 sm:h-52 shrink-0">
                        <img
                          src={memberImg}
                          alt={`Foto de ${member.name}`}
                          className="w-full h-full object-cover"
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
