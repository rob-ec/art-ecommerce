<script setup lang="ts">
import searchIconLight from '@/assets/icons/search-icon.svg'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="relative w-fit">
    <img :src="searchIconLight" alt="Buscar" class="absolute left-2 top-1/2 -translate-y-1/2" />
    <input
      type="text"
      name="search"
      id="search"
      :placeholder="props.title"
      class="pl-8 text-palette-brown border-1 border-solid border-palette-brown rounded-[8px] py-[2px] px-[10px] outline-none"
    />
  </div>
</template>
