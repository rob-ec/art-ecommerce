<script setup lang="ts">
import RatingStars from '@/components/RatingStars.vue'
import TagInfo from '@/components/TagInfo.vue'
import { useCartStore } from '@/stores/cart'
import { useProduct } from '@/stores/single-product'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonAddToCart from './ButtonAddToCart.vue'
import ButtonBuy from './ButtonBuy.vue'

const route = useRoute()
const router = useRouter()
const store = useProduct()
const cartStore = useCartStore()
const { product, error } = storeToRefs(store)

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      store.fetchProduct(newId as string)
    }
  },
  { immediate: true },
)

function buyNow() {
  cartStore.clear()
  cartStore.add(product.value!)
  router.push('/checkout')
}
</script>

<template>
  <main class="px-30.5 py-[100px]">
    <div v-if="error">{{ error }}</div>

    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-900">
      <div
        class="flex flex-col col-span-1 lg:col-span-2 justify-start align-center p-0 rounded-xl overflow-hidden gap-4"
      >
        <div class="flex justify-center max-h-120 p-0">
          <img :src="product.image" class="rounded-xl h-full object-contain" />
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="aspect-square bg-palette-white w-16 md:w-24 rounded-xl border border-palette-gray"
            v-for="item in 3"
            :key="item"
          ></div>
          <div
            class="aspect-square bg-palette-gray w-16 md:w-24 rounded-xl border border-palette-white"
          ></div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <RatingStars :rating="product.rating" />
          <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-gray-500 line-through">{{ product.oldPriceFormatted }}</p>
          <h2 class="text-2xl">{{ product.priceFormatted }}</h2>
          <p class="text-xs">{{ product.discountPercentage }}% OFF</p>
          <TagInfo>Frete Grátis</TagInfo>
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="font-semibold">Descrição</h3>
          <p class="text-lg font-light">{{ product.description }}</p>
        </div>
        <div class="flex flex-col gap-2 w-fit">
          <ButtonAddToCart @click="cartStore.add(product!)">Adicionar ao carrinho</ButtonAddToCart>
          <ButtonBuy @click="buyNow">Comprar agora</ButtonBuy>
        </div>
      </div>
    </div>
  </main>
</template>
