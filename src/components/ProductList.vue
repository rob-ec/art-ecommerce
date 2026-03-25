<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProducts } from '@/stores/products'
import ProductCard from './ProductCard.vue'
import SectionStandard from './SectionStandard.vue'
import SearchInput from './SearchInput.vue'
import FilterDropdown from './FilterDropdown.vue'

const store = useProducts()

const { products } = storeToRefs(store)

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class = "bg-palette-gray pt-10">
     <div class = "px-30.5"><SectionStandard title="Produtos" /></div>
           <div class="flex gap-2 px-30.5">
        <SearchInput title="Buscar" />
        <FilterDropdown title="Categorias" />
      </div>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-30.5 py-10">
      <ProductCard v-for="product in products" :product="product" :key="product.key" />
    </div>
  </div>
</template>
