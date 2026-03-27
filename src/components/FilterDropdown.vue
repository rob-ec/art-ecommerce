<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCategories } from '@/stores/categories'

const store = useCategories()

const { categories } = storeToRefs(store)

onMounted(() => {
  store.fetchCategories()
})

const emit = defineEmits(['update:selected'])

defineProps({
  selected: {
    type: String,
    default: '',
  },
})

function handleChange(event: Event) {
  emit('update:selected', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <div class="relative w-55">
    <select :value="selected" class="w-full appearance-none h-7.5 text-palette-brown border border-solid border-palette-brown rounded-lg px-2.5 outline-none" @change="handleChange">
      <option value="">{{ 'Categorias' }}</option>
      <option v-for="category in categories" :key="category.key" :value="category.slug">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>
