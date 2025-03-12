
import { Phone, Mail, Globe, Download, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

interface MobileMenuProps {
  isOpen: boolean;
  handleContactClick: () => void;
  isSolutionPage: boolean;
  isConverterPage: boolean;
}

export const MobileMenu = ({ 
  isOpen, 
  handleContactClick,
  isSolutionPage,
  isConverterPage
}: MobileMenuProps) => {
  const downloadBrochure = () => {
    emailjs.send(
      "service_qytcdsw",
      "template_a6q4yno",
      {
        brochure_download: "Plaquette commerciale téléchargée depuis la navigation"
      },
      "ySp_OZUSZFd1MsIZJ"
    ).then(() => {
      const link = document.createElement('a');
      link.href = '/uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      const link = document.createElement('a');
      link.href = '/uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed left-0 right-0 top-20 bg-business-primary/90 backdrop-blur-sm shadow-lg">
      <div className="flex flex-col">
        <div className="px-4 py-2 space-y-2 border-b border-white/10">
          <div className="flex items-center space-x-2 text-white">
            <Phone size={14} />
            <a 
              href="tel:0185390167"
              className="text-sm hover:text-[#56C7E1]"
            >
              01 85 39 01 67
            </a>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Mail size={14} />
            <a 
              href="mailto:contact@happlyz.com" 
              className="text-sm hover:text-[#56C7E1]"
            >
              contact@happlyz.com
            </a>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Globe size={14} />
            <span className="text-sm">🇫🇷 Français</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Download size={14} />
            <button
              onClick={downloadBrochure}
              className="text-sm hover:text-[#56C7E1]"
            >
              Télécharger notre plaquette
            </button>
          </div>
        </div>
        <Link
          to="/"
          className="px-4 py-2 text-white hover:text-[#56C7E1] text-left"
        >
          Accueil
        </Link>
        <div className={`px-4 py-2 text-white hover:bg-business-primary/50 ${isSolutionPage ? 'bg-business-primary/50' : ''}`}>
          <p className="mb-1">Nos solutions</p>
          <div className="pl-4 text-sm space-y-1 mt-2">
            <p className="font-medium text-[#56C7E1] uppercase">AFFICHAGE DYNAMIQUE</p>
            <div className="pl-2 space-y-1">
              <Link to="/solutions/affichage-dynamique/magasins" className="block hover:text-[#56C7E1] text-white">Magasins</Link>
              <Link to="/solutions/affichage-dynamique/vitrines" className="block hover:text-[#56C7E1] text-white">Vitrines</Link>
              <Link to="/solutions/affichage-dynamique/corporate" className="block hover:text-[#56C7E1] text-white">Corporate</Link>
            </div>
            
            <p className="font-medium text-[#56C7E1] uppercase mt-3">SALLES DE RÉUNION</p>
            <div className="pl-2">
              <Link to="/solutions/salles-de-reunion/solutions-audiovisuelles" className="block hover:text-[#56C7E1] text-white">Solutions audiovisuelles</Link>
            </div>
            
            <p className="font-medium text-[#56C7E1] uppercase mt-3">SALLES DE CLASSE</p>
            <div className="pl-2">
              <Link to="/solutions/salles-de-classe/solutions-pedagogiques" className="block hover:text-[#56C7E1] text-white">Solutions pédagogiques</Link>
            </div>
          </div>
        </div>
        <Link
          to="/nos-references"
          className="px-4 py-2 text-white hover:text-[#56C7E1] text-left"
        >
          Nos références
        </Link>
        <Link
          to="/convertisseur-taille-ecran"
          className={`px-4 py-2 text-white hover:text-[#56C7E1] text-left flex items-center ${isConverterPage ? 'bg-business-primary/50' : ''}`}
        >
          <Calculator size={14} className="mr-2" />
          Configurateur d'écran
        </Link>
        <button
          onClick={handleContactClick}
          className="mx-4 my-2 bg-white text-[#14213D] font-medium px-4 py-1 h-9 text-left hover:bg-gray-200 transition-colors"
        >
          Nous contacter
        </button>
      </div>
    </div>
  );
};
