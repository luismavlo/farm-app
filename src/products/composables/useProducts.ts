import type { ProductResponse, Product } from '../interfaces/products'
import { useQuery } from '@tanstack/vue-query'
import cafeApi from '@/api/cafe-api'
import { useProductStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const getProducts = async (): Promise<Product[]> => {
  const { data } = await cafeApi.get<ProductResponse>('/products')
  return data.products
}

const useProducts = () => {
  const store = useProductStore()
  const { products } = storeToRefs(store)

  const { isLoading, data } = useQuery(['products'], () => getProducts())

  watch(data, (products) => {
    if (products) store.setProducts(products)
  })

  return {
    //propierties
    isLoading,
    products
  }
}

export default useProducts
