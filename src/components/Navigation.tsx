import { useState } from "react";
import { Menu, X, Phone, Mail, Globe, ArrowDown, Tv, Users, GraduationCap, Download } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  HoverPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const [currentLanguage, setCurrentLanguage] = useState("FR");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isReferencesPage = location.pathname === '/nos-references';
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  const textColorStyle = {
    color: '#FFFFFF'
  };

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (location.pathname === '/') {
      window.location.href = '/';
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  const handleContactClick = () => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const navbarHeight = 72;
          const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      scrollToSection("contact");
    }
    setIsOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/plaquette-commerciale-happlyz.pdf';
    link.download = 'plaquette-commerciale-happlyz.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="h-full flex items-center pr-8">
            <a 
              href="/"
              onClick={handleLogoClick}
              className="h-8 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/31538189-590f-499b-80e7-052171630c35.png"
                alt="Happlyz Connect" 
                className="h-full object-contain"
              />
            </a>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-end items-center py-2 mb-2">
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
                <button
                  onClick={downloadBrochure}
                  className="text-white hover:text-[#56C7E1] transition-colors flex items-center gap-2 text-sm"
                >
                  <Download size={14} />
                  <span>Plaquette</span>
                </button>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                style={textColorStyle}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            <div className="hidden md:flex justify-end items-center pb-3">
              <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <HoverPopover
                  open={isPopoverOpen}
                  onOpenChange={setIsPopoverOpen}
                >
                  <PopoverTrigger asChild>
                    <button className="px-4 pb-3 hover:text-[#56C7E1] text-white transition-colors relative group outline-none focus:outline-none">
                      Nos solutions
                      <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#56C7E1] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-80 p-0 bg-white rounded-md shadow-lg" 
                    align="start"
                  >
                    <div className="grid gap-4 p-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-medium">
                            <Tv className="h-4 w-4 text-[#56C7E1]" />
                            <h4 className="font-semibold text-sm uppercase text-[#14213D]">AFFICHAGE DYNAMIQUE</h4>
                          </div>
                          <div className="pl-6 space-y-1">
                            <Link to="/solutions/affichage-dynamique/magasins" className="text-sm text-black hover:text-[#56C7E1] block">Magasins</Link>
                            <Link to="/solutions/affichage-dynamique/vitrines" className="text-sm text-black hover:text-[#56C7E1] block">Vitrines</Link>
                            <Link to="/solutions/affichage-dynamique/corporate" className="text-sm text-black hover:text-[#56C7E1] block">Corporate</Link>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-medium">
                            <Users className="h-4 w-4 text-[#56C7E1]" />
                            <h4 className="font-semibold text-sm uppercase text-[#14213D]">SALLES DE RÉUNION</h4>
                          </div>
                          <div className="pl-6">
                            <Link to="/solutions/salles-de-reunion/solutions-audiovisuelles" className="text-sm text-black hover:text-[#56C7E1] block">Solutions audiovisuelles</Link>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-medium">
                            <GraduationCap className="h-4 w-4 text-[#56C7E1]" />
                            <h4 className="font-semibold text-sm uppercase text-[#14213D]">SALLES DE CLASSE</h4>
                          </div>
                          <div className="pl-6">
                            <Link to="/solutions/salles-de-classe/solutions-pedagogiques" className="text-sm text-black hover:text-[#56C7E1] block">Solutions pédagogiques</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </HoverPopover>
              </div>

              <Link
                to="/nos-references"
                className="px-4 pb-3 hover:text-[#56C7E1] text-white transition-colors relative group outline-none focus:outline-none"
              >
                Nos références
                <span className={`absolute bottom-0 left-0 w-full h-[5px] bg-[#56C7E1] ${isReferencesPage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></span>
              </Link>

              <button
                onClick={handleContactClick}
                className="bg-white text-[#14213D] font-medium px-4 py-1 ml-2 h-8 mt-[-8px] hover:bg-gray-200 transition-colors mb-3"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bg-business-primary/90 backdrop-blur-sm shadow-lg">
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
              <div className="px-4 py-2 text-white hover:bg-business-primary/50">
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
              <button
                onClick={handleContactClick}
                className="mx-4 my-2 bg-white text-[#14213D] font-medium px-4 py-1 h-8 text-left hover:bg-gray-200 transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
