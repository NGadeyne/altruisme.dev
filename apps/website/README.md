# acquisition

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## HTML prérendu et SEO

`npm run build` vérifie les types, compile le client, puis utilise le moteur de rendu serveur de Vue pour générer un fichier HTML complet par route. Le bundle de génération reste dans `node_modules/.prerender`, hors de `dist` et du déploiement. Aucune exécution Node n'est nécessaire en production.

Le contenu, les métadonnées et les styles des pages sont présents avant JavaScript. Le client hydrate ensuite le HTML pour rétablir les interactions. Les routes et `renderPageMetadata` sont partagés entre les deux rendus.

Après le build, `npm run test:prerender` vérifie le contenu initial, les métadonnées, les ressources et les URL retirées. `npm run test:unit -- --run` couvre les tests unitaires.

Cloudflare sert les fichiers HTML sans extension, avec `html_handling: drop-trailing-slash`. Le mode `not_found_handling: 404-page` sert `dist/404.html` avec un vrai statut 404. `/contact` et `/guides/freelance-2026` sont retirées sans redirection ; `/communaute` reste indépendante. Les autres alias du routeur sont exportés dans `_redirects` au build.

Une nouvelle page statique déclarée dans le routeur est automatiquement prérendue. Une future route à paramètres devra fournir explicitement sa liste d'URL au générateur. Le sitemap doit contenir uniquement les URL canoniques indexables.

Pour vérifier les statuts HTTP, utiliser `wrangler dev --local` avec la configuration de cette application et le build généré. Le serveur Vite de développement ne simule pas les réponses 404 de Cloudflare.
