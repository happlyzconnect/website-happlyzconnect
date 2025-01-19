import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  
  const textColorStyle = {
    color: '#FFFFFF'
  };

  return (
    <nav 
      className="fixed w-full backdrop-blur-sm z-50 shadow-sm"
      style={{
        height: "72px", // Réduit de 96px à 72px
        backgroundColor: "#14213D",
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full">
          {/* Logo column */}
          <div className="h-full flex items-center pr-8">
            <div className="h-5"> {/* Réduit de h-6 à h-5 */}
              <img 
                src="/lovable-uploads/568f7f6e-6e8a-4cea-9f70-11e6adee9c77.png"
                alt="Happlyz Connect" 
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Top row with contact info */}
            <div className="flex justify-end items-center py-1"> {/* Réduit de py-2 à py-1 */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone size={14} style={textColorStyle} /> {/* Réduit de 16 à 14 */}
                  <span style={textColorStyle} className="text-sm">01 85 39 01 67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={14} style={textColorStyle} /> {/* Réduit de 16 à 14 */}
                  <a 
                    href="mailto:contact@happlyz.com" 
                    style={textColorStyle} 
                    className="text-sm hover:text-[#56C7E1]"
                  >
                    contact@happlyz.com
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                style={textColorStyle}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Bottom row with navigation links */}
            <div className="hidden md:flex justify-end items-center pb-2"> {/* Réduit de pb-4 à pb-2 */}
              {["Accueil", "Services", "Réalisations", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 hover:text-[#56C7E1]"
                  style={textColorStyle}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bg-business-primary/90 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col">
              {/* Mobile contact info */}
              <div className="px-4 py-2 space-y-2 border-b border-white/10">
                <div className="flex items-center space-x-2 text-white">
                  <Phone size={14} />
                  <span className="text-sm">01 85 39 01 67</span>
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
              </div>
              {/* Mobile navigation links */}
              {["Accueil", "Services", "Réalisations", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-white hover:text-[#56C7E1]"
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