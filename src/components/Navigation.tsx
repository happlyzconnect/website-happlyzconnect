import { useState } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const [currentLanguage, setCurrentLanguage] = useState("FR");
  
  const textColorStyle = {
    color: '#FFFFFF'
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    
    const section = document.getElementById(sectionId);
    const navbarHeight = 72;
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav 
      className="fixed w-full shadow-sm"
      style={{
        height: "72px",
        backgroundColor: "#14213D",
        zIndex: 30
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full">
          {/* Logo column */}
          <div className="h-full flex items-center pr-8">
            <button 
              onClick={handleLogoClick}
              className="h-8 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/31538189-590f-499b-80e7-052171630c35.png"
                alt="Happlyz Connect" 
                className="h-full object-contain"
              />
            </button>
          </div>

          {/* Content column */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Top row with contact info */}
            <div className="flex justify-end items-center py-1">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone size={14} style={textColorStyle} />
                  <a 
                    href="tel:0185390167" 
                    style={textColorStyle} 
                    className="text-sm hover:text-[#56C7E1]"
                  >
                    01 85 39 01 67
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={14} style={textColorStyle} />
                  <a 
                    href="mailto:contact@happlyz.com" 
                    style={textColorStyle} 
                    className="text-sm hover:text-[#56C7E1]"
                  >
                    contact@happlyz.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#56C7E1]">
                      <Globe size={14} />
                      <span className="text-sm">{currentLanguage}</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white z-50" sideOffset={5}>
                      <DropdownMenuItem onClick={() => setCurrentLanguage("FR")}>
                        <span className="mr-2">🇫🇷</span> Français
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setCurrentLanguage("EN")}>
                        <span className="mr-2">🇬🇧</span> English
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
            <div className="hidden md:flex justify-end items-center pb-2">
              {[
                { label: "Accueil", id: "accueil" },
                { label: "Services", id: "services" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 hover:text-[#56C7E1] text-white"
                >
                  {item.label}
                </button>
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
                  <button 
                    onClick={() => setCurrentLanguage(currentLanguage === "FR" ? "EN" : "FR")}
                    className="text-sm hover:text-[#56C7E1]"
                  >
                    {currentLanguage === "FR" ? "🇫🇷 Français" : "🇬🇧 English"}
                  </button>
                </div>
              </div>
              {/* Mobile navigation links */}
              {[
                { label: "Accueil", id: "accueil" },
                { label: "Services", id: "services" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-white hover:text-[#56C7E1] text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};