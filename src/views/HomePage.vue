<script setup lang="ts">
import banner1 from '@/assets/imgs/webp/vista_bolsa_palha_macrame_litoral_1.webp'
import SectionStandard from '@/components/SectionStandard.vue'
</script>

<template>
  <main>
    <section>
      <img
        :src="banner1"
        alt="Banner com bolsa de palha e macramé da coleção
      Nord Art"
        class="w-full"
      />
    </section>
    <section class="bg-palette-cream h-[80vh] px-30.5">
      <SectionStandard title="Em destaque" />
    </section>
    <section class="bg-palette-gray-light h-[80vh] px-30.5">
      <SectionStandard title="Categorias" />
    </section>
    <section class="bg-palette-gray-light h-[80vh] px-30.5">
      <SectionStandard title="Produtos" />
    </section>
  </main>
</template>
