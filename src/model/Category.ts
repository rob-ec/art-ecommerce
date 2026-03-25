export interface CategoryData {
  _id?: number
  name: string
  slug?: string
  description?: string
  image?: string
  theme?: string
}

export class Category implements CategoryData {
  constructor(
    public _id: number,
    public name: string,
    public slug: string = '',
    public description: string = '',
    public image: string = '',
    public theme: string = '',
  ) {}

  get key() {
    return this._id || this.name
  }

  static create(data: CategoryData): Category {
    return new Category(
      data._id || 0,
      data.name || '',
      data.slug || '',
      data.description || '',
      data.image || '',
      data.theme || '',
    )
  }
}
