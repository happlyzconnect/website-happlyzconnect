import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site happlyz.com est édité par la société HAPPLYZ Connect, Société par Actions Simplifiée au capital de 30.000€.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Siège social : 5 rue Charles Despeaux 78400 CHATOU</li>
              <li>SIREN : 823 127 154</li>
              <li>RCS : VERSAILLES</li>
              <li>Téléphone : 01 85 39 01 67</li>
              <li>Email : contact@happlyz.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est HAPPLYZ Connect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
            <p className="mb-4">
              Ce site est hébergé par OVH SAS :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
              <li>SAS au capital de 10 174 560 €</li>
              <li>RCS Lille Métropole 424 761 419 00045</li>
              <li>Code APE 6202A</li>
              <li>N° TVA : FR 22 424 761 419</li>
              <li>Téléphone : +33 (0)8 99 70 17 61</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de HAPPLYZ Connect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Protection des données personnelles</h2>
            <p className="mb-4">
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter HAPPLYZ Connect à l'adresse email : contact@happlyz.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;