
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetaDescription } from "@/components/MetaDescription";

const referenceClients = [
  {
    id: 1,
    name: "SNCF",
    logo: "/lovable-uploads/d1266ec2-fb47-40cf-936d-49f96f2cabe0.png",
    description: "Déploiement d'écrans interactifs dans les espaces de formation et les salles de réunion."
  },
  {
    id: 2,
    name: "Carrefour",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    description: "Solutions d'affichage dynamique pour les vitrines et l'intérieur des magasins."
  },
  {
    id: 3,
    name: "BNP Paribas",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    description: "Équipement audiovisuel des espaces collaboratifs et salles de conférence."
  },
  {
    id: 4,
    name: "Université Paris-Saclay",
    logo: "/lovable-uploads/aaa36cf1-55ac-4916-83e9-43f0d7674525.png",
    description: "Installation d'écrans interactifs dans les salles de classe et amphithéâtres."
  },
  {
    id: 5,
    name: "Hôtel Mercure",
    logo: "/lovable-uploads/3aeebb1d-9d36-4a6a-a47f-cd05d216f482.png",
    description: "Solutions d'affichage dynamique pour les espaces d'accueil et les salles de séminaire."
  },
  {
    id: 6,
    name: "Mairie de Paris",
    logo: "/lovable-uploads/1f096081-547e-4966-a3fd-258978a08106.png",
    description: "Déploiement de solutions audiovisuelles pour les espaces publics et les salles de conseil."
  }
];

const References = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description="Découvrez les projets réalisés par HAPPLYZ CONNECT pour ses clients: écrans interactifs, affichage dynamique et solutions audiovisuelles." />
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 pt-4">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Nos références" }
              ]} 
            />
          </div>
          
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-business-primary">
              Nos références
            </h1>
            <div className="h-1 w-20 bg-[#56C7E1] mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl">
              Découvrez les projets réalisés par HAPPLYZ CONNECT pour ses clients. Nous accompagnons des entreprises 
              de toutes tailles dans leur transformation numérique grâce à nos solutions d'affichage dynamique et d'équipements audiovisuels.
            </p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {referenceClients.map((client) => (
              <div 
                key={client.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
                  <img 
                    src={client.logo} 
                    alt={`Logo ${client.name}`} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-business-primary">{client.name}</h3>
                  <p className="text-gray-600">{client.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <button className="text-[#56C7E1] font-medium hover:text-business-primary transition-colors">
                    Voir le projet →
                  </button>
                </div>
              </div>
            ))}
          </section>
          
          <section className="mt-16 bg-business-primary text-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-4">Vous souhaitez être notre prochain client référence ?</h2>
                <p className="text-white/80">
                  Contactez-nous pour discuter de votre projet et découvrir comment nos solutions peuvent répondre à vos besoins spécifiques.
                </p>
              </div>
              <button className="bg-[#56C7E1] hover:bg-[#3AB1CF] text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
                Nous contacter
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default References;
