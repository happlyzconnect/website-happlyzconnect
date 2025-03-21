import { motion } from "framer-motion";

export const About = () => {
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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-business-primary">
              Votre partenaire audiovisuel professionnel
            </h2>
            <p className="text-xl text-gray-600 mb-6 text-justify">
              <strong>HAPPLYZ CONNECT</strong> est une entreprise spécialisée dans <strong>l'intégration de solutions audiovisuelles professionnelles</strong>.
            </p>
            <p className="text-xl text-gray-600 mb-6 text-justify">
              Notre expertise nous permet d'accompagner nos clients dans la réalisation de leurs projets, de la <strong>conception à la maintenance</strong>.
            </p>
            <p className="text-xl text-gray-600 mb-8 text-justify">
              Que ce soit pour une <strong>salle de réunion</strong>, une <strong>salle de classe</strong>, une <strong>surface de vente</strong> ou un <strong>salon professionnel</strong>, nous <strong>concevons</strong>, <strong>installons</strong>, <strong>configurons</strong> et <strong>maintenons</strong> des systèmes adaptés à vos besoins. De l'idée à la réalisation, nous vous accompagnons à chaque étape pour garantir des installations performantes et parfaitement intégrées à votre environnement.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-business-primary mb-2">250+</div>
                <div className="text-gray-600">installations</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-business-primary mb-2">40+</div>
                <div className="text-gray-600">clients</div>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-business-accent hover:bg-business-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Demander un devis gratuit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};