<script setup lang="ts">
import CategoryList from '@/components/CategoryList.vue'
import SectionStandard from '@/components/SectionStandard.vue'
</script>
<template>
  <main class="min-h-100vh px-30.5 py-[64px]">
    <SectionStandard title="Categorias" />
    <CategoryList class="bg-palette-white dark:bg-palette-gray" />
  </main>
</template>
