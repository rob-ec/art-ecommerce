<script setup lang="ts">
import { useProduct } from '@/stores/single-product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useProduct()
const { product, error } = storeToRefs(store)

onMounted(() => {
  store.fetchProduct(route.params.id as string)
})
</script>

<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="product">
    <h1>{{ product.title }}</h1>
  </div>
</template>
