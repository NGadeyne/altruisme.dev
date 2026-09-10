<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const currentYear = new Date().getFullYear()

const navigationLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Guides', to: '/guides' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
  { label: 'Gestion des cookies', to: '/cookies' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicolas-gadeyne/',
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@altruimsedev',
    icon: 'youtube',
  },
]
</script>

<template>
  <footer class="border-t border-white/10 bg-[#31413f]">
    <BaseContainer class="py-12 sm:py-14">
      <!-- Main footer -->
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <!-- Brand -->
        <div>
          <RouterLink to="/" class="group inline-flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"
            >
              <span class="font-bold !text-[#d8e7e3]"> A </span>
            </div>

            <div class="leading-tight">
              <p
                class="text-sm font-bold tracking-tight !text-white transition group-hover:!text-[#d8e7e3]"
              >
                Acquisition
              </p>

              <p class="mt-0.5 text-xs !text-[#b9cac5]">Freelance IT & Tech</p>
            </div>
          </RouterLink>

          <p class="mt-5 max-w-md text-sm leading-6 text-[#c8d5d1]">
            Une méthode complète pour clarifier ton positionnement, créer plus d’opportunités et
            signer ta prochaine mission freelance.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <p class="text-sm font-semibold !text-white">Navigation</p>

          <ul class="mt-4 space-y-2.5">
            <li v-for="link in navigationLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm font-medium !text-[#c6ded8] transition hover:!text-[#c6ded8]"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Socials -->
        <div>
          <p class="text-sm font-semibold !text-white">Suivre Acquisition</p>

          <div class="mt-4 flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-10 items-center justify-center rounded-xl border border-[#4f7774]/15 bg-white/45 !text-[#c8d5d1] transition hover:border-[#4f7774]/25 hover:bg-[#4f7774]/10 hover:!text-[#c6ded8]"
            >
              <!-- LinkedIn -->
              <svg
                v-if="social.icon === 'linkedin'"
                viewBox="0 0 24 24"
                class="size-5"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM19.5 12.98c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.63 1-3.09 1.7V8.5H9.09V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.8V19h3.37v-6.02Z"
                />
              </svg>

              <!-- Instagram -->
              <svg
                v-else-if="social.icon === 'instagram'"
                viewBox="0 0 24 24"
                class="size-5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>

              <!-- YouTube -->
              <svg
                v-else-if="social.icon === 'youtube'"
                viewBox="0 0 24 24"
                class="size-5"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"
                />
              </svg>
            </a>
          </div>

          <a
            href="/#vsl"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold !text-[#d8e7e3] transition hover:!text-[#c6ded8]"
          >
            Trouver ma prochaine mission

            <span aria-hidden="true"> → </span>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-[#aebfba]">© {{ currentYear }} Acquisition. Tous droits réservés.</p>

        <nav aria-label="Liens légaux">
          <ul class="flex flex-wrap gap-x-5 gap-y-2">
            <li v-for="link in legalLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm !text-[#b9cac5] transition hover:!text-[#c6ded8]"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </BaseContainer>
  </footer>
</template>
