<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { defineComponent } from 'vue'

defineComponent({
  components: {
    ProductList,
  },
})
</script>

<template>
  <ProductList :category="String($route.query.category || '')" />
</template>
