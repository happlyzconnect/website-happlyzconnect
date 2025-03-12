
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { SolutionsMenu } from "./SolutionsMenu";

interface MainNavLinksProps {
  handleContactClick: () => void;
  isSolutionPage: boolean;
  isReferencesPage: boolean;
  isConverterPage: boolean;
}

export const MainNavLinks = ({ 
  handleContactClick, 
  isSolutionPage, 
  isReferencesPage, 
  isConverterPage 
}: MainNavLinksProps) => {
  return (
    <div className="hidden md:flex justify-end items-center pb-3">
      <SolutionsMenu isSolutionPage={isSolutionPage} />

      <Link
        to="/nos-references"
        className="px-4 pb-3 hover:text-[#56C7E1] text-white transition-colors relative group outline-none focus:outline-none"
      >
        Nos références
        <span className={`absolute bottom-0 left-0 w-full h-[5px] bg-[#56C7E1] ${isReferencesPage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></span>
      </Link>

      <Link
        to="/convertisseur-taille-ecran"
        className="px-4 pb-3 hover:text-[#56C7E1] text-white transition-colors relative group outline-none focus:outline-none"
      >
        <div className="flex items-center">
          <Calculator size={14} className="mr-1" />
          <span>Configurateur</span>
        </div>
        <span className={`absolute bottom-0 left-0 w-full h-[5px] bg-[#56C7E1] ${isConverterPage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></span>
      </Link>

      <button
        onClick={handleContactClick}
        className="bg-white text-[#14213D] font-medium px-4 py-1 ml-2 h-9 mt-[-8px] hover:bg-gray-200 transition-colors mb-3"
      >
        Nous contacter
      </button>
    </div>
  );
};
