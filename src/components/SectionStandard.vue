<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h2 class="text-3xl font-regular text-palette-orange pb-[20px] uppercase">
      {{ props.title }}
    </h2>

    <hr class="border-palette-orange mb-[10px]" />
  </div>
</template>
