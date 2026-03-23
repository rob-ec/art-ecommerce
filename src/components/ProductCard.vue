<script lang="ts">
import { Product } from '@/model/Product'
import { defineComponent } from 'vue'

export default defineComponent({
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
    <article class="product">
      <div class="">
        <figure class="">
          <img :src="image" :alt="title" class="" />
        </figure>
      </div>
      <div class="">
        <h1 class="text-xl mb-2">{{ title }}</h1>
        <p class="" v-if="price">{{ price }}</p>
        <p class="">{{ discountPercentage }}</p>
        <p class="" v-if="hasFreeShipping">Frete Grátis</p>
      </div>
    </article>
  </RouterLink>
</template>
