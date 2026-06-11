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

const teams: Record<"es" | "en" | "pt", Array<{ img: string; name: string; role: string; bio: string }>> = {
  es: [
    {
      img: j,
      name: "Josué",
      role: "Maestro Mayor de Obras",
      bio: "Estudiante avanzado de Arquitectura, combina formación técnica y visión profesional para llevar cada proyecto a su máximo nivel. Dentro del estudio, se especializa en la resolución técnica, cómputos y dirección de obra, aportando precisión, compromiso y una mirada estratégica en cada etapa. Su perfil proactivo y su búsqueda constante de mejora lo convierten en una pieza clave dentro del equipo, impulsando resultados de calidad y optimización en cada proyecto.",
    },
    {
      img: w,
      name: "Wilson",
      role: "Fundador & Director",
      bio: "Arquitecto formado en la Universidad de Buenos Aires (UBA), distinguido con el premio al mérito académico 2019 y con una sólida trayectoria como ex docente universitario. Cuenta con más de 12 años de experiencia en el rubro, desempeñándose además como asesor técnico en cooperativas de trabajo y jurado suplente del CAUBA 5. En cada proyecto, lidera desde el primer contacto con el cliente hasta la ejecución final de obra. Su enfoque combina diseño, planificación estratégica y gestión integral: asesora, proyecta, coordina equipos técnicos, negocia con proveedores y dirige cada etapa del proceso constructivo. Su compromiso es claro: transformar ideas en espacios concretos, funcionales y de alto valor, acompañando al cliente en cada decisión con profesionalismo y visión.",
    },
    {
      img: k,
      name: "Keyla",
      role: "Diseño de Interiores",
      bio: "Especializada en programas de representación visual. Su trabajo es fundamental en cada proyecto: transformar ideas en imágenes concretas, dando forma a los espacios que nuestros clientes imaginan y desean habitar. Con un perfil proactivo, orientado al detalle y una visión enfocada en la excelencia, Keyla aporta soluciones precisas que elevan cada diseño y optimizan la toma de decisiones. Su compromiso y dedicación la convierten en una pieza clave dentro de nuestro equipo.",
    },
  ],
  en: [
    {
      img: j,
      name: "Josué",
      role: "Master Builder",
      bio: "Master Builder and advanced architecture student. Specialist in construction management, technical solutions, cost estimates and planning.",
    },
    {
      img: w,
      name: "Wilson",
      role: "Founder & Director — UBA",
      bio: "Architect trained at the University of Buenos Aires. Merit Award 2019. Over 12 years leading residential and commercial projects of high complexity. Former university lecturer and substitute jury member at CAUBA 5.",
    },
    {
      img: k,
      name: "Keyla",
      role: "Interior Design",
      bio: "Interior designer specialized in architectural visualization, rendering and graphic representation. Leads the studio's interior design area.",
    },
  ],
  pt: [
    {
      img: j,
      name: "Josué",
      role: "Mestre de Obras",
      bio: "Mestre de Obras e estudante avançado de Arquitetura. Especialista em direção de obra, resolução técnica, orçamentos e planejamento construtivo.",
    },
    {
      img: w,
      name: "Wilson",
      role: "Fundador & Diretor — UBA",
      bio: "Arquiteto formado na Universidade de Buenos Aires. Prêmio de Mérito Acadêmico 2019. Mais de 12 anos de experiência liderando projetos residenciais e comerciais de alta complexidade. Ex-docente universitário e jurado suplente CAUBA 5.",
    },
    {
      img: k,
      name: "Keyla",
      role: "Design de Interiores",
      bio: "Designer de interiores especializada em visualização arquitetônica, renderização e representação gráfica. Lidera a área de interiores do estúdio.",
    },
  ],
};

export function Team({ mode = "home" }: { mode?: SectionMode }) {
  const { t, language } = useTranslation();
  const team = teams[language];

  if (mode === "home") {
    return (
      <section id="estudio-home" className="relative py-5 md:py-8 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
              {t.team.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight">{t.team.heading}</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] items-center">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={equipoImg}
                  alt="Equipo Wilson Arquitectura"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-brand-gray leading-relaxed">
                Nuestra trayectoria está guiada por la pasión de crear lugares que trascienden el tiempo. Diseñamos espacios únicos que reflejan una visión de futuro y se transforman en el escenario de historias memorables.
              </p>
            </div>
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

  return (
    <section id="equipo" className="relative py-5 md:py-8 px-6 md:px-20 bg-white scroll-mt-24">
      <div id="estudio" className="absolute -top-32 scroll-mt-32" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.team.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight">{t.team.heading}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={equipoImg}
                alt="Equipo Wilson Arquitectura"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-brand-gray leading-relaxed">
              Nuestra trayectoria está guiada por la pasión de crear lugares que trascienden el tiempo. Diseñamos espacios únicos que reflejan una visión de futuro y se transforman en el escenario de historias memorables.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {team.map((member) => {
            const isWilson = member.name === "Wilson";
            return (
              <article key={member.name} className="group flex flex-col items-center text-center">
                <div
                  className={`overflow-hidden bg-brand-light mb-6 rounded-full flex items-center justify-center ${
                    isWilson ? "w-56 h-56 md:w-72 md:h-72" : "w-52 h-52 md:w-64 md:h-64"
                  }`}
                >
                  <img
                    src={member.img}
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
                      Ver más
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
