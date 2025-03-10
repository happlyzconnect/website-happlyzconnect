
import { motion } from "framer-motion";

const referenceClients = [
  {
    id: 1,
    name: "Decathlon Herblay",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/786840ea-5fd4-41ac-b2c9-8aa326cd9640.png",
    description: "Installation de 3 écrans 86 pouces pour l'affichage dynamique en magasin, avec diffusion et création de contenus en Motion Design pour promouvoir l'application Decathlon."
  },
  {
    id: 2,
    name: "Decathlon CNIT",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/efe09c78-1ef4-4d53-a69e-0826be6203be.png",
    description: "Installation de 2 x 2 écrans 75 pouces pour affichage dynamique piloté avec logiciel et adaptation de contenus vidéos, en vitrine donnant sur le centre commercial Westfield CNIT La Défense."
  },
  {
    id: 3,
    name: "Decathlon Poitiers",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/6a43e84c-b012-4c3e-8d17-1e3ca0fb1b37.png",
    description: "Installation d'un écran 75 pouces à l'entrée du magasin avec adaptation du contenu vidéo pour accueillir la clientèle"
  },
  {
    id: 4,
    name: "Decathlon Brétigny-sur-Orge",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/32bcd83d-899a-4d00-a03c-ceaf8b329ef1.png",
    description: "Suspension d'écrans 65 pouces et création de vidéos en Motion Design pour affichage des tarifs de l'Atelier cycle."
  },
  {
    id: 5,
    name: "Decathlon Vélizy",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/9774166f-1978-4c32-9841-d914a896798f.png",
    description: "Installation d'un bandeau de 2 écrans 55 pouces pour l'affichage des tarifs de l'Atelier cycle et création du visuel en Motion Design."
  },
  {
    id: 6,
    name: "Decathlon Paris La Madeleine",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/8741ff20-be7d-468b-a25c-3f7ecef35a27.png",
    description: "Création d'un concept d'écrans d'accueil et d'informations en file d'attente avec vidéo du personnel du magasin."
  },
  {
    id: 7,
    name: "Decathlon Stade de France",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/8ab255c7-c615-42ee-b02a-325ba3b70638.png",
    description: "Maintenance d'un écran 100 pouces avec diffusion de vidéos en Motion Design"
  },
  {
    id: 8,
    name: "Carrefour",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    description: "Solutions d'affichage dynamique pour les vitrines et l'intérieur des magasins."
  },
  {
    id: 9,
    name: "BNP Paribas",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    description: "Équipement audiovisuel des espaces collaboratifs et salles de conférence."
  },
  {
    id: 10,
    name: "Université Paris-Saclay",
    logo: "/lovable-uploads/aaa36cf1-55ac-4916-83e9-43f0d7674525.png",
    description: "Installation d'écrans interactifs dans les salles de classe et amphithéâtres."
  },
  {
    id: 11,
    name: "Hôtel Mercure",
    logo: "/lovable-uploads/3aeebb1d-9d36-4a6a-a47f-cd05d216f482.png",
    description: "Solutions d'affichage dynamique pour les espaces d'accueil et les salles de séminaire."
  },
  {
    id: 12,
    name: "Mairie de Paris",
    logo: "/lovable-uploads/1f096081-547e-4966-a3fd-258978a08106.png",
    description: "Déploiement de solutions audiovisuelles pour les espaces publics et les salles de conseil."
  }
];

export const ProjectCards = () => {
  return (
    <>
      <section className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-business-primary mb-4">
            Nos projets
          </h2>
          <div className="h-1 w-16 bg-[#56C7E1] mx-auto mb-6"></div>
          <p className="text-business-secondary text-lg max-w-2xl mx-auto">
            Découvrez les réalisations concrètes de nos solutions d'affichage dynamique et d'équipements audiovisuels
          </p>
        </motion.div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {referenceClients.map((client) => (
          <div 
            key={client.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {client.image ? (
              <div className="h-64 bg-gray-100">
                <img 
                  src={client.image} 
                  alt={`Projet ${client.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = client.logo;
                    e.currentTarget.className = "max-h-full max-w-full object-contain m-auto";
                  }}
                />
              </div>
            ) : (
              <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-business-primary">{client.name}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
