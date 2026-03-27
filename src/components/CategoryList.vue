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
  <section class="py-8">
    <div class="max-w-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryCard v-for="category in categories" :category="category" :key="category.key" />
      </div>
    </div>
  </section>
</template>
