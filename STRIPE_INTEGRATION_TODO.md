# Learn — Stripe Checkout et accès à la formation

## Values to Replace

Aucun identifiant de prix ou URL provisoire dans la création de session : l'achat unique de la formation SEO à 27 € TTC utilise le prix et les URL réels du projet.

## Configured Parameters

**Fichier :** [apps/learn/supabase/functions/learn-checkout/index.ts](apps/learn/supabase/functions/learn-checkout/index.ts)

| Paramètre | Valeur |
| --- | --- |
| `mode` | `payment` |
| `ui_mode` | `hosted_page` |
| `billing_address_collection` | `auto` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `true` |
| `allow_promotion_codes` | `false` |
| `submit_type` | `auto` |
| `integration_identifier` | `hosted_web_0001` |
| `origin_context` | `web` |
| `payment_method_collection` | omis pour un achat unique |

Le prix de 27 € est déclaré taxes incluses. La session reste limitée à la formation SEO et aux cartes. Le code appelle l'API HTTP Stripe sans fixer de version d'API. Le webhook accepte encore les sessions à 97 € créées avant le changement de tarif.

## État au 11 novembre 2026

Les corrections de l'audit sont **déployées en environnement Stripe test**. Learn est publié sur `https://learn.altruisme.dev` (Worker Cloudflare `altruisme-learn`, version `ea0ce054-20be-44ed-b6de-a82b4d475cbc`). Le Checkout ouvert depuis le site affiche « Environnement de test » et 97 € ; aucune vente réelle n'est activée.

Le nouveau parcours enregistre un paiement signé dans `learn_pending_purchases` tant que l'adresse e-mail Stripe n'est pas vérifiée. Sur la page de retour, l'acheteur reçoit un code e-mail Supabase, le saisit sur cette même page, choisit son mot de passe et ouvre la formation. Si l'onglet a été fermé, `/recuperer-acces` propose la même vérification. Un compte existant garde son mot de passe ; une personne qui le connaît peut se connecter. Le jeton du navigateur seul ne peut plus définir un mot de passe.

Les fichiers JavaScript contenant les leçons, quiz et exercices sont servis par un Worker Cloudflare qui vérifie le droit SEO avant chaque réponse. Les politiques RLS des données de progression exigent aussi ce droit. Le catalogue de l'assistant IA couvre désormais les 31 leçons ; son Worker est publié en version `bc377229-cb16-4157-89fc-03260cec6916`.

## Déployé et vérifié

- [La migration RLS](apps/learn/supabase/migrations/202611110001_course_data_entitlements.sql) et [la migration des achats en attente](apps/learn/supabase/migrations/202611110002_checkout_email_claim.sql) sont appliquées au projet Supabase Learn. Un `db push --dry-run` confirme que la base distante est à jour.
- Les Edge Functions [learn-stripe-webhook](apps/learn/supabase/functions/learn-stripe-webhook/index.ts) (version 4) et [learn-claim-checkout](apps/learn/supabase/functions/learn-claim-checkout/index.ts) (version 2) sont actives. La fonction `learn-checkout` préexistante reste active.
- Le modèle Supabase **Magic link or OTP** contient `{{ .Token }}` et a été vérifié après rechargement. L'URL de site Auth est `https://learn.altruisme.dev`, également vérifiée après rechargement. L'envoi SMTP Brevo était déjà configuré ; sa délivrabilité avec ce nouveau modèle reste à tester.
- Le Worker Learn possède `SUPABASE_URL` et `SUPABASE_PUBLISHABLE_KEY` dans ses secrets Cloudflare. Les valeurs ne sont ni affichées ici ni écrites dans le dépôt. Le navigateur utilise toujours `VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Sur le domaine public, `/`, `/paiement` et le script public renvoient `200` ; un fichier de leçon sans droit renvoie `401`, un ancien nom de fichier de leçon et le manifeste privé renvoient `404`. Le Worker refuse un faux jeton (`403`, donc la liaison Supabase fonctionne). Les RPC d'attribution refusent un appel anonyme (`401`). La page `/recuperer-acces` s'ouvre. Les 145 tests unitaires Learn, 6 tests Worker et 24 tests Learn AI passent ; leurs builds et vérifications TypeScript passent. La route `/health` du Worker Learn AI renvoie `200`.
- **Paiement test complet confirmé le 11 novembre 2026 :** l'acheteur a validé le paiement, reçu et saisi le code e-mail, choisi son mot de passe et ouvert la formation SEO. La première leçon protégée a ensuite été ouverte et son contenu chargé dans Learn. Supabase indique une livraison `POST 200` au webhook ; une notification sans signature est refusée (`400`). Pour cette session Stripe, la base contient exactement un achat de 9 700 centimes en EUR, aucun achat en attente, un droit `seo` et une adresse e-mail confirmée. Aucune adresse e-mail ni clé n'a été affichée dans ce suivi.

## Vérifications et préparation restantes

1. Compléter les scénarios de test : compte existant, onglet perdu puis récupération, code erroné, webhook répété, paiement annulé et mobile. Le parcours d'un nouvel acheteur est validé. [Cartes de test Stripe](https://docs.stripe.com/testing).
2. **Ressource externe à sécuriser avant vente réelle :** le [tableur Google Sheets](apps/learn/src/data/seoResources.ts) est exportable en CSV sans authentification (`200`, confirmé le 11 novembre 2026). Le lien est désormais caché dans un fichier Learn protégé, mais toute personne possédant l'URL directe peut toujours lire le tableur. Choisir un hébergement privé contrôlé par le droit Learn, ou accepter explicitement ce partage public. Le contrôle des fichiers JavaScript ne protège pas un document tiers.
3. Synchroniser les 31 documents SEO dans le vector store OpenAI avec le script de `workers/learn-ai` et contrôler que les anciens documents ne créent pas de doublons. Le catalogue et le Worker sont à jour ; l'index distant n'a pas été vérifié ici. L'assistant SEO général reste accessible à un compte authentifié sans achat ; seules les références aux leçons payantes exigent le droit `seo`. Confirmer que ce choix correspond à l'offre commerciale.
4. Vérifier les comptes et droits de **test** créés par l'ancien parcours qui confirmait automatiquement l'e-mail Stripe. Ce code ne peut pas prouver rétroactivement que ces adresses appartenaient aux acheteurs ; traiter ces comptes avant toute ouverture commerciale.
5. Déployer ensemble la page de paiement, `learn-checkout`, `learn-stripe-webhook` et `learn-claim-checkout`, puis vérifier que Stripe affiche bien 27 € TTC. Avant les ventes réelles, terminer Stripe Tax (adresse, immatriculations applicables et catégorie fiscale), remplacer `STRIPE_SECRET_KEY` de test par la clé de production, créer le webhook **production** `checkout.session.completed`, renseigner son nouveau `STRIPE_WEBHOOK_SECRET`, et refaire le test complet. Garder ces secrets uniquement dans Supabase.

[Support Stripe](https://support.stripe.com) · [Documentation Stripe](https://docs.stripe.com/mcp)
