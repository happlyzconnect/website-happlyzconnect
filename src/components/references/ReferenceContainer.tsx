
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetaDescription } from "@/components/MetaDescription";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ClientLogoGrid } from "./ClientLogoGrid";
import { ProjectCards } from "./ProjectCards";
import { CallToAction } from "./CallToAction";
import { motion } from "framer-motion";

export const ReferenceContainer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description="Découvrez les projets réalisés par HAPPLYZ CONNECT pour ses clients: écrans interactifs, affichage dynamique et solutions audiovisuelles." />
      <Navigation />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 pt-4">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Nos références" }
              ]} 
            />
          </div>
          
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-business-primary">
              Nos références
            </h1>
            <div className="h-1 w-20 bg-[#56C7E1] mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl">
              Découvrez les projets réalisés par HAPPLYZ CONNECT pour ses clients. Nous accompagnons des entreprises 
              de toutes tailles dans leur transformation numérique grâce à nos solutions d'affichage dynamique et d'équipements audiovisuels.
            </p>
          </section>
          
          <ClientLogoGrid />
          <ProjectCards />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};
