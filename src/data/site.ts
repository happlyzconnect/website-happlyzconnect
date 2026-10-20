// Contenus centralisés du site HAPPLYZ Connect.
// Pour modifier un texte, une coordonnée ou une offre : c'est ici.

export const company = {
  name: 'HAPPLYZ Connect',
  legalName: 'HAPPLYZ Connect SAS',
  tagline: 'We connect, you grow.',
  street: '5 rue Charles Despeaux',
  postalCode: '78400',
  city: 'Chatou',
  phone: '01 85 39 01 67',
  phoneIntl: '+33185390167',
  mobile: '06 37 60 92 57',
  email: 'contact@happlyz.com',
  linkedin: 'https://www.linkedin.com/company/happlyzconnect',
  siren: '823 127 154',
};

// EmailJS (compte existant de l'ancien site)
export const emailjs = {
  serviceId: 'service_qytcdsw',
  contactTemplate: 'template_uahaue2',
  brochureTemplate: 'template_a6q4yno',
  publicKey: 'ySp_OZUSZFd1MsIZJ',
};

export type Card = { icon: string; title: string; text: string };
export type PhotoCard = { photo: string; title: string; text: string; href?: string };

export type Solution = {
  slug: string;
  title: string;
  menuTitle: string;
  icon: string;
  photo: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  cta: string;
  issuesTitle: string;
  issuesText: string;
  issues: Card[];
  equipmentTitle: string;
  equipmentText: string;
  equipment: PhotoCard[];
  spacesTitle?: string;
  spaces?: PhotoCard[];
  build: string[];
  run: string[];
  refIds: number[];
  faq: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: 'salles-de-reunion-visioconference',
    title: 'Salles de réunion & visioconférence',
    menuTitle: 'Salles de réunion & visioconférence',
    icon: 'video',
    photo: 'salle-shell',
    short: 'Des espaces collaboratifs efficaces et simples à utiliser.',
    metaTitle: 'Salles de réunion & visioconférence — Intégrateur audiovisuel',
    metaDescription:
      "HAPPLYZ Connect conçoit, installe et maintient vos salles de réunion et de visioconférence : écrans, barres de visio, micros, partage sans fil. Île-de-France et toute la France.",
    heroTitle: 'Salles de réunion & visioconférence',
    heroText:
      "Des espaces de collaboration performants, pour des réunions plus simples et plus efficaces. Nous concevons, installons et maintenons des salles adaptées à vos usages, de la petite salle d'équipe à la salle de conseil.",
    cta: 'Équiper mes salles de réunion',
    issuesTitle: 'Des réunions qui devraient être simples, mais qui ne le sont pas toujours.',
    issuesText:
      'Nous levons les principaux freins pour que vos réunions démarrent à l’heure et se déroulent dans les meilleures conditions, en présentiel comme à distance.',
    issues: [
      { icon: 'clock', title: 'Des réunions qui démarrent en retard', text: 'Câbles introuvables, connexion laborieuse, équipements complexes à utiliser.' },
      { icon: 'volume', title: 'Un son de mauvaise qualité', text: 'Des interlocuteurs à distance difficiles à entendre ou mal compris.' },
      { icon: 'layers', title: 'Des salles disparates', text: 'Des équipements différents d’une salle à l’autre, des usages qui changent à chaque fois.' },
      { icon: 'users', title: 'Une collaboration moins efficace', text: 'Des réunions hybrides moins fluides et des participants à distance mis à l’écart.' },
    ],
    equipmentTitle: 'Des équipements adaptés à vos usages.',
    equipmentText: 'Nous sélectionnons et intégrons des solutions fiables et simples à utiliser, pour une expérience de réunion fluide et naturelle.',
    equipment: [
      { photo: 'salle-ecrans-doubles', title: 'Écrans', text: 'Écrans simples ou doubles, dimensionnés pour la salle et la distance de visionnage.' },
      { photo: 'salle-visio-portable', title: 'Barres de visioconférence', text: 'Caméra, micros et haut-parleurs intégrés, compatibles avec vos outils de visio.' },
      { photo: 'salle-enceintes', title: 'Micros et sonorisation', text: 'Micros plafond ou de table et haut-parleurs, pour des échanges clairs et naturels.' },
      { photo: 'salle-chiesi', title: 'Partage sans fil', text: 'Un bouton pour afficher son écran, depuis n’importe quel ordinateur de vos collaborateurs.' },
    ],
    spacesTitle: 'Des solutions pour chaque type de salle.',
    spaces: [
      { photo: 'salle-ecran-mobile', title: 'Petites salles (2 à 6 personnes)', text: 'Des solutions compactes et faciles à utiliser pour des réunions rapides.' },
      { photo: 'salle-shell', title: 'Salles de réunion (6 à 12 personnes)', text: 'Des équipements complets pour des réunions hybrides fluides.' },
      { photo: 'salle-reunion-vitree', title: 'Salles de conseil', text: 'Des installations haut de gamme pour vos instances de direction.' },
      { photo: 'bureau-open-space', title: 'Grands espaces', text: 'Auditoriums et espaces événementiels, avec sonorisation et captation adaptées.' },
    ],
    build: ['Analyse de vos besoins et de vos usages', 'Conception de la solution adaptée', 'Fourniture des équipements', 'Installation, câblage et mise en service', 'Formation de vos équipes'],
    run: ['Maintenance préventive et corrective', 'Assistance et support aux utilisateurs', 'Suivi et évolutions de vos installations', 'Interventions sur site ou à distance'],
    refIds: [24, 25, 23],
    faq: [
      { q: 'Vos salles sont-elles compatibles avec Teams, Zoom ou Google Meet ?', a: 'Oui. Nous choisissons des équipements certifiés pour les outils que vous utilisez, et nous les configurons pour un démarrage en un clic.' },
      { q: 'Pouvez-vous équiper plusieurs sites ?', a: 'Oui. Nous standardisons l’équipement de vos salles pour que l’expérience soit identique partout, et nous intervenons dans toute la France.' },
      { q: 'Que se passe-t-il en cas de panne ?', a: 'Avec notre offre RUN, nous assurons le support à distance et les interventions sur site, pour remettre la salle en service rapidement.' },
    ],
  },
  {
    slug: 'affichage-dynamique',
    title: 'Affichage dynamique',
    menuTitle: 'Affichage dynamique',
    icon: 'signage',
    photo: 'vitrine-decathlon',
    short: 'Informez, animez et valorisez vos espaces.',
    metaTitle: 'Affichage dynamique — Écrans, vitrines, murs d’images',
    metaDescription:
      "Affichage dynamique clé en main : écrans vitrine haute luminosité, totems, murs d'images, logiciel de diffusion, installation et maintenance par HAPPLYZ Connect.",
    heroTitle: 'Affichage dynamique',
    heroText:
      'Des écrans qui captent l’attention et des contenus qui se mettent à jour à distance. Accueil, vitrine, magasin, établissement scolaire : nous déployons l’affichage dynamique de bout en bout.',
    cta: 'Lancer mon projet d’affichage',
    issuesTitle: 'Communiquer au bon endroit, au bon moment.',
    issuesText: 'L’affichage dynamique remplace l’affichage papier par des contenus vivants, pilotés à distance et toujours à jour.',
    issues: [
      { icon: 'eye', title: 'Capter l’attention', text: 'Des contenus animés et lumineux, visibles même en vitrine et en plein jour.' },
      { icon: 'refresh', title: 'Mettre à jour sans se déplacer', text: 'Programmation centralisée des contenus, sur un ou plusieurs sites.' },
      { icon: 'megaphone', title: 'Informer en temps réel', text: 'Actualités, promotions, files d’attente, messages de sécurité.' },
      { icon: 'chart', title: 'Un réseau qui grandit avec vous', text: 'D’un écran à plusieurs centaines, avec la même gestion.' },
    ],
    equipmentTitle: 'Des écrans pour chaque emplacement.',
    equipmentText: 'Nous sélectionnons des écrans professionnels conçus pour fonctionner de longues heures, et le logiciel de diffusion adapté.',
    equipment: [
      { photo: 'vitrine-cnit', title: 'Écrans vitrine haute luminosité', text: 'Une visibilité optimale côté rue, même en plein soleil.' },
      { photo: 'totem-casino', title: 'Totems et écrans verticaux', text: 'Pour l’accueil, les allées et les points de passage.' },
      { photo: 'mur-video-decathlon', title: 'Murs d’images', text: 'Des formats grands et spectaculaires pour un impact maximal.' },
      { photo: 'borne-tactile', title: 'Bornes tactiles', text: 'Information interactive, réservation, orientation.' },
    ],
    build: ['Étude des emplacements et des usages', 'Choix des écrans et des supports', 'Installation, fixation et raccordement', 'Paramétrage du logiciel de diffusion', 'Adaptation de vos premiers contenus'],
    run: ['Supervision du parc d’écrans', 'Maintenance préventive et corrective', 'Support à la publication de contenus', 'Évolutions et extensions du réseau'],
    refIds: [2, 1, 13],
    faq: [
      { q: 'Faut-il un logiciel pour piloter les écrans ?', a: 'Oui, un logiciel de diffusion permet de programmer les contenus à distance. Nous proposons notamment notre solution HAPPLYZ Signage, hébergée en France.' },
      { q: 'Un écran grand public peut-il suffire ?', a: 'Pour un usage professionnel de plusieurs heures par jour, nous recommandons des écrans professionnels, conçus pour durer et garantis pour cet usage.' },
      { q: 'Pouvez-vous créer les contenus ?', a: 'Nous pouvons adapter vos contenus existants aux formats des écrans et vous accompagner pour les premières diffusions.' },
    ],
  },
  {
    slug: 'ecrans-tactiles-interactifs',
    title: 'Écrans tactiles & interactifs',
    menuTitle: 'Écrans tactiles & interactifs',
    icon: 'touch',
    photo: 'tactile-iut',
    short: 'Des outils engageants pour apprendre et collaborer.',
    metaTitle: 'Écrans tactiles & interactifs — Écoles, entreprises',
    metaDescription:
      'Écrans numériques interactifs (ENI) pour salles de classe et salles de réunion : fourniture, supports muraux ou mobiles, installation, formation et maintenance.',
    heroTitle: 'Écrans tactiles & interactifs',
    heroText:
      'Annoter, partager, co-construire : les écrans interactifs remplacent le tableau blanc et le vidéoprojecteur dans les salles de classe comme dans les salles de réunion.',
    cta: 'Équiper mes salles',
    issuesTitle: 'Des outils interactifs, adoptés par tous.',
    issuesText: 'Un écran interactif n’a de valeur que s’il est utilisé. Nous choisissons des équipements simples et accompagnons leur prise en main.',
    issues: [
      { icon: 'touch', title: 'Simples à prendre en main', text: 'Allumer, écrire, partager : sans formation lourde.' },
      { icon: 'users', title: 'Une collaboration active', text: 'Plusieurs participants peuvent écrire et interagir en même temps.' },
      { icon: 'shield', title: 'Robustes', text: 'Des dalles conçues pour un usage intensif et quotidien.' },
      { icon: 'layers', title: 'Fixes ou mobiles', text: 'Au mur ou sur pied à roulettes, pour s’adapter aux salles.' },
    ],
    equipmentTitle: 'Des écrans interactifs pour chaque usage.',
    equipmentText: 'Du 65 au 86 pouces, au mur ou sur support mobile, avec les accessoires utiles.',
    equipment: [
      { photo: 'tactile-iut', title: 'Écrans numériques interactifs', text: 'Écriture fluide, annotation, partage de contenus.' },
      { photo: 'ecran-support-mobile', title: 'Supports mobiles', text: 'Un écran qui passe d’une salle à l’autre.' },
      { photo: 'classe-ecran', title: 'Intégration en classe', text: 'Caméra, hub de connexion et audio pour les cours hybrides.' },
      { photo: 'borne-tactile', title: 'Bornes tactiles', text: 'Information, réservation et orientation en libre-service.' },
    ],
    build: ['Analyse des usages pédagogiques ou métier', 'Choix des tailles et des supports', 'Installation et raccordement', 'Configuration et applications', 'Formation des utilisateurs'],
    run: ['Maintenance préventive et corrective', 'Mises à jour logicielles', 'Assistance aux utilisateurs', 'Remplacement et extension du parc'],
    refIds: [22, 19, 21],
    faq: [
      { q: 'Quelle taille choisir pour une salle de classe ?', a: 'En général un écran de 75 ou 86 pouces pour une salle de 30 élèves. Notre convertisseur de taille d’écran vous aide à visualiser les dimensions.' },
      { q: 'Peut-on utiliser l’écran sans ordinateur ?', a: 'Oui, la plupart des écrans interactifs intègrent un tableau blanc et des applications. Un ordinateur peut être ajouté pour plus de possibilités.' },
    ],
  },
  {
    slug: 'videoprojection',
    title: 'Vidéoprojection',
    menuTitle: 'Vidéoprojection',
    icon: 'projector',
    photo: 'classe-videoprojecteur',
    short: 'Des solutions pour tous vos espaces, de la salle de classe à l’amphithéâtre.',
    metaTitle: 'Vidéoprojection — Salles de classe, amphithéâtres, salles de réunion',
    metaDescription:
      'Vidéoprojecteurs courte focale, interactifs ou grande salle, toiles et écrans de projection : étude, installation et maintenance par HAPPLYZ Connect.',
    heroTitle: 'Vidéoprojection',
    heroText:
      'Quand la surface d’image compte, la vidéoprojection reste imbattable. Courte focale en classe, haute luminosité en amphithéâtre : nous dimensionnons et installons l’ensemble.',
    cta: 'Étudier mon projet de projection',
    issuesTitle: 'Une image grande, lisible et bien placée.',
    issuesText: 'Luminosité, distance, ombres portées, entretien : une projection réussie se prépare.',
    issues: [
      { icon: 'eye', title: 'Une image lisible', text: 'Une luminosité adaptée à la lumière de la salle.' },
      { icon: 'ruler', title: 'Bien dimensionnée', text: 'Taille d’image et distance calculées pour le fond de salle.' },
      { icon: 'shield', title: 'Fiable', text: 'Des technologies laser à faible entretien.' },
      { icon: 'wallet', title: 'Maîtrise du budget', text: 'La plus grande image au meilleur coût par pouce.' },
    ],
    equipmentTitle: 'Des solutions de projection pour chaque salle.',
    equipmentText: 'Projecteurs, toiles, supports et sonorisation associée.',
    equipment: [
      { photo: 'classe-videoprojecteur', title: 'Projecteurs courte focale', text: 'Fixés au mur, sans ombre portée sur l’image.' },
      { photo: 'classe-projection', title: 'Projection interactive', text: 'Pour écrire directement sur l’image projetée.' },
      { photo: 'classe-tbi', title: 'Toiles et tableaux', text: 'Toiles tendues, motorisées ou tableaux blancs de projection.' },
      { photo: 'bureau-open-space', title: 'Grandes salles', text: 'Haute luminosité pour amphithéâtres et salles polyvalentes.' },
    ],
    build: ['Relevé de la salle et calcul de projection', 'Choix du projecteur et de la surface', 'Installation, câblage et réglages', 'Intégration audio', 'Prise en main par les utilisateurs'],
    run: ['Maintenance préventive', 'Remplacement de pièces', 'Assistance aux utilisateurs', 'Évolution vers l’écran interactif'],
    refIds: [18, 20],
    faq: [
      { q: 'Vidéoprojecteur ou écran : que choisir ?', a: 'L’écran offre une meilleure image en salle éclairée ; le vidéoprojecteur permet une image beaucoup plus grande pour un budget maîtrisé. Nous vous conseillons selon la salle.' },
    ],
  },
  {
    slug: 'sonorisation',
    title: 'Sonorisation',
    menuTitle: 'Sonorisation',
    icon: 'speaker',
    photo: 'salle-enceintes',
    short: 'Une diffusion audio claire et homogène, adaptée à vos espaces.',
    metaTitle: 'Sonorisation professionnelle — Salles, magasins, établissements',
    metaDescription:
      'Sonorisation de salles de réunion, magasins et établissements scolaires : enceintes, micros, diffusion d’ambiance et messages d’alerte. Étude, installation et maintenance.',
    heroTitle: 'Sonorisation',
    heroText:
      'Le son est souvent le maillon faible d’une installation. Nous concevons des systèmes audio clairs et homogènes, de la salle de réunion à la diffusion d’alertes dans un établissement.',
    cta: 'Sonoriser mes espaces',
    issuesTitle: 'Entendre et être entendu, partout.',
    issuesText: 'Un bon système audio se remarque surtout quand il manque.',
    issues: [
      { icon: 'volume', title: 'Un son clair', text: 'Une intelligibilité de la voix, sans écho ni larsen.' },
      { icon: 'layers', title: 'Une diffusion homogène', text: 'Le même niveau sonore dans tout l’espace.' },
      { icon: 'megaphone', title: 'Messages et alertes', text: 'Annonces, ambiance musicale et messages de sécurité.' },
      { icon: 'cog', title: 'Simple à piloter', text: 'Des réglages accessibles, sans connaissances techniques.' },
    ],
    equipmentTitle: 'Des systèmes audio pour chaque espace.',
    equipmentText: 'Enceintes, micros, amplification et traitement du son.',
    equipment: [
      { photo: 'salle-enceintes', title: 'Salles de réunion', text: 'Micros plafond ou de table et haut-parleurs pour la visioconférence.' },
      { photo: 'magasin-ecrans', title: 'Sonorisation d’ambiance', text: 'Musique et annonces en magasin, en zones séparées.' },
      { photo: 'classe-projection', title: 'Salles de classe', text: 'Amplification de la voix et du son des contenus.' },
      { photo: 'hall-ecran', title: 'Alertes et messages', text: 'Diffusion de messages d’alerte dans les établissements.' },
    ],
    build: ['Étude acoustique des espaces', 'Choix et implantation des équipements', 'Installation, câblage et réglages', 'Programmation des zones et des messages', 'Prise en main'],
    run: ['Maintenance préventive et corrective', 'Réglages et évolutions', 'Assistance aux utilisateurs', 'Tests périodiques des alertes'],
    refIds: [24, 20],
    faq: [
      { q: 'Pouvez-vous sonoriser des messages d’alerte dans un établissement scolaire ?', a: 'Oui, nous installons des systèmes de diffusion de messages d’alerte, en coordination avec les exigences de sécurité de l’établissement.' },
    ],
  },
];

export type Sector = {
  slug: string;
  title: string;
  icon: string;
  photo: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  cta: string;
  issuesTitle: string;
  issuesText: string;
  issues: Card[];
  solutionsTitle: string;
  solutions: (PhotoCard & { href: string })[];
  build: string[];
  run: string[];
  accompTitle: string;
  refCategory: string;
  refIds: number[];
  refTitle: string;
};

export const sectors: Sector[] = [
  {
    slug: 'corporate',
    title: 'Corporate',
    icon: 'building',
    photo: 'bureau-open-space',
    short: 'Salles de réunion, visioconférence, affichage interne : des espaces qui favorisent la collaboration et la performance.',
    metaTitle: 'Audiovisuel pour entreprises — Salles de réunion, visio, affichage',
    metaDescription:
      "Intégrateur audiovisuel pour les entreprises : salles de réunion et visioconférence, affichage dynamique d'accueil, sonorisation, écrans de collaboration. Conception, installation, maintenance.",
    heroTitle: 'Des espaces de travail connectés, pour des équipes plus performantes.',
    heroText:
      'Nous accompagnons les entreprises dans la conception, l’installation et la maintenance de leurs équipements audiovisuels, pour des environnements de travail modernes, efficaces et valorisants.',
    cta: 'Parlons de vos espaces',
    issuesTitle: 'Des environnements de travail qui soutiennent vos objectifs.',
    issuesText: 'Sièges sociaux, bureaux régionaux, espaces partagés : nous adaptons les solutions à votre organisation.',
    issues: [
      { icon: 'users', title: 'Réunions hybrides fluides', text: 'Des échanges efficaces entre collaborateurs sur site et à distance, sans perte de temps.' },
      { icon: 'star', title: 'Une image de marque soignée', text: 'Des espaces d’accueil et de réunion modernes, qui valorisent votre entreprise.' },
      { icon: 'megaphone', title: 'Une communication interne efficace', text: 'Des écrans d’affichage dynamique pour informer et fédérer vos équipes.' },
    ],
    solutionsTitle: 'Des équipements adaptés à vos espaces.',
    solutions: [
      { photo: 'salle-shell', title: 'Salles de réunion & visioconférence', text: 'Des espaces de collaboration simples, performants et inclusifs.', href: '/solutions/salles-de-reunion-visioconference' },
      { photo: 'hall-ecran', title: 'Affichage dynamique', text: 'Accueil, communication interne et animation de vos espaces.', href: '/solutions/affichage-dynamique' },
      { photo: 'salle-enceintes', title: 'Sonorisation', text: 'Une diffusion audio claire pour vos salles et espaces d’accueil.', href: '/solutions/sonorisation' },
      { photo: 'tactile-iut', title: 'Écrans de collaboration', text: 'Des écrans interactifs pour travailler et co-construire en équipe.', href: '/solutions/ecrans-tactiles-interactifs' },
    ],
    build: ['Analyse de vos besoins et de vos usages', 'Conception de la solution adaptée', 'Fourniture des équipements', 'Installation et mise en service', 'Formation de vos équipes'],
    run: ['Maintenance préventive et corrective', 'Assistance et support utilisateurs', 'Suivi et évolutions de vos installations', 'Interventions sur site ou à distance'],
    accompTitle: 'Un interlocuteur unique, du projet à la maintenance.',
    refCategory: 'salle-reunion',
    refIds: [25, 24, 26],
    refTitle: 'Ils nous ont confié leurs salles de réunion.',
  },
  {
    slug: 'education',
    title: 'Éducation',
    icon: 'graduation',
    photo: 'classe-ecran',
    short: 'Lycées, collèges, CFA : des équipements audiovisuels pour des environnements d’apprentissage modernes.',
    metaTitle: 'Audiovisuel pour l’éducation — Écrans interactifs, vidéoprojection, sonorisation',
    metaDescription:
      'Équipement audiovisuel des lycées, collèges et CFA : écrans numériques interactifs, vidéoprojecteurs, sonorisation, affichage dynamique. Installation pendant les vacances scolaires.',
    heroTitle: 'Des environnements d’apprentissage modernes, simples et durables.',
    heroText:
      'Nous accompagnons les établissements scolaires dans l’équipement de leurs salles de classe, amphithéâtres et espaces de vie, avec des solutions fiables, faciles à utiliser et adaptées aux usages pédagogiques.',
    cta: 'Équiper mon établissement',
    issuesTitle: 'Des solutions adaptées aux réalités du monde scolaire.',
    issuesText: 'Des équipements fiables, simples et conformes aux exigences des établissements, dans le cadre de marchés publics ou de projets spécifiques.',
    issues: [
      { icon: 'graduation', title: 'Simples pour les enseignants', text: 'Des solutions intuitives qui s’intègrent aux usages pédagogiques.' },
      { icon: 'shield', title: 'Robustesse et sécurité', text: 'Des équipements conçus pour un usage intensif.' },
      { icon: 'wallet', title: 'Maîtrise du budget', text: 'Des solutions adaptées aux enveloppes et aux procédures de marchés publics.' },
      { icon: 'file', title: 'Accompagnement administratif', text: 'Aide à la définition des besoins, réponses aux appels d’offres, suivi des projets.' },
    ],
    solutionsTitle: 'Des équipements pour tous vos espaces d’enseignement.',
    solutions: [
      { photo: 'tactile-iut', title: 'Écrans tactiles & interactifs', text: 'Des outils engageants pour enseigner, collaborer et dynamiser les cours.', href: '/solutions/ecrans-tactiles-interactifs' },
      { photo: 'classe-videoprojecteur', title: 'Vidéoprojection', text: 'Pour toutes les salles de classe, salles spécialisées et amphithéâtres.', href: '/solutions/videoprojection' },
      { photo: 'classe-projection', title: 'Sonorisation', text: 'Une diffusion audio claire, y compris pour les messages d’alerte.', href: '/solutions/sonorisation' },
      { photo: 'hall-ecran', title: 'Affichage dynamique', text: 'Vie de l’établissement, événements, informations pratiques.', href: '/solutions/affichage-dynamique' },
    ],
    build: ['Analyse de vos besoins et de vos usages', 'Conception de la solution adaptée', 'Fourniture des équipements', 'Installation pendant les vacances scolaires', 'Formation des équipes enseignantes et techniques'],
    run: ['Maintenance préventive et corrective', 'Assistance et support aux utilisateurs', 'Suivi et évolutions de vos installations', 'Interventions pendant et hors période scolaire'],
    accompTitle: 'Un accompagnement adapté au calendrier scolaire.',
    refCategory: 'salle-classe',
    refIds: [18, 19, 20],
    refTitle: 'Ils nous ont confié l’équipement de leurs salles.',
  },
  {
    slug: 'retail',
    title: 'Retail',
    icon: 'store',
    photo: 'vitrine-decathlon',
    short: 'Affichage dynamique en magasin et en vitrine : attirez l’attention et valorisez vos espaces de vente.',
    metaTitle: 'Affichage dynamique pour magasins et vitrines — Retail',
    metaDescription:
      'Affichage dynamique pour les magasins et réseaux de points de vente : écrans vitrine haute luminosité, murs d’images, totems, sonorisation d’ambiance. Installation et maintenance partout en France.',
    heroTitle: 'Des expériences en magasin plus attractives et plus performantes.',
    heroText:
      'Nous accompagnons les magasins et les réseaux de points de vente dans le déploiement de solutions audiovisuelles pour informer, séduire et engager leurs clients, avec des équipements fiables et simples à piloter.',
    cta: 'Dynamiser mon point de vente',
    issuesTitle: 'Des solutions pour attirer, informer et fidéliser vos clients.',
    issuesText: 'D’une boutique unique à un réseau national, une communication impactante et simple à gérer.',
    issues: [
      { icon: 'eye', title: 'Capter l’attention', text: 'Des contenus dynamiques en magasin et en vitrine, pour attirer plus de clients.' },
      { icon: 'refresh', title: 'Des contenus toujours à jour', text: 'Une gestion centralisée, sans déplacement en magasin.' },
      { icon: 'chart', title: 'Piloter plusieurs magasins', text: 'Un déploiement à grande échelle avec une gestion centralisée des contenus.' },
    ],
    solutionsTitle: 'Des équipements adaptés à tous vos points de vente.',
    solutions: [
      { photo: 'vitrine-cnit', title: 'Écrans vitrine haute luminosité', text: 'Une visibilité optimale côté rue, même en plein soleil.', href: '/solutions/affichage-dynamique' },
      { photo: 'totem-casino', title: 'Affichage en magasin', text: 'Informer, mettre en avant vos produits et guider vos clients.', href: '/solutions/affichage-dynamique' },
      { photo: 'mur-video-decathlon', title: 'Murs d’images', text: 'Des formats grands pour un impact visuel maximal.', href: '/solutions/affichage-dynamique' },
      { photo: 'magasin-ecrans', title: 'Sonorisation d’ambiance', text: 'Une diffusion audio homogène, adaptée à votre marque.', href: '/solutions/sonorisation' },
    ],
    build: ['Étude de vos points de vente', 'Choix des écrans et des emplacements', 'Déploiement multi-sites', 'Paramétrage de la diffusion', 'Adaptation de vos contenus'],
    run: ['Supervision du parc d’écrans', 'Maintenance préventive et corrective', 'Assistance à la diffusion', 'Interventions partout en France'],
    accompTitle: 'Un interlocuteur unique pour tout votre réseau.',
    refCategory: 'affichage-dynamique',
    refIds: [2, 1, 13],
    refTitle: 'Ils nous ont confié leurs points de vente.',
  },
];

export const stats = [
  { icon: 'check', value: '1000+', label: 'équipements installés' },
  { icon: 'users', value: '50+', label: 'clients accompagnés' },
  { icon: 'map', value: 'France', label: 'interventions sur tout le territoire' },
  { icon: 'cog', value: 'BUILD + RUN', label: 'de l’étude à la maintenance' },
];

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos solutions', href: '/solutions/salles-de-reunion-visioconference', children: solutions.map((s) => ({ label: s.menuTitle, href: `/solutions/${s.slug}` })) },
  { label: 'Secteurs', href: '/secteurs/corporate', children: sectors.map((s) => ({ label: s.title, href: `/secteurs/${s.slug}` })) },
  { label: 'Nos services', href: '/services' },
  {
    label: 'Outils',
    href: '/outils/configurateur-salle',
    children: [
      { label: 'Configurateur de salle', href: '/outils/configurateur-salle' },
      { label: 'Convertisseur de taille d’écran', href: '/outils/convertisseur-taille-ecran' },
    ],
  },
  { label: 'Références', href: '/references' },
  { label: 'Contact', href: '/contact' },
];
