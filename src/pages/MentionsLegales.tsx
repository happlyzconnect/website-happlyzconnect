import { MetaTags } from "@/components/MetaTags";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <MetaTags 
        title="Mentions Légales - HAPPLYZ Connect"
        description="Mentions légales de HAPPLYZ CONNECT : informations légales, conditions d'utilisation et politique de confidentialité de notre site web."
      />
      <h1 className="text-4xl font-bold text-center my-8">Mentions Légales</h1>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mt-4">1. Informations légales</h2>
        <p>
          Le site www.happlyz.com est édité par HAPPLYZ Connect, société à responsabilité limitée au capital de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés sous le numéro 123 456 789, dont le siège social est situé au 123 Rue de l'Exemple, 75000 Paris, France.
        </p>
        <h2 className="text-2xl font-semibold mt-4">2. Conditions d'utilisation</h2>
        <p>
          L'utilisation de ce site est soumise à l'acceptation des conditions générales d'utilisation. En accédant à ce site, vous acceptez ces conditions sans réserve.
        </p>
        <h2 className="text-2xl font-semibold mt-4">3. Politique de confidentialité</h2>
        <p>
          HAPPLYZ Connect s'engage à protéger vos données personnelles. Pour plus d'informations, veuillez consulter notre politique de confidentialité.
        </p>
        <h2 className="text-2xl font-semibold mt-4">4. Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site, y compris les textes, images, graphismes, logos, sont protégés par le droit d'auteur et sont la propriété exclusive de HAPPLYZ Connect.
        </p>
        <h2 className="text-2xl font-semibold mt-4">5. Contact</h2>
        <p>
          Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse suivante : contact@happlyz.com.
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
