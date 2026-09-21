# @altruisme/ui

Composants Vue partagés par `apps/website` et `apps/audit` : `BaseButton` et
`BaseContainer`. Leurs props, styles et comportements sont conservés lors de
l'extraction. Les variantes propres à learn et coaching restent dans ces apps.

```ts
import { BaseButton, BaseContainer } from '@altruisme/ui'
```

Ce workspace privé exporte ses sources : Vite les compile dans le bundle de
chaque application. Il n'a ni Worker, ni déploiement, ni build indépendant.
Vue et Vue Router sont fournis par l'application ; celle-ci doit installer son
routeur pour utiliser la prop `to` du bouton.

Les consommateurs déclarent `"@altruisme/ui": "0.0.0"` dans leurs dépendances.
Installer les dépendances depuis la racine du monorepo avec `npm ci`.
Dans `apps/<app>/src/assets/main.css`, déclarer les sources Tailwind :

```css
@import 'tailwindcss';
@source '../../../../packages/ui/src';
```

Vérification des consommateurs actuels depuis la racine :

```sh
npm run build --workspace=@acquisition/website --workspace=@acquisition/audit
npm run test:unit --workspace=@acquisition/website -- --run
npm run test:prerender --workspace=@acquisition/website
```

Les builds Cloudflare doivent disposer du dépôt complet et installer depuis le
lockfile racine. Les commandes et configurations de déploiement restent propres
à chaque application. Si des filtres de chemins sont configurés dans Cloudflare,
inclure `packages/ui/**` pour les deux consommateurs.
