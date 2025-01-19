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
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=Géant+Casino`,
  },
  {
    id: 3,
    name: "Comexposium",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=Comexposium`,
  },
  {
    id: 4,
    name: "RX",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=RX`,
  },
  {
    id: 5,
    name: "MSA",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=MSA`,
  },
  {
    id: 6,
    name: "ADVEO",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=ADVEO`,
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=Ministère+de+l'éducation+nationale`,
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=Ministère+des+armées`,
  },
  {
    id: 9,
    name: "CHIESI",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=CHIESI`,
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=LDLC+Pro`,
  },
  {
    id: 11,
    name: "SHELL",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=SHELL`,
  },
  {
    id: 12,
    name: "Parashop",
    logo: `https://placehold.co/200x100/F6F6F7/8E9196?text=Parashop`,
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