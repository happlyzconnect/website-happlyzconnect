import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Anciennes URLs du site Lovable -> nouvelles pages (préserve le référencement acquis)
const redirects = {
  '/nos-references': '/references',
  '/convertisseur-taille-ecran': '/outils/convertisseur-taille-ecran',
  '/solutions/affichage-dynamique/magasins': '/secteurs/retail',
  '/solutions/affichage-dynamique/vitrines': '/secteurs/retail',
  '/solutions/affichage-dynamique/corporate': '/secteurs/corporate',
  '/solutions/salles-de-reunion': '/solutions/salles-de-reunion-visioconference',
  '/solutions/salles-de-reunion/solutions-audiovisuelles': '/solutions/salles-de-reunion-visioconference',
  '/solutions/salles-de-classe': '/secteurs/education',
  '/solutions/salles-de-classe/solutions-pedagogiques': '/secteurs/education',
  '/solutions/ecrans-interactifs': '/solutions/ecrans-tactiles-interactifs',
  '/solutions/solutions-audiovisuelles': '/solutions/salles-de-reunion-visioconference',
};

export default defineConfig({
  site: 'https://www.happlyzconnect.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects,
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !Object.keys(redirects).includes(new URL(page).pathname.replace(/\/$/, '')),
    }),
  ],
});

export { redirects };
