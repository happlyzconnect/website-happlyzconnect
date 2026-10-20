# Site www.happlyzconnect.com

Site statique construit avec [Astro](https://astro.build) : chaque page est générée en HTML complet (référencement optimal), les images sont converties automatiquement en WebP.

## Commandes

```bash
npm install       # installer les dépendances
npm run dev       # aperçu local sur http://localhost:4321
npm run build     # génère le site dans dist/ (à mettre en ligne)
```

## Où modifier quoi

| Contenu | Fichier |
|---|---|
| Coordonnées, menus, textes des solutions et des secteurs, chiffres clés | `src/data/site.ts` |
| Références clients, logos clients et partenaires | `src/data/references.json` + images dans `src/assets/refs`, `logos`, `partners` |
| Photos | `src/assets/photos` (appelées par leur nom de fichier) |
| Pages | `src/pages/` |
| Couleurs, typographie, boutons | `src/styles/global.css` |

## Mise en ligne

Le contenu de `dist/` se dépose sur n'importe quel hébergement statique.
Hébergement Netlify : la configuration est dans `netlify.toml`, les redirections 301 des anciennes URLs dans `public/_redirects`.
