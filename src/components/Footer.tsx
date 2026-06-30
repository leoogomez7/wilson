import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import whatsappLogo from "@/assets/Whatsapp.jpg";
import logo from "@/assets/Logo.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 md:py-20 px-6 md:px-12 border-t border-border bg-slate-100 text-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <a href="#top" className="inline-block mb-4">
              <img src={logo} alt={t.footer.logoAlt} className="h-20 md:h-24 w-auto object-contain" />
            </a>
            <p className="text-sm md:text-base text-brand-gray leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>
          <div>
            <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold block mb-4">
              {t.footer.navigation}
            </span>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#top" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#estudio" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.estudio}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.casas}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.proyectos}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.servicios}
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.proceso}
                </a>
              </li>
              <li>
                <a href="#sustentabilidad" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.sustentabilidad}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.otrosServicios}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-60 whitespace-nowrap">
                  {t.nav.contacto}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold block mb-4">
              {t.footer.contact}
            </span>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a
                  href="https://www.google.com/maps/place/Fragata+Argentina+2063,+B1629+Pilar,+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  {t.footer.location}
                </a>
              </li>
              <li>
                <a
                  href="mailto:wilson.arquitectura5@gmail.com"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  {t.footer.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491136115429"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wilson.arquitectura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4" />
                  {t.footer.instagram}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Wilson-Arquitectura/100067440165213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <Facebook className="w-4 h-4" />
                  {t.footer.facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491136115429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60 whitespace-nowrap"
                >
                  <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  {t.footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-[10px] md:text-sm uppercase tracking-[0.3em] opacity-50">
          <span>{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</span>
        </div>
      </div>
    </footer>
  );
}


