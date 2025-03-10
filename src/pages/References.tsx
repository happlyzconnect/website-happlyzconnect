
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetaDescription } from "@/components/MetaDescription";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

// Trusted clients from ClientCarousel
const trustedClients = [
  {
    id: 1,
    name: "Decathlon",
    logo: "/lovable-uploads/10869478-3a75-4fbf-83b9-378231d8ad46.png",
    url: "https://www.decathlon.fr/",
    alt: "Logo Decathlon - Client HAPPLYZ CONNECT"
  },
  {
    id: 2,
    name: "Géant Casino",
    logo: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png",
    className: "scale-150",
    url: "https://petitcasino.casino.fr/fr",
    alt: "Logo Géant Casino - Client HAPPLYZ CONNECT"
  },
  {
    id: 3,
    name: "Comexposium",
    logo: "/lovable-uploads/c84db821-b445-4537-a9e1-981604fd2c2b.png",
    url: "https://www.comexposium.com/",
    alt: "Logo Comexposium - Client HAPPLYZ CONNECT"
  },
  {
    id: 4,
    name: "RX",
    logo: "/lovable-uploads/f5c4ccd9-3e0c-4214-8c98-2d65b936f03d.png",
    url: "https://rxglobal.fr/fr",
    alt: "Logo RX - Client HAPPLYZ CONNECT"
  },
  {
    id: 5,
    name: "MSA",
    logo: "/lovable-uploads/ec4384d3-38ac-41ab-b9ea-93796b792b22.png",
    url: "https://www.msa.fr/lfp",
    alt: "Logo MSA - Client HAPPLYZ CONNECT"
  },
  {
    id: 6,
    name: "ADVEO",
    logo: "/lovable-uploads/bb6b76a3-bda7-49e7-bf65-c515d63c871d.png",
    url: "https://www.adveo.com/",
    alt: "Logo ADVEO - Client HAPPLYZ CONNECT"
  },
  {
    id: 7,
    name: "Ministère de l'éducation nationale",
    logo: "/lovable-uploads/55a109ad-89c2-44b1-92c8-81f7dfb4aa63.png",
    url: "https://www.education.gouv.fr/",
    alt: "Logo Ministère de l'éducation nationale - Client HAPPLYZ CONNECT"
  },
  {
    id: 8,
    name: "Ministère des armées",
    logo: "/lovable-uploads/eec9b5b7-0231-42b9-9c55-a7e936bba042.png",
    url: "https://www.defense.gouv.fr/",
    alt: "Logo Ministère des armées - Client HAPPLYZ CONNECT"
  },
  {
    id: 9,
    name: "CHIESI",
    logo: "/lovable-uploads/8e724d65-794a-4f72-8a5f-e11f630434b0.png",
    url: "https://www.chiesi.fr/",
    alt: "Logo CHIESI - Client HAPPLYZ CONNECT"
  },
  {
    id: 10,
    name: "LDLC Pro",
    logo: "/lovable-uploads/03182aed-5f37-4d1a-be82-ec16661863f4.png",
    url: "https://www.ldlc.pro/",
    alt: "Logo LDLC Pro - Client HAPPLYZ CONNECT"
  },
  {
    id: 11,
    name: "SHELL",
    logo: "/lovable-uploads/19b743ae-bd85-4856-a139-e57628ea5eaf.png",
    url: "https://www.shell.fr/",
    alt: "Logo SHELL - Client HAPPLYZ CONNECT"
  },
  {
    id: 12,
    name: "Parashop",
    logo: "/lovable-uploads/68fbf33c-72b6-4ab9-8903-64e0d903fa1d.png",
    url: "https://www.parashop.com/",
    alt: "Logo Parashop - Client HAPPLYZ CONNECT"
  },
];

const References = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description="Découvrez les projets réalisés par HAPPLYZ CONNECT pour ses clients: écrans interactifs, affichage dynamique et solutions audiovisuelles." />
      <Navigation />
      <main className="flex-1 pt-20 pb-16">
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
          
          {/* Nouvelle section "Ils nous font confiance" */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-business-primary mb-4">
                Ils nous font confiance
              </h2>
              <div className="h-1 w-16 bg-[#56C7E1] mx-auto mb-6"></div>
              <p className="text-business-secondary text-lg max-w-2xl mx-auto">
                Des entreprises de toute la France nous confient leurs projets audiovisuels
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
              {trustedClients.map((client) => (
                <div key={client.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {client.url ? (
                    <a 
                      href={client.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-24 flex items-center justify-center"
                      aria-label={`Visiter le site de ${client.name}`}
                    >
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className={`max-w-full max-h-full object-contain ${client.className || ''}`}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* Nouvelle section titre "Nos projets" */}
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
                  <Button 
                    variant="link" 
                    className="text-[#56C7E1] font-medium hover:text-business-primary transition-colors p-0"
                    asChild
                  >
                    <Link to="#">Voir le projet →</Link>
                  </Button>
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
              <Button 
                className="bg-[#56C7E1] hover:bg-[#3AB1CF] text-white px-6 py-3 whitespace-nowrap"
                asChild
              >
                <Link to="/#contact">Nous contacter</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default References;
