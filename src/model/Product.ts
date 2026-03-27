import { formatCurrency } from "@/utils/formatCurrency";
import type { Category } from "./Category";

export interface ProductData {
  _id: number | string;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: number;
  discountedPrice: number;
  description: string;
  category: string | Category;
  type: string;
  stock: number;
  brand: string;
  size: string[];
  image: string;
  gallery: string[];
  rating: number;
}

export class Product implements ProductData {
  constructor(
    public _id: number | string,
    public title: string,
    public isNew: boolean,
    public oldPrice: string,
    public price: number,
    public discountedPrice: number,
    public description: string,
    public category: string | Category,
    public type: string,
    public stock: number,
    public brand: string,
    public size: string[],
    public image: string,
    public gallery: string[],
    public rating: number,
  ) {}

  get key(): string {
    return `${this._id}`;
  }

  get oldPriceFormatted(): string {
    return formatCurrency(this.oldPrice as unknown as number);
  }

  get priceFormatted(): string {
    return formatCurrency(this.price);
  }

  get discountedPriceFormatted(): string {
    return formatCurrency(this.discountedPrice);
  }

  get discountPercentage(): number {
    return Math.round(((this.price - this.discountedPrice) / this.price) * 100);
  }

  get hasDiscount(): boolean {
    return this.price !== this.discountedPrice;
  }

  static create(data: ProductData): Product {
    return new Product(
      data._id,
      data.title,
      data.isNew,
      data.oldPrice,
      data.price,
      data.discountedPrice,
      data.description,
      data.category,
      data.type,
      data.stock,
      data.brand,
      data.size,
      data.image,
      data.gallery,
      data.rating,
    );
  }
}
