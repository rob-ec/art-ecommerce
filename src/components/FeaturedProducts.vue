<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProducts } from '@/stores/products'
import ProductCard from './ProductCard.vue'

const store = useProducts()

const { products } = storeToRefs(store)

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class = "pt-10">
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <ProductCard v-for="product in products.slice(0, 4)" :product="product" :key="product.key" />
    </div>
  </div>
</template>
