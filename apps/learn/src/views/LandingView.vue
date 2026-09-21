<script setup lang="ts">
import { PublicProductLanding } from '@altruisme/ui'

const landing = {
  product: 'Learn' as const,
  actionHref: '#formations', actionLabel: 'Découvrir les formations', tagline: 'Altruisme Learn — Comprendre. Construire. Maîtriser.',
  title: 'Apprenez en construisant pour de vrai.', subtitle: 'Pas en regardant 14 heures de vidéos.',
  intro: 'Vous apprenez à créer quelque chose de concret : un SaaS, une activité freelance, une automatisation, une infrastructure ou un produit utilisable.',
  promise: 'Des formations pratiques, pensées pour passer de la compréhension à l’exécution.',
  contextTitle: 'Vous n’avez probablement pas besoin d’une formation de plus.', context: 'Vous avez surtout besoin d’aller jusqu’au bout. Comprendre une notion est utile. Savoir l’appliquer sur un vrai projet l’est beaucoup plus.',
  contextPoints: ['Un projet terminé.', 'Une méthode comprise.', 'Des erreurs dans un cadre d’apprentissage.', 'La capacité de recommencer seul.'],
  riskTitle: 'Moins de cours. Plus de pratique.', risk: 'Une bonne formation ne devrait pas vous laisser avec 47 onglets ouverts et une liste de vidéos à regarder plus tard. Elle devrait vous permettre de dire : je sais maintenant comment faire ça. Et mieux encore : je l’ai fait.',
  methodTitle: 'Comprendre. Construire. Maîtriser.', method: [{ title: 'Comprendre', text: 'Les concepts essentiels : pourquoi, quand et quand ne pas les utiliser.' }, { title: 'Construire', text: 'Chaque apprentissage est appliqué à un cas concret.' }, { title: 'Maîtriser', text: 'Être capable de recommencer seul sur son propre projet.' }],
  capabilityTitle: 'Des formations construites autour d’un résultat.', capabilities: [{ title: 'Développer un SaaS', text: 'Idée, MVP, données, authentification, services, déploiement et première version en production.' }, { title: 'Devenir freelance', text: 'Positionnement, offre, prix, prospection, rendez-vous, vente et structuration.' }, { title: 'Automatiser son activité', text: 'Identifier les bons workflows, connecter les outils, APIs, webhooks et IA pertinente.' }],
  philosophyTitle: 'Vous ne trouverez pas tout. Et c’est volontaire.', philosophy: 'Learn ne cherche pas à devenir une bibliothèque de 800 formations. Produit, développement, freelance, Cloud, automatisation, observabilité et IA appliquée : moins de formations, mais des formations qu’on termine et qu’on utilise.',
  offerTitle: 'Des formations faites pour être utilisées.', offer: 'Modules courts, démonstrations, projet fil rouge, exercices, modèles, ressources, code, checklists et cas réels. L’objectif est que vous n’ayez rapidement plus besoin de la formation.',
  ownership: 'Vous gardez les méthodes, le code, les modèles et surtout la capacité d’appliquer ce que vous avez appris sur votre propre projet.',
  audience: ['Vous aimez apprendre en faisant.', 'Vous voulez construire un vrai projet.', 'Vous cherchez une compétence applicable immédiatement.', 'Vous acceptez de tester et parfois vous tromper.', 'Vous voulez repartir avec plus qu’un certificat.'],
  faq: [{ question: 'Les formations sont-elles réservées aux développeurs ?', answer: 'Non. Le niveau et les prérequis sont précisés pour chaque parcours.' }, { question: 'Faut-il savoir coder pour la formation SaaS ?', answer: 'Cela dépendra du parcours choisi.' }, { question: 'Est-ce uniquement de la vidéo ?', answer: 'Non. Les formations privilégient le projet, les exercices et les ressources utilisables.' }, { question: 'Les formations sont-elles mises à jour ?', answer: 'Elles le sont lorsque le fond évolue ou qu’une amélioration est utile.' }, { question: 'Puis-je ensuite faire appel à Builder ?', answer: 'Oui, les offres sont complémentaires mais indépendantes.' }],
  finalTitle: 'Apprendre est utile. Construire change beaucoup plus de choses.', finalText: 'Votre premier SaaS, votre première mission freelance, votre première automatisation ou votre premier déploiement : apprenez quelque chose que vous pourrez réellement utiliser.',
}
</script>

<template><PublicProductLanding v-bind="landing" /></template>
