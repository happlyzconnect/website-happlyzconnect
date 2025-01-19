import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  
  const textColorStyle = {
    color: scrollY >= 100 
      ? '#FFFFFF'
      : '#14213D'
  };

  return (
    <nav 
      className="fixed w-full backdrop-blur-sm z-50 shadow-sm"
      style={{
        height: "96px",
        backgroundColor: scrollY >= 100 ? "rgba(20, 33, 61, 1)" : "transparent",
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full">
          {/* Logo column */}
          <div className="h-full flex items-center pr-8">
            <div className="h-6">
              <img 
                src={scrollY >= 100
                  ? "/lovable-uploads/568f7f6e-6e8a-4cea-9f70-11e6adee9c77.png"
                  : "/lovable-uploads/a06afdfa-22c0-4e7b-b7ef-7116784098c4.png"
                }
                alt="Happlyz Connect" 
                className="h-full object-contain"
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
            <div className="hidden md:flex justify-end items-center pb-4">
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
                  <Phone size={16} />
                  <span className="text-sm">01 85 39 01 67</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Mail size={16} />
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