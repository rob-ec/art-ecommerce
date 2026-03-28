<script lang="ts">
import { defineComponent } from 'vue'
import { CartItem } from '@/model/CartItem'
import { formatCurrency } from '@/utils/formatCurrency'

export default defineComponent({
  components: {},
  props: {
    cartItem: {
      type: CartItem,
    },
  },
  computed: {
    quantity(): number {
      return this.cartItem?.quantity ?? 1
    },
    price(): string {
      return formatCurrency(this.cartItem?.discountedPrice ?? 0)
    },
  },
  data() {
    return {
      title: this.cartItem?.product?.title ?? '',
      image: this.cartItem?.product?.image ?? '',
    }
  },
  emits: ['remove-item', 'add-item', 'delete-item'],
})
</script>
<template>
  <article class="bg-white text-gray-900 rounded-[16px] flex flex-row gap-2.5 p-0 overflow-hidden">
    <div class="flex basis-112.5 flex-row gap-5 overflow-hidden">
      <figure class="items-center bg-white flex basis-50 h-25 justify-center w-50">
        <img :src="('/' + image)" :alt="title" class="w-full h-full object-cover" />
      </figure>
      <h2 class="basis-62.5 font-bold self-center">
        {{ title }}
      </h2>
    </div>
    <div class="items-center flex flex-col flex-1 gap-2.5 justify-center">
      <div class="items-center flex gap-2.5">
        <button
          class="bg-(--color-background-soft) rounded-full border border-solid border-palette-gray cursor-pointer w-8 h-8 py-0.5 px-2.5 hover:border-palette-brown transition-colors"
          @click="$emit('remove-item')"
        >
          -
        </button>
        {{ quantity }}
        <button
          class="bg-(--color-background-soft) rounded-full border border-solid border-palette-gray cursor-pointer w-8 h-8 py-0.5 px-2.5 hover:border-palette-brown transition-colors"
          @click="$emit('add-item')"
        >
          +
        </button>
      </div>
    </div>
    <div class="items-center flex basis-37.5 font-bold justify-end p-2.5">
      {{ price }}
    </div>
    <div class="items-center flex basis-25 justify-end mr-5">
      <button
        class="appearance-none cursor-pointer hover:text-rose-700 transition-colors"
        @click="$emit('delete-item')"
      >
        <i class="pi pi-trash"></i>
      </button>
    </div>
  </article>
</template>
