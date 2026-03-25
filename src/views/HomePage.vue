<script setup lang="ts">
import banner1 from '@/assets/imgs/webp/vista_bolsa_palha_macrame_litoral_1.webp'
import iconPalhaFibras from '@/assets/imgs/svg/icon-palha-fibras.svg'
import iconCeramicaBarro from '@/assets/imgs/svg/icon-ceramica-barro-escultura.svg'
import iconCouroMadeira from '@/assets/imgs/svg/icon-couro-madeira.svg'
import iconLitoral from '@/assets/imgs/svg/icon-litoral.svg'
import SectionStandard from '@/components/SectionStandard.vue'
import SearchInput from '@/components/SearchInput.vue'
import FilterDropdown from '@/components/FilterDropdown.vue'
import FeaturedProducts  from '@/components/FeaturedProducts.vue'

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
    <section class="bg-palette-cream min-h-[80vh] lg:px-30.5 pb-30">
      <SectionStandard title="Em destaque" />
      <FeaturedProducts class="px-30"/>
    </section>
    <section class="bg-palette-gray-light h-[80vh] px-30.5">
      <SectionStandard title="Categorias" />
      <div class="grid grid-cols-4 gap-2">
        <article
          class="flex flex-col justify-center items-center bg-palette-brown rounded-[16px] p-[20px] gap-[10px]"
        >
          <img :src="iconPalhaFibras" alt="" />
          <h2 class="text-palette-cream uppercase text-center">Palha e fibras naturais</h2>
        </article>
        <article
          class="flex flex-col justify-center items-center bg-palette-cream rounded-[16px] p-[20px] gap-[10px]"
        >
          <img :src="iconCeramicaBarro" alt="" />
          <h2 class="text-palette-brown uppercase text-center">Cerâmica e Barro</h2>
        </article>
        <article
          class="flex flex-col justify-center items-center bg-palette-brown rounded-[16px] p-[20px] gap-[10px]"
        >
          <img :src="iconCouroMadeira" alt="" />
          <h2 class="text-palette-cream uppercase text-center">Couro e Madeira</h2>
        </article>
        <article
          class="flex flex-col justify-center items-center bg-palette-cream rounded-[16px] p-[20px] gap-[10px]"
        >
          <img :src="iconLitoral" alt="" />
          <h2 class="text-palette-brown uppercase text-center">Litoral</h2>
        </article>
      </div>
    </section>
    <section class="bg-palette-gray-light h-[80vh] px-30.5">
      <SectionStandard title="Produtos" />
      <div class="flex gap-2">
        <SearchInput title="Buscar" />
        <FilterDropdown title="Categorias" />
      </div>
    </section>
  </main>
</template>
