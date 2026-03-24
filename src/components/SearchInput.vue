<script setup lang="ts">
import searchIconLight from '@/assets/imgs/svg/search-icon-light.svg'

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
      class="pl-8 text-palette-orange border-1 border-solid border-palette-orange rounded-[8px] py-[2px] px-[10px]"
    />
  </div>
</template>
