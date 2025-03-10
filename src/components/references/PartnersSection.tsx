
import { motion } from "framer-motion";

// Update the partner type to include an optional className property
type Partner = {
  id: number;
  name: string;
  logo: string;
  url: string;
  alt: string;
  className?: string; // Add optional className property
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Samsung",
    logo: "/lovable-uploads/568f7f6e-6e8a-4cea-9f70-11e6adee9c77.png",
    url: "https://www.samsung.com/fr/business/",
    alt: "Logo Samsung - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 2,
    name: "LG",
    logo: "/lovable-uploads/c05c4fe1-4000-420b-ab48-c98868663756.png",
    url: "https://www.lg.com/fr/business/",
    alt: "Logo LG - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 3,
    name: "IIYAMA",
    logo: "/lovable-uploads/9577f219-3e69-4160-96c0-1a7704310d0f.png",
    url: "https://iiyama.com/fr_fr/",
    alt: "Logo IIYAMA - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 4,
    name: "BARCO",
    logo: "/lovable-uploads/9e077057-fe2a-4688-bffe-6f41a4002aea.png",
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
    logo: "/lovable-uploads/cfc81ca6-da37-4cc5-b6cb-69b25b8ba04f.png",
    url: "https://www.logitech.com/fr-fr/business/",
    alt: "Logo LOGITECH - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 7,
    name: "AVER",
    logo: "/lovable-uploads/a06afdfa-22c0-4e7b-b7ef-7116784098c4.png",
    url: "https://www.avereurope.com/fr/",
    alt: "Logo AVER - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 8,
    name: "POLY",
    logo: "/lovable-uploads/da74ef05-9e88-40a9-aecf-64f240dc3952.png",
    url: "https://www.poly.com/fr/fr",
    alt: "Logo POLY - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 9,
    name: "NUREVA",
    logo: "/lovable-uploads/c4f501f8-33d9-494a-ad08-195663538d21.png",
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
    logo: "/lovable-uploads/8542d24c-0edb-43a1-a7c6-d99931328400.png",
    url: "https://www.fvs.fr/",
    alt: "Logo FVS - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 12,
    name: "OSF",
    logo: "/lovable-uploads/81477b6a-f946-4b1d-bb57-9533fce0e8ca.png",
    url: "https://www.osf-global.com/",
    alt: "Logo OSF - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 13,
    name: "EET",
    logo: "/lovable-uploads/cf0cd38b-ac57-487b-84da-d232b337f528.png",
    url: "https://fr.eetgroup.com/",
    alt: "Logo EET - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 14,
    name: "SIDEV",
    logo: "/lovable-uploads/57f23413-fbca-41c3-a838-5478758e1a6f.png",
    url: "https://www.sidev.fr/",
    alt: "Logo SIDEV - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 15,
    name: "ONE DIRECT",
    logo: "/lovable-uploads/31538189-590f-499b-80e7-052171630c35.png",
    url: "https://www.onedirect.fr/",
    alt: "Logo ONE DIRECT - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 16,
    name: "WINTER MUSHROOM",
    logo: "/lovable-uploads/59de4235-9384-42ed-8773-5b167ffd673f.png",
    url: "https://www.wintermushroom.com/",
    alt: "Logo WINTER MUSHROOM - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 17,
    name: "Magic Info",
    logo: "/lovable-uploads/380e90c3-7879-45d8-a761-1e7c091a8cf1.png",
    url: "https://www.samsung.com/global/business/display/solutions/digital-signage-solution/magicinfo/",
    alt: "Logo Magic Info - Partenaire HAPPLYZ CONNECT"
  },
  {
    id: 18,
    name: "EMITY",
    logo: "/lovable-uploads/d1266ec2-fb47-40cf-936d-49f96f2cabe0.png", // Placeholder - replace with actual logo
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {partner.url ? (
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-24 flex items-center justify-center"
                aria-label={`Visiter le site de ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className={`max-w-full max-h-full object-contain ${partner.className || ''}`}
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
                className={`max-w-full max-h-full object-contain ${partner.className || ''}`}
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
