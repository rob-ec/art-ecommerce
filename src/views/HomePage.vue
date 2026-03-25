<script setup lang="ts">
import banner1 from '@/assets/imgs/webp/vista_bolsa_palha_macrame_litoral_1.webp'
import SectionStandard from '@/components/SectionStandard.vue'
import FeaturedProducts  from '@/components/FeaturedProducts.vue'
import CategoryList from '@/components/CategoryList.vue'

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
    <section class="bg-palette-cream min-h-80vh lg:px-30.5 pb-30">
      <SectionStandard title="Em destaque" />
      <FeaturedProducts class="px-30"/>
    </section>
    <section class="bg-palette-gray-light min-h-80vh px-30.5">
      <SectionStandard title="Categorias" />
      <CategoryList />
    </section>
  </main>
</template>
