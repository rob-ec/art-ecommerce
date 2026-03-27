<script setup lang="ts">
import banner1 from '@/assets/imgs/png/banner-products-hero.png'
import xilogravura from '@/assets/imgs/svg/xilogravura.svg'
import banner2 from '@/assets/imgs/png/banner2-homepage.png'
import SectionStandard from '@/components/SectionStandard.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import CategoryList from '@/components/CategoryList.vue'
import arrowIcon from '@/assets/imgs/svg/Icon-arrow-right.svg'
</script>

<template>
  <main class="bg-palette-cream">
    <section
      class="relative flex flex-row w-full h-full px-30.5 py-[100px] items-center justify-between"
    >
      <img
        :src="xilogravura"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div class="flex flex-col gap-12 text-palette-black relative z-10">
        <p class="tracking-[8px] uppercase font--semin-bold text-palette-orange">Coleção 2026</p>
        <div>
          <h1 class="uppercase text-[48px] font-bold text-palette-brown">
            O verdadeiro ateliê digital
          </h1>
          <p class="max-w-md">
            Objetos com curadoria que celebram o diálogo entre as mãos do fabricante e as
            matérias-primas do Nordeste do Brasil.
          </p>
        </div>
        <router-link
          to="/products"
          class="inline-block text-palette-cream bg-palette-brown px-[32px] py-[16px] rounded-4xl w-fit"
        >
          Conheça a Coleção
        </router-link>
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
        <p>Lorem ipsum dolor.</p>
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
        <p>Lorem ipsum dolor.</p>
        <router-link to="/products" class="flex gap-4 text-palette-brown">
          <p>Ver tudo</p>
          <img :src="arrowIcon" alt="#" />
        </router-link>
      </div>
      <FeaturedProducts />
    </section>
    <section
      class="bg-palette-cream-dark flex flex-col w-full h-full px-30.5 py-[64px] items-center justify-between"
    >
      <SectionStandard title="Categorias" />
      <div
        class="bg-palette-cream-dark flex flex-row w items-center justify-between gap-8 text-palette-black"
      >
        <div class="flex justify-center items-center">
          <img :src="banner2" alt="#" class="w-1/2 flex" />
          <div class="flex flex-col gap-8">
            <p class="max-w-md">
              No Ceará, assim como em diversas regiões do Brasil onde o artesanato tem forte
              presença cultural e econômica, milhares de famílias sobrevivem da produção artesanal.
              Segundo dados do Programa do Artesanato Brasileiro (PAB),
              <strong>o setor movimenta bilhões de reais por ano no país</strong> e representa uma
              importante fonte de renda para pequenos produtores, especialmente no Nordeste, onde o
              trabalho manual está ligado à tradição, à identidade cultural e à economia local.
            </p>
            <router-link
              to="/about"
              class="text-palette-cream-dark bg-palette-green px-[32px] py-[16px] rounded-4xl w-fit"
            >
              Conheça nosso projeto
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
