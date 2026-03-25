<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from '@/model/Category'

export default defineComponent({
  props: {
    category: {
      type: Category,
    },
  },
  data() {
    return {
      id: this.category?._id,
      name: this.category?.name,
      slug: this.category?.slug,
      image: this.category?.image,
      description: this.category?.description,
      themeBackground: this.category?.theme,
      themeText: this.category?.theme === 'brown' ? 'cream' : 'brown',
    }
  },
})
</script>
<template>
  <RouterLink :to="`/products?category=${slug}`">
    <article
      :class="[
        'flex flex-col justify-center items-center rounded-2xl p-5 gap-2.5',
        `bg-palette-${themeBackground}`,
      ]"
    >
      <img :src="image" alt="" />
      <h2 :class="['uppercase text-center', `text-palette-${themeText}`]">{{ name }}</h2>
    </article>
  </RouterLink>
</template>
