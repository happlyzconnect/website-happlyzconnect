import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ConditionsGenerales = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="mb-8">
          <button 
            onClick={handleHomeClick}
            className="text-business-primary hover:text-business-accent transition-colors"
          >
            ← Retour à l'accueil
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="space-y-8 text-left">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. OBJET</h2>
            <p className="mb-4">
              Les présentes conditions générales de vente de la société HAPPLYZ Connect SAS, immatriculée au RCS de Nanterre sous le numéro SIREN 823127154 et le numéro de TVA Intracommunautaire FR94 823127154, dont le siège social se situe au 5 rue Charles Despeaux 78400 CHATOU, France, s'appliquent de plein droit à l'égard de tout acheteur.
            </p>
            <p className="mb-4">
              L'acheteur reconnaît expressément que les présentes conditions générales lui ont été communiquées préalablement à la signature du devis, conformément aux dispositions de l'article L. 441- 6 du code de commerce.
            </p>
            <p className="mb-4">
              Toute commande implique l'acceptation sans réserve et l'adhésion à ces conditions générales qui prévalent sur toutes autres stipulations éventuelles, sauf accord dérogatoire préalable et écrit du vendeur.
            </p>
            <p>
              Ces conditions générales de vente pourront faire l'objet de modifications. Les conditions applicables sont celles en vigueur à la date d'établissement du devis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. COMMANDES - DEVIS</h2>
            <p className="mb-4">
              Toute commande fera l'objet d'un devis personnalisé, établi par le vendeur et soumis à l'acceptation de l'acheteur. La commande est réputée valable et définitive à la date de la réception du devis par le vendeur, dûment daté et signé par l'acheteur.
            </p>
            <p className="mb-4">
              Ce devis pourra s'accompagner d'un corpus documentaire précisant les caractéristiques des produits vendus (la proposition commerciale). Tous autres documents non conjointement transmis, notamment les catalogues, prospectus, publicités, documents précédemment transmis, n'ont qu'une valeur informative et indicative.
            </p>
            <p className="mb-4">
              Toute demande de modification de la commande passée par l'acheteur devra être formulée par écrit et devra être acceptée par le vendeur. Elle ne sera prise en considération par le vendeur qu'après acceptation par l'acheteur d'un devis modifié.
            </p>
            <p className="mb-4">
              Dans le cas où l'acheteur passe une commande sans avoir payé intégralement ses commandes précédentes, de même qu'en cas de litige en cours concernant une précédente commande, le vendeur se réserve le droit de la refuser ou de ne pas l'exécuter, sans que l'acheteur puisse invoquer un quelconque préjudice.
            </p>
            <p>
              Tout devis n'est valable que pour une durée de 30 jours à compter de son établissement. Passé ce délai, tous les produits et prix qu'il comporte pourront être révisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. PRIX</h2>
            <p className="mb-4">
              Les prix des produits vendus sont ceux en vigueur au jour de la prise de commande. Ils sont libellés en euros et calculés hors taxes. Par voie de conséquence, ils seront majorés du taux de TVA et des frais de transport applicables au jour de la commande.
            </p>
            <p className="mb-4">
              Le vendeur ne pourra augmenter le prix ainsi fixé, si le coût dépasse celui prévu initialement, sauf en cas d'autorisation expresse de l'acheteur pour faire exécuter une prestation plus onéreuse et pour un prix convenu entre les parties.
            </p>
            <p>
              Les tarifs proposés comprennent les rabais et ristournes que le vendeur serait amené à octroyer. Aucun escompte ne sera consenti en cas de paiement anticipé.
            </p>
          </section>

          {/* Continuer avec les autres sections de la même manière */}
          {/* Pour la lisibilité, j'ai inclus les 3 premières sections. Les autres suivront le même format */}

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. CONDITIONS DE REGLEMENT</h2>
            <p className="mb-4">
              Le règlement des commandes s'effectue soit par chèque soit par virement bancaire selon les modalités figurant sur le devis signé.
            </p>
            <p className="mb-4">
              La date d'échéance du règlement est indiquée sur la facture.
            </p>
            <p>
              A défaut de mention spécifique, le délai de paiement s'appliquant sera de 30 jours à compter de la date d'émission de la facture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. RETARD DE PAIEMENT</h2>
            <p className="mb-4">
              En cas de retard ou de défaut de paiement des sommes dues au vendeur à la date d'échéance, l'acheteur sera redevable d'une pénalité de retard.
            </p>
            <p className="mb-4">
              Le taux d'intérêt de cette pénalité de retard est égal au taux de refinancement semestriel de la Banque Centrale Européenne en vigueur au 1er janvier pour le premier semestre de l'année concernée ou au 1er juillet pour le second semestre de l'année concernée, majoré de 10 points.
            </p>
            <p className="mb-4">
              Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à compter de la date d'échéance sans qu'aucune mise en demeure préalable ne soit nécessaire.
            </p>
            <p>
              En sus de l'indemnité de retard, toute somme non payée à sa date d'exigibilité produira de plein droit le paiement d'une indemnité forfaitaire de 40 euros due au titre des frais de recouvrement. Dans le cas où ces frais dépasseraient l'indemnité forfaitaire, le vendeur répercutera intégralement sur l'acheteur défaillant les frais de relance, rejet bancaire ou de recouvrement subis sur justification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. RESERVE DE PROPRIETE</h2>
            <p className="mb-4">
              Le vendeur conserve la propriété des produits vendus, en quelque main qu'ils se trouvent, jusqu'au paiement complet et effectif du prix par l'acheteur, en principal et intérêts, même en cas d'octroi de délais de paiement.
            </p>
            <p>
              Jusqu'à leur complet règlement, l'acheteur pourra utiliser les produits vendus pour l'usage qui leur est destiné, mais il devra les tenir, à ses frais, en bon état d'usage et d'entretien et ne pourra ni les modifier ou les transformer, ni les déplacer, ni les revendre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. CLAUSE RESOLUTOIRE</h2>
            <p className="mb-4">
              Suite à une absence d'effet supérieure à 30 jours suivant la mise en œuvre de la clause « Retard de paiement », tout comme en cas de refus par l'acheteur de prendre livraison des produits commandés, le vendeur adressera à l'acheteur une mise en demeure par lettre recommandée avec accusé de réception.
            </p>
            <p>
              A défaut d'exécution par l'acheteur de son obligation dans un délai de 15 jours à compter de l'envoi de la mise en demeure, le vendeur se réserve la possibilité de résoudre le contrat de plein droit. L'acheteur devra aussitôt restituer au vendeur les produits vendus et livrés, à ses frais et risques, et sera redevable de dommages et intérêts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. LIVRAISON</h2>
            <p className="mb-4">
              L'acheteur prendra livraison des biens et les prestations de service seront réalisées dans un délai indiqué dans la proposition commerciale. A défaut de mention, un délai de 1 mois suivant la réception par le vendeur du devis signé sera retenu.
            </p>
            <p className="mb-4">
              Le délai de livraison indiqué lors de l'enregistrement de la commande n'est donné qu'à titre indicatif et n'est aucunement garanti. Par voie de conséquence, tout retard raisonnable dans la livraison des produits ne pourra donner lieu à dommages et intérêt ni annulation de commande.
            </p>
            <p className="mb-4">
              Le vendeur livrera lui-même ou fera livrer les biens à l'acheteur à l'adresse convenue entre les parties. Le transfert des risques concernant les biens s'effectue dès remise au transporteur des marchandises. En cas de marchandises manquantes ou détériorées lors du transport, l'acheteur devra formuler toutes les réserves nécessaires sur le bon de livraison à réception desdites marchandises. Ces réserves devront être, en outre, confirmées par écrit au vendeur dans les 3 jours suivant la livraison, par courrier recommandé avec accusé de réception.
            </p>
            <p>
              Au terme de l'exécution d'une prestation, l'acheteur s'engage à prendre réception de l'ouvrage et, le cas échéant, approuver la prestation fournie par le vendeur ou émettre des réserves dans le cas où la prestation ne serait pas satisfaisante. La réception sera tacite et, par conséquent, la prestation considérée comme approuvée si, à la fin d'un délai de 15 jours suivant l'exécution des travaux, l'acheteur n'a pas communiqué de réserves par courrier recommandé avec accusé de réception au vendeur. Le transfert des risques concernant les prestations s'opère dès livraison de la prestation par le vendeur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. GARANTIE</h2>
            <p className="mb-4">
              Le vendeur garantit les produits vendus au titre de la garantie légale des vices cachés.
            </p>
            <p className="mb-4">
              Le prestataire garantit que les biens vendus sont conformes à la description faite par la proposition commerciale et le devis signé.
            </p>
            <p>
              La garantie ne pourra jouer en cas de non-paiement du prix par l'acheteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. RESPONSABILITE DU VENDEUR</h2>
            <p className="mb-4">
              Le vendeur s'engage à livrer les produits tels que définis et dans les délais fixés, mettre en œuvre tous les moyens nécessaires pour assurer la bonne exécution de ses obligations et fournir ses services avec diligence, conformément aux usages professionnels de son activité.
            </p>
            <p className="mb-4">
              La responsabilité du vendeur ne sera engagée qu'en cas de faute lourde, intentionnelle ou dolosive. La responsabilité totale du vendeur est limitée à une fois le prix facturé par le vendeur.
            </p>
            <p>
              Le vendeur ne pourra être tenu responsable des dommages causés à l'acheteur résultant d'un usage des produits non conforme aux préconisations du vendeur. En aucun cas le vendeur n'encourra de responsabilité pour perte de bénéfice, perte de données, frais d'acquisition de produits ou services de remplacement. De plus, le vendeur n'encourt aucune responsabilité pour tous dommages indirects qui peuvent subvenir du fait du présent contrat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. RESPONSABILITE DE L'ACHETEUR</h2>
            <p className="mb-4">
              L'acheteur s'engage à payer le prix des produits pour le montant et dans les délais prévus, en prendre livraison, mettre en œuvre tous les moyens nécessaires pour assurer la bonne exécution de ses obligations, communiquer au vendeur toutes les informations utiles à la bonne délivrance des produits et à l'exécution du présent contrat et collaborer pleinement avec le vendeur en vue de la bonne délivrance des produits.
            </p>
            <p className="mb-4">
              Certains des produits vendus peuvent faire appel à des technologies informatiques. L'acheteur reconnaît être seul responsable des données transmises au travers des produits vendus et renonce à tout recours envers le vendeur en cas de corruption de données, mésusage ou piratage. Il appartient également à l'acheteur de prendre toutes les mesures appropriées de façon à protéger ses propres données et/ou logiciels.
            </p>
            <p>
              Il appartient à l'acheteur de vérifier sous sa propre responsabilité que ses contraintes propres permettent la bonne exécution des prestations du vendeur. L'acheteur s'engage en outre à assurer à ses frais toutes modifications de ses locaux et/ou infrastructures techniques nécessaires à l'exécution des prestations souscrites. La responsabilité du vendeur ne saurait être engagée en cas d'impossibilité d'exécution ou d'exécution tardive si celle-ci est imputable à l'acheteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. CONFIDENTIALITÉ</h2>
            <p className="mb-4">
              Chaque partie s'engage à prendre toutes les mesures nécessaires pour maintenir confidentielles les informations de toute nature qui lui seront communiquées par l'autre partie, que ce soit préalablement à la conclusion du présent contrat, pendant son exécution ou après son terme.
            </p>
            <p className="mb-4">
              Elles ne pourront les communiquer à des tiers, sauf avec l'autorisation préalable et écrite de l'autre partie, et s'engagent à ce que leurs personnels, leurs prestataires et leurs sous-traitants respectent ces obligations.
            </p>
            <p className="mb-4">
              Les parties s'engagent en particulier à considérer comme confidentiels tous les documents qui leurs seront fournis par l'autre partie, le présent contrat, toute proposition commerciale, ainsi que toute négociation intervenant entre elles.
            </p>
            <p className="mb-4">
              Toutefois, l'acheteur autorise le vendeur à reproduire son logo, ses couleurs et ses marques à des fins de personnalisation des produits et à les mentionner sur ses supports commerciaux, sauf demande expresse de l'acheteur.
            </p>
            <p className="mb-4">
              Les informations relatives aux procédés de conception, fabrication et mise en œuvre des produits, les logiciels et solutions techniques déployés font partie des secrets de fabrication et du savoir-faire du vendeur et devront être considérés par l'acheteur comme une information confidentielle.
            </p>
            <p className="mb-4">
              A ce titre, l'acheteur s'interdit notamment de communiquer les logiciels dans leurs versions sources ou exécutables ainsi que tous éléments constituant tout ou partie des produits.
            </p>
            <p>
              L'engagement de confidentialité des parties est valable pendant toute la durée d'exécution du présent contrat et pendant 10 ans suivant son terme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. PROPRIETE INTELLECTUELLE</h2>
            <p>
              L'acheteur reconnait que dans le cadre de ce contrat, aucun droit de propriété intellectuelle ne lui est cédé. L'acheteur s'engage à ne par reproduire, développer ou commercialiser les produits objets du présent contrat ou des produits susceptibles de les concurrencer. Il s'interdit d'utiliser les spécifications des produits pour créer ou permettre la création de produits ayant la même destination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. CAS PARTICULIER DES CONTENUS MULTIMEDIAS</h2>
            <p>
              Sauf stipulation contraire écrite, concernant les contenus multimédias (non limitativement audio et vidéo) constituant tout ou partie des produits, le vendeur ne concède à l'acheteur qu'un droit personnel, incessible et non exclusif d'utilisation desdits contenus sur un unique site. Il ne pourra les déplacer sur un autre site ou les transférer à un autre de ses établissements. Aucune propriété intellectuelle ne saurait être transmise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. CAS PARTICULIER DES ABONNEMENTS</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">a) Durée de l'abonnement, reconduction et résiliation</h3>
              <p className="mb-4">
                Le service est souscrit soit pour une durée indiquée sur le devis signé et courant à compter de la date de signature du devis, soit pour une durée indiquée sur le devis signé et précisant la date de début et de fin de la période de souscription.
              </p>
              <p className="mb-4">
                A défaut de mention dérogatoire expresse, la souscription à l'abonnement est entendue pour une période de 12 mois à compter de la date de signature du devis.
              </p>
              <p className="mb-4">
                L'abonnement est reconduit par tacite reconduction par périodes successives de 12 mois. Toutefois, par mention dérogatoire expresse sur le devis signé, une période différente ou l'absence de reconduction peuvent être spécifiées.
              </p>
              <p className="mb-4">
                Une durée minimale d'engagement à la souscription peut être indiquée dans le devis signé. A défaut de mention dérogatoire expresse, la durée minimale d'engagement est de 12 mois.
              </p>
              <p className="mb-4">
                Toute résiliation de la part de l'acheteur devra être adressée au vendeur par lettre recommandée avec accusé de réception et respectera un préavis de 30 jours. Dans le cas où l'acheteur souhaiterait résilier avant le terme de la période d'abonnement, il resterait redevable de l'intégralité du prix correspondant à la période d'abonnement. Dans le cas où la résiliation interviendrait avant l'échéance de la durée minimale d'engagement, l'acheteur resterait redevable de l'intégralité du prix correspondant à la durée minimale d'engagement, quand bien même celle-ci n'aurait pas été intégralement réglée notamment par l'effet de la date de reconduction.
              </p>
              <p className="mb-4">
                Le vendeur concède à l'acheteur un droit personnel, incessible et non exclusif d'utilisation des services et équipements mis à disposition, pour un unique site et pour ses propres besoins, jusqu'à leurs termes indiqués au présent contrat. L'acheteur ne pourra les déplacer sur un autre site ou les transférer à un autre de ses établissements.
              </p>
              <p>
                Le vendeur se réserve le droit de résilier à tout moment l'abonnement. Dans le cas où le vendeur résilierait avant le terme de la période d'abonnement, il procèderait au remboursement de la somme perçue au titre de l'abonnement pour la durée résiliée au prorata de la période d'abonnement souscrite. Aucune pénalité au titre de la cessation de l'abonnement ne saurait être exigée.
              </p>

              <h3 className="text-xl font-semibold mt-6">b) Évolution du service, du tarif et des conditions</h3>
              <p className="mb-4">
                Le vendeur se réserve le droit de modifier à tout moment les caractéristiques du service souscrit dans une démarche d'amélioration de ses services, sans toutefois en changer la destination.
              </p>
              <p className="mb-4">
                Le vendeur est libre de réévaluer sans notification le tarif de l'abonnement dans une limite de 10% par période d'abonnement.
              </p>
              <p className="mb-4">
                Des offres spéciales pour certains produits peuvent consister en une gratuité ou une réduction du prix pour un temps défini, par exemple : gratuit ou -50% la première année. A l'échéance de la période de réduction ou de gratuité, le produit sera facturé au plein tarif.
              </p>
              <p>
                Les présentes conditions générales de vente peuvent à tout moment faire l'objet de modifications. Les nouvelles conditions seront alors transmises à l'acheteur et celui-ci devra les accepter expressément. A défaut de réception dans un délai de 30 jours à compter de l'envoi des nouvelles conditions de l'accord de l'acheteur, le vendeur pourra librement procéder à la résiliation de l'abonnement aux conditions précédemment définies. L'acheteur est tenu d'accepter toute modification des conditions ayant pour unique but la mise en conformité avec les évolutions de la législation.
              </p>

              <h3 className="text-xl font-semibold mt-6">c) Responsabilité du vendeur</h3>
              <p className="mb-4">
                Le vendeur prendra les dispositions nécessaires pour assurer de manière permanente et continue l'exploitation du service et pour qu'il soit remédié aux effets de toute défaillance dégradant la qualité du service dans les délais les plus brefs.
              </p>
              <p className="mb-4">
                Certains problèmes techniques ou la maintenance peuvent cependant être à l'origine d'interruptions temporaires, sans que le vendeur encoure de responsabilité envers l'acheteur.
              </p>
              <p>
                Il appartient à l'acheteur de porter sans délai tous dysfonctionnements et pannes à connaissance du vendeur par voie postale ou courrier électronique à l'adresse contact@happlyz.com.
              </p>

              <h3 className="text-xl font-semibold mt-6">d) Responsabilité de l'acheteur</h3>
              <p className="mb-4">
                En considération des droits conférés à l'acheteur, celui-ci accorde au vendeur le droit d'utiliser son infrastructure informatique, notamment la bande passante réseau et la connexion internet ainsi que son infrastructure électrique, aux fins de fourniture du service.
              </p>
              <p className="mb-4">
                L'acheteur reconnaît être seul responsable des données transmises au travers des services et équipements du vendeur mis à sa disposition dans le cadre de l'abonnement et renonce à tout recours envers le vendeur en cas de corruption de données, mésusage ou piratage.
              </p>
              <p className="mb-4">
                Toute connexion aux services du vendeur à partir des identifiants de l'acheteur sera réputé avoir été effectuée par ce dernier. L'acheteur s'assure de la confidentialité des identifiants qui lui ont été confiés. Toute perte, détournement ou utilisation non autorisée de ces identifiants et leurs conséquences relève de la responsabilité de l'acheteur. Dans tous les cas mentionnés ci-dessus, l'acheteur s'engage à en avertir le vendeur sans délai afin que ce dernier procède au changement des identifiants confiés lors de la souscription de l'abonnement.
              </p>
              <p className="mb-4">
                L'acheteur s'engage à ne pas utiliser les équipements et services fournis à des fins de piratage, d'intrusion dans des systèmes informatisés ou de "hacking", ainsi que tout autre agissement répréhensible civilement ou pénalement et/ou susceptible de causer des dommages à autrui. De manière générale, l'acheteur s'interdit toute opération d'intrusion ou tentative d'intrusion sur les systèmes du vendeur ou sur tout système appartenant à un tiers.
              </p>
              <p className="mb-4">
                L'acheteur est seul responsable des dommages et préjudices directs ou indirects, matériels ou immatériels, causés par lui-même ou ses préposés, à un tiers ou au vendeur du fait de l'utilisation illégale ou non des services. Dans les cas indiqués ci-dessus, l'acheteur s'engage à indemniser le vendeur en cas de condamnation à l'encontre de ce dernier. Par ailleurs, l'acheteur s'engage à rembourser le vendeur des frais occasionnés par la réparation des dommages qu'il a causés.
              </p>
              <p className="mb-4">
                L'acheteur s'interdit de publier, au travers des services et équipements du vendeur, par quelque moyen que ce soit, un contenu contraire à l'ordre public et aux bonnes mœurs, notamment et non limitativement, des contenus à caractère pédophile, pornographique, incitant au suicide, à la haine raciale ou à la commission de crimes et délits ou portant atteinte au droit à l'image et au respect de la vie privée.
              </p>
              <p className="mb-4">
                L'acheteur s'engage à respecter les droits d'autrui, et notamment les droits de propriété intellectuelle (relatifs notamment à la reproduction, à la représentation et à toute exploitation d'une œuvre protégée par le droit d'auteur, d'un quelconque élément protégé par le droit des marques, le droit des brevets, des dessins et modèles etc.), les droits de la personnalité, dont le droit à l'image (notamment par la publication d'images ou de photographies de tiers n'ayant pas donné leur consentement à une telle publication) et le droit au respect de la vie privée.
              </p>
              <p>
                Cette liste n'est qu'indicative et ne dispense pas l'acheteur de respecter la législation relative aux infractions qui n'auraient pas été mentionnées ici. Elle ne se substitue ni à la loi, ni à la connaissance présupposée que l'acheteur en a.
              </p>

              <h3 className="text-xl font-semibold mt-6">e) Logiciels et équipements mis à disposition</h3>
              <p className="mb-4">
                Le vendeur concède à l'acheteur un droit d'usage non exclusif, non transférable ni cessible sur les logiciels et équipements mis à disposition par le vendeur dans le cadre de l'abonnement aux services (ci-après dénommés « les éléments »), pour les seuls besoins propres liés à l'utilisation des services du vendeur.
              </p>
              <p className="mb-4">
                L'acheteur, en qualité de gardien, est responsable des éléments mis à sa disposition. A compter de leur date de livraison, leur garde est transférée à l'acheteur qui en est civilement responsable.
              </p>
              <p className="mb-4">
                Les éléments sont réputés avoir été transmis à l'acheteur en bon état de fonctionnement.
              </p>
              <p className="mb-4">
                L'acheteur s'engage à ne pas porter atteinte directement, indirectement ou par l'intermédiaire de tiers auquel il serait associé, aux droits de propriété en cause. À ce titre, l'acheteur s'interdit tout acte de disposition tel que vente, location ou prêt sur ces éléments ainsi que toute intervention technique, transformation ou modification et s'interdit de retirer ou de camoufler les mentions de propriété y figurant.
              </p>
              <p className="mb-4">
                En cas de perte, vol, ou détérioration de ces éléments, l'acheteur devra en informer immédiatement le vendeur par courrier électronique et lettre recommandée avec accusé de réception et est tenu d'indemniser celui-ci de leur coût de réparation ou remplacement, à concurrence de leur valeur de remplacement à neuf majorée de leurs frais associés tels que reconfiguration, rachat de licences logicielles, ou révocation des autorisations de connexion des éléments précédents.
              </p>
              <p className="mb-4">
                En cas de panne imputable au vendeur, les éléments seront réparés ou échangés gratuitement pendant toute la durée du contrat.
              </p>
              <p className="mb-4">
                Les éléments devront être déposés, renvoyés au vendeur par voie postale et réinstallés sous responsabilité de l'acheteur.
              </p>
              <p className="mb-4">
                Le vendeur pourra toutefois de sa seule initiative offrir des prestations complémentaires telles que la dépose ou la réinstallation des éléments défectueux. Dans tous les cas où les éléments auraient été détériorés sous la responsabilité de l'acheteur, le vendeur se réserve le droit de facturer l'intégralité de ces prestations, en sus de la compensation précédemment définie.
              </p>
              <p>
                Au terme de l'abonnement, tout élément mis à disposition de l'acheteur devra être restitué en bon état et à ses frais au vendeur sous 30 jours. En cas de défaut de restitution ou de dégradation constatée, le vendeur se réserve le droit de facturer les frais de réparation ou de remplacement tels que précédemment définis.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. DONNEES PERSONNELLES</h2>
            <p className="mb-4">
              Conformément à l'article 32 de la loi nº 78-17 du 6 janvier 1978 modifiée en 2004 (dite « loi Informatique et Libertés »), l'acheteur est informé que des données à caractère personnel le concernant ou concernant ses utilisateurs font l'objet d'un traitement automatisé par le vendeur.
            </p>
            <p>
              Conformément aux dispositions de la loi « Informatique et Libertés » (articles 38 et suivants), l'acheteur et ses utilisateurs disposent d'un droit d'accès et de rectification des données les concernant et peuvent s'opposer à leur traitement pour des motifs légitimes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionsGenerales;