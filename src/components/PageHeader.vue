<script setup lang="ts">
import logo from '@/assets/imgs/svg/logo-nord-art-header.svg'
import cartIcon from '@/assets/imgs/svg/cart-icon.svg'
import searchIcon from '@/assets/imgs/svg/search-icon.svg'
</script>

<template>
  <div class="bg-palette-gray-light flex items-center px-30.5 py-6 flex-row justify-between">
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
      <img :src="searchIcon" class="w-5 h-5"/>
      <img :src="cartIcon" class="w-5 h-5"/>
    </div>
  </div>
</template>
