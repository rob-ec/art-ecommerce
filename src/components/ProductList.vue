<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useProducts } from '@/stores/products'
import ProductCard from './ProductCard.vue'
import SectionStandard from './SectionStandard.vue'
import SearchInput from './SearchInput.vue'
import FilterDropdown from './FilterDropdown.vue'
import { useRouter } from 'vue-router'

const store = useProducts()

const { products } = storeToRefs(store)

const props = defineProps({
  category: {
    type: String,
    default: '',
  },
})

const router = useRouter()
const selectedCategory = ref(props.category)

watch(
  () => props.category,
  (newCategory) => {
    selectedCategory.value = newCategory
    store.fetchProducts(newCategory || null)
  },
  { immediate: true }
)

watch(selectedCategory, (newCategory) => {
  if (newCategory !== props.category) {
    router.push({ query: { category: newCategory || undefined } })
  }
})
</script>

<template>
  <div class="pt-[100px]">
    <div class="px-30.5"><SectionStandard title="Produtos" /></div>
    <div class="flex gap-2 px-30.5">
      <SearchInput title="Buscar" />
      <FilterDropdown title="Categorias" v-model:selected="selectedCategory" />
    </div>
    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-30.5 py-10"
    >
      <ProductCard v-for="product in products" :product="product" :key="product.key" />
    </div>
  </div>
</template>
