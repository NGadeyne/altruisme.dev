<script setup lang="ts">
const links = [
  {
    label: 'Tableau de bord',
    to: '/',
  },
  {
    label: 'Prospects',
    to: '/prospects',
  },
  {
    label: 'Clients',
    to: '/clients',
  },
]
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-zinc-200 bg-white md:block">
    <div class="flex h-16 items-center border-b border-zinc-200 px-6">
      <RouterLink to="/" class="text-lg font-bold tracking-tight text-zinc-950">
        Coaching
      </RouterLink>
    </div>

    <nav class="p-4" aria-label="Navigation principale">
      <ul class="space-y-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
            active-class="bg-fuchsia-50 text-fuchsia-700"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
