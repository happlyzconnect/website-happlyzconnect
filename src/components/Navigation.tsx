import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();

  const navHeight = Math.max(64, 96 - (scrollY / 4));
  const bgOpacity = Math.min(1, scrollY / 200);
  
  const textColorStyle = {
    color: bgOpacity >= 0.5 
      ? '#FFFFFF'
      : `rgb(${20 + (255-20) * bgOpacity}, ${33 + (255-33) * bgOpacity}, ${61 + (255-61) * bgOpacity})`,
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
        <div className="flex h-full">
          {/* Logo column */}
          <div className="h-full flex items-center pr-8">
            <div className="h-6">
              <img 
                src={bgOpacity >= 0.5 
                  ? "/lovable-uploads/568f7f6e-6e8a-4cea-9f70-11e6adee9c77.png"
                  : "/lovable-uploads/a06afdfa-22c0-4e7b-b7ef-7116784098c4.png"
                }
                alt="Happlyz Connect" 
                className="h-full object-contain transition-opacity duration-700"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Top row with contact info */}
            <div className="flex justify-end items-center py-2">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone size={16} style={textColorStyle} />
                  <span style={textColorStyle} className="text-sm">01 85 39 01 67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} style={textColorStyle} />
                  <span style={textColorStyle} className="text-sm">contact@happlyz.com</span>
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
            <div className="hidden md:flex justify-end items-center pb-4">
              {["Accueil", "Services", "Réalisations", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 transition-colors duration-300 hover:text-[#56C7E1]"
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
                  <Phone size={16} />
                  <span className="text-sm">01 85 39 01 67</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Mail size={16} />
                  <span className="text-sm">contact@happlyz.com</span>
                </div>
              </div>
              {/* Mobile navigation links */}
              {["Accueil", "Services", "Réalisations", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-white transition-colors duration-300 hover:text-[#56C7E1]"
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