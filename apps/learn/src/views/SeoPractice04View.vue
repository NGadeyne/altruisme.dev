<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
const practiceMinutes = getSeoPracticeMinutes(4)
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
          Mise en pratique — Optimiser une page existante et documenter les modifications
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 4 · Optimiser tes pages</p>
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
            Optimiser une page stratégique en améliorant ses titres, son contenu et ses liens
            internes, puis conserver une trace des modifications pour pouvoir suivre leur évolution.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Optimiser une page existante et documenter les modifications
        </h2>
        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Passer des bonnes pratiques à une première optimisation complète
          </h3>
          <p class="mt-4">
            Tu viens de terminer le module consacré à l&#x27;optimisation des pages. Tu sais
            désormais améliorer un title et une meta description, organiser les titres d&#x27;un
            contenu, répondre plus précisément aux intentions de recherche et créer des liens
            pertinents entre les pages de ton site.
          </p>
          <p class="mt-4">
            Mais pour obtenir un résultat cohérent, ces différentes optimisations doivent
            fonctionner ensemble. Un title descriptif ne suffit pas si le contenu reste trop vague.
            De même, une page complète peut être difficile à découvrir si aucun lien interne ne
            permet d&#x27;y accéder facilement.
          </p>
          <p class="mt-4">
            L&#x27;objectif de cet exercice est donc de réaliser une première optimisation complète
            sur une page importante de ton site, puis de documenter les modifications effectuées.
          </p>
          <p class="mt-4">
            Tu n&#x27;as pas besoin de réécrire entièrement ton contenu ni de maîtriser des
            techniques avancées. Nous allons simplement reprendre les éléments étudiés dans ce
            module et les appliquer à une page que tu souhaites rendre plus utile et plus
            compréhensible.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
            >
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Reprends une page stratégique
          </h3>
          <p class="mt-4">
            Commence par sélectionner l&#x27;une des pages importantes que tu as identifiées dans
            les premiers modules de cette formation.
          </p>
          <p class="mt-4">
            Il peut s&#x27;agir de ta page d&#x27;accueil, d&#x27;une page de prestation, d&#x27;une
            fiche produit ou d&#x27;un guide destiné à attirer de futurs clients.
          </p>
          <p class="mt-4">
            Ouvre ensuite ton tableau de mots-clés et retrouve l&#x27;expression principale ainsi
            que l&#x27;intention de recherche associées à cette page.
          </p>
          <p class="mt-4">
            Avant de modifier quoi que ce soit, rappelle-toi ce que la personne souhaite accomplir
            lorsqu&#x27;elle effectue cette recherche. Cherche-t-elle une information, une
            comparaison ou une prestation particulière ?
          </p>
          <p class="mt-4">
            Cette intention doit servir de référence pour l&#x27;ensemble de tes optimisations.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Vérifie les principaux éléments SEO
          </h3>
          <p class="mt-4">
            Examine maintenant ta page avec les connaissances acquises pendant ce module.
          </p>
          <p class="mt-4">
            Commence par observer son title, sa meta description et son H1. Permettent-ils de
            comprendre clairement le sujet ? Le vocabulaire utilisé correspond-il aux besoins de tes
            futurs visiteurs ?
          </p>
          <p class="mt-4">
            Relis ensuite les principaux paragraphes. Les informations sont-elles suffisamment
            précises ? Certaines questions importantes restent-elles sans réponse ? Des passages
            trop génériques pourraient-ils être remplacés par des explications plus concrètes ?
          </p>
          <p class="mt-4">
            Enfin, examine les liens internes. Ta page est-elle accessible depuis d&#x27;autres
            contenus pertinents ? Propose-t-elle des liens utiles permettant aux visiteurs
            d&#x27;approfondir un sujet ou de découvrir une prestation complémentaire ?
          </p>
          <p class="mt-4">
            À partir de ces observations, sélectionne deux ou trois améliorations qui te semblent
            réellement utiles.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Réalise tes optimisations
          </h3>
          <p class="mt-4">Il est maintenant temps de passer à l&#x27;action.</p>
          <p class="mt-4">
            Modifie les éléments sélectionnés dans ton outil de création de site. Tu peux notamment
            clarifier le title, améliorer un paragraphe important ou ajouter un lien interne depuis
            une page pertinente.
          </p>
          <p class="mt-4">
            Veille à conserver une cohérence entre l&#x27;intention de recherche, les titres et les
            informations présentées.
          </p>
          <p class="mt-4">
            Si tu ajoutes un lien interne, utilise un texte suffisamment descriptif pour permettre
            au visiteur de comprendre vers quel contenu il sera dirigé.
          </p>
          <p class="mt-4">
            Évite de répéter artificiellement tes mots-clés ou d&#x27;ajouter des liens simplement
            pour augmenter leur nombre.
          </p>
          <p class="mt-4">
            Ne modifie pas l&#x27;URL de ta page pour cet exercice. Un changement d&#x27;adresse
            nécessite des précautions particulières, notamment concernant les redirections et les
            liens existants.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-4">
          <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
            Étape 4 — Documente les modifications
          </h3>
          <p class="mt-4">
            Une fois les optimisations réalisées, ouvre le modèle d&#x27;optimisation de page SEO
            fourni avec la formation.
          </p>
          <p class="mt-4">
            Renseigne l&#x27;adresse de la page, sa recherche principale et les modifications
            effectuées.
          </p>
          <p class="mt-4">
            Essaie de conserver une version avant/après des éléments les plus importants. Tu peux,
            par exemple, noter l&#x27;ancien et le nouveau title, le passage de contenu amélioré ou
            les liens internes ajoutés.
          </p>
          <p class="mt-4">Indique également la date des modifications.</p>
          <p class="mt-4">
            Si Google Search Console possède déjà suffisamment de données, tu peux relever les
            performances actuelles de la page afin de disposer d&#x27;un premier point de
            comparaison.
          </p>
          <p class="mt-4">
            Ces informations ne permettront pas d&#x27;attribuer automatiquement une future
            progression à tes modifications, mais elles pourront t&#x27;aider à suivre
            l&#x27;évolution du contenu dans le temps.
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
            Tu viens de réaliser une première optimisation complète sur une page stratégique de ton
            site.
          </p>
          <p class="mt-4">
            Tu as amélioré sa présentation, vérifié qu&#x27;elle répond aux attentes des visiteurs
            et examiné les liens qui permettent de la découvrir ou d&#x27;approfondir son contenu.
          </p>
          <p class="mt-4">
            Surtout, tu as conservé une trace de ton travail, ce qui te permettra de reprendre cette
            page plus tard sans oublier les modifications déjà effectuées.
          </p>
          <p class="mt-4">
            Tu n&#x27;as pas besoin d&#x27;attendre une amélioration de tes positions pour
            considérer cet exercice comme terminé. Le référencement naturel demande du temps, et les
            performances dépendent de nombreux facteurs.
          </p>
          <p class="mt-4">
            Conserve ton document d&#x27;optimisation et vérifie que les actions correspondantes
            sont à jour dans « Mon plan d&#x27;action ».
          </p>
          <p class="mt-4">
            Tu sais désormais optimiser une page avec méthode, en partant des besoins de tes
            visiteurs plutôt qu&#x27;en appliquant des modifications au hasard.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Prochain module : Maîtriser les fondamentaux techniques.</strong
            >
          </p>
          <div class="mt-6 border-t border-petrol/15 pt-5">
            <RouterLink
              :to="{ name: 'learning-plan' }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
              >Voir les actions dans mon plan →</RouterLink
            >
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
