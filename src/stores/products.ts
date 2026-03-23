import type { ProductData } from '@/model/Product'
import { Product } from '@/model/Product'
import { defineStore } from 'pinia'

import products from '@/mock/products.json'

export const useProducts = defineStore('products', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      try {
        // const response = await fetch('https://fakestoreapiserver.reactbd.org/api/products')
        // const data = await response.json()

        // usando mock
        this.products = (products.data).map((product: ProductData) =>
          Product.create(product),
        )
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
})
