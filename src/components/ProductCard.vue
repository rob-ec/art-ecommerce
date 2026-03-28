<script lang="ts">
import { Product } from '@/model/Product'
import { defineComponent } from 'vue'
import TagInfo from './TagInfo.vue'

export default defineComponent({
  components: { TagInfo },
  props: {
    product: {
      type: Product,
    },
  },
  data() {
    return {
      id: this.product?._id,
      title: this.product?.title,
      oldPrice: this.product?.oldPriceFormatted,
      price: this.product?.priceFormatted,
      image: this.product?.image,
      hasFreeShipping: true,
      discountPercentage: (this.product?.discountPercentage || 0) + ' % OFF',
    }
  },
})
</script>

<template>
  <RouterLink :to="`/product/${id}`">
    <article class="text-gray-900 bg-palette-white p-4 rounded-2xl">
      <div class="">
        <figure class="aspect-square w-full">
          <img :src="('/' + image)" :alt="title" class="w-full h-full object-cover rounded-xl" />
        </figure>
      </div>
      <div class="mt-3">
        <h1 class="text-xl font-semibold mb-1 line-clamp-2 h-14">{{ title }}</h1>
        <p class="text-2xl" v-if="price">{{ price }}</p>
        <p class="text-xs mt-2">{{ discountPercentage }}</p>
        <TagInfo class="mt-3" v-if="hasFreeShipping">Frete Grátis</TagInfo>
      </div>
    </article>
  </RouterLink>
</template>
