import { defineStore } from 'pinia'

import categories from '@/mock/categories.json'
import { Category, type CategoryData } from '@/model/Category'

export const useCategories = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
  }),
  actions: {
    async fetchCategories() {
      try {
        // const response = await fetch('https://fakestoreapiserver.reactbd.org/api/categories')
        // const data = await response.json()

        // usando mock
        this.categories = (categories.data).map((product: CategoryData) =>
          Category.create(product),
        )
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
  },
})
