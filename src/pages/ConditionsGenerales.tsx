import { MetaTags } from "@/components/MetaTags";

const ConditionsGenerales = () => {
  return (
    <div className="min-h-screen">
      <MetaTags 
        title="Conditions Générales - HAPPLYZ Connect"
        description="Conditions générales de vente et d'utilisation des services HAPPLYZ CONNECT : modalités, garanties et engagements pour nos solutions numériques professionnelles."
      />
      <h1 className="text-4xl font-bold text-center my-8">Conditions Générales</h1>
      <div className="container mx-auto px-4">
        <p className="mb-4">
          Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre HAPPLYZ CONNECT et ses clients. En passant commande, le client accepte sans réserve les CGV.
        </p>
        <h2 className="text-2xl font-semibold mt-6">1. Objet</h2>
        <p className="mb-4">
          Les CGV définissent les conditions dans lesquelles HAPPLYZ CONNECT fournit ses services d'intégration de solutions numériques et audiovisuelles.
        </p>
        <h2 className="text-2xl font-semibold mt-6">2. Commandes</h2>
        <p className="mb-4">
          Toute commande doit être confirmée par écrit. HAPPLYZ CONNECT se réserve le droit de refuser toute commande pour des raisons légitimes.
        </p>
        <h2 className="text-2xl font-semibold mt-6">3. Prix</h2>
        <p className="mb-4">
          Les prix des services sont indiqués en euros, hors taxes. HAPPLYZ CONNECT se réserve le droit de modifier ses prix à tout moment.
        </p>
        <h2 className="text-2xl font-semibold mt-6">4. Paiement</h2>
        <p className="mb-4">
          Le paiement est dû à la commande, sauf accord contraire. Les paiements peuvent être effectués par virement bancaire ou par chèque.
        </p>
        <h2 className="text-2xl font-semibold mt-6">5. Livraison</h2>
        <p className="mb-4">
          Les délais de livraison sont donnés à titre indicatif. HAPPLYZ CONNECT ne pourra être tenu responsable des retards de livraison.
        </p>
        <h2 className="text-2xl font-semibold mt-6">6. Garanties</h2>
        <p className="mb-4">
          HAPPLYZ CONNECT garantit la qualité de ses services. En cas de non-conformité, le client doit informer HAPPLYZ CONNECT dans un délai de 15 jours.
        </p>
        <h2 className="text-2xl font-semibold mt-6">7. Responsabilité</h2>
        <p className="mb-4">
          HAPPLYZ CONNECT ne pourra être tenu responsable des dommages indirects ou immatériels résultant de l'utilisation de ses services.
        </p>
        <h2 className="text-2xl font-semibold mt-6">8. Droit applicable</h2>
        <p className="mb-4">
          Les CGV sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents.
        </p>
      </div>
    </div>
  );
};

export default ConditionsGenerales;
