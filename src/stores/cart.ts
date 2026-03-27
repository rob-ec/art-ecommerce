import { defineStore } from 'pinia'
import { Cart } from '@/model/Cart'
import { CartItem } from '@/model/CartItem'
import { Product, type ProductData } from '@/model/Product'

const CART_STORAGE_KEY = 'cart'

/**
 * Carrega o carrinho do local storage e re-hidrata as instâncias da classe.
 * Objetos simples de JSON.parse() não possuem os métodos e getters das classes originais.
 */
function loadCartFromStorage(): Cart {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY)
  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart)
      if (parsed && Array.isArray(parsed.list)) {
        const cartItems = parsed.list.map(
          (item: { product: ProductData; quantity: number }) => {
            const productInstance = Product.create(item.product)
            return new CartItem(productInstance, item.quantity)
          }
        )
        return new Cart(cartItems)
      }
    } catch (e) {
      console.error('Falha ao analisar o carrinho do localStorage', e)
      return new Cart()
    }
  }
  return new Cart()
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: loadCartFromStorage(),
    showCart: false,
  }),

  getters: {
    list: (state): CartItem[] => state.cart.list,
    totalInCart: (state): number => state.cart.totalInCart,
    totalAmount: (state): number => state.cart.totalAmount,
    totalAmountWithDiscount: (state): number => state.cart.totalAmountWithDiscount,
    economy: (state): number => state.cart.economy
  },

  actions: {
    saveCart() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart))
    },
    add(product: Product, quantity: number = 1) {
      this.cart.add(product, quantity)
      this.saveCart()
    },
    remove(product: Product, quantity: number = 1) {
      this.cart.remove(product, quantity)
      this.saveCart()
    },
    delete(product: Product) {
      this.cart.delete(product)
      this.saveCart()
    },
    clear() {
      this.cart.clear()
      this.saveCart()
    },
    presentCart() {
      this.showCart = true
    },
    hideCart() {
      this.showCart = false
    },
  }
})
