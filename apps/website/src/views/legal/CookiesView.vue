<script setup lang="ts">
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'

function openCookieSettings() {
  window.dispatchEvent(new Event('open-cookie-settings'))
}
</script>

<template>
  <LegalPageLayout
    title="Gestion des cookies"
    description="Cette page explique comment Acquisition utilise les cookies et autres traceurs, ainsi que la manière dont tu peux gérer tes préférences."
    updated-at="19 août 2026"
  >
    <!-- Introduction -->
    <section>
      <h2>1. Qu’est-ce qu’un cookie ?</h2>

      <div class="mt-5 space-y-4">
        <p>
          Un cookie ou traceur est une technologie permettant de stocker ou de lire certaines
          informations sur ton appareil lorsque tu consultes un site internet.
        </p>

        <p>
          Certains traceurs sont nécessaires au fonctionnement du site. D’autres peuvent être
          utilisés pour afficher des contenus externes, mesurer l’audience ou proposer certaines
          fonctionnalités.
        </p>
      </div>
    </section>

    <!-- Categories -->
    <section>
      <h2>2. Quels cookies utilisons-nous ?</h2>

      <div class="mt-6 space-y-4">
        <!-- Necessary -->
        <article class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3>Cookies strictement nécessaires</h3>

              <p class="mt-2 text-sm leading-6 text-[#64706c]">
                Ces éléments sont nécessaires au fonctionnement du site ou à la fourniture d’un
                service que tu as demandé.
              </p>
            </div>

            <span
              class="w-fit shrink-0 rounded-full bg-[#4f7774]/10 px-3 py-1 text-xs font-semibold text-[#668c89]"
            >
              Toujours actifs
            </span>
          </div>

          <p class="mt-4 text-sm leading-6 text-[#78827e]">
            Par exemple, nous pouvons conserver ton choix concernant les cookies afin de ne pas te
            demander ton consentement à chaque page.
          </p>
        </article>

        <!-- External content -->
        <article class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3>Contenus et services externes</h3>

              <p class="mt-2 text-sm leading-6 text-[#64706c]">
                Certaines pages du site peuvent intégrer des services proposés par des plateformes
                tierces.
              </p>
            </div>

            <span
              class="w-fit shrink-0 rounded-full border border-[#4f7774]/15 bg-white/55 px-3 py-1 text-xs font-semibold text-[#64706c]"
            >
              Selon ton choix
            </span>
          </div>

          <ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-[#78827e]">
            <li>YouTube pour afficher certaines vidéos ;</li>

            <li>Calendly pour permettre la prise de rendez-vous ;</li>

            <li>d’autres services externes qui pourraient être ajoutés ultérieurement.</li>
          </ul>

          <p class="mt-4 text-sm leading-6 text-[#78827e]">
            Ces services peuvent traiter certaines informations techniques ou déposer leurs propres
            traceurs. Lorsqu’un consentement est requis, ils ne doivent être chargés qu’après ton
            accord.
          </p>
        </article>

        <!-- Analytics -->
        <article class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3>Mesure d’audience</h3>

              <p class="mt-2 text-sm leading-6 text-[#64706c]">
                Acquisition peut utiliser un outil de mesure d’audience afin de comprendre comment
                le site est utilisé et d’améliorer son contenu.
              </p>
            </div>

            <span
              class="w-fit shrink-0 rounded-full border border-[#4f7774]/15 bg-white/55 px-3 py-1 text-xs font-semibold text-[#64706c]"
            >
              Selon l’outil utilisé
            </span>
          </div>

          <p class="mt-4 text-sm leading-6 text-[#78827e]">
            Si un outil de mesure d’audience nécessitant ton consentement est utilisé, il sera
            ajouté aux préférences disponibles dans le gestionnaire de cookies.
          </p>
        </article>
      </div>
    </section>

    <!-- Consent -->
    <section>
      <h2>3. Comment fonctionne ton consentement ?</h2>

      <div class="mt-5 space-y-4">
        <p>
          Lors de ta première visite, un bandeau te permet de choisir si tu souhaites autoriser ou
          non les contenus et traceurs non essentiels.
        </p>

        <p>Tu peux notamment :</p>

        <ul class="list-disc space-y-2 pl-5">
          <li>accepter les catégories proposées ;</li>

          <li>refuser les cookies et contenus non nécessaires ;</li>

          <li>personnaliser ton choix ;</li>

          <li>revenir sur ta décision ultérieurement.</li>
        </ul>
      </div>
    </section>

    <!-- Preferences -->
    <section>
      <div
        class="relative overflow-hidden rounded-3xl border border-[#4f7774]/20 bg-gradient-to-b from-[#edf3f0] to-[#f7f2e9] p-6 sm:p-8"
      >
        <div
          class="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#4f7774]/15 blur-[80px]"
        />

        <div class="relative">
          <p class="text-sm font-semibold text-[#4f7774]">Tes préférences</p>

          <h2 class="mt-2">Tu peux changer d’avis à tout moment.</h2>

          <p class="mt-3 max-w-2xl text-sm leading-6 text-[#64706c]">
            Ouvre le gestionnaire de cookies pour consulter ou modifier les choix enregistrés sur
            ton appareil.
          </p>

          <button
            type="button"
            class="mt-6 inline-flex items-center justify-center rounded-xl bg-[#4f7774] px-5 py-3 text-sm font-semibold text-[#222826] transition hover:bg-[#4f7774] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f7774] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe7]"
            @click="openCookieSettings"
          >
            Modifier mes préférences cookies
          </button>
        </div>
      </div>
    </section>

    <!-- Retention -->
    <section>
      <h2>4. Combien de temps ton choix est-il conservé ?</h2>

      <div class="mt-5 space-y-4">
        <p>
          Ton choix concernant les cookies est enregistré localement afin d’éviter de te présenter
          le bandeau à chaque visite.
        </p>

        <p>
          Nous pouvons te demander de renouveler ton choix lorsque cela est nécessaire, notamment en
          cas d’évolution importante des services ou des catégories de traceurs utilisés sur le
          site.
        </p>
      </div>
    </section>

    <!-- Third parties -->
    <section>
      <h2>5. Services tiers</h2>

      <div class="mt-5 space-y-4">
        <p>
          Lorsque tu autorises certains contenus externes, des données peuvent être transmises aux
          fournisseurs concernés conformément à leurs propres conditions et politiques de
          confidentialité.
        </p>

        <p>Cela peut notamment concerner les services suivants :</p>

        <ul class="list-disc space-y-2 pl-5">
          <li>YouTube ;</li>
          <li>Calendly.</li>
        </ul>

        <p>
          Nous t’invitons à consulter les politiques de confidentialité de ces services pour obtenir
          davantage d’informations sur leurs pratiques.
        </p>
      </div>
    </section>

    <!-- Browser settings -->
    <section>
      <h2>6. Paramètres de ton navigateur</h2>

      <div class="mt-5 space-y-4">
        <p>
          Ton navigateur peut également te permettre de consulter, supprimer ou bloquer certains
          cookies directement depuis ses paramètres.
        </p>

        <p>
          Toutefois, le blocage de certains éléments strictement nécessaires peut empêcher certaines
          fonctionnalités du site de fonctionner correctement.
        </p>
      </div>
    </section>

    <!-- Privacy -->
    <section>
      <h2>7. Données personnelles</h2>

      <p class="mt-5">
        Pour en savoir davantage sur la manière dont nous traitons les données personnelles, tu peux
        consulter notre
        <RouterLink to="/politique-de-confidentialite"> politique de confidentialité </RouterLink>.
      </p>
    </section>

    <!-- Contact -->
    <section>
      <h2>8. Une question ?</h2>

      <p class="mt-5">
        Pour toute question concernant l’utilisation des cookies ou la protection de tes données, tu
        peux nous contacter à
        <a href="mailto:TON_EMAIL"> TON_EMAIL </a>.
      </p>
    </section>
  </LegalPageLayout>
</template>
