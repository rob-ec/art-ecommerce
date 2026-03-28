<script setup lang="ts">
import logo from '@/assets/imgs/svg/logo-nordeste-artesao.svg'
import searchIcon from '@/assets/icons/search-icon.svg'
import CartComponent from './CartComponent.vue'
</script>

<template>
  <div
    class="fixed w-full top-0 left-0 z-11 bg-palette-white flex items-center px-30.5 py-6 flex-row justify-between border-b border-palette-gray"
  >
    <RouterLink to="/" class="cursor-pointer">
      <img :src="logo" class="h-10" />
    </RouterLink>
    <nav class="flex flex-row justify-center gap-5">
      <RouterLink to="/products" class="text-palette-green hover:text-palette-orange uppercase">
        Produtos
      </RouterLink>
      <RouterLink to="/categories" class="text-palette-green hover:text-palette-orange uppercase">
        Categorias
      </RouterLink>
      <RouterLink to="/about" class="text-palette-green hover:text-palette-orange uppercase">
        Sobre
      </RouterLink>
    </nav>
    <div class="flex gap-5">
      <img :src="searchIcon" class="w-5 h-5" />
      <CartComponent />
    </div>
  </div>
</template>
