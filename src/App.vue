<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <div class="flex flex-col bg-palette-white dark:bg-palette-gray min-h-screen">
    <PageHeader />
    <div class="flex-1">
      <router-view />
    </div>
    <PageFooter />
  </div>
</template>
