<template>
  <section class="bg-mist py-20 sm:py-24 lg:py-28">
    <BaseContainer>
      <div class="mx-auto max-w-3xl">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Questions fréquentes</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tu as encore un doute ?
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Voici les questions qui reviennent le plus souvent avant de commencer.
          </p>
        </div>

        <div class="mt-12 divide-y divide-petrol/15 border-y border-petrol/15">
          <details v-for="item in faq" :key="item.question" class="group">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left sm:py-6">
              <span class="font-semibold leading-6 text-ink">{{ item.question }}</span>
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-petrol/15 bg-white/35 text-ink-soft transition group-open:rotate-45 group-open:text-petrol"
              >
                +
              </span>
            </summary>

            <div class="pb-6 pr-12">
              <p class="max-w-2xl text-sm leading-7 text-muted">{{ item.answer }}</p>
            </div>
          </details>
        </div>

        <div class="mt-10 text-center">
          <p class="text-sm leading-6 text-ink-soft">
            Tu as une situation particulière ?
            <a
              href="https://calendly.com/nicolas-gadeyne/faire-le-point-sur-ta-situation-freelance"
              class="font-semibold text-petrol transition hover:text-petrol-light"
            >
              On peut simplement en parler.
            </a>
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const faq = [
  {
    question: 'Est-ce adapté si mon métier est très niché ?',
    answer:
      'Oui. La méthode ne repose pas sur un métier précis mais sur ta capacité à rendre ton expertise lisible pour les bonnes entreprises. J’ai déjà accompagné des profils Product, développeurs, DevOps, Data, SIRH, No-Code ou encore CTO.',
  },
  {
    question: 'Est-ce que je vais devoir prospecter tous les jours ?',
    answer:
      'Non. La prospection n’est qu’un canal parmi d’autres. L’objectif est de construire une acquisition adaptée à ton profil entre plateformes, ESN, clients finaux, réseau, prospection et contenu.',
  },
  {
    question: 'Formation ou accompagnement complet : que choisir ?',
    answer:
      'La formation convient bien si tu es autonome et que tu veux appliquer la méthode à ton rythme. L’accompagnement complet est plus adapté si tu veux être challengé, gagner du temps et travailler directement sur ta situation avec moi.',
  },
  {
    question: 'Est-ce adapté si je travaille surtout avec des ESN ?',
    answer:
      'Oui. On peut construire une stratégie très orientée ESN si c’est le canal le plus pertinent pour ton métier. L’objectif n’est pas d’imposer un modèle, mais d’utiliser les canaux qui ont le plus de sens pour toi.',
  },
  {
    question: 'Mon profil Malt et mon LinkedIn sont déjà bien remplis. Est-ce utile ?',
    answer:
      'Un profil complet n’est pas forcément un profil qui convertit. On vérifie surtout si ton positionnement est clair, si les bons mots-clés sont présents et si ton parcours permet à un prospect de comprendre rapidement pourquoi te contacter.',
  },
  {
    question: 'Combien de temps faut-il pour appliquer la méthode ?',
    answer:
      'Les premières optimisations peuvent être mises en place rapidement. Le plus important est ensuite la régularité. Tu avances étape par étape sans avoir besoin de refaire tout ton personal branding en une semaine.',
  },
  {
    question: 'Est-ce que tu garantis que je vais signer une mission ?',
    answer:
      'Non. Personne ne peut garantir sérieusement une signature, car elle dépend aussi du marché, de ton expertise et de ton implication. Mon rôle est de t’aider à maximiser tes chances avec une stratégie claire, des supports solides et des actions ciblées.',
  },
]
</script>
