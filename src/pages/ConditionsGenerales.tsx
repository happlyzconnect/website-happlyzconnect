import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Sections1to8 } from "@/components/conditions/Sections1to8";
import { Sections9to12 } from "@/components/conditions/Sections9to12";
import { Sections13to16 } from "@/components/conditions/Sections13to16";

const ConditionsGenerales = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="mb-8">
          <button 
            onClick={handleHomeClick}
            className="text-business-primary hover:text-business-accent transition-colors"
          >
            ← Retour à l'accueil
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="space-y-8 text-left">
          <Sections1to8 />
          <Sections9to12 />
          <Sections13to16 />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionsGenerales;