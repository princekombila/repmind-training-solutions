// Données de navigation partagées (importables côté serveur ET client).

export const ACTIVITIES = [
  {
    href: '/nos-activites/conception-et-animation',
    label: 'Conception & animation de formations',
    short: 'Formations techniques conçues et animées sur mesure.',
  },
  {
    href: '/nos-activites/elearning-micro-elearning',
    label: 'E-learning & micro-eLearning',
    short: 'Solutions pédagogiques numériques (SCORM / xAPI).',
  },
  {
    href: '/nos-activites/accompagnement-pedagogique',
    label: 'Accompagnement & ingénierie pédagogique',
    short: "De l'audit au pilotage autonome de votre dispositif.",
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/nos-activites', label: 'Nos activités', children: ACTIVITIES },
  { href: '/notre-catalogue', label: 'Notre catalogue' },
  { href: '/actualites', label: 'Actualités' },
];
