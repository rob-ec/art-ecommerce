<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <div class="flex flex-col bg-white dark:bg-gray-600 min-h-screen">
    <PageHeader />
    <div class="">
      <router-view />
    </div>
  </div>
</template>
