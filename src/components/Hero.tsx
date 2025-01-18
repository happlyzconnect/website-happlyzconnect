import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-business-primary to-business-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Votre Succès, Notre Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-business-light/90 max-w-2xl mx-auto">
            Nous accompagnons votre entreprise vers l'excellence numérique avec des solutions sur mesure.
          </p>
          <button className="bg-business-accent hover:bg-business-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Découvrir nos services
          </button>
        </motion.div>
      </div>
    </div>
  );
};