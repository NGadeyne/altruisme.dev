# Persistance du plan d'action Learn

Appliquer `migrations/202610170001_learning_plan.sql` au projet Supabase utilisé par
`apps/learn` avant de rendre la page disponible aux apprenants. Cette migration
ajoute deux tables et leurs politiques RLS ; elle ne modifie aucune table
existante. Elle n'est pas exécutée automatiquement par le build.

- `learn_plan_statuses` conserve uniquement le statut des actions prédéfinies,
  identifiées par leur clé stable dans le catalogue du code.
- `learn_personal_actions` conserve les actions créées par chaque apprenant.
- La clé `(user_id, course_slug, action_key)` évite les doublons. Les nouvelles
  actions du catalogue apparaissent automatiquement avec le statut « À faire ».
- La progression du plan inclut les actions personnelles. Elle est indépendante
  de la progression des leçons.

Les politiques RLS n'autorisent la lecture et l'écriture qu'au propriétaire des
données. Le droit d'ouvrir les pages de la formation SEO est vérifié séparément
dans le routeur à partir de `learn_course_entitlements`. Les tables de progression
ne contrôlent pas encore ce droit au niveau RLS.

Après application, vérifier avec deux comptes apprenants que chacun ne voit que
ses actions et qu'une action enregistrée pour `seo` n'apparaît pas dans une autre
formation. Vérifier également qu'une insertion, une modification et une
suppression visant l'`user_id` de l'autre compte sont refusées par RLS.

## Progression des modules SEO

Appliquer aussi `migrations/202610220001_module_progress.sql` au projet Supabase
utilisé par Learn avant de déployer la progression sauvegardée sur le compte.
Cette migration crée `learn_module_progress` et ses politiques RLS, sans modifier
les tables existantes. Elle n'est pas exécutée par le build.

La clé `(user_id, course_slug, module_id)` évite les doublons. Les modules sont
marqués manuellement et restent indépendants des actions du plan. Au premier
chargement après déploiement, Learn importe les modules terminés auparavant dans
le navigateur de l'apprenant. La copie locale n'est supprimée qu'après une
sauvegarde réussie sur Supabase. Si plusieurs appareils contiennent des états
locaux différents, leurs modules terminés sont réunis lors de leur premier accès.

Après application, vérifier avec deux comptes apprenants : terminer un module,
actualiser, se reconnecter depuis un autre navigateur, puis rouvrir le module.
Le second compte ne doit voir aucun changement. Une requête d'insertion ou de
suppression portant sur l'`user_id` de l'autre compte doit être refusée par RLS.

## Accès à la formation SEO

`migrations/202610210001_course_entitlements.sql` définit les droits de lecture
par formation. Le routeur Learn distingue un visiteur, un compte sans accès et
un apprenant autorisé. Une erreur de vérification ne donne pas accès aux pages.

Avant de publier ce contrôle d'accès, attribuer le droit `seo` uniquement aux
comptes Learn existants explicitement identifiés. Un compte sans ligne dans
`learn_course_entitlements` sera redirigé vers `/acces`. Les futurs comptes ne
reçoivent aucun droit par défaut ; un processus de confiance devra leur
attribuer ce droit après achat.

Le routeur protège la navigation, mais les fichiers JavaScript de la formation
restent publics tant que le Worker et les nouvelles politiques RLS ne sont pas
déployés. Les étapes de publication sont suivies dans `STRIPE_INTEGRATION_TODO.md`.

## Achat Stripe et création du compte

Les liens d'achat publics mènent à `/paiement` sans demander de compte Learn.
La fonction `learn-checkout` crée une session Stripe Checkout à 27 € TTC pour la
formation SEO. Le webhook `learn-stripe-webhook` vérifie la signature Stripe, le
paiement, le montant et la formation. Pour une adresse déjà confirmée, il
enregistre l'achat et accorde le droit `seo`. Sinon, il conserve l'achat en
attente jusqu'à la vérification de l'adresse e-mail. Une livraison répétée du
webhook ne crée pas de second achat. La page `/paiement/confirmation` vérifie
la session auprès de Stripe par `learn-claim-checkout`, avec un jeton conservé
dans l'onglet ayant lancé Checkout. Un nouveau client reçoit un code e-mail,
le saisit sur cette page, choisit son mot de passe et ouvre la formation.
`/recuperer-acces` permet de terminer ce parcours si l'onglet a été perdu.
Le même service peut enregistrer un paiement validé si le retour du navigateur
précède le webhook. Un compte existant garde son mot de passe.
L'ancienne route `/inscription` renvoie vers `/paiement`.

Configuration et vérifications :

1. Appliquer les migrations existantes, puis
   `migrations/202611110001_course_data_entitlements.sql` et
   `migrations/202611110002_checkout_email_claim.sql` au projet Supabase Learn.
2. Déployer `learn-checkout`, `learn-stripe-webhook` et `learn-claim-checkout` depuis `apps/learn/supabase`
   avec la vérification JWT désactivée, comme indiqué dans `config.toml`.
3. Configurer `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` et `LEARN_SITE_URL`
   dans les secrets des Edge Functions. `LEARN_SITE_URL` vaut l'origine de Learn,
   par exemple `https://learn.altruisme.dev` (ou `http://localhost:5173` en local).
   La fonction webhook utilise également `SUPABASE_URL` et la clé secrète
   Supabase disponible dans l'environnement Edge Functions.
4. Déclarer dans Stripe un endpoint webhook vers
   `https://<project-ref>.supabase.co/functions/v1/learn-stripe-webhook`, abonné
   à `checkout.session.completed`. Utiliser le secret propre à cet endpoint.
5. Configurer le modèle Magic Link / Email OTP de Supabase Auth avec `{{ .Token }}`
   et vérifier l'envoi SMTP. Conserver `/activation` pour les anciennes invitations.
6. Tester avec Stripe en mode test : nouvel e-mail, compte existant, paiement
   annulé, onglet perdu, code e-mail erroné, jeton erroné, signature invalide et
   livraison répétée du webhook. Vérifier que le droit n'apparaît qu'après
   `payment_status=paid` et confirmation de l'adresse e-mail.

Stripe ne vérifie pas que l'acheteur possède l'adresse e-mail saisie pendant
Checkout. Le code e-mail prouve que le nouvel apprenant contrôle cette adresse
avant de créer son mot de passe et de réclamer l'achat en attente.

Le prix de 27 € TTC est défini côté serveur et vérifié dans le webhook. Ce dernier
accepte aussi les sessions à 97 € créées avant le changement de tarif pour que
les achats déjà lancés puissent être finalisés. La page `/paiement` affiche le
tarif actuel.
Les paramètres fiscaux, reçus et moyens de paiement doivent
être vérifiés dans la configuration du compte Stripe avant une mise en vente.

Les contenus payants sont placés dans des fichiers JavaScript protégés par le
Worker Cloudflare de Learn. Leur accès dépend d'un droit `seo` courant ; un
ancien build ou un document tiers partagé publiquement nécessite une vérification
distincte avant publication.

## Activation par invitation Supabase

La route `/activation` accepte la session issue d'un lien d'invitation Supabase.
Elle permet au nouvel apprenant de choisir son mot de passe avec
`supabase.auth.updateUser()`, puis vérifie son droit `seo` avant d'ouvrir la
formation. Un utilisateur sans droit reste sur `/acces` ; le simple fait de
définir un mot de passe n'accorde aucun accès payant.

Pour un test manuel sans Stripe, inviter une nouvelle adresse depuis
**Supabase Auth → Users** avec l'URL de redirection
`http://localhost:5173/activation`, et attribuer séparément le droit `seo` à
ce compte. Ajouter cette URL, ainsi que
`https://learn.altruisme.dev/activation`, aux Redirect URLs autorisées dans
Supabase Auth. L'invitation doit être envoyée par un service de confiance ou
depuis le tableau de bord Supabase : ne jamais utiliser de clé secrète dans
le navigateur. Si le lien a expiré, l'interface propose de demander un nouvel
envoi par e-mail à l'équipe Learn. Ce parcours est conservé pour les anciennes
invitations et les invitations manuelles ; il n'est plus utilisé pour un nouvel
achat Stripe.

## Ancienne confirmation de l'e-mail

La route `/confirmation-email` reste disponible pour les liens de confirmation
déjà envoyés avant le changement de parcours. Elle renvoie un compte confirmé
vers `/acces` ou directement vers la formation selon son droit d'accès.

Un compte confirmé ne reçoit aucun droit SEO automatiquement. Le droit reste
dans `learn_course_entitlements` et doit être accordé par un processus de
confiance après achat. Les e-mails d'authentification passent par la
configuration SMTP de Supabase Auth ; ne jamais placer ses identifiants dans
le navigateur ni dans le dépôt.
