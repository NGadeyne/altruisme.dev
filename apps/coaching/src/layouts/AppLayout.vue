<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppTopbar from '@/components/layout/AppTopbar.vue'
import AppToast from '@/components/ui/AppToast.vue'
</script>

<template>
  <div class="min-h-screen bg-zinc-100">
    <AppSidebar />

    <div class="min-h-screen md:pl-64">
      <AppTopbar />

      <main class="py-8">
        <slot />
      </main>
    </div>

    <AppToast />
  </div>
</template>
