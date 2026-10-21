// Zones d'intervention : une page par zone où HAPPLYZ Connect a de vraies réalisations.
// Les références affichées sont filtrées automatiquement par département (champ `depts` de references.json).

export type Zone = {
  slug: string;
  name: string; // nom court (menus, liens)
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  depts: string[]; // départements couverts par la page
  refDepts?: string[]; // départements des réalisations affichées (par défaut : depts)
  refTitle?: string;
  image: { name: string; folder: 'photos' | 'refs'; alt: string };
  intro: string[];
  points: { icon: string; title: string; text: string }[];
  cities: string[];
  faq: { q: string; a: string }[];
  idf: boolean;
};

const faqDevis = {
  q: 'Les frais de déplacement sont-ils facturés ?',
  a: 'Les éventuels frais de déplacement sont indiqués clairement dans le devis, avant toute commande. Pour les contrats de maintenance, ils sont prévus dans le forfait.',
};

export const zones: Zone[] = [
  {
    slug: 'paris',
    name: 'Paris',
    h1: 'Intégrateur audiovisuel à Paris',
    metaTitle: 'Intégrateur audiovisuel à Paris (75)',
    metaDescription:
      'Intégrateur audiovisuel à Paris : salles de réunion, visioconférence, écrans interactifs, affichage dynamique, sonorisation. Hôpitaux, bureaux, écoles.',
    lead: 'Salles de réunion, visioconférence, écrans interactifs et affichage dynamique : nous équipons les entreprises, hôpitaux, administrations et établissements scolaires parisiens.',
    depts: ['75'],
    image: { name: 'prefecture-police-lcpp', folder: 'refs', alt: 'Salle de réunion équipée de deux écrans à Paris' },
    intro: [
      'Paris concentre une grande partie de nos chantiers : salles de visioconférence dans les hôpitaux de l’AP-HP, salle de réunion du Laboratoire central de la Préfecture de Police, cabinets, sièges d’entreprises, collèges et magasins.',
      'Intervenir à Paris demande une organisation particulière : immeubles anciens et cloisons à vérifier avant de fixer un écran, accès et livraison à planifier, règles de copropriété, interventions en dehors des heures de bureau ou pendant les vacances scolaires pour ne pas perturber l’activité. Notre équipe, basée à Chatou, connaît ces contraintes et les intègre dès la visite technique.',
    ],
    points: [
      { icon: 'building', title: 'Bâtiments anciens et contraints', text: 'Relevé des murs et des cloisons, renforts si nécessaire, passage de câbles discret dans les immeubles haussmanniens.' },
      { icon: 'clock', title: 'Interventions planifiées', text: 'Créneaux tôt le matin, en soirée ou pendant les vacances scolaires pour ne pas bloquer vos salles.' },
      { icon: 'shield', title: 'Sites sensibles', text: 'Hôpitaux, administrations, laboratoires : nous respectons vos procédures d’accès et de sécurité.' },
    ],
    cities: ['Paris 1er au 20e arrondissement', 'Quartier central des affaires', 'Paris Rive Gauche', 'Hôpitaux de l’AP-HP'],
    faq: [
      { q: 'Intervenez-vous dans tout Paris ?', a: 'Oui, dans tous les arrondissements. Basés à Chatou, à quelques kilomètres de La Défense, nous nous déplaçons pour les visites techniques, les installations et la maintenance.' },
      { q: 'Pouvez-vous intervenir en dehors des heures de bureau ?', a: 'Oui. Pour ne pas immobiliser vos salles, nous pouvons planifier les installations tôt le matin, en soirée ou pendant les périodes de fermeture.' },
      { q: 'Travaillez-vous avec les établissements publics ?', a: 'Oui : hôpitaux de l’AP-HP, Préfecture de Police, collèges. Nous répondons aussi aux consultations et marchés publics.' },
      faqDevis,
    ],
    idf: true,
  },
  {
    slug: 'hauts-de-seine',
    name: 'Hauts-de-Seine',
    h1: 'Intégrateur audiovisuel dans les Hauts-de-Seine',
    metaTitle: 'Intégrateur audiovisuel Hauts-de-Seine',
    metaDescription:
      'Intégrateur audiovisuel dans les Hauts-de-Seine : La Défense, Nanterre, Boulogne… Salles de réunion, visioconférence, partage sans fil, affichage dynamique.',
    lead: 'De La Défense à Boulogne, nous équipons les sièges sociaux et bureaux des Hauts-de-Seine : salles de réunion, visioconférence, affichage d’accueil et maintenance.',
    depts: ['92'],
    image: { name: 'shell-france-nanterre', folder: 'refs', alt: 'Salle de visioconférence d’un siège social dans les Hauts-de-Seine' },
    intro: [
      'Les Hauts-de-Seine accueillent de nombreux sièges sociaux, notamment autour de La Défense, de Nanterre, d’Issy-les-Moulineaux et de Boulogne-Billancourt. Nous y avons équipé les salles de réunion de Shell France à Nanterre, plusieurs salles de Chiesi à Bois-Colombes et les espaces de Decathlon au CNIT.',
      'Dans ces environnements, les salles de réunion sont nombreuses et très utilisées : elles doivent fonctionner de la même façon partout, avec le même système de visioconférence et de partage d’écran. Nous standardisons les équipements salle par salle, puis nous assurons leur maintenance pour garantir une expérience identique dans tout le bâtiment.',
    ],
    points: [
      { icon: 'video', title: 'Salles standardisées', text: 'Le même système de visio et de partage sans fil dans toutes les salles, pour une prise en main immédiate.' },
      { icon: 'building', title: 'Tours et immeubles de bureaux', text: 'Coordination avec les services généraux et l’exploitant de l’immeuble, travaux en site occupé.' },
      { icon: 'refresh', title: 'Proximité', text: 'Basés à Chatou, nous sommes à quelques minutes de La Défense pour la maintenance et les dépannages.' },
    ],
    cities: ['La Défense', 'Nanterre', 'Puteaux', 'Courbevoie', 'Boulogne-Billancourt', 'Issy-les-Moulineaux', 'Rueil-Malmaison', 'Bois-Colombes', 'Levallois-Perret', 'Neuilly-sur-Seine'],
    faq: [
      { q: 'Intervenez-vous à La Défense ?', a: 'Oui, régulièrement. Nous nous coordonnons avec les services généraux et l’exploitant de la tour pour les accès, les livraisons et les créneaux de travaux.' },
      { q: 'Pouvez-vous équiper plusieurs salles avec le même système ?', a: 'C’est même recommandé : un système identique dans toutes les salles simplifie l’usage et la maintenance. Nous déployons salle par salle, sans interrompre votre activité.' },
      faqDevis,
    ],
    idf: true,
  },
  {
    slug: 'yvelines',
    name: 'Yvelines',
    h1: 'Intégrateur audiovisuel dans les Yvelines',
    metaTitle: 'Intégrateur audiovisuel Yvelines (78)',
    metaDescription:
      'Intégrateur audiovisuel basé à Chatou (78) : salles de réunion, visioconférence, écrans interactifs, affichage dynamique et maintenance dans les Yvelines.',
    lead: 'Notre siège est à Chatou : pour les entreprises, collectivités et établissements scolaires des Yvelines, nous sommes l’intégrateur audiovisuel de proximité.',
    depts: ['78'],
    image: { name: 'salle-reunion-vitree', folder: 'photos', alt: 'Salle de réunion vitrée équipée d’un écran de visioconférence' },
    intro: [
      'HAPPLYZ Connect est installée à Chatou, dans la boucle de la Seine. Les entreprises et établissements des Yvelines bénéficient donc d’un interlocuteur tout proche : visite technique rapide, installation par notre équipe et maintenance de proximité.',
      'Dans le département, nous avons notamment équipé un centre médical à Maisons-Laffitte (écrans muraux à l’accueil et dans les cabinets, informatique et réseau), la salle de réunion de Transicio à Ecquevilly (écran 75 pouces et barre de visioconférence) et les écrans de l’atelier cycle du magasin Decathlon de Vélizy. Pour les sites de l’Ouest parisien, la proximité facilite aussi les petites interventions : ajout d’un écran, déplacement d’une salle, remplacement d’un équipement.',
    ],
    points: [
      { icon: 'map', title: 'Siège à Chatou', text: 'Une équipe sur place pour les visites techniques, les installations et les dépannages dans tout le département.' },
      { icon: 'users', title: 'PME et collectivités', text: 'Des projets à taille humaine : une salle de réunion, un écran d’accueil, l’équipement d’une école.' },
      { icon: 'headset', title: 'Suivi dans la durée', text: 'Maintenance préventive et assistance, avec un interlocuteur qui connaît vos installations.' },
    ],
    cities: ['Chatou', 'Le Vésinet', 'Croissy-sur-Seine', 'Maisons-Laffitte', 'Saint-Germain-en-Laye', 'Le Pecq', 'Ecquevilly', 'Versailles', 'Vélizy-Villacoublay', 'Saint-Quentin-en-Yvelines', 'Poissy', 'Sartrouville', 'Houilles', 'Mantes-la-Jolie'],
    faq: [
      { q: 'Où êtes-vous situés ?', a: 'Notre siège est au 5 rue Charles Despeaux à Chatou. Nous intervenons dans tout le département des Yvelines et dans l’ensemble de l’Île-de-France.' },
      { q: 'Faites-vous des petites interventions ?', a: 'Oui : installation d’un écran, d’une barre de visioconférence, remplacement d’un vidéoprojecteur. Aucun projet n’est trop petit pour être bien fait.' },
      faqDevis,
    ],
    idf: true,
  },
  {
    slug: 'ile-de-france',
    name: 'Île-de-France',
    h1: 'Intégrateur audiovisuel en Île-de-France',
    metaTitle: 'Intégrateur audiovisuel en Île-de-France',
    metaDescription:
      'Intégrateur audiovisuel en Île-de-France : Seine-Saint-Denis, Val-de-Marne, Essonne, Val-d’Oise, Seine-et-Marne. Salles de réunion, écrans, affichage dynamique.',
    lead: 'Depuis Chatou, nous intervenons dans toute l’Île-de-France : entreprises, écoles d’ingénieurs, médiathèques, magasins et établissements de santé.',
    depts: ['93', '94', '91', '95', '77'],
    image: { name: 'mediatheque-bobigny', folder: 'refs', alt: 'Mur d’images installé dans une médiathèque d’Île-de-France' },
    intro: [
      'Au-delà de Paris, des Hauts-de-Seine et des Yvelines, nous menons de nombreux projets dans le reste de l’Île-de-France : mur d’images au Musée numérique de la médiathèque de Bobigny, vidéoprojecteurs et sonorisation sur le campus de l’IPSA à Ivry-sur-Seine, écrans, bornes tactiles et affichage dynamique dans les magasins Decathlon de Brétigny-sur-Orge, Sainte-Geneviève-des-Bois, Herblay et du Stade de France.',
      'Chaque projet commence par une visite technique sur place. Nous concevons ensuite la solution, l’installons avec nos équipes et assurons la maintenance, que vous soyez une entreprise, une collectivité ou un établissement d’enseignement.',
    ],
    points: [
      { icon: 'graduation', title: 'Enseignement supérieur et écoles', text: 'Salles de cours, amphithéâtres, sonorisation et écrans interactifs, installés pendant les vacances.' },
      { icon: 'signage', title: 'Lieux publics et culturels', text: 'Médiathèques, musées, accueils : murs d’images, écrans interactifs et affichage dynamique.' },
      { icon: 'store', title: 'Magasins et réseaux', text: 'Écrans vitrine, totems et murs d’images, avec maintenance sur l’ensemble de vos points de vente.' },
    ],
    cities: ['Bobigny', 'Saint-Denis', 'Ivry-sur-Seine', 'Créteil', 'Brétigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Évry-Courcouronnes', 'Herblay', 'Cergy', 'Beauchamp', 'Marne-la-Vallée', 'Meaux'],
    faq: [
      { q: 'Couvrez-vous toute l’Île-de-France ?', a: 'Oui, les huit départements franciliens. Nous avons notamment réalisé des projets en Seine-Saint-Denis, dans le Val-de-Marne, l’Essonne et le Val-d’Oise.' },
      { q: 'Équipez-vous les écoles et les collectivités ?', a: 'Oui : écoles d’ingénieurs, collèges, médiathèques. Nous planifions les installations pendant les vacances scolaires et répondons aux marchés publics.' },
      faqDevis,
    ],
    idf: true,
  },
  {
    slug: 'lyon',
    name: 'Lyon et Auvergne-Rhône-Alpes',
    h1: 'Intégrateur audiovisuel à Lyon et en Auvergne-Rhône-Alpes',
    metaTitle: 'Intégrateur audiovisuel Lyon, Rhône-Alpes',
    metaDescription:
      'Projets audiovisuels à Lyon et en Auvergne-Rhône-Alpes : salles Teams, écrans interactifs, vidéoprojection, affichage dynamique. Installation et maintenance.',
    lead: 'Écoles, entreprises et grandes surfaces : nous réalisons régulièrement des projets audiovisuels à Lyon et dans toute la région Auvergne-Rhône-Alpes.',
    depts: ['69', '01', '42', '73', '38'],
    image: { name: 'ipsa-lyon', folder: 'refs', alt: 'Salle de cours équipée d’un vidéoprojecteur sur le campus de Lyon' },
    intro: [
      'Nous intervenons régulièrement dans la région lyonnaise : équipement des salles de cours du campus IPSA de Lyon, salle de réunion de La Rosée, deux salles Microsoft Teams Rooms chez Forankra à Mions, écran interactif et visioconférence pour Gallin à Montluel, affichage dynamique au Géant Casino de Villefranche-sur-Saône.',
      'Pour les projets en région, nous organisons les déplacements avec vous : visite technique, installation regroupée sur une ou plusieurs journées, puis suivi largement assuré à distance (mises à jour, configuration, assistance). Les déplacements sur site sont planifiés lorsqu’une intervention matérielle est nécessaire.',
    ],
    points: [
      { icon: 'video', title: 'Salles de visioconférence', text: 'Salles Teams Rooms, barres de visio, partage sans fil, pour les sièges et sites régionaux.' },
      { icon: 'graduation', title: 'Établissements d’enseignement', text: 'Vidéoprojection, écrans interactifs et sonorisation des salles de cours.' },
      { icon: 'cloud', title: 'Suivi à distance', text: 'Une grande partie du support se fait à distance, pour une réactivité maximale malgré la distance.' },
    ],
    cities: ['Lyon', 'Villeurbanne', 'Mions', 'Villefranche-sur-Saône', 'Bourg-en-Bresse', 'Montluel', 'Saint-Étienne', 'Roanne', 'Grenoble', 'Chambéry'],
    faq: [
      { q: 'Avez-vous une agence à Lyon ?', a: 'Non, notre siège est à Chatou (Île-de-France). Nous nous déplaçons régulièrement dans la région pour les visites, installations et maintenances, et assurons une grande partie du support à distance.' },
      { q: 'Comment se déroule un projet en région ?', a: 'Après une visite technique ou un échange à partir de plans et de photos, nous planifions l’installation sur une ou plusieurs journées, puis assurons le suivi à distance et sur site si nécessaire.' },
      faqDevis,
    ],
    idf: false,
  },
  {
    slug: 'provence-alpes-cote-d-azur',
    name: 'Provence-Alpes-Côte d’Azur',
    h1: 'Intégrateur audiovisuel en Provence-Alpes-Côte d’Azur',
    metaTitle: 'Intégrateur audiovisuel Nice et PACA',
    metaDescription:
      'Projets audiovisuels à Nice, Sophia Antipolis, Marseille et Toulon : salles de réunion, écrans interactifs, vidéoprojection, affichage dynamique.',
    lead: 'Laboratoires, écoles d’ingénieurs, universités et grandes surfaces : nous avons mené de nombreux projets audiovisuels sur la Côte d’Azur et en Provence.',
    depts: ['06', '13', '83', '84', '04', '05'],
    image: { name: 'polytech-nice', folder: 'refs', alt: 'Grand écran installé dans une école d’ingénieurs de Sophia Antipolis' },
    intro: [
      'La région Provence-Alpes-Côte d’Azur compte plusieurs de nos réalisations : modernisation de la salle de réunion de NHCO (groupe Chiesi) à Nice, écran de 98 pouces avec présentation sans fil pour Polytech Nice Sophia à Biot, vidéoprojection pour le Crous Nice-Toulon, écran interactif à l’IUT de Draguignan (Université de Toulon) et affichage dynamique au Géant Casino de Marseille.',
      'Nous organisons chaque projet régional autour d’une visite technique, d’une installation planifiée et d’un suivi assuré en grande partie à distance. Les interventions sur site sont programmées dès qu’une opération matérielle est nécessaire.',
    ],
    points: [
      { icon: 'graduation', title: 'Enseignement supérieur', text: 'Écoles d’ingénieurs, IUT et Crous : grands écrans, écrans interactifs et vidéoprojection.' },
      { icon: 'video', title: 'Salles de réunion d’entreprise', text: 'Partage sans fil, visioconférence et écrans pour les sites industriels et laboratoires.' },
      { icon: 'store', title: 'Grandes surfaces', text: 'Affichage dynamique et totems d’information en magasin.' },
    ],
    cities: ['Nice', 'Sophia Antipolis', 'Biot', 'Antibes', 'Cannes', 'Marseille', 'Aix-en-Provence', 'Toulon', 'Draguignan', 'Avignon'],
    faq: [
      { q: 'Intervenez-vous sur la Côte d’Azur ?', a: 'Oui, nous y avons réalisé plusieurs projets, notamment à Nice, Biot (Sophia Antipolis) et Draguignan. Notre siège est à Chatou : les déplacements sont planifiés avec vous.' },
      { q: 'Assurez-vous la maintenance à distance ?', a: 'Oui. Une grande partie des opérations (mises à jour, configuration, assistance) se fait à distance ; nous nous déplaçons pour les interventions matérielles.' },
      faqDevis,
    ],
    idf: false,
  },
  {
    slug: 'occitanie',
    name: 'Occitanie',
    h1: 'Intégrateur audiovisuel en Occitanie',
    metaTitle: 'Intégrateur audiovisuel en Occitanie',
    metaDescription:
      'Projets audiovisuels en Occitanie : Montpellier, Toulouse, Perpignan, Avignon… Salles de visioconférence, écrans interactifs, vidéoprojection, affichage.',
    lead: 'Entreprises, lycées, résidences et grandes surfaces : nos réalisations en Occitanie, de Perpignan à Villeneuve-lès-Avignon.',
    depts: ['11', '30', '31', '34', '66', '09', '12', '32', '46', '48', '65', '81', '82'],
    image: { name: 'cnr', folder: 'refs', alt: 'Salle de visioconférence équipée d’un écran interactif' },
    intro: [
      'En Occitanie, nous avons équipé la salle de visioconférence de la CNR à Villeneuve-lès-Avignon (écran interactif 86 pouces, caméra PTZ, barre audio et partage sans fil), installé un écran tactile de 86 pouces avec visioconférence pour la SEMOP à Port-la-Nouvelle, un vidéoprojecteur interactif au lycée Pablo Picasso de Perpignan, 53 téléviseurs en mode hôtel dans les chambres de la résidence Maisons de famille à Lézignan-Corbières, l’affichage dynamique du Géant Casino de Fenouillet, ainsi que des écrans interactifs à Montpellier.',
      'Ces projets sont organisés à distance et sur site : visite technique ou étude sur plans, installation planifiée, puis suivi et assistance à distance.',
    ],
    points: [
      { icon: 'video', title: 'Visioconférence', text: 'Salles équipées d’écrans interactifs, caméras PTZ et barres audio pour les échanges entre sites.' },
      { icon: 'graduation', title: 'Lycées', text: 'Vidéoprojecteurs interactifs, enceintes et connectique pour les salles de classe.' },
      { icon: 'monitor', title: 'Résidences et magasins', text: 'Téléviseurs en mode hôtel dans les chambres, écrans d’affichage dynamique en magasin.' },
    ],
    cities: ['Montpellier', 'Toulouse', 'Fenouillet', 'Perpignan', 'Narbonne', 'Port-la-Nouvelle', 'Lézignan-Corbières', 'Nîmes', 'Villeneuve-lès-Avignon'],
    faq: [
      { q: 'Intervenez-vous en Occitanie ?', a: 'Oui, nous y avons réalisé plusieurs projets, de Perpignan à Villeneuve-lès-Avignon en passant par Montpellier et Toulouse. Notre siège est à Chatou : les déplacements sont planifiés avec vous.' },
      { q: 'Comment se passe le suivi après l’installation ?', a: 'Le suivi se fait en grande partie à distance (mises à jour, configuration, assistance). Nous revenons sur site pour les interventions matérielles.' },
      faqDevis,
    ],
    idf: false,
  },
  {
    slug: 'hauts-de-france',
    name: 'Hauts-de-France',
    h1: 'Intégrateur audiovisuel dans les Hauts-de-France',
    metaTitle: 'Intégrateur audiovisuel Hauts-de-France',
    metaDescription:
      'Projets audiovisuels dans les Hauts-de-France : Lille, Cambrai, Amiens… Écrans interactifs, visioconférence, vidéoprojection, affichage dynamique.',
    lead: 'Lycées, associations, musées et grandes surfaces : nos réalisations audiovisuelles dans les Hauts-de-France.',
    depts: ['59', '62', '80', '02', '60'],
    image: { name: 'lycee-saint-vincent-de-paul', folder: 'refs', alt: 'Écran interactif installé dans une salle de classe de lycée' },
    intro: [
      'Dans les Hauts-de-France, nous avons notamment installé un écran interactif Samsung Flip de 85 pouces au lycée Saint-Vincent-de-Paul de Loos, équipé le siège et deux établissements des Papillons Blancs du Cambrésis (écran 98 pouces et écrans mobiles de visioconférence), remplacé les vidéoprojecteurs du musée Jean et Denis Letaille à Bullecourt, équipé une salle de formation à Corbeny et installé l’affichage dynamique du Géant Casino d’Amiens.',
      'Comme pour toutes nos interventions en région, chaque projet est préparé en amont (visite ou étude sur plans), installé en une ou plusieurs journées, puis suivi à distance.',
    ],
    points: [
      { icon: 'graduation', title: 'Lycées et formation', text: 'Écrans interactifs muraux, vidéoprojecteurs et salles de formation.' },
      { icon: 'users', title: 'Associations et médico-social', text: 'Salles de réunion et écrans mobiles de visioconférence pour relier les établissements.' },
      { icon: 'projector', title: 'Musées et lieux culturels', text: 'Vidéoprojection laser et écrans pour les parcours de visite.' },
    ],
    cities: ['Lille', 'Loos', 'Cambrai', 'Valenciennes', 'Amiens', 'Arras', 'Bullecourt', 'Laon', 'Corbeny'],
    faq: [
      { q: 'Intervenez-vous dans les Hauts-de-France ?', a: 'Oui, nous y avons réalisé plusieurs projets, notamment à Loos, Cambrai, Bullecourt, Corbeny et Amiens. Les déplacements depuis notre siège de Chatou sont planifiés avec vous.' },
      { q: 'Installez-vous des écrans interactifs dans les lycées ?', a: 'Oui : fourniture, pose murale ou sur support mobile, mise en service et prise en main par les enseignants, de préférence pendant les vacances scolaires.' },
      faqDevis,
    ],
    idf: false,
  },
];

// Autres lieux d'intervention, hors des zones détaillées ci-dessus.
export const elsewhere: { city: string; dept: string }[] = [
  { city: 'Neufchâtel-en-Bray', dept: '76' },
  { city: 'Brionne', dept: '27' },
  { city: 'La Mézière', dept: '35' },
  { city: 'Saint-Brevin-les-Pins', dept: '44' },
  { city: 'Blois', dept: '41' },
  { city: 'Bourges', dept: '18' },
  { city: 'Châteauroux', dept: '36' },
  { city: 'Poitiers', dept: '86' },
  { city: 'Limoges – Les Vaseix', dept: '87' },
  { city: 'Bordeaux', dept: '33' },
  { city: 'Hagetmau', dept: '40' },
  { city: 'Hoerdt', dept: '67' },
  { city: 'Nivelles', dept: 'Belgique' },
];

// Zone d'intervention correspondant aux départements d'une référence (pour les liens internes).
export function zoneFor(depts: string[] | undefined): Zone | undefined {
  if (!depts?.length || depts.length > 1) return undefined;
  return zones.find((z) => z.depts.some((d) => depts.includes(d)));
}
