# apps/learn

## Assistant SEO

La route authentifiée `/assistant-seo` appelle le Worker `altruisme-learn-ai` sur `POST /chat` avec le jeton d'accès Supabase de la session Learn. Pour le développement local, démarrer le Worker avec `npm run dev:learn-ai` depuis la racine ; l'interface utilise `http://localhost:8787` par défaut. Pour une autre adresse, définir `VITE_LEARN_AI_API_URL` dans l'environnement Vite de Learn (URL de base, sans `/chat`). En production, cette variable doit pointer vers l'URL HTTPS publique du Worker.

Le Worker autorise déjà les origines `http://localhost:5173` et `https://learn.altruisme.dev` dans sa configuration CORS. Il faut aussi configurer ses secrets comme indiqué dans `workers/learn-ai/README.md`. Aucune clé OpenAI n'est utilisée dans le frontend.

L'historique reste en mémoire pendant la navigation. La sauvegarde dans le navigateur est facultative, limitée aux 40 derniers messages et séparée par compte ; désactiver l'option l'efface. Le Worker traite actuellement chaque question séparément : l'historique affiché n'est pas transmis comme contexte à l'IA.

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
