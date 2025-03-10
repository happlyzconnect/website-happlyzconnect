
import { motion } from "framer-motion";

type Partner = {
  id: number;
  name: string;
  logo: string;
  url: string;
  alt: string;
  className?: string;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Samsung",
    logo: "/lovable-uploads/9bc82803-969d-4922-ab75-d9bb2d008865.png",
    url: "https://www.samsung.com/fr/business/",
    alt: "Logo Samsung - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 2,
    name: "LG",
    logo: "/lovable-uploads/abc04b44-9fdb-406f-b803-bcd765972200.png",
    url: "https://www.lg.com/fr/business/",
    alt: "Logo LG - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 3,
    name: "IIYAMA",
    logo: "/lovable-uploads/36b004ce-4c72-4304-9822-a96c4448b16a.png",
    url: "https://iiyama.com/fr_fr/",
    alt: "Logo IIYAMA - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 4,
    name: "BARCO",
    logo: "/lovable-uploads/cd6c36a5-3f84-4bb5-91e3-31438ccd2596.png",
    url: "https://www.barco.com/fr/",
    alt: "Logo BARCO - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 5,
    name: "YEALINK",
    logo: "/lovable-uploads/d1266ec2-fb47-40cf-936d-49f96f2cabe0.png",
    url: "https://www.yealink.com/fr/",
    alt: "Logo YEALINK - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 6,
    name: "LOGITECH",
    logo: "/lovable-uploads/ddf6c41d-f718-4773-81b6-8f32291ab1aa.png",
    url: "https://www.logitech.com/fr-fr/business/",
    alt: "Logo LOGITECH - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 7,
    name: "AVER",
    logo: "/lovable-uploads/f5517ee8-d1dc-4636-a220-a3e24e24a2b9.png",
    url: "https://www.avereurope.com/fr/",
    alt: "Logo AVER - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 8,
    name: "POLY",
    logo: "/lovable-uploads/9efb9de3-9e32-439a-9103-8cda950cf50a.png",
    url: "https://www.poly.com/fr/fr",
    alt: "Logo POLY - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 9,
    name: "NUREVA",
    logo: "/lovable-uploads/a8ea6c69-c84d-4e4d-8bac-cecc3b239f6e.png",
    url: "https://www.nureva.com/",
    alt: "Logo NUREVA - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 10,
    name: "KIMEX",
    logo: "/lovable-uploads/872b743d-ffe4-44a9-8724-8fa8e374900c.png",
    url: "https://www.kimex.fr/",
    alt: "Logo KIMEX - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 11,
    name: "FVS",
    logo: "/lovable-uploads/6d4ad48c-9043-4e66-972f-c46716ebe863.png",
    url: "https://www.fvs.fr/",
    alt: "Logo FVS - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 12,
    name: "OSF",
    logo: "/lovable-uploads/900715a0-07e8-4ae4-9d0a-17c77df0d5cc.png",
    url: "https://www.osf-global.com/",
    alt: "Logo OSF - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 13,
    name: "EET",
    logo: "/lovable-uploads/2ebcea0f-e4d2-4209-baee-56b58402fc0d.png",
    url: "https://fr.eetgroup.com/",
    alt: "Logo EET - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 14,
    name: "SIDEV",
    logo: "/lovable-uploads/233dc3f1-9c13-44fd-976d-02c7ed01b406.png",
    url: "https://www.sidev.fr/",
    alt: "Logo SIDEV - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 15,
    name: "ONE DIRECT",
    logo: "/lovable-uploads/a0f99984-2903-4518-9b7b-f01981e1b63f.png",
    url: "https://www.onedirect.fr/",
    alt: "Logo ONE DIRECT - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 16,
    name: "WINTER MUSHROOM",
    logo: "/lovable-uploads/e549e333-c1c3-4df2-91c9-0c8dcb152cff.png",
    url: "https://www.wintermushroom.com/",
    alt: "Logo WINTER MUSHROOM - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 17,
    name: "Magic Info",
    logo: "/lovable-uploads/47f2d179-410e-4609-9a5f-48c0403ee5df.png",
    url: "https://www.samsung.com/global/business/display/solutions/digital-signage-solution/magicinfo/",
    alt: "Logo Magic Info - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 18,
    name: "EMITY",
    logo: "/lovable-uploads/a87577c5-d016-4ced-ac2a-b467c5f53a00.png",
    url: "https://www.emity.fr/",
    alt: "Logo EMITY - Partenaire HAPPLYZ CONNECT"
  },
];

export const PartnersSection = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-business-primary mb-4">
          Nos partenaires
        </h2>
        <div className="h-1 w-16 bg-[#56C7E1] mx-auto mb-6"></div>
        <p className="text-business-secondary text-lg max-w-2xl mx-auto">
          Nous collaborons avec les meilleurs acteurs du marché pour vous proposer des solutions de qualité
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-16 sm:h-20">
            {partner.url ? (
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
                aria-label={`Visiter le site de ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className={`max-w-[80%] max-h-[80%] object-contain ${partner.className || ''}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </a>
            ) : (
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`max-w-[80%] max-h-[80%] object-contain ${partner.className || ''}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
