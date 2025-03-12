
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const navbarHeight = 72;
    const targetPosition = contactSection?.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    
    const quoteRadio = document.getElementById('quote') as HTMLInputElement;
    if (quoteRadio) {
      quoteRadio.click();
    }
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    const navbarHeight = 72;
    const targetPosition = solutionsSection?.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  const downloadBrochure = () => {
    emailjs.send(
      "service_qytcdsw",
      "template_a6q4yno",
      {
        brochure_download: "Plaquette commerciale téléchargée depuis le hero"
      },
      "ySp_OZUSZFd1MsIZJ"
    ).then(() => {
      const link = document.createElement('a');
      link.href = '/lovable-uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      const link = document.createElement('a');
      link.href = '/lovable-uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-business-primary to-business-secondary text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/aaa36cf1-55ac-4916-83e9-43f0d7674525.png')] bg-cover bg-right-top opacity-90"
        style={{ backgroundPosition: '85% 40%', top: '0' }}
        role="img"
        aria-label="Solutions numériques et audiovisuelles professionnelles"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-business-primary/90 via-business-primary/70 to-transparent" style={{ top: '0' }} />
      <div className="container mx-auto px-8 relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Solutions numériques<br />pour des expériences uniques
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-business-light/90">
            Nous accompagnons nos clients vers l'excellence numérique avec des solutions sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
            <button 
              onClick={scrollToSolutions}
              className="bg-[#56C7E1] hover:bg-[#56C7E1]/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors outline-none focus:outline-none"
            >
              Découvrir nos solutions
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-white hover:bg-gray-100 text-business-primary font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Demander un devis
            </button>
          </div>
          <button
            onClick={downloadBrochure}
            className="flex items-center gap-2 text-white hover:text-[#56C7E1] transition-colors mb-8"
          >
            <Download size={20} />
            <span>Télécharger notre plaquette commerciale</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
