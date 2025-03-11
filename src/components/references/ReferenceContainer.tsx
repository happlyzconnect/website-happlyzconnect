
import { Breadcrumb } from "@/components/Breadcrumb";
import { ClientLogoGrid } from "./ClientLogoGrid";
import { PartnersSection } from "./PartnersSection";
import { ProjectCards } from "./ProjectCards";
import { CallToAction } from "./CallToAction";
import { MetaDescription } from "@/components/MetaDescription";

export const ReferenceContainer = () => {
  return (
    <>
      <MetaDescription 
        title="Nos références | HAPPLYZ CONNECT" 
        description="Découvrez nos réalisations pour des clients comme Decathlon, Casino, Shell et le Ministère de l'Éducation Nationale. Projets d'affichage dynamique et équipements audiovisuels."
        image="/lovable-uploads/9bb5ce3d-5e9c-4bd1-ada5-8ca33bb73365.png"
      />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Nos références", href: "/nos-references" },
            ]}
          />

          <div 
            className="relative w-full h-[400px] rounded-xl overflow-hidden mb-16 shadow-lg"
          >
            <img 
              src="/lovable-uploads/9bb5ce3d-5e9c-4bd1-ada5-8ca33bb73365.png" 
              alt="CHIESI Bois-Colombes - Salle de réunion équipée par HAPPLYZ CONNECT" 
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent flex flex-col justify-center px-8 md:px-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nos références
              </h1>
              <p className="text-white text-lg md:text-xl max-w-xl">
                Découvrez les projets réalisés pour nos clients dans différents secteurs d'activité
              </p>
            </div>
          </div>

          <ClientLogoGrid />
          <ProjectCards />
          <PartnersSection />
          <CallToAction />
        </div>
      </div>
    </>
  );
};
