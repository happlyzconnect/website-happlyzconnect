import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-business-primary to-business-secondary text-white overflow-hidden pt-[72px]">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/859d1346-c2f4-4363-bf7f-33b3073d4012.png')] bg-cover bg-right-top opacity-90"
        style={{ backgroundPosition: '85% 20%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-business-primary/90 via-business-primary/70 to-transparent" />
      <div className="container mx-auto px-8 relative z-20">
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
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-16">
            <button className="bg-[#56C7E1] hover:bg-[#56C7E1]/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Découvrir nos services
            </button>
            <button className="bg-white hover:bg-gray-100 text-business-primary font-semibold py-3 px-8 rounded-lg transition-colors">
              Demander un devis
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};