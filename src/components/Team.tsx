import w from "@/assets/team-wilson.jpg";
import j from "@/assets/team-josue.jpg";
import k from "@/assets/team-keyla.jpg";
import equipoImg from "@/assets/Equipo.jpg";
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

export function Team({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const team = t.team.members;

  if (mode === "home") {
    return (
      <section id="estudio-home" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden">
              <img
                src={equipoImg}
                alt={t.team.imageAlt}
                className="w-full h-full min-h-105 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
                {t.team.sectionLabel}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-8">
                {t.team.heading}
              </h2>
              <p className="text-brand-gray leading-relaxed mb-10">
                {t.team.homeDescription}
              </p>
              <div className="text-left">
                <a
                  href="#estudio"
                  className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
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
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">{t.team.heading}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] items-center">
            <div className="overflow-hidden">
              <img
                src={equipoImg}
                alt={t.team.imageAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-brand-gray leading-relaxed">{t.team.homeDescription}</p>
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                <h3 className="font-serif text-2xl">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mt-2 mb-4">
                  {member.role}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black hover:text-brand-gray transition-colors">
                      {t.common.seeMore}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                      <DialogTitle>{member.name}</DialogTitle>
                      <DialogDescription className="text-sm text-brand-gray">
                        {member.role}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 text-sm leading-relaxed text-brand-gray">
                      {member.bio}
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
