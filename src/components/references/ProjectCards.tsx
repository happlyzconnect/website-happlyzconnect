import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, UserRound, GraduationCap } from "lucide-react";

const referenceClients = [
  {
    id: 24,
    name: "CHIESI - Bois-Colombes",
    logo: null,
    image: "/lovable-uploads/9bb5ce3d-5e9c-4bd1-ada5-8ca33bb73365.png",
    description: "Intégration de systèmes BARCO ClickShare CX-50 dans 5 salles de réunion avec interface video, caméra et audio (micros plafond et hauts-parleurs)",
    category: "salle-reunion"
  },
  {
    id: 25,
    name: "SHELL France - Nanterre",
    logo: null,
    image: "/lovable-uploads/9c42a0f2-76fb-4b29-a641-a900009990a7.png",
    description: "Installation d'un écran 98 pouces avec système Barco ClickShare CX-50, caméra et système audio (micros / haut-parleurs)",
    category: "salle-reunion"
  },
  {
    id: 1,
    name: "Decathlon Herblay",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/786840ea-5fd4-41ac-b2c9-8aa326cd9640.png",
    description: "Installation de 3 écrans 86 pouces pour l'affichage dynamique en magasin, avec diffusion et création de contenus en Motion Design pour promouvoir l'application Decathlon.",
    category: "affichage-dynamique"
  },
  {
    id: 26,
    name: "CHIESI - Blois",
    logo: null,
    image: "/lovable-uploads/70fb3dcd-cbf6-4874-a389-0fd47b6c0310.png",
    description: "Intégration de systèmes Barco ClickShare dans plusieurs salles de réunion avec interface vidéo, caméra, et audio (micros plafond et haut-parleurs)",
    category: "salle-reunion"
  },
  {
    id: 27,
    name: "Decathlon Paris La Madeleine",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/33e5977a-e4a8-4bcb-83a2-f2ae69ff9e34.png",
    description: "Installation d'écrans 75 pouces avec système de projection sans fil BenQ InstaShow",
    category: "salle-reunion"
  },
  {
    id: 28,
    name: "Decathlon CNIT",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/9be36cd2-f8b0-43f3-84b7-d8c463748c6e.png",
    description: "Installation d'écrans dans plusieurs salles de réunion sur support mural ou support mobile",
    category: "salle-reunion"
  },
  {
    id: 2,
    name: "Decathlon CNIT",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/efe09c78-1ef4-4d53-a69e-0826be6203be.png",
    description: "Installation de 2 x 2 écrans 75 pouces pour affichage dynamique piloté avec logiciel et adaptation de contenus vidéos, en vitrine donnant sur le centre commercial Westfield CNIT La Défense.",
    category: "affichage-dynamique"
  },
  {
    id: 3,
    name: "Decathlon Poitiers",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/6a43e84c-b012-4c3e-8d17-1e3ca0fb1b37.png",
    description: "Installation d'un écran 75 pouces à l'entrée du magasin avec adaptation du contenu vidéo pour accueillir la clientèle",
    category: "affichage-dynamique"
  },
  {
    id: 4,
    name: "Decathlon Brétigny-sur-Orge",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/32bcd83d-899a-4d00-a03c-ceaf8b329ef1.png",
    description: "Suspension d'écrans 65 pouces et création de vidéos en Motion Design pour affichage des tarifs de l'Atelier cycle.",
    category: "affichage-dynamique"
  },
  {
    id: 5,
    name: "Decathlon Vélizy",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/9774166f-1978-4c32-9841-d914a896798f.png",
    description: "Installation d'un bandeau de 2 écrans 55 pouces pour l'affichage des tarifs de l'Atelier cycle et création du visuel en Motion Design.",
    category: "affichage-dynamique"
  },
  {
    id: 6,
    name: "Decathlon Paris La Madeleine",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/8741ff20-be7d-468b-a25c-3f7ecef35a27.png",
    description: "Création d'un concept d'écrans d'accueil et d'informations en file d'attente avec vidéo du personnel du magasin.",
    category: "affichage-dynamique"
  },
  {
    id: 7,
    name: "Decathlon Stade de France",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/8ab255c7-c615-42ee-b02a-325ba3b70638.png",
    description: "Maintenance d'un écran 100 pouces avec diffusion de vidéos en Motion Design",
    category: "affichage-dynamique"
  },
  {
    id: 8,
    name: "Decathlon CNIT",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/d4a1e95b-d164-450a-b5f2-0ede24283847.png",
    description: "Mise en place d'un concept d'affichage des tarifs et des périodes d'ouverture du rayon cordage",
    category: "affichage-dynamique"
  },
  {
    id: 9,
    name: "Decathlon Lyon Part-Dieu",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/14f65513-063f-487f-b460-ee77c1eba291.png",
    description: "Projet de conception d'un mur vidéo de 8 x 4 écrans",
    category: "affichage-dynamique"
  },
  {
    id: 10,
    name: "Decathlon Poitiers",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/ec102dbc-d037-4fd6-82ba-c85a8f6d4be7.png",
    description: "Installation d'écrans 55 pouces connectés à des vélos Domyos pour démonstration de l'application KINOMAP",
    category: "affichage-dynamique"
  },
  {
    id: 11,
    name: "Decathlon Sainte Geneviève-des-bois",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/2e87314c-11a3-4eff-8ce0-772efc6ff53c.png",
    description: "Installation de bornes tactiles pour afficher la gestion des réservations de l'Atelier cycle",
    category: "affichage-dynamique"
  },
  {
    id: 12,
    name: "Decathlon Paris La Madeleine",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    image: "/lovable-uploads/222f1b22-2147-41d4-8959-0a83f6865e6a.png",
    description: "Intégration d'un écran 32 pouces tactile connecté à un vélo Domyos pour démonstration de l'application KINOMAP",
    category: "affichage-dynamique"
  },
  {
    id: 13,
    name: "Géant Casino Marseille",
    logo: null,
    image: "/lovable-uploads/853e1d49-db7f-4dd2-a1ec-24e597d670c2.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie",
    category: "affichage-dynamique"
  },
  {
    id: 14,
    name: "Géant Casino Bourges",
    logo: null,
    image: "/lovable-uploads/700acbff-00d6-42c1-bb65-f89d1daa0a3a.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie",
    category: "affichage-dynamique"
  },
  {
    id: 15,
    name: "Géant Casino Fenouillet",
    logo: null,
    image: "/lovable-uploads/16ec740c-dcea-4e40-b037-5ce4b6f2ca97.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie",
    category: "affichage-dynamique"
  },
  {
    id: 16,
    name: "Géant Casino Amiens",
    logo: null,
    image: "/lovable-uploads/97e78eb0-3b44-4b65-814b-00ab817ae3c7.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie",
    category: "affichage-dynamique"
  },
  {
    id: 17,
    name: "Géant Casino Villefranche-sur-Saône",
    logo: null,
    image: "/lovable-uploads/aedfeba9-d6fb-4e53-a8b1-0c09e872b9c4.png",
    description: "Installation d'un écran 75 pouces avec intégration d'un logiciel d'affichage dynamique au niveau de la parapharmacie",
    category: "affichage-dynamique"
  },
  {
    id: 18,
    name: "Collège Condorcet Paris",
    logo: null,
    image: "/lovable-uploads/4a20aa23-6b6f-4249-b7ee-4056f77685df.png",
    description: "Modernisation complète de 7 salles de classe avec installation de vidéoprojecteurs interactifs, tableaux blancs magnétiques et système audio haute-fidélité intégré.",
    category: "salle-classe"
  },
  {
    id: 19,
    name: "Lycée agricole Les Vaseix",
    logo: null,
    image: "/lovable-uploads/e046f28a-81d8-41b1-a11b-e2980a62b13a.png",
    description: "Installation d'un écran numérique interactif 75 pouces avec caméra intégrée, hub de connexion et système audio pour une expérience d'enseignement moderne et immersive.",
    category: "salle-classe"
  },
  {
    id: 20,
    name: "BTP CFA Loire Atlantique - Saint Herblain",
    logo: null,
    image: "/lovable-uploads/f97bf874-444b-428c-a544-53b6f5bc706c.png",
    description: "Installation d'un vidéoprojecteur haute résolution et d'un système audio professionnel pour offrir une expérience d'apprentissage optimale aux étudiants du secteur du BTP.",
    category: "salle-classe"
  },
  {
    id: 21,
    name: "Collège Albert Schweitzer - Neufchâtel-en-Bray",
    logo: null,
    image: "/lovable-uploads/4c315d56-63b2-4096-86a1-28dea5785690.png",
    description: "Installation et configuration d'un écran numérique interactif sur support mobile pour une flexibilité d'enseignement optimale et une utilisation dans différentes salles de classe.",
    category: "salle-classe"
  },
  {
    id: 22,
    name: "IUT Draguignan",
    logo: null,
    image: "/lovable-uploads/c3352f74-5333-4267-85bb-5c6787edb65b.png",
    description: "Installation d'un écran Samsung Flip 75 pouces sur support mobile permettant l'affichage interactif, l'annotation et le partage de contenu pour des réunions collaboratives efficaces.",
    category: "salle-reunion"
  },
  {
    id: 23,
    name: "SHELL France",
    logo: null,
    image: "/lovable-uploads/1f4f3597-463f-4bd3-9fdb-36b9325dcebf.png",
    description: "Installation de 2 écrans 65 pouces avec système Barco CX-50 et système audio complet incluant des micros plafond et haut-parleurs pour des visioconférences haute qualité.",
    category: "salle-reunion"
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
      
      <Tabs defaultValue="affichage-dynamique" className="w-full mb-8">
        <TabsList className="w-full flex justify-center gap-4 mb-8">
          <TabsTrigger value="affichage-dynamique" className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Affichage Dynamique
          </TabsTrigger>
          <TabsTrigger value="salle-reunion" className="flex items-center gap-2">
            <UserRound className="w-4 h-4" />
            Salles de réunion
          </TabsTrigger>
          <TabsTrigger value="salle-classe" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Salles de classe
          </TabsTrigger>
        </TabsList>

        <TabsContent value="affichage-dynamique" className="mt-0">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {referenceClients
              .filter(client => client.category === "affichage-dynamique")
              .map((client) => (
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
        </TabsContent>

        <TabsContent value="salle-reunion" className="mt-0">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {referenceClients
              .filter(client => client.category === "salle-reunion")
              .map((client) => (
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
        </TabsContent>

        <TabsContent value="salle-classe" className="mt-0">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {referenceClients
              .filter(client => client.category === "salle-classe")
              .map((client) => (
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
        </TabsContent>
      </Tabs>
    </>
  );
};
