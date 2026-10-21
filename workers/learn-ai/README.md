# Altruisme Learn AI

Worker Cloudflare TypeScript pour l'assistant SEO de Learn. Il utilise la [Responses API](https://developers.openai.com/api/docs/guides/text) et répond uniquement aux utilisateurs dont le jeton de session Supabase est validé côté serveur. Le nom Wrangler `altruisme-learn-ai` cible le Worker existant ; aucun domaine ni route de production n'est configuré ici.

## Installation et développement

Depuis la racine du monorepo :

```sh
npm install
```

Créer `workers/learn-ai/.dev.vars` (ce fichier est ignoré par Git) :

```dotenv
OPENAI_API_KEY="votre_cle_openai"
SUPABASE_URL="https://votre-projet.supabase.co"
SUPABASE_PUBLISHABLE_KEY="votre_cle_publiable_supabase"
```

Utiliser le même projet Supabase que `apps/learn`. La clé Supabase est publiable, mais elle reste hors du dépôt comme toute autre clé API. Le modèle est configuré par `OPENAI_MODEL` dans `wrangler.jsonc` (`gpt-6-luna` par défaut) ; modifiez cette variable pour changer de modèle.

```sh
npm run dev --workspace=@altruisme/learn-ai
npm run build --workspace=@altruisme/learn-ai
```

`build` vérifie TypeScript et prépare un bundle Wrangler avec `--dry-run`. Il ne déploie rien.
Les raccourcis racine `npm run dev:learn-ai` et `npm run build:learn-ai` sont aussi disponibles.

## API

- `GET /health` → `{ "status": "ok" }` (sans authentification).
- `POST /chat` → `{ "answer": "..." }`. Corps JSON : `{ "message": "Ma question SEO" }` (1 à 2 000 caractères après suppression des espaces en début et fin, 8 Kio maximum pour la requête). En-tête requis : `Authorization: Bearer <jeton d'accès Supabase>`.

Exemple local après connexion à Learn :

```sh
curl -X POST http://localhost:8787/chat \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -d '{"message":"Comment choisir mes premiers mots-clés ?"}'
```

Le Worker valide le jeton via l'endpoint Supabase Auth `/auth/v1/user` avant d'appeler OpenAI. Une indisponibilité de Supabase ou d'un limiteur bloque l'appel payant. Les réponses et les erreurs ne sont pas mises en cache et ne contiennent ni clés ni détails des services amont. Les réponses OpenAI sont demandées avec `store: false` et plafonnées à 600 jetons de sortie.

Les origines CORS autorisées sont `https://learn.altruisme.dev` et les origines HTTP locales `localhost`, `127.0.0.1` ou `[::1]` sur les ports 5173, 5174 et 4173. CORS n'authentifie pas les clients hors navigateur : l'autorisation repose sur la vérification Supabase. Le Worker applique des limites Cloudflare de 30 requêtes/minute par IP avant authentification, de 10 requêtes/minute par utilisateur et de 120 requêtes/minute pour l'ensemble des appels. Les identifiants `namespace_id` des trois limiteurs doivent être uniques dans le compte Cloudflare ; adaptez-les s'ils sont déjà utilisés. Ces compteurs sont locaux à chaque emplacement Cloudflare et approximatifs : configurez aussi un budget de dépense OpenAI et, si nécessaire, une règle WAF Cloudflare avant toute ouverture à grande échelle.

## Configuration du Worker existant

Le fichier `wrangler.jsonc` cible le Worker `altruisme-learn-ai` dans l'environnement par défaut (aucun bloc `env` n'est défini). Les trois noms de `secrets.required` sont nécessaires : `OPENAI_API_KEY` pour OpenAI, puis `SUPABASE_URL` et `SUPABASE_PUBLISHABLE_KEY` pour valider le jeton de session avec Supabase avant tout appel payant. `OPENAI_MODEL` est une variable non secrète définie dans `wrangler.jsonc`.

Dans **Workers & Pages > altruisme-learn-ai > Settings > Variables & Secrets**, vérifier que les trois noms existent sur ce Worker, dans le bon compte Cloudflare, comme variables d'exécution. Les variables et secrets définis dans **Settings > Build > Build Variables and Secrets** sont accessibles au build uniquement et ne remplacent pas les bindings d'exécution. Les secrets d'un autre Worker, d'une Preview ou d'un environnement nommé ne sont pas hérités par l'environnement par défaut. Ne pas copier leurs valeurs dans le dépôt ou dans les journaux de build.

Pour lister uniquement les **noms** des secrets du Worker ciblé, depuis le compte Cloudflare utilisé pour le déploiement :

```sh
cd workers/learn-ai
npx wrangler secret list --format pretty
```

Si un nom manque, l'ajouter dans les variables et secrets d'exécution de **ce Worker** depuis le tableau de bord Cloudflare. `wrangler secret put` crée immédiatement une nouvelle version et la déploie ; ne l'utiliser que si ce déploiement est voulu.

Pour l'intégration Git Cloudflare, vérifier dans **Settings > Builds** : le dépôt et la branche attendus, le compte associé au jeton de build, le répertoire racine `workers/learn-ai`, la commande de build `npm run build` et la commande de déploiement `npx wrangler deploy`. Éviter `--env` et `CLOUDFLARE_ENV` tant qu'aucun environnement nommé n'est configuré dans `wrangler.jsonc`. Si un environnement nommé est ajouté, ses secrets et ses bindings de limitation de requêtes devront aussi être configurés pour cet environnement. Le nom du Worker dans Cloudflare doit correspondre exactement à `name` dans `wrangler.jsonc`.

L'erreur « The following required secrets have not been set » signifie que Wrangler ne trouve pas ces bindings sur **la cible du déploiement**. Elle ne permet pas, à elle seule, de conclure que les valeurs n'existent nulle part dans Cloudflare. Vérifier d'abord le compte, le Worker, l'environnement et l'emplacement des variables dans le tableau de bord. Le build local avec `--dry-run` n'interroge pas les secrets distants et ne prouve donc pas leur présence sur la cible.

La commande de déploiement, à lancer explicitement après revue de la configuration et des secrets, est :

```sh
npm run deploy --workspace=@altruisme/learn-ai
```

Le raccourci racine équivalent est `npm run deploy:learn-ai`.

Le frontend Learn n'est pas modifié par ce projet. Son intégration ultérieure devra transmettre le jeton d'accès Supabase courant dans l'en-tête `Authorization`.
