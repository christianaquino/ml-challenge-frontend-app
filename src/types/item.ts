export interface IPrice {
  currency: string,
  amount: Number
}

export interface IItem {
  id: string,
  picture: string,
  title: string,
  price: IPrice
  condition: string
  free_shipping: boolean
}

export interface IItemDetails extends IItem {
  sold_quantity: Number,
  description: string
}
