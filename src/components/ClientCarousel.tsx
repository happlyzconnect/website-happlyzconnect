import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  {
    id: 1,
    name: "Decathlon",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
  },
  {
    id: 2,
    name: "Géant Casino",
    logo: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png",
    className: "scale-150" // Ajout d'une classe spécifique pour ce logo
  },
  {
    id: 3,
    name: "Comexposium",
    logo: "https://www.comexposium.fr/content/uploads/2021/03/comexposium-logo.png",
  },
  {
    id: 4,
    name: "RX",
    logo: "https://rxglobal.com/images/RX_Logo_Grad_RGB.png",
  },
  {
    id: 5,
    name: "MSA",
    logo: "https://www.msa.fr/themes/custom/msa_theme/images/logo-msa.svg",
  },
  {
    id: 6,
    name: "ADVEO",
    logo: "https://www.adveo.com/wp-content/uploads/2019/03/adveo-logo.png",
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: "https://www.education.gouv.fr/sites/default/files/styles/image_bandeau/public/2020-02/logo-menj-1257776.jpg",
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: "https://www.defense.gouv.fr/sites/default/files/ministere-armees/Logo_Minarm.png",
  },
  {
    id: 9,
    name: "CHIESI",
    logo: "https://www.chiesi.com/img/logo-chiesi.svg",
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: "https://www.ldlc-pro.com/Content/img/logo_ldlc.svg",
  },
  {
    id: 11,
    name: "SHELL",
    logo: "https://logos-marques.com/wp-content/uploads/2020/01/Shell-Logo.png",
  },
  {
    id: 12,
    name: "Parashop",
    logo: "https://www.parashop.com/skin/frontend/parashop/default/images/logo.png",
  },
];

export const ClientCarousel = () => {
  const plugin = React.useMemo(() => Autoplay({ delay: 5000, stopOnInteraction: false }), []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-business-primary mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-business-secondary text-lg">
            Des entreprises de toute la France nous confient leurs projets audiovisuels
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            slidesToScroll: 4
          }}
          plugins={[plugin]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client) => (
              <CarouselItem key={client.id} className="pl-2 md:pl-4 basis-1/4">
                <div className="p-4 h-24 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className={`w-full h-full object-contain ${client.className || ''}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
