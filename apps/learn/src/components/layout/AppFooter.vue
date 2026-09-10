<script setup lang="ts">
const currentYear = new Date().getFullYear()

const legalLinks = [
  {
    label: 'Mentions légales',
    href: 'https://altruisme.dev/mentions-legales',
  },
  {
    label: 'Politique de confidentialité',
    href: 'https://altruisme.dev/politique-de-confidentialite',
  },
  {
    label: 'Gestion des cookies',
    href: 'https://altruisme.dev/cookies',
  },
]
</script>

<template>
  <footer class="border-t border-zinc-200 bg-white">
    <div
      class="flex flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
    >
      <p class="text-sm text-zinc-500">© {{ currentYear }} Acquisition. Tous droits réservés.</p>

      <nav aria-label="Liens légaux">
        <ul class="flex flex-wrap gap-x-5 gap-y-2">
          <li v-for="link in legalLinks" :key="link.href">
            <a :href="link.href" class="text-sm text-zinc-500 transition hover:text-fuchsia-600">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
