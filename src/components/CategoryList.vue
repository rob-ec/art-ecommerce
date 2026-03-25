<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCategories } from '@/stores/categories'
import CategoryCard from './CategoryCard.vue'

const store = useCategories()

const { categories } = storeToRefs(store)

onMounted(() => {
  store.fetchCategories()
})
</script>
<template>
  <section class="bg-palette-gray-light min-h-80vh p-20 lg:px-30.5">
    <SectionStandard title="Categorias" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
      <CategoryCard v-for="category in categories" :category="category" :key="category.key" />
    </div>
  </section>
</template>
