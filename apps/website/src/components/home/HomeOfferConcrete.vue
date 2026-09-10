<template>
  <section id="accompagnement" class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-petrol/8 blur-[150px]"
    />

    <BaseContainer>
      <div class="relative">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">L’accompagnement</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tout ce qu’il faut pour
            <span class="text-ink-soft">passer réellement à l’action.</span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            La méthode te donne le chemin. Les contenus, ateliers et outils te permettent ensuite
            de l’appliquer à ta propre recherche de mission.
          </p>
        </div>

        <div class="mt-14 divide-y divide-petrol/15 border-y border-petrol/15">
          <article
            v-for="item in pillars"
            :key="item.number"
            class="grid gap-6 py-8 lg:grid-cols-[90px_0.9fr_1.1fr] lg:gap-10 lg:py-10"
          >
            <div>
              <span
                class="flex h-11 w-11 items-center justify-center rounded-2xl border border-petrol/20 bg-petrol/8 text-sm font-bold text-petrol"
              >
                {{ item.number }}
              </span>
            </div>

            <div>
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-2xl font-bold tracking-tight text-ink">{{ item.title }}</h3>
                <span
                  class="rounded-full border px-3 py-1 text-xs font-medium"
                  :class="
                    item.premium
                      ? 'border-petrol/25 bg-petrol/10 text-petrol'
                      : 'border-petrol/15 bg-white/45 text-ink-soft'
                  "
                >
                  {{ item.badge }}
                </span>
              </div>

              <p class="mt-2 text-base font-medium text-petrol-dark">{{ item.subtitle }}</p>
              <p class="mt-3 text-sm leading-6 text-muted">{{ item.description }}</p>
            </div>

            <div>
              <ul class="grid gap-3 sm:grid-cols-2">
                <li
                  v-for="detail in item.details"
                  :key="detail"
                  class="flex items-start gap-3 text-sm leading-6 text-ink-soft"
                >
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
                  <span>{{ detail }}</span>
                </li>
              </ul>

              <p class="mt-5 border-t border-petrol/12 pt-5 text-sm font-medium leading-6 text-ink-soft">
                {{ item.footer }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-12 grid gap-8 rounded-3xl border border-petrol/15 bg-sand/70 p-7 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <span class="inline-flex rounded-full border border-petrol/20 bg-petrol/8 px-3 py-1.5 text-xs font-semibold text-petrol">
              Quelques exemples
            </span>

            <h3 class="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Des ateliers basés sur
              <span class="text-ink-soft">de vraies situations.</span>
            </h3>

            <p class="mt-4 max-w-lg text-sm leading-6 text-muted sm:text-base">
              Pas de théorie abstraite. Les ateliers montrent comment réaliser concrètement les
              actions utiles pour développer ton activité.
            </p>
          </div>

          <ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <li v-for="workshop in workshops" :key="workshop" class="flex items-start gap-3">
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-xs font-semibold text-petrol"
              >
                ✓
              </span>
              <span class="text-sm font-medium leading-6 text-petrol-dark">{{ workshop }}</span>
            </li>
          </ul>
        </div>

        <div class="mx-auto mt-10 max-w-4xl border-t border-petrol/15 pt-10 text-center">
          <p class="text-xl font-semibold leading-8 text-ink sm:text-2xl">
            Tu ne repars pas simplement avec des vidéos à regarder.
          </p>
          <p class="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
            Tu repars avec une méthode, les outils pour l’exécuter et, avec l’accompagnement complet,
            quelqu’un avec qui travailler directement sur tes décisions et tes opportunités.
          </p>

          <BaseButton href="#offres" size="large" class="mt-7">
            Découvrir les deux formules
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const pillars = [
  {
    number: '01',
    title: 'Formation',
    subtitle: 'Apprends la méthode à ton rythme.',
    badge: 'Toutes les formules',
    description:
      'Retrouve tout le parcours Fondations, Accélération et Signature dans une formation structurée pour avancer sans te disperser.',
    details: ['Positionnement & offre', 'Malt, LinkedIn & CV', 'Prospection & contenu', 'Qualification & signature'],
    footer: 'Tu avances étape par étape et sais toujours quoi travailler ensuite.',
    premium: false,
  },
  {
    number: '02',
    title: 'Ateliers pratiques',
    subtitle: 'Regarde comment faire concrètement.',
    badge: 'Toutes les formules',
    description:
      'Des replays centrés sur des actions précises pour passer rapidement de la compréhension à l’exécution.',
    details: ['Ciblage de prospects', 'Audits de profils', 'Messages de prospection', 'Création de contenu'],
    footer: 'Tu peux reproduire directement les méthodes présentées sur ta propre activité.',
    premium: false,
  },
  {
    number: '03',
    title: 'Pilotage',
    subtitle: 'Transforme ta stratégie en routine.',
    badge: 'Toutes les formules',
    description:
      'Un espace simple pour garder une vision claire de ta recherche de mission et maintenir un rythme régulier.',
    details: ['Pipeline d’opportunités', 'Suivi des prospects', 'Actions quotidiennes', 'Dashboard de résultats'],
    footer: 'Pas de CRM compliqué : uniquement les informations utiles pour décider quoi faire ensuite.',
    premium: false,
  },
  {
    number: '04',
    title: 'Accompagnement 1:1',
    subtitle: 'On travaille directement sur ton cas.',
    badge: 'Accompagnement complet',
    description:
      'Tu bénéficies de rendez-vous individuels pour adapter la méthode à ton métier, ton marché et les situations que tu rencontres.',
    details: ['Audits Malt, LinkedIn & CV', 'Ciblage & stratégie', 'Préparation des rendez-vous', 'TJM & négociation'],
    footer: 'Tu repars de chaque échange avec des décisions claires et les prochaines actions à réaliser.',
    premium: true,
  },
]

const workshops = [
  'Construire une liste de 50 prospects qualifiés',
  'Auditer et optimiser un profil freelance',
  'Construire une séquence de prospection',
  'Créer du contenu qui rassure et attire',
  'Structurer une routine d’acquisition',
  'Analyser son pipeline et ses résultats',
]
</script>
