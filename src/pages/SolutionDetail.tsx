import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetaDescription } from "@/components/MetaDescription";
import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Solution type definitions
interface Feature {
  id: number;
  name: string;
}

interface SolutionCategory {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: Feature[];
  benefits: string[];
}

// Our solutions catalog
const solutionsCatalog: Record<string, SolutionCategory[]> = {
  "affichage-dynamique": [
    {
      id: "magasins",
      title: "Affichage Dynamique pour Magasins",
      category: "affichage-dynamique",
      description: "Transformez l'expérience client dans vos points de vente",
      longDescription: "Captez l'attention de vos clients et augmentez vos ventes grâce à nos solutions d'affichage dynamique spécialement conçues pour les magasins et points de vente. Nos écrans professionnels et notre plateforme de gestion de contenu vous permettent de diffuser facilement vos promotions, nouveautés et informations produits.",
      image: "/lovable-uploads/c05c4fe1-4000-420b-ab48-c98868663756.png",
      features: [
        { id: 1, name: "Écrans professionnels haute luminosité" },
        { id: 2, name: "Gestion de contenu centralisée" },
        { id: 3, name: "Programmation des diffusions" },
        { id: 4, name: "Intégration avec votre système de gestion" },
        { id: 5, name: "Analyse des performances" }
      ],
      benefits: [
        "Augmentation des ventes jusqu'à 25%",
        "Réduction des coûts d'impression",
        "Mise à jour instantanée des promotions",
        "Personnalisation par magasin ou zone"
      ]
    },
    {
      id: "vitrines",
      title: "Affichage Dynamique pour Vitrines",
      category: "affichage-dynamique",
      description: "Attirez plus de clients dans votre établissement",
      longDescription: "Transformez votre vitrine en un outil marketing puissant avec nos solutions d'affichage dynamique haute luminosité. Captez l'attention des passants et incitez-les à entrer dans votre établissement grâce à des contenus attrayants et dynamiques visibles même en plein soleil.",
      image: "/lovable-uploads/38d126ad-eba7-4d7d-85c1-cb41469680bf.png",
      features: [
        { id: 1, name: "Écrans haute luminosité (2500+ nits)" },
        { id: 2, name: "Visibilité garantie même en plein soleil" },
        { id: 3, name: "Protection contre les intempéries (IP56)" },
        { id: 4, name: "Fonctionnement 24/7" },
        { id: 5, name: "Gestion à distance du contenu" }
      ],
      benefits: [
        "Augmentation du trafic piéton jusqu'à 30%",
        "Visibilité accrue de votre enseigne",
        "Adaptation du message selon l'heure de la journée",
        "Différenciation par rapport à la concurrence"
      ]
    },
    {
      id: "corporate",
      title: "Affichage Dynamique Corporate",
      category: "affichage-dynamique",
      description: "Améliorez votre communication interne et externe",
      longDescription: "Optimisez la communication au sein de votre entreprise avec nos solutions d'affichage dynamique corporate. Diffusez facilement des informations importantes, des KPIs, des actualités d'entreprise ou des messages de bienvenue dans vos espaces d'accueil, salles de réunion et espaces communs.",
      image: "/lovable-uploads/57f23413-fbca-41c3-a838-5478758e1a6f.png",
      features: [
        { id: 1, name: "Écrans professionnels adaptés à chaque espace" },
        { id: 2, name: "Interface de gestion intuitive" },
        { id: 3, name: "Intégration de flux de données (KPIs, météo, actualités)" },
        { id: 4, name: "Modèles de communication personnalisables" },
        { id: 5, name: "Gestion des droits utilisateurs" }
      ],
      benefits: [
        "Amélioration de la communication interne",
        "Valorisation de votre image de marque",
        "Réduction de l'utilisation du papier",
        "Diffusion instantanée des informations importantes"
      ]
    }
  ],
  "salles-de-reunion": [
    {
      id: "solutions-audiovisuelles",
      title: "Solutions Audiovisuelles pour Salles de Réunion",
      category: "salles-de-reunion",
      description: "Optimisez vos espaces collaboratifs",
      longDescription: "Transformez vos salles de réunion en espaces collaboratifs performants avec nos solutions audiovisuelles intégrées. De la visioconférence à la présentation sans fil, nous proposons des équipements de pointe pour faciliter les échanges et améliorer la productivité de vos équipes.",
      image: "/lovable-uploads/ec4384d3-38ac-41ab-b9ea-93796b792b22.png",
      features: [
        { id: 1, name: "Écrans interactifs tactiles" },
        { id: 2, name: "Systèmes de visioconférence HD" },
        { id: 3, name: "Solutions de présentation sans fil" },
        { id: 4, name: "Systèmes audio intégrés" },
        { id: 5, name: "Contrôle centralisé des équipements" }
      ],
      benefits: [
        "Réunions plus efficaces et productives",
        "Collaboration facilitée avec les équipes distantes",
        "Simplicité d'utilisation pour tous les collaborateurs",
        "Réduction des problèmes techniques"
      ]
    }
  ],
  "salles-de-classe": [
    {
      id: "solutions-pedagogiques",
      title: "Solutions Pédagogiques pour Salles de Classe",
      category: "salles-de-classe",
      description: "Modernisez vos espaces d'apprentissage",
      longDescription: "Révolutionnez l'expérience d'apprentissage avec nos solutions pédagogiques numériques. Nos écrans interactifs et nos outils collaboratifs permettent aux enseignants d'animer des cours dynamiques et interactifs, favorisant l'engagement et la participation des élèves.",
      image: "/lovable-uploads/f5c4ccd9-3e0c-4214-8c98-2d65b936f03d.png",
      features: [
        { id: 1, name: "Écrans Numériques Interactifs (ENI)" },
        { id: 2, name: "Logiciels pédagogiques intégrés" },
        { id: 3, name: "Systèmes de partage d'écran" },
        { id: 4, name: "Solutions de visioconférence pour l'enseignement à distance" },
        { id: 5, name: "Formation et accompagnement des enseignants" }
      ],
      benefits: [
        "Augmentation de l'engagement des élèves",
        "Diversification des méthodes pédagogiques",
        "Facilité de partage des ressources pédagogiques",
        "Préparation des élèves aux outils numériques"
      ]
    }
  ]
};

const SolutionDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  
  // Find the solution based on URL parameters
  const categoryData = solutionsCatalog[category || ""] || [];
  const solution = categoryData.find(sol => sol.id === id);
  
  // If solution not found
  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold mb-4 text-business-primary">Solution non trouvée</h1>
              <p className="mb-8">La solution que vous recherchez n'existe pas ou a été déplacée.</p>
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
  
  // Function to navigate to contact section on homepage
  const scrollToContact = () => {
    // Navigate to homepage and then scroll to contact
    window.location.href = "/#contact";
  };
  
  // Get breadcrumb category title
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
      <MetaDescription description={`${solution.title} | HAPPLYZ CONNECT - ${solution.description}`} />
      <Navigation />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 pt-4">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Nos solutions" }, // Removed href to make it non-clickable
                { label: getCategoryTitle(), href: `/solutions/${category}` },
                { label: solution.title }
              ]} 
            />
          </div>
          
          {/* Hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-business-primary">
                {solution.title}
              </h1>
              <div className="h-1 w-20 bg-[#56C7E1] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                {solution.longDescription}
              </p>
              <Button onClick={scrollToContact} className="bg-business-primary hover:bg-business-primary/90 text-white">
                Demander un devis gratuit
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Features section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-business-primary">Caractéristiques principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.features.map(feature => (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="rounded-full bg-[#56C7E1]/10 p-2 mt-1">
                    <Check className="w-5 h-5 text-[#56C7E1]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-business-primary mb-2">{feature.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Benefits section */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-business-primary">Avantages et bénéfices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#56C7E1] mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* CTA section */}
          <section className="bg-business-primary text-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-4">Intéressé par cette solution ?</h2>
                <p className="text-white/80">
                  Contactez-nous pour discuter de votre projet et découvrir comment cette solution peut répondre à vos besoins spécifiques.
                </p>
              </div>
              <Button onClick={scrollToContact} className="bg-[#56C7E1] hover:bg-[#3AB1CF] text-white">
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

export default SolutionDetail;
