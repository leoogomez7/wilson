import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import whatsappLogo from "@/assets/Whatsapp.jpg";

export function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="mapa" className="bg-white border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4">
            {t.map.sectionLabel}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mb-8 tracking-tight">{t.map.heading}</h2>
          <p className="text-brand-gray leading-relaxed mb-8 max-w-md">
            {t.map.description}
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Facebook className="size-4 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.facebookLabel}
                </span>
                <a
                  href="https://www.facebook.com/people/Wilson-Arquitectura/100067440165213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-black"
                >
                  Wilson Arquitectura
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4 object-contain mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.whatsappLabel}
                </span>
                <a href="https://wa.me/5491136115429" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black">
                  +54 9 11 3611-5429
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="size-4 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.instagramLabel}
                </span>
                <a
                  href="https://www.instagram.com/wilson.arquitectura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-black"
                >
                  @wilson.arquitectura
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-4 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.emailLabel}
                </span>
                <a href="mailto:wilson.arquitectura5@gmail.com" className="hover:text-brand-black">
                  wilson.arquitectura5@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-4 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.telLabel}
                </span>
                <a href="tel:+5491136115429" className="hover:text-brand-black">
                  +54 9 11 3611-5429
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-1">
                  {t.map.addressLabel}
                </span>
                <a
                  href="https://www.google.com/maps/place/Fragata+Argentina+2063,+B1629+Pilar,+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-black"
                >
                  Fragata Argentina 2063, Pilar, Argentina
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Fragata+Argentina+2063,+B1629+Pilar,+Provincia+de+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 self-start border border-brand-black px-8 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-black hover:text-white transition-colors"
          >
            {t.map.howToGetThere}
          </a>
        </div>
        <div className="min-h-100 lg:min-h-130">
          <iframe
            title={t.map.locationTitle}
            src="https://www.google.com/maps?q=Fragata+Argentina+2063,+B1629+Pilar,+Provincia+de+Buenos+Aires&output=embed"
            loading="lazy"
            className="w-full h-full grayscale"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
