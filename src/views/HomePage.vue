<script setup lang="ts">
import banner1 from '@/assets/imgs/webp/vista_bolsa_palha_macrame_litoral_1.webp'
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
    <section class="bg-palette-cream h-[80vh]">
      <div>
        <h2
          class="text-3xl font-regular text-palette-orange text-center pt-[80px] pb-[20px] uppercase"
        >
          Em destaque
        </h2>
        <hr class="border-palette-orange w-[50vw] mx-auto" />
      </div>
    </section>
    <section class="bg-palette-gray-light h-[80vh]">
      <div>
        <h2
          class="text-3xl font-regular text-palette-orange text-center pt-[80px] pb-[20px] uppercase"
        >
          Categorias
        </h2>
        <hr class="border-palette-orange w-[50vw] mx-auto" />
      </div>
      <article></article>
    </section>
    <section class="bg-palette-gray-light h-[80vh]">
      <div>
        <h2
          class="text-3xl font-regular text-palette-orange text-center pt-[80px] pb-[20px] uppercase"
        >
          Produtos
        </h2>
        <hr class="border-palette-orange w-[50vw] mx-auto" />
      </div>
      <article></article>
    </section>
  </main>
</template>
