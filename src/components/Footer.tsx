import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import whatsappLogo from "@/assets/Whatsapp.jpg";
import logo from "@/assets/Logo.jpeg";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 md:py-20 px-6 md:px-12 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <a href="#top" className="inline-block mb-4">
              <img src={logo} alt="Wilson logo" className="h-[7.5rem] w-auto object-contain" />
            </a>
            <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">
              {t.footer.navigation}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="hover:opacity-60">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:opacity-60">
                  {t.nav.estudio}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:opacity-60">
                  {t.nav.casas}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:opacity-60">
                  {t.nav.proyectos}
                </a>
              </li>
              <li>
                <a href="#sustentabilidad" className="hover:opacity-60">
                  {t.nav.sustentabilidad}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-60">
                  {t.nav.servicios}
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:opacity-60">
                  {t.nav.proceso}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-60">
                  {t.nav.contacto}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">
              {t.footer.contact}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.google.com/maps/place/Fragata+Argentina+2063,+B1629+Pilar,+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <MapPin className="w-4 h-4" />
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="mailto:wilson.arquitectura5@gmail.com"
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491136115429"
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <Phone className="w-4 h-4" />
                  Teléfono
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wilson.arquitectura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60"
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
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491136115429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  {t.footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-[10px] uppercase tracking-[0.3em] opacity-50">
          <span>COPYRIGHT ULTRAARQUITECTURA 2014</span>
        </div>
      </div>
    </footer>
  );
}
