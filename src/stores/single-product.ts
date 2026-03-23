import type { ProductData } from '@/model/Product'
import { Product } from '@/model/Product'
import { defineStore } from 'pinia'

import products from '@/mock/products.json'

export const useProduct = defineStore('products', {
  state: () => ({
    product: null as Product | null,
    error: null as string | null,
  }),
  actions: {
    async fetchProduct(id: number | string) {
      this.product = null
      this.error = null

      try {
        // const response = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
        // if (!response.ok) throw new Error('Produto não encontrado')
        // const data = await response.json()

        // usando mock
        const foundProduct = (products.data as unknown as ProductData[]).find(
          (product: ProductData) => String(product._id) === String(id),
        )

        if (foundProduct) {
          this.product = Product.create(foundProduct)
        } else {
          this.error = 'Produto não encontrado'
        }
      } catch (error) {
        console.error('Error fetching products:', error)
        this.error = 'Erro ao buscar os detalhes do produto'
      }
    },
  },
})
