import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ClientCarousel } from "@/components/ClientCarousel";
import { MetaDescription } from "@/components/MetaDescription";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaDescription description="HAPPLYZ CONNECT intègre des solutions numériques et audiovisuelles pour entreprises et collectivités : écrans interactifs, affichage dynamique et outils connectés." />
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