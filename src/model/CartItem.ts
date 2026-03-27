import { formatCurrency } from '@/utils/formatCurrency'
import type { Product } from './Product'

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get price(): number {
    return this.product.price * this.quantity
  }

  get discountedPrice(): number {
    return this.product.discountedPrice * this.quantity
  }

  get economy(): number {
    return this.price - this.discountedPrice
  }

  get priceFormatted(): string {
    return formatCurrency(this.price)
  }

  get discountedPriceFormatted(): string {
    return formatCurrency(this.discountedPrice)
  }

  get economyFormatted(): string {
    return formatCurrency(this.economy)
  }

  get hasDiscount(): boolean {
    return this.product.hasDiscount
  }

  get discountPercentage(): number {
    return this.product.discountPercentage
  }
}
