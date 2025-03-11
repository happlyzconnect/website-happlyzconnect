
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ClientCarousel } from "@/components/ClientCarousel";
import { MetaDescription } from "@/components/MetaDescription";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to the contact section
    if (location.search.includes('scrollTo=contact')) {
      const contactSection = document.getElementById('contact');
      const navbarHeight = 72;
      
      if (contactSection) {
        setTimeout(() => {
          const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          
          // Select the quote radio button
          const quoteRadio = document.getElementById('quote') as HTMLInputElement;
          if (quoteRadio) {
            quoteRadio.click();
          }
        }, 500); // Add a slight delay to ensure the page is fully loaded
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description="HAPPLYZ CONNECT intègre des solutions numériques et audiovisuelles pour entreprises et collectivités : écrans interactifs, affichage dynamique et outils connectés." />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Solutions />
        <WhyChooseUs />
        <ClientCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
