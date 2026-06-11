import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
  head: () => ({
    meta: [
      { title: "Wilson Arquitectura — Estudio de Arquitectura en Buenos Aires" },
      {
        name: "description",
        content:
          "Estudio de arquitectura contemporánea en Buenos Aires. Proyectos residenciales, comerciales, dirección de obra, interiorismo y gestión integral.",
      },
      { property: "og:title", content: "Wilson Arquitectura — Estudio Premium" },
      {
        property: "og:description",
        content:
          "Diseñamos espacios que trascienden. Arquitectura, dirección de obra e interiorismo en Buenos Aires.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
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

  const handleSectionChange = (section: SectionKey) => {
    setActiveSection(section === "home" ? "all" : section);
    if (typeof window !== "undefined") {
      const hash = section === "home" ? "top" : section;
      window.history.replaceState(null, "", `#${hash}`);
    }
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar onSelectSection={(section) => handleSectionChange(section as SectionKey)} />
      <main id="top" className="pt-20">
        {activeSection === "all" && <Hero />}
        {activeSection === "all" && <Stats />}
        {activeSection === "all" && <History mode={sectionMode} />}
        {activeSection === "all" && <Team mode={sectionMode} />}
        {activeSection === "all" && <Projects mode={sectionMode} />}
        {activeSection === "all" && <Sustainability mode={sectionMode} />}
        {activeSection === "all" && <Services mode={sectionMode} />}
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
