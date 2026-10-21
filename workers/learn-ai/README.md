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

Les trois valeurs de `.dev.vars` doivent exister comme secrets sur `altruisme-learn-ai`. Conserver le secret `OPENAI_API_KEY` existant ; ajouter les deux valeurs Supabase avec Wrangler si elles n'existent pas :

```sh
cd workers/learn-ai
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_PUBLISHABLE_KEY
```

La commande de déploiement, à lancer explicitement après revue de la configuration et des secrets, est :

```sh
npm run deploy --workspace=@altruisme/learn-ai
```

Le raccourci racine équivalent est `npm run deploy:learn-ai`.

Le frontend Learn n'est pas modifié par ce projet. Son intégration ultérieure devra transmettre le jeton d'accès Supabase courant dans l'en-tête `Authorization`.
