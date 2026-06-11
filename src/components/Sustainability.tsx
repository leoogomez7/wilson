import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import { Leaf, Wind, Thermometer, Box, Zap, Cpu, TreeDeciduous, Sun } from "lucide-react";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";

export function Sustainability({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const sectionId = mode === "home" ? "sustentabilidad-home" : "sustentabilidad";
  const sustainability = t.sustainability as {
    sectionLabel: string;
    heading: string;
    description: string;
    points: readonly { title: string; description: string }[];
    body1: string;
    body2: string;
    designPrinciplesHeading: string;
    callout: string;
    principles: readonly { title: string; description: string }[];
  };
  const principleIcons = [
    Thermometer,
    Wind,
    Leaf,
    Box,
    Zap,
    Cpu,
    TreeDeciduous,
    Sun,
  ];

  return (
    <section id={sectionId} className="py-5 md:py-8 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {mode === "section" ? (
          <>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
              {sustainability.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-10">
              {sustainability.heading}
            </h2>
            <p className="text-brand-gray leading-relaxed max-w-3xl mb-12">
              {sustainability.description}
            </p>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {sustainability.points.map((point) => (
                <div key={point.title} className="border border-border p-8 rounded-xl">
                  <h3 className="font-serif text-2xl mb-3">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-gray">{point.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-10">
              <div className="overflow-hidden rounded-[2rem] bg-brand-light">
                <img src={s1} alt="Sustentabilidad 1" className="w-full h-auto object-cover" />
              </div>
              <p className="text-base leading-relaxed text-brand-gray max-w-4xl mx-auto">
                {sustainability.body1}
              </p>
              <div className="overflow-hidden rounded-[2rem] bg-brand-light">
                <img src={s2} alt="Sustentabilidad 2" className="w-full h-auto object-cover" />
              </div>
              <p className="text-base leading-relaxed text-brand-gray max-w-4xl mx-auto">
                {sustainability.body2}
              </p>
              <div className="overflow-hidden rounded-[2rem] bg-brand-light">
                <img src={s3} alt="Sustentabilidad 3" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-10">{sustainability.designPrinciplesHeading}</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {sustainability.principles.map((principle, index) => {
                  const Icon = principleIcons[index] || TreeDeciduous;
                  return (
                    <div key={principle.title} className="flex gap-4">
                      <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl">{principle.title}</h4>
                        <p className="text-sm leading-relaxed text-brand-gray mt-2">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-16 rounded-[2rem] border border-border bg-brand-light p-12 text-center">
              <p className="text-xl md:text-3xl font-semibold leading-tight">
                {sustainability.callout}
              </p>
            </div>
          </>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-brand-light">
              <img src={s2} alt="Sustentabilidad" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
                {sustainability.sectionLabel}
              </span>
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-8">
                {sustainability.heading}
              </h2>
              <p className="text-base leading-relaxed text-brand-gray mb-10">
                {sustainability.description}
              </p>
              <div className="text-left">
                <a
                  href="#sustentabilidad"
                  className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
                >
                  {t.common.seeMore}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
