<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
const practiceMinutes = getSeoPracticeMinutes(9)
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
          Mise en pratique — Observer sa visibilité dans les moteurs IA
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 9 · GEO et moteurs IA</p>
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
            Réaliser un premier état des lieux de l'accessibilité de son site aux moteurs IA,
            observer sa présence dans les réponses générées et identifier une amélioration
            potentielle pour rendre ses contenus plus facilement exploitables et citables.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Observer sa visibilité dans les moteurs IA
        </h2>
        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Avant de commencer
          </h3>
          <p class="mt-4">
            Tu viens de terminer le module consacré à la visibilité dans les moteurs de recherche et
            les assistants utilisant l'intelligence artificielle. Tu comprends désormais que les
            internautes ne découvrent plus uniquement les entreprises à travers une liste de
            résultats Google.
          </p>
          <p class="mt-4">
            Ils peuvent également utiliser ChatGPT, Microsoft Copilot ou d'autres expériences de
            recherche IA pour obtenir des recommandations, comparer des solutions et découvrir des
            sources d'information.
          </p>
          <p class="mt-4">
            Mais apparaître dans ces réponses ne fonctionne pas exactement comme le positionnement
            traditionnel d'une page dans Google.
          </p>
          <p class="mt-4">
            Les systèmes peuvent sélectionner des sources différentes selon la question posée, les
            informations disponibles et le contexte de la recherche. Une entreprise peut être
            mentionnée dans une réponse sans que son site soit directement cité, tandis qu'une page
            peut servir de source sur un sujet précis sans que son entreprise soit recommandée.
          </p>
          <p class="mt-4">
            L'objectif de cet exercice est donc de réaliser un premier état des lieux de ta présence
            dans les moteurs IA, sans chercher à obtenir artificiellement une citation ni à garantir
            une future recommandation.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
            >
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Vérifie l’accessibilité d’une page importante
          </h3>
          <p class="mt-4">
            Commence par sélectionner une page importante de ton site, idéalement une page de
            prestation ou un guide qui apporte une réponse précise à une question de tes futurs
            clients.
          </p>
          <p class="mt-4">
            Vérifie qu'elle est accessible publiquement et qu'elle présente clairement son sujet.
          </p>
          <p class="mt-4">
            Consulte ensuite ton fichier robots.txt pour identifier les éventuelles restrictions
            d'exploration concernant les robots de recherche.
          </p>
          <p class="mt-4">
            Certains fournisseurs distinguent les robots utilisés pour découvrir les pages dans
            leurs fonctions de recherche de ceux employés pour collecter des contenus susceptibles
            de servir à l'entraînement de leurs modèles.
          </p>
          <p class="mt-4">
            C'est notamment le cas d'OpenAI, qui distingue OAI-SearchBot de GPTBot.
          </p>
          <p class="mt-4">
            Pour cet exercice, contente-toi de vérifier la configuration existante et de relever les
            éventuelles restrictions. L'accessibilité réelle peut également dépendre des protections
            de ton hébergeur ou de ton CDN.
          </p>
          <p class="mt-4">
            Ne modifie pas ces réglages sans comprendre leurs conséquences. Autoriser l'exploration
            ne garantit pas qu'une page sera reprise ou citée dans une réponse IA.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Teste trois questions dans un moteur IA
          </h3>
          <p class="mt-4">
            Choisis maintenant trois questions que tes futurs clients pourraient poser à un
            assistant IA.
          </p>
          <p class="mt-4">
            Imaginons que tu sois consultant SEO à Bordeaux. Tu pourrais explorer des demandes
            concernant le choix d'un consultant, les solutions à un problème d'indexation ou les
            critères permettant d'évaluer une prestation d'audit SEO.
          </p>
          <p class="mt-4">
            Ouvre un outil proposant une recherche sur le Web et, si possible, l'affichage de
            sources consultables.
          </p>
          <p class="mt-4">
            Pour chacune de tes trois questions, observe les informations présentées, les
            entreprises éventuellement mentionnées et les sources citées.
          </p>
          <p class="mt-4">
            Ton site apparaît-il ? L'une de tes pages est-elle utilisée comme source ? Des
            concurrents ou des publications spécialisées sont-ils mentionnés ?
          </p>
          <p class="mt-4">Note les observations qui te semblent intéressantes.</p>
          <p class="mt-4">
            Si ton site n'est pas présent, cela ne signifie pas nécessairement qu'il rencontre un
            problème. Les réponses peuvent varier selon les services, les formulations et les
            moments.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Examine les sources citées
          </h3>
          <p class="mt-4">
            Reprends les résultats de tes recherches et examine les sources présentées lorsqu'elles
            sont disponibles.
          </p>
          <p class="mt-4">
            Essaie de comprendre pourquoi ces pages peuvent être utiles pour répondre à la question.
          </p>
          <p class="mt-4">
            Apportent-elles une explication particulièrement claire ? Présentent-elles des données
            vérifiables ? Proposent-elles des exemples concrets, des informations précises ou une
            expertise identifiable ?
          </p>
          <p class="mt-4">Compare ensuite ces éléments avec le contenu de ta propre page.</p>
          <p class="mt-4">
            L'objectif n'est pas de copier les sources citées, ni de déduire une formule permettant
            d'être sélectionné automatiquement.
          </p>
          <p class="mt-4">
            Nous cherchons simplement à comprendre si ton site propose déjà une réponse claire,
            accessible et crédible aux questions importantes de ton public.
          </p>
          <p class="mt-4">
            Si tu disposes d'un accès à Bing Webmaster Tools, tu peux également consulter le rapport
            « AI Performance » lorsque des données sont disponibles. Il permet notamment d'observer
            certaines citations de tes pages dans les expériences IA couvertes par Microsoft.
          </p>
          <p class="mt-4">
            Ces données constituent des observations complémentaires. Elles ne représentent pas
            nécessairement l'ensemble de ta visibilité dans les assistants IA.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-4">
          <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
            Étape 4 — Choisis une amélioration et conserve tes observations
          </h3>
          <p class="mt-4">
            À partir de tes observations, sélectionne une page de ton site et demande-toi comment la
            rendre plus utile et plus compréhensible.
          </p>
          <p class="mt-4">
            Tu pourrais améliorer une définition trop vague, ajouter une explication concrète,
            préciser les caractéristiques d'une prestation ou rendre une information importante plus
            facilement accessible.
          </p>
          <p class="mt-4">
            Si tu identifies une information obsolète ou difficile à vérifier, sa correction peut
            également constituer une priorité.
          </p>
          <p class="mt-4">
            L'objectif n'est pas d'ajouter artificiellement des formulations destinées aux modèles
            de langage, mais d'améliorer la qualité des informations que ton site met à disposition.
          </p>
          <p class="mt-4">
            Conserve ensuite la date de tes recherches, les questions utilisées, le service
            consulté, les éventuelles citations et l'amélioration que tu souhaites réaliser.
          </p>
          <p class="mt-4">
            Ces informations constitueront ton premier point de comparaison pour les analyses
            futures.
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
            Tu disposes maintenant d'un premier état des lieux de ta visibilité dans les moteurs IA,
            avec trois recherches testées, les sources observées et une amélioration potentielle
            identifiée.
          </p>
          <p class="mt-4">
            Ce diagnostic ne garantit pas que ton entreprise apparaîtra dans les prochaines
            réponses. Il ne constitue pas non plus une mesure exhaustive de ta présence dans les
            différents assistants.
          </p>
          <p class="mt-4">
            En revanche, il te permet de comprendre comment tes contenus peuvent être découverts et
            utilisés comme sources, tout en développant une méthode d'observation que tu pourras
            reproduire plus tard.
          </p>
          <p class="mt-4">
            Conserve tes résultats dans ton tableau de suivi GEO et reporte l'amélioration
            sélectionnée dans « Mon plan d'action ».
          </p>
          <p class="mt-4">
            Tu disposes désormais d'une première méthode pour observer ta visibilité au-delà des
            moteurs de recherche traditionnels.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink">Prochain module : Mesurer et progresser.</strong>
          </p>
          <div class="mt-6 border-t border-petrol/15 pt-5">
            <RouterLink
              :to="{ name: 'learning-plan', query: { action: 'seo_geo_visibility' } }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
              >Ouvrir mon plan d’action →</RouterLink
            >
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
