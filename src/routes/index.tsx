import { createFileRoute, HeadContent } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { useTranslation } from "@/lib/i18n";
import { History } from "@/components/History";
import { Projects } from "@/components/Projects";
import { Casas } from "@/components/Casas";
import { Stats } from "@/components/Stats";
import { Services, ServiceCapabilities, ServiceProcess } from "@/components/Services";
import { Sustainability } from "@/components/Sustainability";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { SectionMode } from "@/components/SectionMode";

export const Route = createFileRoute("/")({
  component: Index,
});

type SectionKey =
  | "all"
  | "home"
  | "estudio"
  | "casas"
  | "proyectos"
  | "sustentabilidad"
  | "servicios"
  | "proceso"
  | "contacto";

function Index() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<SectionKey>("all");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const resolveHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "top" || hash === "home") {
        setActiveSection("all");
        return;
      }

      if (
        hash === "estudio" ||
        hash === "casas" ||
        hash === "proyectos" ||
        hash === "sustentabilidad" ||
        hash === "servicios" ||
        hash === "proceso" ||
        hash === "contacto"
      ) {
        setActiveSection(hash as SectionKey);
      } else {
        setActiveSection("all");
      }
    };

    resolveHash();
    window.addEventListener("hashchange", resolveHash);
    return () => window.removeEventListener("hashchange", resolveHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (activeSection !== "all") {
      window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 0);
    }
  }, [activeSection]);

  const handleSectionChange = (section: SectionKey) => {
    const nextSection = section === "home" ? "all" : section;
    const hash = section === "home" ? "top" : section;

    if (typeof window !== "undefined") {
      if (activeSection === nextSection) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      window.history.replaceState(null, "", `#${hash}`);
    }

    setActiveSection(nextSection);
  };

  const sectionMode: SectionMode = activeSection === "all" ? "home" : "section";

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Navbar onSelectSection={(section) => handleSectionChange(section as SectionKey)} />
      <main id="top" className="pt-20">
        {activeSection === "all" && <Hero />}
        {activeSection === "all" && <Stats />}
        {activeSection === "all" && <History mode={sectionMode} />}
        {activeSection === "all" && <Team mode={sectionMode} />}
        {activeSection === "all" && <Projects mode={sectionMode} />}
        {activeSection === "all" && <Services mode={sectionMode} />}
        {activeSection === "all" && <Sustainability mode={sectionMode} />}
        {activeSection === "all" && <Contact mode={sectionMode} />}
        {activeSection === "all" && <MapSection />}

        {activeSection === "estudio" && <Team mode={sectionMode} />}
        {activeSection === "casas" && <Casas mode={sectionMode} />}
        {activeSection === "proyectos" && <Projects mode={sectionMode} />}
        {activeSection === "sustentabilidad" && <Sustainability mode={sectionMode} />}
        {activeSection === "servicios" && <ServiceCapabilities mode={sectionMode} />}
        {activeSection === "proceso" && <ServiceProcess mode={sectionMode} />}
        {activeSection === "contacto" && <Contact mode={sectionMode} />}
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
