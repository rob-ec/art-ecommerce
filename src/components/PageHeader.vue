<script setup>
import logo from '@/assets/imgs/svg/logo-nord-art-header.svg'
import cartIcon from '@/assets/imgs/svg/cart-icon.svg'
import searchIcon from '@/assets/imgs/svg/search-icon.svg'
</script>

<template>
  <div class="bg-[#F5F5F5] flex items-center px-[122px] py-[24px] flex-row justify-between">
    <div>
      <img :src="logo" class="h-10" />
    </div>
    <nav class="flex flex-row justify-center gap-[20px]">
      <RouterLink to="/products" class="text-[#4f6d3a] hover:text-[#D96C2B]">PRODUTOS</RouterLink>
      <RouterLink to="/ctegories" class="text-[#4f6d3a] hover:text-[#D96C2B]"
        >CATEGORIAS</RouterLink
      >
      <RouterLink to="/about" class="text-[#4f6d3a] hover:text-[#D96C2B]">SOBRE</RouterLink>
    </nav>
    <div class="flex gap-[20px]">
      <img :src="searchIcon" />
      <img :src="cartIcon" />
    </div>
  </div>
</template>
