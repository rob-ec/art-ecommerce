export interface CategoryData {
  _id?: number
  name: string
  description?: string
  image?: string
}

export class Category implements CategoryData {
  constructor(
    public _id: number,
    public name: string,
    public description: string = '',
    public image: string = '',
  ) {}

  get key() {
    return this._id || this.name
  }
}
