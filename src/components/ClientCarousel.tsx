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
    url: "https://www.decathlon.fr/"
  },
  {
    id: 2,
    name: "Géant Casino",
    logo: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png",
    className: "scale-150",
    url: "https://petitcasino.casino.fr/fr"
  },
  {
    id: 3,
    name: "Comexposium",
    logo: "/lovable-uploads/c84db821-b445-4537-a9e1-981604fd2c2b.png",
    url: "https://www.comexposium.com/"
  },
  {
    id: 4,
    name: "RX",
    logo: "/lovable-uploads/f5c4ccd9-3e0c-4214-8c98-2d65b936f03d.png",
    url: "https://rxglobal.fr/fr"
  },
  {
    id: 5,
    name: "MSA",
    logo: "/lovable-uploads/ec4384d3-38ac-41ab-b9ea-93796b792b22.png",
    url: "https://www.msa.fr/lfp"
  },
  {
    id: 6,
    name: "ADVEO",
    logo: "/lovable-uploads/bb6b76a3-bda7-49e7-bf65-c515d63c871d.png",
    url: "https://www.adveo.com/"
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    url: "https://www.education.gouv.fr/"
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: "/lovable-uploads/eec9b5b7-0231-42b9-9c55-a7e936bba042.png",
    url: "https://www.defense.gouv.fr/"
  },
  {
    id: 9,
    name: "CHIESI",
    logo: "/lovable-uploads/8e724d65-794a-4f72-8a5f-e11f630434b0.png",
    url: "https://www.chiesi.fr/"
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: "/lovable-uploads/03182aed-5f37-4d1a-be82-ec16661863f4.png",
    url: "https://www.ldlc.pro/"
  },
  {
    id: 11,
    name: "SHELL",
    logo: "/lovable-uploads/19b743ae-bd85-4856-a139-e57628ea5eaf.png",
    url: "https://www.shell.fr/"
  },
  {
    id: 12,
    name: "Parashop",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    url: "https://www.parashop.com/"
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
                <div className="p-4 h-32 flex items-center justify-center">
                  {client.url ? (
                    <a 
                      href={client.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={client.logo}
                        alt={`Logo de ${client.name}`}
                        className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={client.logo}
                      alt={`Logo de ${client.name}`}
                      className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                      loading="lazy"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};