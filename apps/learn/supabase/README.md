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
données. Le droit d'ouvrir la formation suit actuellement la convention de Learn :
une session Supabase authentifiée. Learn ne possède pas encore de registre
d'inscriptions par formation ; si des formations privées sont ajoutées, leurs
droits d'accès devront être vérifiés dans les routes **et** dans les politiques
RLS avant leur ouverture.

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
