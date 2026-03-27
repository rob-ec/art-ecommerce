<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import CartItemComponent from './CartItemComponent.vue'
import type { Product } from '@/model/Product'
import { formatCurrency } from '@/utils/formatCurrency'
import cartIcon from '@/assets/icons/cart-icon.svg'

const cartStore = useCartStore()
const {
  list: productList,
  totalInCart: totalItems,
  totalAmount,
  totalAmountWithDiscount,
  economy: economyAmount,
} = storeToRefs(cartStore)

const showCart = ref(false)

function openCart() {
  showCart.value = true
}

function closeCart() {
  showCart.value = false
}

function addItem(product: Product) {
  cartStore.add(product)
}

function removeItem(product: Product) {
  cartStore.remove(product)
}

function deleteItem(product: Product) {
  cartStore.delete(product)
}

const totalPrice = computed(() => formatCurrency(totalAmount.value))
const finalPrice = computed(() => formatCurrency(totalAmountWithDiscount.value))
const economy = computed(() => formatCurrency(economyAmount.value))
</script>

<template>
  <div class="w-fit cursor-pointer" @click="openCart">
    <img :src="cartIcon" alt="" />
  </div>
  <div
    class="fixed inset-0 z-50 flex flex-col min-h-screen overflow-hidden bg-transparent"
    v-if="showCart"
  >
    <div class="absolute inset-0 w-full h-full min-h-[120vh] bg-black/40" @click="closeCart"></div>
    <aside
      class="absolute top-0 right-0 bottom-0 bg-palette-gray-light flex flex-col p-5 w-full max-w-125 overflow-y-auto"
    >
      <h1 class="flex items-center gap-4 text-2xl font-bold mb-10 text-palette-brown font-bold">
        <img :src="cartIcon" alt="" />
        Carrinho de Compras
      </h1>
      <section
        class="flex flex-row flex-wrap items-center gap-12.5 mb-5"
        v-if="productList.length > 0"
      >
        <div class="flex flex-col items-start justify-start gap-2.5 text-palette-brown">
          <span class="text-sm">Quantidade:</span>
          <span class="text-lg font-bold">{{ totalItems }} Itens</span>
        </div>
        <div class="flex flex-col items-start justify-start gap-2.5 text-palette-brown">
          <span class="text-sm">Preço original: </span>
          <span class="text-lg font-bold line-through">{{ totalPrice }}</span>
        </div>
        <div class="flex flex-col items-start justify-start gap-2.5 text-palette-brown">
          <span class="text-sm">Economia: </span>
          <span class="text-lg font-bold text-palette-green">{{ economy }}</span>
        </div>
        <div class="flex flex-col items-start justify-start gap-2.5 text-palette-brown">
          <span class="text-sm">Preço final: </span>
          <span class="text-lg font-bold text-palette-orange">{{ finalPrice }}</span>
        </div>
      </section>
      <section class="flex flex-col gap-2.5 h-fit">
        <div class="flex flex-col items-center text-palette-brown" v-if="productList.length == 0">
          <p>Seu carrinho está vazio</p>
        </div>
        <CartItemComponent
          v-for="item in productList"
          :key="item.product._id"
          :cartItem="item"
          @add-item="addItem(item.product)"
          @remove-item="removeItem(item.product)"
          @delete-item="deleteItem(item.product)"
        />
        <div v-if="productList.length > 0">
          <RouterLink
            to="/checkout"
            class="mt-4 inline-block w-full text-center bg-palette-green text-palette-white py-3 rounded-[16px] font-bold hover:bg-palette-green/90 transition-colors"
          >
            Finalizar Compra
          </RouterLink>
        </div>
      </section>
    </aside>
  </div>
</template>
