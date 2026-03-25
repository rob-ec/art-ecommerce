<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    stars() {
      const starsCount = this.rating > 5 ? 5 : this.rating < 0 ? 0 : this.rating
      return Math.floor(starsCount)
    },
    emptyStars() {
      return 5 - this.stars
    },
  },
})
</script>
<template>
  <div class="flex flex-row gap-1">
    <i
      class="pi pi-star-fill"
      style="color: var(--color-palette-yellow); font-size: 20px;"
      v-for="star in stars"
      :key="star"
    ></i>
    <i
      class="pi pi-star"
      style="color: var(--color-palette-yellow); opacity: 0.5; font-size: 20px;"
      v-for="star in emptyStars"
      :key="star"
    ></i>
  </div>
</template>
