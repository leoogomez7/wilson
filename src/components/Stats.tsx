import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/i18n";

const stats = [
  { value: 12, prefix: "+", label: "Años de Experiencia" },
  { value: 100, suffix: "+", label: "Proyectos Realizados" },
  { value: 5000, label: "m² Construidos", format: (n: number) => `${(n / 1000).toFixed(0)}k+` },
];

function Counter({
  target,
  format,
  prefix,
  suffix,
}: {
  target: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const duration = 1800;
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {format ? format(n) : `${prefix ?? ""}${n}${suffix ?? ""}`}
    </span>
  );
}

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-black text-white py-5 md:py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span className="block text-5xl md:text-7xl font-serif mb-3 tracking-tight">
              <Counter target={s.value} format={s.format} prefix={s.prefix} suffix={s.suffix} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 text-right">
        <a
          href="#concepto"
          className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
        >
          {t.common.seeMore}
        </a>
      </div>
    </section>
  );
}
