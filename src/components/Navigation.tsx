import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();

  // Calculer la hauteur et l'opacité en fonction du scroll de manière plus progressive
  const navHeight = Math.max(64, 96 - (scrollY / 4));
  const bgOpacity = Math.min(0.9, scrollY / 200);
  
  // Calculer la couleur du texte en fonction de l'opacité du fond
  const textColorStyle = {
    color: `rgb(${20 + (255-20) * (1-bgOpacity)}, ${33 + (255-33) * (1-bgOpacity)}, ${61 + (255-61) * (1-bgOpacity)})`,
    transition: 'color 700ms ease-in-out'
  };

  return (
    <nav 
      className="fixed w-full backdrop-blur-sm z-50 shadow-sm transition-all duration-700 ease-in-out"
      style={{
        height: `${navHeight}px`,
        backgroundColor: `rgba(20, 33, 61, ${bgOpacity})`,
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="text-xl font-bold" style={textColorStyle}>
            VotreEntreprise
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={textColorStyle}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Accueil", "À propos", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-business-accent transition-colors"
                style={textColorStyle}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bg-business-primary/90 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col">
              {["Accueil", "À propos", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-white hover:text-business-accent hover:bg-white/10 transition-colors"
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