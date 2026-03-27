<script setup lang="ts">
import iconMap from '@/assets/icons/Icon-map.svg'
import iconMail from '@/assets/icons/Icon-mail.svg'
</script>

<template>
  <footer
    class="flex bg-palette-green text-palette-cream font-light px-30.5 py-[64px] gap-[48px] justify-between items-top"
  >
    <div>
      <h3 class="text-2xl font-bold">Seu ateliê digital</h3>
      <p>
        Honrando o movimento de artesanato através de uma seleção com curadoria de produtos
        artesanais.
      </p>
    </div>
    <div>
      <h3 class="text-xl font-bold">Artesanato</h3>
      <ul>
        <li><a href="#">Sobre o ofício</a></li>
        <li><a href="#">Nossos Parçeiros</a></li>
        <li><a href="#">Sustentabilidade</a></li>
        <li><a href="#">Diário</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-bold">Serviços</h3>
      <ul>
        <li><a href="#">Transporte</a></li>
        <li><a href="#">Devoluções</a></li>
        <li><a href="#">Privacidade</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-xl font-bold">Conectar</h3>
      <ul class="flex gap-[8px]">
        <li>
          <a href="#"><img :src="iconMap" alt="" /></a>
        </li>
        <li>
          <a href="#"><img :src="iconMail" alt="" /></a>
        </li>
      </ul>
      <p class="text-xs">© 2026 Nordeste Artesão</p>
    </div>
  </footer>
</template>
