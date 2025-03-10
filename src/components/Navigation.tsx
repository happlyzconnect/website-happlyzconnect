import { useState } from "react";
import { Menu, X, Phone, Mail, Globe, ArrowDown, Tv, Users, GraduationCap } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const [currentLanguage, setCurrentLanguage] = useState("FR");
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
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
                    className="text-sm text-white hover:text-[#56C7E1] transition-colors"
                  >
                    01 85 39 01 67
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={14} style={textColorStyle} />
                  <a 
                    href="mailto:contact@happlyz.com" 
                    className="text-sm text-white hover:text-[#56C7E1] transition-colors"
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <button
                  onClick={scrollToBottom}
                  className="text-white hover:text-[#56C7E1] transition-colors flex items-center gap-2 text-sm"
                >
                  Bas du site
                  <ArrowDown size={14} />
                </button>
              </div>

              {/* Mobile menu button */}
              {isHomePage && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden"
                  style={textColorStyle}
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
              )}
            </div>

            {/* Bottom row with navigation links */}
            {isHomePage && (
              <div className="hidden md:flex justify-end items-center pb-2">
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="px-4 hover:text-[#56C7E1] text-white transition-colors"
                >
                  Accueil
                </button>

                {/* Nos solutions avec hover popup */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsPopoverOpen(true)}
                  onMouseLeave={() => setIsPopoverOpen(false)}
                >
                  <button className="px-4 hover:text-[#56C7E1] text-white transition-colors">
                    Nos solutions
                  </button>
                  
                  {isPopoverOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg p-4 z-50">
                      <div className="grid gap-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 font-medium">
                              <Tv className="h-4 w-4 text-[#56C7E1]" />
                              <h4 className="font-semibold text-sm text-black">Affichage dynamique</h4>
                            </div>
                            <div className="pl-6 space-y-1">
                              <a href="#" className="text-sm text-gray-600 hover:text-[#56C7E1] block">Magasins</a>
                              <a href="#" className="text-sm text-gray-600 hover:text-[#56C7E1] block">Vitrines</a>
                              <a href="#" className="text-sm text-gray-600 hover:text-[#56C7E1] block">Corporate</a>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 font-medium">
                              <Users className="h-4 w-4 text-[#56C7E1]" />
                              <h4 className="font-semibold text-sm text-black">Salles de réunion</h4>
                            </div>
                            <div className="pl-6">
                              <a href="#" className="text-sm text-gray-600 hover:text-[#56C7E1] block">Solutions audiovisuelles</a>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 font-medium">
                              <GraduationCap className="h-4 w-4 text-[#56C7E1]" />
                              <h4 className="font-semibold text-sm text-black">Salles de classe</h4>
                            </div>
                            <div className="pl-6">
                              <a href="#" className="text-sm text-gray-600 hover:text-[#56C7E1] block">Solutions pédagogiques</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 hover:text-[#56C7E1] text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && isHomePage && (
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
                  <span className="text-sm">🇫🇷 Français</span>
                </div>
              </div>
              {/* Mobile navigation links - also removed Services here */}
              <button
                onClick={() => scrollToSection("accueil")}
                className="px-4 py-2 text-white hover:text-[#56C7E1] text-left"
              >
                Accueil
              </button>
              {/* Menu Nos solutions pour mobile */}
              <div className="px-4 py-2 text-white hover:bg-business-primary/50">
                <p className="mb-1">Nos solutions</p>
                <div className="pl-4 text-sm space-y-1 mt-2">
                  <p className="font-medium text-[#56C7E1]">Affichage dynamique</p>
                  <div className="pl-2 space-y-1">
                    <a href="#" className="block hover:text-[#56C7E1]">Magasins</a>
                    <a href="#" className="block hover:text-[#56C7E1]">Vitrines</a>
                    <a href="#" className="block hover:text-[#56C7E1]">Corporate</a>
                  </div>
                  
                  <p className="font-medium text-[#56C7E1] mt-3">Salles de réunion</p>
                  <div className="pl-2">
                    <a href="#" className="block hover:text-[#56C7E1]">Solutions audiovisuelles</a>
                  </div>
                  
                  <p className="font-medium text-[#56C7E1] mt-3">Salles de classe</p>
                  <div className="pl-2">
                    <a href="#" className="block hover:text-[#56C7E1]">Solutions pédagogiques</a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-white hover:text-[#56C7E1] text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
