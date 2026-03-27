<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <div class="flex flex-col bg-palette-cream dark:bg-palette-cream-dark min-h-screen">
    <PageHeader />
    <div class="flex-1">
      <router-view />
    </div>
    <PageFooter />
  </div>
</template>
