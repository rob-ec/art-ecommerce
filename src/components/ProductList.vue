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
  <div class = "bg-palette-gray">
    <h2 class = "text-center mt-20">Nossos Produtos</h2>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-30.5">
      <ProductCard v-for="product in products" :product="product" :key="product.key" />
    </div>
  </div>
</template>
