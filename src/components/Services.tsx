import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Services({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.services.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 tracking-tight">
            {t.services.heading}
          </h2>
          {mode === "home" ? (
            <div className="space-y-4">
              {t.services.serviceItems.map((service) => (
                <div
                  key={service.title}
                  className="border border-brand-black/10 bg-white px-5 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black bg-white text-sm font-semibold">
                      {service.number}
                    </span>
                    <span className="text-lg md:text-xl font-semibold">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {t.services.serviceItems.map((service, i) => (
                <AccordionItem key={service.title} value={`service-${i}`}>
                  <AccordionTrigger className="border border-brand-black/10 bg-white px-5 py-5 text-left transition hover:border-brand-black">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black bg-white text-sm font-semibold">
                        {service.number}
                      </span>
                      <span className="text-lg md:text-xl font-semibold">{service.title}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray whitespace-nowrap">
                        {t.common.readMore}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-brand-gray">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          <div className="mt-12 text-right">
            <a
              href="#servicios"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {t.common.seeMore}
            </a>
          </div>
        </div>

        <div id="proceso">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.services.processLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mb-6 tracking-tight">
            {t.services.processHeading}
          </h2>
          {mode === "section" ? (
            <p className="w-full max-w-none text-base leading-relaxed text-brand-gray mb-10">
              {t.services.processDescription}
            </p>
          ) : null}
          {mode === "home" ? (
            <div className="space-y-4">
              {t.services.processSteps.map(({ number, title }) => (
                <div
                  key={number}
                  className="border border-brand-black/10 bg-white px-5 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black bg-white text-sm font-semibold">
                      {number}
                    </span>
                    <span className="text-lg md:text-xl font-semibold">{title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-4.5 top-2 bottom-2 w-px bg-brand-black/15" />
              <div className="space-y-8">
                {t.services.processSteps.map(({ number, title, description }) => (
                  <div key={number} className="flex gap-6 items-start">
                    <div className="relative z-10 size-10 shrink-0 rounded-full bg-white border border-brand-black flex items-center justify-center text-[10px] font-bold tracking-widest">
                      {number}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-serif text-xl mb-1">{title}</h4>
                      <p className="text-sm text-brand-gray leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-12 text-right">
            <a
              href="#proceso"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {t.common.seeMore}
            </a>
          </div>
        </div>
      </div>
      {mode === "section" && (
        <div className="mt-12 text-right">
          <a
            href="#sustentabilidad"
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {t.common.seeMore}
          </a>
        </div>
      )}
    </section>
  );
}

export function ServiceCapabilities({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
          {t.services.sectionLabel}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl mb-4 tracking-tight">
          {t.services.heading}
        </h2>
        {mode === "section" ? (
          <p className="w-full max-w-none text-base leading-relaxed text-brand-gray mb-10">
            {t.services.capabilitiesDescription}
          </p>
        ) : null}
        <div className="space-y-0">
          <Accordion type="single" collapsible className="space-y-4">
            {t.services.serviceItems.map((service, i) => (
              <AccordionItem key={service.title} value={`service-${i}`}>
                <AccordionTrigger className="border border-brand-black/10 bg-white px-5 py-5 text-left transition hover:border-brand-black">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black bg-white text-sm font-semibold">
                      {service.number}
                    </span>
                    <span className="text-lg md:text-xl font-semibold">{service.title}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray whitespace-nowrap">
                      {t.common.readMore}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-brand-gray">{service.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();

  return (
    <section id="proceso" className="py-5 md:py-8 px-6 md:px-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
          {t.services.processLabel}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl mb-4 tracking-tight">
          {t.services.processHeading}
        </h2>
        {mode === "section" ? (
          <p className="w-full max-w-none text-base leading-relaxed text-brand-gray mb-10">
            {t.services.processDescription}
          </p>
        ) : null}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {t.services.processSteps.map(({ number, title, description }) => (
              <AccordionItem key={number} value={`process-step-${number}`}>
                <AccordionTrigger className="border border-brand-black/10 bg-white px-5 py-5 text-left transition hover:border-brand-black">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black bg-white text-sm font-semibold">
                      {number}
                    </span>
                    <span className="text-lg md:text-xl font-semibold">{title}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray whitespace-nowrap">
                      {t.common.readMore}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-4 text-sm text-brand-gray leading-relaxed">{description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
