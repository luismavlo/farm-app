// Generated by https://quicktype.io

export interface ProductResponse {
  status: string
  products: Product[]
}

export interface UniqueProductResponse {
  status: string
  product: Product
}

export interface Product {
  id?: number
  name: string
  image: string
  ingredients: string
  quantity: string
  price: number
  isNew?: boolean
  description: string
  createdAt?: string
  updatedAt?: string
}