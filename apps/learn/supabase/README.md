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
