import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { ClientCarousel } from "@/components/ClientCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/MetaTags";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MetaTags 
        title="HAPPLYZ Connect - Intégrateur de solutions numériques"
        description="HAPPLYZ CONNECT intègre des solutions numériques et audiovisuelles pour entreprises et collectivités : écrans interactifs, affichage dynamique et outils connectés."
      />
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ClientCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;