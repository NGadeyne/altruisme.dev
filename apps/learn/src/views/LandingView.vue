<template>
  <div class="flex min-h-screen flex-col bg-[#f4efe7] text-[#222826]">
    <header class="relative z-10 px-5 py-5 sm:px-8">
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="https://altruisme.dev"
          class="inline-flex items-center gap-3 text-sm font-semibold text-[#31413f]"
          ><span
            class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4f7774]/20 bg-[#4f7774]/10"
            >A.</span
          >Altruisme.DEV</a
        >
        <RouterLink
          to="/login"
          class="rounded-full bg-[#31413f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#222826]"
          >Se connecter</RouterLink
        >
      </div>
    </header>
    <main class="relative flex flex-1 items-center overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_48%,#e4ece8_100%)]"
      />
      <div
        class="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#4f7774]/15 blur-[100px]"
      />
      <div class="relative mx-auto w-full max-w-6xl">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7774]">Learn</p>
          <h1 class="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
            Apprendre en construisant.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-[#52605c] sm:text-xl">
            Un espace de formation et de pilotage pour transformer les connaissances en décisions,
            puis en progrès concrets.
          </p>
          <div class="mt-10">
            <RouterLink
              to="/login"
              class="inline-flex rounded-full bg-[#31413f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222826]"
              >Accéder à mon espace</RouterLink
            >
          </div>
        </div>
      </div>
    </main>
    <footer class="border-t border-white/10 bg-[#31413f] px-5 py-7 sm:px-8">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-[#aebfba]">© 2026 Altruisme.DEV. Tous droits réservés.</p>
        <nav aria-label="Liens légaux">
          <ul class="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a
                href="https://altruisme.dev/mentions-legales"
                class="text-[#b9cac5] transition hover:text-white"
                >Mentions légales</a
              >
            </li>
            <li>
              <a
                href="https://altruisme.dev/politique-de-confidentialite"
                class="text-[#b9cac5] transition hover:text-white"
                >Politique de confidentialité</a
              >
            </li>
            <li>
              <a
                href="https://altruisme.dev/cookies"
                class="text-[#b9cac5] transition hover:text-white"
                >Gestion des cookies</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>
