import { useEffect, useState } from "react";
import { useTranslation, type Locale } from "@/lib/i18n";
import logo from "@/assets/Logo.jpeg";

type NavLabelKey =
  | "home"
  | "estudio"
  | "casas"
  | "proyectos"
  | "sustentabilidad"
  | "servicios"
  | "proceso"
  | "otrosServicios"
  | "contacto";

const navLinks: Array<{ href: string; labelKey: NavLabelKey }> = [
  { href: "#top", labelKey: "home" },
  { href: "#estudio", labelKey: "estudio" },
  { href: "#casas", labelKey: "casas" },
  { href: "#proyectos", labelKey: "proyectos" },
  { href: "#servicios", labelKey: "servicios" },
  { href: "#sustentabilidad", labelKey: "sustentabilidad" },
  { href: "#proceso", labelKey: "proceso" },
  { href: "#servicios", labelKey: "otrosServicios" },
  { href: "#contacto", labelKey: "contacto" },
];

export function Navbar({ onSelectSection }: { onSelectSection?: (section: NavLabelKey) => void }) {
  const { t, language, setLanguage } = useTranslation();
  const languageOptions = Object.entries(t.nav.languageOptions) as Array<[Locale, string]>;
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/85 backdrop-blur-md py-4 text-brand-black">
      <div className="px-6 md:px-12 flex items-center">
        <a href="#top" className="block mr-auto">
          <img src={logo} alt="Wilson logo" className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center justify-end flex-nowrap gap-6 text-[10px] uppercase tracking-[0.3em] font-medium">
          {navLinks.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                onSelectSection?.(item.labelKey);
              }}
              className="hover:opacity-50 transition-opacity whitespace-nowrap"
            >
              {t.nav[item.labelKey]}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={languageOpen}
              className="uppercase tracking-[0.3em] hover:opacity-50 transition-opacity whitespace-nowrap"
            >
              {t.nav.language}
            </button>
            {languageOpen && (
              <div className="absolute right-0 mt-3 min-w-44 rounded-xl border border-border bg-white text-brand-black shadow-xl">
                <div className="flex flex-col">
                  {languageOptions.map(([lang, label]) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setLanguageOpen(false);
                      }}
                      className={`text-left px-4 py-3 text-sm uppercase tracking-[0.3em] transition-colors hover:bg-brand-light/80 whitespace-nowrap ${
                        language === lang ? "font-bold" : "opacity-70"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          aria-label={open ? t.nav.menuToggleAriaClose : t.nav.menuToggleAriaOpen}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[10px] uppercase tracking-widest whitespace-nowrap"
        >
          {open ? t.nav.menuClose : t.nav.menuOpen}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-border text-brand-black px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                onSelectSection?.(item.labelKey);
              }}
              className="text-sm uppercase tracking-[0.3em] whitespace-nowrap"
            >
              {t.nav[item.labelKey]}
            </a>
          ))}
          <div>
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              className="text-sm uppercase tracking-[0.3em] hover:opacity-50 transition-opacity whitespace-nowrap"
            >
              {t.nav.language}
            </button>
            {languageOpen && (
              <div className="mt-3 space-y-2 pl-4">
                {languageOptions.map(([lang, label]) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLanguage(lang);
                      setLanguageOpen(false);
                      setOpen(false);
                    }}
                    className={`block w-full text-left text-sm uppercase tracking-[0.3em] transition-opacity whitespace-nowrap ${
                      language === lang ? "opacity-100 font-bold" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
