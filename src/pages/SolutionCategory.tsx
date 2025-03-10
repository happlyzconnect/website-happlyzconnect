
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetaDescription } from "@/components/MetaDescription";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Notre catalogue de solutions (même structure que dans SolutionDetail.tsx)
const solutionsCatalog: Record<string, { id: string; title: string; category: string; description: string; image: string }[]> = {
  "affichage-dynamique": [
    {
      id: "magasins",
      title: "Affichage Dynamique pour Magasins",
      category: "affichage-dynamique",
      description: "Transformez l'expérience client dans vos points de vente",
      image: "/lovable-uploads/bb6b76a3-bda7-49e7-bf65-c515d63c871d.png"
    },
    {
      id: "vitrines",
      title: "Affichage Dynamique pour Vitrines",
      category: "affichage-dynamique",
      description: "Attirez plus de clients dans votre établissement",
      image: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png"
    },
    {
      id: "corporate",
      title: "Affichage Dynamique Corporate",
      category: "affichage-dynamique",
      description: "Améliorez votre communication interne et externe",
      image: "/lovable-uploads/57f23413-fbca-41c3-a838-5478758e1a6f.png"
    }
  ],
  "salles-de-reunion": [
    {
      id: "solutions-audiovisuelles",
      title: "Solutions Audiovisuelles pour Salles de Réunion",
      category: "salles-de-reunion",
      description: "Optimisez vos espaces collaboratifs",
      image: "/lovable-uploads/ec4384d3-38ac-41ab-b9ea-93796b792b22.png"
    }
  ],
  "salles-de-classe": [
    {
      id: "solutions-pedagogiques",
      title: "Solutions Pédagogiques pour Salles de Classe",
      category: "salles-de-classe",
      description: "Modernisez vos espaces d'apprentissage",
      image: "/lovable-uploads/f5c4ccd9-3e0c-4214-8c98-2d65b936f03d.png"
    }
  ]
};

const SolutionCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // Trouver les solutions de la catégorie
  const solutions = solutionsCatalog[category || ""] || [];
  
  // Si la catégorie n'existe pas
  if (solutions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold mb-4 text-business-primary">Catégorie non trouvée</h1>
              <p className="mb-8">La catégorie de solutions que vous recherchez n'existe pas ou a été déplacée.</p>
              <Button asChild>
                <Link to="/">Retour à l'accueil</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Obtenir le titre de la catégorie
  const getCategoryTitle = () => {
    switch(category) {
      case "affichage-dynamique": return "Affichage Dynamique";
      case "salles-de-reunion": return "Salles de Réunion";
      case "salles-de-classe": return "Salles de Classe";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description={`${getCategoryTitle()} | HAPPLYZ CONNECT - Nos solutions d'${getCategoryTitle().toLowerCase()}`} />
      <Navigation />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 pt-4">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Nos solutions" },
                { label: getCategoryTitle() }
              ]} 
            />
          </div>
          
          {/* Hero section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4 text-business-primary">
              {getCategoryTitle()}
            </h1>
            <div className="h-1 w-20 bg-[#56C7E1] mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              Découvrez nos solutions de {getCategoryTitle().toLowerCase()} adaptées à vos besoins spécifiques.
            </p>
          </div>
          
          {/* Solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution) => (
              <Link 
                key={solution.id} 
                to={`/solutions/${category}/${solution.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-[220px] object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-business-primary group-hover:text-[#56C7E1] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex items-center text-[#56C7E1] font-medium">
                      <span>En savoir plus</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA section */}
          <section className="bg-business-primary text-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-4">Intéressé par nos solutions ?</h2>
                <p className="text-white/80">
                  Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons répondre à vos besoins spécifiques.
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = "/#contact"} 
                className="bg-[#56C7E1] hover:bg-[#3AB1CF] text-white"
              >
                Nous contacter
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionCategory;
