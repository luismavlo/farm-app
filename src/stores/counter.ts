import type { Product } from '@/products/interfaces/products'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])

  return {
    //State propiertes
    products,
    //getters

    //actions
    setProducts(newProducts: Product[]) {
      products.value = newProducts
    }
  }
})
