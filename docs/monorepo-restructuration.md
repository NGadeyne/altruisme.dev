# Restructuration progressive du monorepo

## Premier lot réalisé

Le premier lot est maintenant implémenté : `packages/ui` exporte `BaseButton`
et `BaseContainer`, consommés par website et audit via `@altruisme/ui`.
Les quatre copies locales ont été remplacées par les deux sources communes,
conservées à l'identique. Les dépendances et le lockfile npm ont été mis à jour,
et les deux feuilles Tailwind déclarent explicitement les sources du package.

Validation après extraction : builds et TypeScript des deux consommateurs réussis,
5 tests website réussis, pré-rendu des 17 pages et de la 404 vérifié, présence
des styles des composants vérifiée dans les deux bundles CSS. Le graphe npm
résout le workspace local et déduplique Vue et Vue Router. `git diff --check`
réussit. Aucun déploiement effectué.
Les configurations Cloudflare et les autres applications restent inchangées.
Les étapes suivantes ci-dessous restent des propositions.

## Deuxième lot réalisé

`packages/brand` contient les tokens Tailwind/CSS communs à website et audit :
typographie et palettes ink, muted, petrol, sand et mist. Les deux applications
importent désormais `@altruisme/brand/tokens.css` après Tailwind ; leurs resets,
styles globaux, styles de cookies et styles de pages restent locaux. Le package
ne possède aucun script, Worker ni déploiement.

Validation après extraction : builds et contrôles TypeScript website/audit
réussis, 5 tests website réussis, pré-rendu des 17 pages et de la 404 vérifié,
et présence des tokens dans les deux bundles CSS contrôlée. Le workspace est
résolu par npm dans les deux consommateurs. Aucun déploiement effectué.

Contrôle navigateur local effectué ensuite avec les serveurs Vite website (5173)
et audit (5174) : accueils desktop, navigation website vers les guides, accueil
website et page communauté en largeur mobile 390 px, ouverture du menu mobile et
navigation via son bouton. Sur audit mobile, vérification des deux premières
questions : bouton Continuer désactivé sans réponse, activation après sélection,
passage à la question suivante et retour. Aucun débordement horizontal mesuré
sur l'accueil website et le questionnaire audit à 390 px ; aucun avertissement
ou erreur dans les journaux navigateur consultés. Aucun envoi de diagnostic
ni contrôle du backend distant. Pas de défaut visuel constaté sur ces écrans.

## Analyse initiale

Analyse du 21 septembre 2026, avant tout déplacement. Aucun code applicatif,
workspace ou déploiement n'a été modifié pour cette analyse.

## État actuel

Le `package.json` racine est privé et déclare déjà `apps/*` et `packages/*`.
Le dossier `packages/` et le `tsconfig.json` racine n'existent pas encore.
Les six interfaces sont des workspaces npm, sans dépendance npm entre elles.
Les noms actuels sont `@acquisition/<application>` : les renommer n'est pas
nécessaire pour introduire des packages `@altruisme/*`.

| Emplacement | Responsabilité et dépendances principales | Déploiement configuré |
| --- | --- | --- |
| `apps/website` | Média, Vue, Router, Tailwind ; build client + SSR de pré-rendu | `altruisme-website`, assets `dist`, page 404, normalisation HTML |
| `apps/builder` | Interface builder, Vue et Tailwind | `altruisme-builder`, assets `dist`, fallback SPA |
| `apps/cloud` | Interface cloud, Vue et Tailwind | `altruisme-cloud`, assets `dist`, fallback SPA |
| `apps/learn` | Formation, Vue, Router, Pinia, Supabase, Tailwind | `altruisme-learn`, assets `dist`, fallback SPA |
| `apps/coaching` | CRM, Vue, Router, Pinia, Supabase, Tailwind | `altruisme-coaching`, assets `dist`, fallback SPA |
| `apps/audit` | Diagnostic, Vue, Router et Tailwind ; appel HTTP au backend audit | `altruisme-audit`, assets `dist`, fallback SPA |
| `workers/audit-api` | Backend audit, TypeScript et Wrangler ; Turnstile et Brevo | `altruisme-audit-api`, entrée `src/index.ts` |

Chaque interface a ses configurations Vite, TypeScript et Wrangler. Les alias
`@` restent locaux à chaque application. Le backend possède son propre lockfile
et n'appartient pas aux workspaces racine. Le frontend audit appelle son URL
Workers dans `apps/audit/src/lib/lead.ts` ; il ne l'importe pas dans son bundle.
Coaching possède aussi sa configuration Supabase et une Edge Function Calendly,
qui doivent rester attachées à cette application.

`apps/os` n'existe pas. Le passage de `coaching` à `os` doit constituer un lot
distinct : un renommage de dossier n'impose pas de renommer le Worker ni son domaine.
Les scripts racine couvrent cinq interfaces ; audit est utilisable via
`--workspace=@acquisition/audit` mais n'a pas de raccourcis `dev:audit`/`build:audit`.
Aucun workflow GitHub versionné n'a été trouvé. Les réglages Cloudflare distants
(racines de build, commandes, filtres de chemins, domaines) ne sont pas vérifiés.

## Mutualisations fondées sur le code existant

| Cible | Constat | Proposition |
| --- | --- | --- |
| `packages/ui` | `BaseButton.vue` et `BaseContainer.vue` identiques octet pour octet dans website et audit, et effectivement importés | Premier lot : extraire uniquement ces deux composants et migrer ces deux consommateurs |
| `packages/brand` | Même palette `@theme` dans website et audit ; builder en reprend un sous-ensemble, et la typographie est récurrente | Deuxième lot : tokens CSS communs, sans déplacer les styles globaux ni les styles de pages |
| `packages/config` | Configurations ESLint identiques dans website, learn, coaching ; plusieurs tsconfig identiques | Lot ultérieur : options communes uniquement, en gardant chemins, includes, alias et caches locaux |
| `packages/supabase` | `lib/supabase.ts` et `stores/auth.ts` identiques dans learn et coaching | Reporter : le SDK fournit déjà la factory ; garder les clients, variables d'environnement et stores dans chaque application pour le moment |
| `packages/utils` | Pas de fonction générique répétée justifiant un premier package | Ne pas créer pour l'instant |
| `packages/types` | Types de guides, CRM et apprentissage propres à leurs applications ; `Dimension` répété dans audit et son API | Ne pas créer de fourre-tout ; envisager plus tard un contrat audit ciblé si son maintien partagé devient utile |

Précautions précises :

- Les composants de learn et coaching ne sont pas identiques à ceux du site.
  Le container de learn utilise notamment `large` par défaut et d'autres largeurs.
  Ne pas les remplacer automatiquement par le composant commun.
- Le bouton website/audit utilise Vue Router et des classes Tailwind. Son extraction
  doit préserver ces dépendances et son apparence, sans généraliser son API.
- Les CSS globaux de learn et coaching sont identiques mais expriment un style
  d'application distinct de la palette éditoriale. Leur duplication ne justifie
  pas d'imposer un thème unique aux six applications.
- Les consentements cookies website/builder/cloud se ressemblent mais diffèrent
  par leurs clés de stockage, événements et protections SSR. Les conserver locaux.
- Les `logo.svg` identiques de website et learn sont le logo Vue du scaffold,
  sans référence `logo.svg` trouvée dans les sources : ne pas les promouvoir en
  assets de marque. Les favicons website/audit sont identiques ; une mutualisation
  ultérieure devra préserver leurs URL publiques et leur copie dans chaque `dist`.
- Les types du résultat audit et du payload API ne sont pas identiques. Garder
  scoring, validation serveur et logique de diagnostic dans leurs applications.

## Ordre de migration proposé

1. Extraire les deux composants website/audit dans `packages/ui`, avec un manifeste
   privé `@altruisme/ui`, des exports explicites et les dépendances Vue/Router
   déclarées comme peer dependencies compatibles avec les consommateurs.
   Ajouter une dépendance de version locale correspondante dans les deux apps,
   régénérer le lockfile npm et remplacer les imports locaux. Garder Vite local.
   Vérifier explicitement la détection des classes Tailwind dans le package,
   le build SSR/pré-rendu et le rendu desktop/mobile. Aucun Wrangler ni script
   de déploiement dans ce package.
2. Extraire les tokens de marque communs dans `packages/brand`, consommés d'abord
   par website et audit. Conserver les règles globales et variantes locales.
   Ne pas créer en parallèle un objet TypeScript `brandColors` sans consommateur.
3. Mutualiser les options de configuration si cela simplifie réellement leur
   maintenance. Attention à la résolution relative de `include`, `paths` et
   `tsBuildInfoFile`, ainsi qu'au chemin `.oxlintrc.json` utilisé par ESLint.
   Un tsconfig racine peut servir de solution de références ; il n'est pas requis
   pour le premier lot et ne doit pas fusionner les environnements navigateur/Worker.
4. Déplacer `workers/audit-api` vers `apps/audit-api` dans un lot autonome, après
   inventaire des réglages Cloudflare distants. L'intégrer au lockfile racine,
   puis supprimer le lockfile imbriqué devenu redondant. Conserver le nom
   `altruisme-audit-api`, les secrets, l'entrée, la date de compatibilité et l'URL
   appelée par audit. Adapter la racine de build distante au nouveau chemin.
   Ce service reste une application déployable, jamais un package.
5. Traiter séparément l'éventuel renommage `coaching` → `os`, avec mise à jour
   des scripts, lockfile, documentation et racine de build distante.

Après le premier lot, seuls les packages réellement consommés doivent exister.
Pas de dossiers vides pour simuler la structure cible et pas de Worker `packages`.
Les dépendances vont des apps vers les packages, jamais des packages vers les apps.
Chaque application compile les sources partagées utilisées dans son propre bundle.
Modifier un package implique de reconstruire ses consommateurs ; ils conservent
chacun leur déploiement. Les builds distants devront disposer du monorepo et du
lockfile racine, et leurs filtres devront prendre en compte les packages consommés.

## Vérifications de référence

Exécutées sur le code actuel, avec Node 22.22.3 et npm 12.0.2 :

- `npm ls --workspaces --depth=0` : les six interfaces sont résolues, sans erreur
  de dépendance manquante/invalide signalée.
- `npm run build --workspaces --if-present` : builds des six interfaces et
  contrôles TypeScript réussis ; website génère 17 pages et `404.html`.
- `npm run type-check --prefix workers/audit-api` : réussi.
- `npm run test:prerender --workspace=@acquisition/website` : réussi, HTML,
  métadonnées et assets des 17 pages et de la 404 vérifiés.
- `npm run test:unit --workspaces --if-present -- --run` : website, 5 tests
  réussis ; coaching, 7 réussis et 1 échec préexistant dans `src/__tests__/App.spec.ts`
  (route non injectée, lecture de `route.meta`) ; learn, aucun test trouvé,
  sortie 1. Les trois autres interfaces n'ont pas de script de tests unitaires.
- Avertissement Vite/Vitest préexistant sur l'import `./vite.config` sans extension.

Ces résultats constituent une référence avant migration, pas une validation de
déplacements qui n'ont pas encore été effectués. Après chaque lot : vérifier les
imports et le graphe npm, refaire les builds des consommateurs et leurs tests,
contrôler le rendu et le packaging Cloudflare sans publier, et vérifier qu'aucun
nom de Worker ni comportement de routage n'a changé. Une installation propre
depuis le lockfile devra aussi être validée ; elle n'a pas été exécutée ici.

État utilisateur préservé : `wrangler.jsonc` racine déjà supprimé dans Git et
`AGENTS.md` non suivi. Aucun déploiement, commit ou push effectué.
