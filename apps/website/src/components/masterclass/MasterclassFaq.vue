<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { masterclass } from '@/data/masterclass'

const registrationUrl =
  'https://calendly.com/nicolas-gadeyne/masterclass'

const faq = [
  {
    question: 'La masterclass est-elle vraiment gratuite ?',
    answer:
      'Oui. La participation est entièrement gratuite. Tu dois simplement réserver ta place pour recevoir les informations nécessaires pour rejoindre la session.',
  },
  {
    question: 'La masterclass est-elle en direct ?',
    answer:
      'Oui. La session se déroule en live et je garde volontairement du temps à la fin pour répondre aux questions.',
  },
  {
    question: 'Combien de temps dure la masterclass ?',
    answer: `La session dure environ ${masterclass.duration}. L’objectif est d’aller à l’essentiel sans transformer la masterclass en formation de trois heures.`,
  },
  {
    question: 'Est-ce adapté à tous les métiers IT ?',
    answer:
      'La méthode est pensée pour les freelances IT & Tech : Product, développement, Data, DevOps, SIRH, No-Code, management Tech et autres expertises proches.',
  },
  {
    question: 'Y aura-t-il un replay ?',
    answer:
      'Le live reste le meilleur moyen de profiter de la session et de poser tes questions. Si un replay est proposé pour cette édition, les inscrits recevront les informations par email.',
  },
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[620px] -translate-x-1/2 translate-y-1/2 rounded-full bg-petrol/8 blur-[140px]"
    />

    <BaseContainer>
      <div class="relative mx-auto max-w-3xl">
        <!-- Header -->
        <div class="text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Questions fréquentes
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Une dernière question avant

            <span class="text-ink-soft">
              de réserver ta place ?
            </span>
          </h2>
        </div>

        <!-- FAQ -->
        <div class="mt-12 divide-y divide-petrol/15 border-y border-petrol/15">
          <details
            v-for="item in faq"
            :key="item.question"
            class="group"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left"
            >
              <span class="font-semibold leading-6 text-ink">
                {{ item.question }}
              </span>

              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-petrol/8 text-petrol transition duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div class="pb-6 pr-12">
              <p class="text-sm leading-7 text-muted">
                {{ item.answer }}
              </p>
            </div>
          </details>
        </div>

        <!-- Final CTA -->
        <div
          class="relative isolate mt-14 overflow-hidden rounded-[2rem] border border-petrol/15 bg-mist px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          <div
            class="pointer-events-none absolute left-1/2 top-0 -z-10 h-52 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/12 blur-[90px]"
          />

          <div class="relative">
            <p
              class="text-sm font-semibold uppercase tracking-[0.16em] text-petrol"
            >
              Prochaine session
            </p>

            <h3
              class="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {{ masterclass.date }} à {{ masterclass.time }}
            </h3>

            <p
              class="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted"
            >
              Si septembre n’a pas démarré comme tu l’espérais,
              ne laisse pas encore un mois passer avant de remettre
              ta recherche de mission en mouvement.
            </p>

            <div class="mt-7">
              <BaseButton
                :href="registrationUrl"
                size="large"
              >
                Je réserve ma place
              </BaseButton>
            </div>

            <p class="mt-4 text-xs text-muted-light">
              Gratuit · En live · Questions / réponses
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
