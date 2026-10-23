<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
const practiceMinutes = getSeoPracticeMinutes(7)
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
          Mise en pratique — Identifier une première opportunité de backlink
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 7 · Autorité et backlinks</p>
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
            Identifier cinq sites susceptibles de faire connaître son activité, évaluer leur
            pertinence et sélectionner une première opportunité de lien externe à développer.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Identifier une première opportunité de backlink
        </h2>
        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Avant de commencer
          </h3>
          <p class="mt-4">
            Tu viens de terminer le module consacré à l'autorité et aux backlinks. Tu comprends
            désormais pourquoi les liens provenant d'autres sites peuvent contribuer à la découverte
            de tes contenus, à ta notoriété et, dans certains cas, à ton référencement naturel.
          </p>
          <p class="mt-4">
            Mais développer son autorité ne consiste pas à accumuler le plus grand nombre de liens
            possible.
          </p>
          <p class="mt-4">
            Un lien provenant d'un site pertinent, dans un contexte éditorial cohérent, peut
            présenter davantage d'intérêt qu'une multitude de liens placés sur des pages sans
            véritable rapport avec ton activité.
          </p>
          <p class="mt-4">
            L'objectif de cet exercice est donc simple : identifier cinq sites qui pourraient
            légitimement mentionner ton entreprise ou l'un de tes contenus, puis sélectionner une
            première opportunité à explorer.
          </p>
          <p class="mt-4">
            Tu n'as pas besoin d'acheter des liens ni de lancer une campagne de prospection. Nous
            allons commencer par identifier les relations et les ressources qui pourraient avoir un
            intérêt réel.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
            >
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Observe tes liens existants
          </h3>
          <p class="mt-4">
            Commence par ouvrir Google Search Console et consulte le rapport consacré aux liens,
            lorsque les informations sont disponibles.
          </p>
          <p class="mt-4">
            Observe les éventuels sites externes qui possèdent des liens vers ton domaine et les
            pages auxquelles ils renvoient.
          </p>
          <p class="mt-4">
            Essaie de comprendre d'où proviennent ces mentions. S'agit-il d'un partenaire, d'un
            annuaire professionnel, d'un article de presse ou d'une autre ressource ?
          </p>
          <p class="mt-4">
            L'objectif n'est pas de calculer un score d'autorité ni d'évaluer tous les backlinks de
            ton site.
          </p>
          <p class="mt-4">
            Nous cherchons simplement à découvrir les premiers liens existants et à comprendre dans
            quels contextes d'autres sites peuvent parler de ton activité.
          </p>
          <p class="mt-4">
            Si ton site ne possède encore aucun backlink visible dans Search Console, ce n'est pas
            un problème pour terminer cet exercice.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Identifie cinq sites pertinents
          </h3>
          <p class="mt-4">
            Réfléchis maintenant aux entreprises, organisations et publications qui évoluent dans
            ton domaine.
          </p>
          <p class="mt-4">
            Imaginons que tu sois photographe professionnel à Bordeaux. Tu pourrais identifier des
            lieux de réception avec lesquels tu travailles, des organisateurs de mariage, des
            prestataires événementiels ou des médias locaux qui présentent régulièrement des
            professionnels de la région.
          </p>
          <p class="mt-4">
            Si tu proposes du conseil ou des services numériques, tu pourrais plutôt rechercher des
            partenaires professionnels, des publications spécialisées ou des organisations qui
            partagent des ressources destinées à ton public.
          </p>
          <p class="mt-4">
            L'important est d'identifier des sites dont l'activité ou l'audience possède un lien
            réel avec la tienne.
          </p>
          <p class="mt-4">
            Pour chacun, note son nom, son adresse et la raison pour laquelle une mention pourrait
            être pertinente.
          </p>
          <p class="mt-4">
            Ne sélectionne pas un site uniquement parce qu'un outil lui attribue un score d'autorité
            élevé.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Évalue les opportunités de mention
          </h3>
          <p class="mt-4">
            Reprends les cinq sites que tu viens d'identifier et demande-toi pourquoi ils pourraient
            naturellement faire référence à ton activité.
          </p>
          <p class="mt-4">
            Un partenaire pourrait présenter les professionnels avec lesquels il collabore. Une
            publication spécialisée pourrait s'intéresser à une étude originale que tu as réalisée.
            Une organisation professionnelle pourrait proposer une liste de ressources utiles à ses
            membres.
          </p>
          <p class="mt-4">
            Dans chacun de ces cas, le lien possède une justification indépendante de la volonté
            d'améliorer les positions dans Google.
          </p>
          <p class="mt-4">C'est cette logique que nous souhaitons privilégier.</p>
          <p class="mt-4">
            Évite les propositions reposant uniquement sur l'achat de liens destinés à manipuler les
            classements, les échanges systématiques ou la multiplication artificielle de mentions
            sur des sites sans rapport avec ton activité.
          </p>
          <p class="mt-4">
            L'objectif est de construire progressivement une présence crédible, pas de fabriquer des
            signaux de popularité.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-4">
          <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
            Étape 4 — Choisis une première action
          </h3>
          <p class="mt-4">
            Parmi les cinq sites identifiés, choisis celui qui semble présenter l'opportunité la
            plus naturelle.
          </p>
          <p class="mt-4">
            Essaie de formuler une action concrète. Tu pourrais, par exemple, proposer à un
            partenaire de présenter une collaboration existante, suggérer une ressource réellement
            utile à une publication spécialisée ou préparer un contenu susceptible d'intéresser une
            communauté professionnelle.
          </p>
          <p class="mt-4">
            Conserve le nom du site, l'intérêt de cette opportunité et la prochaine étape à
            réaliser.
          </p>
          <p class="mt-4">
            Tu n'as pas besoin de contacter immédiatement les cinq sites. Une seule opportunité bien
            préparée suffit pour commencer.
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
            Tu disposes maintenant d'une première sélection de cinq sites pertinents, ainsi que
            d'une opportunité de lien externe à explorer en priorité.
          </p>
          <p class="mt-4">
            Ce travail constitue le point de départ d'une stratégie de netlinking progressive et
            cohérente avec ton activité.
          </p>
          <p class="mt-4">
            Il ne garantit pas l'obtention d'un backlink ni une amélioration immédiate de ton
            référencement. En revanche, il te permet de dépasser la logique de quantité pour
            identifier des relations et des mentions qui peuvent apporter une véritable valeur.
          </p>
          <p class="mt-4">
            Conserve ta sélection dans ton document de suivi et reporte la première action envisagée
            dans « Mon plan d'action ».
          </p>
          <p class="mt-4">
            Tu sais désormais comment commencer à développer ton autorité en recherchant des liens
            pertinents, plutôt qu'en multipliant des backlinks sans véritable intérêt.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Prochain module : Développer sa visibilité locale.</strong
            >
          </p>
          <div class="mt-6 border-t border-petrol/15 pt-5">
            <RouterLink
              :to="{ name: 'learning-plan', query: { action: 'seo_backlink_opportunities' } }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
              >Ouvrir mon plan d’action →</RouterLink
            >
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
