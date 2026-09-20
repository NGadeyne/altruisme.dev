# Ajouter un guide

1. Créer un dossier de contenu avec un fichier TypeScript par section, conforme à `GuideSection` (`src/types/guide.ts`). Exporter les sections dans leur ordre de lecture depuis `index.ts`.
2. Ajouter les métadonnées dans `src/data/guides/index.ts` et une fonction `loadSections` utilisant un import dynamique. Le catalogue alimente les cartes, les routes et les métadonnées de partage.
3. Utiliser `status: 'soon'` tant que le contenu n'est pas prêt. Passer à `available` seulement avec un contenu complet. Ajouter alors l'URL canonique et la date de modification dans `public/sitemap.xml`.
4. Exécuter le build et les tests de `website`, puis vérifier le guide sur mobile et desktop.

Les URL sont indépendantes des éditions : `/guides/freelance`, par exemple. Conserver les identifiants des sections et sous-sections après publication pour préserver les liens entrants.

Le gabarit `GuideView.vue` fournit l'en-tête, le sommaire, le rendu et la navigation. Aucun composant de page spécifique au sujet n'est nécessaire. Les textes ne contiennent pas de classes CSS.

Les blocs acceptent paragraphes, questions, listes, encadrés, citations et tableaux. Le texte inline accepte le gras `**texte**` et les liens HTTPS/HTTP `[libellé](url)`. Le HTML est échappé. Une sous-section `kind: 'takeaway'` est un encadré de synthèse, indépendamment de son titre.

Les dates décrivent les mises à jour éditoriales effectives ; ne pas les actualiser automatiquement à chaque build.
