# @altruisme/config

Configurations de développement communes. Les applications gardent leurs
chemins, alias, listes de fichiers et fichiers incrémentaux : ils sont relatifs
à leur propre dossier et ne doivent pas devenir globaux.

- `@altruisme/config/tsconfig/vue-app.json` : base TypeScript Vue navigateur.
- `@altruisme/config/tsconfig/node.json` : base TypeScript Node pour les
  configurations Vite, Vitest et ESLint.
- `@altruisme/config/eslint/vue` : factory ESLint Vue, à appeler avec le chemin
  local vers `.oxlintrc.json`.

Ce package est consommé au développement et n'est jamais déployé.
