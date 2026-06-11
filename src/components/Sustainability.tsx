import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import { Leaf, Wind, Thermometer, Box, Zap, Cpu, TreeDeciduous, Sun } from "lucide-react";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";

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
          <>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {t.sustainability.points.map((point) => (
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
                Entendemos la arquitectura como una herramienta para mejorar la forma en que vivimos. Por eso desarrollamos proyectos que combinan diseño, innovación y compromiso ambiental, aprovechando los recursos de manera inteligente y responsable. Cada obra es concebida para generar bienestar, reducir el impacto ecológico y construir un futuro más sostenible para las próximas generaciones.
              </p>
              <div className="overflow-hidden rounded-[2rem] bg-brand-light">
                <img src={s2} alt="Sustentabilidad 2" className="w-full h-auto object-cover" />
              </div>
              <p className="text-base leading-relaxed text-brand-gray max-w-4xl mx-auto">
                Cada proyecto refleja nuestra visión de una arquitectura inteligente y sostenible. Diseñamos espacios que no solo destacan por su identidad y calidad constructiva, sino también por su eficiencia energética y respeto por el entorno. Apostamos por soluciones que generan bienestar, reducen el consumo de recursos y contribuyen a construir un futuro más consciente y duradero.
              </p>
              <div className="overflow-hidden rounded-[2rem] bg-brand-light">
                <img src={s3} alt="Sustentabilidad 3" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-10">Principios de Diseño</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Confort Bioclimático</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Diseñamos espacios que aprovechan las condiciones naturales del entorno para mejorar el confort térmico y lumínico durante todo el año, reduciendo la dependencia de sistemas mecánicos.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Wind className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Circulación de Aire Optimizada</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Planificamos la distribución de los ambientes y las aberturas para favorecer la ventilación cruzada, mejorando la calidad del aire interior y la eficiencia energética.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Materiales Responsables</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Seleccionamos materiales duraderos, eficientes y de bajo impacto ambiental, priorizando soluciones que aporten sostenibilidad y valor a largo plazo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Box className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Implantación Estratégica</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Cada proyecto se adapta a las características específicas del terreno, considerando orientación solar, vientos predominantes, topografía y contexto urbano.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Eficiencia Energética</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Incorporamos tecnologías y recursos que optimizan el consumo energético, promoviendo edificaciones más eficientes y sostenibles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Tecnología Integrada</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Aplicamos soluciones inteligentes para automatizar funciones clave del edificio, mejorando la seguridad, el confort y la gestión de recursos.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <TreeDeciduous className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Espacios Verdes Funcionales</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Integramos áreas vegetadas que aportan bienestar, mejoran el microclima y fortalecen la relación entre arquitectura y naturaleza.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-black text-white">
                    <Sun className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Iluminación Eficiente</h4>
                    <p className="text-sm leading-relaxed text-brand-gray mt-2">
                      Utilizamos sistemas de iluminación de alta eficiencia que combinan rendimiento, durabilidad y una experiencia visual cuidadosamente diseñada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 rounded-[2rem] border border-border bg-brand-light p-12 text-center">
              <p className="text-xl md:text-3xl font-semibold leading-tight">
                Si vamos a construir el futuro, que sea sostenible y trascendente.
              </p>
            </div>
          </>
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
