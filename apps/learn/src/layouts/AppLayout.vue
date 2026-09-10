<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppTopbar from '@/components/layout/AppTopbar.vue'
</script>

<template>
  <div class="min-h-screen bg-zinc-100">
    <AppSidebar />

    <div class="flex min-h-screen flex-col md:pl-64">
      <AppTopbar />

      <main class="flex-1 py-8">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
