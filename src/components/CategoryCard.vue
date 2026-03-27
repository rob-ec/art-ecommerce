<script setup lang="ts">
import { Category } from '@/model/Category'

defineProps<{
  category: Category
}>()
</script>
<template>
  <RouterLink :to="`/products?category=${category.slug}`">
    <article class="group relative rounded-2xl overflow-hidden aspect-square">
      <img
        :src="`/${category.image}`"
        class="absolute inset-0 w-full h-full object-cover :hover-bg-black/40"
      />

      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300"
      ></div>
      <h2
        class="relative text-white text-center uppercase flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition duration-300"
      >
        {{ category.name }}
      </h2>
    </article>
  </RouterLink>
</template>
