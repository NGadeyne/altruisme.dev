# @acquisition/audit

V1 du diagnostic freelance Altruisme.DEV.

## Installation

Dans le monorepo :

```bash
cd apps/audit
npm install
npm run dev
```

Si les dépendances sont gérées à la racine du workspace, adapte simplement `package.json` aux versions déjà utilisées par `website`, `learn` et `coaching`.

## Routes

- `/` : landing page
- `/diagnostic` : questionnaire
- `/resultat` : résultat complet + CTA + collecte email

## Moteur métier

- Questions : `src/data/questions.ts`
- Scoring / goulot d'étranglement / recommandations : `src/lib/diagnostic.ts`
- Capture email : `src/lib/lead.ts`

## Brancher Supabase

Crée une table `audit_leads` avec par exemple :

- `id uuid primary key default gen_random_uuid()`
- `email text not null`
- `newsletter_consent boolean default false`
- `answers jsonb not null`
- `global_score int not null`
- `scores jsonb not null`
- `priority text not null`
- `created_at timestamptz default now()`

Puis remplace le `console.info()` dans `src/lib/lead.ts` par un `supabase.from('audit_leads').insert(...)`.

## Point important RGPD

Le résultat complet est affiché immédiatement. L'email n'est donc pas utilisé comme paywall. Le consentement newsletter reste volontaire et séparé de l'envoi du diagnostic.

## Design

Cette version reprend directement le design system de `website` :

- Ink `#222826`
- Pétrole `#4f7774`
- Pétrole sombre `#31413f`
- Sable `#f4efe7`
- Sable clair `#f7f2e9`
- Brume `#edf3f0`

Les composants `BaseButton` et `BaseContainer` ont été repris du website afin de garder une cohérence stricte entre les applications.
