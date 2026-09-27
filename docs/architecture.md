# Architecture actuelle du monorepo

Les sept applications ci-dessous correspondent aux Workers et domaines Cloudflare confirmés le 27 septembre 2026. Chaque Worker compile les assets de son application ; les packages partagés sont intégrés aux builds de leurs consommateurs.

| Application | Workspace npm | Worker Cloudflare | Domaine |
| --- | --- | --- | --- |
| `apps/website` | `@altruisme/website` | `altruisme-website` | `altruisme.dev` |
| `apps/os` | `@altruisme/os` | `altruisme-os` | `os.altruisme.dev` |
| `apps/fondation` | `@altruisme/fondation` | `altruisme-fondation` | `fondation.altruisme.dev` |
| `apps/consulting` | `@altruisme/consulting` | `altruisme-consulting` | `consulting.altruisme.dev` |
| `apps/learn` | `@altruisme/learn` | `altruisme-learn` | `learn.altruisme.dev` |
| `apps/cloud` | `@altruisme/cloud` | `altruisme-cloud` | `cloud.altruisme.dev` |
| `apps/builder` | `@altruisme/builder` | `altruisme-builder` | `builder.altruisme.dev` |

Le workspace racine découvre les applications avec `apps/*` et les packages avec `packages/*`. `packages/ui`, `packages/brand`, `packages/config` et `packages/supabase` ne sont pas déployés séparément. Les domaines et les paramètres de builds Git sont gérés dans Cloudflare ; les fichiers Wrangler du dépôt portent les noms des Workers et leur configuration de build locale.

L'ancien `apps/coaching` est devenu `apps/os`. La configuration Supabase et la fonction Calendly restent dans cette application. Le `project_id` local `coaching`, la variable `COACHING_OWNER_ID`, les champs de données et les valeurs métier contenant « coaching » ne sont pas des identifiants de Worker : leur contrat est conservé.

`apps/fondation` et `apps/consulting` proviennent de copies de Builder. Leur contenu de page et certaines métadonnées descriptives parlent encore de Builder ; une adaptation produit distincte est nécessaire. Le nettoyage architectural ne modifie pas ces contenus ni les clés de consentement déjà persistées dans les navigateurs.

Audit et son API, ainsi qu'Observabilité, ne font plus partie des applications actives du monorepo. La chronologie des anciennes extractions de packages reste dans [monorepo-restructuration.md](monorepo-restructuration.md).
