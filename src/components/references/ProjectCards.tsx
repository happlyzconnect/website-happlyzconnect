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
    name: "Decathlon CNIT",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/d4a1e95b-d164-450a-b5f2-0ede24283847.png",
    description: "Mise en place d'un concept d'affichage des tarifs et des périodes d'ouverture du rayon cordage"
  },
  {
    id: 9,
    name: "Decathlon Lyon Part-Dieu",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/14f65513-063f-487f-b460-ee77c1eba291.png",
    description: "Projet de conception d'un mur vidéo de 8 x 4 écrans"
  },
  {
    id: 10,
    name: "Decathlon Poitiers",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/ec102dbc-d037-4fd6-82ba-c85a8f6d4be7.png",
    description: "Installation d'écrans 55 pouces connectés à des vélos Domyos pour démonstration de l'application KINOMAP"
  },
  {
    id: 11,
    name: "Decathlon Sainte Geneviève-des-bois",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/2e87314c-11a3-4eff-8ce0-772efc6ff53c.png",
    description: "Installation de bornes tactiles pour afficher la gestion des réservations de l'Atelier cycle"
  },
  {
    id: 12,
    name: "Decathlon Paris La Madeleine",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/222f1b22-2147-41d4-8959-0a83f6865e6a.png",
    description: "Intégration d'un écran 32 pouces tactile connecté à un vélo Domyos pour démonstration de l'application KINOMAP"
  },
  {
    id: 13,
    name: "Géant Casino Marseille",
    logo: null,
    image: "/lovable-uploads/853e1d49-db7f-4dd2-a1ec-24e597d670c2.png",
    description: "Intégration d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie"
  },
  {
    id: 14,
    name: "Géant Casino Bourges",
    logo: null,
    image: "/lovable-uploads/700acbff-00d6-42c1-bb65-f89d1daa0a3a.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie"
  },
  {
    id: 15,
    name: "Géant Casino Fenouillet",
    logo: null,
    image: "/lovable-uploads/16ec740c-dcea-4e40-b037-5ce4b6f2ca97.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie"
  },
  {
    id: 16,
    name: "Géant Casino Amiens",
    logo: null,
    image: "/lovable-uploads/97e78eb0-3b44-4b65-814b-00ab817ae3c7.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie"
  },
  {
    id: 17,
    name: "Carrefour",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    image: "/lovable-uploads/b668f626-055f-4a48-b40f-02c6d629a227.png",
    description: "Solutions d'affichage dynamique pour les vitrines et l'intérieur des magasins."
  },
  {
    id: 18,
    name: "BNP Paribas",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    image: "/lovable-uploads/03182aed-5f37-4d1a-be82-ec16661863f4.png",
    description: "Équipement audiovisuel des espaces collaboratifs et salles de conférence."
  },
  {
    id: 19,
    name: "Université Paris-Saclay",
    logo: "/lovable-uploads/aaa36cf1-55ac-4916-83e9-43f0d7674525.png",
    image: "/lovable-uploads/859d1346-c2f4-4363-bf7f-33b3073d4012.png",
    description: "Installation d'écrans interactifs dans les salles de classe et amphithéâtres."
  },
  {
    id: 20,
    name: "Hôtel Mercure",
    logo: "/lovable-uploads/3aeebb1d-9d36-4a6a-a47f-cd05d216f482.png",
    image: "/lovable-uploads/d915b1ae-d6f3-471b-8ae1-bbd2422bb08e.png",
    description: "Solutions d'affichage dynamique pour les espaces d'accueil et les salles de séminaire."
  },
  {
    id: 21,
    name: "Mairie de Paris",
    logo: "/lovable-uploads/1f096081-547e-4966-a3fd-258978a08106.png",
    image: "/lovable-uploads/33bd802c-0762-4850-93d8-fa1632bf49d6.png",
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
