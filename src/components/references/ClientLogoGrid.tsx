
import { motion } from "framer-motion";
import { useState } from "react";

const trustedClients = [
  {
    id: 1,
    name: "Decathlon",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    url: "https://www.decathlon.fr/",
    alt: "Logo Decathlon - Client HAPPLYZ CONNECT"
  },
  {
    id: 2,
    name: "Géant Casino",
    logo: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png",
    className: "scale-150",
    url: "https://petitcasino.casino.fr/fr",
    alt: "Logo Géant Casino - Client HAPPLYZ CONNECT"
  },
  {
    id: 3,
    name: "Comexposium",
    logo: "/lovable-uploads/c84db821-b445-4537-a9e1-981604fd2c2b.png",
    url: "https://www.comexposium.com/",
    alt: "Logo Comexposium - Client HAPPLYZ CONNECT"
  },
  {
    id: 4,
    name: "RX",
    logo: "/lovable-uploads/f5c4ccd9-3e0c-4214-8c98-2d65b936f03d.png",
    url: "https://rxglobal.fr/fr",
    alt: "Logo RX - Client HAPPLYZ CONNECT"
  },
  {
    id: 5,
    name: "MSA",
    logo: "/lovable-uploads/ec4384d3-38ac-41ab-b9ea-93796b792b22.png",
    url: "https://www.msa.fr/lfp",
    alt: "Logo MSA - Client HAPPLYZ CONNECT"
  },
  {
    id: 6,
    name: "ADVEO",
    logo: "/lovable-uploads/bb6b76a3-bda7-49e7-bf65-c515d63c871d.png",
    url: "https://www.adveo.com/",
    alt: "Logo ADVEO - Client HAPPLYZ CONNECT"
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    url: "https://www.education.gouv.fr/",
    alt: "Logo Ministère de l'éducation nationale - Client HAPPLYZ CONNECT"
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: "/lovable-uploads/eec9b5b7-0231-42b9-9c55-a7e936bba042.png",
    url: "https://www.defense.gouv.fr/",
    alt: "Logo Ministère des armées - Client HAPPLYZ CONNECT"
  },
  {
    id: 9,
    name: "CHIESI",
    logo: "/lovable-uploads/8e724d65-794a-4f72-8a5f-e11f630434b0.png",
    url: "https://www.chiesi.fr/",
    alt: "Logo CHIESI - Client HAPPLYZ CONNECT"
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: "/lovable-uploads/03182aed-5f37-4d1a-be82-ec16661863f4.png",
    url: "https://www.ldlc.pro/",
    alt: "Logo LDLC Pro - Client HAPPLYZ CONNECT"
  },
  {
    id: 11,
    name: "SHELL",
    logo: "/lovable-uploads/19b743ae-bd85-4856-a139-e57628ea5eaf.png",
    url: "https://www.shell.fr/",
    alt: "Logo SHELL - Client HAPPLYZ CONNECT"
  },
  {
    id: 12,
    name: "Parashop",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    url: "https://www.parashop.com/",
    alt: "Logo Parashop - Client HAPPLYZ CONNECT"
  },
];

export const ClientLogoGrid = () => {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (clientId: number) => {
    setFailedImages(prev => [...prev, clientId]);
  };

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-business-primary mb-4">
          Ils nous font confiance
        </h2>
        <div className="h-1 w-16 bg-[#56C7E1] mx-auto mb-6"></div>
        <p className="text-business-secondary text-lg max-w-2xl mx-auto">
          Des entreprises de toute la France nous confient leurs projets audiovisuels
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
        {trustedClients.map((client) => (
          <div key={client.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {client.url ? (
              <a 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-24 flex items-center justify-center"
                aria-label={`Visiter le site de ${client.name}`}
              >
                {failedImages.includes(client.id) ? (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <div className="text-xs text-center">{client.name}</div>
                  </div>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                    loading="lazy"
                    onError={() => handleImageError(client.id)}
                  />
                )}
              </a>
            ) : (
              <>
                {failedImages.includes(client.id) ? (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <div className="text-xs text-center">{client.name}</div>
                  </div>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                    loading="lazy"
                    onError={() => handleImageError(client.id)}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
