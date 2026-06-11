import { Facebook, Instagram, Mail } from "lucide-react";
import whatsappLogo from "@/assets/Whatsapp.jpg";

export function FloatingActions() {
  return (
    <div className="fixed right-4 md:right-6 bottom-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/5491136115429?text=Hola%20Wilson%20Arquitectura%2C%20quisiera%20realizar%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="size-12 md:size-14 rounded-full bg-white text-black border border-brand-black grid place-items-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="h-7 w-7 object-contain" />
      </a>
      <a
        href="https://www.instagram.com/wilson.arquitectura"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="size-12 md:size-14 rounded-full bg-white border border-brand-black text-brand-black grid place-items-center shadow-md hover:scale-110 transition-transform"
      >
        <Instagram className="size-6" />
      </a>
      <a
        href="https://www.facebook.com/people/Wilson-Arquitectura/100067440165213"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="size-12 md:size-14 rounded-full bg-white border border-brand-black text-brand-black grid place-items-center shadow-md hover:scale-110 transition-transform"
      >
        <Facebook className="size-6" />
      </a>
      <a
        href="mailto:wilson.arquitectura5@gmail.com"
        aria-label="Enviar correo"
        className="size-12 md:size-14 rounded-full bg-white border border-brand-black text-brand-black grid place-items-center shadow-md hover:scale-110 transition-transform"
      >
        <Mail className="size-6" />
      </a>
    </div>
  );
}
