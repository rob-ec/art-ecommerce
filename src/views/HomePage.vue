<script setup lang="ts">
import banner1 from '@/assets/imgs/png/banner-products-hero.png'
import banner2 from '@/assets/imgs/png/banner2-homepage.png'
import SectionStandard from '@/components/SectionStandard.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import CategoryList from '@/components/CategoryList.vue'
import arrowIcon from '@/assets/imgs/svg/icon-arrow-right.svg'
</script>

<template>
  <main class="bg-palette-cream">
    <section class="flex flex-row w-full h-full px-30.5 py-[64px] items-center justify-between">
      <div class="flex flex-col gap-12 text-palette-black">
        <p>COLEÇÃO 2026</p>
        <div>
          <h1 class="uppercase text-[48px] font-bold">O verdadeiro ateliê digital</h1>
          <p class="max-w-md">
            Objetos com curadoria que celebram o diálogo entre as mãos do fabricante e as
            matérias-primas do Nordeste do Brasil.
          </p>
        </div>
        <div class="flex gap-5 items-center">
          <a
            href="#"
            class="text-palette-white bg-palette-brown px-[32px] py-[16px] rounded-4xl w-fit"
            >Conheça a Coleção</a
          >
        </div>
      </div>
      <img
        :src="banner1"
        alt="Banner com bolsa de palha e macramé da coleção
      Nord Art"
        class="w-1/2 flex justify-end"
      />
    </section>
    <section class="bg-palette-cream-dark h-full px-30.5 py-[64px] text-palette-black">
      <!-- <SectionStandard title="Categorias" /> -->
      <SectionStandard title="Categorias" />
      <div class="text-palette-brown flex flex-row w-full items-center justify-between">
        <p>Domínio categorizado por meio e movimento.</p>
        <router-link to="/categories" class="flex gap-4 text-palette-brown">
          <p>Ver tudo</p>
          <img :src="arrowIcon" alt="#" />
        </router-link>
      </div>
      <CategoryList />
    </section>
    <section class="h-full px-30.5 py-[64px] pb-30">
      <SectionStandard title="Em destaque" />
      <div class="text-palette-brown flex flex-row w-full items-center justify-between">
        <p>Domínio categorizado por meio e movimento.</p>
        <router-link to="/products" class="flex gap-4 text-palette-brown">
          <p>Ver tudo</p>
          <img :src="arrowIcon" alt="#" />
        </router-link>
      </div>
      <FeaturedProducts />
    </section>
    <section
      class="bg-palette-cream-dark flex flex-row w-full h-full px-30.5 py-[64px] items-center justify-between"
    >
      <div class="flex flex-row w-full items-center justify-between gap-8 text-palette-black">
        <img :src="banner2" alt="#" class="w-1/2 flex justify-end" />
        <div class="flex flex-col gap-8">
          <h2 class="uppercase text-3xl font-bold">As mãos por trás da arte</h2>
          <p class="max-w-md">
            No Ceará, assim como em diversas regiões do Brasil onde o artesanato tem forte presença
            cultural e econômica, milhares de famílias sobrevivem da produção artesanal. Segundo
            dados do Programa do Artesanato Brasileiro (PAB),
            <strong>o setor movimenta bilhões de reais por ano no país</strong> e representa uma
            importante fonte de renda para pequenos produtores, especialmente no Nordeste, onde o
            trabalho manual está ligado à tradição, à identidade cultural e à economia local.
          </p>
          <router-link
            to="/about"
            class="text-palette-white bg-palette-green px-[32px] py-[16px] rounded-4xl w-fit"
          >
            Conheça nosso projeto
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
