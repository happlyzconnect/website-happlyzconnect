import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { ClientCarousel } from "@/components/ClientCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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