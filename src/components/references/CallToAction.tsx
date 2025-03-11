
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="mt-16 bg-business-primary text-white p-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-bold mb-4">Vous souhaitez être notre prochain client référence ?</h2>
          <p className="text-white/80">
            Contactez-nous pour discuter de votre projet et découvrir comment nos solutions peuvent répondre à vos besoins spécifiques.
          </p>
        </div>
        <Button 
          className="bg-[#56C7E1] hover:bg-[#3AB1CF] text-white px-6 py-3 whitespace-nowrap"
          asChild
        >
          <Link to="/#contact">Nous contacter</Link>
        </Button>
      </div>
    </section>
  );
};
