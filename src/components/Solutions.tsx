import { Check, MapPin, Settings, Monitor, School, Store, Video, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Solutions = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const navbarHeight = 72;
    const targetPosition = contactSection?.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    
    const quoteRadio = document.getElementById('quote') as HTMLInputElement;
    if (quoteRadio) {
      quoteRadio.click();
    }
  };

  const solutions = [
    {
      title: "Salles de réunion",
      description: "Équipements numériques professionnels pour vos espaces collaboratifs",
      icon: Monitor,
      details: [
        "Écrans professionnels haute définition",
        "Systèmes de visioconférence",
        "Solutions de partage de documents",
        "Vidéoprojecteurs dernière génération"
      ],
      path: "/solutions/salles-de-reunion"
    },
    {
      title: "Salles de classe",
      description: "Solutions interactives pour l'enseignement moderne",
      icon: School,
      details: [
        "Écrans Numériques Interactifs (ENI)",
        "Vidéoprojecteurs interactifs",
        "Systèmes audio intégrés",
        "Solutions collaboratives"
      ],
      path: "/solutions/salles-de-classe"
    },
    {
      title: "Affichage dynamique",
      description: "Communication visuelle impactante pour votre entreprise",
      icon: Video,
      details: [
        "Écrans d'affichage professionnel",
        "Logiciels de diffusion de contenu",
        "Création de contenus vidéo",
        "Gestion centralisée multi-sites"
      ],
      path: "/solutions/affichage-dynamique"
    }
  ];

  const clientTypes = [
    { icon: Store, label: "Magasins & Boutiques" },
    { icon: Monitor, label: "Entreprises" },
    { icon: School, label: "Établissements Scolaires" },
    { icon: Store, label: "Salons" }
  ];

  return (
    <section id="solutions" className="bg-white">
      <div className="relative w-full h-[300px]"
        style={{
          backgroundImage: "url('/lovable-uploads/cfc81ca6-da37-4cc5-b6cb-69b25b8ba04f.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center -100px',
          filter: 'brightness(0.9)',
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 80%)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(20, 33, 61, 0.3) 0%, rgba(20, 33, 61, 0.5) 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-business-primary mb-6">
            Nos solutions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {clientTypes.map((client) => (
            <div key={client.label} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
              <client.icon className="w-4 h-4 text-business-primary" />
              <span className="text-gray-700">{client.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <Card key={solution.title} className="border-2 hover:border-business-primary transition-colors duration-300 flex flex-col">
              <CardHeader>
                <solution.icon className="w-12 h-12 text-business-primary mb-4" />
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {solution.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button 
                  asChild 
                  className="w-full bg-business-primary text-white hover:bg-business-primary/90 transition-all duration-300"
                >
                  <Link to={solution.path}>
                    Découvrir
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-business-primary mb-4">
              Une approche globale
            </h2>
            <p className="text-gray-600">
              Nous prenons en charge votre projet audiovisuel de A à Z, en vous accompagnant à chaque étape pour garantir une solution parfaitement adaptée à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Monitor,
                title: "Conseil",
                description: "Étude de vos besoins et proposition de solutions adaptées"
              },
              {
                icon: Settings,
                title: "Installation",
                description: "Mise en place professionnelle de vos équipements"
              },
              {
                icon: Video,
                title: "Configuration",
                description: "Paramétrage optimal de vos systèmes"
              },
              {
                icon: MapPin,
                title: "Maintenance",
                description: "Support technique et maintenance sur toute la France"
              }
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-business-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div 
            className="relative w-full h-[300px]"
            style={{
              backgroundImage: "url('/lovable-uploads/d1266ec2-fb47-40cf-936d-49f96f2cabe0.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.9)',
              clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(20, 33, 61, 0.3) 0%, rgba(20, 33, 61, 0.5) 100%)'
              }}
            ></div>
            
            <div className="absolute bottom-8 right-8">
              <button 
                onClick={scrollToContact}
                className="bg-white text-business-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Demander un devis gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
