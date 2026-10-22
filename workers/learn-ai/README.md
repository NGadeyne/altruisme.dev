# Altruisme Learn AI

Worker Cloudflare TypeScript pour l'assistant SEO de Learn. Il utilise la [Responses API](https://developers.openai.com/api/docs/guides/text) et répond uniquement aux utilisateurs dont le jeton de session Supabase est validé côté serveur. Le nom Wrangler `altruisme-learn-ai` cible le Worker existant ; aucun domaine ni route de production n'est configuré ici.

L'assistant est limité aux questions liées au SEO par les instructions envoyées à OpenAI. Chaque question utilise une requête Responses API avec une sortie structurée (`seo` ou `off_topic`). Pour `off_topic`, le Worker remplace toute sortie du modèle par le message de refus défini côté serveur. Les questions mixtes sont traitées uniquement sous leur angle SEO. Une seconde requête Responses API n'est tentée qu'en cas d'échec de la recherche documentaire, pour garder la réponse SEO générale. Les tests vérifient le contrat ; la qualité pédagogique du modèle reste à contrôler lors des essais fonctionnels.

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

Utiliser le même projet Supabase que `apps/learn`. La clé Supabase est publiable, mais elle reste hors du dépôt comme toute autre clé API. Le modèle est configuré par `OPENAI_MODEL` dans `wrangler.jsonc` (`gpt-5-mini` par défaut) ; modifiez cette variable pour changer de modèle.

```sh
npm run dev --workspace=@altruisme/learn-ai
npm run build --workspace=@altruisme/learn-ai
```

`build` vérifie TypeScript et prépare un bundle Wrangler avec `--dry-run`. Il ne déploie rien.
Les raccourcis racine `npm run dev:learn-ai` et `npm run build:learn-ai` sont aussi disponibles.

## API

- `GET /health` → `{ "status": "ok" }` (sans authentification).
- `POST /chat` → `{ "answer": "...", "resources": [] }`. Corps JSON : `{ "message": "Ma question SEO", "history": [] }` (`history` est facultatif, huit messages précédents au maximum). La question contient 1 à 2 000 caractères ; chaque message de contexte, 1 à 1 500 caractères ; la requête entière, 8 Kio maximum. En-tête requis : `Authorization: Bearer <jeton d'accès Supabase>`.

Pour afficher la réponse progressivement, envoyer aussi `Accept: text/event-stream`. Le Worker renvoie alors des événements SSE `delta` (`{ "text": "..." }`), puis `done` (`{ "answer": "...", "resources": [] }`). Un événement `error` termine un flux interrompu. Le texte n'est diffusé qu'après confirmation du périmètre SEO ; les références de leçons sont vérifiées et transmises dans `done`. Sans cet en-tête, le contrat JSON existant reste disponible.

`resources` contient au plus trois références `{ id, number, title, moduleTitle, url }`. Les URLs sont des chemins internes du catalogue réel (`/formation/lesson-15` par exemple). Le Worker ne renvoie une référence que si File Search a réellement retrouvé un document appartenant à la formation et que l'identifiant proposé par le modèle correspond à ce document. Sans droit d'accès, sans recherche ou sans passage pertinent, le tableau est vide.

Exemple local après connexion à Learn :

```sh
curl -X POST http://localhost:8787/chat \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -d '{"message":"Comment choisir mes premiers mots-clés ?"}'
```

Le Worker valide le jeton via l'endpoint Supabase Auth `/auth/v1/user` avant d'appeler OpenAI. Une indisponibilité de Supabase Auth ou d'un limiteur bloque l'appel payant. Les réponses et les erreurs ne sont pas mises en cache et ne contiennent ni clés ni détails des services amont. Les réponses OpenAI sont demandées avec `store: false` et plafonnées à 3 072 jetons de sortie.

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

Pour l'intégration Git Cloudflare, vérifier dans **Settings > Builds** : le dépôt et la branche attendus, le compte associé au jeton de build, le répertoire racine `workers/learn-ai`, la commande de build `npm run build`, la commande de déploiement `npx wrangler deploy` et le chemin surveillé `workers/learn-ai/*`. Chez Cloudflare, `*` couvre aussi les sous-dossiers. Éviter `--env` et `CLOUDFLARE_ENV` tant qu'aucun environnement nommé n'est configuré dans `wrangler.jsonc`. Si un environnement nommé est ajouté, ses secrets et ses bindings de limitation de requêtes devront aussi être configurés pour cet environnement. Le nom du Worker dans Cloudflare doit correspondre exactement à `name` dans `wrangler.jsonc`.

L'erreur « The following required secrets have not been set » signifie que Wrangler ne trouve pas ces bindings sur **la cible du déploiement**. Elle ne permet pas, à elle seule, de conclure que les valeurs n'existent nulle part dans Cloudflare. Vérifier d'abord le compte, le Worker, l'environnement et l'emplacement des variables dans le tableau de bord. Le build local avec `--dry-run` n'interroge pas les secrets distants et ne prouve donc pas leur présence sur la cible.

La commande de déploiement, à lancer explicitement après revue de la configuration et des secrets, est :

```sh
npm run deploy --workspace=@altruisme/learn-ai
```

Le raccourci racine équivalent est `npm run deploy:learn-ai`.

## Tuteur connecté à la formation SEO

Les 28 leçons se trouvent dans `apps/learn/src/components/courses/SeoLessonXXContent.vue`. `apps/learn/src/data/seoProgram.ts` fournit titres, numéros et modules ; le routeur Learn confirme les URL `/formation/lesson-XX`. Le script `scripts/sync-lessons.mjs` extrait le texte statique des composants Vue avec le compilateur déjà fourni par Vue, écarte les quiz et produit un fichier Markdown par leçon. Il refuse les contenus dynamiques non pris en charge. Aucun texte de leçon n'est copié dans le code du Worker : `src/lessonCatalog.ts` ne contient que les métadonnées nécessaires aux liens vérifiés.

La recherche utilise l'outil hébergé [OpenAI File Search](https://developers.openai.com/api/docs/guides/tools-file-search) dans la même requête Responses API. Le modèle décide de l'utiliser quand les leçons peuvent aider ; le Worker limite à quatre résultats et demande leurs métadonnées pour valider les références. Le prompt traite les passages récupérés comme des données, jamais comme des instructions. `gpt-5-mini` reste le modèle. L'historique est transmis dans chaque requête, limité côté navigateur et côté serveur ; `store: false` reste actif.

### Accès aux contenus payants

Learn ne disposait pas de registre d'inscription par formation : la seule session Supabase ne prouve pas un achat. **La recherche documentaire est donc désactivée par défaut.** La migration `apps/learn/supabase/migrations/202610210001_course_entitlements.sql` crée `learn_course_entitlements`, avec lecture RLS réservée au propriétaire et aucune écriture accordée aux apprenants. Le Worker vérifie une ligne `(user_id, course_slug='seo')` avec le jeton utilisateur avant de fournir l'outil File Search à OpenAI. En l'absence de ligne, si la table manque ou si Supabase est indisponible, il répond en SEO général sans document ni référence. Les droits doivent être accordés après vérification de l'achat par un processus d'administration de confiance ; **aucun automatisme d'achat ou d'attribution n'est ajouté ici**. La migration n'est jamais appliquée par le build.

Attention : les composants de leçon de Learn sont actuellement livrés comme fichiers frontend et les routes n'exigent qu'une connexion. Ce dispositif sécurise l'accès **via le chat**, mais ne constitue pas à lui seul une protection des fichiers frontend pour une offre payante. Vérifier et corriger séparément la livraison des leçons avant de considérer l'ensemble de la formation comme protégé.

### Préparation et synchronisation manuelles

1. Créer **manuellement** dans OpenAI un vector store dédié, puis conserver son identifiant `vs_...`. La création et l'indexation peuvent engendrer des coûts ; aucune commande de build ou de déploiement ne les lance. Lire les [tarifs OpenAI actuels](https://developers.openai.com/api/docs/pricing) avant de l'activer.
2. Exporter les Markdown pour revue : `npm run lessons:export --workspace=@altruisme/learn-ai`. Ils sont écrits dans `workers/learn-ai/dist/seo-lessons`, ignoré par Git. Vérifier le catalogue et les URL. Si le programme change, exécuter `npm run lessons:catalog --workspace=@altruisme/learn-ai` et relire le diff des seules métadonnées.
3. Dans un terminal local, fournir `OPENAI_API_KEY` et `OPENAI_VECTOR_STORE_ID` comme variables d'environnement **sans les inscrire dans Git ou dans une commande historisée**. L'identifiant de vector store n'est pas un secret, mais la clé l'est. Le script ne lit pas `.dev.vars`.
4. Lancer `npm run lessons:sync --workspace=@altruisme/learn-ai` pour afficher le plan et son `Plan ID`. Le script ne modifie rien sans `--apply --confirm=<Plan ID>`. Après revue, lancer `npm run lessons:sync --workspace=@altruisme/learn-ai -- --apply --confirm=<Plan ID>`. Refaire un plan doit ne montrer aucune modification.
5. Le script compare les empreintes SHA-256 des Markdown avec les attributs des fichiers indexés. Une mise à jour charge le nouveau fichier, attend la fin de l'indexation, puis détache l'ancien. Si l'indexation prend trop longtemps, la relance reprend le fichier déjà attaché. Les anciens objets File restent dans OpenAI Files pour une suppression séparée après revue. Une leçon retirée du programme est seulement signalée ; pour la détacher, inclure **explicitement** `--prune=seo-lesson-XX` dans le plan et l'application, avec un nouveau `Plan ID`. Il n'y a pas de suppression globale implicite.

Pour activer en production **après** la migration, l'attribution fiable des droits, la synchronisation et les vérifications fonctionnelles, ajouter au Worker `altruisme-learn-ai` deux variables **d'exécution** : `OPENAI_VECTOR_STORE_ID=vs_...` et `LEARN_AI_RAG_ENABLED=true`. L'absence de l'une ou `LEARN_AI_RAG_ENABLED=false` coupe la recherche sans arrêter le chat SEO. `keep_vars: true` dans Wrangler conserve ces variables configurées au tableau de bord lors des déploiements suivants. Ne pas les placer uniquement dans les variables de build Cloudflare. En développement local, les valeurs facultatives peuvent être passées à `wrangler dev` avec `--var` ; les trois secrets obligatoires restent dans `.dev.vars`.

Tests et compilation : `npm run test --workspace=@altruisme/learn-ai`, `npm run type-check --workspace=@altruisme/learn-ai`, `npm run build --workspace=@altruisme/learn-ai`, puis `npm run test:unit --workspace=@altruisme/learn -- --run`, `npm run type-check --workspace=@altruisme/learn` et `npm run build --workspace=@altruisme/learn`. Aucun de ces tests ne crée de vector store ou ne contacte OpenAI.
