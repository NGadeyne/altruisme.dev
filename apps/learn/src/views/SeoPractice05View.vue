<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
const practiceMinutes = getSeoPracticeMinutes(5)
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
          Mise en pratique — Réaliser un premier contrôle technique de son site
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 5 · Fondamentaux techniques</p>
        <div class="mt-5 flex flex-wrap gap-2 text-sm text-ink-soft">
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >environ {{ practiceMinutes }} minutes</span
          >
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >Exercice pratique</span
          >
        </div>
        <div class="mt-7 border-t border-petrol/15 pt-6">
          <h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
            Objectif pédagogique
          </h2>
          <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
            Vérifier les principaux éléments techniques de son site, identifier les éventuels
            problèmes d'exploration et de performance, puis sélectionner une première amélioration
            prioritaire.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Réaliser un premier contrôle technique de son site
        </h2>
        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Avant de commencer
          </h3>
          <p class="mt-4">
            Tu viens de terminer le module consacré aux fondamentaux techniques du référencement
            naturel. Tu comprends désormais le rôle de l'architecture d'un site, des redirections,
            des fichiers techniques et des performances dans l'expérience des visiteurs.
          </p>
          <p class="mt-4">
            Mais connaître ces éléments ne suffit pas. Pour savoir si ton site rencontre réellement
            des difficultés, il faut apprendre à les observer.
          </p>
          <p class="mt-4">
            C'est précisément l'objectif de cet exercice : réaliser un premier contrôle technique de
            ton site et identifier les points qui pourraient mériter une amélioration.
          </p>
          <p class="mt-4">
            Tu n'as pas besoin de savoir programmer ni de modifier la configuration de ton serveur.
            Nous allons simplement vérifier plusieurs éléments importants, puis conserver les
            observations qui pourront guider tes prochaines actions.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
            >
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Vérifie l’accès à tes pages stratégiques
          </h3>
          <p class="mt-4">
            Commence par reprendre les trois pages stratégiques que tu as identifiées dans les
            premiers modules.
          </p>
          <p class="mt-4">
            Ouvre ton site et essaie de retrouver chacune de ces pages en utilisant les menus ou les
            liens présents dans tes contenus. L'objectif est de vérifier qu'un visiteur peut les
            découvrir facilement, sans avoir besoin de connaître directement leur adresse.
          </p>
          <p class="mt-4">
            Profites-en pour examiner les liens qui permettent d'y accéder. Fonctionnent-ils
            correctement ? Certaines pages renvoient-elles vers des erreurs ou vers des contenus qui
            ne correspondent plus à leur intitulé ?
          </p>
          <p class="mt-4">
            Si tu remarques une difficulté, note simplement l'adresse concernée et ce qui te semble
            poser problème.
          </p>
          <p class="mt-4">
            Tu peux également reprendre l'outil d'inspection d'URL de Google Search Console pour
            vérifier si tes pages importantes présentent des restrictions d'exploration ou
            d'indexation.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Examine robots.txt et le sitemap
          </h3>
          <p class="mt-4">
            Nous allons maintenant vérifier deux éléments fréquemment utilisés par les moteurs de
            recherche : le fichier robots.txt et le sitemap XML.
          </p>
          <p class="mt-4">
            Dans ton navigateur, essaie d'ouvrir l'adresse de ton site suivie de /robots.txt. Si ce
            fichier est disponible, observe son contenu et cherche à repérer d'éventuelles
            restrictions concernant les robots d'exploration.
          </p>
          <p class="mt-4">
            Tu n'as pas besoin de comprendre immédiatement chaque instruction. L'objectif est
            surtout de vérifier qu'aucun blocage évident ne semble concerner les pages publiques que
            tu souhaites rendre visibles.
          </p>
          <p class="mt-4">
            Ouvre ensuite Google Search Console et consulte la section consacrée aux sitemaps. Si un
            sitemap est configuré, vérifie son adresse et les éventuels messages de traitement
            affichés.
          </p>
          <p class="mt-4">
            Rappelle-toi qu'un sitemap aide les moteurs de recherche à découvrir les URL, sans
            garantir leur indexation. De même, le fichier robots.txt sert à contrôler l'exploration,
            pas à garantir qu'une page sera absente des résultats.
          </p>
          <p class="mt-4">
            Ne modifie aucun de ces fichiers pour le moment. Une mauvaise configuration pourrait
            empêcher les moteurs de recherche d'accéder à certaines parties de ton site.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Observe les performances sur mobile
          </h3>
          <p class="mt-4">
            Ouvre maintenant
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              >PageSpeed Insights</a
            >
            et renseigne l'adresse de ta page d'accueil ou d'une page particulièrement importante.
          </p>
          <p class="mt-4">Lance l'analyse, puis consulte les résultats pour la version mobile.</p>
          <p class="mt-4">
            L'outil présente différents indicateurs permettant d'évaluer les performances et
            l'expérience utilisateur, notamment le chargement, la réactivité et la stabilité
            visuelle.
          </p>
          <p class="mt-4">
            Observe les éventuelles recommandations proposées. Une image trop lourde, des ressources
            qui ralentissent l'affichage ou certains éléments qui se déplacent pendant le chargement
            peuvent constituer des pistes d'amélioration.
          </p>
          <p class="mt-4">
            Distingue également les mesures issues d'un test simulé des éventuelles données
            provenant de visiteurs réels, lorsqu'elles sont disponibles.
          </p>
          <p class="mt-4">
            Ne cherche pas à obtenir immédiatement un score de 100. L'objectif est de comprendre les
            principales difficultés rencontrées par ta page et d'identifier celles qui pourraient
            réellement affecter tes visiteurs.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-4">
          <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
            Étape 4 — Choisis une amélioration prioritaire
          </h3>
          <p class="mt-4">
            Tu disposes maintenant de plusieurs observations sur l'accessibilité de tes pages, les
            fichiers techniques et les performances de ton site.
          </p>
          <p class="mt-4">
            Reprends ces informations et essaie de sélectionner jusqu'à trois points qui méritent
            ton attention.
          </p>
          <p class="mt-4">
            Il peut s'agir d'un lien qui ne fonctionne plus, d'une restriction d'exploration à
            vérifier ou d'une image particulièrement lourde qui ralentit l'affichage.
          </p>
          <p class="mt-4">
            Parmi ces constats, choisis une première amélioration prioritaire. Privilégie une action
            qui présente un intérêt réel et dont tu comprends suffisamment les conséquences.
          </p>
          <p class="mt-4">
            Si aucune difficulté particulière n'a été identifiée, note simplement que les contrôles
            réalisés n'ont révélé aucun problème évident.
          </p>
        </section>
        <section
          class="mt-12 rounded-2xl border border-petrol/15 bg-white p-6 sm:p-8"
          aria-labelledby="practice-finished"
        >
          <h3 id="practice-finished" class="text-xl font-semibold text-ink sm:text-2xl">
            Exercice terminé !
          </h3>
          <p class="mt-4">
            Tu disposes maintenant d'un premier état des lieux technique de ton site, avec les
            principales observations concernant son accessibilité, son exploration et ses
            performances.
          </p>
          <p class="mt-4">
            Ce diagnostic n'a pas vocation à remplacer un audit technique complet. Il te permet
            néanmoins de mieux comprendre les fondations de ton référencement et de repérer les
            difficultés qui méritent d'être approfondies.
          </p>
          <p class="mt-4">
            Conserve tes observations dans ta checklist d'audit SEO et reporte les éventuelles
            corrections identifiées dans « Mon plan d'action ».
          </p>
          <p class="mt-4">
            Tu sais désormais où chercher les principaux freins techniques et comment commencer à
            les traiter avec méthode.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Prochain module : Construire sa stratégie de contenu.</strong
            >
          </p>
          <div class="mt-6 border-t border-petrol/15 pt-5">
            <RouterLink
              :to="{ name: 'learning-plan', query: { action: 'seo_technical_checks' } }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
              >Voir l’action technique dans mon plan →</RouterLink
            >
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
