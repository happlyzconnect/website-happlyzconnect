
import { motion } from "framer-motion";
import { useState } from "react";
import { PartnersList } from "./partners/PartnersList";
import { partnersData } from "./partners/partnersData";

export const PartnersSection = () => {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (partnerId: number) => {
    setFailedImages(prev => [...prev, partnerId]);
  };

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-business-primary mb-4">
          Nos partenaires
        </h2>
        <div className="h-1 w-16 bg-[#56C7E1] mx-auto mb-6"></div>
        <p className="text-business-secondary text-lg max-w-2xl mx-auto">
          Nous collaborons avec les meilleurs acteurs du marché pour vous proposer des solutions de qualité
        </p>
      </motion.div>

      <PartnersList 
        partners={partnersData} 
        failedImages={failedImages} 
        onImageError={handleImageError}
      />
    </section>
  );
};
