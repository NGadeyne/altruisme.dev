<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'

const practiceMinutes = getSeoPracticeMinutes(8)
</script>

<template>
  <BaseContainer>
    <div class="mx-auto max-w-3xl">
      <RouterLink
        to="/formations/seo"
        class="text-sm font-medium text-petrol-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >← Formation SEO</RouterLink
      >
      <header
        class="mt-8 rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn · Formation SEO
        </p>
        <h1 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Mise en pratique — Développer sa visibilité locale
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 8 · SEO local</p>
        <div class="mt-5 flex flex-wrap gap-2 text-sm text-ink-soft">
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >Environ {{ practiceMinutes }} minutes</span
          >
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5">Débutant</span>
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >Exercice pratique</span
          >
        </div>
        <div class="mt-7 border-t border-petrol/15 pt-6">
          <h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
            Objectif de la mise en pratique
          </h2>
          <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
            Vérifier sa visibilité locale dans Google Search et Google Maps, contrôler les
            informations de sa fiche d'établissement et de son site internet, puis identifier trois
            actions prioritaires pour développer sa présence auprès des clients de sa zone
            géographique.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="mt-10 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          Construis ton premier diagnostic SEO local
        </h2>
        <p class="mt-4">
          Dans ce module, tu as découvert comment Google Search et Google Maps permettent aux
          internautes de trouver des entreprises situées à proximité ou proposant des prestations
          dans une zone géographique. Tu as également appris à créer et optimiser une fiche
          d’établissement Google, à développer des avis clients authentiques et à mesurer les
          premières interactions générées par ta présence locale.
        </p>
        <p class="mt-4">
          Nous allons maintenant appliquer ces connaissances à ton activité. L’objectif n’est pas de
          réaliser un audit exhaustif ni de modifier immédiatement tous les éléments de ton
          référencement. Nous allons simplement vérifier comment ton entreprise peut être
          découverte, identifier les éventuelles difficultés et sélectionner les améliorations les
          plus pertinentes.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink"
            >À la fin de cet exercice, tu disposeras d’un premier diagnostic SEO local et de trois
            actions prioritaires à intégrer dans ton plan d’amélioration.</strong
          >
        </p>
        <p class="mt-4">
          Cette mise en pratique concerne principalement les entreprises qui accueillent
          physiquement des clients ou interviennent directement auprès d’eux. Si ton activité se
          déroule exclusivement en ligne, tu peux considérer les étapes liées à Google Business
          Profile comme non applicables et poursuivre la formation.
        </p>
        <h2 class="mt-10 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          Étape 1 — Vérifie ta visibilité dans Google et Google Maps
        </h2>
        <p class="mt-4">
          Commence par sélectionner trois recherches qui correspondent à ton activité et à ta zone
          géographique. Essaie de choisir des formulations naturelles, proches de celles que tes
          futurs clients pourraient utiliser. Par exemple, notre photographe professionnel à
          Bordeaux pourrait rechercher « photographe mariage Bordeaux », « photographe mariage
          Gironde » et « photographe mariage ».
        </p>
        <p class="mt-4">
          Effectue ces recherches dans Google Search et observe les résultats proposés. Ton site
          apparaît-il parmi les pages naturelles ? Google affiche-t-il des établissements
          accompagnés d’une carte ? Ton entreprise figure-t-elle parmi les professionnels présentés
          ? Ouvre ensuite Google Maps pour examiner les résultats locaux et les informations
          disponibles sur les établissements.
        </p>
        <p class="mt-4">
          Recherche également le nom exact de ton entreprise afin de vérifier si une fiche
          d’établissement existe déjà. Si tu en trouves une, assure-toi qu’elle correspond
          réellement à ton activité. Si aucune fiche n’apparaît, vérifie d’abord ton éligibilité
          avant d’envisager sa création.
        </p>
        <p class="mt-4">
          Ne cherche pas à tirer de conclusions définitives à partir d’une seule recherche. Les
          résultats locaux peuvent varier selon la localisation de l’utilisateur et le contexte.
          L’objectif est simplement de comprendre où ton entreprise apparaît et comment tes futurs
          clients peuvent la découvrir.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink">Résultat attendu :</strong> avoir observé trois
          recherches pertinentes et identifié la situation actuelle de ton entreprise dans Google
          Search et Google Maps.
        </p>
        <h2 class="mt-10 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          Étape 2 — Examine ta fiche Google et la cohérence de ton site
        </h2>
        <p class="mt-4">
          Si ton entreprise possède une fiche Google Business Profile, vérifie maintenant ses
          principales informations. Le nom correspond-il à celui de ton entreprise ? La catégorie
          principale représente-t-elle correctement ton activité ? Les coordonnées et le lien vers
          ton site sont-ils exacts ? L’adresse ou la zone desservie reflète-t-elle ton
          fonctionnement réel ? Les prestations et les photographies permettent-elles de comprendre
          ce que tu proposes ?
        </p>
        <p class="mt-4">
          Examine également les avis clients disponibles. Si tu possèdes déjà des commentaires,
          vérifie qu’ils reflètent de véritables expériences et identifie ceux auxquels une réponse
          professionnelle pourrait être utile. Si tu n’as pas encore de démarche de collecte d’avis,
          réfléchis au moment où tu pourrais proposer à tes clients de partager librement leur
          expérience, sans récompense ni demande de note particulière.
        </p>
        <p class="mt-4">
          Ouvre ensuite ta principale page de prestation. Vérifie que les visiteurs peuvent
          comprendre où tu exerces, quelles prestations tu proposes et comment te contacter. Si tu
          possèdes des contenus locaux, assure-toi qu’ils présentent de véritables informations
          utiles plutôt que de répéter les mêmes paragraphes avec différents noms de villes.
        </p>
        <p class="mt-4">
          Enfin, si ta fiche est validée, tu peux consulter sa section « Performances » et relever
          un indicateur adapté à ton activité, comme les clics vers ton site ou les clics sur le
          bouton d’appel. Ces données constituent un premier point de référence, mais ne
          correspondent pas automatiquement à des clients obtenus.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink">Résultat attendu :</strong> avoir vérifié les
          informations importantes de ta fiche et de ton site, identifié les éventuelles
          incohérences et relevé un indicateur de performance lorsqu’il est disponible.
        </p>
        <h2 class="mt-10 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          Étape 3 — Sélectionne tes trois actions prioritaires
        </h2>
        <p class="mt-4">
          À partir de tes observations, identifie maintenant les trois améliorations qui méritent le
          plus ton attention. Il peut s’agir de corriger une information erronée, de finaliser la
          validation de ta fiche, d’améliorer la présentation de tes prestations, de préparer une
          démarche d’avis clients ou de développer un contenu local réellement pertinent.
        </p>
        <p class="mt-4">
          Reprenons notre photographe à Bordeaux. Imaginons qu’il découvre un ancien numéro de
          téléphone sur sa fiche, qu’il ne possède aucune démarche pour demander des avis et que sa
          page commerciale ne présente pas ses reportages locaux les plus récents. Il pourrait alors
          sélectionner trois actions : corriger ses coordonnées, préparer un message de demande
          d’avis authentique et enrichir sa page avec des réalisations pertinentes.
        </p>
        <p class="mt-4">
          Pour chacune de tes actions, précise le résultat attendu. Par exemple, « Mon numéro
          professionnel est correct sur Google », « Mon message de demande d’avis est prêt » ou « Ma
          page de prestation présente trois réalisations locales ». Tu n’as pas besoin d’obtenir
          immédiatement davantage de visiteurs ou de meilleures positions pour considérer ces tâches
          comme pertinentes.
        </p>
        <p class="mt-4">
          Conserve ensuite tes trois priorités dans ton plan d’action SEO. Tu pourras les organiser
          avec les autres optimisations identifiées pendant la formation et examiner progressivement
          leurs résultats.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink">Résultat attendu :</strong> avoir sélectionné trois
          actions concrètes, adaptées à ton activité et accompagnées d’un critère permettant de
          vérifier leur réalisation.
        </p>
        <h2 class="mt-10 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          Ce que tu dois retenir
        </h2>
        <p class="mt-4">
          Tu viens de réaliser ton premier diagnostic SEO local. Tu sais désormais comment observer
          ta présence dans Google Search et Google Maps, vérifier les informations de ton
          établissement et identifier les améliorations qui peuvent aider tes futurs clients à
          découvrir ton entreprise.
        </p>
        <p class="mt-4">
          Tu as également appris à distinguer les problèmes concrets des opportunités
          d’amélioration. Une coordonnée incorrecte, une fiche incomplète ou une page commerciale
          peu explicite peuvent justifier une intervention. En revanche, une position locale
          variable ou un nombre d’avis inférieur à celui d’un concurrent ne constitue pas
          automatiquement un problème à corriger.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink"
            >Le bon objectif n’est pas de multiplier les optimisations, mais de développer une
            présence locale fiable, cohérente et utile aux personnes qui recherchent réellement tes
            services.</strong
          >
        </p>
        <p class="mt-4">
          Tu peux maintenant considérer cette mise en pratique comme terminée et conserver tes trois
          actions prioritaires pour ton futur plan SEO sur 90 jours.
        </p>
        <p class="mt-4">
          <strong class="font-semibold text-ink"
            >Prochain module : Être visible dans les moteurs IA (GEO).</strong
          >
        </p>
        <div class="mt-8 border-t border-petrol/15 pt-6">
          <RouterLink
            :to="{ name: 'learning-plan' }"
            class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
            >Ouvrir mon plan d'action →</RouterLink
          >
        </div>
      </article>
    </div>
  </BaseContainer>
</template>
