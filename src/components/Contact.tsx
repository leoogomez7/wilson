import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { SectionMode } from "@/components/SectionMode";
import whatsappLogo from "@/assets/Whatsapp.jpg";

export function Contact({ mode = "home" }: { mode?: SectionMode }) {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const type = String(form.get("type") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`${t.contact.mailtoSubject} ${name}`);
    const body = encodeURIComponent(
      `${t.contact.fields.name}: ${name}\n${t.contact.fields.email}: ${email}\n${t.contact.fields.phone}: ${phone}\n${t.contact.fields.type}: ${type}\n\n${t.contact.fields.message}:\n${message}`,
    );
    window.location.href = `https://wa.me/5491136115429?text=${body}`;
    setSent(true);
  };

  return (
    <section id="contacto" className="py-5 md:py-8 px-6 md:px-20 bg-white text-brand-black">
      <div className="w-full">
        <span className="text-[15px] uppercase tracking-[0.4em] text-brand-gray/60 block mb-4 text-center">
          {t.contact.sectionLabel}
        </span>

        {sent ? (
          <div className="text-center py-12 border border-brand-black/20">
            <p className="text-2xl font-serif mb-4">{t.contact.thankYou}</p>
            <p className="text-sm opacity-60 uppercase tracking-[0.3em]">
              {t.contact.sentMessage}
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10">
              <a
                href="https://wa.me/5491136115429"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-16 py-5 bg-brand-black text-white uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-brand-black/90 transition-colors whitespace-nowrap"
              >
                {t.contact.whatsappButton}
                <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4 object-contain" />
              </a>
            </div>
            {mode === "section" ? (
              <>
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-center tracking-tight">
                  {t.contact.heading}
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" onSubmit={onSubmit}>
                <Field label={t.contact.fields.name} name="name" required />
                <Field label={t.contact.fields.email} name="email" type="email" required />
                <Field label={t.contact.fields.phone} name="phone" />
                <Field label={t.contact.fields.type} name="type" placeholder={t.contact.fields.typePlaceholder} />
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-black">
                    {t.contact.fields.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-black/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors resize-none placeholder:text-brand-black/60"
                  />
                </div>
                <div className="md:col-span-2 pt-8 text-center">
                  <button
                    type="submit"
                    className="px-16 py-5 bg-brand-black text-white uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-brand-black/90 transition-colors whitespace-nowrap"
                  >
                    {t.contact.sendButton}
                  </button>
                </div>
              </form>
            </>
            ) : null}
          </>
        )}
      </div>
      {mode === "home" ? (
        <div className="mt-12 text-right">
          <a
            href="#contacto"
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {t.common.seeMore}
          </a>
        </div>
      ) : null}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-black">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-brand-black/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-black/60"
      />
    </div>
  );
}


