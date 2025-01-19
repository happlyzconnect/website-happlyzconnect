import { Check, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Expertise Technique",
      description: "Plus de 15 ans d'expérience dans l'intégration de solutions audiovisuelles professionnelles."
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Une équipe dédiée qui vous accompagne de la conception à la maintenance de vos installations."
    },
    {
      icon: Check,
      title: "Solutions Sur-Mesure",
      description: "Des solutions adaptées à vos besoins spécifiques et à votre budget."
    },
    {
      icon: Clock,
      title: "Réactivité Garantie",
      description: "Une équipe technique disponible pour assurer le bon fonctionnement de vos équipements."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-business-primary mb-6">
            Pourquoi choisir HAPPLYZ CONNECT ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre engagement envers l'excellence et l'innovation fait de nous le partenaire idéal pour vos projets audiovisuels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-business-primary/10 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="w-8 h-8 text-business-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-business-primary">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-business-accent hover:bg-business-accent/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg">
            Obtenir un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};