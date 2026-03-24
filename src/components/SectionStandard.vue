<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h2 class="text-3xl font-regular text-palette-orange text-center pt-[80px] pb-[20px] uppercase">
      {{ props.title }}
    </h2>

    <hr class="border-palette-orange w-[50vw] mx-auto" />
  </div>
</template>
