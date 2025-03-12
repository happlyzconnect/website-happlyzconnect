
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLocation, useNavigate } from "react-router-dom";
import { TopLinks } from "./TopLinks";
import { MainNavLinks } from "./MainNavLinks";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isReferencesPage = location.pathname === '/nos-references';
  const isSolutionPage = location.pathname.includes('/solutions/');
  const isConverterPage = location.pathname === '/convertisseur-taille-ecran';
  
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
    const navbarHeight = 90; // Updated to match new navbar height
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
          const navbarHeight = 90; // Updated to match new navbar height
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

  return (
    <nav 
      className="fixed w-full shadow-sm"
      style={{
        height: "90px",
        backgroundColor: "#14213D",
        zIndex: 30
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full">
          <div className="h-full flex items-center pr-8">
            <Logo />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-end items-center py-3 mb-2"> 
              <TopLinks scrollToBottom={scrollToBottom} />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                style={textColorStyle}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            <MainNavLinks 
              handleContactClick={handleContactClick}
              isSolutionPage={isSolutionPage}
              isReferencesPage={isReferencesPage}
              isConverterPage={isConverterPage}
            />
          </div>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          handleContactClick={handleContactClick}
          isSolutionPage={isSolutionPage}
          isConverterPage={isConverterPage}
        />
      </div>
    </nav>
  );
};
