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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png",
  },
  {
    id: 2,
    name: "Géant Casino",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logo_G%C3%A9ant_Casino.svg/2560px-Logo_G%C3%A9ant_Casino.svg.png",
  },
  {
    id: 3,
    name: "Comexposium",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/7d/Logo_Comexposium.svg/1280px-Logo_Comexposium.svg.png",
  },
  {
    id: 4,
    name: "RX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/RX_logo.svg/2560px-RX_logo.svg.png",
  },
  {
    id: 5,
    name: "MSA",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/90/Logo_MSA.svg/1280px-Logo_MSA.svg.png",
  },
  {
    id: 6,
    name: "ADVEO",
    logo: "https://www.adveo.com/wp-content/uploads/2019/03/adveo-logo.png",
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Minist%C3%A8re_de_l%27%C3%89ducation_Nationale.svg/1280px-Minist%C3%A8re_de_l%27%C3%89ducation_Nationale.svg.png",
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Minist%C3%A8re_des_Arm%C3%A9es_%28depuis_2017%29.svg/1280px-Minist%C3%A8re_des_Arm%C3%A9es_%28depuis_2017%29.svg.png",
  },
  {
    id: 9,
    name: "CHIESI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chiesi_Farmaceutici_logo.svg/2560px-Chiesi_Farmaceutici_logo.svg.png",
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/51/Logo_LDLC.svg/1280px-Logo_LDLC.svg.png",
  },
  {
    id: 11,
    name: "SHELL",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/92/Shell_logo.svg/1280px-Shell_logo.svg.png",
  },
  {
    id: 12,
    name: "Parashop",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2d/Logo_Parashop.svg/1280px-Logo_Parashop.svg.png",
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
                <div className="p-4">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="w-full h-auto object-contain"
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