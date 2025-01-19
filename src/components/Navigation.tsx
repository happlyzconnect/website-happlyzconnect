import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();

  // Calculer la hauteur et l'opacité en fonction du scroll de manière plus progressive
  const navHeight = Math.max(64, 96 - (scrollY / 4)); // Ralentissement de la réduction de hauteur
  const bgOpacity = Math.min(0.9, scrollY / 200); // Ralentissement de l'augmentation de l'opacité

  return (
    <nav 
      className="fixed w-full backdrop-blur-sm z-50 shadow-sm transition-all duration-700 ease-in-out"
      style={{
        height: `${navHeight}px`,
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="text-xl font-bold text-business-primary">
            VotreEntreprise
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Accueil", "À propos", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-business-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col">
              {["Accueil", "À propos", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-600 hover:text-business-accent hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};